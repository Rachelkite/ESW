import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { BookingForm } from "@/components/marketing/booking-form";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book Botox, dermal filler, a B-12 shot, or a lipotropic shot with Élevé — we come to you, wherever you are.",
};

export default function BookPage() {
  return (
    <section className="frame relative min-h-screen pt-32">
      <Container className="relative z-10 grid gap-16 pb-28 lg:grid-cols-[1fr_1.1fr]">
        <div className="pt-8">
          <Eyebrow tone="paper" className="mb-5">
            Book an Appointment
          </Eyebrow>
          <h1 className="max-w-md text-balance font-serif text-[2.4rem] font-medium leading-[1.1] text-paper md:text-[2.9rem]">
            We come to you.
          </h1>
          <p className="mt-6 max-w-sm text-[1rem] leading-relaxed text-paper/65">
            Botox, dermal filler, B-12 shots, and lipotropic shots — delivered
            by your provider at your home, office, or hotel. Choose an open
            time below.
          </p>
          <div className="mt-12 hidden lg:block">
            <PhotoFrame
              caption="Editorial — provider arriving with kit, client's home"
              tone="royal"
              ratio="aspect-[4/5]"
            />
          </div>
        </div>

        <div className="rounded-[2px] bg-paper p-8 md:p-12">
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
