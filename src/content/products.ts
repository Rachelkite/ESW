/**
 * Sample peptide catalog for /shop. Ordering, payment, and pharmacy
 * fulfillment happen on the existing myspalive/base44 system
 * (see external-links.ts) — swap in your real catalog and pricing
 * before launch.
 */
export const products = [
  {
    name: "Semax",
    category: "Cognitive & Focus",
    description: "Supports mental clarity, focus, and stress resilience.",
  },
  {
    name: "BPC-157",
    category: "Recovery & Healing",
    description: "Supports the body's natural tissue repair and recovery process.",
  },
  {
    name: "Tirzepatide",
    category: "Weight Management",
    description: "Physician-guided support for sustainable metabolic health.",
  },
  {
    name: "Semaglutide",
    category: "Weight Management",
    description: "Physician-guided support for sustainable metabolic health.",
  },
  {
    name: "Sermorelin",
    category: "Longevity",
    description: "Supports the body's natural growth hormone production.",
  },
  {
    name: "CJC-1295 / Ipamorelin",
    category: "Longevity",
    description: "A growth-hormone-support blend for recovery and vitality.",
  },
  {
    name: "NAD+",
    category: "Cellular Energy & Longevity",
    description: "Supports cellular energy production and long-term vitality.",
  },
  {
    name: "Glutathione",
    category: "Antioxidant & Skin Health",
    description: "Supports the body's master antioxidant system and skin health.",
  },
] as const;
