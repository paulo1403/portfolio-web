"use client";

import type { ComponentType } from "react";
import { Trophy, ArrowUpRight, Gauge, Users2, BookOpen } from "lucide-react";

interface ExperienceSectionProps {
  dict: {
    experience: {
      title: string;
      subtitle: string;
      jobs: { company: string; position: string; period: string; duration: string; location: string; achievements: string[]; technologies: string[] }[];
      research: { title: string; institution: string; period: string; achievements: string[] };
      education: { title: string; degree: string; institution: string; period: string; location: string };
      certifications: { title: string; list: { name: string; issuer: string; date: string; id?: string }[] };
      skills: { title: string; frontend: { title: string; skills: string[] }; backend: { title: string; skills: string[] }; mobile: { title: string; skills: string[] }; devops: { title: string; skills: string[] }; special: { title: string; skills: string[] }; ai: { title: string; skills: string[] } };
      achievements: { title: string; list: { title: string; description: string; icon: string }[] };
    };
  };
  lang: string;
}

const achievementIcons: Record<string, { Icon: ComponentType<{ className?: string }>; color: string }> = {
  publication: { Icon: BookOpen, color: "text-mauve" },
  migration: { Icon: ArrowUpRight, color: "text-pink" },
  modernization: { Icon: Gauge, color: "text-blue" },
  lead: { Icon: Users2, color: "text-lavender" },
  trophy: { Icon: Trophy, color: "text-peach" },
};

const colors = ["text-mauve", "text-pink", "text-blue", "text-teal", "text-peach", "text-lavender"];

export default function ExperienceSection({ dict, lang }: ExperienceSectionProps) {
  const { title, subtitle, jobs, research, education, certifications, skills, achievements } = dict.experience;
  const skillCategories = [skills.frontend, skills.backend, skills.mobile, skills.devops, skills.special, skills.ai];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="space-y-16">
        {/* Professional Experience */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-8">
            {lang === "es" ? "Experiencia Profesional" : "Professional Experience"}
          </h3>
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job.company} className="ctp-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <p className={`${colors[jobs.indexOf(job) % colors.length]} text-sm font-bold`}>{job.company}</p>
                    <h4 className="text-lg font-semibold text-foreground mt-0.5">{job.position}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{job.period} · {job.duration} · {job.location}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="ctp-eyebrow mb-3">{lang === "es" ? "Logros" : "Achievements"}</p>
                    <ul className="space-y-2">
                      {job.achievements.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1 flex-shrink-0">▸</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="ctp-eyebrow mb-3">{lang === "es" ? "Tecnologías" : "Technologies"}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="ctp-chip">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research */}
        <div className="ctp-card p-6 sm:p-8">
          <p className="text-sm font-bold text-mauve mb-1">{research.title}</p>
          <p className="text-xs text-muted-foreground mb-4">{research.institution} · {research.period}</p>
          <ul className="space-y-2">
            {research.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                <span className="text-mauve mt-1 flex-shrink-0">▸</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="ctp-card p-6 sm:p-8">
          <p className="text-sm font-bold text-blue mb-1">{education.title}</p>
          <h4 className="text-base font-semibold text-foreground mt-1">{education.degree}</h4>
          <p className="text-sm text-foreground/80 mt-0.5">{education.institution}</p>
          <p className="text-xs text-muted-foreground mt-1">{education.period} · {education.location}</p>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">{certifications.title}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.list.map((cert) => (
              <div key={cert.name} className="ctp-card p-5">
                <p className="text-sm font-semibold text-foreground">{cert.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{cert.date}</p>
                {cert.id && <p className="text-[0.65rem] text-muted-foreground font-mono mt-1">{cert.id}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">{skills.title}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <div key={cat.title} className="ctp-card p-6">
                <p className={`${colors[i % colors.length]} text-sm font-bold mb-3`}>{cat.title}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span key={s} className="ctp-chip text-xs px-2 py-1">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">{achievements.title}</h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.list.map((a) => {
              const iconDef = achievementIcons[a.icon] || achievementIcons.trophy;
              const { Icon, color } = iconDef;
              return (
                <div key={a.title} className="ctp-card p-6">
                  <Icon className={`h-6 w-6 ${color} mb-3`} />
                  <p className="text-sm font-semibold text-foreground">{a.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{a.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
