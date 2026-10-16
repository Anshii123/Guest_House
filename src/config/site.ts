export interface Room {
  id: string;
  slug: string;
  shortLabel: string;
  name: string;
  heading: string;
  tagline: string;
  description: string;
  occupancy: string;
  bed: string;
  size: string;
  verifiedAmenities: string[];
  editableNote: string;
  ctaText: string;
  image: string;
  imageAlt: string;
  featured: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "The Willow House",
  tagline: "A Little More Comfort. A Lot More Welcome.",
  eyebrow: "WELCOME TO THE WILLOW HOUSE",
  shortDescription:
    "A boutique guest house offering thoughtful comfort, calm spaces, and warm hospitality for families, couples, and solo travelers.",
  fullDescription:
    "Slow down, settle in, and enjoy the comfort of a thoughtfully prepared stay. At The Willow House, welcoming spaces and a relaxed atmosphere make it easier to feel at home, wherever your journey takes you.",
  url: "https://thewillowhouse.example.com",

  // Announcement banner
  announcement: "Thoughtful stays. Warm hospitality. Your home away from home.",

  // Editorial Hero Tag
  editorialHeroDetail: "COMFORT IN EVERY CORNER · WELCOME IN EVERY DETAIL",

  // Editable contact information (clearly marked placeholders)
  contact: {
    phone: "+1 (555) 234-8901",
    phoneHref: "tel:+15552348901",
    email: "enquiries@thewillowhouse.example.com",
    emailHref: "mailto:enquiries@thewillowhouse.example.com",
    address: "142 Meadowbrook Lane, Willow Valley, Countryside",
    addressShort: "Meadowbrook Lane, Willow Valley",
    mapsUrl: "https://maps.google.com/?q=Willow+Valley+Guest+House",
    whatsAppNumber: "15552348901",
    whatsAppFormatted: "+1 555-234-8901",
    whatsAppConfigured: true,
    businessHours: "Reception: 8:00 AM – 8:00 PM (Guest arrival by prior arrangement)",
    responseWindow: "Direct host responses typically within 2–4 hours during daytime hours.",
  },

  // Main navigation
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Rooms & Stay", href: "/rooms" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],

  // Rooms Data (Editable sample categories)
  rooms: [
    {
      id: "cozy-standard",
      slug: "standard",
      shortLabel: "SIMPLE COMFORT",
      name: "Cozy Standard Room",
      heading: "A Comfortable Place to Recharge.",
      tagline: "A welcoming retreat with a simple, considered atmosphere. Ideal for travelers who value a comfortable place to recharge between their plans.",
      description:
        "Designed around a relaxed, uncomplicated stay, the Cozy Standard Room is an example of the practical comfort many travelers look for. Its visual direction should feel warm, uncluttered, and inviting, with thoughtful styling and a restful atmosphere.",
      occupancy: "To be confirmed (Estimated 1–2 Guests)",
      bed: "To be confirmed (e.g. 1 Queen Bed)",
      size: "To be confirmed",
      verifiedAmenities: [
        "Crisp organic cotton bedding & hypoallergenic pillows",
        "Private ensuite bathroom with rainfall shower",
        "Artisan tea tray & electric kettle",
        "Complimentary high-speed fiber Wi-Fi",
        "Quiet courtyard garden outlook",
        "Daily housekeeping & fresh linens",
      ],
      editableNote: "Sample accommodation concept. Specific room features and availability to be confirmed prior to booking.",
      ctaText: "Enquire About the Standard Room",
      image: "/images/room-standard.jpg",
      imageAlt: "Cozy Standard Room featuring warm timber accents and peaceful morning lighting",
      featured: true,
    },
    {
      id: "deluxe-comfort",
      slug: "deluxe",
      shortLabel: "A LITTLE EXTRA SPACE",
      name: "Deluxe Comfort Room",
      heading: "Settle In and Slow Down.",
      tagline: "An inviting room concept with a more spacious visual feel, thoughtful styling, and a calm setting for a relaxed stay.",
      description:
        "The Deluxe Comfort Room concept places emphasis on a more spacious presentation, a considered interior, and the small visual details that help a room feel inviting. It is suited to guests who want their accommodation to feel like part of the experience.",
      occupancy: "To be confirmed (Estimated 2 Guests)",
      bed: "To be confirmed (e.g. 1 King Bed)",
      size: "To be confirmed",
      verifiedAmenities: [
        "Spacious private sitting lounge area with armchairs",
        "Premium king-sized mattress and natural bedding",
        "Private ensuite bathroom with vanity & soaking bath",
        "Locally roasted coffee beans & French press",
        "Individually controlled climate & silent fan",
        "Panoramic garden views with generous natural light",
      ],
      editableNote: "Sample accommodation concept. Travel cots or extra pillows available on advance request.",
      ctaText: "Enquire About the Deluxe Room",
      image: "/images/room-deluxe.jpg",
      imageAlt: "Deluxe Comfort Room with expansive king bed and comfortable lounge seating",
      featured: true,
    },
    {
      id: "family-stay",
      slug: "family",
      shortLabel: "ROOM FOR TOGETHERNESS",
      name: "Family Stay Room",
      heading: "A Little More Room for Everyone.",
      tagline: "A family-oriented accommodation concept designed around shared comfort and the practical needs of traveling together.",
      description:
        "Traveling together means balancing different needs, schedules, and routines. The Family Stay Room concept focuses on a welcoming atmosphere and a practical accommodation layout for guests planning a shared trip.",
      occupancy: "To be confirmed (Estimated 3–4 Guests)",
      bed: "To be confirmed (e.g. 1 Queen + Twin beds)",
      size: "To be confirmed",
      verifiedAmenities: [
        "Flexible shared sleeping zones for adults and children",
        "Generous private family bathroom with dual basins",
        "Compact refrigeration unit & tea/coffee station",
        "Ample built-in wardrobe storage and luggage benches",
        "Curated classic board games and family storybooks",
        "Acoustically insulated walls for peaceful evenings",
      ],
      editableNote: "Sample accommodation concept. Child cot and bed guards provided with advance notice.",
      ctaText: "Enquire About the Family Room",
      image: "/images/room-family.jpg",
      imageAlt: "Family Stay Room configured with multiple comfortable beds and ample natural space",
      featured: true,
    },
  ] as Room[],

  // Rooms Page FAQ
  roomsFAQ: [
    {
      question: "How do I enquire about a room?",
      answer:
        "Simply click 'Enquire About This Room' on any category or visit our Contact & Booking page. Share your dates, guest count, and room preference to begin a direct conversation with our host.",
    },
    {
      question: "Can I ask about specific dates before booking?",
      answer:
        "Yes, absolutely. Because we operate as an independent boutique guest house, we encourage discussing your preferred dates directly before making firm travel arrangements.",
    },
    {
      question: "How can I confirm which amenities are available?",
      answer:
        "Verified inclusions are listed within each room category. If you need confirmation on specific items such as travel cots, hairdryers, or quiet floor positions, simply note it in your enquiry.",
    },
    {
      question: "Can I ask about family accommodation?",
      answer:
        "Yes. Our Family Stay Room is thoughtfully arranged for parents traveling with children or small travel groups. Please mention your group size so we can confirm the best arrangement.",
    },
    {
      question: "How do I discuss special requirements?",
      answer:
        "Whether you need ground-floor access, fragrance-free linens, late self-check-in, or early luggage drop-off, include your requests in the message field of your enquiry.",
    },
    {
      question: "When is my booking considered confirmed?",
      answer:
        "Your stay is confirmed only after our host verifies availability for your dates and exchanges direct booking confirmation with you. Submitting an enquiry does not charge you or confirm a reservation.",
    },
  ] as FAQItem[],

  // Contact Page FAQ
  contactFAQ: [
    {
      question: "How quickly will I receive a response?",
      answer:
        "We typically reply to direct enquiries within 2–4 hours during regular reception hours. Enquiries sent in the evening will be answered first thing the following morning.",
    },
    {
      question: "How do I confirm room availability?",
      answer:
        "Once you send your preferred check-in and check-out dates, we verify our booking diary and reply directly with available room options and current arrangements.",
    },
    {
      question: "Can I request a particular room?",
      answer:
        "Yes. You can select your preferred category (Cozy Standard, Deluxe Comfort, or Family Stay) directly in the enquiry form or when messaging our host.",
    },
    {
      question: "Can I ask about special requirements?",
      answer:
        "We are happy to accommodate travel requirements including flexible arrival times, quiet rooms, extra pillows, or local transport recommendations. Just let us know in your note.",
    },
    {
      question: "Does submitting this form confirm my booking?",
      answer:
        "No. This form compiles your enquiry and opens a direct line with our host via WhatsApp or email. Booking arrangements are only finalized upon mutual host confirmation.",
    },
  ] as FAQItem[],
};
