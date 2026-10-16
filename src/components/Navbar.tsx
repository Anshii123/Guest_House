"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Announcement Strip */}
      <div className="bg-[#244638] text-[#F7F4EC] text-xs font-medium tracking-wide py-2 px-4 text-center border-b border-[#2f5a48] flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C8795A] shrink-0" />
        <span>{siteConfig.announcement}</span>
      </div>

      {/* Main Navbar */}
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F4EC]/95 backdrop-blur-md shadow-sm border-b border-[#EFEBE1] py-3.5"
            : "bg-[#F7F4EC]/80 md:bg-[#F7F4EC]/90 backdrop-blur-sm border-b border-[#EFEBE1]/60 py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638] rounded-sm"
          >
            <span className="font-serif text-2xl sm:text-3xl text-[#244638] tracking-tight group-hover:text-[#1b352a] transition-colors">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#7A8179] font-sans font-medium -mt-1">
              Boutique Guest House
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? "text-[#244638] bg-[#A8B5A0]/20 font-semibold"
                      : "text-[#292D29] hover:text-[#244638] hover:bg-[#EFEBE1]/60"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638]`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638] focus-visible:ring-offset-2"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#244638] hover:bg-[#EFEBE1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[88px] z-40 bg-[#292D29]/50 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-[#F7F4EC] border-b border-[#EFEBE1] px-6 py-8 shadow-xl max-h-[calc(100vh-90px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                      isActive
                        ? "bg-[#244638] text-[#F7F4EC]"
                        : "text-[#292D29] hover:bg-[#EFEBE1]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-6 mt-4 border-t border-[#EFEBE1] flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#244638] text-[#F7F4EC] py-3.5 rounded-full font-medium text-base shadow"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
                </Link>

                <div className="text-center text-xs text-[#7A8179] pt-2">
                  <p>{siteConfig.contact.addressShort}</p>
                  <p className="mt-1 font-medium text-[#244638]">{siteConfig.contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
