import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { getDictionary } from "../dictionaries";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = rawLang === "es" ? "es" : "en";
  const dict = await getDictionary(lang);

  return (
    <main className="relative overflow-hidden pb-10">
      <Header dict={dict} lang={lang} />
      <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_top,rgb(255_247_231/0.92),transparent_68%)]" />
      <section id="home" className="section-shell">
        <HeroSection dict={dict} lang={lang} />
      </section>
      <section id="about" className="section-shell section-shell--soft px-4 lg:px-6">
        <div className="section-frame mx-auto max-w-7xl">
          <AboutSection dict={dict} lang={lang} />
        </div>
      </section>
      <section id="projects" className="section-shell section-shell--warm px-4 lg:px-6">
        <div className="section-frame mx-auto max-w-7xl">
          <ProjectsSection dict={dict} lang={lang} />
        </div>
      </section>
      <section id="experience" className="section-shell px-4 lg:px-6">
        <div className="section-frame mx-auto max-w-7xl">
          <ExperienceSection dict={dict} lang={lang} />
        </div>
      </section>
      <section id="contact" className="section-shell section-shell--soft px-4 lg:px-6">
        <div className="section-frame mx-auto max-w-7xl">
          <ContactSection dict={dict} lang={lang} />
        </div>
      </section>
      <Footer lang={lang} />
    </main>
  );
}
