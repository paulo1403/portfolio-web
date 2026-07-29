interface Props {
  lang: string;
  dict: Record<string, unknown>;
}

export default function Footer({ lang }: Props) {
  return (
    <footer className="px-6 lg:px-8 pb-8 pt-16">
      <div className="mx-auto max-w-4xl">
        <hr className="section-rule" />
        <div className="flex items-center justify-between text-xs text-[var(--text-soft)]">
          <p>© {new Date().getFullYear()} Paulo Llanos</p>
          <p className="hidden sm:block tracking-wider uppercase">
            {lang === "es" ? "Hecho a mano" : "Handmade"}
          </p>
        </div>
      </div>
    </footer>
  );
}
