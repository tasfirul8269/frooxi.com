"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ChatBubble from '@/components/ChatBubble';

export default function Header({ current }: { current?: string }) {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    // Initialize last scroll position on mount
    lastScroll.current = window.scrollY || 0;
  }, []);

  useEffect(() => {
    const getScrollTop = () => (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );

    let rafId: number | null = null;
    const THRESHOLD = 12; // px before toggling to avoid jitter

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        const curr = getScrollTop();
        setIsScrolled(curr > 0);

        if (mobileOpen) {
          setVisible(true);
          lastScroll.current = curr;
          rafId && cancelAnimationFrame(rafId);
          rafId = null;
          return;
        }

        if (curr <= 0) {
          setVisible(true);
        } else {
          const delta = curr - lastScroll.current;
          if (delta > THRESHOLD) {
            setVisible(false); // scrolling down
          } else if (delta < -THRESHOLD) {
            setVisible(true); // scrolling up
          }
        }

        lastScroll.current = curr;
        rafId && cancelAnimationFrame(rafId);
        rafId = null;
      });
    };

    // Initial state
    lastScroll.current = getScrollTop();
    setIsScrolled(lastScroll.current > 0);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll as any);
    };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header
      className={`flex items-center justify-between px-6 py-3 md:py-4 fixed top-0 left-0 w-full z-30 ${isScrolled ? 'bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm' : 'bg-white'}`}
      style={{
        willChange: 'transform',
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center" aria-label="Frooxi Home">
        <div className="w-28 md:w-36 h-6 md:h-8 relative">
          <Image
            src="/FrooxiHeaderLogo.svg"
            alt="Frooxi"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link href="/" className={`text-gray-600 hover:text-black text-sm${current === 'home' ? ' font-medium text-black' : ''}`}>Home</Link>
        <Link href="/services" className={`text-gray-600 hover:text-black text-sm${current === 'services' ? ' font-medium text-black' : ''}`}>Services</Link>
        <div className="relative group">
          <button className="text-gray-600 hover:text-black text-sm flex items-center space-x-1">
            <span>Company</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link href="/about" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">About</Link>
              <Link href="/team" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Team</Link>
              <Link href="/our-works" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Our Works</Link>
              <Link href="/products" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Products</Link>
            </div>
          </div>
        </div>
        <Link href="/brands" className="text-gray-600 hover:text-black text-sm">Brands</Link>
        <Link href="/pricing" className="text-gray-600 hover:text-black text-sm">Pricing</Link>
        <Link href="/contact" className={`text-gray-600 hover:text-black text-sm${current === 'contact' ? ' font-medium text-black' : ''}`}>Contact</Link>
      </nav>
      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none"
        aria-label="Open menu"
        aria-expanded={mobileOpen}
        onClick={() => setMobileOpen((v) => !v)}
      >
        <span className="sr-only">Open menu</span>
        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Chat Bubble Button */}
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center space-x-4">
        <Link href="/careers" className="block px-4 font-semibold py-2 text-sm hover:text-[#30d6c4] text-black">Career</Link>
        <div className="w-[2px] h-5 bg-gray-200"></div>
          <ChatBubble />
        </div>
      </div>
      {/* Mobile Sidebar Menu */}
      {mobileOpen && (
        <>
          {/* Sidebar overlay for click-away */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            style={{ background: 'transparent' }}
          />
          {/* Sidebar */}
          <div
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 flex flex-col p-6 animate-slide-in"
            style={{ minWidth: '18rem', height: '100vh', background: '#fff' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 mt-12">
              <Link href="/" className="text-gray-700 text-base font-medium" onClick={() => setMobileOpen(false)}>Home</Link>
              <Link href="/services" className="text-gray-700 text-base font-medium" onClick={() => setMobileOpen(false)}>Services</Link>
              <div>
                <div className="text-gray-700 text-base font-medium mb-1">Company</div>
                <div className="pl-2 flex flex-col space-y-1">
                  <Link href="/about" className="text-gray-600 text-sm" onClick={() => setMobileOpen(false)}>About</Link>
                  <Link href="/team" className="text-gray-600 text-sm" onClick={() => setMobileOpen(false)}>Team</Link>
                  <Link href="/our-works" className="text-gray-600 text-sm" onClick={() => setMobileOpen(false)}>Our Works</Link>
                  <Link href="/products" className="text-gray-600 text-sm" onClick={() => setMobileOpen(false)}>Products</Link>
                </div>
              </div>
              <Link href="/brands" className="text-gray-700 text-base font-medium" onClick={() => setMobileOpen(false)}>Brands</Link>
              <Link href="/pricing" className="text-gray-700 text-base font-medium" onClick={() => setMobileOpen(false)}>Pricing</Link>
              <Link href="/contact" className="text-gray-700 text-base font-medium" onClick={() => setMobileOpen(false)}>Contact</Link>
              <Link
                href="/contact"
                className="mt-4 bg-[#00ff8b] hover:bg-[#00e67d] text-black px-4 py-2 rounded text-sm font-medium text-center transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
          {/* Sidebar slide-in animation */}
          <style jsx global>{`
            @keyframes slide-in {
              from { transform: translateX(100%); }
              to { transform: translateX(0); }
            }
            .animate-slide-in {
              animation: slide-in 0.3s cubic-bezier(0.4,0,0.2,1);
            }
          `}</style>
        </>
      )}
    </header>
  );
} 