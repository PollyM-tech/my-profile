import image from "../assets/image.jpeg";

export default function About() {
  const skillGroups = [
    {
      title: "Technical Virtual Assistance",
      skills: [
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
      title: "Software & Web Development",
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "Python",
        "Flask",
        "REST APIs",
        "PostgreSQL",
        "GitHub",
      ],
    },
    {
      title: "Digital Operations",
      skills: [
        "Project Coordination",
        "Workflow Setup",
        "Notion",
        "Trello",
        "Asana",
        "Slack",
        "Google Workspace",
        "Microsoft 365",
      ],
    },
    {
      title: "AI & Data Support",
      skills: [
        "AI Model Evaluation",
        "Prompt Review",
        "Data Annotation",
        "LLM Evaluation",
        "Quality Review",
        "Technical Feedback",
      ],
    },
    {
      title: "Digital Marketing",
      skills: [
        "Canva",
        "SEO Basics",
        "Content Calendars",
        "Social Media Scheduling",
        "Analytics Reporting",
        "Email Marketing",
      ],
    },
    {
      title: "Cloud & Automation",
      skills: [
        "AWS Learning",
        "Docker Learning",
        "GitHub Actions",
        "Zapier",
        "Vercel",
        "Automation Support",
      ],
    },
  ];

  const toolbox = [
    "React",
    "TypeScript",
    "Next.js",
    "Convex",
    "Python",
    "Flask",
    "GitHub",
    "VS Code",
    "Canva",
    "Notion",
    "Slack",
    "Google Workspace",
    "Microsoft 365",
    "Trello",
    "Asana",
    "Zapier",
    "Vercel",
    "AWS",
    "Docker",
  ];

  const certifications = [
    {
      title: "Bsc Events and Convention Management",
      institution: "The Technical University of Kenya",
    },
    {
      title: "Software Engineering",
      institution: "Moringa School",
    },
    {
      title: "Generative AI for Software Developers",
      institution: "Moringa School",
    },
    {
      title: "Certificate in Generative AI",
      institution: "Open University of Kenya",
    },
    {
      title: "Emotional Intelligence",
      institution: "African Management Institute",
    },
    {
      title: "Leadership",
      institution: "African Management Institute",
    },
    {
      title: "Entrepreneurship",
      institution: "African Management Institute",
    },
    {
      title: "Project Management",
      institution: "African Management Institute / Alison",
    },
    {
      title: "AWS Cloud Practitioner",
      institution: "In Progress",
    },
  ];

  return (
    <section className="py-5" id="about">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-success">About Me</h1>

          <div
            className="underline mx-auto mb-3"
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #70e000, #ccff33)",
            }}
          ></div>

          <p className="lead" style={{ color: "#245c43" }}>
            Technical Virtual Assistant, Software Developer, and Digital
            Operations Support Professional
          </p>
        </div>

        {/* About Card */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-11">
            <div
              className="card shadow-sm border-0"
              style={{
                background: "linear-gradient(135deg, #f8fff0, #e9ffd8)",
                borderRadius: "20px",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <div className="row align-items-center">
                  {/* Profile Image Section */}
                  <div className="col-md-4 text-center mb-4 mb-md-0">
                    <img
                      src={image}
                      alt="Pauline Moraa"
                      className="rounded-circle mx-auto mb-3 shadow"
                      style={{
                        width: "170px",
                        height: "170px",
                        objectFit: "cover",
                        border: "5px solid white",
                        boxShadow: "0 10px 25px rgba(45, 106, 79, 0.25)",
                      }}
                    />

                    <h4 className="text-success fw-bold">Pauline Moraa</h4>

                    <p className="mb-0" style={{ color: "#245c43" }}>
                      Tech VA | Developer | Digital Operations
                    </p>
                  </div>

                  {/* About Text */}
                  <div className="col-md-8">
                    <p
                      className="lead mb-4"
                      style={{ color: "#245c43", lineHeight: "1.8" }}
                    >
                      I am a technology professional who combines technical
                      virtual assistance, software development, digital
                      marketing, AI tools, and business support to help teams
                      stay organized and work smarter.
                    </p>

                    <p
                      className="mb-4"
                      style={{ color: "#245c43", lineHeight: "1.8" }}
                    >
                      My background includes building responsive websites and
                      web applications, supporting digital tools, managing
                      documentation, coordinating projects, handling online
                      research, and helping with client-facing communication.
                    </p>

                    <p
                      className="mb-0"
                      style={{ color: "#245c43", lineHeight: "1.8" }}
                    >
                      What makes my profile unique is that I understand both the
                      technical side of digital systems and the operational side
                      of business support. I can assist with websites, workflows,
                      marketing tools, AI-related tasks, and administrative
                      coordination without needing everything explained from
                      scratch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Skills */}
        <div className="mb-5" id="skills">
          <div className="text-center mb-5">
            <h2 className="section-title text-center text-success">
              Featured Skills
            </h2>

            <p className="lead" style={{ color: "#245c43" }}>
              A practical mix of technical, administrative, AI, and digital
              business support skills.
            </p>
          </div>

          <div className="row g-4">
            {skillGroups.map((group, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderTop: "5px solid #2d6a4f",
                    borderRadius: "15px",
                    background: "#ffffff",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(45, 106, 79, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                  }}
                >
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-3" style={{ color: "#2d6a4f" }}>
                      {group.title}
                    </h5>

                    <div className="d-flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="badge px-3 py-2"
                          style={{
                            background: "rgba(112, 224, 0, 0.15)",
                            color: "#245c43",
                            border: "1px solid rgba(112, 224, 0, 0.4)",
                            borderRadius: "20px",
                            fontSize: "0.8rem",
                            fontWeight: "500",
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Toolbox */}
        <div className="mb-5" id="toolbox">
          <div className="text-center mb-5">
            <h2 className="section-title text-center text-success">
              My Toolbox
            </h2>

            <p className="lead" style={{ color: "#245c43" }}>
              Tools and platforms I use to build, organize, communicate, and
              support digital work.
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {toolbox.map((tool, index) => (
              <div className="col-6 col-md-3 col-lg-2" key={index}>
                <div
                  className="text-center p-3 h-100 shadow-sm bg-white"
                  style={{
                    borderRadius: "14px",
                    border: "1px solid rgba(112, 224, 0, 0.25)",
                    color: "#2d6a4f",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 25px rgba(45, 106, 79, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                  }}
                >
                  {tool}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div id="certifications">
          <div className="text-center mb-5">
            <h2 className="section-title text-center text-success">
              Certifications
            </h2>

            <p className="lead" style={{ color: "#245c43" }}>
              Training across software engineering, AI, leadership, business,
              and project support.
            </p>
          </div>

          <div className="row g-4">
            {certifications.map((cert, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm"
                  style={{
                    borderRadius: "15px",
                    background:
                      "linear-gradient(135deg, rgba(216, 243, 220, 0.75), rgba(204, 255, 51, 0.12))",
                    borderLeft: "5px solid #2d6a4f",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 15px 30px rgba(45, 106, 79, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                  }}
                >
                  <div className="card-body p-4">
                    <h6 className="fw-bold mb-2" style={{ color: "#2d6a4f" }}>
                      {cert.title}
                    </h6>

                    <p className="mb-0 small" style={{ color: "#245c43" }}>
                      {cert.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}