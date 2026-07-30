import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { CtaBand } from "@/components/marketing/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Executive Wellness",
  description:
    "Wellness as performance infrastructure for founders, CEOs, and leadership teams — burnout, recovery, cognitive performance, and longevity.",
};

const pillars = [
  {
    title: "Burnout & Recovery",
    body: "Addressing chronic stress and depletion before they compound into a broader health cost.",
  },
  {
    title: "Cognitive Performance",
    body: "Supporting focus, decision-making, and resilience under sustained pressure.",
  },
  {
    title: "Longevity as a Leadership Asset",
    body: "Treating long-term health as a strategic input, not an afterthought.",
  },
];

export default function ExecutiveWellnessPage() {
  return (
    <>
      <Hero
        eyebrow="Executive Wellness"
        title="Wellness, as performance infrastructure."
        description="Leadership demands a level of energy and clarity most wellness programs weren't designed to sustain. Élevé builds around the specific cost of leading — not a generic wellness perk."
        primaryCta={{ label: "Request an Executive Consultation", href: "/contact" }}
        photoCaption="Editorial — executive interior, dusk"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="The Cost of Ignoring It"
            title="Decision fatigue is a physiological cost, not a mood."
            description="Burnout, depleted energy, and eroding resilience don't just affect wellbeing — they degrade judgment, presence, and output at the exact moments they matter most."
          />
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-[2px] bg-paper/10 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="bg-ink p-8">
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-xl text-paper">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/55">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame
              caption="Editorial — boardroom, dusk light"
              tone="onyx"
              ratio="aspect-[5/4]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionIntro
              eyebrow="For Organizations"
              title="Programs designed for leadership teams."
              description="HR and people leaders engage Élevé to bring executive wellness to their leadership bench — individually tailored, coordinated by a single concierge, and delivered with the discretion senior teams expect."
            />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Begin"
        title="Sustained performance starts with a private conversation."
        description="Whether for yourself or your leadership team, an executive consultation is the first step."
        cta={{ label: "Request an Executive Consultation", href: "/contact" }}
      />
    </>
  );
}
