import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [resumeClicked, setResumeClicked] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleResumeClick = (e) => {
    if (resumeClicked) {
      e.preventDefault();
      return;
    }

    setResumeClicked(true);
    closeMenu();

    setTimeout(() => setResumeClicked(false), 10000);
  };

  const navLinkStyle = (sectionId) => ({
    color: activeSection === sectionId ? "#70e000" : "#2d6a4f",
    fontWeight: activeSection === sectionId ? "600" : "500",
    cursor: "pointer",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <button
          className="navbar-brand fw-bold border-0 bg-transparent"
          onClick={() => scrollToSection("home")}
          style={{ color: "#1a7a4f" }}
        >
          Pauline Moraa
        </button>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button
                className={`nav-link fw-medium border-0 bg-transparent ${
                  activeSection === "home" ? "active" : ""
                }`}
                onClick={() => scrollToSection("home")}
                style={navLinkStyle("home")}
              >
                Home
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link fw-medium border-0 bg-transparent ${
                  activeSection === "about" ? "active" : ""
                }`}
                onClick={() => scrollToSection("about")}
                style={navLinkStyle("about")}
              >
                About
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link fw-medium border-0 bg-transparent ${
                  activeSection === "projects" ? "active" : ""
                }`}
                onClick={() => scrollToSection("projects")}
                style={navLinkStyle("projects")}
              >
                Projects
              </button>
            </li>

            <li className="nav-item">
              <button
                className={`nav-link fw-medium border-0 bg-transparent ${
                  activeSection === "contact" ? "active" : ""
                }`}
                onClick={() => scrollToSection("contact")}
                style={navLinkStyle("contact")}
              >
                Contact
              </button>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link fw-medium ${
                  resumeClicked ? "disabled" : ""
                }`}
                href="/Pauline_Moraa_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                style={{
                  color: resumeClicked ? "gray" : "#70e000",
                  pointerEvents: resumeClicked ? "none" : "auto",
                  cursor: resumeClicked ? "not-allowed" : "pointer",
                  fontWeight: "600",
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}