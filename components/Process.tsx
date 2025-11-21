import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    title: "01. Align",
    summary:
      "We facilitate workshops, audits, and listening sessions to distill the opportunity, constraints, and measures of success."
  },
  {
    title: "02. Explore",
    summary:
      "Rapid prototyping, motion studies, and interactive explorations spark alignment around the most promising concepts."
  },
  {
    title: "03. Build",
    summary:
      "Design systems, production interfaces, and full-stack services come to life in tight feedback loops with your team."
  },
  {
    title: "04. Amplify",
    summary:
      "We ship, measure, and iterate through launch with analytics, growth experiments, and knowledge transfer."
  }
];

export function Process() {
  return (
    <section id="process" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Process"
          title="A luminous path from spark to scale"
          description="Engineered for clarity and momentum, our process keeps teams aligned while we build momentum toward launch."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-3xl border border-white/5 bg-white/[0.04] p-8 transition hover:-translate-y-1 hover:border-accent/40 hover:bg-accent/10"
            >
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
