export default function Footer() {
  return (
    <footer
      className="py-4 mt-5"
      style={{
        background: "linear-gradient(135deg, #2d6a4f, #40916c)",
        color: "white",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
              &copy; {new Date().getFullYear()} Pauline Moraa. All rights
              reserved.
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-6 text-center text-md-end">
            <a
              href="mailto:pmoraa431@gmail.com"
              className="me-3"
              style={{ color: "#fff", fontSize: "1.5rem" }}
            >
              <i className="bi bi-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/pauline-moraa"
              className="text-white me-3"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/PollyM-tech"
              className="text-white"
              style={{ fontSize: "1.2rem" }}
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
