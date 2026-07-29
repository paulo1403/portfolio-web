"use client";

interface Props {
  dict: { hero: { title: string; subtitle: string; cta: string } };
  lang: string;
}

export default function HeroSection({ dict, lang }: Props) {
  return (
    <section className="px-6 pt-28 pb-16 lg:px-8 lg:pt-36 lg:pb-24">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-6">
          Lima, Perú · {lang === "es" ? "Desarrollador de Software" : "Software Developer"}
        </p>
        <h1 className="display leading-[1.05]">
          Paulo<br />
          <span className="text-[var(--accent)]">Llanos</span>
        </h1>
        <p className="text-lg lg:text-xl text-[var(--text-soft)] mt-6 max-w-2xl leading-relaxed">
          {dict.hero.subtitle}
        </p>
        <div className="mt-10 flex items-center gap-6">
          <a
            href="#projects"
            className="text-sm tracking-wider uppercase border-b border-[var(--text)] pb-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {dict.hero.cta}
          </a>
          <span className="text-[var(--rule)] text-sm">·</span>
          <a href="#contact" className="text-sm text-[var(--text-soft)] hover:text-[var(--text)] transition-colors">
            {lang === "es" ? "Contacto" : "Contact"}
          </a>
        </div>
      </div>
    </section>
  );
}
