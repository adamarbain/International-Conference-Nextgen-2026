"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/speakers", label: "Speakers" },
  { href: "/programme", label: "Programme" },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/registration", label: "Registration" },
  { href: "/committee", label: "Committee" },
  // { href: "/sponsors", label: "Sponsors" },
  { href: "/venue", label: "Venue" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.nav
      className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm"
      initial={prefersReducedMotion ? false : { y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 relative">
              <Image
                src="/Gemini_Generated_Image_6vnjth6vnjth6vnj-removebg-preview.png"
                alt="UM NextGen logo"
                fill
                className="object-contain"
                sizes="36px"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-navy text-sm leading-tight block">
                UM NextGen 2026
              </span>
              <span className="text-gray-400 text-xs leading-tight block">
                NextGen IT & Business Seminar
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-navy bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {isActive ? (
                    <span className="border-b-2 border-gold pb-0.5">
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-md text-navy hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="xl:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-3 grid grid-cols-2 gap-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-navy text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
