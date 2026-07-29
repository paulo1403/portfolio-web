"use client";

import { Languages, Moon, Sun } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  dict: { navigation: { home: string; about: string; projects: string; experience: string; contact: string } };
  lang: string;
}

export default function Header({ dict, lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  };

  const switchLang = () => {
    const newLang = lang === "es" ? "en" : "es";
    router.push(pathname.replace(`/${lang}`, `/${newLang}`));
  };

  const items = [
    { label: dict.navigation.about, href: "#about" },
    { label: dict.navigation.projects, href: "#projects" },
    { label: dict.navigation.experience, href: "#experience" },
    { label: dict.navigation.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-sm">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex items-center justify-between h-14">
        <a href="#" className="display text-sm tracking-tight">PL</a>
        <nav className="hidden sm:flex items-center gap-6">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-wider uppercase text-[var(--text-soft)] hover:text-[var(--text)] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-[var(--text-soft)] hover:text-[var(--text)] transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={switchLang}
            className="text-xs text-[var(--text-soft)] hover:text-[var(--text)] transition-colors flex items-center gap-1"
            aria-label="Switch language"
          >
            <Languages size={13} />
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </header>
  );
}
