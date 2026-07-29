"use client";

import { Languages } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  dict: { navigation: { home: string; about: string; projects: string; experience: string; contact: string } };
  lang: string;
}

export default function Header({ dict, lang }: Props) {
  const pathname = usePathname();
  const router = useRouter();

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
        <button
          onClick={switchLang}
          className="text-xs text-[var(--text-soft)] hover:text-[var(--text)] transition-colors flex items-center gap-1"
          aria-label="Switch language"
        >
          <Languages size={13} />
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
