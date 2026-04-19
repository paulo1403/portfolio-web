"use client";

import {
  Briefcase,
  Calendar,
  Cloud,
  Code,
  Database,
  LayoutGrid,
  MapPin,
  Milestone,
  Wrench,
} from "lucide-react";

interface Dictionary {
  projects: {
    title: string;
    experienceTitle?: string;
    skillsTitle?: string;
    experienceDescription?: string;
  };
  experience?: {
    title: string;
    jobs: {
      company: string;
      position: string;
      period: string;
      duration: string;
      location: string;
      achievements: string[];
      technologies: string[];
    }[];
    skills?: {
      title: string;
      frontend: { title: string; skills: string[] };
      backend: { title: string; skills: string[] };
      devops: { title: string; skills: string[] };
      special: { title: string; skills: string[] };
    };
    achievements?: {
      title: string;
      list: { title: string; description: string; icon: string }[];
    };
  };
}

interface ExperienceSectionProps {
  dict: Dictionary;
  lang: string;
}

export default function ExperienceSection({
  dict,
  lang,
}: ExperienceSectionProps) {
  const isSpanish = lang === "es";

  const experiences = (
    dict.experience?.jobs || [
      {
        company: "Belcorp",
        position: lang === "en" ? "Software Developer" : "Software Developer",
        period: lang === "en" ? "Apr 2025 - Present" : "Abr 2025 - Presente",
        duration: lang === "en" ? "Current" : "Actual",
        location: "Lima, Peru",
        achievements: [
          lang === "en"
            ? "Automation development with UnifyApps for notifications in 12 countries."
            : "Desarrollo de automatizaciones con UnifyApps para notificaciones en 12 paises.",
          lang === "en"
            ? "Creation and maintenance of Store Procedures for data optimization."
            : "Creacion y mantenimiento de Store Procedures para optimizacion de datos.",
          lang === "en"
            ? "Frontend development for uneteabelcorp.com with React and GraphQL."
            : "Desarrollo frontend para uneteabelcorp.com con React y GraphQL.",
          lang === "en"
            ? "Support and maintenance for SoporteBelcorp platform in .NET Framework."
            : "Soporte y mantenimiento para la plataforma SoporteBelcorp en .NET Framework.",
        ],
        technologies: [
          "UnifyApps",
          "React",
          "GraphQL",
          ".NET Framework",
          "SQL Server",
        ],
      },
    ]
  ).slice(0, 3);

  const technicalSkills = dict.experience?.skills
    ? {
        [dict.experience.skills.frontend.title]: {
          icon: <Code className="h-5 w-5" />,
          skills: dict.experience.skills.frontend.skills,
        },
        [dict.experience.skills.backend.title]: {
          icon: <Database className="h-5 w-5" />,
          skills: dict.experience.skills.backend.skills,
        },
        [dict.experience.skills.devops.title]: {
          icon: <Cloud className="h-5 w-5" />,
          skills: dict.experience.skills.devops.skills,
        },
        [dict.experience.skills.special.title]: {
          icon: <Wrench className="h-5 w-5" />,
          skills: dict.experience.skills.special.skills,
        },
      }
    : {
        [lang === "en" ? "Frontend" : "Frontend"]: {
          icon: <Code className="h-5 w-5" />,
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React-Leaflet",
            "Ant Design",
          ],
        },
        [lang === "en" ? "Backend" : "Backend"]: {
          icon: <Database className="h-5 w-5" />,
          skills: [
            "Node.js",
            "Python",
            "Django",
            ".NET Core",
            "Express.js",
            "Bun",
          ],
        },
        [lang === "en" ? "Cloud & DevOps" : "Cloud & DevOps"]: {
          icon: <Cloud className="h-5 w-5" />,
          skills: ["AWS Lambda", "AWS Amplify", "Docker", "Vercel", "Firebase"],
        },
        [lang === "en" ? "Tools" : "Herramientas"]: {
          icon: <Wrench className="h-5 w-5" />,
          skills: ["Git", "Jest", "Vite", "Webpack", "Formik", "Zustand"],
        },
      };

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4">
            {isSpanish
              ? "Trayectoria y capacidad técnica"
              : "Trajectory and technical depth"}
          </p>
          <h2 className="mb-6 text-4xl text-foreground md:text-5xl">
            {dict.projects?.experienceTitle ||
              (lang === "en" ? "Experience & " : "Experiencia & ")}
            <span className="text-primary">
              {dict.projects?.skillsTitle ||
                (lang === "en" ? "Skills" : "Habilidades")}
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-surface-foreground">
            {dict.projects?.experienceDescription ||
              (lang === "en"
                ? "Over 4 years of experience developing innovative solutions, leading complex migrations, and implementing cutting-edge technologies."
                : "Mas de 4 anos de experiencia desarrollando soluciones innovadoras, liderando migraciones complejas y implementando tecnologias de vanguardia.")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="retro-panel p-6 sm:p-8">
            <div className="mb-8 flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-extrabold text-foreground">
                {dict.experience?.title ||
                  (lang === "en"
                    ? "Professional Experience"
                    : "Experiencia Profesional")}
              </h3>
            </div>

            <div className="relative pl-10">
              <div className="absolute bottom-1 left-2.5 top-1 w-px bg-gradient-primary" />

              {experiences.map((exp, index) => (
                <article key={index} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[2.15rem] top-5 h-4 w-4 rounded-full border-4 border-background bg-primary" />

                  <div className="rounded-[1.6rem] border border-primary/15 bg-background/72 p-5 sm:p-6">
                    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
                          {exp.company}
                        </p>
                        <h4 className="mt-2 text-xl font-extrabold text-foreground">
                          {exp.position}
                        </h4>
                      </div>
                      <div className="text-sm text-surface-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="mt-1 flex items-center gap-2">
                          <Milestone className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      <MapPin className="h-4 w-4 text-accent" />
                      {exp.location}
                    </div>

                    <div className="space-y-2">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed text-surface-foreground"
                        >
                          {achievement}
                        </p>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="retro-chip px-3 py-1 text-xs font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="retro-panel p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3">
                <LayoutGrid className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-extrabold text-foreground">
                  {dict.experience?.skills?.title ||
                    (lang === "en"
                      ? "Technical Skills"
                      : "Habilidades Tecnicas")}
                </h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {Object.entries(technicalSkills).map(([category, data]) => (
                  <div
                    key={category}
                    className="rounded-[1.5rem] border border-primary/15 bg-background/72 p-5"
                  >
                    <div className="mb-4 flex items-center gap-2 text-primary">
                      {data.icon}
                      <h4 className="font-extrabold text-foreground">
                        {category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {data.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="retro-chip px-3 py-1 text-xs font-semibold"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
