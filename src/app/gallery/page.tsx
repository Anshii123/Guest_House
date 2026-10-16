import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import ImageGalleryView from "@/components/ImageGalleryView";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the photography and atmosphere of The Willow House. From restful bedrooms and calm parlor spaces to garden paths and thoughtful design textures.",
};

export default function GalleryPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: GALLERY HERO */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#244638]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={siteImages.galleryHero.src}
            alt={siteImages.galleryHero.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#244638]/75 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-[#F7F4EC] space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#A8B5A0]">
            A CLOSER LOOK
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Spaces Made for Slowing Down.
          </h1>
          <p className="text-base sm:text-lg text-[#F7F4EC]/95 max-w-2xl mx-auto leading-relaxed font-normal">
            From welcoming interiors to the little details that make a room feel complete, take a closer look at the atmosphere we want every guest to enjoy.
          </p>
        </div>
      </section>

      {/* SECTION 2: FEATURED PHOTOGRAPH */}
      <section className="py-16 sm:py-20 bg-[#F7F4EC] border-b border-[#EFEBE1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-3xl overflow-hidden shadow-xl img-zoom-container bg-[#244638]/10">
            <SafeImage
              src={siteImages.galleryFeatured.src}
              alt={siteImages.galleryFeatured.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 sm:p-8 text-center sm:text-left">
              <p className="font-serif text-xl sm:text-2xl text-[#F7F4EC]">
                {siteImages.galleryFeatured.caption}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GALLERY CATEGORIES & EDITORIAL GRID */}
      <section className="py-16 sm:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
              CURATED COLLECTION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#244638]">
              Atmosphere Across Every Space.
            </h2>
          </div>
          <ImageGalleryView />
        </div>
      </section>

      {/* SECTION 4: UNIQUE VISUAL FEATURE — The Details That Make a Stay */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC] border-t border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8795A]">
              TEXTURE & LIGHT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#244638]">
              Look a Little Closer.
            </h2>
            <p className="text-base sm:text-lg text-[#555A54] leading-relaxed">
              The feeling of a place often lives in the smallest things: the texture of the room, the warmth of the light, and the details that make an ordinary moment feel comfortable.
            </p>
          </div>

          {/* Asymmetrical composition focusing on 4 detailed subjects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {/* 1. Bed linen and textures */}
            <div className="bg-white p-5 rounded-2xl border border-[#EFEBE1] shadow-sm flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailTextures}
                  alt="Washed organic cotton linens"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#244638]">Bed Linen & Textures</h3>
                <p className="text-xs text-[#555A54] leading-relaxed mt-1">
                  Breathable, natural textiles that invite deep and restful sleep.
                </p>
              </div>
            </div>

            {/* 2. Warm bedside lighting */}
            <div className="bg-white p-5 rounded-2xl border border-[#EFEBE1] shadow-sm flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailLighting}
                  alt="Warm bedside amber lamp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#244638]">Warm Bedside Lighting</h3>
                <p className="text-xs text-[#555A54] leading-relaxed mt-1">
                  Soft ambient glow designed to help you unwind as daylight fades.
                </p>
              </div>
            </div>

            {/* 3. Comfortable seating */}
            <div className="bg-white p-5 rounded-2xl border border-[#EFEBE1] shadow-sm flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailSeating}
                  alt="Upholstered reading armchair"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#244638]">Comfortable Seating</h3>
                <p className="text-xs text-[#555A54] leading-relaxed mt-1">
                  Dedicated chairs placed beside book stacks and garden windows.
                </p>
              </div>
            </div>

            {/* 4. Window light and interior details */}
            <div className="bg-white p-5 rounded-2xl border border-[#EFEBE1] shadow-sm flex flex-col justify-between space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailWindowLight}
                  alt="Natural window daylight pouring onto oak wood"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#244638]">Window Light & Calm</h3>
                <p className="text-xs text-[#555A54] leading-relaxed mt-1">
                  Morning sun that gently welcomes the beginning of your day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-20 bg-[#244638] text-[#F7F4EC] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F4EC]">
            Can You Picture Yourself Here?
          </h2>
          <p className="text-base text-[#A8B5A0] leading-relaxed max-w-xl mx-auto">
            If the atmosphere feels right for your next trip, get in touch and tell us what kind of stay you have in mind.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8795A] hover:bg-[#B36446] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg"
            >
              <span>Plan Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
