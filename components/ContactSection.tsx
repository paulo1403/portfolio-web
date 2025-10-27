"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ContactDictionary {
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

interface ContactSectionProps {
  dict: ContactDictionary;
  lang: string;
}

export default function ContactSection({ dict, lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: dict.contact.form.email,
      value: "paulollanosc@gmail.com",
      href: "mailto:paulollanosc@gmail.com",
      color: "blue",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: lang === "es" ? "Ubicación" : "Location",
      value: "Lima, Perú",
      href: null,
      color: "red",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/paulollanoscolchado",
      color: "blue",
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/paulo1403",
      color: "gray",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      // Resetear formulario en caso de éxito
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Reset status después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50",
      red: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50",
      gray: "bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-900/50",
    };
    return colors[color as keyof typeof colors] || colors.blue;
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
            {dict.contact.title}
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"
          />
          {/* Puedes agregar una descripción traducida aquí si la agregas al diccionario */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 shadow-lg"
          >
            {/* Título eliminado para evitar duplicado */}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {dict.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-300"
                    placeholder={dict.contact.form.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {dict.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-300"
                    placeholder={dict.contact.form.email}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  {lang === "es" ? "Asunto" : "Subject"} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-300"
                  placeholder={
                    lang === "es"
                      ? "¿En qué puedo ayudarte?"
                      : "How can I help you?"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                >
                  {dict.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-slate-600 border border-slate-200 dark:border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-300 resize-none"
                  placeholder={dict.contact.form.message}
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>
                    {lang === "es"
                      ? "¡Mensaje enviado exitosamente! Te responderé pronto."
                      : "Message sent successfully! I'll get back to you soon."}
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  <span>
                    {lang === "es"
                      ? "Error al enviar el mensaje. Por favor, intenta de nuevo."
                      : "Error sending the message. Please try again."}
                  </span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                    {lang === "es" ? "Enviando..." : "Sending..."}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {dict.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                {lang === "es"
                  ? "Información de Contacto"
                  : "Contact Information"}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center p-4 rounded-lg transition-all duration-300 ${
                      info.href ? "cursor-pointer hover:scale-105" : ""
                    } ${getColorClasses(info.color)}`}
                    onClick={() => info.href && window.open(info.href, "_self")}
                  >
                    <div className="mr-4">{info.icon}</div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm opacity-80">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                {lang === "es"
                  ? "Sígueme en Redes"
                  : "Follow me on Social Media"}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className={`flex items-center p-4 rounded-lg transition-all duration-300 hover:scale-105 ${getColorClasses(social.color)}`}
                  >
                    <div className="mr-4">{social.icon}</div>
                    <div>
                      <p className="font-medium">{social.label}</p>
                      <p className="text-sm opacity-80">
                        {social.label === "LinkedIn" && "paulollanoscolchado"}
                        {social.label === "GitHub" && "paulo1403"}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Response Note */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-2">
                {lang === "es" ? "Respuesta Rápida ⚡" : "Quick Response ⚡"}
              </h4>
              <p className="opacity-90">
                {lang === "es"
                  ? "Normalmente respondo en menos de 24 horas. Para consultas urgentes, por favor escríbeme por correo."
                  : "I usually reply in less than 24 hours. For urgent inquiries, please email me."}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
