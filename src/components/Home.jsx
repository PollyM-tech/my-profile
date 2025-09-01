import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ paddingTop: "76px" }}>
      {/* Hero Section */}
      <section
        className="py-5"
        style={{
          minHeight: "calc(100vh - 76px)",
          background:
            "linear-gradient(135deg, rgba(216, 243, 220, 0.3) 0%, rgba(255, 255, 255, 1) 100%)",
        }}
      >
        <div className="container h-100">
          <div className="row align-items-center h-100">
            {/* Text Content */}
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="text-center text-lg-start">
                <h1 className="display-4 fw-bold mb-4">
                  Hi, I'm{" "}
                  <span style={{ color: "#2d6a4f" }}>Pauline Moraa</span>
                </h1>
                <p className="lead mb-4" style={{ color: "#245c43" }}>
                  Full Stack Developer | Creative Problem Solver
                </p>
                <p className="mb-5 fs-5">
                  I build functional and elegant web solutions using modern
                  technologies. Welcome to my professional portfolio where
                  creativity meets code.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <Link
                    to="/projects"
                    className="btn btn-lg px-4 py-3"
                    style={{
                      background: "#2d6a4f",
                      borderColor: "#2d6a4f",
                      color: "white",
                      borderRadius: "8px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = "#245c43";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "#2d6a4f";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="bi bi-code-square me-2"></i>
                    View My Work
                  </Link>

                  <Link
                    to="/contact"
                    className="btn btn-lg px-4 py-3"
                    style={{
                      borderColor: "#2d6a4f",
                      color: "#2d6a4f",
                      backgroundColor: "transparent",
                      borderRadius: "8px",
                      fontWeight: "600",
                      borderWidth: "2px",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2d6a4f";
                      e.target.style.color = "white";
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#2d6a4f";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <i className="bi bi-person-lines-fill me-2"></i>
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-6 order-lg-2 order-1 text-center mb-4 mb-lg-0">
              <div className="position-relative">
                <img
                  src="https://placehold.co/400x400/2d6a4f/white?text=PM"
                  alt="Pauline Moraa"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    maxWidth: "350px",
                    width: "100%",
                    border: "5px solid white",
                    boxShadow: "0 15px 30px rgba(45, 106, 79, 0.2)",
                  }}
                />
                {/* Floating elements for visual interest */}
                <div
                  className="position-absolute"
                  style={{
                    top: "20%",
                    left: "-10%",
                    width: "60px",
                    height: "60px",
                    background: "linear-gradient(135deg, #70e000, #ccff33)",
                    borderRadius: "50%",
                    opacity: "0.8",
                    animation: "float 6s ease-in-out infinite",
                  }}
                ></div>
                <div
                  className="position-absolute"
                  style={{
                    bottom: "15%",
                    right: "-5%",
                    width: "40px",
                    height: "40px",
                    background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                    borderRadius: "50%",
                    opacity: "0.7",
                    animation: "float 6s ease-in-out infinite reverse",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="p-4">
                <div
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #2d6a4f, #70e000)",
                    color: "white",
                  }}
                >
                  <i className="bi bi-code-slash fs-2"></i>
                </div>
                <h4 style={{ color: "#2d6a4f" }}>5+</h4>
                <p className="text-muted">Projects Completed</p>
              </div>
            </div>
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="p-4">
                <div
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #2d6a4f, #70e000)",
                    color: "white",
                  }}
                >
                  <i className="bi bi-stack fs-2"></i>
                </div>
                <h4 style={{ color: "#2d6a4f" }}>Full Stack</h4>
                <p className="text-muted">Development</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <div
                  className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                  style={{
                    width: "80px",
                    height: "80px",
                    background: "linear-gradient(135deg, #2d6a4f, #70e000)",
                    color: "white",
                  }}
                >
                  <i className="bi bi-lightbulb fs-2"></i>
                </div>
                <h4 style={{ color: "#2d6a4f" }}>Creative</h4>
                <p className="text-muted">Problem Solving</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.2rem !important;
          }
          .lead {
            font-size: 1.1rem !important;
          }
        }

        @media (max-width: 576px) {
          .btn-lg {
            font-size: 1rem !important;
            padding: 0.75rem 2rem !important;
          }
        }
      `}</style>
    </div>
  );
}
