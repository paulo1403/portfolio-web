"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { format } from "date-fns";
import { es, enUS } from "date-fns/locale";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "REST APIs",
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
    // Puedes agregar más campos aquí si los usas en este componente
  };
  lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [prefersReducedMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,212,255,0.22),_transparent_42%),radial-gradient(circle_at_80%_18%,_rgba(255,107,107,0.22),_transparent_32%),linear-gradient(180deg,_rgb(15,15,35)_0%,_rgb(10,16,38)_52%,_rgb(15,15,35)_100%)] pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 102, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 102, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Floating Orbs */}
        <motion.div
          className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/25 blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-20 top-40 h-24 w-24 rounded-full bg-secondary/20 blur-xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 h-40 w-40 rounded-full bg-accent/20 blur-xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Mouse Follower Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={
            prefersReducedMotion
              ? { opacity: 0.4 }
              : {
                  x: mousePosition.x * 4,
                  y: mousePosition.y * 4,
                }
          }
          transition={{
            type: "spring" as const,
            stiffness: 50,
            damping: 30,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto container-padding text-center">
        {/* Bloque principal animado */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity }}
          className="mb-24 sm:mb-32"
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
          >
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-surface-foreground">
              {lang === "es"
                ? "Disponible para proyectos"
                : "Available for projects"}{" "}
              •{" "}
              {format(currentTime, "HH:mm", {
                locale: lang === "es" ? es : enUS,
              })}
            </span>
          </motion.div>

          {/* Profile Photo */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1">
                <Image
                  src="/avatar.jpeg"
                  alt="Paulo Llanos"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-full object-cover bg-white"
                  priority
                />
              </div>
              <motion.div
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={titleVariants} className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6">
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Paulo Llanos
              </span>
              <span className="mt-2 block text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                {dict.hero.title}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-slate-200 sm:text-xl lg:text-2xl">
              {dict.hero.subtitle}
            </p>
          </motion.div>


          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById("projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="rounded-lg bg-gradient-to-r from-primary to-secondary px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:brightness-110 hover:shadow-glow"
            >
              {dict.hero.cta}
            </motion.button>

            <motion.a
              href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"}
              download={
                lang === "es"
                  ? "CV_Paulo_Llanos_ES.pdf"
                  : "CV_Paulo_Llanos_EN.pdf"
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-lg border-2 border-secondary px-8 py-3 text-lg font-medium text-secondary transition-all duration-300 hover:bg-secondary hover:text-slate-950"
            >
              {lang === "es" ? "Descargar CV" : "Download CV"}
            </motion.a>
          </motion.div>

          {/* Skills Cloud */}
        </motion.div>

        {/* Skills Cloud */}
        {/* Skills Cloud */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="mb-6 text-sm font-medium uppercase tracking-wider text-slate-300">
            {lang === "es" ? "Tecnologías que domino" : "Technologies I master"}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial="hidden"
                animate="visible"
                variants={skillVariants}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgb(0 212 255 / 0.14)",
                  color: "rgb(0 212 255)",
                }}
                className="cursor-default rounded-full border border-white/15 bg-slate-900/30 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all duration-200 hover:shadow-md"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              animate={floatingAnimation}
              whileHover={{
                scale: 1.2,
                y: -5,
              }}
              whileTap={{ scale: 0.9 }}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-slate-900/45 text-xl text-slate-200 backdrop-blur-sm transition-all duration-200 hover:border-secondary/70 hover:bg-secondary/10 hover:text-secondary"
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
              title={social.name}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
