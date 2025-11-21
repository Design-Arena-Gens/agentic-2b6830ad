import Link from "next/link";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.2),_rgba(15,23,42,1))]" />
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          label="Collaborate"
          title="Let’s ignite your next chapter"
          description="Share the spark with us, and we&apos;ll design a plan to bring it into the world."
        />
        <form className="mt-16 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 shadow-glow">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="text-sm font-medium text-white/80">
              Your name
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-primary/50 transition focus:ring-2"
                placeholder="Mira Patel"
                name="name"
                type="text"
              />
            </label>
            <label className="text-sm font-medium text-white/80">
              Email
              <input
                className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-primary/50 transition focus:ring-2"
                placeholder="mira@studio.com"
                name="email"
                type="email"
              />
            </label>
          </div>
          <label className="text-sm font-medium text-white/80">
            Company or project
            <input
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-primary/50 transition focus:ring-2"
              placeholder="Luminous Labs"
              name="company"
              type="text"
            />
          </label>
          <label className="text-sm font-medium text-white/80">
            What are you hoping to create?
            <textarea
              className="mt-2 h-32 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-primary/50 transition focus:ring-2"
              placeholder="Tell us about the vision, the audience, and what success looks like."
              name="vision"
            />
          </label>
          <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-6 py-5 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-medium text-white/80">
              Prefer a direct introduction?
            </span>
            <Link
              href="mailto:hello@aurorastudio.design"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:border-white/40 hover:bg-white/10"
            >
              hello@aurorastudio.design
            </Link>
          </div>
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-lg shadow-accent/20 transition hover:bg-accent-dark"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
