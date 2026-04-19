"use client";

import emailjs from "@emailjs/browser";
import {
  AlertCircle,
  CheckCircle,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { useState } from "react";

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
  const isSpanish = lang === "es";
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
      icon: <Mail className="h-5 w-5" />,
      label: isSpanish ? "Correo" : "Email",
      value: "paulollanosc@gmail.com",
      href: "mailto:paulollanosc@gmail.com",
      colorClass: "bg-primary/10 text-primary",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: lang === "es" ? "Ubicacion" : "Location",
      value: "Lima, Peru",
      href: null,
      colorClass: "bg-accent/10 text-accent",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/paulollanoscolchado",
      colorClass: "bg-primary/10 text-primary",
      user: "paulollanoscolchado",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/paulo1403",
      colorClass: "bg-card text-card-foreground",
      user: "paulo1403",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="eyebrow mb-4">
            {isSpanish ? "Contacto" : "Get in touch"}
          </p>
          <h2 className="text-4xl text-foreground md:text-5xl">
            {dict.contact.title}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="retro-panel p-7 sm:p-8">
            <h3 className="text-2xl font-extrabold text-foreground">
              {isSpanish ? "Canales directos" : "Direct channels"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-surface-foreground">
              {isSpanish
                ? "Escríbeme por correo o por redes. Respondo rápido con contexto claro."
                : "Reach out by email or social. Fast response with clear context."}
            </p>

            <div className="mt-6 space-y-3">
              {contactInfo.map((info, index) => {
                const Container = info.href ? "a" : "div";

                return (
                  <Container
                    key={index}
                    {...(info.href
                      ? {
                          href: info.href,
                        }
                      : {})}
                    className="flex items-center gap-4 rounded-2xl border border-primary/14 bg-background/72 p-4"
                  >
                    <div className={`rounded-xl p-3 ${info.colorClass}`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="mt-1 text-sm font-bold text-foreground">
                        {info.value}
                      </p>
                    </div>
                  </Container>
                );
              })}
            </div>

            <div className="mt-6 grid gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-primary/14 bg-background/72 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-xl p-2.5 ${social.colorClass}`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {social.label}
                      </p>
                      <p className="text-xs text-surface-foreground">
                        {social.user}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Open
                  </span>
                </a>
              ))}
            </div>
          </aside>

          <div className="retro-panel p-7 sm:p-8">
            <div className="mb-6">
              <p className="eyebrow mb-3">
                {isSpanish ? "Formulario" : "Form"}
              </p>
              <h3 className="text-2xl font-extrabold text-foreground">
                {isSpanish
                  ? "Cuéntame qué necesitas."
                  : "Tell me what you need."}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-surface-foreground"
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
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder={dict.contact.form.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-surface-foreground"
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
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder={dict.contact.form.email}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-surface-foreground"
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
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={
                    lang === "es" ? "¿En qué te ayudo?" : "How can I help?"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-surface-foreground"
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
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={dict.contact.form.message}
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center rounded-2xl bg-green-100 p-3 text-green-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  <span>
                    {lang === "es"
                      ? "Mensaje enviado. Te respondo pronto."
                      : "Message sent successfully. I will get back to you soon."}
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center rounded-2xl bg-red-100 p-3 text-red-700">
                  <AlertCircle className="mr-2 h-5 w-5" />
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
                className="flex w-full items-center justify-center rounded-full bg-gradient-primary px-6 py-3.5 font-bold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>{lang === "es" ? "Enviando..." : "Sending..."}</>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {dict.contact.form.submit}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
