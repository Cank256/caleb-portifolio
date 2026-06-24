import "../portfolio.css";

import { Navbar } from "./portfolio/Navbar";
import { Hero } from "./portfolio/Hero";
import { About } from "./portfolio/About";
import { Experience } from "./portfolio/Experience";
import { Projects } from "./portfolio/Projects";
import { Volunteering } from "./portfolio/Volunteering";
import { Contact } from "./portfolio/Contact";
import { Footer } from "./portfolio/Footer";
import { Cursor } from "./portfolio/Cursor";
import { SectionDivider } from "./portfolio/SectionDivider";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioPage() {
  useScrollReveal();

  return (
    <div className="portfolio-root">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Volunteering />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
