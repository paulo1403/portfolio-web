"use client";

import { ArrowDownRight } from "lucide-react";
import AnimatedAvatar from "./AnimatedAvatar";

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
        <div className="grid gap-10 lg:grid-cols-[1fr_0.55fr] items-center">
          <div className="space-y-6">
            <p className="ctp-eyebrow">
              {lang === "es" ? "Lima, Perú · Full Stack & Mobile" : "Lima, Peru · Full Stack & Mobile"}
            </p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="block text-foreground">Paulo</span>
              <span className="block ctp-gradient-text">Llanos</span>
            </h1>
            <p className="text-xl font-medium text-foreground/90 sm:text-2xl lg:text-3xl">
              {dict.hero.title}
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {dict.hero.subtitle}
            </p>
            <button
              type="button"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="ctp-btn ctp-btn--primary group"
            >
              {dict.hero.cta}
              <ArrowDownRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <aside className="ctp-card p-8 flex flex-col items-center">
            <AnimatedAvatar />
            <p className="mt-6 text-sm text-muted-foreground text-center">
              {lang === "es"
                ? "Frontend, backend, Android y AI — impacto real de producto."
                : "Frontend, backend, Android and AI — real product impact."}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
