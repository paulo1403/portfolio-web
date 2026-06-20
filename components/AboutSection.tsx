"use client";

import { Zap, Activity, Users, BookOpen, Terminal, Bike, Wrench, Cpu, Music, GitFork, Smartphone, Gamepad2 } from "lucide-react";

interface AboutSectionProps {
  dict: {
    about: {
      title: string;
      subtitle: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      technologies: string[];
      highlights: { exp: string; expDesc: string; modern: string; modernDesc: string; lead: string; leadDesc: string; pub: string; pubDesc: string };
      highlightTitle: string;
      highlightDesc: string;
      passions?: {
        title: string;
        items: { label: string; desc: string }[];
        setup?: {
          title: string;
          items: string[];
        };
      };
    };
  };
  lang: string;
}

const icons = [
  { Icon: Zap, color: "text-mauve" },
  { Icon: Activity, color: "text-pink" },
  { Icon: Users, color: "text-blue" },
  { Icon: BookOpen, color: "text-teal" },
];

const passionIcons = [
  { Icon: Terminal, color: "text-mauve" },
  { Icon: Bike, color: "text-pink" },
  { Icon: Wrench, color: "text-peach" },
  { Icon: Cpu, color: "text-teal" },
  { Icon: Music, color: "text-lavender" },
  { Icon: GitFork, color: "text-green" },
  { Icon: Smartphone, color: "text-blue" },
  { Icon: Gamepad2, color: "text-red" },
];

export default function AboutSection({ dict, lang }: AboutSectionProps) {
  const { title, subtitle, paragraph1, paragraph2, paragraph3, technologies, highlights, highlightTitle, highlightDesc } = dict.about;
  const cards = [highlights.exp, highlights.modern, highlights.lead, highlights.pub];
  const descs = [highlights.expDesc, highlights.modernDesc, highlights.leadDesc, highlights.pubDesc];

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="ctp-card p-8 space-y-5">
          <p className="text-base leading-relaxed text-foreground/85">{paragraph1}</p>
          <p className="text-base leading-relaxed text-foreground/85">{paragraph2}</p>
          <p className="text-base leading-relaxed text-foreground/85">{paragraph3}</p>
          <div className="pt-4">
            <p className="ctp-eyebrow mb-3">{lang === "es" ? "Tecnologías" : "Technologies"}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="ctp-chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="ctp-card p-8">
            <p className="text-sm font-bold text-foreground mb-3">{highlightTitle}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{highlightDesc}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => {
              const { Icon, color } = icons[i];
              return (
                <div key={i} className="ctp-card p-5">
                  <Icon className={`h-5 w-5 ${color} mb-2`} />
                  <p className="text-sm font-semibold text-foreground">{cards[i]}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{descs[i]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {dict.about.passions && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">{dict.about.passions.title}</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.about.passions.items.map((item, i) => {
              const { Icon, color } = passionIcons[i] || passionIcons[0];
              return (
                <div key={item.label} className="ctp-card p-5">
                  <Icon className={`h-5 w-5 ${color} mb-2`} />
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {dict.about.passions?.setup && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">{dict.about.passions.setup.title}</h3>
          <div className="ctp-card p-6">
            <div className="flex flex-wrap gap-2">
              {dict.about.passions.setup.items.map((item) => (
                <span key={item} className="ctp-chip text-sm">{item}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
