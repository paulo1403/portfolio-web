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

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="project-card">
      <div className="flex items-start justify-between gap-3 mb-2">
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
      <div className="flex flex-wrap gap-1.5 mt-3">
        {p.technologies.slice(0, 8).map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
      {(p.link || p.github) && (
        <div className="mt-3 pt-3 border-t border-[var(--rule)]">
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
        <div className="space-y-4">
          {dict.projects.professional.length > 0 && (
            <>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)]">
                {dict.projects.professionalTitle}
              </p>
              <div className="space-y-4">
                {dict.projects.professional.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
              </div>
            </>
          )}
          {dict.projects.personal.length > 0 && (
            <div className="mt-8">
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mb-4">
                {dict.projects.personalTitle}
              </p>
              <div className="space-y-4">
                {dict.projects.personal.map((p) => (
                  <ProjectCard key={p.title} p={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
