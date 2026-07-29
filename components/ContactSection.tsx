"use client";

import { useEffect, useRef, useState } from "react";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="transition-all duration-700 ease-out"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transitionDelay: `${delay}ms` }}
    >{children}</div>
  );
}

interface Props {
  dict: {
    contact: { title: string; form: { name: string; email: string; message: string; submit: string } };
  };
  lang: string;
}

export default function ContactSection({ dict, lang }: Props) {
  return (
    <FadeIn>
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.contact.title}</h2>
          <p className="text-[5rem] sm:text-[8rem] display leading-none text-[var(--rule)]/30 select-none mt-[-1.5rem]">04</p>
        </div>
        <div>
          <p className="text-sm text-[var(--text-soft)] leading-relaxed mb-6">
            {lang === "es"
              ? "Estoy abierto a oportunidades freelance, colaboraciones o simplemente una conversación interesante."
              : "Open to freelance opportunities, collaborations, or just an interesting conversation."}
          </p>
          <div className="space-y-3 text-sm">
            <p>
              <span className="text-[var(--text-soft)] text-xs uppercase tracking-wider">Email</span><br />
              <a href="mailto:paulollanosc@gmail.com" className="editorial-link">paulollanosc@gmail.com</a>
            </p>
            <p>
              <span className="text-[var(--text-soft)] text-xs uppercase tracking-wider">GitHub</span><br />
              <a href="https://github.com/paulo1403" target="_blank" rel="noopener noreferrer" className="editorial-link">github.com/paulo1403</a>
            </p>
            <p>
              <span className="text-[var(--text-soft)] text-xs uppercase tracking-wider">LinkedIn</span><br />
              <a href="https://linkedin.com/in/paulloanos" target="_blank" rel="noopener noreferrer" className="editorial-link">linkedin.com/in/paulloanos</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </FadeIn>
  );
}
