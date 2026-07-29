"use client";

import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="transition-all duration-700 ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}ms` }}
    >{children}</div>
  );
}

interface Props {
  dict: {
    about: {
      title: string;
      subtitle: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
      highlightTitle: string;
      highlightDesc: string;
      technologies: string[];
      passions?: { title: string; items: Array<{ label: string; desc: string }> };
    };
  };
  lang: string;
}

export default function AboutSection({ dict }: Props) {
  return (
    <FadeIn>
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.about.title}</h2>
          <p className="text-[5rem] sm:text-[8rem] display leading-none text-[var(--rule)]/30 select-none mt-[-1.5rem]">01</p>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mt-2">
            {dict.about.subtitle}
          </p>
        </div>
        <div>
          <p className="drop-cap text-[var(--text)] leading-relaxed">
            {dict.about.paragraph1}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph2}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph3}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph4}
          </p>
          {dict.about.highlightTitle && (
            <div className="mt-6 pt-6 border-t border-[var(--rule)]">
              <p className="display text-xl text-[var(--accent)]">{dict.about.highlightTitle}</p>
              <p className="text-sm text-[var(--text-soft)] mt-1">{dict.about.highlightDesc}</p>
            </div>
          )}
          {dict.about.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-6">
              {dict.about.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
          {dict.about.passions && (
            <div className="mt-8 pt-6 border-t border-[var(--rule)]">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-4">
                {dict.about.passions.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.about.passions.items.map((item) => (
                  <div key={item.label} className="border border-[var(--rule)] p-3">
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-xs text-[var(--text-soft)] mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </FadeIn>
  );
}
