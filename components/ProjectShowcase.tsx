import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "LumenOS",
    description:
      "A responsive interface for a climate-tech operating system orchestrating renewable energy grids across continents.",
    metrics: ["+68% operator efficiency", "-24% energy waste"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Mira Research",
    description:
      "Immersive storytelling for a biotechnology lab translating scientific breakthroughs into compelling narratives.",
    metrics: ["4x investor engagement", "Series B in 6 months"],
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80"
  },
  {
    name: "Nova Festival",
    description:
      "Real-time experience platform powering ticketing, wayfinding, and community features for a global arts festival.",
    metrics: ["120k active participants", "97% satisfaction"],
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80"
  }
];

export function ProjectShowcase() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(148,163,184,0.15),_rgba(15,23,42,0.95))]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Case Studies"
          title="Selected collaborations shaping the future"
          description="Each partnership is grounded in co-creation, bold experimentation, and measurable impact."
        />
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-950/70 backdrop-blur transition hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {project.description}
                  </p>
                </div>
                <ul className="mt-auto space-y-2 text-sm text-primary-light">
                  {project.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
