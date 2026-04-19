"use client";

import {
  ArrowUpRight,
  Briefcase,
  Code,
  Database,
  Download,
  ExternalLink,
  FolderGit2,
  Github,
  Monitor,
  Sparkles,
  User,
} from "lucide-react";

type ProfessionalProject = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link: string | null;
  type: string;
  year: string;
};

type PersonalProject = {
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  github: string | null;
  type: string;
  year: string;
};

export interface Dictionary {
  projects: {
    title: string;
    professionalTitle?: string;
    personalTitle?: string;
    githubCtaTitle?: string;
    githubCtaText?: string;
    githubCtaButton?: string;
    professional: ProfessionalProject[];
    personal: PersonalProject[];
  };
}

type ProjectsSectionProps = {
  dict: Dictionary;
  lang: string;
};

export default function ProjectsSection({ dict, lang }: ProjectsSectionProps) {
  const professionalProjects: ProfessionalProject[] = dict.projects.professional || [];
  const personalProjects: PersonalProject[] = dict.projects.personal || [];
  const featuredPersonalProject = personalProjects[0];
  const highlightedPersonalProjects = personalProjects.slice(1, 3);
  const archivePersonalProjects = personalProjects.slice(3);

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "web":
        return <Monitor className="h-5 w-5" />;
      case "desktop":
        return <Download className="h-5 w-5" />;
      case "api":
        return <Database className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    if (lang === "en") {
      switch (type) {
        case "web":
          return "Web Product";
        case "api":
          return "API";
        case "desktop":
          return "Desktop App";
        default:
          return "Software";
      }
    }

    switch (type) {
      case "web":
        return "Producto Web";
      case "api":
        return "API";
      case "desktop":
        return "App de Escritorio";
      default:
        return "Software";
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl text-foreground md:text-5xl">{dict.projects.title}</h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-gradient-primary" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <div className="retro-panel p-7">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                <Sparkles className="h-4 w-4" />
                {lang === "en" ? "Personal Build Track" : "Track de Proyectos Propios"}
              </div>

              <h3 className="max-w-sm text-3xl font-extrabold text-foreground sm:text-4xl">
                {lang === "en"
                  ? "A stronger view of what I actually build outside client work."
                  : "Una vista más sólida de lo que realmente construyo fuera del trabajo con clientes."}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-surface-foreground">
                {lang === "en"
                  ? "I reworked this section around real repositories from paulo1403: product experiments, full-stack systems, admin workflows, map-driven products, and small backend utilities."
                  : "Reorganicé esta sección alrededor de repos reales de paulo1403: experimentos de producto, sistemas full stack, flujos admin, productos guiados por mapas y utilidades backend pequeñas."}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="rounded-2xl border border-primary/15 bg-background/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    {lang === "en" ? "Focus" : "Foco"}
                  </p>
                  <p className="mt-2 text-sm font-bold text-foreground">
                    {lang === "en" ? "Product + engineering" : "Producto + ingeniería"}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-background/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    {lang === "en" ? "Patterns" : "Patrones"}
                  </p>
                  <p className="mt-2 text-sm font-bold text-foreground">
                    {lang === "en" ? "Admin panels, APIs, maps" : "Paneles admin, APIs, mapas"}
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/15 bg-background/70 p-4">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                    {lang === "en" ? "Profile" : "Perfil"}
                  </p>
                  <p className="mt-2 text-sm font-bold text-foreground">GitHub / paulo1403</p>
                </div>
              </div>
            </div>

            <div className="retro-panel p-7">
              <div className="mb-5 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-extrabold text-foreground">
                  {dict.projects.professionalTitle || "Proyectos Profesionales"}
                </h3>
              </div>

              <div className="space-y-4">
                {professionalProjects.map((project, index) => (
                  <article key={index} className="rounded-2xl border border-primary/15 bg-background/70 p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <div className="rounded-xl bg-primary/10 p-2 text-primary">{getProjectIcon(project.type)}</div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-base font-extrabold text-foreground sm:text-lg">{project.title}</h4>
                        <p className="text-sm font-semibold text-primary">{project.company + " • " + project.year}</p>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-surface-foreground sm:text-base">{project.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="retro-chip px-3 py-1 text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {lang === "en" ? "Open project" : "Abrir proyecto"}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="retro-panel overflow-hidden p-0">
              <div className="border-b border-accent/15 bg-gradient-accent p-7 text-accent-foreground">
                <div className="mb-3 flex items-center gap-3">
                  <User className="h-5 w-5" />
                  <h3 className="text-2xl font-extrabold">{dict.projects.personalTitle || "Proyectos Personales"}</h3>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed opacity-95 sm:text-base">
                  {lang === "en"
                    ? "This block now prioritizes repositories with stronger product thinking, better technical depth, and clearer ownership signals."
                    : "Este bloque ahora prioriza repos con mejor pensamiento de producto, más profundidad técnica y señales más claras de ownership."}
                </p>
              </div>

              {featuredPersonalProject && (
                <div className="p-7">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.15em] text-accent">
                      {lang === "en" ? "Featured repo" : "Repo destacado"}
                    </span>
                    <span className="rounded-full border border-primary/15 bg-background px-3 py-1 text-xs font-bold text-muted-foreground">
                      {getTypeLabel(featuredPersonalProject.type)}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {featuredPersonalProject.year}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-accent/10 p-3 text-accent">{getProjectIcon(featuredPersonalProject.type)}</div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-2xl font-extrabold text-foreground sm:text-3xl">{featuredPersonalProject.title}</h4>
                      <p className="mt-4 text-base leading-relaxed text-surface-foreground">{featuredPersonalProject.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {featuredPersonalProject.technologies.map((tech) => (
                          <span key={tech} className="retro-chip px-3 py-1 text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-4">
                        {featuredPersonalProject.link && (
                          <a
                            href={featuredPersonalProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-bold text-primary-foreground"
                          >
                            <ExternalLink className="h-4 w-4" />
                            {lang === "en" ? "View live project" : "Ver proyecto online"}
                          </a>
                        )}

                        {featuredPersonalProject.github && (
                          <a
                            href={featuredPersonalProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-background px-5 py-3 text-sm font-bold text-foreground"
                          >
                            <Github className="h-4 w-4" />
                            {lang === "en" ? "Open repository" : "Abrir repositorio"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {highlightedPersonalProjects.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {highlightedPersonalProjects.map((project) => (
                  <article key={project.title} className="retro-panel flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="rounded-xl bg-accent/10 p-2 text-accent">{getProjectIcon(project.type)}</div>
                        <div>
                          <h4 className="text-lg font-extrabold text-foreground">{project.title}</h4>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                            {getTypeLabel(project.type)} • {project.year}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-5 flex-1 text-sm leading-relaxed text-surface-foreground">{project.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="retro-chip px-3 py-1 text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-primary"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {lang === "en" ? "Demo" : "Demo"}
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary"
                        >
                          <Github className="h-4 w-4" />
                          {lang === "en" ? "Repository" : "Repositorio"}
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {archivePersonalProjects.length > 0 && (
              <div className="retro-panel p-7">
                <div className="mb-5 flex items-center gap-3">
                  <FolderGit2 className="h-5 w-5 text-primary" />
                  <h4 className="text-xl font-extrabold text-foreground">
                    {lang === "en" ? "More from the repo archive" : "Más del archivo de repos"}
                  </h4>
                </div>

                <div className="space-y-4">
                  {archivePersonalProjects.map((project) => (
                    <article
                      key={project.title}
                      className="grid gap-4 rounded-2xl border border-primary/15 bg-background/70 p-5 sm:grid-cols-[1fr_auto] sm:items-start"
                    >
                      <div>
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <h5 className="text-base font-extrabold text-foreground">{project.title}</h5>
                          <span className="rounded-full border border-primary/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                            {getTypeLabel(project.type)}
                          </span>
                          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                            {project.year}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-surface-foreground">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="retro-chip px-3 py-1 text-xs font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 sm:justify-end">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/8 px-4 py-2 text-sm font-bold text-accent"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                            {lang === "en" ? "Visit" : "Visitar"}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-background px-4 py-2 text-sm font-bold text-foreground"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="retro-panel bg-gradient-accent p-8 text-foreground">
            <Github className="mx-auto mb-4 h-12 w-12 text-foreground" />
            <h4 className="mb-4 text-2xl font-bold text-foreground">{dict.projects.githubCtaTitle || "¿Quieres ver mas?"}</h4>
            <p className="mx-auto mb-6 max-w-2xl text-lg text-surface-foreground">
              {dict.projects.githubCtaText ||
                "Encuentra mas proyectos y contribuciones en mi perfil de GitHub. Siempre estoy trabajando en algo nuevo e interesante."}
            </p>
            <a
              href="https://github.com/paulo1403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-foreground/20 bg-foreground px-6 py-3 font-bold text-background"
            >
              <Github className="mr-2 h-5 w-5" />
              {dict.projects.githubCtaButton || "Ver GitHub"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
