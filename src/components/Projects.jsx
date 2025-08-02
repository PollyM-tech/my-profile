const projects = [
  {
    title: "my-profile",
    description:
      "This is my personal profile website where I showcase my skills and projects.",
    tech: "React JS",
    link: "https://pollym-tech.github.io/my-profile",
    github: "https://github.com/PollyM-tech/my-profile",
    icon: "bi-person-badge",
    gradient: "linear-gradient(135deg, #2d6a4f, #40916c)",
    category: "Personal",
    status: "Live",
  },
  {
    title: "LinkApp",
    description: "A site to save and organize your important links.",
    tech: "React JS, Tailwind CSS, Flask",
    link: "https://backend-link-app-8nwu.vercel.app/signup",
    github: "https://github.com/PollyM-tech/LinkApp",
    icon: "bi-link-45deg",
    gradient: "linear-gradient(135deg, #2d6a4f, #40916c)",
    category: "Full-Stack",
    status: "Live",
  },
  {
    title: "ShopMate",
    description:
      "A group-work React app for family shopping. Everyone can update the list; one admin manages it.",
    tech: "React JS, Bootstrap CSS, Formik & Yup",
    link: "https://phase2-group6-project.onrender.com",
    github: null,
    icon: "bi-cart-check",
    gradient: "linear-gradient(135deg, #2d6a4f, #40916c)",
    category: "Frontend",
    status: "Live",
  },
  {
    title: "Flatdango Movie Theater",
    description:
      "A movie theater app where users can browse movies, view details, and book tickets.",
    tech: "Javascript, HTML, CSS",
    link: "https://flatdango-demo.vercel.app",
    github: "https://github.com/PollyM-tech/flatadango-project",
    icon: "bi-film",
    gradient: "linear-gradient(135deg, #2d6a4f, #40916c)",
    category: "Frontend",
    status: "Complete",
  },
  {
    title: "Smart Recruiter App",
    description:
      "A group-work full-stack recruitment platform with assessment invites, dashboards, and recruiter tools.",
    tech: "React JS, Flask, PostgreSQL",
    link: "https://smart-recruiter-production-8a09.up.railway.app/",
    github: null,
    icon: "bi-briefcase",
    gradient: "linear-gradient(135deg, #2d6a4f, #40916c)",
    category: "Full-Stack",
    status: "Live",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3">
            <span
              className="badge px-4 py-2"
              style={{
                background: "linear-gradient(45deg, #70e000, #ccff33)",
                color: "#2d6a4f",
                fontSize: "1rem",
                borderRadius: "25px",
              }}
            >
              Portfolio Showcase
            </span>
          </div>
          <h2 className="display-4 fw-bold mb-3" style={{ color: "#2d6a4f" }}>
            My Creative Journey
          </h2>
          <p
            className="lead mx-auto"
            style={{ color: "#245c43", maxWidth: "600px" }}
          >
            Each project tells a story of problem-solving, creativity, and
            technical growth. Explore the solutions I've crafted with passion.
          </p>
        </div>

        {/* Stats Row */}
        <div className="row mb-5">
          <div className="col-md-3 col-6 mb-3">
            <div
              className="text-center p-4 rounded-4"
              style={{ background: "rgba(45, 106, 79, 0.1)" }}
            >
              <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
                {projects.length}
              </h3>
              <small style={{ color: "#245c43" }}>Projects Built</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div
              className="text-center p-4 rounded-4"
              style={{ background: "rgba(112, 224, 0, 0.1)" }}
            >
              <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
                8+
              </h3>
              <small style={{ color: "#245c43" }}>Technologies</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div
              className="text-center p-4 rounded-4"
              style={{ background: "rgba(204, 255, 51, 0.1)" }}
            >
              <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
                {projects.filter((p) => p.status === "Live").length}
              </h3>
              <small style={{ color: "#245c43" }}>Live Sites</small>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-3">
            <div
              className="text-center p-4 rounded-4"
              style={{ background: "rgba(216, 243, 220, 0.6)" }}
            >
              <h3 className="fw-bold mb-1" style={{ color: "#2d6a4f" }}>
                100%
              </h3>
              <small style={{ color: "#245c43" }}>Completion</small>
            </div>
          </div>
        </div>

        {/* Projects Grid - Clean 2x2+ Layout */}
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-6">
              <div
                className="card border-0 shadow-lg h-100 project-card"
                style={{
                  borderRadius: "20px",
                  background: "rgba(216, 243, 220, 0.3)",
                  transition: "all 0.4s ease",
                  transform: "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-12px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(45, 106, 79, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.15)";
                }}
              >
                {/* Card Header with Gradient */}
                <div
                  className="card-top"
                  style={{
                    background: project.gradient,
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    padding: "15px 20px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-circle me-3 d-flex align-items-center justify-content-center"
                        style={{
                          width: "45px",
                          height: "45px",
                          background: "rgba(255, 255, 255, 0.2)",
                          color: "white",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.3)";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background =
                            "rgba(255, 255, 255, 0.2)";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className={`${project.icon} fs-5`}></i>
                      </a>
                      <h5 className="mb-0 text-white">{project.title}</h5>
                    </div>
                    <div className="d-flex gap-2">
                      <span
                        className="badge"
                        style={{
                          background: "rgba(255, 255, 255, 0.3)",
                          color: "white",
                          fontSize: "0.7rem",
                        }}
                      >
                        {project.category}
                      </span>
                      <span
                        className="badge"
                        style={{
                          background:
                            project.status === "Live" ? "#ccff33" : "#d8f3dc",
                          color:
                            project.status === "Live" ? "#2d6a4f" : "#245c43",
                          fontSize: "0.7rem",
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card-body p-4">
                  {/* Description */}
                  <p
                    className="mb-4"
                    style={{ color: "#245c43", lineHeight: "1.6" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h6 style={{ color: "#2d6a4f" }} className="mb-2">
                      <i className="bi bi-gear-fill me-2"></i>
                      Tech Stack
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.split(", ").map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge px-3 py-2"
                          style={{
                            background: "rgba(45, 106, 79, 0.1)",
                            color: "#2d6a4f",
                            border: "1px solid rgba(45, 106, 79, 0.2)",
                            fontSize: "0.8rem",
                            borderRadius: "8px",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn flex-grow-1"
                      style={{
                        background: "#2d6a4f",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        fontWeight: "600",
                        padding: "10px 0",
                      }}
                    >
                      <i className="bi bi-eye me-2"></i>
                      View Project
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      style={{
                        background: "transparent",
                        color: "#2d6a4f",
                        border: "2px solid #2d6a4f",
                        borderRadius: "12px",
                        fontWeight: "600",
                        minWidth: "60px",
                        padding: "10px 15px",
                      }}
                    >
                      <i className="bi bi-github fs-5"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">
          <div
            className="d-inline-block p-5 rounded-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(45, 106, 79, 0.1), rgba(112, 224, 0, 0.1))",
              maxWidth: "500px",
              border: "2px solid rgba(45, 106, 79, 0.2)",
            }}
          >
            <div
              className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
              style={{
                width: "80px",
                height: "80px",
                background: "linear-gradient(135deg, #2d6a4f, #70e000)",
                color: "white",
              }}
            >
              <i className="bi bi-rocket-takeoff fs-2"></i>
            </div>
            <h4 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
              Ready for the Next Challenge
            </h4>
            <p className="mb-4" style={{ color: "#245c43" }}>
              I'm always excited to work on new projects and bring fresh ideas
              to life. Let's create something amazing together!
            </p>
            <a
              href="/contact"
              className="btn btn-lg px-5 py-3"
              style={{
                background: "linear-gradient(135deg, #70e000, #ccff33)",
                color: "#2d6a4f",
                border: "none",
                borderRadius: "25px",
                fontWeight: "600",
              }}
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
