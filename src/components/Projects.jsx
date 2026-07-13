const projects = [
  {
    title: "Lintech Telecom",
    description:
      "A professional website for a WiFi services and SaaS company, designed to present internet solutions, service packages, and company information clearly for potential clients.",
    tech: "React, Bootstrap, Responsive Design, Web Deployment",
    link: "https://lintechtelecom.com/",
    github: "`https://github.com/PollyM-tech/Lintech-Solutions`",
    category: "Business Website",
    status: "Live",
  },
  {
    title: "EduMyles School Management System",
    description:
      "A collaborated school management system project built to help schools across East Africa move from manual processes to digital solutions for better administration and operations.",
    tech: "React, System Design, School Management, Digital Transformation",
    link: "https://edumyles.com/",
    category: "EdTech",
    status: "Live",
  },
  {
    title: "MylesCorp Technologies",
    description:
      "A technology company website presenting AI-powered software solutions designed to digitize and automate critical operations for African businesses and institutions.",
    tech: "React, AI Solutions, Business Website, Responsive Design",
    link: "https://mylescorptech.com/",
    category: "AI / SaaS",
    status: "Live",
  },
  {
    title: "Construction & Architecture Website",
    description:
      "An ongoing construction and architectural website project focused on showcasing services, project visuals, company information, and a clean professional brand presence.",
    tech: "React, Responsive Design, UI Design, Web Development",
    link: "https://website-construction-ruby.vercel.app/",
    github: "`https://github.com/PollyM-tech/Website-construction`",
    category: "Client Website",
    status: "Ongoing",
  },
  {
    title: "Car Rental / Hire Website",
    description:
      "An almost-complete car rental and hire website built to showcase available vehicles, support booking interest, and create a smooth digital experience for rental customers.",
    tech: "React, Car Rental Platform, Booking Flow, Responsive Design",
    link: "https://carrental-rose.vercel.app/",
    github: "`https://github.com/PollyM-tech/carrental`",
    category: "Rental Platform",
    status: "Ongoing",
  },
  {
  title: "PhysioCare Wellness Website",
  description:
    "An ongoing professional website for a physiotherapist, designed to showcase therapy services, patient support information, appointment guidance, and a clean wellness-focused brand presence.",
  tech: "React, Responsive Design, Healthcare Website, UI Design",
  link: "https://physio-website-opal.vercel.app/",
  github: "https://github.com/PollyM-tech/physio-website",
  category: "Healthcare Website",
  status: "Ongoing",
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

          <h2 className="display-5 fw-bold mb-3 text-success">
            Featured Projects
          </h2>

          <p
            className="lead mx-auto"
            style={{ color: "#245c43", maxWidth: "750px", lineHeight: "1.8" }}
          >
            A selection of current websites and digital solutions I have built
            or collaborated on, including business websites, school management
            systems, AI-powered platforms, and client-focused web projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 mb-5">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card border-0 shadow-lg h-100 d-flex flex-column"
                style={{
                  borderRadius: "18px",
                  background: "rgba(216, 243, 220, 0.35)",
                  transition: "all 0.35s ease",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 35px rgba(45, 106, 79, 0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 1rem 3rem rgba(0,0,0,.175)";
                }}
              >
                {/* Header */}
                <div
                  style={{
                    background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                    padding: "16px 18px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div>
                      <h5 className="mb-2 text-white fw-bold">
                        {project.title}
                      </h5>

                      <span
                        className="badge"
                        style={{
                          background: "rgba(255, 255, 255, 0.22)",
                          color: "white",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                        }}
                      >
                        {project.category}
                      </span>
                    </div>

                    <span
                      className="badge"
                      style={{
                        background:
                          project.status === "Live" ? "#ccff33" : "#d8f3dc",
                        color:
                          project.status === "Live" ? "#2d6a4f" : "#245c43",
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="card-body p-4 d-flex flex-column flex-grow-1">
                  <p
                    className="mb-4"
                    style={{
                      color: "#245c43",
                      fontSize: "0.95rem",
                      lineHeight: "1.7",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h6
                      style={{ color: "#2d6a4f", fontSize: "0.9rem" }}
                      className="fw-bold mb-2"
                    >
                      Tech / Focus
                    </h6>

                    <div className="d-flex flex-wrap gap-2">
                      {project.tech.split(", ").map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge px-2 py-2"
                          style={{
                            background: "rgba(112, 224, 0, 0.15)",
                            color: "#245c43",
                            border: "1px solid rgba(112, 224, 0, 0.35)",
                            fontSize: "0.75rem",
                            fontWeight: "500",
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
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn w-100"
                      style={{
                        background: "#2d6a4f",
                        color: "white",
                        fontSize: "0.9rem",
                        borderRadius: "10px",
                        padding: "10px 0",
                        fontWeight: "600",
                      }}
                    >
                      View Project
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn w-100"
                        style={{
                          background: "transparent",
                          color: "#2d6a4f",
                          border: "2px solid #2d6a4f",
                          fontSize: "0.9rem",
                          borderRadius: "10px",
                          padding: "10px 0",
                          fontWeight: "600",
                        }}
                      >
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div
          className="text-center mx-auto p-4 rounded-4"
          style={{
            maxWidth: "850px",
            background: "linear-gradient(135deg, #f8fff0, #e9ffd8)",
            border: "1px solid rgba(112, 224, 0, 0.25)",
          }}
        >
          <p className="mb-0" style={{ color: "#245c43", lineHeight: "1.8" }}>
            These projects reflect my current focus on practical digital
            solutions for businesses, institutions, and service-based brands,
            combining software development, digital operations, and user-focused
            design.
          </p>
        </div>
      </div>
    </section>
  );
}