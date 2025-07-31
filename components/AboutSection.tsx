"use client";

import { motion } from "framer-motion";
import { Code, Zap, Users, Award } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "4+ Años de Experiencia",
      description: "Frontend y Backend Development"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Tecnologías Modernas",
      description: "React, Next.js, Node.js, Python"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Liderazgo Técnico",
      description: "Migraciones complejas y optimización"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Publicación Q2",
      description: "Investigación en Blockchain & FHIR HL7"
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
            Sobre <span className="text-blue-600 dark:text-blue-400">Mí</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4">
              Desarrollador de Software Full Stack
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Desarrollador de Software altamente capacitado con más de <strong>4 años de experiencia</strong> en
              desarrollo frontend y backend, especializado en la creación de aplicaciones web interactivas
              y escalables.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Experto en tecnologías de vanguardia como <strong>React, Next.js, Node.js y Python</strong>,
              con un historial comprobado en la construcción de API robustas y la implementación de
              soluciones eficientes de gestión de estados.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Apasionado por aprender y aplicar tecnologías emergentes para impulsar el éxito empresarial,
              con un compromiso con la <strong>colaboración y la excelencia</strong>.
            </p>

            <motion.div
              className="flex flex-wrap gap-3 mt-6"
              variants={containerVariants}
            >
              {["React", "Next.js", "Node.js", "Python", "TypeScript", "AWS"].map((tech) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-slate-800 dark:text-white text-sm">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievement Highlight */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white"
        >
          <h4 className="text-2xl font-bold mb-4">Logro Destacado</h4>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Mi investigación en <strong>Blockchain y FHIR HL7</strong> para la interoperabilidad de registros
            médicos electrónicos fue publicada en una revista internacional Q2, demostrando mi capacidad
            para combinar tecnología e innovación en soluciones de impacto real.
          </p>
          <div className="flex justify-center mt-6">
            <span className="px-6 py-2 bg-white/20 rounded-full text-sm font-medium">
              DOI: 10.3991/ijoe.v20i03.44507
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
