import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [resumeClicked, setResumeClicked] = useState(false); // Track click
  const location = useLocation();
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleResumeClick = (e) => {
    if (resumeClicked) {
      e.preventDefault();
      return;
    }
    setResumeClicked(true);
    //  10 seconds should be enough
    setTimeout(() => setResumeClicked(false), 10000);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={closeMenu}
          style={{ color: "#1a7a4f" }}
        >
          Pauline Moraa
        </Link>

        {/* Mobile button*/}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content for mobile */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
                onClick={closeMenu}
                style={{
                  color: location.pathname === "/" ? "#70e000" : "#2d6a4f",
                  fontWeight: location.pathname === "/" ? "600" : "500",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
                onClick={closeMenu}
                style={{
                  color: location.pathname === "/about" ? "#70e000" : "#2d6a4f",
                  fontWeight: location.pathname === "/about" ? "600" : "500",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${
                  location.pathname === "/projects" ? "active" : ""
                }`}
                to="/projects"
                onClick={closeMenu}
                style={{
                  color:
                    location.pathname === "/projects" ? "#70e000" : "#2d6a4f",
                  fontWeight: location.pathname === "/projects" ? "600" : "500",
                }}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-medium ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={closeMenu}
                style={{
                  color:
                    location.pathname === "/contact" ? "#70e000" : "#2d6a4f",
                  fontWeight: location.pathname === "/contact" ? "600" : "500",
                }}
              >
                Contact
              </Link>
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
