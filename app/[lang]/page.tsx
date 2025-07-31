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
  params: { lang: "en" | "es" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <main className="relative">
      <Header dict={dict} lang={params.lang} />
      <section id="home">
        <HeroSection dict={dict} lang={params.lang} />
      </section>
      <section id="about">
        <AboutSection dict={dict} lang={params.lang} />
      </section>
      <section id="projects">
        <ProjectsSection dict={dict} lang={params.lang} />
      </section>
      <section id="experience">
        <ExperienceSection dict={dict} lang={params.lang} />
      </section>
      <section id="contact">
        <ContactSection dict={dict} lang={params.lang} />
      </section>
      <Footer lang={params.lang} />
    </main>
  );
}
