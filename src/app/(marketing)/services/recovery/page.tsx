import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionIntro } from "@/components/marketing/section-intro";
import { PointList } from "@/components/marketing/point-list";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { ServiceShell } from "@/components/marketing/service-shell";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Recovery & Performance",
  description:
    "Structured recovery and performance protocols at Élevé — for clients whose lives demand sustained physical output.",
};

export default function RecoveryPage() {
  return (
    <ServiceShell
      eyebrow="Services · Recovery & Performance"
      title="Recovery, treated as strategy."
      description="For clients whose lives demand sustained physical output, recovery isn't optional — it's engineered, monitored, and adjusted like any other performance discipline."
      heroCaption="Editorial — private recovery space, low light"
      cta={{ label: "Begin Your Consultation", href: "/contact" }}
      ctaTitle="Recovery, engineered."
      ctaDescription="Your protocol is designed around how you train, work, and live — not a generic recovery plan."
    >
      <section className="bg-paper py-24 md:py-32">
        <Container className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <PhotoFrame
              caption="Editorial — private recovery space, architectural"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <SectionIntro
              eyebrow="Our Approach"
              title="Built around how you actually live."
              description="A recovery plan for a founder managing chronic travel looks nothing like one for an athlete in-season. Élevé designs around your specific physical demands."
            />
          </Reveal>
        </Container>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <Container className="max-w-2xl">
          <SectionIntro eyebrow="What's Included" title="A protocol, not a service menu." />
          <div className="mt-8">
            <PointList
              items={[
                "Assessment of physical demands, sleep, and recovery capacity.",
                "A physician-guided protocol addressing inflammation and repair.",
                "Ongoing monitoring as your training or workload changes.",
              ]}
            />
          </div>
        </Container>
      </section>
    </ServiceShell>
  );
}
