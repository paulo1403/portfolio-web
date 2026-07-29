import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
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
    <main>
      <Header dict={dict} lang={lang} />
      <HeroSection dict={dict} lang={lang} />
      <section id="about" className="px-6 lg:px-8 pb-16">
        <AboutSection dict={dict} lang={lang} />
      </section>
      <section id="projects" className="px-6 lg:px-8 pb-16">
        <ProjectsSection dict={dict} lang={lang} />
      </section>
      <section id="experience" className="px-6 lg:px-8 pb-16">
        <ExperienceSection dict={dict} lang={lang} />
      </section>
      <section id="contact" className="px-6 lg:px-8 pb-16">
        <ContactSection dict={dict} lang={lang} />
      </section>
      <Footer lang={lang} dict={dict} />
    </main>
  );
}
