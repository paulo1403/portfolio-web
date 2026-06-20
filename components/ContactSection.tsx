"use client";

import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, Download } from "lucide-react";

interface ContactSectionProps {
  dict: { contact: { title: string; form: { name: string; email: string; message: string; submit: string } } };
  lang: string;
}

export default function ContactSection({ dict, lang }: ContactSectionProps) {
  const { title, form } = dict.contact;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) { setStatus("success"); setFormData({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground sm:text-5xl">{title}</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="ctp-card p-8 space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">{form.name}</label>
              <input
                type="text" id="name" name="name" required
                value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-full border border-border/50 bg-secondary/30 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder={lang === "es" ? "Tu nombre" : "Your name"}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">{form.email}</label>
              <input
                type="email" id="email" name="email" required
                value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-full border border-border/50 bg-secondary/30 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                placeholder={lang === "es" ? "tu@email.com" : "you@email.com"}
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">{form.message}</label>
            <textarea
              id="message" name="message" required rows={5}
              value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border border-border/50 bg-secondary/30 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              placeholder={lang === "es" ? "Cuéntame en qué estás trabajando..." : "Tell me what you're working on..."}
            />
          </div>
          <button type="submit" disabled={status === "success"} className="ctp-btn ctp-btn--primary w-full group">
            {status === "success"
              ? lang === "es" ? "¡Enviado!" : "Sent!"
              : <><Send className="h-4 w-4" /> {form.submit}</>
            }
          </button>
          {status === "success" && <p className="text-center text-green text-sm font-medium">{lang === "es" ? "¡Mensaje enviado! Te responderé pronto." : "Message sent! I'll get back to you soon."}</p>}
          {status === "error" && <p className="text-center text-red text-sm font-medium">{lang === "es" ? "Error. Intenta de nuevo o escríbeme directo." : "Failed to send. Try again or email me directly."}</p>}
        </form>

        <div className="space-y-6">
          <div className="ctp-card p-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">{lang === "es" ? "Hablemos" : "Let's talk"}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {lang === "es" ? "¿Tienes un proyecto en mente? ¿Buscas a alguien para tu equipo? Escríbeme." : "Have a project in mind? Looking for someone for your team? Drop me a line."}
            </p>
            <div className="space-y-3">
              {[
                { icon: Mail, label: lang === "es" ? "Correo" : "Email", value: "paulollanosc@gmail.com", href: "mailto:paulollanosc@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/paulo1403", href: "https://github.com/paulo1403" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/paulollanoscolchado", href: "https://linkedin.com/in/paulollanoscolchado" },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-full border border-border/50 bg-secondary/20 px-4 py-3 text-sm hover:border-primary/30 hover:bg-secondary/40 transition-all">
                  <item.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item.value}</span>
                </a>
              ))}
              <div className="flex items-center gap-4 rounded-full border border-border/50 bg-secondary/20 px-4 py-3 text-sm">
                <MapPin className="h-4 w-4 text-red flex-shrink-0" />
                <span className="font-medium text-foreground">Lima, Perú</span>
              </div>
            </div>
          </div>
          <div className="ctp-card p-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">{lang === "es" ? "O descarga mi CV" : "Or download my CV"}</p>
            <a href={lang === "es" ? "/cv-es.pdf" : "/cv-en.pdf"} download className="ctp-btn ctp-btn--ghost">
              <Download className="h-4 w-4" /> {lang === "es" ? "Descargar CV" : "Download CV"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
