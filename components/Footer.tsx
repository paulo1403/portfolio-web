"use client";

import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/paulo1403",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/paulollanoscolchado",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:paulollanosc@gmail.com",
      label: "Email"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/51999195557",
      label: "WhatsApp"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Main content */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Paulo Llanos</h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Desarrollador Full Stack especializado en crear experiencias web
              excepcionales y soluciones innovadoras.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-800 dark:bg-slate-900 rounded-full hover:bg-blue-600 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  whileHover={{ y: -2 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            variants={itemVariants}
            className="border-t border-slate-700 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
              <p className="mb-4 md:mb-0">
                © {new Date().getFullYear()} Paulo Llanos. Todos los derechos reservados.
              </p>
              <p className="flex items-center">
                Hecho con <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> desde Lima, Perú
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
