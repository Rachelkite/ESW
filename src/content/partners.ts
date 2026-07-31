/**
 * Partner physician practices Élevé clients can access membership with.
 * Add more partners here as relationships are formalized.
 */
export const partnerPractices = [
  {
    name: "The Ultimate Longevity Center",
    focus: "Hormone optimization, longevity diagnostics, and physician-directed peptide protocols.",
  },
] as const;

export const partnerPracticeNames = partnerPractices.map((p) => p.name);
