import Link from "next/link";
import { ArrowRight, Compass, Sparkles, MessageSquare, Bed, CheckCircle2, Calendar, ShieldCheck, HeartHandshake } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 2: HERO */}
      <section className="relative w-full min-h-[660px] lg:min-h-[760px] flex items-center justify-center overflow-hidden bg-[#244638]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={siteImages.homeHero.src}
            alt={siteImages.homeHero.alt}
            fill
            priority
            className="object-cover object-center scale-[1.01]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#244638]/90 via-[#244638]/50 to-[#244638]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center text-[#F7F4EC] space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F4EC]/15 backdrop-blur-md border border-[#F7F4EC]/25 text-xs font-semibold uppercase tracking-[0.25em] text-[#F7F4EC]">
            <Sparkles className="w-3.5 h-3.5 text-[#C8795A]" />
            <span>{siteConfig.eyebrow}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.1] max-w-4xl mx-auto drop-shadow-sm">
            Stay Somewhere That Feels Like You Belong.
          </h1>

          <p className="text-base sm:text-xl text-[#F7F4EC]/95 max-w-3xl mx-auto font-normal leading-relaxed">
            Slow down, settle in, and enjoy the comfort of a thoughtfully prepared stay. At The Willow House, welcoming spaces and a relaxed atmosphere make it easier to feel at home, wherever your journey takes you.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/rooms"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C8795A] hover:bg-[#B36446] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
            >
              <span>Explore Our Rooms</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F7F4EC]/90 hover:bg-[#F7F4EC] text-[#244638] px-8 py-3.5 rounded-full font-medium text-base transition-all backdrop-blur-sm shadow hover:shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F4EC]"
            >
              <span>Plan Your Stay</span>
              <Compass className="w-4 h-4 text-[#244638]" />
            </Link>
          </div>

          {/* Small Editorial Detail */}
          <div className="pt-8">
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#A8B5A0] font-medium border-t border-[#F7F4EC]/20 pt-4 inline-block">
              {siteConfig.editorialHeroDetail}
            </span>
          </div>
        </div>
      </section>

      {/* SECTION 3: INTRODUCTION — A Stay with a Little More Heart */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Photography Column - Clean, non-overlapping presentation */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl img-zoom-container bg-[#244638]/10 border border-[#EFEBE1]">
                <SafeImage
                  src={siteImages.aboutHero.src}
                  alt="Warm sunlit sitting room at The Willow House"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Narrative Editorial Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#C8795A]">
                THE WILLOW HOUSE EXPERIENCE
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#244638] tracking-tight leading-[1.15]">
                A Place to Arrive. A Place to Unwind.
              </h2>

              <div className="space-y-4 text-base sm:text-lg text-[#555A54] leading-relaxed">
                <p>
                  Travel can be full of plans, unfamiliar places, and long days. Your stay should feel simpler. The Willow House is imagined as a welcoming place to put your bags down, take a breath, and enjoy the comfort of a space that feels considered rather than complicated.
                </p>
                <p>
                  From the details of a thoughtfully arranged room to the calm atmosphere of a shared space, our approach is simple: make guests feel welcome and make their time away feel comfortable.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#244638] hover:text-[#C8795A] transition-colors group"
                >
                  <span>Get to Know Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ROOMS PREVIEW — Find Your Kind of Comfort */}
      <section className="py-20 lg:py-28 bg-[#FAF8F3] border-y border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SAMPLE ROOM CATEGORIES"
            title="Room to Rest. Space to Be Yourself."
            subtitle="Whether you are visiting for a short break, traveling with family, or looking for a comfortable place to return to after a busy day, explore the stay that best suits your plans."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] overflow-hidden img-zoom-container bg-[#244638]/10">
                  <SafeImage
                    src={room.image}
                    alt={room.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#244638]/90 backdrop-blur-sm text-[#F7F4EC] text-xs font-medium px-3 py-1 rounded-full">
                    {room.shortLabel}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#244638] group-hover:text-[#C8795A] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-sm text-[#555A54] leading-relaxed">
                      {room.tagline}
                    </p>
                    <p className="text-xs text-[#7A8179] pt-1">
                      {room.occupancy}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#EFEBE1] flex items-center justify-between">
                    <span className="text-xs text-[#7A8179] italic">
                      Editable sample concept
                    </span>
                    <Link
                      href={`/rooms#${room.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#244638] hover:text-[#C8795A] transition-colors"
                    >
                      <span>Discover This Room</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-7 py-3 rounded-full text-sm font-medium transition-all shadow hover:shadow-md"
            >
              <span>Explore All Room Options</span>
              <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: UNIQUE SECTION — The Willow House Philosophy */}
      <section className="py-20 lg:py-28 bg-[#244638] text-[#F7F4EC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text & 3 principles */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8B5A0]">
                  OUR THREE PRINCIPLES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F7F4EC] tracking-tight">
                  The Best Stays Are Often the Simplest.
                </h2>
              </div>

              <div className="space-y-6 divide-y divide-[#2f5a48] pt-2">
                <div className="pt-6 first:pt-0 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F3]">
                    Arrive Without the Rush
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8B5A0] leading-relaxed">
                    A welcoming environment helps you settle in and leave the day&rsquo;s hurry behind.
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F3]">
                    Comfort in the Details
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8B5A0] leading-relaxed">
                    Thoughtful spaces, practical touches, and an atmosphere designed around feeling at ease.
                  </p>
                </div>

                <div className="pt-6 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F3]">
                    Make the Stay Your Own
                  </h3>
                  <p className="text-sm sm:text-base text-[#A8B5A0] leading-relaxed">
                    Whether your plans involve exploring, working, or simply resting, your stay should fit the way you travel.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: small decorative photographic vignette */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full aspect-[4/5] min-h-[340px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-[#2f5a48] img-zoom-container">
                <SafeImage
                  src={siteImages.detailSeating}
                  alt="Cozy armchair and calm interior setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-3 text-right">
                <span className="text-xs text-[#A8B5A0]/80 italic">
                  Calm spaces prepared for solitary reflection or relaxed conversation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: A CLOSER LOOK — Little Details, Lovely Moments */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8795A]">
                GALLERY PREVIEW
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#244638]">
                Comfort Lives in the Little Things.
              </h2>
              <p className="text-base text-[#555A54] leading-relaxed">
                Sometimes it is the quietest details that make a place memorable: a well-arranged room, a comfortable corner to sit in, or a space that lets you slow down after a busy day.
              </p>
            </div>

            <Link
              href="/gallery"
              className="self-start md:self-auto inline-flex items-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-6 py-3 rounded-full text-sm font-medium transition-all shadow shrink-0"
            >
              <span>Explore the Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
            </Link>
          </div>

          {/* 4 Distinct Photographs: Bedroom, Bedside lighting, Seating area, Exterior */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.gallery[1].src}
                  alt="Neatly prepared bedroom at The Willow House"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs text-[#7A8179] font-medium">Neatly prepared bedroom suite</p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailLighting}
                  alt="Bedside table with warm ambient lamp"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs text-[#7A8179] font-medium">Bedside table and warm lighting</p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.detailSeating}
                  alt="Welcoming seating area with upholstered armchairs"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs text-[#7A8179] font-medium">A welcoming seating corner</p>
            </div>

            <div className="space-y-2">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-sm img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.homeHero.src}
                  alt="Entrance and stone exterior of the guest house"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <p className="text-xs text-[#7A8179] font-medium">Courtyard entrance and grounds</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GUEST JOURNEY */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="YOUR PATH TO REST"
            title="From First Enquiry to Feeling at Home."
            subtitle="Booking arrangements are made with direct personal attention from our host team."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3 relative">
              <span className="font-serif text-3xl text-[#C8795A]">01</span>
              <h3 className="font-serif text-xl text-[#244638]">Tell Us Your Plans</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Share your preferred dates and the type of stay you have in mind through our enquiry form or on WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3 relative">
              <span className="font-serif text-3xl text-[#C8795A]">02</span>
              <h3 className="font-serif text-xl text-[#244638]">Explore Your Options</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Ask about suitable rooms, arrival times, policies, and any available custom arrangements.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3 relative">
              <span className="font-serif text-3xl text-[#C8795A]">03</span>
              <h3 className="font-serif text-xl text-[#244638]">Get Ready to Arrive</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Confirm your arrangements directly with the guest house so expectations and dates are aligned.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3 relative">
              <span className="font-serif text-3xl text-[#C8795A]">04</span>
              <h3 className="font-serif text-xl text-[#244638]">Settle In</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Arrive, unpack, and enjoy the comfort of a peaceful guest house designed around your ease.
              </p>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-[#7A8179]">
            * Note: Room confirmation depends on direct mutual agreement with the guest house. Enquiries do not charge or simulate immediate reservations.
          </p>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8795A]">
            BEGIN THE CONVERSATION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#244638] tracking-tight leading-tight">
            Your Next Stay Starts with a Conversation.
          </h2>
          <p className="text-base sm:text-lg text-[#555A54] max-w-xl mx-auto leading-relaxed">
            Have dates in mind or a question before you visit? Tell us a little about your plans, and we will help you with the next steps.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <span>Make an Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#A8B5A0]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
