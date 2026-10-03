import { Backdrop } from "./components/Backdrop.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";
import { Journey } from "./components/Journey.jsx";
import { Nav } from "./components/Nav.jsx";
import { Skills, SkillsMarquee } from "./components/Skills.jsx";
import { Work } from "./components/Work.jsx";
import { PageTransition } from "./effects.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

export default function App() {
  useSmoothScroll();

  return (
    <>
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <Backdrop />
      <Nav />
      <PageTransition>
        <Hero />
        <SkillsMarquee />
        <Work />
        <Journey />
        <Skills />
        <Contact />
      </PageTransition>
      <Footer />
    </>
  );
}
