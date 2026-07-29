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
    experience: {
      title: string;
      subtitle: string;
      jobs: Array<{
        company: string;
        position: string;
        period: string;
        duration: string;
        location: string;
        achievements: string[];
        technologies?: string[];
      }>;
      research?: { title: string; institution: string; period: string; achievements: string[] };
      education?: { title: string; degree: string; institution: string; period: string; location: string };
      certifications?: { title: string; list: Array<{ name: string; issuer: string; date?: string }> };
    };
  };
  lang: string;
}

export default function ExperienceSection({ dict }: Props) {
  return (
    <FadeIn>
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.experience.title}</h2>
          <p className="text-[5rem] sm:text-[8rem] display leading-none text-[var(--rule)]/30 select-none mt-[-1.5rem]">03</p>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mt-2">
            {dict.experience.subtitle}
          </p>
        </div>
        <div className="space-y-10">
          {dict.experience.jobs.map((job) => (
            <div key={job.company}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-semibold">{job.company}</h3>
                <span className="text-xs text-[var(--text-soft)] shrink-0 tabular-nums">{job.period}</span>
              </div>
              <p className="text-sm text-[var(--text-soft)] mb-3">{job.position} · {job.location}</p>
              <ul className="space-y-1.5">
                {job.achievements.map((a, i) => (
                  <li key={i} className="text-sm text-[var(--text-soft)] leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-[var(--rule)]" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {dict.experience.education && (
            <div className="pt-6 border-t border-[var(--rule)]">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-3">
                {dict.experience.education.title}
              </p>
              <p className="text-sm font-medium">{dict.experience.education.degree}</p>
              <p className="text-xs text-[var(--text-soft)]">{dict.experience.education.institution} · {dict.experience.education.period}</p>
            </div>
          )}

          {dict.experience.certifications && (
            <div className="pt-6 border-t border-[var(--rule)]">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-3">
                {dict.experience.certifications.title}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {dict.experience.certifications.list.map((c, i) => (
                  <span key={i} className="tech-tag">{c.name} · {c.issuer}</span>
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
