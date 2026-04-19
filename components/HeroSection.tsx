"use client";

import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL Server",
  "GraphQL",
  "Git",
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/paulo1403", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/paulollanoscolchado",
    icon: Linkedin,
  },
  { name: "Email", href: "mailto:paulollanosc@gmail.com", icon: Mail },
];

interface HeroSectionProps {
  dict: {
    hero: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };
  lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-28 sm:pt-32 lg:px-8 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="retro-panel p-6 sm:p-8 lg:p-10">
            <div className="editorial-kicker mb-6">
              <span className="editorial-dot" />
              {lang === "es"
                ? "Disponible para retos complejos de producto"
                : "Available for complex product work"}
            </div>

            <div>
              <p className="eyebrow mb-4">
                {lang === "es"
                  ? "Lima, Perú · Full Stack"
                  : "Lima, Peru · Full Stack"}
              </p>

              <h1 className="text-4xl leading-[0.98] sm:text-5xl lg:text-6xl xl:text-[4.3rem]">
                <span className="block text-foreground">Paulo</span>
                <span className="block text-gradient">Llanos</span>
                <span className="mt-4 block max-w-xl font-sans text-xl font-extrabold leading-tight tracking-tight text-foreground sm:text-2xl lg:text-[2rem]">
                  {dict.hero.title}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-surface-foreground sm:text-xl">
                {dict.hero.subtitle}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) element.scrollIntoView({ behavior: "auto" });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-base font-bold text-primary-foreground"
                >
                  {dict.hero.cta}
                  <ArrowDownRight className="h-5 w-5" />
                </button>

                <a
                  href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
                  download={
                    lang === "es"
                      ? "CV_Paulo_Llanos_ES.pdf"
                      : "CV_Paulo_Llanos_EN.pdf"
                  }
                  className="rounded-full border border-primary/30 bg-background px-6 py-3.5 text-center text-base font-bold text-primary"
                >
                  {lang === "es" ? "Descargar CV" : "Download CV"}
                </a>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-accent/14 bg-accent/8 px-4 py-2 text-sm font-bold text-foreground">
              <MapPin className="h-4 w-4 text-accent" />
              Lima, Peru
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-muted-foreground">
                {lang === "es" ? "Stack principal" : "Core stack"}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="retro-chip px-3 py-1.5 text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <aside className="grid gap-6">
            <div className="retro-panel p-6 sm:p-8">
              <div className="mx-auto w-fit rounded-[2rem] border border-primary/18 bg-gradient-surface p-3 shadow-lg">
                <Image
                  src="/avatar.jpeg"
                  alt="Paulo Llanos"
                  width={320}
                  height={320}
                  priority
                  className="h-56 w-56 rounded-[1.5rem] object-cover sm:h-64 sm:w-64"
                />
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-primary/14 bg-background/72 p-5">
                <p className="eyebrow">
                  {lang === "es"
                    ? "Perfil profesional"
                    : "Professional profile"}
                </p>
                <p className="mt-3 text-2xl font-extrabold text-foreground">
                  Full Stack Developer
                </p>
                <p className="mt-2 text-sm leading-relaxed text-surface-foreground">
                  {lang === "es"
                    ? "Frontend y backend mantenible, enfocado en impacto real de producto."
                    : "Maintainable frontend and backend, focused on real product impact."}
                </p>
              </div>
            </div>

            <div className="retro-panel p-6">
              <p className="eyebrow mb-4">
                {lang === "es" ? "Conecta conmigo" : "Connect with me"}
              </p>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center justify-between rounded-2xl border border-primary/14 bg-background/72 px-4 py-3 text-foreground"
                    title={social.name}
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-primary/10 p-2 text-primary">
                        <social.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-bold">{social.name}</span>
                    </div>
                    <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
