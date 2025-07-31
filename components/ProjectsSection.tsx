"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Briefcase,
  User,
  Monitor,
  Download,
  Database,
  Code,
} from "lucide-react";

type ProfessionalProject = {
  title: string;
  company: string;
  description: string;
  technologies: string[];
  link: string;
  type: string;
  year: string;
};

type PersonalProject = {
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  github: string | null;
  type: string;
  year: string;
};

export interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3?: string;
    technologies?: string[];
    highlights?: {
      exp: string;
      expDesc: string;
      modern: string;
      modernDesc: string;
      lead: string;
      leadDesc: string;
      pub: string;
      pubDesc: string;
    };
    highlightTitle?: string;
    highlightDesc?: string;
  };
  projects: {
    title: string;
    professionalTitle?: string;
    personalTitle?: string;
    githubCtaTitle?: string;
    githubCtaText?: string;
    githubCtaButton?: string;
    professional: ProfessionalProject[];
    personal: PersonalProject[];
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
}

type ProjectsSectionProps = {
  dict: Dictionary;
  lang: string;
};

export default function ProjectsSection({ dict }: ProjectsSectionProps) {
  const professionalProjects: ProfessionalProject[] =
    dict.projects.professional || [];
  const personalProjects: PersonalProject[] = dict.projects.personal || [];

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
            {dict.projects.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
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
              {dict.projects.professionalTitle || "Proyectos Profesionales"}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {professionalProjects.map(
              (
                project: {
                  title: string;
                  company: string;
                  description: string;
                  technologies: string[];
                  link: string;
                  type: string;
                  year: string;
                },
                index: number,
              ) => (
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
                          {project.company + " • " + project.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string) => (
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
              ),
            )}
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
              {dict.projects.personalTitle || "Proyectos Personales"}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {personalProjects.map(
              (
                project: {
                  title: string;
                  description: string;
                  technologies: string[];
                  link: string | null;
                  github: string | null;
                  type: string;
                  year: string;
                },
                index: number,
              ) => (
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
                    {project.technologies.map((tech: string) => (
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
                        <Github className="w-5 h-5 mr-2" />
                        Código
                      </a>
                    )}
                  </div>
                </motion.div>
              ),
            )}
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
            <h4 className="text-2xl font-bold mb-4">
              {dict.projects.githubCtaTitle || "¿Quieres ver más?"}
            </h4>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              {dict.projects.githubCtaText ||
                "Encuentra más proyectos y contribuciones en mi perfil de GitHub. Siempre estoy trabajando en algo nuevo e interesante."}
            </p>
            <a
              href="https://github.com/paulo1403"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-slate-800 rounded-lg font-medium hover:bg-slate-100 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              {dict.projects.githubCtaButton || "Ver GitHub"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
