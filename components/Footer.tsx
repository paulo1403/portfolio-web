"use client";

import { Heart, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/paulo1403",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/paulollanoscolchado",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:paulollanosc@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="px-4 pb-6 pt-16 lg:px-6">
      <div className="retro-panel mx-auto max-w-7xl p-8 text-foreground sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow mb-4">{lang === "es" ? "Cierre" : "Closing note"}</p>
            <h3 className="text-3xl font-extrabold text-foreground sm:text-4xl">Paulo Llanos</h3>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-surface-foreground sm:text-lg">
              {lang === "en"
                ? "Full Stack Developer focused on product delivery, clearer interfaces, and technical decisions that improve stability, scalability, and business flow."
                : "Desarrollador Full Stack enfocado en delivery de producto, interfaces más claras y decisiones técnicas que mejoran estabilidad, escalabilidad y flujo de negocio."}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-primary/20 bg-background px-4 py-3 text-primary"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-border/70 pt-8">
          <div className="flex flex-col items-center justify-between gap-3 text-sm text-surface-foreground md:flex-row">
            <p>
              {lang === "en"
                ? `© ${new Date().getFullYear()} Paulo Llanos. All rights reserved.`
                : `© ${new Date().getFullYear()} Paulo Llanos. Todos los derechos reservados.`}
            </p>
            <p className="flex items-center">
              {lang === "en" ? (
                <>
                  Made with <Heart className="mx-1 h-4 w-4 text-red-500" fill="currentColor" /> from Lima, Peru
                </>
              ) : (
                <>
                  Hecho con <Heart className="mx-1 h-4 w-4 text-red-500" fill="currentColor" /> desde Lima, Peru
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
