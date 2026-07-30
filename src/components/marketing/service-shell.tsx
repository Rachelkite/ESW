import { Hero } from "@/components/marketing/hero";
import { CtaBand } from "@/components/marketing/cta-band";

export function ServiceShell({
  eyebrow,
  title,
  description,
  heroCaption,
  cta,
  ctaTitle,
  ctaDescription,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  heroCaption: string;
  cta: { label: string; href: string };
  ctaTitle: string;
  ctaDescription: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Hero
        eyebrow={eyebrow}
        title={title}
        description={description}
        primaryCta={cta}
        photoCaption={heroCaption}
        size="regular"
      />
      {children}
      <CtaBand title={ctaTitle} description={ctaDescription} cta={cta} />
    </>
  );
}
