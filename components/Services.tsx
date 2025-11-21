import { SectionHeader } from "./SectionHeader";

const services = [
  {
    title: "Product Vision Lab",
    description:
      "Strategic discovery sprints that synthesize user insight, competitive analysis, and business modeling into a shared north star.",
    deliverables: ["Vision narratives", "Journey maps", "Success KPIs"],
    icon: "🌌"
  },
  {
    title: "Experience Design",
    description:
      "High-fidelity interface systems crafted with motion, prototyping, and rigorous usability validation.",
    deliverables: ["Design systems", "Interactive prototypes", "Accessibility audits"],
    icon: "🎨"
  },
  {
    title: "Full-Stack Engineering",
    description:
      "Production-ready web apps built with modern frameworks, cloud infrastructure, and observability woven in.",
    deliverables: ["Next.js apps", "API integration", "Performance tuning"],
    icon: "⚙️"
  }
];

export function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Services"
          title="End-to-end product design & development"
          description="We partner with founders, scale-ups, and global brands to turn complex ideas into luminous experiences."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group h-full rounded-3xl border border-white/5 bg-white/5 p-8 shadow-lg shadow-primary/5 transition hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl">
                {service.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-sm text-slate-300">
                {service.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
