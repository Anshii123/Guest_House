"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, MessageSquare, Info, Calendar } from "lucide-react";
import { siteConfig } from "@/config/site";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  room: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  room?: string;
}

function ContactFormInner() {
  const searchParams = useSearchParams();
  const roomParam = searchParams.get("room");

  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
    room: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);

  // Set today's date formatted as YYYY-MM-DD for min date constraints
  const [todayStr, setTodayStr] = useState("");

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    setTodayStr(`${yyyy}-${mm}-${dd}`);
  }, []);

  // Sync room param from URL if present
  useEffect(() => {
    if (roomParam) {
      const matched = siteConfig.rooms.find(
        (r) =>
          r.slug.toLowerCase() === roomParam.toLowerCase() ||
          r.id.toLowerCase() === roomParam.toLowerCase()
      );
      if (matched) {
        setValues((prev) => ({ ...prev, room: matched.name }));
      }
    } else if (!values.room && siteConfig.rooms.length > 0) {
      setValues((prev) => ({ ...prev, room: siteConfig.rooms[0].name }));
    }
  }, [roomParam, values.room]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear validation error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!values.fullName.trim()) {
      newErrors.fullName = "Please provide your full name.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Please provide an email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Please provide a contact phone number.";
    }

    if (!values.checkIn) {
      newErrors.checkIn = "Please select an arrival date.";
    } else if (todayStr && values.checkIn < todayStr) {
      newErrors.checkIn = "Check-in date cannot be in the past.";
    }

    if (!values.checkOut) {
      newErrors.checkOut = "Please select a departure date.";
    } else if (values.checkIn && values.checkOut <= values.checkIn) {
      newErrors.checkOut = "Check-out date must be later than check-in date.";
    }

    if (!values.room) {
      newErrors.room = "Please select a preferred room category.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Format neatly structured inquiry message for host
    const lines = [
      `Hello ${siteConfig.name}, I would like to enquire about room availability:`,
      `• Guest Name: ${values.fullName}`,
      `• Email: ${values.email}`,
      `• Phone: ${values.phone}`,
      `• Preferred Room: ${values.room}`,
      `• Check-In Date: ${values.checkIn}`,
      `• Check-Out Date: ${values.checkOut}`,
      `• Guests: ${values.guests}`,
      values.message.trim() ? `• Special Notes: ${values.message.trim()}` : "",
      `Thank you!`,
    ].filter(Boolean);

    const fullMessage = lines.join("\n");
    const encoded = encodeURIComponent(fullMessage);

    if (siteConfig.contact.whatsAppConfigured && siteConfig.contact.whatsAppNumber) {
      const waUrl = `https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encoded}`;
      setWhatsappUrl(waUrl);
      setSubmitted(true);
      // Open in new tab securely
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } else {
      // Configuration notice mode if phone not provided
      setWhatsappUrl(null);
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-[#FAF8F3] border border-[#EFEBE1] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
      {submitted ? (
        <div className="py-8 text-center space-y-5 animate-in fade-in">
          <div className="w-14 h-14 bg-[#244638]/10 text-[#244638] rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8 text-[#244638]" />
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#244638]">
              Enquiry Prepared
            </h3>
            <p className="text-sm text-[#555A54] max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-[#292D29]">{values.fullName}</strong>. Your enquiry details have been compiled for direct dispatch to our host.
            </p>
          </div>

          {/* Action trigger button */}
          {whatsappUrl ? (
            <div className="pt-2 space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] px-6 py-3.5 rounded-full font-medium text-sm transition-all shadow hover:shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-[#A8B5A0]" />
                <span>Open in WhatsApp</span>
              </a>
              <p className="text-xs text-[#7A8179]">
                If WhatsApp did not launch automatically, click the button above.
              </p>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-[#EFEBE1]/80 text-xs text-[#555A54] max-w-md mx-auto text-left space-y-1">
              <p className="font-semibold text-[#292D29]">Configuration Note for Site Owner:</p>
              <p>
                Please configure <code>siteConfig.contact.whatsAppNumber</code> in <code>src/config/site.ts</code> with your verified international phone number.
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-[#EFEBE1] max-w-md mx-auto">
            <p className="text-xs text-[#7A8179] flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#C8795A] shrink-0" />
              <span>Enquiries are subject to host availability confirmation.</span>
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-4 text-xs font-semibold text-[#244638] hover:underline"
            >
              ← Edit enquiry details or submit another
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="border-b border-[#EFEBE1] pb-4">
            <h3 className="font-serif text-2xl text-[#244638]">
              Reservation Enquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#7A8179] mt-1">
              Provide your prospective travel dates and preferred accommodation.
            </p>
          </div>

          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
              >
                Full Name <span className="text-[#C8795A]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={values.fullName}
                onChange={handleChange}
                placeholder="e.g. Eleanor Vance"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] placeholder:text-[#A8B5A0] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                  errors.fullName ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
              >
                Email Address <span className="text-[#C8795A]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={handleChange}
                placeholder="eleanor@example.com"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] placeholder:text-[#A8B5A0] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                  errors.email ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Number of Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
              >
                Phone Number <span className="text-[#C8795A]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={values.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] placeholder:text-[#A8B5A0] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                  errors.phone ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="guests"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
              >
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={values.guests}
                onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-[#EFEBE1] bg-white text-sm text-[#292D29] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all"
              >
                <option value="1 Guest">1 Guest (Solo Traveler)</option>
                <option value="2 Guests">2 Guests (Couple or Friends)</option>
                <option value="3 Guests">3 Guests</option>
                <option value="4 Guests">4 Guests (Family Stay)</option>
                <option value="5+ Guests">5+ Guests (Enquire for Multi-room)</option>
              </select>
            </div>
          </div>

          {/* Dates: Check In & Check Out */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label
                htmlFor="checkIn"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5 flex items-center justify-between"
              >
                <span>Check-in Date <span className="text-[#C8795A]">*</span></span>
                <Calendar className="w-3.5 h-3.5 text-[#7A8179]" />
              </label>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                min={todayStr}
                required
                value={values.checkIn}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                  errors.checkIn ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
                }`}
              />
              {errors.checkIn && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.checkIn}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="checkOut"
                className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5 flex items-center justify-between"
              >
                <span>Check-out Date <span className="text-[#C8795A]">*</span></span>
                <Calendar className="w-3.5 h-3.5 text-[#7A8179]" />
              </label>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                min={values.checkIn || todayStr}
                required
                value={values.checkOut}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                  errors.checkOut ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
                }`}
              />
              {errors.checkOut && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.checkOut}
                </p>
              )}
            </div>
          </div>

          {/* Preferred Room */}
          <div>
            <label
              htmlFor="room"
              className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
            >
              Preferred Room Category <span className="text-[#C8795A]">*</span>
            </label>
            <select
              id="room"
              name="room"
              value={values.room}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white text-sm text-[#292D29] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all ${
                errors.room ? "border-red-500 bg-red-50/20" : "border-[#EFEBE1]"
              }`}
            >
              <option value="">Select a room category</option>
              {siteConfig.rooms.map((room) => (
                <option key={room.id} value={room.name}>
                  {room.name} ({room.occupancy})
                </option>
              ))}
            </select>
            {errors.room && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.room}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-wider text-[#292D29] mb-1.5"
            >
              Additional Requests or Questions <span className="text-[#7A8179] font-normal">(Optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={values.message}
              onChange={handleChange}
              placeholder="Tell us if you require early check-in, cot for child, dietary notes, or quiet floor..."
              className="w-full px-4 py-2.5 rounded-lg border border-[#EFEBE1] bg-white text-sm text-[#292D29] placeholder:text-[#A8B5A0] focus:outline-none focus:ring-2 focus:ring-[#244638] transition-all resize-y"
            ></textarea>
          </div>

          {/* Disclaimer & Submit */}
          <div className="pt-2 space-y-4">
            <div className="bg-[#EFEBE1]/60 p-3.5 rounded-xl flex items-start gap-2.5 text-xs text-[#555A54] leading-relaxed">
              <Info className="w-4 h-4 text-[#C8795A] shrink-0 mt-0.5" />
              <span>
                <strong>Note:</strong> This enquiry sends your preferred dates directly to the host for personal review. Dates are subject to availability and do not constitute a confirmed or pre-charged booking.
              </span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#244638] hover:bg-[#1b352a] text-[#F7F4EC] py-3.5 px-6 rounded-full font-medium text-sm sm:text-base transition-all shadow hover:shadow-md active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638]"
            >
              <span>Submit Enquiry via WhatsApp</span>
              <Send className="w-4 h-4 text-[#A8B5A0]" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FAF8F3] border border-[#EFEBE1] rounded-2xl p-8 text-center text-sm text-[#7A8179]">
          Loading enquiry form...
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
