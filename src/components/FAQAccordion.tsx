"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`space-y-3.5 divide-y divide-[#EFEBE1]/60 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={index}
            className={`pt-3.5 first:pt-0 transition-colors ${
              isOpen ? "bg-white/40 rounded-xl p-4 sm:p-5" : "p-3 sm:p-4"
            }`}
          >
            <h3>
              <button
                type="button"
                id={headingId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(index)}
                className="w-full flex items-center justify-between text-left text-base sm:text-lg font-serif text-[#244638] hover:text-[#C8795A] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#244638] rounded-md py-1"
              >
                <span>{item.question}</span>
                <span
                  className={`ml-4 shrink-0 p-1.5 rounded-full bg-[#EFEBE1]/60 text-[#244638] transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#244638] text-[#F7F4EC]" : ""
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className={`mt-2.5 text-sm sm:text-base text-[#555A54] leading-relaxed transition-all duration-300 ${
                isOpen ? "block animate-in fade-in slide-in-from-top-1" : "hidden"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
