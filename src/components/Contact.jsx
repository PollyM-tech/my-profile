import { useEffect } from "react";

export default function Contact() {
  // Check if resume exists
  const resumeUrl = `${import.meta.env.BASE_URL}Pauline_Moraa_Resume.pdf`;

  useEffect(() => {
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) {
          console.error("Resume file not found at:", resumeUrl);
        }
      })
      .catch((err) => console.error("Error checking resume:", err));
  }, [resumeUrl]);

  const contactItems = [
    {
      title: "Email",
      icon: "bi-envelope",
      href: "mailto:pmoraa431@gmail.com",
      text: "pmoraa431@gmail.com",
      iconColor: "white",
    },
    {
      title: "LinkedIn",
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/pauline-moraa",
      text: "/in/pauline-moraa",
      iconColor: "white",
    },
    {
      title: "GitHub",
      icon: "bi-github",
      href: "https://github.com/PollyM-tech",
      text: "/PollyM-tech",
      iconColor: "white",
    },
    {
      title: "Resume",
      icon: "bi-file-earmark-person",
      href: resumeUrl,
      text: "Download Resume",
      iconColor: "white",
      download: true,
    },
  ];

  return (
    <section className="py-5" id="contact">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#2d6a4f" }}>
          Contact Me
        </h1>
        <div
          className="underline mx-auto mb-3"
          style={{
            width: "80px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #70e000, #ccff33)",
          }}
        ></div>
        <p className="lead" style={{ color: "#2d6a4f" }}>
          If you would like to collaborate, ask a question or connect — I would
          love to hear from you.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="card shadow border-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(216, 243, 220, 0.8), rgba(204, 255, 51, 0.1))",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(45, 106, 79, 0.15)",
              border: "1px solid rgba(112, 224, 0, 0.2)",
            }}
          >
            <div className="card-body p-4">
              <div className="row g-3">
                {contactItems.map(
                  ({ title, icon, href, text, iconColor, download }) => (
                    <div className="col-md-6" key={title}>
                      <div
                        className="d-flex align-items-center p-3 rounded-3 h-100"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(112, 224, 0, 0.15), rgba(204, 255, 51, 0.1))",
                          border: "2px solid rgba(112, 224, 0, 0.3)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow =
                            "0 12px 25px rgba(112, 224, 0, 0.25)";
                          e.currentTarget.style.borderColor = "#70e000";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(112, 224, 0, 0.2), rgba(204, 255, 51, 0.15))";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor =
                            "rgba(112, 224, 0, 0.3)";
                          e.currentTarget.style.background =
                            "linear-gradient(135deg, rgba(112, 224, 0, 0.15), rgba(204, 255, 51, 0.1))";
                        }}
                      >
                        <div
                          className="contact-icon me-3 flex-shrink-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #2d6a4f, #70e000)",
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 6px 15px rgba(45, 106, 79, 0.4)",
                          }}
                        >
                          <i
                            className={`bi ${icon}`}
                            style={{ color: iconColor, fontSize: "1.3rem" }}
                          ></i>
                        </div>
                        <div>
                          <h6
                            className="fw-bold mb-1"
                            style={{ color: "#2d6a4f" }}
                          >
                            {title}
                          </h6>
                          <a
                            href={href}
                            target={
                              href.startsWith("http") ? "_blank" : undefined
                            }
                            rel="noopener noreferrer"
                            download={download}
                            className="text-decoration-none fw-medium"
                            style={{
                              color: "#2d6a4f",
                              fontSize: "0.9rem",
                            }}
                          >
                            {text}
                          </a>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Response Time Notice */}
              <div className="text-center mt-4">
                <div
                  className="d-inline-flex align-items-center px-4 py-2 rounded-pill"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(112, 224, 0, 0.1), rgba(204, 255, 51, 0.1))",
                    border: "2px solid rgba(112, 224, 0, 0.4)",
                    color: "#2d6a4f",
                  }}
                >
                  <i
                    className="bi bi-clock me-2"
                    style={{ fontSize: "1.1rem", color: "#70e000" }}
                  ></i>
                  <span className="fw-medium">
                    I will try to respond within 24–48 hours!
                  </span>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-3">
                <p
                  className="mb-0"
                  style={{ color: "#2d6a4f", fontSize: "1rem" }}
                >
                  Ready to start a conversation?
                  <span style={{ color: "#2d6a4f", fontWeight: "600" }}>
                    {" "}
                    Let's connect!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
