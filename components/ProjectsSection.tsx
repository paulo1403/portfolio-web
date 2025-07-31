"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Briefcase,
  User,
  Monitor,
  Palette,
  Download,
  Database,
  Code,
} from "lucide-react";

export default function ProjectsSection() {
  const professionalProjects = [
    {
      title: "Unete a Belcorp",
      company: "Belcorp",
      description:
        "Desarrollo y mantenimiento de la plataforma de inscripción para consultoras, utilizando React y GraphQL para una experiencia de usuario fluida y moderna.",
      technologies: ["React", "GraphQL", "TypeScript", "Styled-Components"],
      link: "https://uneteabelcorp.com/pe",
      type: "web",
      year: "2025",
    },
    {
      title: "Centro de Monitoreo Rimac",
      company: "Rimac Seguros",
      description:
        "Plataforma de monitoreo en tiempo real para seguros con interfaces responsivas y soluciones geoespaciales avanzadas con React-Leaflet.",
      technologies: [
        "React",
        "TypeScript",
        "React-Leaflet",
        "Zustand",
        "Ant Design",
      ],
      link: "https://centrodemonitoreo.rimac.com/",
      type: "web",
      year: "2024",
    },
    {
      title: "HolaLink",
      company: "CRD",
      description:
        "Plataforma web innovadora con API serverless en AWS Lambda, autenticación segura con AWS Amplify y diseños móvil-first.",
      technologies: [
        "React",
        "AWS Lambda",
        "AWS Amplify",
        "Node.js",
        "MongoDB",
      ],
      link: "https://hola.link",
      type: "web",
      year: "2023",
    },
  ];

  const personalProjects = [
    {
      title: "MCA Makeup",
      description:
        "Sitio web profesional para maquilladora con galería interactiva, sistema de citas y diseño responsive optimizado para móviles.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      link: "https://mca-makeup.vercel.app/",
      github: null,
      type: "web",
      year: "2024",
    },
    {
      title: "YT-DLP GUI Electron",
      description:
        "Aplicación de escritorio con interfaz gráfica para descargar videos de YouTube usando yt-dlp. Interface intuitiva construida con Electron.",
      technologies: ["Electron", "JavaScript", "Node.js", "HTML/CSS"],
      link: null,
      github: "https://github.com/paulo1403/yt-dlp-gui-electron",
      type: "desktop",
      year: "2024",
    },
    {
      title: "Bun Auth CRUD",
      description:
        "Sistema de autenticación y CRUD moderno construido con Bun runtime. Implementación de JWT, validación de datos y operaciones completas de base de datos.",
      technologies: ["Bun", "TypeScript", "JWT", "SQLite"],
      link: null,
      github: "https://github.com/paulo1403/bun-auth-crud",
      type: "api",
      year: "2024",
    },
    {
      title: "Django API Book",
      description:
        "API REST completa para gestión de libros desarrollada con Django REST Framework. Incluye autenticación, paginación y documentación automática.",
      technologies: ["Django", "Python", "DRF", "PostgreSQL"],
      link: null,
      github: "https://github.com/paulo1403/django-api-book",
      type: "api",
      year: "2024",
    },
  ];

  const getProjectIcon = (type: string) => {
    switch (type) {
      case "web":
        return <Monitor className="w-5 h-5" />;
      case "desktop":
        return <Download className="w-5 h-5" />;
      case "api":
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6"
          >
            Mis{" "}
            <span className="text-blue-600 dark:text-blue-400">Proyectos</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Una selección de proyectos profesionales y personales que demuestran
            mi experiencia en desarrollo web, aplicaciones de escritorio y APIs
            modernas.
          </motion.p>
        </motion.div>

        {/* Professional Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Proyectos Profesionales
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-600"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                      {getProjectIcon(project.type)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-lg">
                        {project.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                        {project.company} • {project.year}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200 dark:border-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Ver Proyecto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8"
          >
            <User className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              Proyectos Personales
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-purple-900/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-200 dark:border-purple-800/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 mr-3">
                      {getProjectIcon(project.type)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white text-lg">
                        {project.title}
                      </h4>
                      <p className="text-purple-600 dark:text-purple-400 text-sm font-medium">
                        {project.year}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-purple-200 dark:border-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Ver Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 font-medium transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 text-white">
            <Github className="w-12 h-12 mx-auto mb-4 text-white" />
            <h4 className="text-2xl font-bold mb-4">¿Quieres ver más?</h4>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Encuentra más proyectos y contribuciones en mi perfil de GitHub.
              Siempre estoy trabajando en algo nuevo e interesante.
            </p>
            <a
              href="https://github.com/paulo1403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              Ver GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
