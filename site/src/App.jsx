import { Contact } from "./components/Contact.jsx";
import { Hero } from "./components/Hero.jsx";
import { Nav } from "./components/Nav.jsx";
import { Skills } from "./components/Skills.jsx";
import { Work } from "./components/Work.jsx";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <span>© {year} Lovjyot Singh</span>
          <span>Delhi NCR</span>
        </div>
      </footer>
    </>
  );
}
