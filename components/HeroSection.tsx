"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  MessageCircle,
  Download,
} from "lucide-react";

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
  { name: "WhatsApp", href: "https://wa.me/51999195557", icon: MessageCircle },
  { name: "Email", href: "mailto:paulollanosc@gmail.com", icon: Mail },
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState(new Date());
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 pt-20"
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
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
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
          className="absolute top-40 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-xl"
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
          className="absolute bottom-40 left-1/3 w-40 h-40 bg-accent/10 rounded-full blur-xl"
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
          animate={{
            x: mousePosition.x * 4,
            y: mousePosition.y * 4,
          }}
          transition={{
            type: "spring" as const,
            stiffness: 50,
            damping: 30,
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ y, opacity }}
        className="relative z-10 container mx-auto container-padding text-center"
      >
        {/* Status Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-8"
        >
          <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
          <span className="text-sm text-surface-foreground">
            Disponible para proyectos •{" "}
            {format(currentTime, "HH:mm", { locale: es })}
          </span>
        </motion.div>

        {/* Profile Photo */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-1">
              <img
                src="https://avatars.githubusercontent.com/u/37987149?v=4"
                alt="Paulo Llanos"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl"
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
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4">
            <span className="block text-slate-800 dark:text-white">
              Hola, soy
            </span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Paulo Llanos
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-medium flex items-center justify-center gap-3">
            <span>Full Stack Developer</span>
            <motion.div
              className="text-blue-600 dark:text-blue-400"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />
            </motion.div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Con{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            4+ años de experiencia
          </span>{" "}
          creando aplicaciones web modernas y escalables. Especializado en
          React, Next.js, Node.js y tecnologías cloud que impulsan el futuro
          digital.
        </motion.p>

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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Ver mis proyectos
          </motion.button>

          <motion.a
            href="/cv-es.pdf"
            download="CV_Paulo_Llanos_ES.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300"
          >
            Descargar CV
          </motion.a>
        </motion.div>

        {/* Skills Cloud */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-6 font-medium">
            Tecnologías que domino
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
                  backgroundColor: "rgb(59 130 246 / 0.1)",
                  color: "rgb(59 130 246)",
                }}
                className="px-4 py-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:shadow-md transition-all duration-200 cursor-default"
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
          className="flex justify-center gap-6"
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
              className="w-12 h-12 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/30 dark:border-slate-700/30 rounded-full flex items-center justify-center text-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-200 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
              style={{
                animationDelay: `${index * 0.5}s`,
              }}
              title={social.name}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
