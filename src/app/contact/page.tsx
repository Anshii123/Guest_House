import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ExternalLink, HelpCircle } from "lucide-react";
import SafeImage from "@/components/SafeImage";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import FAQAccordion from "@/components/FAQAccordion";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Plan your visit to The Willow House. Send an enquiry about room categories, discuss your travel dates, or connect directly with our host.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO (Split Layout with Photography) */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] flex items-center justify-center overflow-hidden bg-[#244638]">
        <div className="absolute inset-0 z-0">
          <SafeImage
            src={siteImages.contactHero.src}
            alt={siteImages.contactHero.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#244638]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center text-[#F7F4EC] space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#A8B5A0]">
            LET&rsquo;S TALK ABOUT YOUR STAY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Your Next Visit Starts Here.
          </h1>
          <p className="text-base sm:text-lg text-[#F7F4EC]/95 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us a little about your plans, the dates you have in mind, and what you need from your stay. We can help you understand the next steps.
          </p>
        </div>
      </section>

      {/* SECTION 2: CONTACT INTRODUCTION */}
      <section className="py-14 sm:py-18 bg-[#F7F4EC] border-b border-[#EFEBE1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
            HOW WE CAN HELP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#244638]">
            A Question Before You Arrive?
          </h2>
          <p className="text-base sm:text-lg text-[#555A54] leading-relaxed">
            Choosing accommodation often comes with a few practical questions. Whether you want to discuss room options, ask about amenities, clarify policies, or plan your travel dates, start with an enquiry and share the details that matter to you.
          </p>
        </div>
      </section>

      {/* SECTION 3 & 4: CONTACT DETAILS & ENQUIRY FORM */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* SECTION 3: Contact Information Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C8795A]">
                  DIRECT HOST CONTACT
                </span>
                <h3 className="font-serif text-3xl text-[#244638]">
                  Reach Out to The Willow House.
                </h3>
                <p className="text-sm text-[#555A54] leading-relaxed">
                  Use our editable placeholder contact details below or send your enquiry through the form to begin a direct conversation.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#EFEBE1] shadow-sm space-y-5">
                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#244638]/10 text-[#244638] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8179] block">
                      Telephone
                    </span>
                    <a
                      href={siteConfig.contact.phoneHref}
                      className="text-base font-medium text-[#244638] hover:text-[#C8795A] transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="block text-xs text-[#7A8179] mt-0.5">
                      Available during reception hours
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#244638]/10 text-[#244638] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8179] block">
                      Email Address
                    </span>
                    <a
                      href={siteConfig.contact.emailHref}
                      className="text-base font-medium text-[#244638] hover:text-[#C8795A] transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <span className="block text-xs text-[#7A8179] mt-0.5">
                      {siteConfig.contact.responseWindow}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#244638]/10 text-[#244638] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8179] block">
                      Property Address
                    </span>
                    <p className="text-sm font-medium text-[#292D29]">
                      {siteConfig.contact.address}
                    </p>
                    <a
                      href={siteConfig.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#244638] hover:text-[#C8795A] transition-colors mt-1"
                    >
                      <span>Google Maps Location</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#244638]/10 text-[#244638] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#7A8179] block">
                      Business & Reception Hours
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-[#292D29]">
                      {siteConfig.contact.businessHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Development note */}
              <div className="p-4 rounded-xl bg-[#EFEBE1]/60 text-xs text-[#7A8179] border border-[#E5E0D5]">
                <strong className="text-[#244638]">Configuration Note:</strong> Contact details are editable in <code>src/config/site.ts</code>. Replace with confirmed property phone and email prior to live launch.
              </div>
            </div>

            {/* SECTION 4: Enquiry Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT HAPPENS NEXT? */}
      <section className="py-20 lg:py-24 bg-[#F7F4EC] border-t border-[#EFEBE1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="SIMPLE ARRANGEMENT PROCESS"
            title="What Happens Next?"
            subtitle="Three straightforward steps from your enquiry to a confirmed stay."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3">
              <span className="font-serif text-3xl text-[#C8795A]">01</span>
              <h3 className="font-serif text-2xl text-[#244638]">Send Your Enquiry</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Tell us your preferred dates, room choice, and number of guests using the form above.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3">
              <span className="font-serif text-3xl text-[#C8795A]">02</span>
              <h3 className="font-serif text-2xl text-[#244638]">Discuss the Details</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Ask about availability, amenities, policies, and any special requirements directly with our team.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-[#EFEBE1] shadow-sm space-y-3">
              <span className="font-serif text-3xl text-[#C8795A]">03</span>
              <h3 className="font-serif text-2xl text-[#244638]">Confirm Directly</h3>
              <p className="text-sm text-[#555A54] leading-relaxed">
                Complete the booking arrangements directly with the guest house after receiving confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FAQ */}
      <section className="py-20 lg:py-24 bg-[#FAF8F3] border-t border-[#EFEBE1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="ENQUIRY QUESTIONS"
            title="Contact & Booking Questions."
            subtitle="Important information about responses, confirmations, and special arrangements."
            align="center"
          />

          <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#EFEBE1] shadow-sm">
            <FAQAccordion items={siteConfig.contactFAQ} />
          </div>
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="py-20 bg-[#244638] text-[#F7F4EC] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F4EC]">
            We Look Forward to Hearing from You.
          </h2>
          <p className="text-base text-[#A8B5A0] leading-relaxed max-w-xl mx-auto">
            Whatever brings you our way, let us help you begin planning a comfortable stay.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 bg-[#C8795A] hover:bg-[#B36446] text-[#F7F4EC] px-8 py-3.5 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call {siteConfig.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
