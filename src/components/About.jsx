export default function About() {
  return (
    <section className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-success">About Me</h1>
        <div
          className="underline mx-auto mb-3"
          style={{
            width: "80px",
            height: "4px",
            borderRadius: "2px",
            background: "#70e000",
          }}
        ></div>
        <p className="lead text-success">
          Passionate software engineer crafting digital solutions
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="card shadow-sm border-0"
            style={{ background: "rgba(216, 243, 220, 0.5)" }}
          >
            <div className="card-body p-5">
              <div className="row align-items-center">
                {/* Profile Section */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div
                    className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "linear-gradient(135deg, #2d6a4f, #70e000)",
                      color: "white",
                    }}
                  >
                    <i
                      className="bi bi-person fs-1"
                      aria-label="Profile Icon"
                    ></i>
                  </div>
                  <h4 className="text-success">Pauline Moraa</h4>
                  <p className="text-success">Full Stack Developer</p>
                </div>

                {/*  Text */}
                <div className="col-md-8">
                  <p className="lead mb-4">
                    I'm{" "}
                    <span className="fw-bold text-success">Pauline Moraa</span>,
                    a software engineer who loves building functional digital
                    experiences that make a difference.
                  </p>
                  <p className="mb-4">
                    I specialize in both frontend and backend development,
                    building full-stack applications using{" "}
                    <span
                      className="fw-bold px-2 py-1 rounded"
                      style={{
                        background: "#ccff33",
                        color: "#2d6a4f",
                      }}
                    >
                      React, JavaScript, Python-Flask
                    </span>
                  </p>

                  {/*Cards */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div
                        className="text-center p-3 rounded-3 h-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #2d6a4f, #40916c)",
                          color: "white",
                        }}
                      >
                        <i className="bi bi-code-slash fs-2 mb-2"></i>
                        <h6 className="fw-bold mb-2">Frontend Magic</h6>
                        <small>React • JavaScript • UI/UX</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="text-center p-3 rounded-3 h-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #2d6a4f, #40916c)",
                          color: "white",
                        }}
                      >
                        <i className="bi bi-server fs-2 mb-2"></i>
                        <h6 className="fw-bold mb-2">Backend Power</h6>
                        <small>Flask • SQLAlchemy • REST APIs</small>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div
                        className="text-center p-3 rounded-3 h-100"
                        style={{
                          background:
                            "linear-gradient(135deg, #2d6a4f, #40916c)",
                          color: "white",
                        }}
                      >
                        <i className="bi bi-database fs-2 mb-2"></i>
                        <h6 className="fw-bold mb-2">Data Mastery</h6>
                        <small>PostgreSQL • SQLite • Data Modeling</small>
                      </div>
                    </div>
                  </div>

                  {/* Toolkit */}
                  <div className="text-center mb-4">
                    <h6 className="text-success mb-3">My Toolkit</h6>
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      {[
                        "VS Code",
                        "GitHub",
                        "Postman",
                        "Bootstrap",
                        "Tailwind CSS",
                        "JSON",
                        "RESTful APIs",
                      ].map((tool, index) => (
                        <span
                          key={index}
                          className="badge px-3 py-2"
                          style={{
                            background: "rgba(112, 224, 0, 0.2)",
                            color: "#2d6a4f",
                            border: "1px solid #70e000",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr style={{ borderColor: "#70e000", borderWidth: "2px" }} />

              <div className="text-center">
                <p className="mb-0 text-success">
                  I am passionate about learning new technologies and improving
                  my skills. I enjoy collaborating with others and contributing
                  to open-source projects. Let's build something amazing
                  together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
