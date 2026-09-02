"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/challenge", label: "CHALLENGE" },
  { href: "/timeline", label: "TIMELINE" },
  { href: "/judging", label: "JUDGING" },
  { href: "/faq", label: "FAQ" },
  { href: "/rules", label: "RULES" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-near-black/90 backdrop-blur-sm border-b border-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex min-h-11 items-center gap-2 group">
            <span className="font-display text-lg font-bold text-off-white group-hover:text-accent transition-colors">
              NH
            </span>
            <span className="font-hand text-sm text-dim hidden sm:inline">
              →
            </span>
            <span className="font-display text-sm font-bold text-off-white hidden sm:inline">
              NEIGHBORHOOD HACKS
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray hover:text-accent transition-colors px-2.5 py-1.5 font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — external links + register */}
          <div className="flex items-center gap-3">
            <a
              href="https://discord.gg/rS2nmaqpzG"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex font-mono text-[10px] uppercase tracking-[0.15em] text-gray hover:text-accent transition-colors font-semibold"
            >
              DISCORD ↗
            </a>
            <a
              href="https://neighborhood-hacks-2026.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-mono text-[10px] uppercase tracking-[0.15em] text-near-black bg-accent px-3 hover:bg-off-white transition-colors font-semibold"
            >
              REGISTER →
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex min-h-11 items-center px-2 lg:hidden font-mono text-[10px] uppercase tracking-[0.15em] text-gray hover:text-accent transition-colors font-semibold"
            >
              [{isOpen ? "CLOSE" : "MENU"}]
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown nav */}
      {isOpen && (
        <div className="fixed top-14 bottom-0 left-0 right-0 z-40 overflow-y-auto bg-near-black/98 backdrop-blur-sm border-b border-grid lg:hidden">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
            <div className="space-y-3">
              {navLinks.map((link, i) => (
                <div key={link.href} className="flex items-center gap-4">
                  <span className="font-hand text-dim text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-2xl font-bold text-off-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-grid flex gap-6">
              <a
                href="https://discord.gg/rS2nmaqpzG"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-[0.15em] text-gray hover:text-accent transition-colors font-semibold"
              >
                DISCORD ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
