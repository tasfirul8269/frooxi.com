#!/usr/bin/env python3
"""
Build a concise project brief and a final summary from Q&A data.

Usage (Windows / PowerShell):
  # Write markdown brief + summary files (default)
  python scripts/build_brief.py \
    --input qa.json \
    --brief-out docs/brief.md \
    --summary-out docs/summary.md \
    --max-brief-sentences 8 \
    --max-summary-sentences 3

  # Print a single organized narrative brief to stdout (good for chat output)
  python scripts/build_brief.py --format narrative --stdout

Defaults:
  --input qa.json
  --brief-out docs/brief.md
  --summary-out docs/summary.md
  --max-brief-sentences 8
  --max-summary-sentences 3

Input JSON format (array of objects):
[
  { "question": "What is the project about?", "answer": "..." },
  { "question": "Target users?", "answer": "..." }
]

This script uses only the Python standard library.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from dataclasses import dataclass
from typing import List, Tuple, Dict, Iterable, Set, DefaultDict
from collections import defaultdict


# Simple English stopwords list (minimal, extend as needed)
STOPWORDS: Set[str] = {
    "a","an","the","and","or","but","if","then","than","that","this","those","these","to","of","in","on","for","from","at","by","with","as","it","its","be","is","are","was","were","am","will","would","can","could","should","may","might","have","has","had","do","does","did","not","no","yes","we","you","they","he","she","them","his","her","our","their","us","your","i","me","my","mine","ours","yours","theirs","about","into","over","under","between","within","without","across","per","via","also","so","such","just","very","more","most","less","least","same","own","each","every","any","some","much","many","few","several","lot","lots","there","here","up","down","out","off","onto","again","new","old"
}

SENTENCE_SPLIT_RE = re.compile(r"(?<=[.!?])\s+(?=[A-Z0-9])")
TOKEN_RE = re.compile(r"[A-Za-z0-9']+")


@dataclass
class QA:
    question: str
    answer: str


def read_qa(path: str) -> List[QA]:
    if not os.path.exists(path):
        raise FileNotFoundError(f"Input file not found: {path}")
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, list):
        raise ValueError("Input JSON must be a list of {question, answer} objects")
    out: List[QA] = []
    for i, item in enumerate(data):
        if not isinstance(item, dict):
            raise ValueError(f"Item {i} is not an object")
        q = str(item.get("question", "")).strip()
        a = str(item.get("answer", "")).strip()
        if not a:
            # Skip entries with empty answer
            continue
        out.append(QA(question=q, answer=a))
    return out


def split_sentences(text: str) -> List[str]:
    text = text.strip()
    if not text:
        return []
    # First split by common sentence boundaries; fallback to original if only one.
    parts = SENTENCE_SPLIT_RE.split(text)
    # Normalize whitespace and strip
    parts = [re.sub(r"\s+", " ", p).strip() for p in parts if p and p.strip()]
    return parts


def tokenize(text: str) -> List[str]:
    return [t.lower() for t in TOKEN_RE.findall(text)]


def keywords_freq(sentences: Iterable[str]) -> Dict[str, float]:
    freq: Dict[str, int] = {}
    for s in sentences:
        for tok in tokenize(s):
            if tok in STOPWORDS:
                continue
            freq[tok] = freq.get(tok, 0) + 1
    if not freq:
        return {}
    max_freq = max(freq.values())
    # Normalize frequencies to 0..1
    return {k: v / max_freq for k, v in freq.items()}


def sentence_score(sentence: str, kw: Dict[str, float]) -> float:
    toks = tokenize(sentence)
    if not toks:
        return 0.0
    # Score by keyword weights, length moderation, and small boost for colon/bullet structures
    score = 0.0
    for t in toks:
        if t in STOPWORDS:
            continue
        score += kw.get(t, 0.0)
    length = len(toks)
    # Prefer moderate length sentences (8..30 tokens)
    if 8 <= length <= 30:
        score *= 1.15
    elif length < 5:
        score *= 0.6
    elif length > 45:
        score *= 0.8
    if ":" in sentence or "- " in sentence or "•" in sentence:
        score *= 1.05
    return score


def jaccard_similarity(a: str, b: str) -> float:
    sa = {t for t in tokenize(a) if t not in STOPWORDS}
    sb = {t for t in tokenize(b) if t not in STOPWORDS}
    if not sa or not sb:
        return 0.0
    inter = len(sa & sb)
    union = len(sa | sb)
    return inter / union if union else 0.0


def dedupe(sentences: List[Tuple[str, float]], threshold: float = 0.6) -> List[Tuple[str, float]]:
    out: List[Tuple[str, float]] = []
    for s, sc in sentences:
        keep = True
        for s2, _ in out:
            if jaccard_similarity(s, s2) >= threshold:
                keep = False
                break
        if keep:
            out.append((s, sc))
    return out


def ensure_dir(path: str) -> None:
    d = os.path.dirname(path)
    if d and not os.path.exists(d):
        os.makedirs(d, exist_ok=True)


def build_brief_and_summary(qas: List[QA], max_brief: int, max_summary: int) -> Tuple[List[str], List[str]]:
    # Prepare per-question candidates (top 1 per question to ensure coverage)
    per_question_best: List[Tuple[str, float]] = []
    all_sentences: List[str] = []

    for qa in qas:
        sents = split_sentences(qa.answer)
        if not sents:
            continue
        kw = keywords_freq(sents)
        scored = sorted(((s, sentence_score(s, kw)) for s in sents), key=lambda x: x[1], reverse=True)
        if scored:
            per_question_best.append(scored[0])
        all_sentences.extend(sents)

    # Global scoring across all sentences
    global_kw = keywords_freq(all_sentences)
    globally_scored = sorted(((s, sentence_score(s, global_kw)) for s in all_sentences), key=lambda x: x[1], reverse=True)

    # Start brief with per-question coverage, then fill with top global sentences
    brief_candidates: List[Tuple[str, float]] = []
    brief_candidates.extend(per_question_best)

    # Add more from global list (without duplicates)
    seen: Set[str] = {s for s, _ in brief_candidates}
    for s, sc in globally_scored:
        if s in seen:
            continue
        brief_candidates.append((s, sc))
        seen.add(s)

    # Dedupe similar and trim
    brief_deduped = dedupe(brief_candidates, threshold=0.6)
    brief_sorted = sorted(brief_deduped, key=lambda x: x[1], reverse=True)[:max_brief]
    brief_sentences = [s for s, _ in brief_sorted]

    # Final summary from top global sentences, deduped and trimmed
    summary_deduped = dedupe(globally_scored, threshold=0.55)
    summary_sorted = sorted(summary_deduped, key=lambda x: x[1], reverse=True)[:max_summary]
    summary_sentences = [s for s, _ in summary_sorted]

    return brief_sentences, summary_sentences


def render_markdown_brief(qas: List[QA], brief_sentences: List[str], summary_sentences: List[str]) -> str:
    lines: List[str] = []
    lines.append("# Project Brief")
    lines.append("")

    # Optional: map brief sentences back to questions for grouping
    sent_set = set(brief_sentences)
    grouped: List[Tuple[str, List[str]]] = []
    for qa in qas:
        sents = split_sentences(qa.answer)
        picks = [s for s in sents if s in sent_set]
        if picks:
            title = qa.question if qa.question else "Answer"
            grouped.append((title, picks))

    if grouped:
        for title, picks in grouped:
            lines.append(f"## {title}")
            for s in picks:
                lines.append(f"- {s}")
            lines.append("")
    else:
        # Fallback: ungrouped bullet list
        for s in brief_sentences:
            lines.append(f"- {s}")
        lines.append("")

    lines.append("---")
    lines.append("")
    lines.append("## Final Summary")
    if summary_sentences:
        paragraph = " ".join(summary_sentences)
        lines.append(paragraph)
    else:
        lines.append("(No summary available)")
    lines.append("")

    return "\n".join(lines)


def render_markdown_summary(summary_sentences: List[str]) -> str:
    lines = ["# Project Summary", ""]
    if summary_sentences:
        lines.append(" ".join(summary_sentences))
    else:
        lines.append("(No summary available)")
    lines.append("")
    return "\n".join(lines)


# Lightweight heuristic classifier to organize a narrative brief
CATEGORY_KEYWORDS: Dict[str, Set[str]] = {
    "audience": {"audience", "users", "customers", "store owners", "creators", "teams", "admin", "buyer", "seller"},
    "features": {"features", "pos", "point of sale", "inventory", "analytics", "dashboard", "subscription", "tiers", "invoice", "products", "transactions", "terminal", "gated", "downloads"},
    "pages": {"pages", "content", "dashboard", "terminal", "transaction", "products", "invoice", "settings"},
    "integrations": {"integration", "integrations", "stripe", "payment", "payments", "auth", "email", "smtp", "oauth"},
    "tech": {"react", "next.js", "node", "express", "postgres", "serverless", "cdn", "api", "frontend", "backend"},
    "budget": {"budget", "$", "usd"},
    "timeline": {"timeline", "deadline", "month", "week", "day", "schedule"},
    "idea": {"idea", "goal", "objective", "build", "create", "system", "platform", "website", "app"}
}


def classify_sentence(sentence: str) -> str:
    toks = set(tokenize(sentence))
    best_cat = "other"
    best_hits = 0
    for cat, kws in CATEGORY_KEYWORDS.items():
        hits = sum(1 for k in kws if k in toks)
        if hits > best_hits:
            best_hits = hits
            best_cat = cat
    return best_cat


def render_narrative_brief(brief_sentences: List[str], summary_sentences: List[str]) -> str:
    # Assign sentences to categories
    buckets: DefaultDict[str, List[str]] = defaultdict(list)
    for s in brief_sentences:
        buckets[classify_sentence(s)].append(s)

    # Choose lead line: prefer an idea or top summary
    lead = None
    if buckets.get("idea"):
        lead = buckets["idea"][0]
    elif summary_sentences:
        lead = summary_sentences[0]
    else:
        lead = brief_sentences[0] if brief_sentences else ""

    # Build narrative parts
    parts: List[str] = []
    if lead:
        parts.append(lead)

    if buckets.get("audience"):
        parts.append("It is designed for " + buckets["audience"][0].rstrip('.') + ".")

    if buckets.get("features") or buckets.get("pages"):
        combined = []
        if buckets.get("features"):
            combined.append(buckets["features"][0])
        if buckets.get("pages"):
            combined.append(buckets["pages"][0])
        if combined:
            parts.append("Core scope includes: " + "; ".join(combined).rstrip('.') + ".")

    if buckets.get("integrations"):
        parts.append("Planned integrations: " + "; ".join(buckets["integrations"]) + ".")

    if buckets.get("tech"):
        parts.append("Proposed tech stack: " + "; ".join(buckets["tech"]) + ".")

    constraints: List[str] = []
    if buckets.get("budget"):
        constraints.append("budget " + buckets["budget"][0])
    if buckets.get("timeline"):
        constraints.append("timeline " + buckets["timeline"][0])
    if constraints:
        parts.append("Constraints: " + "; ".join(constraints).rstrip('.') + ".")

    # If we still have room, sprinkle in top summary lines not already used
    used = set(parts)
    for s in summary_sentences[1:]:
        if s not in used and len(parts) < 6:
            parts.append(s)

    # Return as a single paragraph
    paragraph = " ".join(parts)
    return paragraph


def main(argv: List[str]) -> int:
    parser = argparse.ArgumentParser(description="Build a brief and final summary from project Q&A JSON.")
    parser.add_argument("--input", default="qa.json", help="Path to Q&A JSON file (default: qa.json)")
    parser.add_argument("--brief-out", default=os.path.join("docs", "brief.md"), help="Path to write the brief markdown (default: docs/brief.md)")
    parser.add_argument("--summary-out", default=os.path.join("docs", "summary.md"), help="Path to write the summary markdown (default: docs/summary.md)")
    parser.add_argument("--max-brief-sentences", type=int, default=8, help="Maximum number of sentences in the brief (default: 8)")
    parser.add_argument("--max-summary-sentences", type=int, default=3, help="Maximum number of sentences in the final summary (default: 3)")
    parser.add_argument("--format", choices=["grouped", "narrative"], default="grouped", help="Output format: grouped (markdown by question) or narrative (single organized paragraph)")
    parser.add_argument("--stdout", action="store_true", help="Print output to stdout instead of writing files")

    args = parser.parse_args(argv)

    try:
        qas = read_qa(args.input)
    except Exception as e:
        print(f"Error reading input: {e}", file=sys.stderr)
        return 2

    if not qas:
        print("No Q&A entries found in input.", file=sys.stderr)
        return 1

    brief_sentences, summary_sentences = build_brief_and_summary(
        qas, max_brief=args.max_brief_sentences, max_summary=args.max_summary_sentences
    )

    if args.format == "narrative":
        narrative = render_narrative_brief(brief_sentences, summary_sentences)
        if args.stdout:
            print(narrative)
            return 0
        # Also write to brief.md as a simple narrative block and keep summary.md
        ensure_dir(args.brief_out)
        ensure_dir(args.summary_out)
        with open(args.brief_out, "w", encoding="utf-8") as f:
            f.write("# Project Brief\n\n")
            f.write(narrative + "\n")
        with open(args.summary_out, "w", encoding="utf-8") as f:
            f.write(render_markdown_summary(summary_sentences))
        print(f"Wrote narrative brief: {args.brief_out}")
        print(f"Wrote summary: {args.summary_out}")
        return 0

    # grouped (markdown) default path
    brief_md = render_markdown_brief(qas, brief_sentences, summary_sentences)
    summary_md = render_markdown_summary(summary_sentences)

    ensure_dir(args.brief_out)
    ensure_dir(args.summary_out)

    with open(args.brief_out, "w", encoding="utf-8") as f:
        f.write(brief_md)
    with open(args.summary_out, "w", encoding="utf-8") as f:
        f.write(summary_md)

    print(f"Wrote brief: {args.brief_out}")
    print(f"Wrote summary: {args.summary_out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

