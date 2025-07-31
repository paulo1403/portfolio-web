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
  params: Promise<{ lang: "en" | "es" }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="relative">
      <Header dict={dict} lang={lang} />
      <section id="home">
        <HeroSection dict={dict} lang={lang} />
      </section>
      <section id="about">
        <AboutSection dict={dict} lang={lang} />
      </section>
      <section id="projects">
        <ProjectsSection dict={dict} lang={lang} />
      </section>
      <section id="experience">
        <ExperienceSection dict={dict} lang={lang} />
      </section>
      <section id="contact">
        <ContactSection dict={dict} lang={lang} />
      </section>
      <Footer lang={lang} />
    </main>
  );
}
