"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface HeaderProps {
  dict: { navigation: { home: string; about: string; projects: string; experience: string; contact: string } };
  lang: string;
}

const navItems = [
  { href: "#home", label: "home" },
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#contact", label: "contact" },
];

export default function Header({ dict, lang }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <nav className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center gap-1.5 text-lg font-bold">
          <span className="text-mauve">Paulo</span>
          <span className="text-pink">Llanos</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`${pathname}${item.href}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {dict.navigation[item.label as keyof typeof dict.navigation]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          )}

          <button
            type="button"
            className="md:hidden p-2 rounded-full text-muted-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
          <div className="flex flex-col py-4 px-6 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={`${pathname}${item.href}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {dict.navigation[item.label as keyof typeof dict.navigation]}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
