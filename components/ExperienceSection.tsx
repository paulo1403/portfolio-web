"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Award,
  Code,
  Database,
  Cloud,
  Wrench,
  MapPin,
  Zap,
  Trophy,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

interface Dictionary {
  navigation: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    experience?: string;
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
    professional: {
      title: string;
      company: string;
      description: string;
      technologies: string[];
      link: string;
      type: string;
      year: string;
    }[];
    personal: {
      title: string;
      description: string;
      technologies: string[];
      link: string | null;
      github: string | null;
      type: string;
      year: string;
    }[];
    experienceTitle?: string;
    skillsTitle?: string;
    experienceDescription?: string;
    professionalExperience?: string;
    technicalSkills?: string;
    achievements?: string;
  };
  experience?: {
    title: string;
    subtitle: string;
    jobs: {
      company: string;
      position: string;
      period: string;
      duration: string;
      location: string;
      achievements: string[];
      technologies: string[];
    }[];
    research?: {
      title: string;
      institution: string;
      period: string;
      achievements: string[];
    };
    education?: {
      title: string;
      degree: string;
      institution: string;
      period: string;
      location: string;
    };
    certifications?: {
      title: string;
      list: {
        name: string;
        issuer: string;
        date: string;
        id?: string;
      }[];
    };
    skills?: {
      title: string;
      frontend: {
        title: string;
        skills: string[];
      };
      backend: {
        title: string;
        skills: string[];
      };
      devops: {
        title: string;
        skills: string[];
      };
      special: {
        title: string;
        skills: string[];
      };
    };
    achievements?: {
      title: string;
      list: {
        title: string;
        description: string;
        icon: string;
      }[];
    };
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

interface ExperienceSectionProps {
  dict: Dictionary;
  lang: string;
}

export default function ExperienceSection({
  dict,
  lang,
}: ExperienceSectionProps) {
  // Use data from dictionary or fallback to current data
  const experiences = dict.experience?.jobs || [
    {
      company: "Belcorp",
      position: lang === "en" ? "Software Developer" : "Software Developer",
      period: lang === "en" ? "Apr 2025 - Present" : "Abr 2025 - Presente",
      duration: lang === "en" ? "Current" : "Actual",
      location: "Lima, Peru",
      achievements: [
        lang === "en"
          ? "Automation development with UnifyApps for notifications in 12 countries."
          : "Desarrollo de automatizaciones con UnifyApps para notificaciones en 12 países.",
        lang === "en"
          ? "Creation and maintenance of Store Procedures for data optimization."
          : "Creación y mantenimiento de Store Procedures para optimización de datos.",
        lang === "en"
          ? "Frontend development for uneteabelcorp.com with React and GraphQL."
          : "Desarrollo frontend para uneteabelcorp.com con React y GraphQL.",
        lang === "en"
          ? "Support and maintenance for SoporteBelcorp platform in .NET Framework."
          : "Soporte y mantenimiento para la plataforma SoporteBelcorp en .NET Framework.",
      ],
      technologies: [
        "UnifyApps",
        "React",
        "GraphQL",
        ".NET Framework",
        "SQL Server",
      ],
    },
  ];

  const technicalSkills = dict.experience?.skills ? {
    [dict.experience.skills.frontend.title]: {
      icon: <Code className="w-5 h-5" />,
      skills: dict.experience.skills.frontend.skills,
      color: "blue",
    },
    [dict.experience.skills.backend.title]: {
      icon: <Database className="w-5 h-5" />,
      skills: dict.experience.skills.backend.skills,
      color: "green",
    },
    [dict.experience.skills.devops.title]: {
      icon: <Cloud className="w-5 h-5" />,
      skills: dict.experience.skills.devops.skills,
      color: "purple",
    },
    [dict.experience.skills.special.title]: {
      icon: <Wrench className="w-5 h-5" />,
      skills: dict.experience.skills.special.skills,
      color: "orange",
    },
  } : {
    [lang === "en" ? "Frontend" : "Frontend"]: {
      icon: <Code className="w-5 h-5" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "React-Leaflet",
        "Ant Design",
      ],
      color: "blue",
    },
    [lang === "en" ? "Backend" : "Backend"]: {
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "Python", "Django", ".NET Core", "Express.js", "Bun"],
      color: "green",
    },
    [lang === "en" ? "Cloud & DevOps" : "Cloud & DevOps"]: {
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS Lambda", "AWS Amplify", "Docker", "Vercel", "Firebase"],
      color: "purple",
    },
    [lang === "en" ? "Tools" : "Herramientas"]: {
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Jest", "Vite", "Webpack", "Formik", "Zustand"],
      color: "orange",
    },
  };

  const achievements = dict.experience?.achievements?.list ? 
    dict.experience.achievements.list.map(achievement => ({
      icon: getIconForAchievement(achievement.icon),
      title: achievement.title,
      description: achievement.description,
      color: getColorForIcon(achievement.icon),
    })) : 
    [
      {
        icon: <Trophy className="w-6 h-6" />,
        title: lang === "en" ? "1st Place ERPsim Game" : "1er Lugar ERPsim Game",
        description:
          lang === "en"
            ? "Iberoamerica 2020 - Virtual team leadership"
            : "Iberoamérica 2020 - Liderazgo de equipo virtual",
        color: "yellow",
      },
      {
        icon: <GraduationCap className="w-6 h-6" />,
        title:
          lang === "en"
            ? "Q2 Scientific Publication"
            : "Publicación Científica Q2",
        description:
          lang === "en"
            ? "Blockchain & FHIR HL7 - DOI: 10.3991/ijoe.v20i03.44507"
            : "Blockchain & FHIR HL7 - DOI: 10.3991/ijoe.v20i03.44507",
        color: "blue",
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: lang === "en" ? "CRA → Vite Migration" : "Migración CRA → Vite",
        description:
          lang === "en"
            ? "60% improvement in build and development time"
            : "Mejora del 60% en tiempo de build y desarrollo",
        color: "green",
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title:
          lang === "en" ? "Geospatial Solutions" : "Soluciones Geoespaciales",
        description:
          lang === "en"
            ? "React-Leaflet + Geoserver with multiple layers"
            : "React-Leaflet + Geoserver con capas múltiples",
        color: "red",
      },
    ];

  function getIconForAchievement(iconName: string) {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-6 h-6" />;
      case "publication":
        return <GraduationCap className="w-6 h-6" />;
      case "migration":
        return <Zap className="w-6 h-6" />;
      case "modernization":
        return <MapPin className="w-6 h-6" />;
      default:
        return <CheckCircle className="w-6 h-6" />;
    }
  }

  function getColorForIcon(iconName: string) {
    switch (iconName) {
      case "trophy":
        return "yellow";
      case "publication":
        return "blue";
      case "migration":
        return "green";
      case "modernization":
        return "red";
      default:
        return "blue";
    }
  }

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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      orange:
        "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      yellow:
        "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
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
            {dict.projects?.experienceTitle ||
              (lang === "en" ? "Experience & " : "Experiencia & ")}
            <span className="text-blue-600 dark:text-blue-400">
              {dict.projects?.skillsTitle ||
                (lang === "en" ? "Skills" : "Habilidades")}
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            {dict.projects?.experienceDescription ||
              (lang === "en"
                ? "Over 4 years of experience developing innovative solutions, leading complex migrations, and implementing cutting-edge technologies."
                : "Más de 4 años de experiencia desarrollando soluciones innovadoras, liderando migraciones complejas y implementando tecnologías de vanguardia.")}
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-12"
          >
            <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {dict.experience?.title ||
                (lang === "en"
                  ? "Professional Experience"
                  : "Experiencia Profesional")}
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

                {/* Content */}
                <div className="ml-16 bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 dark:text-white">
                        {exp.position}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {exp.period} • {exp.duration}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start mb-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-slate-800 dark:text-white mb-8 text-center"
          >
            {dict.experience?.skills?.title ||
              (lang === "en" ? "Technical Skills" : "Habilidades Técnicas")}
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(technicalSkills).map(([category, data]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className={`p-6 rounded-xl border-2 ${getColorClasses(data.color)} transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  {data.icon}
                  <h4 className="font-bold ml-2">{category}</h4>
                </div>
                <div className="space-y-2">
                  {data.skills.map((skill) => (
                    <div key={skill} className="text-sm font-medium">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-8 justify-center"
          >
            <Award className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
              {dict.experience?.achievements?.title ||
                (lang === "en" ? "Achievements" : "Logros Destacados")}
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-6 rounded-xl border-2 ${getColorClasses(achievement.color)} text-center transition-all duration-300 hover:scale-105`}
              >
                <div className="flex justify-center mb-3">
                  {achievement.icon}
                </div>
                <h4 className="font-bold mb-2">{achievement.title}</h4>
                <p className="text-sm opacity-80">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
