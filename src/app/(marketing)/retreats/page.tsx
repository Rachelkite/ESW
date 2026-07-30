import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { CtaBand } from "@/components/marketing/cta-band";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Retreats",
  description:
    "Luxury wellness retreats from Élevé — physician-led content, luxury resort settings, and curated experiences, not a conference agenda.",
};

const experiences = [
  { title: "Luxury Resort Settings", caption: "Editorial — resort architecture, golden hour" },
  { title: "Physician-Led Discussions", caption: "Editorial — intimate salon setting" },
  { title: "Spa & Recovery", caption: "Editorial — spa interior, natural materials" },
  { title: "Curated Dining", caption: "Editorial — private dining, evening light" },
];

export default function RetreatsPage() {
  return (
    <>
      <Hero
        eyebrow="Retreats"
        title="Wellness, reimagined as an experience."
        description="Not a conference. Not a wellness weekend. Élevé retreats bring physician-led insight into luxury resort settings — designed for couples, networking, and genuine recovery."
        primaryCta={{ label: "Reserve Your Experience", href: "/contact" }}
        photoCaption="Editorial — luxury resort exterior, golden hour"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="What to Expect"
            title="Every element considered, nothing generic."
            description="Élevé retreats combine the calibre of a luxury resort stay with the substance of physician-led insight — curated for clients who expect more from their time than an agenda."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experiences.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <PhotoFrame caption={e.caption} tone="onyx" ratio="aspect-[3/4]" />
                <h3 className="mt-4 font-serif text-lg text-ink">{e.title}</h3>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="Designed For"
              title="Couples, leaders, and considered company."
              description="Retreats are intentionally small — a setting for genuine relaxation and meaningful conversation, alongside a limited group of clients and physicians."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — luxury suite interior"
              tone="royal"
              ratio="aspect-[5/4]"
            />
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Reserve"
        title="Space at each retreat is limited by design."
        description="Reach out to your concierge to reserve your place at the next Élevé retreat."
        cta={{ label: "Reserve Your Experience", href: "/contact" }}
      />
    </>
  );
}
