import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em] text-white">
            AURORA
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
            Studio for luminous product experiences
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-white/60">
          <Link href="#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="#projects" className="transition hover:text-white">
            Projects
          </Link>
          <Link href="#process" className="transition hover:text-white">
            Process
          </Link>
          <Link href="#insights" className="transition hover:text-white">
            Insights
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Aurora Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
