import { SectionHeader } from "./SectionHeader";

const testimonials = [
  {
    quote:
      "Aurora helped us transform a 200-page systems document into an interface that operators now love. The measurable impact on our deployment efficiency is staggering.",
    author: "Maya Thompson",
    role: "Chief Experience Officer, LumenOS"
  },
  {
    quote:
      "They embedded with our team, asked the questions we didn&apos;t know to ask, and delivered a product vision that fueled our growth and fundraising.",
    author: "Raphael Estevez",
    role: "Founder, Mira Research Labs"
  },
  {
    quote:
      "Our festival now runs on a living platform that delights attendees and gives us real-time insight. Aurora balances imagination with operational rigor.",
    author: "Aya Nakamura",
    role: "Executive Director, Nova Festival"
  }
];

export function Testimonials() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-slate-900 py-24 sm:py-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.35),_rgba(15,23,42,0.95))]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Partners"
          title="Trusted by teams leading transformational change"
        />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/10 p-8 text-left text-sm text-slate-100 shadow-lg"
            >
              <p className="leading-relaxed text-slate-50">{item.quote}</p>
              <footer className="mt-6">
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                  {item.role}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
