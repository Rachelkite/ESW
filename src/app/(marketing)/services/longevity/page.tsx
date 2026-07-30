import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PointList } from "@/components/marketing/point-list";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { ServiceShell } from "@/components/marketing/service-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Hormone & Longevity",
  description:
    "Hormone optimization and longevity protocols at Élevé — built around your biology and informed by real diagnostics.",
};

export default function LongevityPage() {
  return (
    <ServiceShell
      eyebrow="Services · Hormone & Longevity"
      title="Optimization, built on evidence."
      description="Hormone and longevity protocols at Élevé begin with diagnostics — not assumptions. Every recommendation is grounded in your own biology."
      heroCaption="Editorial — diagnostics lab, clinical minimal"
      cta={{ label: "Begin Your Consultation", href: "/contact" }}
      ctaTitle="Your biology, understood."
      ctaDescription="Comprehensive diagnostics are the foundation of every longevity plan at Élevé."
    >
      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <SectionIntro
              eyebrow="Our Approach"
              title="Diagnostics first, protocol second."
              description="Comprehensive lab work establishes a baseline before any recommendation is made. From there, your physician designs a plan specific to your hormonal and metabolic profile — reviewed and adjusted over time."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <PhotoFrame
              caption="Editorial — lab diagnostics, architectural"
              tone="onyx"
              ratio="aspect-[4/5]"
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container className="max-w-2xl">
          <SectionIntro
            eyebrow="Focus Areas"
            title="What a longevity plan addresses."
            tone="paper"
          />
          <div className="mt-8">
            <PointList
              tone="paper"
              items={[
                "Hormone balance — thyroid, adrenal, and reproductive health.",
                "Metabolic health — energy regulation and long-term vitality.",
                "Sleep, stress, and recovery as pillars of biological age.",
              ]}
            />
          </div>
        </Container>
      </section>
    </ServiceShell>
  );
}
