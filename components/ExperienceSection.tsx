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
  CheckCircle
} from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Rimac Seguros",
      position: "Especialista Frontend",
      period: "Nov 2023 - Presente",
      duration: "1+ año",
      achievements: [
        "Lideré migración de Redux a Zustand mejorando rendimiento",
        "Implementé soluciones geoespaciales con React-Leaflet y Geoserver",
        "Actualicé Node.js (14→18) y Ant Design (v3→v5)",
        "Desarrollé componentes modulares y hooks personalizados"
      ],
      technologies: ["React", "TypeScript", "Zustand", "React-Leaflet", "Ant Design"]
    },
    {
      company: "CRD",
      position: "Desarrollador de Software",
      period: "Ago 2022 - Nov 2023",
      duration: "1 año 3 meses",
      achievements: [
        "Migración compleja de Create React App a Vite mejorando build time 60%",
        "Implementé API serverless en AWS Lambda con autenticación segura",
        "Desarrollé plataforma de mapeo con características completas",
        "Mejoré validación de datos con Yup, Formik y JOI"
      ],
      technologies: ["React", "Vite", "AWS Lambda", "AWS Amplify", "MongoDB"]
    },
    {
      company: "Fractal",
      position: "Desarrollador Full Stack",
      period: "Abr 2022 - Ago 2022",
      duration: "4 meses",
      achievements: [
        "Diseñé API escalables con .NET Core y integración AJAX",
        "Implementé comunicación en tiempo real con Slack API y WebSockets",
        "Desarrollé vistas dinámicas con tecnología Razor",
        "Colaboré en equipo multidisciplinario para soluciones de alta calidad"
      ],
      technologies: [".NET Core", "C#", "Razor", "WebSockets", "Slack API"]
    },
    {
      company: "Transforma Digital Perú",
      position: "Desarrollador Backend y Frontend",
      period: "Jul 2021 - Mar 2022",
      duration: "8 meses",
      achievements: [
        "Lideré desarrollo de 'Lucy', sistema web robusto con Django",
        "Diseñé sitio personalizado para Unicon con WordPress y PHP",
        "Pionero en sistemas de comunicación en tiempo real con WebSockets",
        "Fortalecí colaboración del equipo garantizando entregas de calidad"
      ],
      technologies: ["Django", "Python", "WordPress", "PHP", "WebSockets"]
    }
  ];

  const technicalSkills = {
    "Frontend": {
      icon: <Code className="w-5 h-5" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React-Leaflet", "Ant Design"],
      color: "blue"
    },
    "Backend": {
      icon: <Database className="w-5 h-5" />,
      skills: ["Node.js", "Python", "Django", ".NET Core", "Express.js", "Bun"],
      color: "green"
    },
    "Cloud & DevOps": {
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS Lambda", "AWS Amplify", "Docker", "Vercel", "Firebase"],
      color: "purple"
    },
    "Herramientas": {
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "Jest", "Vite", "Webpack", "Formik", "Zustand"],
      color: "orange"
    }
  };

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "1er Lugar ERPsim Game",
      description: "Iberoamérica 2020 - Liderazgo de equipo virtual",
      color: "yellow"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Publicación Científica Q2",
      description: "Blockchain & FHIR HL7 - DOI: 10.3991/ijoe.v20i03.44507",
      color: "blue"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Migración CRA → Vite",
      description: "Mejora del 60% en tiempo de build y desarrollo",
      color: "green"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Soluciones Geoespaciales",
      description: "React-Leaflet + Geoserver con capas múltiples",
      color: "red"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      green: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 border-red-200 dark:border-red-800"
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
            Experiencia & <span className="text-blue-600 dark:text-blue-400">Habilidades</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Más de 4 años de experiencia desarrollando soluciones innovadoras,
            liderando migraciones complejas y implementando tecnologías de vanguardia.
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
              Experiencia Profesional
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
                      <span className="text-sm">{exp.period} • {exp.duration}</span>
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
            Habilidades Técnicas
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
              Logros Destacados
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
