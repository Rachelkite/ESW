/**
 * Mobile aesthetics services Élevé delivers at the client's location.
 * Durations are used to compute booking-calendar availability.
 */
export const AESTHETIC_SERVICES = [
  { value: "BOTOX", label: "Botox / Neuromodulator", durationMin: 30 },
  { value: "FILLER", label: "Dermal Filler", durationMin: 45 },
  { value: "B12_SHOT", label: "B-12 Shot", durationMin: 15 },
  { value: "LIPO_SHOT", label: "Lipotropic (Lipo) Shot", durationMin: 20 },
] as const;

export type AestheticServiceValue = (typeof AESTHETIC_SERVICES)[number]["value"];

export function serviceLabel(value: string) {
  return AESTHETIC_SERVICES.find((s) => s.value === value)?.label ?? value;
}

export function serviceDurationMin(value: string) {
  return AESTHETIC_SERVICES.find((s) => s.value === value)?.durationMin ?? 30;
}
