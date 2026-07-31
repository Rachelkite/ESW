import Link from "next/link";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";

const pillars = [
  {
    title: "Peptide Therapy",
    line: "Advanced protocols for longevity, recovery, and performance.",
    href: "/services/peptide-therapy",
    caption: "Editorial — peptide vial and syringe, still life, natural light",
  },
  {
    title: "Aesthetics",
    line: "Botox, fillers, and skin rejuvenation as quiet confidence.",
    href: "/services/aesthetics",
    caption: "Editorial — Botox treatment at client's home, soft daylight",
  },
  {
    title: "Hormone & Longevity",
    line: "Optimization built around your biology, not a template.",
    href: "/services/longevity",
    caption: "Editorial — diagnostics kit, still life, clinical minimal",
  },
  {
    title: "Executive Wellness",
    line: "Performance and recovery designed for leadership demands.",
    href: "/executive-wellness",
    caption: "Editorial — executive interior, dusk",
  },
  {
    title: "Retreats",
    line: "Physician-led, luxury-resort wellness experiences.",
    href: "/retreats",
    caption: "Editorial — resort architecture, golden hour",
  },
];

export function PillarGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar, i) => (
        <Reveal
          key={pillar.href}
          delay={i * 0.06}
          className={i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
        >
          <Link href={pillar.href} className="group block">
            <PhotoFrame
              caption={pillar.caption}
              tone="onyx"
              ratio={i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}
              className="transition-transform duration-700 ease-signature group-hover:scale-[1.02]"
            />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl text-ink">{pillar.title}</h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink/55">
                  {pillar.line}
                </p>
              </div>
              <span className="mt-1 shrink-0 text-royal transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
