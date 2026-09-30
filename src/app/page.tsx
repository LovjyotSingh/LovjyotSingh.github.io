import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { NoiseTexture } from "@/components/ui/NoiseTexture";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <ParticleBackground particleCount={48} connectionDistance={150} />
        <NoiseTexture opacity={0.035} />
      </div>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
