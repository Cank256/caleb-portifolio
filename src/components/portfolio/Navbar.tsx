import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`topnav${scrolled ? " scrolled" : ""}`} id="topnav">
        <div className="wrap nav-inner">
          <a href="#hero" className="brand" aria-label="Caleb Nkunze home">
            CN<span className="dot">.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#volunteering">Volunteering</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#contact" className="nav-cta desktop">
            Let&apos;s talk
          </a>
          <button
            className={`burger${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#volunteering" onClick={closeMenu}>Volunteering</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>
    </>
  );
}
