"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import GalleryLightbox from "@/components/GalleryLightbox";
import { siteImages, GalleryItem } from "@/config/images";

type CategoryFilter = "all" | "bedrooms" | "interiors" | "details" | "exterior";

export default function ImageGalleryView() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const allItems = siteImages.gallery;

  const filteredItems =
    activeCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === activeCategory);

  const openLightboxAt = (item: GalleryItem) => {
    const idx = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setLightboxOpen(true);
  };

  const categories: { key: CategoryFilter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "bedrooms", label: "Bedrooms" },
    { key: "interiors", label: "Interiors" },
    { key: "details", label: "Details" },
    { key: "exterior", label: "Exterior" },
  ];

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#244638] text-[#F7F4EC] shadow"
                  : "bg-white text-[#292D29] hover:bg-[#EFEBE1] border border-[#EFEBE1]"
              } focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638]`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Editorial Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => {
          const isTall = item.aspect === "portrait";

          return (
            <div
              key={item.id}
              onClick={() => openLightboxAt(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightboxAt(item);
                }
              }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm hover:shadow-lg transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638]"
              aria-label={`View photo: ${item.title}`}
            >
              <div
                className={`relative w-full ${
                  isTall ? "aspect-[3/4]" : "aspect-[16/11]"
                } overflow-hidden bg-[#244638]/5`}
              >
                <SafeImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Details Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#A8B5A0] mb-1">
                    {item.categoryLabel}
                  </span>
                  <p className="font-serif text-lg leading-tight text-[#F7F4EC]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#F7F4EC]/85 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/40 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-[#F7F4EC]" />
                </div>
              </div>

              {/* Mobile-Visible Caption */}
              <div className="p-4 sm:hidden bg-white border-t border-[#EFEBE1]">
                <span className="text-[10px] uppercase font-semibold text-[#C8795A]">
                  {item.categoryLabel}
                </span>
                <p className="font-serif text-base text-[#244638] mt-0.5">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentIndex(newIdx)}
      />
    </div>
  );
}
