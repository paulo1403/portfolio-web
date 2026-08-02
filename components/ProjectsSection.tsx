"use client";

import { useEffect, useRef, useState } from "react";

interface Project {
  title: string;
  company?: string;
  description: string;
  technologies: string[];
  link: string | null;
  github?: string | null;
  type: string;
  year: string;
}

interface Props {
  dict: {
    projects: {
      title: string;
      professionalTitle: string;
      personalTitle: string;
      professional: Project[];
      personal: Project[];
    };
  };
  lang: string;
}

function slug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProjectCard({ p, showImage }: { p: Project; showImage: boolean }) {
  const imageName = slug(p.title);
  const imgSrc = `/projects/${imageName}.jpg`;

  return (
    <FadeIn>
      <div className="project-card">
        <div className="flex flex-col sm:flex-row gap-4">
          {showImage && (
            <div className="shrink-0 sm:w-48 aspect-video sm:aspect-auto sm:h-28 bg-[var(--rule)]/30 overflow-hidden rounded-sm">
              <img
                src={imgSrc}
                alt={p.title}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none" }}
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3 mb-1.5">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                {p.company && (
                  <p className="text-xs text-[var(--text-soft)] mt-0.5">{p.company} · {p.year}</p>
                )}
              </div>
              <span className="text-[0.6rem] uppercase tracking-wider text-[var(--accent)] shrink-0 border border-[var(--accent)] px-2 py-0.5">
                {p.type}
              </span>
            </div>
            <p className="text-sm text-[var(--text-soft)] leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {p.technologies.slice(0, 8).map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            {(p.link || p.github) && (
              <div className="mt-2 pt-2 border-t border-[var(--rule)]">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="editorial-link text-xs">
                    {p.link.includes('github') ? 'GitHub →' : 'Ver proyecto →'}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

const WITH_IMAGES = new Set(["quipumed", "chicama-map", "portafolio", "carioca-game-web", "mca-makeup", "voting-system"])

export default function ProjectsSection({ dict }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.projects.title}</h2>
          <p className="text-[5rem] sm:text-[8rem] display leading-none text-[var(--rule)]/30 select-none mt-[-1.5rem]">02</p>
        </div>
        <div className="space-y-6">
          {dict.projects.professional.length > 0 && (
            <>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)]">
                {dict.projects.professionalTitle}
              </p>
              <div className="space-y-6">
                {dict.projects.professional.map((p) => (
                  <ProjectCard key={p.title} p={p} showImage={false} />
                ))}
              </div>
            </>
          )}
          {dict.projects.personal.length > 0 && (
            <div className="mt-6">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-4">
                {dict.projects.personalTitle}
              </p>
              <div className="space-y-6">
                {dict.projects.personal.map((p) => (
                  <ProjectCard key={p.title} p={p} showImage={WITH_IMAGES.has(slug(p.title))} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
