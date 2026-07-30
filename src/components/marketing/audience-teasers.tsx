import Link from "next/link";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Reveal } from "@/components/ui/reveal";

const teasers = [
  {
    label: "For Physicians",
    title: "Extend your practice through a curated partnership.",
    href: "/physician-partners",
    cta: "Explore Partnership",
    caption: "Editorial — modern clinical interior",
  },
  {
    label: "For Leadership",
    title: "Wellness engineered as performance infrastructure.",
    href: "/executive-wellness",
    cta: "View Executive Wellness",
    caption: "Editorial — boardroom, dusk light",
  },
];

export function AudienceTeasers() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {teasers.map((t, i) => (
        <Reveal key={t.href} delay={i * 0.08}>
          <Link
            href={t.href}
            className="group relative block overflow-hidden rounded-[2px]"
          >
            <PhotoFrame caption={t.caption} tone="onyx" ratio="aspect-[5/4]" />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-8">
              <span className="text-[0.68rem] font-semibold uppercase tracking-widest2 text-royal/90">
                {t.label}
              </span>
              <h3 className="mt-3 max-w-sm text-balance font-serif text-2xl leading-snug text-paper">
                {t.title}
              </h3>
              <span className="mt-5 inline-flex w-fit items-center gap-2 text-sm text-paper/80 transition-colors group-hover:text-paper">
                {t.cta} <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
