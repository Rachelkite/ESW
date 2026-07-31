import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PointList } from "@/components/marketing/point-list";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { ServiceShell } from "@/components/marketing/service-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Aesthetics",
  description:
    "Botox, dermal filler, B-12 shots, and lipotropic shots — delivered by Élevé at your home, office, or hotel.",
};

const offerings = [
  { title: "Botox & Neuromodulators", body: "Precision treatment for a refreshed, natural expression." },
  { title: "Dermal Fillers", body: "Volume and structure restored with restraint and proportion." },
  { title: "B-12 Shots", body: "Fast, physician-guided support for energy and vitality." },
  { title: "Lipotropic (Lipo) Shots", body: "Metabolic support as part of a broader wellness protocol." },
];

export default function AestheticsPage() {
  return (
    <ServiceShell
      eyebrow="Services · Aesthetics"
      title="Precision, delivered to you."
      description="Aesthetics at Élevé is treated as an extension of overall wellness — a way to look as well as you feel, guided by physicians who value restraint over excess. Your provider comes to you; there's no office to visit."
      heroCaption="Editorial — Botox treatment at client's home, soft daylight"
      cta={{ label: "Book an Appointment", href: "/book" }}
      ctaTitle="Refinement, on your schedule."
      ctaDescription="Choose an open time and your provider comes to you — home, office, or hotel."
    >
      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame
              caption="Editorial — filler treatment in progress, client's living room"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionIntro
              eyebrow="Our Approach"
              title="Optimization, not alteration."
              description="Every treatment is designed to enhance what's already there — proportion, structure, and skin health — rather than to change it. The goal is confidence, not a different face."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container>
          <SectionIntro eyebrow="Offerings" title="What we offer, at your location." tone="paper" />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[2px] bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.08} className="bg-ink p-8">
                <span className="h-px w-8 bg-royal block" />
                <h3 className="mt-5 font-serif text-lg text-paper">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{o.body}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container className="max-w-2xl">
          <SectionIntro
            eyebrow="What to Expect"
            title="A considered, unhurried process."
          />
          <div className="mt-8">
            <PointList
              items={[
                "Book an open time online — no office visit required.",
                "Your provider arrives at your home, office, or hotel with everything needed.",
                "Ongoing concierge follow-up to track results over time.",
              ]}
            />
          </div>
        </Container>
      </section>
    </ServiceShell>
  );
}
