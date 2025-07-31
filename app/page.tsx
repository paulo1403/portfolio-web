import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
