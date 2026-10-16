"use client";

import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import { GalleryItem } from "@/config/images";

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & Esc to close
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Disable background scrolling when lightbox is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery view"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#292D29]/95 backdrop-blur-md p-4 sm:p-6 md:p-10 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header: Counter & Close */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10 text-[#F7F4EC]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider px-2.5 py-1 rounded bg-[#244638] text-[#A8B5A0] font-medium border border-[#2f5a48]">
            {currentItem.categoryLabel}
          </span>
          <span className="text-xs font-mono text-[#A8B5A0]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-[#244638]/80 hover:bg-[#244638] text-[#F7F4EC] hover:text-[#C8795A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
          aria-label="Close lightbox (Escape)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative max-w-5xl max-h-[75vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full max-h-[70vh] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-black/40">
            <SafeImage
              src={currentItem.src}
              alt={currentItem.alt}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#244638]/80 hover:bg-[#244638] text-[#F7F4EC] hover:text-[#C8795A] transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
        aria-label="Previous image (Left Arrow)"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#244638]/80 hover:bg-[#244638] text-[#F7F4EC] hover:text-[#C8795A] transition-all shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
        aria-label="Next image (Right Arrow)"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Caption */}
      <div
        className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-8 sm:right-8 text-center text-[#F7F4EC] max-w-2xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-serif text-lg sm:text-xl text-[#F7F4EC] mb-1">
          {currentItem.title}
        </p>
        <p className="text-xs sm:text-sm text-[#A8B5A0] leading-relaxed">
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
}
