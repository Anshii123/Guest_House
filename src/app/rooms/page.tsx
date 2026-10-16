import type { Metadata } from "next";
import Link from "next/link";
import { Bed, Check, ArrowRight, Clock, HelpCircle, Compass, Users, Sparkles } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: "Rooms & Stay",
  description:
    "Explore our sample room categories at The Willow House. From simple comfort in the Standard Room to extra space in Deluxe and togetherness in our Family Stay.",
};

export default function RoomsPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#244638]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={siteImages.roomsHero.src}
            alt={siteImages.roomsHero.alt}
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
            FIND YOUR SPACE
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Comfort That Fits the Way You Travel.
          </h1>
          <p className="text-base sm:text-lg text-[#F7F4EC]/95 max-w-2xl mx-auto leading-relaxed font-normal">
            Every journey is different. Explore our sample room categories to find the kind of stay that suits your plans, then contact us directly to discuss your dates and requirements.
          </p>
        </div>
      </section>

      {/* SECTION 2: ROOM INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-[#F7F4EC] border-b border-[#EFEBE1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
            ACCOMMODATION OVERVIEW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#244638]">
            A Room for Your Kind of Journey.
          </h2>
          <p className="text-base sm:text-lg text-[#555A54] leading-relaxed">
            Some visits are about exploring somewhere new. Others are about family time, work, or simply having a comfortable place to return to. Our room categories are designed to help you begin choosing the type of accommodation that fits your trip.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244638] hover:text-[#C8795A] transition-colors"
            >
              <span>Have a specific date in mind? Get in touch directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: DETAILED ROOM SHOWCASES */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {siteConfig.rooms.map((room, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={room.id}
                id={room.id}
                className="scroll-mt-32 bg-white rounded-3xl overflow-hidden border border-[#EFEBE1] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReversed ? "lg:flex-row-reverse" : ""}`}>
                  {/* Photography Column */}
                  <div className={`lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] lg:min-h-full ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <SafeImage
                      src={room.image}
                      alt={room.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-4 left-4 bg-[#244638]/90 text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full backdrop-blur-sm shadow">
                      {room.shortLabel}
                    </div>
                  </div>

                  {/* Room Narrative & Editable Fields */}
                  <div className={`lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                          Room {index + 1 < 10 ? `0${index + 1}` : index + 1} — {room.name}
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#244638]">
                          {room.heading}
                        </h2>
                      </div>

                      <p className="text-[#555A54] text-base leading-relaxed">
                        {room.description}
                      </p>

                      {/* Explicitly labeled Editable Fields */}
                      <div className="pt-2 bg-[#FAF8F3] p-4 rounded-xl border border-[#EFEBE1] space-y-2 text-xs sm:text-sm text-[#555A54]">
                        <p className="font-semibold text-[#244638] uppercase tracking-wider text-[11px]">
                          Accommodation Details:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                          <div>
                            <strong className="text-[#292D29]">Occupancy:</strong> {room.occupancy}
                          </div>
                          <div>
                            <strong className="text-[#292D29]">Bed:</strong> {room.bed}
                          </div>
                          <div>
                            <strong className="text-[#292D29]">Room size:</strong> {room.size}
                          </div>
                          <div>
                            <strong className="text-[#292D29]">Inventory:</strong> Sample concept
                          </div>
                        </div>
                      </div>

                      {/* Verified Amenities */}
                      <div className="pt-1">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-[#292D29] mb-2.5">
                          Verified Inclusions:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#555A54]">
                          {room.verifiedAmenities.map((amenity, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-[#244638] shrink-0 mt-0.5" />
                              <span>{amenity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Enquiry CTA passing query parameter */}
                    <div className="pt-4 border-t border-[#EFEBE1]">
                      <Link
                        href={`/contact?room=${room.slug}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-6 py-3 rounded-full text-sm font-medium transition-all shadow hover:shadow-md w-full sm:w-auto"
                      >
                        <span>{room.ctaText}</span>
                        <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: UNIQUE SECTION — Choose by Travel Style */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="YOUR TRAVEL REASON"
            title="What Brings You Here?"
            subtitle="Choose the rhythm that matches your journey. We adapt our welcome to fit your purpose."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1: Change of scenery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelScenery}
                  alt="Scenic landscape and outdoor pathways"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#244638]">
                    A Change of Scenery
                  </h3>
                  <p className="text-sm text-[#555A54] leading-relaxed">
                    For guests looking for a comfortable base between outings and local discoveries.
                  </p>
                </div>
                <Link
                  href="/contact?room=deluxe"
                  className="text-xs font-semibold text-[#244638] hover:text-[#C8795A] transition-colors inline-flex items-center gap-1 pt-2"
                >
                  <span>Discuss a leisure stay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Style 2: Time together */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelTogether}
                  alt="Warm room arranged for family or friends sharing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#244638]">
                    Time Together
                  </h3>
                  <p className="text-sm text-[#555A54] leading-relaxed">
                    For couples, families, and friends planning a shared visit.
                  </p>
                </div>
                <Link
                  href="/contact?room=family"
                  className="text-xs font-semibold text-[#244638] hover:text-[#C8795A] transition-colors inline-flex items-center gap-1 pt-2"
                >
                  <span>Enquire about family dates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Style 3: Practical place to stay */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[16/10] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelPractical}
                  alt="Quiet practical desk and bed setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#244638]">
                    A Practical Place to Stay
                  </h3>
                  <p className="text-sm text-[#555A54] leading-relaxed">
                    For work trips, appointments, family visits, and journeys that call for a welcoming place to return to.
                  </p>
                </div>
                <Link
                  href="/contact?room=standard"
                  className="text-xs font-semibold text-[#244638] hover:text-[#C8795A] transition-colors inline-flex items-center gap-1 pt-2"
                >
                  <span>Ask about mid-week stays</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BEFORE YOU ARRIVE */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="STAY ESSENTIALS"
            title="A Few Things Worth Knowing."
            subtitle="Honest information and guidance to help you plan your visit with clarity."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Check-in and Check-out
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Timing & Keys</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Contact the property to confirm your specific arrival and departure timing. Early or late self-check-in is arranged individually.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Booking Arrangements
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Host Confirmation</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Confirm directly with the guest house before considering dates finalized. Enquiries are checked against current room availability.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Cancellation Policy
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Flexibility</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Request the current policy before booking so you understand refund windows and deposit requirements for your chosen dates.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Children & Extra Guests
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Family Requirements</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Confirm arrangements with the property in advance so travel cots, high chairs, or twin setups can be prepared prior to arrival.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Special Requirements
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Tailored Needs</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Include them in your enquiry. Whether dietary preferences, quiet rooms, or accessibility notes, we do our best to assist.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                Amenities & Facilities
              </span>
              <h3 className="font-serif text-xl text-[#244638]">Confirmation</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Confirm specific facilities before your visit. Verified features are detailed above, and additional requests are warmly reviewed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ ACCORDION */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Common Questions About Stays."
            subtitle="Helpful answers about enquiring, room options, and finalizing your arrangements."
            align="center"
          />

          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EFEBE1] shadow-sm">
            <FAQAccordion items={siteConfig.roomsFAQ} />
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-20 bg-[#244638] text-[#F7F4EC] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F4EC]">
            Found the Kind of Stay You&rsquo;re Looking For?
          </h2>
          <p className="text-base text-[#A8B5A0] leading-relaxed max-w-xl mx-auto">
            Share your travel dates and requirements, and contact us to discuss the best available option for your visit.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8795A] hover:bg-[#B36446] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg"
            >
              <span>Enquire About Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
