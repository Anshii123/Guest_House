import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#244638] text-[#F7F4EC] border-t border-[#1b352a] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#2f5a48]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-tight text-[#F7F4EC]">
                {siteConfig.name}
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-[#A8B5A0] font-sans font-medium mt-0.5">
                Boutique Guest Accommodation
              </p>
            </Link>
            <p className="text-[#A8B5A0] text-sm leading-relaxed max-w-sm pt-1">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-[#A8B5A0]/80 leading-relaxed max-w-sm">
              An independent sanctuary offering restful rooms, serene shared spaces, and attentive hospitality in the heart of the countryside.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#A8B5A0] px-3 py-1 rounded-full bg-[#2f5a48]/60 border border-[#2f5a48]">
                <Sparkles className="w-3 h-3 text-[#C8795A]" />
                <span>Made for moments of comfort</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A8B5A0]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F7F4EC]/90 hover:text-[#C8795A] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A8B5A0]">
              Accommodations
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.rooms.map((room) => (
                <li key={room.id}>
                  <Link
                    href={`/rooms#${room.id}`}
                    className="text-[#F7F4EC]/90 hover:text-[#C8795A] transition-colors block"
                  >
                    <span className="font-medium">{room.name}</span>
                    <span className="block text-xs text-[#A8B5A0]">{room.shortLabel}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#A8B5A0]">
              Contact & Enquiries
            </h3>
            <ul className="space-y-3 text-sm text-[#F7F4EC]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8795A] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8795A] shrink-0" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="hover:text-[#C8795A] transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8795A] shrink-0" />
                <a
                  href={siteConfig.contact.emailHref}
                  className="hover:text-[#C8795A] transition-colors truncate"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1 text-xs text-[#A8B5A0]">
                <Clock className="w-4 h-4 text-[#A8B5A0] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.businessHours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F7F4EC] bg-[#2f5a48] hover:bg-[#396d57] px-3.5 py-2 rounded-full transition-colors"
              >
                <span>Send Booking Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C8795A]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8B5A0]">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-center sm:text-right">
            <span>Made for moments of comfort</span>
            <Heart className="w-3 h-3 text-[#C8795A] inline fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
}
