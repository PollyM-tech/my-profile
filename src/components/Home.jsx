import image from "../assets/image.jpeg";

export default function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const services = [
    {
      title: "Technical Virtual Assistance",
      description:
        "I support founders, teams, and small businesses with organized digital operations and reliable administrative support.",
      items: [
        "Inbox Management",
        "Calendar Management",
        "CRM Support",
        "Documentation",
        "Online Research",
        "Client Communication",
        "Task Tracking",
      ],
    },
    {
      title: "Digital Operations Support",
      description:
        "I help teams improve workflows, manage tools, coordinate projects, and stay organized across digital platforms.",
      items: [
        "Project Coordination",
        "Workflow Setup",
        "Trello",
        "Asana",
        "Notion",
        "Slack",
        "Reporting",
      ],
    },
    {
      title: "Software & Web Development",
      description:
        "I build responsive websites and web applications that help businesses present, manage, and grow their work online.",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Python",
        "Flask",
        "REST APIs",
        "GitHub",
      ],
    },
    {
      title: "AI & Digital Marketing Support",
      description:
        "I combine AI tools, content support, and marketing systems to help businesses create, analyze, and work smarter.",
      items: [
        "AI Evaluation",
        "Prompt Review",
        "Canva",
        "SEO Basics",
        "Content Calendars",
        "Social Media",
        "Analytics",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
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
                <p
                  className="fw-semibold mb-3"
                  style={{
                    color: "#2d6a4f",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    fontSize: "0.9rem",
                  }}
                >
                  Technical VA • Digital Operations • Software Support
                </p>

                <h1 className="display-4 fw-bold mb-4">
                  Hi, I'm{" "}
                  <span style={{ color: "#2d6a4f" }}>Pauline Moraa</span>
                </h1>

                <p className="lead mb-4" style={{ color: "#245c43" }}>
                  Technical Virtual Assistant | Software Developer | Digital
                  Operations Support
                </p>

                <p className="mb-5 fs-5" style={{ color: "#333", lineHeight: "1.8" }}>
                  I help founders, small businesses, and teams manage digital
                  operations, improve workflows, maintain websites, coordinate
                  projects, and build practical web solutions using technology,
                  organization, and AI-powered tools.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                  <button
                    className="btn btn-lg px-4 py-3"
                    onClick={() => scrollToSection("services")}
                    style={{
                      background: "#2d6a4f",
                      borderColor: "#2d6a4f",
                      color: "white",
                      borderRadius: "8px",
                      fontWeight: "600",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#245c43";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#2d6a4f";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    View My Services
                  </button>

                  <button
                    className="btn btn-lg px-4 py-3"
                    onClick={() => scrollToSection("contact")}
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
                      e.currentTarget.style.backgroundColor = "#2d6a4f";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#2d6a4f";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Let’s Work Together
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-lg-6 order-lg-2 order-1 text-center mb-4 mb-lg-0">
              <div className="position-relative">
                <img
  src={image}
  alt="Pauline Moraa"
  className="img-fluid rounded-circle shadow-lg"
  style={{
    maxWidth: "350px",
    width: "100%",
    height: "350px",
    objectFit: "cover",
    border: "5px solid white",
    boxShadow: "0 15px 30px rgba(45, 106, 79, 0.2)",
  }}
/>

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

      {/* My Journey Section */}
      <section id="journey" className="py-5 bg-white">
        <div className="container">
          <h2 className="section-title text-center text-success">My Journey</h2>

          <p
            className="mx-auto text-center"
            style={{
              maxWidth: "950px",
              fontSize: "1.05rem",
              lineHeight: "1.9",
              color: "#245c43",
            }}
          >
            My career started in event management, where I developed strong
            skills in organization, communication, coordination, marketing, and
            creating meaningful experiences. Over time, I discovered my passion
            for technology and transitioned into software engineering, where I
            began building websites, applications, and digital systems. I later
            realized that my business and coordination background gave me a
            unique advantage: I can understand both the technical side of digital
            tools and the people using them. Today, I bring together software
            development, technical virtual assistance, digital marketing, AI
            tools, and business support to help teams stay organized, solve
            problems, and grow smarter.
          </p>
        </div>
      </section>

      {/* What I Do Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-center text-success">
              What I Do
            </h2>
            <p className="lead" style={{ color: "#245c43" }}>
              Practical support for teams that need both technical skill and
              organized business assistance.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="h-100 p-4 rounded-4 shadow-sm bg-white"
                  style={{
                    borderTop: "5px solid #2d6a4f",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(45, 106, 79, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                  }}
                >
                  <h5 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
                    {service.title}
                  </h5>

                  <p
                    className="small mb-3"
                    style={{ color: "#245c43", lineHeight: "1.7" }}
                  >
                    {service.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    {service.items.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="badge rounded-pill"
                        style={{
                          backgroundColor: "rgba(112, 224, 0, 0.15)",
                          color: "#245c43",
                          fontWeight: "500",
                          padding: "8px 10px",
                          border: "1px solid rgba(112, 224, 0, 0.35)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
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