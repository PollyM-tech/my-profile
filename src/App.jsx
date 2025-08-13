import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark py-3 shadow sticky-top"
        style={{ background: "#2d6a4f" }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            style={{ color: "#ccff33" }}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            Pauline Moraa
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                  style={{ color: "#70e000" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: "#70e000" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/projects"
                  style={{ color: "#70e000" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  style={{ color: "#70e000" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={`${import.meta.env.BASE_URL}Pauline_Moraa_Resume.pdf`} // ✅ Correct path with Vite base
                  download
                  style={{ color: "#70e000" }}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container flex-grow-1 py-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer
        className="py-4"
        style={{ background: "#2d6a4f", color: "#70e000" }}
      >
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Pauline Moraa. All rights
            reserved.
          </p>
          <div className="mt-2">
            <a
              href="https://github.com/PollyM-tech"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#70e000" }}
            >
              <i className="bi bi-github fs-4"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pauline-moraa"
              className="mx-2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#70e000" }}
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;