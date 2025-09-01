import React from "react";

export default function Contact() {
  const contactItems = [
    {
      title: "Email",
      icon: "bi-envelope",
      href: "mailto:pmoraa431@gmail.com",
      text: "pmoraa431@gmail.com",
    },
    {
      title: "LinkedIn",
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/in/pauline-moraa",
      text: "/in/pauline-moraa",
    },
    {
      title: "GitHub",
      icon: "bi-github",
      href: "https://github.com/PollyM-tech",
      text: "/PollyM-tech",
    },
  ];

  return (
    <section className="py-5" id="contact">
      {/* Section Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-success">Contact Me</h1>
        <div
          className="mx-auto mb-3"
          style={{
            width: "80px",
            height: "4px",
            borderRadius: "2px",
            background: "linear-gradient(90deg, #70e000, #ccff33)",
          }}
        ></div>
        <p className="lead text-success">
          If you’d like to collaborate, ask a question, or connect — I’d love to
          hear from you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="card shadow-lg border-0"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f8fff0, #e9ffd8)",
            }}
          >
            <div className="card-body p-4">
              <div className="row g-3">
                {contactItems.map(({ title, icon, href, text }) => (
                  <div className="col-md-6" key={title}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                    >
                      <div
                        className="d-flex align-items-center p-3 rounded-3 h-100 shadow-sm"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(112,224,0,0.1), rgba(204,255,51,0.05))",
                          border: "1px solid rgba(112,224,0,0.2)",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 20px rgba(112, 224, 0, 0.25)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div
                          className="me-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            background:
                              "linear-gradient(135deg, #2d6a4f, #70e000)",
                            boxShadow: "0 5px 12px rgba(45, 106, 79, 0.3)",
                          }}
                        >
                          <i
                            className={`bi ${icon}`}
                            style={{ color: "white", fontSize: "1.3rem" }}
                          ></i>
                        </div>
                        <div>
                          <h6 className="fw-bold mb-1 text-success">{title}</h6>
                          <span
                            className="fw-medium"
                            style={{ color: "#2d6a4f", fontSize: "0.9rem" }}
                          >
                            {text}
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Notice section */}
              <div className="text-center mt-4">
                <p className="fw-medium text-success mb-0">
                  I usually respond within 24–48 hours. Let’s connect!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
