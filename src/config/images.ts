export interface GalleryItem {
  id: string;
  title: string;
  category: "bedrooms" | "interiors" | "details" | "exterior";
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
  aspect: "landscape" | "portrait" | "wide";
}

export const FALLBACK_IMAGE_PATH = "/images/hero-exterior.jpg";

export const siteImages = {
  // Hero Images
  homeHero: {
    src: "/images/hero-exterior.jpg",
    alt: "The Willow House exterior bathed in warm evening sunlight with landscaped grounds and welcoming stone veranda",
  },
  roomsHero: {
    src: "/images/room-deluxe.jpg",
    alt: "Spacious boutique bedroom suite with natural oak details, soft linen drapery, and morning light",
  },
  aboutHero: {
    src: "/images/interior-suite.jpg",
    alt: "Inviting sunlit interior of The Willow House showing handcrafted furniture and quiet ambiance",
  },
  galleryHero: {
    src: "/images/lounge-parlor.jpg",
    alt: "Warm guest living room with rustic fireplace, comfortable seating, and curated books",
  },
  galleryFeatured: {
    src: "/images/dining-breakfast.jpg",
    alt: "Inviting sunlit guest house dining area with natural oak table and morning calm",
    caption: "An inviting space. A moment to settle in.",
  },
  contactHero: {
    src: "/images/garden-terrace.jpg",
    alt: "Stone courtyard and tranquil garden pathway leading to the guest house entrance",
  },

  // About Section Editorial Images
  aboutStory: "/images/dining-breakfast.jpg",
  aboutPhilosophy: "/images/library-reading.jpg",
  aboutDetail: "/images/window-coffee.jpg",

  // Editorial Travel Style Images (Rooms page)
  travelScenery: "/images/garden-terrace.jpg",
  travelTogether: "/images/room-family.jpg",
  travelPractical: "/images/room-standard.jpg",

  // Unique Detail Feature Images (Gallery page Section 4)
  detailTextures: "/images/bed-linens.jpg",
  detailLighting: "/images/bedside-lamp.jpg",
  detailSeating: "/images/library-reading.jpg",
  detailWindowLight: "/images/window-coffee.jpg",

  // Curated 12-Item Gallery Collection
  gallery: [
    {
      id: "gal-1",
      title: "The Main House & Grounds",
      category: "exterior",
      categoryLabel: "Exterior",
      src: "/images/hero-exterior.jpg",
      alt: "The Willow House heritage stone exterior and tranquil grounds",
      caption: "Our peaceful country setting, surrounded by mature willows and manicured native flowerbeds.",
      aspect: "landscape",
    },
    {
      id: "gal-2",
      title: "Deluxe King Bedroom",
      category: "bedrooms",
      categoryLabel: "Bedrooms",
      src: "/images/room-deluxe.jpg",
      alt: "Deluxe Comfort Room with king bed and relaxed sitting area",
      caption: "Spacious master suite designed with warm timber accents and custom linen drapery.",
      aspect: "landscape",
    },
    {
      id: "gal-3",
      title: "Cozy Standard Queen",
      category: "bedrooms",
      categoryLabel: "Bedrooms",
      src: "/images/room-standard.jpg",
      alt: "Cozy Standard Room with warm timber headboard and natural lighting",
      caption: "A restful personal sanctuary with plush bedding, artisan tea tray, and quiet courtyard view.",
      aspect: "landscape",
    },
    {
      id: "gal-4",
      title: "The Fireside Sitting Parlor",
      category: "interiors",
      categoryLabel: "Interiors",
      src: "/images/lounge-parlor.jpg",
      alt: "Guest sitting room with comfortable armchairs and warm fireplace",
      caption: "Unwind in the shared parlor with a book, afternoon tea, or conversation by the fire.",
      aspect: "landscape",
    },
    {
      id: "gal-5",
      title: "Family Stay Bedroom Suite",
      category: "bedrooms",
      categoryLabel: "Bedrooms",
      src: "/images/room-family.jpg",
      alt: "Family Stay Room with multiple comfortable beds and ample space",
      caption: "Generously proportioned accommodation tailored for peaceful family travels.",
      aspect: "landscape",
    },
    {
      id: "gal-6",
      title: "Breakfast & Dining Nook",
      category: "interiors",
      categoryLabel: "Interiors",
      src: "/images/dining-breakfast.jpg",
      alt: "Sunlit dining space with wooden communal table and morning light",
      caption: "A bright, calm room to savor your morning coffee or enjoy an afternoon snack.",
      aspect: "portrait",
    },
    {
      id: "gal-7",
      title: "Quiet Reading Library",
      category: "interiors",
      categoryLabel: "Interiors",
      src: "/images/library-reading.jpg",
      alt: "Intimate reading corner with upholstered armchair and curated book collection",
      caption: "A quiet corner stocked with local history, literature, and regional trail maps.",
      aspect: "portrait",
    },
    {
      id: "gal-8",
      title: "Organic Bed Linens & Details",
      category: "details",
      categoryLabel: "Details",
      src: "/images/bed-linens.jpg",
      alt: "Close up of crisp organic cotton bedding and warm bedroom lighting",
      caption: "Every bed is dressed in washed organic cotton with hypoallergenic layers for deep rest.",
      aspect: "portrait",
    },
    {
      id: "gal-9",
      title: "Morning Sun on the Stone Terrace",
      category: "exterior",
      categoryLabel: "Exterior",
      src: "/images/garden-terrace.jpg",
      alt: "Garden walkway and stone terrace surrounded by blooming greenery",
      caption: "Stone pathways weave through herb gardens and shady sitting spots.",
      aspect: "landscape",
    },
    {
      id: "gal-10",
      title: "Morning Coffee & Window Light",
      category: "details",
      categoryLabel: "Details",
      src: "/images/window-coffee.jpg",
      alt: "Freshly brewed coffee cup on wooden table near window light",
      caption: "Take your time. Unhurried mornings are at the heart of our hospitality.",
      aspect: "portrait",
    },
    {
      id: "gal-11",
      title: "Warm Bedside Lighting",
      category: "details",
      categoryLabel: "Details",
      src: "/images/bedside-lamp.jpg",
      alt: "Warm ambient bedside lamp and textured wall surface",
      caption: "Warm amber lighting creates a calm, soothing atmosphere as dusk arrives.",
      aspect: "portrait",
    },
    {
      id: "gal-12",
      title: "Twilight Entrance & Lanterns",
      category: "exterior",
      categoryLabel: "Exterior",
      src: "/images/twilight-entrance.jpg",
      alt: "Evening lights glowing outside the guest house entrance",
      caption: "Soft lanterns welcome you back after a day of exploring the countryside.",
      aspect: "landscape",
    },
  ] as GalleryItem[],
};
