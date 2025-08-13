"use client";

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

function getScrollTop(): number {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function hasScrollableParent(element: HTMLElement | null): boolean {
  let node: HTMLElement | null = element;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const overflowY = style.overflowY;
    const canScrollY = node.scrollHeight > node.clientHeight;
    if (canScrollY && (overflowY === 'auto' || overflowY === 'scroll')) {
      return true;
    }
    node = node.parentElement;
  }
  return false;
}

export default function SmoothScroll() {
  const pathname = usePathname();
  const targetYRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isFirstRender = useRef(true);

  // Reset scroll position on route change
  useEffect(() => {
    if (!isFirstRender.current) {
      window.scrollTo(0, 0);
      targetYRef.current = 0;
    } else {
      isFirstRender.current = false;
    }
  }, [pathname]);

  useEffect(() => {
    targetYRef.current = getScrollTop();

    const speedFactor = 0.6; // 60% of native wheel delta (slightly slower)
    const ease = 0.12; // easing factor per frame for smoothness

    const getMaxScroll = () => (
      Math.max(
        0,
        (document.scrollingElement?.scrollHeight || document.documentElement.scrollHeight) - window.innerHeight
      )
    );

    const animate = () => {
      const currentY = getScrollTop();
      const targetY = clamp(targetYRef.current, 0, getMaxScroll());
      const delta = targetY - currentY;
      if (Math.abs(delta) < 0.3) {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = null;
        }
        return;
      }
      const nextY = currentY + delta * ease;
      window.scrollTo(0, nextY);
      rafIdRef.current = requestAnimationFrame(animate);
    };

    const onWheel = (e: WheelEvent) => {
      // Respect pinch-zoom gesture (ctrlKey true on some platforms)
      if (e.ctrlKey) return;
      // Let inner scrollable containers handle their own scroll
      const target = e.target as HTMLElement | null;
      if (target && hasScrollableParent(target)) return;

      // Prevent native wheel scrolling and apply smoothed scroll
      e.preventDefault();
      const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
      const deltaPixels = e.deltaY * unit;
      const maxScroll = getMaxScroll();
      targetYRef.current = clamp(targetYRef.current + deltaPixels * speedFactor, 0, maxScroll);
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    const isEditableOrFormElement = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = (el as HTMLElement).tagName;
      const editable = (el as HTMLElement).isContentEditable;
      return (
        editable ||
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT'
      );
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEditableOrFormElement(document.activeElement)) return;
      // If focus is inside a scrollable container, let it handle keys
      const focusEl = document.activeElement as HTMLElement | null;
      if (focusEl && hasScrollableParent(focusEl)) return;

      let handled = false;
      let nextTarget = targetYRef.current;
      const viewportStep = Math.round(window.innerHeight * 0.85);
      const lineStep = 60; // px per arrow key

      switch (e.key) {
        case 'ArrowDown':
          nextTarget += lineStep;
          handled = true;
          break;
        case 'ArrowUp':
          nextTarget -= lineStep;
          handled = true;
          break;
        case 'PageDown':
          nextTarget += viewportStep;
          handled = true;
          break;
        case 'PageUp':
          nextTarget -= viewportStep;
          handled = true;
          break;
        case 'Home':
          nextTarget = 0;
          handled = true;
          break;
        case 'End':
          nextTarget = getMaxScroll();
          handled = true;
          break;
        case ' ': // Spacebar
          nextTarget += (e.shiftKey ? -1 : 1) * viewportStep;
          handled = true;
          break;
      }

      if (!handled) return;
      e.preventDefault();
      targetYRef.current = clamp(nextTarget, 0, getMaxScroll());
      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    const onResize = () => {
      // clamp target when viewport changes
      targetYRef.current = clamp(targetYRef.current, 0, getMaxScroll());
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown, false);
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      window.removeEventListener('wheel', onWheel as any);
      window.removeEventListener('keydown', onKeyDown as any);
      window.removeEventListener('resize', onResize as any);
    };
  }, []);

  return null;
}


