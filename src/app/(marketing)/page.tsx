import { Container } from "@/components/ui/container";
import { Hero } from "@/components/marketing/hero";
import { SectionIntro } from "@/components/marketing/section-intro";
import { DifferenceGrid } from "@/components/marketing/difference-grid";
import { PillarGrid } from "@/components/marketing/pillar-grid";
import { ProcessSteps } from "@/components/marketing/process-steps";
import { AudienceTeasers } from "@/components/marketing/audience-teasers";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/marketing/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Élevé Skin & Wellness"
        title="Your Health. Elevated."
        description="Mobile aesthetics delivered to you — Botox, filler, B-12, and lipo shots. Peptide protocols shipped directly. Membership access to partner longevity practices. All physician-directed, all coordinated by your concierge."
        primaryCta={{ label: "Book an Appointment", href: "/book" }}
        secondaryCta={{ label: "Shop Peptides", href: "/shop" }}
        photoCaption="Editorial — luxury interior, morning light"
      />

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="The Élevé Difference"
            title="Wellness, without the guesswork."
            description="We're not a med spa you visit — we come to you for aesthetics, ship your peptides directly, and connect you with membership access to partner physician practices."
          />
          <div className="mt-14">
            <DifferenceGrid />
          </div>
        </Container>
      </section>

      <section className="bg-paper pb-24 md:pb-32">
        <Container>
          <SectionIntro
            eyebrow="Services"
            title="A single standard, across every discipline."
          />
          <div className="mt-14">
            <PillarGrid />
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24 md:py-32">
        <Container>
          <SectionIntro
            eyebrow="The Experience"
            title="How the concierge model works."
            tone="paper"
          />
          <div className="mt-16">
            <ProcessSteps />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <Container>
          <AudienceTeasers />
        </Container>
      </section>

      <section className="frame-light py-24 md:py-32">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <PhotoFrame
            caption="Editorial — luxury resort, golden hour"
            tone="paper"
            ratio="aspect-[5/4]"
          />
          <div>
            <SectionIntro
              eyebrow="Retreats"
              title="Wellness, reimagined as an experience."
              description="Physician-led content, luxury resort settings, and curated networking — designed for clients who expect more from a retreat than an agenda."
            />
            <div className="mt-8">
              <Button href="/retreats" variant="outline-dark">
                Reserve Your Experience
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Begin"
        title="Your wellness, guided from the first conversation."
        description="A private consultation is the only step required to begin. We'll take it from there."
        cta={{ label: "Begin Your Consultation", href: "/contact" }}
      />
    </>
  );
}
