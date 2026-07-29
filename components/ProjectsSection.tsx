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

function ProjectEntry({ p }: { p: Project }) {
  return (
    <div className="project-entry">
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <h3 className="font-semibold">{p.title}</h3>
        <span className="text-[0.65rem] uppercase tracking-wider text-[var(--text-soft)] shrink-0">
          {p.type} · {p.year}
        </span>
      </div>
      {p.company && (
        <p className="text-xs text-[var(--text-soft)] mb-2">{p.company}</p>
      )}
      <p className="text-sm text-[var(--text-soft)] leading-relaxed">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {p.technologies.slice(0, 8).map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      {(p.link || p.github) && (
        <div className="flex gap-4 mt-3">
          {p.link && (
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="editorial-link text-xs">
              {p.link.includes('github') ? 'GitHub →' : 'Ver proyecto →'}
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection({ dict }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.projects.title}</h2>
        </div>
        <div>
          {dict.projects.professional.length > 0 && (
            <>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-4">
                {dict.projects.professionalTitle}
              </p>
              <div>
                {dict.projects.professional.map((p) => (
                  <ProjectEntry key={p.title} p={p} />
                ))}
              </div>
            </>
          )}
          {dict.projects.personal.length > 0 && (
            <div className="mt-10">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-4">
                {dict.projects.personalTitle}
              </p>
              <div>
                {dict.projects.personal.map((p) => (
                  <ProjectEntry key={p.title} p={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
