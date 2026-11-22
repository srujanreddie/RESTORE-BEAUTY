export interface SocialLink {
  id: 'instagram' | 'whatsapp' | 'phone';
  label: string;
  handle: string;
  href: string;
}

export interface SalonStat {
  id: string;
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  context: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  logoPath: string;
}

export interface MenuServiceItem {
  name: string;
  description: string;
  regularPrice: string;
  memberPrice: string;
  duration: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  items: MenuServiceItem[];
}

export interface FeaturedServiceShowcase {
  id: string;
  categorySlug: string;
  label: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
}

export interface AccordionServiceCategory {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  context: string;
  initials: string;
  rating: number;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
}

export interface SalonFeatureCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SalonData {
  name: string;
  shortName: string;
  businessType: string;
  womenOnly: boolean;
  heroHeadline: string;
  heroSubheadline: string;
  heroBadge: string;
  founder: {
    name: string;
    role: string;
    certifications: string[];
    visitingCardImage: string;
  };
  rating: {
    score: number;
    max: number;
    reviewsCount: number;
    source: string;
  };
  contact: {
    phone: string;
    callUri: string;
    whatsappUri: string;
    whatsappBase: string;
    email: string;
    openingDays: string;
    openingHours: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    fullAddress: string;
    landmark: string;
    mapsEmbedUrl: string;
    mapsDirectUrl: string;
  };
  socialLinks: SocialLink[];
  about: {
    headline: string;
    introLeft: string;
    introRight: string;
    fullStoryParagraphs: string[];
    vision: {
      title: string;
      text: string;
    };
    standards: {
      title: string;
      text: string;
    };
    amenities: string[];
    paymentMethods: string[];
    previewImages: {
      src: string;
      alt: string;
      caption: string;
    }[];
  };
  media: {
    heroPortrait: {
      src: string;
      alt: string;
      expectedPath: string;
      recommendedDimensions: string;
    };
    statsPortrait: {
      src: string;
      alt: string;
      expectedPath: string;
      recommendedDimensions: string;
    };
    navySectionPortrait: {
      src: string;
      alt: string;
      expectedPath: string;
      recommendedDimensions: string;
    };
    exteriorFacade: {
      src: string;
      alt: string;
    };
    exteriorSignboard: {
      src: string;
      alt: string;
    };
  };
  stats: SalonStat[];
  featuredServices: FeaturedServiceShowcase[];
  skinAndBeautyAccordion: AccordionServiceCategory[];
  brandLogos: BrandPartner[];
  mensMenu: MenuCategory[];
  womensMenu: MenuCategory[];
  serviceFeatureGrid: SalonFeatureCard[];
  testimonials: TestimonialItem[];
  studioGallery: GalleryPhoto[];
}

export function buildWhatsAppBookingUrl(serviceName?: string): string {
  const base = 'https://wa.me/917032360405';
  const text = serviceName
    ? `Hi Restore Beauty Salon, I would like to inquire about / book: ${serviceName}`
    : 'Hi Restore Salon, I would like to book an appointment';
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const salonData: SalonData = {
  name: 'Restore Beauty Salon For Women',
  shortName: 'RESTORE BEAUTY',
  businessType: 'Ladies Beauty Parlour & Spa',
  womenOnly: true,
  heroHeadline: 'Restore Your Natural Radiance & Glow',
  heroSubheadline:
    'Experience world-class skin, hair, and bridal care led by CIDESCO International Certified cosmetologist K. Shirisha in a 100% private, women-only sanctuary in Pragathi Nagar, Hyderabad.',
  heroBadge: '5.0 Rated Ladies Salon · 200+ Verified Reviews · CIDESCO Certified',
  founder: {
    name: 'K. Shirisha',
    role: 'Founder & Lead Cosmetologist',
    certifications: [
      'CIDESCO International Certified Beauty Therapist & Makeup Artist',
      'Post Graduate Diploma in Cosmetology',
    ],
    visitingCardImage: '/assets/aistudio/logo_and_visiting_card_shirisha_cidesco_c8ce72fe.jpg',
  },
  rating: {
    score: 5.0,
    max: 5.0,
    reviewsCount: 200,
    source: 'Justdial Verified',
  },
  contact: {
    phone: '+91 70323 60405',
    callUri: 'tel:+917032360405',
    whatsappUri:
      'https://wa.me/917032360405?text=Hi%20Restore%20Salon,%20I%20would%20like%20to%20book%20an%20appointment',
    whatsappBase: 'https://wa.me/917032360405',
    email: '',
    openingDays: 'Monday – Sunday (All 7 Days)',
    openingHours: '8:00 AM – 10:00 PM',
    addressLine1: 'Shop No. 3 & 4, Plot No. 11, First Floor',
    addressLine2: 'Nakoda Deep Residency, Rajiv Gruha Kalpa Main Road',
    addressLine3: 'Pragathi Nagar, Kukatpally, Hyderabad, Telangana – 500090',
    fullAddress:
      'Shop No. 3 & 4, Plot No. 11, First Floor, Nakoda Deep Residency, Rajiv Gruha Kalpa Main Road, Pragathi Nagar, Kukatpally, Hyderabad, Telangana – 500090',
    landmark: 'Near Butterfly School / Above Sri Tirupatamma General Stores',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Restore+Beauty+Salon+For+Women+Pragathi+Nagar+Hyderabad&t=&z=16&ie=UTF8&iwloc=&output=embed',
    mapsDirectUrl:
      'https://www.google.com/maps/search/?api=1&query=Restore+Beauty+Salon+For+Women+Pragathi+Nagar+Hyderabad',
  },
  socialLinks: [
    {
      id: 'instagram',
      label: 'Instagram',
      handle: 'Restore Beauty Salon For Women',
      href: 'https://www.instagram.com/popular/restore-beauty-salon-for-women-hyderabad/',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      handle: '+91 70323 60405',
      href: 'https://wa.me/917032360405?text=Hi%20Restore%20Salon,%20I%20would%20like%20to%20book%20an%20appointment',
    },
  ],
  about: {
    headline: 'Meet K. Shirisha & The Restore Philosophy',
    introLeft:
      'At Restore Beauty Salon For Women, beauty care is both scientifically grounded and deeply therapeutic. Founded and led by K. Shirisha, a CIDESCO International Certified Beauty Therapist and Cosmetologist, our single-branch studio in Pragathi Nagar provides dedicated women-only care.',
    introRight:
      'From medical-grade hygiene protocols and sanitized cosmetology instruments to personalized skin and hair consultations tailored to your routine, every detail is thoughtfully arranged so you leave feeling genuinely restored.',
    fullStoryParagraphs: [
      'At Restore Beauty Salon For Women, we believe beauty care should be both scientifically grounded and deeply therapeutic. Founded and led by K. Shirisha, a CIDESCO International Certified Beauty Therapist & Makeup Artist with a Post Graduate Diploma in Cosmetology, our studio offers personalized consultations tailored to your unique skin type, hair texture, and lifestyle.',
      'Unlike crowded unisex chains, our Pragathi Nagar sanctuary is 100% women-only—female specialists and female clients exclusively—so every facial, hair treatment, grooming ritual, and pre-bridal session happens in complete privacy and comfort.',
      'From medical-grade hygiene protocols and sterilized tools to calm private treatment rooms and flexible 8:00 AM to 10:00 PM hours across all 7 days of the week, every visit is designed around your schedule and wellbeing.',
    ],
    vision: {
      title: 'CIDESCO-LED EXPERTISE',
      text: 'CIDESCO (Zurich, Switzerland) represents the international gold standard in aesthetics and beauty therapy. Every facial diagnosis, hair restoration treatment, and bridal makeover is guided by formal cosmetology science rather than guesswork.',
    },
    standards: {
      title: 'WOMEN-ONLY SANCTUARY',
      text: 'Fully air-conditioned private treatment suites, sanitized tools, fresh spa linens, complimentary consultations and beverages, and convenient 8:00 AM – 10:00 PM availability seven days a week for working women and homemakers alike.',
    },
    amenities: [
      '100% Women-Only Space',
      'Fully Air-Conditioned',
      'CIDESCO Certified Specialists',
      'Hygienic & Sanitized Tools',
      'Complimentary Consultation & Beverages',
      'Open 8:00 AM to 10:00 PM',
    ],
    paymentMethods: [
      'UPI (Google Pay, PhonePe, Paytm, BHIM)',
      'Debit / Credit Cards',
      'Cash',
    ],
    previewImages: [
      {
        src: '/assets/aistudio/reception_desk_foliage_accent_wall_43e9878f.jpg',
        alt: 'CIDESCO International certificates displayed at the Restore Beauty Salon consultation area',
        caption: 'CIDESCO Certified Studio',
      },
      {
        src: '/assets/aistudio/facial_massage_treatment_bed_01_80acb1fe.jpg',
        alt: 'Private air-conditioned facial treatment bed with crisp white linens at Restore Beauty Salon',
        caption: 'Private Treatment Suite',
      },
      {
        src: '/assets/aistudio/salon_styling_floor_wide_view_8c8195fa.jpg',
        alt: 'Restore Beauty Salon hair styling floor with floral-framed mirrors and recliner wash basin',
        caption: 'Hair & Styling Floor',
      },
    ],
  },
  media: {
    heroPortrait: {
      src: '/assets/aistudio/styling_station_ornate_mirrors_chairs_3b117e1d.jpg',
      alt: 'Restore Beauty Salon For Women styling station with warm lighting, floral mirror frame, and hydraulic salon chairs',
      expectedPath: '/assets/aistudio/styling_station_ornate_mirrors_chairs_3b117e1d.jpg',
      recommendedDimensions: '800x900',
    },
    statsPortrait: {
      src: '/assets/aistudio/ambience_spotlights_mirror_decor_689104c1.jpg',
      alt: 'Warm illuminated styling chair and botanical mirror decor inside Restore Beauty Salon',
      expectedPath: '/assets/aistudio/ambience_spotlights_mirror_decor_689104c1.jpg',
      recommendedDimensions: '720x900',
    },
    navySectionPortrait: {
      src: '/assets/aistudio/facial_bed_calm_mood_lighting_2721b6a8.jpg',
      alt: 'Serene skin therapy room with LED phototherapy arch and mood lighting at Restore Beauty Salon',
      expectedPath: '/assets/aistudio/facial_bed_calm_mood_lighting_2721b6a8.jpg',
      recommendedDimensions: '760x880',
    },
    exteriorFacade: {
      src: '/assets/aistudio/building_facade_and_balcony_0928e4ba.jpg',
      alt: 'Restore Beauty Salon For Women exterior signboard on the first floor of Nakoda Deep Residency',
    },
    exteriorSignboard: {
      src: '/assets/aistudio/signboard_close_up_57b3575f.jpg',
      alt: 'Close-up of Restore Beauty Salon For Women signboard displaying appointment number 70323 60405',
    },
  },
  stats: [
    {
      id: 'rating',
      value: 5.0,
      decimals: 1,
      suffix: ' / 5',
      label: 'Justdial Verified Rating',
      context: 'Consistent five-star client satisfaction in Pragathi Nagar',
    },
    {
      id: 'reviews',
      value: 200,
      suffix: '+',
      label: 'Verified Client Reviews',
      context: 'Trusted by women across Kukatpally & Pragathi Nagar',
    },
    {
      id: 'days',
      value: 7,
      suffix: ' Days',
      label: 'Open Every Week',
      context: 'Flexible 8:00 AM – 10:00 PM hours including weekends',
    },
    {
      id: 'privacy',
      value: 100,
      suffix: '%',
      label: 'Women-Only Sanctuary',
      context: 'Exclusive female specialists and complete client privacy',
    },
  ],
  featuredServices: [
    {
      id: 'facials-skin',
      categorySlug: 'facials-skin-rejuvenation',
      label: 'CIDESCO Skin Care',
      title: 'Facials & Skin Rejuvenation',
      subtitle: 'O3+ Radiance, herbal glow, D-Tan therapy & deep pore cleansing',
      image: '/assets/aistudio/facial_massage_treatment_bed_01_80acb1fe.jpg',
      imageAlt: 'Private facial and skin rejuvenation suite at Restore Beauty Salon',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'bridal-studio',
      categorySlug: 'bridal-occasion-studio',
      label: 'Occasion Studio',
      title: 'Bridal & Makeover Studio',
      subtitle: 'Pre-bridal glow packages, HD bridal makeup & saree draping',
      image: '/assets/aistudio/bridal_makeup_and_hair_makeover_e804f3b7.jpg',
      imageAlt: 'Bridal makeup and traditional hair styling showcase at Restore Beauty Salon',
      aspectClass: 'aspect-[4/5]',
    },
    {
      id: 'hair-care',
      categorySlug: 'hair-care-styling',
      label: 'Hair Studio',
      title: 'Hair Care & Advanced Styling',
      subtitle: 'Precision cuts, Keratin, Hair Botox, smoothening & nourishing spa',
      image: '/assets/aistudio/hair_wash_shampoo_basin_recliner_4602b779.jpg',
      imageAlt: 'Reclining shampoo basin and hair treatment corner at Restore Beauty Salon',
      aspectClass: 'aspect-[4/3]',
    },
    {
      id: 'reflexology-spa',
      categorySlug: 'hand-foot-reflexology-spa',
      label: 'Wellness Rituals',
      title: 'Hand & Foot Reflexology Spa',
      subtitle: 'Deluxe foot reflexology pedicure, deep foot massage & spa manicure',
      image: '/assets/aistudio/pedicure_foot_reflexology_spa_tub_fdbcb2fb.jpg',
      imageAlt: 'Relaxing foot reflexology and pedicure lounge at Restore Beauty Salon',
      aspectClass: 'aspect-[4/4]',
    },
  ],
  skinAndBeautyAccordion: [
    {
      id: 'facials-accordion',
      title: 'Facials & Skin Rejuvenation',
      summary:
        'Dermatologist-grade O3+ brightening facials, gentle fruit enzyme rituals, sun-damage D-Tan packs, and ozone-steam deep pore extraction tailored after personal skin analysis.',
      highlights: [
        'O3+ Radiance & Brightening Facial',
        'Signature Herbal & Fruit Facials',
        'D-Tan Therapy (Face & Neck)',
        'Deep Pore Cleansing & Extraction',
      ],
    },
    {
      id: 'hair-accordion',
      title: 'Hair Care & Advanced Treatments',
      summary:
        'From precision layered and bob cuts to protein-rich Keratin, deep-repair Hair Botox, permanent smoothening, ammonia-free color, and tension-relieving scalp spa sessions.',
      highlights: [
        'Precision & Advance Haircuts',
        'Keratin Protein & Hair Botox Therapy',
        'Permanent Smoothening & Straightening',
        'Global Color, Balayage & Deep Hair Spa',
      ],
    },
    {
      id: 'grooming-accordion',
      title: 'Grooming, Waxing & Lash Styling',
      summary:
        'Gentle everyday hygiene rituals featuring painless colophony-free Rica liposoluble cartridge waxing for sensitive skin, clean eyebrow threading, mild herbal bleach, and semi-permanent eyelash extensions.',
      highlights: [
        'Precision Threading (Eyebrows & Face)',
        'Rica / Liposoluble Cartridge Waxing',
        'Custom Eyelash Extensions',
        'Herbal & Oxy Bleach',
      ],
    },
    {
      id: 'bridal-accordion',
      title: 'Bridal, Spa & Reflexology Rituals',
      summary:
        'Camera-ready waterproof HD bridal and engagement makeovers, customized multi-session pre-bridal skincare plans, traditional saree draping, and soothing foot reflexology pedicures.',
      highlights: [
        'Customized Pre-Bridal Packages',
        'HD Bridal & Engagement Makeup',
        'Professional Saree Draping',
        'Deluxe Foot Reflexology Pedicure & Spa Manicure',
      ],
    },
  ],
  // Intentionally empty: zero fabricated partner brand logos
  brandLogos: [],
  // Intentionally empty: 100% Women-Only Salon
  mensMenu: [],
  womensMenu: [
    {
      id: 'hair-care-styling',
      title: 'Hair Care & Advanced Styling',
      subtitle: 'Precision cuts, protein restoration, smoothening, color & scalp therapy',
      image: '/assets/aistudio/salon_styling_floor_wide_view_8c8195fa.jpg',
      imageAlt: 'Restore Beauty Salon hair styling floor and wash station',
      items: [
        {
          name: 'Precision & Advance Haircuts',
          description: 'Layer, Feather, Bob, Step, U/V cuts with wash and styling.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Keratin Protein Treatment',
          description: 'Intense frizz control, protein restoration, and silky shine.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Hair Botox Therapy',
          description: 'Deep conditioning therapy for damaged or chemically treated hair.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Permanent Smoothening / Straightening',
          description: 'Sleek, straight, and manageable hair with post-care guidance.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Global Color & Highlights',
          description: 'Ammonia-free root touch-up, Balayage, Ombre, and fashion streaks.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Deep Nourishing Hair Spa',
          description: 'Anti-dandruff and moisturizing spa with relaxing head massage.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
      ],
    },
    {
      id: 'facials-skin-rejuvenation',
      title: 'Facials & Skin Rejuvenation',
      subtitle: 'CIDESCO-guided skin consultations, radiance therapies & deep pore care',
      image: '/assets/aistudio/facial_massage_treatment_bed_01_80acb1fe.jpg',
      imageAlt: 'Private facial treatment suite with clean linens at Restore Beauty Salon',
      items: [
        {
          name: 'O3+ Radiance & Brightening Facial',
          description: 'Dermatologist-grade pigmentation and glow treatment.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Signature Herbal & Fruit Facials',
          description: 'Gentle, natural fruit enzymes for refreshed skin.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'D-Tan Therapy (Face & Neck)',
          description: 'Instant sun damage and tan removal pack.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Deep Pore Cleansing & Extraction',
          description: 'Ozone steam, blackhead removal, and pore-minimizing serum.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
      ],
    },
    {
      id: 'grooming-hygiene',
      title: 'Grooming & Hygiene',
      subtitle: 'Sensitive-skin waxing, precision threading, lash styling & mild bleach',
      image: '/assets/aistudio/wax_heater_equipment_tray_4ee7efa6.jpg',
      imageAlt: 'Sanitized Rica waxing station and treatment room at Restore Beauty Salon',
      items: [
        {
          name: 'Threading (Eyebrows, Face)',
          description: 'Clean, painless eyebrow shaping and facial hair removal.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Rica / Liposoluble Cartridge Waxing',
          description: 'Painless, colophony-free wax suitable for sensitive skin.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Eyelash Extensions',
          description: 'Custom length and volume semi-permanent eyelash styling.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Herbal & Oxy Bleach',
          description: 'Even-toned, glowing skin without harsh stinging.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
      ],
    },
    {
      id: 'hand-foot-reflexology-spa',
      title: 'Hand & Foot Reflexology Spa',
      subtitle: 'Therapeutic foot massage, aromatic pedicure & nourishing manicure',
      image: '/assets/aistudio/pedicure_foot_reflexology_spa_tub_fdbcb2fb.jpg',
      imageAlt: 'Foot reflexology lounge chair and spa corner at Restore Beauty Salon',
      items: [
        {
          name: 'Deep Foot Massage (Relaxation)',
          description: 'Air compression, kneading, pressing, and rolling relaxation therapy.',
          regularPrice: '₹149',
          memberPrice: '',
          duration: '15 min',
        },
        {
          name: 'Deluxe Foot Reflexology Pedicure',
          description: 'Aromatic foot soak, dead skin removal, massage, and polish.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Spa Manicure',
          description: 'Nail shaping, cuticle therapy, hand scrub, and massage.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
      ],
    },
    {
      id: 'bridal-occasion-studio',
      title: 'Bridal & Occasion Studio',
      subtitle: 'Pre-bridal glow journeys, HD bridal makeovers & traditional saree draping',
      image: '/assets/aistudio/bridal_makeup_and_hair_makeover_e804f3b7.jpg',
      imageAlt: 'Bridal makeup and hair styling studio showcase for Restore Beauty Salon',
      items: [
        {
          name: 'Customized Pre-Bridal Packages',
          description: 'Multi-session skin glow, hair spa, detan, and body polish.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'HD Bridal & Engagement Makeup',
          description: 'Waterproof, camera-ready bridal makeup with hair styling.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
        {
          name: 'Professional Saree Draping',
          description: 'Traditional, pleated, can-can, and modern drape styles.',
          regularPrice: '',
          memberPrice: '',
          duration: '',
        },
      ],
    },
  ],
  serviceFeatureGrid: [
    {
      id: 'women-only',
      number: '01',
      title: '100% Women-Only',
      description:
        'A completely private sanctuary staffed exclusively by female beauty specialists for comfortable, unhurried care.',
    },
    {
      id: 'cidesco',
      number: '02',
      title: 'CIDESCO Certified',
      description:
        'Led by K. Shirisha, CIDESCO International Certified Beauty Therapist & Makeup Artist with a PG Diploma in Cosmetology.',
    },
    {
      id: 'hygiene',
      number: '03',
      title: 'Hygienic & Sanitized',
      description:
        'Dedicated towel warmers, UV-sanitized cosmetology instruments, fresh white linens, and air-conditioned treatment suites.',
    },
    {
      id: 'timings',
      number: '04',
      title: '8 AM – 10 PM Daily',
      description:
        'Open all 7 days of the week with complimentary consultation and flexible evening slots for working women.',
    },
  ],
  testimonials: [
    {
      id: 'review-1',
      quote:
        "Hands down the best parlour in Pragathi Nagar! Shirisha ma'am is so knowledgeable and explained what facial suits my skin tone instead of pushing random products. Highly hygienic.",
      author: 'Sowmya K.',
      context: 'Verified Client · Pragathi Nagar',
      initials: 'SK',
      rating: 5,
    },
    {
      id: 'review-2',
      quote:
        'Got my hair smoothening and keratin done here. The result is super silky and natural. Very polite staff and no waiting time when you book ahead.',
      author: 'Priyanka R.',
      context: 'Verified Client · Hair Treatment',
      initials: 'PR',
      rating: 5,
    },
    {
      id: 'review-3',
      quote:
        'Clean, comfortable women-only space. The pedicure and facial were so relaxing. Open till 10 PM which is a lifesaver after office hours!',
      author: 'Ananya M.',
      context: 'Verified Client · Spa & Facial',
      initials: 'AM',
      rating: 5,
    },
  ],
  studioGallery: [
    {
      id: 'g-1',
      src: '/assets/aistudio/styling_station_ornate_mirrors_chairs_3b117e1d.jpg',
      alt: 'Ornate floral-framed styling mirror and hydraulic styling chairs',
      caption: 'Hair Styling Floor',
      category: 'Interior',
    },
    {
      id: 'g-2',
      src: '/assets/aistudio/reception_desk_foliage_accent_wall_43e9878f.jpg',
      alt: 'Consultation desk beneath framed CIDESCO International certificates and green foliage wall',
      caption: 'CIDESCO Certified Consultation Desk',
      category: 'Studio',
    },
    {
      id: 'g-3',
      src: '/assets/aistudio/facial_massage_treatment_bed_01_80acb1fe.jpg',
      alt: 'Private facial massage and skin rejuvenation bed with towel warmer',
      caption: 'Private Facial & Skin Suite',
      category: 'Treatment Room',
    },
    {
      id: 'g-4',
      src: '/assets/aistudio/pedicure_foot_reflexology_spa_tub_fdbcb2fb.jpg',
      alt: 'Comfortable armchair and foot reflexology spa station with skincare shelves',
      caption: 'Foot Reflexology & Spa Lounge',
      category: 'Spa',
    },
    {
      id: 'g-5',
      src: '/assets/aistudio/cosmetology_tools_cart_cf7a50d8.jpg',
      alt: 'Professional multi-function skin management cosmetology unit in treatment room',
      caption: 'Advanced Cosmetology Equipment',
      category: 'Equipment',
    },
    {
      id: 'g-6',
      src: '/assets/aistudio/building_facade_and_balcony_0928e4ba.jpg',
      alt: 'Exterior view of Restore Beauty Salon For Women at Nakoda Deep Residency',
      caption: 'Nakoda Deep Residency, First Floor',
      category: 'Exterior',
    },
  ],
};
