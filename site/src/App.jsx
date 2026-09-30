import { Backdrop } from "./components/Backdrop.jsx";
import { Contact } from "./components/Contact.jsx";
import { Hero } from "./components/Hero.jsx";
import { Nav } from "./components/Nav.jsx";
import { Skills } from "./components/Skills.jsx";
import { Work } from "./components/Work.jsx";
import { PageTransition } from "./effects.jsx";
import useSmoothScroll from "./hooks/useSmoothScroll.js";

export default function App() {
  useSmoothScroll();
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <Backdrop />
      <Nav />
      <PageTransition>
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </PageTransition>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© {year} Lovjyot Singh</span>
          <span>Delhi NCR</span>
        </div>
      </footer>
    </>
  );
}
