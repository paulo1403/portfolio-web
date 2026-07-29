interface Props {
  dict: {
    about: {
      title: string;
      subtitle: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
      paragraph4: string;
      highlightTitle: string;
      highlightDesc: string;
      technologies: string[];
    };
  };
  lang: string;
}

export default function AboutSection({ dict }: Props) {
  return (
    <div className="mx-auto max-w-4xl">
      <hr className="section-rule" />
      <div className="magazine-grid">
        <div>
          <h2 className="display">{dict.about.title}</h2>
          <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-soft)] mt-2">
            {dict.about.subtitle}
          </p>
        </div>
        <div>
          <p className="drop-cap text-[var(--text)] leading-relaxed">
            {dict.about.paragraph1}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph2}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph3}
          </p>
          <p className="text-[var(--text-soft)] leading-relaxed mt-4">
            {dict.about.paragraph4}
          </p>
          {dict.about.highlightTitle && (
            <div className="mt-6 pt-6 border-t border-[var(--rule)]">
              <p className="display text-xl text-[var(--accent)]">{dict.about.highlightTitle}</p>
              <p className="text-sm text-[var(--text-soft)] mt-1">{dict.about.highlightDesc}</p>
            </div>
          )}
          {dict.about.technologies?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-6">
              {dict.about.technologies.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
