"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/school", label: "The School" },
  { href: "/sponsor", label: "Sponsor" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-stone-200/80 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 md:h-20 items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow overflow-hidden">
              <img src="/images/logo-icon.png" alt="SOLCEF" className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-bold text-emerald-900 tracking-tight">
                SOLCEF
              </span>
              <span className="hidden sm:block text-[10px] text-stone-400 tracking-wider uppercase -mt-0.5">
                Education for Haiti
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sponsor"
              className="ml-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-amber-200 hover:shadow-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
            >
              Sponsor a Student
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <svg className="w-6 h-6 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        <div
          id="mobile-navigation"
          hidden={!mobileOpen}
          className="md:hidden pb-5 space-y-1 border-t border-stone-100 pt-3"
        >
          {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-stone-600 font-medium hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/sponsor"
                className="block w-full text-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Sponsor a Student
              </Link>
            </div>
          </div>

      </nav>
    </header>
  );
}
