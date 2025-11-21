import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.4),_rgba(15,23,42,0.95))]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-32 pt-28 sm:pb-40 sm:pt-36 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
            Aurora Studio
          </div>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white drop-shadow sm:text-5xl lg:text-6xl">
            Crafting luminous digital experiences that move people.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            We help visionary teams design, build, and launch ambitious products
            amplifying the heart of their brand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/30 transition hover:bg-primary-dark"
            >
              View signature work
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white hover:bg-white/10"
            >
              Schedule a discovery call
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-8 text-white/80 sm:grid-cols-4">
            {[
              ["12+", "years designing experiences"],
              ["40%", "average conversion lift"],
              ["27", "global product launches"],
              ["∞", "curiosity & care"]
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
                  {label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative -mx-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow md:mx-0 md:w-1/2">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/40 to-transparent blur-2xl" />
          <div className="relative grid gap-6">
            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-inner shadow-primary/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                Immersive brand worlds
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Multi-sensory storytelling blending motion, 3D, and rich
                interaction patterns.
              </p>
            </article>
            <article className="rounded-2xl border border-primary/40 bg-primary/15 p-5 shadow-inner shadow-primary/20 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                Research-led product journeys
              </h3>
              <p className="mt-2 text-sm text-slate-200">
                Deep discovery sprints transform insight into elegant flows that
                drive adoption.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-inner shadow-primary/10 backdrop-blur">
              <h3 className="text-lg font-semibold text-white">
                High-performance engineering
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                Modern web stacks, scalable cloud architecture, and meticulous
                delivery enable teams to move faster.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
