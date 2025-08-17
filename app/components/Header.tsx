"use client";

import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ChatBubble from '@/components/ChatBubble';
import { Home, Briefcase, Users, Box, Tag, DollarSign, MessageSquare, X, ChevronRight } from 'lucide-react';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const current = pathname.split('/')[1] || 'home';
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScroll = useRef(0);
  
  // Determine active menu item based on current route
  const isActive = (path: string) => {
    if (path === '/') return pathname === path;
    return pathname.startsWith(path);
  };

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
        <Link 
          href="/" 
          className={`text-sm transition-colors ${
            isActive('/')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Home
        </Link>
        <Link 
          href="/services" 
          className={`text-sm transition-colors ${
            isActive('/services')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Services
        </Link>
        <div className="relative group">
          <button className={`text-sm flex items-center space-x-1 transition-colors ${
            isActive('/about') || isActive('/our-works') || isActive('/products') || isActive('/careers')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}>
            <span>Company</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="py-2">
              <Link href="/about" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">About</Link>
              <Link href="/our-works" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Our Works</Link>
              <Link href="/products" className="block px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50">Products</Link>
            </div>
          </div>
        </div>
        <Link 
          href="/brands" 
          className={`text-sm transition-colors ${
            isActive('/brands')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Brands
        </Link>
        <Link 
          href="/pricing" 
          className={`text-sm transition-colors ${
            isActive('/pricing')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Pricing
        </Link>
        <Link 
          href="/contact" 
          className={`text-sm transition-colors ${
            isActive('/contact')
              ? 'text-[#00a67c] font-medium' 
              : 'text-gray-600 hover:text-black'
          }`}
        >
          Contact
        </Link>
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
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col animate-slide-in overflow-y-auto"
            style={{ height: '100vh' }}
            onClick={e => e.stopPropagation()}
          >
            {/* Logo and Close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 sticky top-0 bg-white z-10">
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <div className="w-28 h-6 relative">
                  <Image
                    src="/FrooxiHeaderLogo.svg"
                    alt="Frooxi"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <button
                className="p-2 -mr-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 p-4 space-y-1">
              <Link 
                href="/" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 font-medium group ${
                  isActive('/')
                    ? 'text-[#00a67c]' 
                    : 'text-gray-700 hover:text-black'
                }`} 
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                    <Home className="w-4 h-4 text-gray-600 group-hover:text-[#60FCC4]" />
                  </div>
                  <span>Home</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              
              <Link 
                href="/services" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 font-medium group ${
                  isActive('/services')
                    ? 'text-[#00a67c]' 
                    : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                    <Briefcase className="w-4 h-4 text-gray-600 group-hover:text-[#60FCC4]" />
                  </div>
                  <span>Services</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              
              <div className="mt-4">
                <div className="px-4 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Company</div>
                <div className="space-y-1 pl-4 border-l-2 border-gray-100 ml-4">
                  <Link 
                    href="/about" 
                    className={`flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 group ${
                      isActive('/about')
                        ? 'text-[#00a67c]' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                      <Users className="w-4 h-4 text-gray-500 group-hover:text-[#60FCC4]" />
                    </div>
                    <span>About Us</span>
                  </Link>
                  
                  <Link 
                    href="/our-works" 
                    className={`flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 group ${
                      isActive('/our-works')
                        ? 'text-[#00a67c]' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                      <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-[#60FCC4]" />
                    </div>
                    <span>Our Works</span>
                  </Link>
                  
                  <Link 
                    href="/products" 
                    className={`flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 group ${
                      isActive('/products')
                        ? 'text-[#00a67c]' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                      <Box className="w-4 h-4 text-gray-500 group-hover:text-[#60FCC4]" />
                    </div>
                    <span>Products</span>
                  </Link>
                  
                  <Link 
                    href="/careers" 
                    className={`flex items-center px-4 py-3 rounded-xl hover:bg-gray-50 group ${
                      isActive('/careers')
                        ? 'text-[#00a67c]' 
                        : 'text-gray-600 hover:text-black'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                      <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-[#60FCC4]" />
                    </div>
                    <span>Careers</span>
                  </Link>
                </div>
              </div>

              <Link 
                href="/brands" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 font-medium group mt-4 ${
                  isActive('/brands')
                    ? 'text-[#00a67c]' 
                    : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                    <Tag className="w-4 h-4 text-gray-600 group-hover:text-[#60FCC4]" />
                  </div>
                  <span>Brands</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
              
              <Link 
                href="/pricing" 
                className={`flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 font-medium group ${
                  isActive('/pricing')
                    ? 'text-[#00a67c]' 
                    : 'text-gray-700 hover:text-black'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-[#60FCC4]/20">
                    <DollarSign className="w-4 h-4 text-gray-600 group-hover:text-[#60FCC4]" />
                  </div>
                  <span>Pricing</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </Link>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white">
              <Link
                href="/contact"
                className={`w-full flex items-center justify-center ${
                  isActive('/contact')
                    ? 'bg-[#00a67c] hover:bg-[#008c68] text-white' 
                    : 'bg-black hover:bg-[#60FCC4] text-white hover:text-black'
                } px-6 py-3.5 rounded-xl font-medium text-center transition-all shadow-sm hover:shadow-md active:scale-[0.98]`}
                onClick={() => setMobileOpen(false)}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Get in Touch
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