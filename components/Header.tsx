"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    experience?: string;
  };
  hero: {
    cta: string;
  };
}

type HeaderProps = {
  dict: Dictionary;
  lang: "en" | "es";
};

const getNavigation = (dict: Dictionary) => [
  { name: dict.navigation.home, href: "#home" },
  { name: dict.navigation.about, href: "#about" },
  { name: dict.navigation.projects, href: "#projects" },
  { name: dict.navigation.experience, href: "#experience" },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80; // Height of fixed header
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
};

export default function Header({ dict, lang }: HeaderProps) {
  const navigation = getNavigation(dict);
  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Idioma switcher
  const otherLang = lang === "es" ? "en" : "es";
  // Calcula la URL actual pero cambiando el prefijo de idioma
  const getSwitchLangHref = () => {
    if (typeof window === "undefined") return `/${otherLang}`;
    const path = window.location.pathname;
    const newPath = path.replace(/^\/(en|es)/, `/${otherLang}`);
    return newPath === path ? `/${otherLang}${path}` : newPath;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, [navigation]);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const navItemVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  // Idioma switcher (opcional)
  // const otherLang = lang === "es" ? "en" : "es";

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ scaleX: progressScaleX }}
      />
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            variants={logoVariants}
            whileHover="hover"
            className="flex-shrink-0"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200"
            >
              Paulo Llanos
              <span className="text-secondary">.</span>
            </button>
          </motion.div>
          {/* Language Switcher (solo desktop) */}
          <div className="ml-4 lg:hidden flex items-center">
            <a
              href={
                typeof window !== "undefined"
                  ? getSwitchLangHref()
                  : `/${otherLang}`
              }
              className="px-3 py-1 rounded-md border border-primary/70 text-primary bg-background/70 hover:bg-primary/10 transition-all duration-200 text-xs font-semibold uppercase"
              aria-label={
                lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"
              }
              style={{ letterSpacing: "0.05em" }}
            >
              {otherLang.toUpperCase()}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <motion.div
                  key={item.name}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <button
                    onClick={() => {
                      const sectionId = item.href.substring(1);
                      scrollToSection(sectionId);
                      setActiveSection(sectionId);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        layoutId="navbar-indicator"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{
                          type: "spring" as const,
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
              {/* Language Switcher (desktop) */}
              <a
                href={
                  typeof window !== "undefined"
                    ? getSwitchLangHref()
                    : `/${otherLang}`
                }
                className="ml-6 px-3 py-1 rounded-md border border-primary/70 text-primary bg-background/70 hover:bg-primary/10 transition-all duration-200 text-xs font-semibold uppercase"
                aria-label={
                  lang === "es" ? "Cambiar a inglés" : "Switch to Spanish"
                }
                style={{ letterSpacing: "0.05em" }}
              >
                {otherLang.toUpperCase()}
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white px-6 py-2.5 text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-glow"
            >
              <MessageCircle className="w-4 h-4" />
              {dict.hero.cta}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-surface/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">
                {lang === "en" ? "Open main menu" : "Abrir menú principal"}
              </span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-6"
              >
                <motion.div
                  variants={{
                    closed: { opacity: 1, rotate: 0 },
                    open: { opacity: 0, rotate: 180 },
                  }}
                  className="absolute"
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
                <motion.div
                  variants={{
                    closed: { opacity: 0, rotate: -180 },
                    open: { opacity: 1, rotate: 0 },
                  }}
                  className="absolute"
                >
                  <X className="w-6 h-6" />
                </motion.div>
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-surface/95 backdrop-blur-md rounded-lg mt-2 border border-border/30">
                {navigation.map((item) => (
                  <motion.div key={item.name} variants={menuItemVariants}>
                    <button
                      onClick={() => {
                        const sectionId = item.href.substring(1);
                        scrollToSection(sectionId);
                        setActiveSection(sectionId);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                        activeSection === item.href.substring(1)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </button>
                  </motion.div>
                ))}
                <motion.div variants={menuItemVariants} className="pt-2">
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:brightness-110 text-white px-4 py-2.5 text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {dict.hero.cta}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
