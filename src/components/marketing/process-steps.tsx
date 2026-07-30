import { Reveal } from "@/components/ui/reveal";

const steps = [
  {
    title: "Consultation",
    body: "A private conversation to understand your goals, history, and priorities.",
  },
  {
    title: "Personalized Plan",
    body: "Your concierge and a partner physician design a protocol built around you.",
  },
  {
    title: "Ongoing Concierge Support",
    body: "Continuous guidance as your plan evolves — one point of contact, always.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-10 sm:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="border-t border-paper/15 pt-6">
          <Reveal delay={i * 0.1}>
            <span className="font-serif text-sm text-royal">{`Step ${i + 1}`}</span>
            <h3 className="mt-3 font-serif text-xl text-paper">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-paper/55">{step.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
