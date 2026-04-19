"use client";

import { ArrowRight, Menu, SunMoon, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    experience?: string;
  };
}

type HeaderProps = {
  dict: Dictionary;
  lang: "en" | "es";
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerHeight = 88;
  const top = element.offsetTop - headerHeight;

  window.scrollTo({ top, behavior: "auto" });
};

export default function Header({ dict, lang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { resolvedTheme, setTheme } = useTheme();

  const navigation = useMemo(
    () => [
      { name: dict.navigation.home, href: "#home" },
      { name: dict.navigation.about, href: "#about" },
      { name: dict.navigation.projects, href: "#projects" },
      { name: dict.navigation.experience ?? "Experience", href: "#experience" },
    ],
    [
      dict.navigation.home,
      dict.navigation.about,
      dict.navigation.projects,
      dict.navigation.experience,
    ],
  );

  const otherLang = lang === "es" ? "en" : "es";

  const getSwitchLangHref = () => {
    if (typeof window === "undefined") return `/${otherLang}`;
    const path = window.location.pathname;
    const switched = path.replace(/^\/(en|es)/, `/${otherLang}`);
    return switched === path ? `/${otherLang}${path}` : switched;
  };

  useEffect(() => {
    const onScroll = () => {
      setIsPinned(window.scrollY > 14);

      const sections = navigation.map((item) => item.href.slice(1));
      const marker = window.scrollY + 130;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        if (
          marker >= element.offsetTop &&
          marker < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [navigation]);

  const isDark = resolvedTheme === "dark";
  const themeLabel = lang === "es" ? "Tema" : "Theme";
  const themeAriaLabel = lang === "es" ? "Cambiar tema" : "Toggle theme";
  const onToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-6">
      <nav
        className={`mx-auto max-w-7xl rounded-[1.6rem] border px-4 py-3 lg:px-6 ${
          isPinned
            ? "border-primary/30 bg-surface/92 shadow-lg backdrop-blur"
            : "border-primary/20 bg-surface/72"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="text-left"
          >
            <div className="text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-muted-foreground">
              Full Stack
            </div>
            <div className="font-display text-lg leading-none text-primary sm:text-xl">
              Paulo Llanos
              <span className="text-secondary">.</span>
            </div>
          </button>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <button
                  type="button"
                  key={item.href}
                  onClick={() => scrollToSection(sectionId)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-primary/8 hover:text-primary"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}

            <a
              href={getSwitchLangHref()}
              className="ml-2 rounded-full border border-primary/25 bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary"
              aria-label={
                lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"
              }
            >
              {otherLang.toUpperCase()}
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary"
              aria-label={themeAriaLabel}
              title={themeAriaLabel}
            >
              <SunMoon className="h-4 w-4" />
              {themeLabel}
            </button>
          </div>

          <div className="hidden lg:block">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2.5 text-sm font-bold text-primary-foreground shadow-md"
            >
              {lang === "es" ? "Hablemos" : "Let’s talk"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-full border border-primary/25 bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary"
              aria-label={themeAriaLabel}
            >
              <span className="inline-flex items-center gap-1.5">
                <SunMoon className="h-3.5 w-3.5" />
                {themeLabel}
              </span>
            </button>

            <a
              href={getSwitchLangHref()}
              className="rounded-full border border-primary/25 bg-background px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-primary"
              aria-label={
                lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"
              }
            >
              {otherLang.toUpperCase()}
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              className="rounded-full border border-primary/25 p-2 text-primary"
              aria-label={lang === "es" ? "Abrir menú" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 overflow-hidden lg:hidden">
            <div className="space-y-2 rounded-2xl border border-primary/20 bg-background/90 p-3">
              {navigation.map((item) => {
                const sectionId = item.href.slice(1);
                return (
                  <button
                    type="button"
                    key={item.href}
                    onClick={() => {
                      scrollToSection(sectionId);
                      setActiveSection(sectionId);
                      setIsOpen(false);
                    }}
                    className="block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground hover:bg-primary/10"
                  >
                    {item.name}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-bold text-primary-foreground"
              >
                {lang === "es" ? "Hablemos" : "Let’s talk"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
