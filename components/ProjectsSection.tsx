"use client";

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

interface ProjectsSectionProps {
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

function ProjectCard({ project, lang }: { project: Project; lang: string }) {
  return (
    <article className="ctp-card p-6 flex flex-col group">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
          <p className="text-xs text-muted-foreground mt-0.5">{project.company} · {project.year}</p>
        </div>
        <span className="ctp-chip text-[0.65rem] px-2 py-0.5">{project.type}</span>
      </div>
      <p className="text-sm text-foreground/75 leading-relaxed flex-1 mt-2">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((tech) => (
          <span key={tech} className="ctp-chip text-[0.65rem] px-2 py-0.5">{tech}</span>
        ))}
      </div>
      {(project.link || project.github) && (
        <div className="mt-4 flex gap-4">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary hover:underline">
              {lang === "es" ? "Ver proyecto" : "View project"} →
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline">
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function ProjectsSection({ dict, lang }: ProjectsSectionProps) {
  const { title, professionalTitle, personalTitle, professional, personal } = dict.projects;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
      </div>

      <div className="space-y-16">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">{professionalTitle}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {professional.map((p) => <ProjectCard key={p.title} project={p} lang={lang} />)}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">{personalTitle}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {personal.map((p) => <ProjectCard key={p.title} project={p} lang={lang} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
