import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        <a
          href="#home"
          className="logo"
          onClick={() => handleNavClick("home")}
        >
          <span>S</span>OHAIL
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);

            return (
              <a
                key={item.name}
                href={item.href}
                className={
                  activeSection === sectionId
                    ? "active-nav"
                    : ""
                }
                onClick={() => handleNavClick(sectionId)}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${
            menuOpen ? "menu-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${menuOpen ? "show" : ""}`}>
        {navItems.map((item) => {
          const sectionId = item.href.substring(1);

          return (
            <a
              key={item.name}
              href={item.href}
              className={
                activeSection === sectionId
                  ? "active-mobile-nav"
                  : ""
              }
              onClick={() => handleNavClick(sectionId)}
            >
              {item.name}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;