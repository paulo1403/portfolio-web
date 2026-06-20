import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScrollReveal from "@/components/ScrollReveal";
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
    <main className="relative overflow-hidden">
      <Header dict={dict} lang={lang} />

      <section id="home" className="relative">
        <HeroSection dict={dict} lang={lang} />
      </section>

      <section id="about" className="ctp-section px-6 py-24 lg:px-8">
        <ScrollReveal>
          <AboutSection dict={dict} lang={lang} />
        </ScrollReveal>
      </section>

      <section id="projects" className="ctp-section px-6 py-24 lg:px-8">
        <ScrollReveal delay={100}>
          <ProjectsSection dict={dict} lang={lang} />
        </ScrollReveal>
      </section>

      <section id="experience" className="ctp-section px-6 py-24 lg:px-8">
        <ScrollReveal delay={200}>
          <ExperienceSection dict={dict} lang={lang} />
        </ScrollReveal>
      </section>

      <section id="contact" className="ctp-section px-6 py-24 lg:px-8">
        <ScrollReveal delay={300}>
          <ContactSection dict={dict} lang={lang} />
        </ScrollReveal>
      </section>

      <Footer lang={lang} />
    </main>
  );
}
