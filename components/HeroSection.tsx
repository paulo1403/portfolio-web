"use client";

import { ArrowDownRight, Github, Linkedin, Mail, MapPin, Download } from "lucide-react";
import AnimatedAvatar from "./AnimatedAvatar";

const skills = ["React", "Next.js", "TypeScript", "Kotlin", "Android", "AI Agents", "Node.js", "Python"];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/paulo1403", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com/in/paulollanoscolchado", icon: Linkedin },
  { name: "Email", href: "mailto:paulollanosc@gmail.com", icon: Mail },
];

interface HeroSectionProps {
  dict: { hero: { title: string; subtitle: string; cta: string } };
  lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36 lg:px-8 lg:pb-32">
      {/* CSS-only background — smooth gradient + animated orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(var(--primary)/0.06),transparent_50%),radial-gradient(ellipse_at_70%_80%,rgb(var(--accent)/0.05),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-mauve/10 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink/8 blur-3xl animate-[float_16s_ease-in-out_infinite_2s]" />
        <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-lavender/10 blur-3xl animate-[float_14s_ease-in-out_infinite_4s]" />
      </div>

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] items-start">
          <div className="space-y-8">
            <div>
              <p className="ctp-eyebrow mb-4">
                {lang === "es" ? "Lima, Perú · Full Stack & Mobile" : "Lima, Peru · Full Stack & Mobile"}
              </p>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                <span className="block text-foreground">Paulo</span>
                <span className="block ctp-gradient-text">Llanos</span>
              </h1>
              <p className="mt-6 text-xl font-medium text-foreground/90 sm:text-2xl lg:text-3xl">
                {dict.hero.title}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {dict.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="ctp-btn ctp-btn--primary group"
              >
                {dict.hero.cta}
                <ArrowDownRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
                download
                className="ctp-btn ctp-btn--ghost"
              >
                <Download className="h-4 w-4" />
                {lang === "es" ? "Descargar CV" : "Download CV"}
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <MapPin className="h-4 w-4 text-red" />
                Lima, Peru
              </div>
            </div>

            <div>
              <p className="ctp-eyebrow mb-3">
                {lang === "es" ? "Stack principal" : "Core stack"}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="ctp-chip">{skill}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="ctp-card p-8 flex flex-col items-center">
              <AnimatedAvatar />
              <div className="mt-6 w-full text-center">
                <p className="ctp-eyebrow">
                  {lang === "es" ? "Perfil profesional" : "Professional profile"}
                </p>
                <p className="mt-2 text-2xl font-bold text-foreground">
                  Full Stack & Mobile
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {lang === "es"
                    ? "Frontend, backend, Android y AI — enfocado en impacto real de producto."
                    : "Frontend, backend, Android and AI — focused on real product impact."}
                </p>
              </div>
            </div>

            <div className="ctp-card p-6">
              <p className="ctp-eyebrow mb-4">
                {lang === "es" ? "Conecta conmigo" : "Connect with me"}
              </p>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-full border border-border/50 bg-secondary/30 px-4 py-3 text-sm font-medium text-foreground hover:border-primary/30 hover:bg-secondary/50 transition-all"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-primary"><social.icon className="h-4 w-4" /></span>
                      {social.name}
                    </span>
                    <ArrowDownRight className="h-3.5 w-3.5 text-muted-foreground" />
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
