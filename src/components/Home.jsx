import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-section py-5" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="home-content">
              <h1 className="display-4 fw-bold mb-4">
                Hi, I'm <span style={{ color: "#2d6a4f" }}>Pauline Moraa</span>
              </h1>
              <p className="lead mb-4" style={{ color: "#245c43" }}>
                Full Stack Developer | Creative Problem Solver
              </p>
              <p className="mb-5">
                I build functional and elegant web solutions using modern
                technologies. Welcome to my professional portfolio.
              </p>
              <div className="d-flex gap-3">
                <Link
                  to="/projects"
                  className="btn btn-primary btn-lg px-4 py-2"
                  style={{
                    background: "#2d6a4f",
                    borderColor: "#2d6a4f",
                    borderRadius: "8px",
                  }}
                >
                  View My Work
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline-dark btn-lg px-4 py-2"
                  style={{
                    borderColor: "#2d6a4f",
                    color: "#2d6a4f",
                    borderRadius: "8px",
                  }}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
