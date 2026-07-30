import { Reveal } from "@/components/ui/reveal";

const points = [
  {
    title: "Curated Access",
    body: "A limited, considered network of physicians and specialists — not an open marketplace.",
  },
  {
    title: "Physician-Guided",
    body: "Every protocol is directed by a licensed physician. Clinical credibility, without the clinical tone.",
  },
  {
    title: "Discreet by Design",
    body: "Privacy is treated as a standard, not an accommodation — especially for executive clients.",
  },
  {
    title: "Nationally Minded",
    body: "One point of contact, one standard of care, wherever your wellness journey takes you.",
  },
];

export function DifferenceGrid() {
  return (
    <div className="grid gap-px overflow-hidden rounded-[2px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
      {points.map((point, i) => (
        <Reveal
          key={point.title}
          delay={i * 0.08}
          className="flex flex-col gap-3 bg-paper p-8"
        >
          <span className="h-px w-8 bg-royal" />
          <h3 className="font-serif text-lg text-ink">{point.title}</h3>
          <p className="text-sm leading-relaxed text-ink/60">{point.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
