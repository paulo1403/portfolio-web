interface Props {
  dict: {
    contact: { title: string; form: { name: string; email: string; message: string; submit: string } };
  };
  lang: string;
}

export default function ContactSection({ dict, lang }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.contact.title}</h2>
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
              <a href="mailto:paulo@ollanos.dev" className="editorial-link">paulo@ollanos.dev</a>
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
  );
}
