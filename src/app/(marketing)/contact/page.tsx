import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { ContactForm } from "@/components/marketing/contact-form";
import { INQUIRY_VALUES, type ContactInput } from "@/lib/validation";

export const metadata: Metadata = {
  title: "Concierge Inquiry",
  description:
    "Begin your consultation with Élevé Skin & Wellness — a private concierge intake for clients, physicians, and executive teams.",
};

function resolveType(raw?: string): ContactInput["type"] | undefined {
  if (!raw) return undefined;
  const upper = raw.toUpperCase();
  return (INQUIRY_VALUES as readonly string[]).includes(upper)
    ? (upper as ContactInput["type"])
    : undefined;
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const params = await searchParams;
  const defaultType = resolveType(params.type);

  return (
    <section className="frame relative min-h-screen pt-32">
      <Container className="relative z-10 grid gap-16 pb-28 lg:grid-cols-[1fr_1.1fr]">
        <div className="pt-8">
          <Eyebrow tone="paper" className="mb-5">
            Concierge Inquiry
          </Eyebrow>
          <h1 className="max-w-md text-balance font-serif text-[2.4rem] font-medium leading-[1.1] text-paper md:text-[2.9rem]">
            Begin your consultation.
          </h1>
          <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-paper/65">
            One private conversation is the only step required to begin.
            Share a few details and your concierge will reach out to arrange
            a time.
          </p>
          <div className="mt-12 hidden lg:block">
            <PhotoFrame
              caption="Editorial — concierge desk, evening"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </div>
        </div>

        <div className="rounded-[2px] bg-paper p-8 md:p-12">
          <ContactForm defaultType={defaultType} />
        </div>
      </Container>
    </section>
  );
}
