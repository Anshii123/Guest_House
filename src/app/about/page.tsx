import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Heart, Feather, Compass, Smile, ShieldCheck } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the philosophy, values, and thoughtful hospitality behind The Willow House. An independent retreat designed around comfort and quiet ease.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#244638]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={siteImages.aboutHero.src}
            alt={siteImages.aboutHero.alt}
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
            OUR WAY OF WELCOMING YOU
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            More Than a Room. A Feeling of Belonging.
          </h1>
          <p className="text-base sm:text-lg text-[#F7F4EC]/95 max-w-2xl mx-auto leading-relaxed font-normal">
            At The Willow House, the idea is simple: create a welcoming place where guests can settle in, feel comfortable, and enjoy the freedom to make their stay their own.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE STORY */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Split Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl img-zoom-container bg-[#244638]/10">
                <SafeImage
                  src={siteImages.aboutStory}
                  alt="Quiet breakfast table with natural wood and gentle light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Split Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8795A]">
                THE INSPIRATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#244638] leading-[1.15]">
                A Thoughtful Stay Begins with a Simple Idea.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#555A54] leading-relaxed">
                <p>
                  Not every memorable stay needs to be grand. Sometimes it begins with a comfortable room, a peaceful corner, a space that feels cared for, and the freedom to spend your time exactly as you choose.
                </p>
                <p>
                  The Willow House is built around that idea of thoughtful hospitality. The spaces, the atmosphere, and the guest experience should all work together to make travel feel a little easier.
                </p>
                <p>
                  Whether you are passing through, visiting loved ones, working nearby, or planning a short break, the aim is to offer a place that feels welcoming from the moment you arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: UNIQUE SECTION — Our Idea of Hospitality */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-y border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="THREE PILLARS"
            title="Hospitality Is in the Details."
            subtitle="The simple choices that shape how you experience your time at The Willow House."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                  Pillar 01
                </span>
                <h3 className="font-serif text-2xl text-[#244638]">
                  Space to Unwind
                </h3>
                <p className="text-base text-[#555A54] leading-relaxed">
                  After a long journey or a busy day, a comfortable environment can make all the difference. We believe that the atmosphere of a place should make it easier to slow down.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EFEBE1]/60 text-xs text-[#7A8179] italic">
                Quiet spaces, soft lighting, and uncluttered rooms.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                  Pillar 02
                </span>
                <h3 className="font-serif text-2xl text-[#244638]">
                  Comfort Without Complication
                </h3>
                <p className="text-base text-[#555A54] leading-relaxed">
                  A good stay should feel straightforward. Clear information, practical arrangements, and a welcoming environment help guests focus on their own plans.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EFEBE1]/60 text-xs text-[#7A8179] italic">
                Direct host communication and seamless check-in.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                  Pillar 03
                </span>
                <h3 className="font-serif text-2xl text-[#244638]">
                  A Welcome That Feels Personal
                </h3>
                <p className="text-base text-[#555A54] leading-relaxed">
                  Every traveler arrives with a different reason for being there. Our approach puts a friendly, helpful, and considerate guest experience at the center.
                </p>
              </div>
              <div className="pt-4 border-t border-[#EFEBE1]/60 text-xs text-[#7A8179] italic">
                Individual attention tailored to your visit.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR VALUES */}
      <section className="py-20 lg:py-28 bg-[#244638] text-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A8B5A0]">
              CORE INTENTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F4EC]">
              What We Want Every Stay to Feel Like.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t border-[#2f5a48] pt-6 space-y-2">
              <span className="text-xs uppercase font-mono text-[#C8795A]">01 / VALUE</span>
              <h3 className="font-serif text-3xl text-[#FAF8F3]">Welcoming</h3>
              <p className="text-sm text-[#A8B5A0] leading-relaxed pt-1">
                Warm greetings, helpful advice, and the sincere comfort of feeling expected.
              </p>
            </div>

            <div className="border-t border-[#2f5a48] pt-6 space-y-2">
              <span className="text-xs uppercase font-mono text-[#C8795A]">02 / VALUE</span>
              <h3 className="font-serif text-3xl text-[#FAF8F3]">Thoughtful</h3>
              <p className="text-sm text-[#A8B5A0] leading-relaxed pt-1">
                Consideration in the linen choice, the ambient lighting, and the quiet surroundings.
              </p>
            </div>

            <div className="border-t border-[#2f5a48] pt-6 space-y-2">
              <span className="text-xs uppercase font-mono text-[#C8795A]">03 / VALUE</span>
              <h3 className="font-serif text-3xl text-[#FAF8F3]">Comfortable</h3>
              <p className="text-sm text-[#A8B5A0] leading-relaxed pt-1">
                Restful beds, reliable amenities, and spaces where you can genuinely unwind.
              </p>
            </div>

            <div className="border-t border-[#2f5a48] pt-6 space-y-2">
              <span className="text-xs uppercase font-mono text-[#C8795A]">04 / VALUE</span>
              <h3 className="font-serif text-3xl text-[#FAF8F3]">Straightforward</h3>
              <p className="text-sm text-[#A8B5A0] leading-relaxed pt-1">
                Honest policies, direct communication, and no hidden surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: A STAY FOR DIFFERENT JOURNEYS */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="DIVERSE TRAVELERS"
            title="A Stay for Different Journeys."
            subtitle="Whoever you travel with and whatever your schedule, The Willow House welcomes your purpose."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelScenery}
                  alt="Countryside trail and stone wall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-serif text-2xl text-[#244638]">
                  For the Weekend Wanderer
                </h3>
                <p className="text-sm text-[#555A54] leading-relaxed">
                  A comfortable starting point for a change of scenery.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelTogether}
                  alt="Family friendly suite setting"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-serif text-2xl text-[#244638]">
                  For the Family Visitor
                </h3>
                <p className="text-sm text-[#555A54] leading-relaxed">
                  A welcoming base for time spent together.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-[#EFEBE1] shadow-sm flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden img-zoom-container bg-[#244638]/5">
                <SafeImage
                  src={siteImages.travelPractical}
                  alt="Comfortable work and rest room"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-2">
                <h3 className="font-serif text-2xl text-[#244638]">
                  For the Business Traveler
                </h3>
                <p className="text-sm text-[#555A54] leading-relaxed">
                  A place to return to after a day of meetings, appointments, or work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR PROMISE */}
      <section className="py-16 sm:py-20 bg-[#FAF8F3] border-t border-[#EFEBE1] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8795A]">
            OUR STANDARDS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#244638]">
            Clear Information. Thoughtful Hospitality.
          </h2>
          <p className="text-base sm:text-lg text-[#555A54] leading-relaxed">
            We believe guests should know what to expect. From room details to check-in arrangements, we encourage clear conversations before a stay so that the practical details are understood and expectations are aligned.
          </p>
        </div>
      </section>

      {/* SECTION 7: FINAL CTA */}
      <section className="py-20 bg-[#244638] text-[#F7F4EC] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F4EC]">
            We&rsquo;d Be Glad to Hear from You.
          </h2>
          <p className="text-base text-[#A8B5A0] leading-relaxed max-w-xl mx-auto">
            Have a question about our room options or planning a visit? Start a conversation with us.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#C8795A] hover:bg-[#B36446] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg"
            >
              <span>Contact The Willow House</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
