export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer
      className="pt-5 pb-4 mt-5"
      style={{
        background: "linear-gradient(135deg, #2d6a4f, #40916c)",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Left Section */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Pauline Moraa</h5>
            <p className="mb-0" style={{ fontSize: "0.95rem", lineHeight: "1.7" }}>
              Innovate Daily
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center">
            <h5 className="fw-bold mb-3">Quick Links</h5>

            <p className="mb-2">
              <span
                className="footer-text-link"
                onClick={() => scrollToSection("home")}
              >
                Home
              </span>
            </p>

            <p className="mb-2">
              <span
                className="footer-text-link"
                onClick={() => scrollToSection("about")}
              >
                About
              </span>
            </p>

            <p className="mb-2">
              <span
                className="footer-text-link"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </span>
            </p>

            <p className="mb-2">
              <span
                className="footer-text-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </span>
            </p>
          </div>

         {/* Contact Section */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold mb-3">Contact</h5>

            <p className="mb-2">
              <i className="bi bi-telephone me-2"></i>
              <a
                href="tel:0714660729"
                style={{ color: "white", textDecoration: "none" }}
              >
                0714660729
              </a>
            </p>

            <p className="mb-3">
              <i className="bi bi-envelope me-2"></i>
              <a
                href="mailto:pmoraa431@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                pmoraa431@gmail.com
              </a>
            </p>

            <div>
              <a
                href="mailto:pmoraa431@gmail.com"
                className="me-3"
                style={{ color: "#fff", fontSize: "1.4rem" }}
                aria-label="Email Pauline Moraa"
              >
                <i className="bi bi-envelope"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/pauline-moraa/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
                style={{ color: "#fff", fontSize: "1.4rem" }}
                aria-label="LinkedIn profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://github.com/PollyM-tech"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", fontSize: "1.4rem" }}
                aria-label="GitHub profile"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.25)" }} />

        <div className="text-center">
          <p className="mb-0" style={{ fontSize: "0.9rem" }}>
            &copy; {currentYear} Pauline Moraa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}