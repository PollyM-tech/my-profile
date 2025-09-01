import React from "react";

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
    github: "https://github.com/PollyM-tech/ShopMate",
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
    github: "https://github.com/PollyM-tech/SmartRecruiter",
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
        <div className="text-center mb-5" style={{ marginTop: "50px" }}>
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

        {/* Projects Grid */}
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg h-100 d-flex flex-column"
                style={{
                  borderRadius: "16px",
                  background: "rgba(216, 243, 220, 0.3)",
                  transition: "all 0.4s ease",
                }}
              >
                {/* Header */}
                <div
                  className="card-top"
                  style={{
                    background: project.gradient,
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    padding: "12px 18px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i
                        className={`${project.icon} fs-4 me-2`}
                        style={{ color: "white" }}
                      ></i>
                      <h6 className="mb-0 text-white">{project.title}</h6>
                    </div>
                    <div className="d-flex gap-1">
                      <span
                        className="badge"
                        style={{
                          background: "rgba(255, 255, 255, 0.3)",
                          color: "white",
                          fontSize: "0.65rem",
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
                          fontSize: "0.65rem",
                        }}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="card-body p-3 d-flex flex-column flex-grow-1">
                  <p
                    className="mb-3"
                    style={{ color: "#245c43", fontSize: "0.9rem" }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-3">
                    <h6
                      style={{ color: "#2d6a4f", fontSize: "0.85rem" }}
                      className="mb-2"
                    >
                      <i className="bi bi-gear-fill me-2"></i>Tech Stack
                    </h6>
                    <div className="d-flex flex-wrap gap-1">
                      {project.tech.split(", ").map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge px-2 py-1"
                          style={{
                            background: "rgba(45, 106, 79, 0.1)",
                            color: "#2d6a4f",
                            border: "1px solid rgba(45, 106, 79, 0.2)",
                            fontSize: "0.7rem",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto d-flex flex-column gap-2">
                    <a
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100"
                      style={{
                        background: "#2d6a4f",
                        color: "white",
                        fontSize: "0.85rem",
                        borderRadius: "10px",
                        padding: "8px 0",
                      }}
                    >
                      <i className="bi bi-github me-2"></i>View Code
                    </a>

                    {project.title === "ShopMate" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100"
                        style={{
                          background: "#2d6a4f",
                          color: "white",
                          fontSize: "0.85rem",
                          borderRadius: "10px",
                          padding: "8px 0",
                        }}
                      >
                        <i className="bi bi-eye me-2"></i>View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
