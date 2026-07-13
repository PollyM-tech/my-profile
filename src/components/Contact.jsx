export default function Contact() {
  const contactItems = [
    {
      title: "Email",
      href: "mailto:pmoraa431@gmail.com",
      text: "pmoraa431@gmail.com",
      note: "Best for job opportunities, project inquiries, and collaborations.",
    },
    {
      title: "Phone",
      href: "tel:0714660729",
      text: "0714660729",
      note: "Available for professional inquiries and follow-ups.",
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/pauline-moraa/",
      text: "linkedin.com/in/pauline-moraa",
      note: "Connect with me professionally.",
    },
    {
      title: "GitHub",
      href: "https://github.com/PollyM-tech",
      text: "github.com/PollyM-tech",
      note: "View my software development projects.",
    },
  ];

  return (
    <section className="py-5" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-success">Contact</h1>

          <div
            className="mx-auto mb-3"
            style={{
              width: "80px",
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #70e000, #ccff33)",
            }}
          ></div>

          <p
            className="lead mx-auto"
            style={{
              color: "#245c43",
              maxWidth: "800px",
              lineHeight: "1.8",
            }}
          >
            Reach out for Technical Virtual Assistance, Digital Operations
            support, Software Development, website support, or collaboration
            opportunities.
          </p>
        </div>

        {/* Contact Content */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div
              className="card shadow-lg border-0"
              style={{
                borderRadius: "20px",
                background: "linear-gradient(135deg, #f8fff0, #e9ffd8)",
              }}
            >
              <div className="card-body p-4 p-md-5">
                <div className="row g-4">
                  {/* Intro Side */}
                  <div className="col-lg-5">
                    <div
                      className="h-100 p-4 rounded-4"
                      style={{
                        background: "linear-gradient(135deg, #2d6a4f, #40916c)",
                        color: "white",
                      }}
                    >
                      <h3 className="fw-bold mb-3">Let’s Connect</h3>

                      <p style={{ lineHeight: "1.8", opacity: "0.95" }}>
                        I am open to remote opportunities, freelance projects,
                        and collaborations where I can support teams with
                        technical virtual assistance, digital operations,
                        software development, and online business support.
                      </p>

                      <p className="mb-0" style={{ lineHeight: "1.8" }}>
                        I usually respond within 24–48 hours.
                      </p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="col-lg-7">
                    <div className="row g-3">
                      {contactItems.map((item) => (
                        <div className="col-md-6" key={item.title}>
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-decoration-none"
                          >
                            <div
                              className="h-100 p-3 rounded-3 shadow-sm"
                              style={{
                                background:
                                  "linear-gradient(135deg, rgba(112,224,0,0.1), rgba(204,255,51,0.05))",
                                border: "1px solid rgba(112,224,0,0.25)",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(-3px)";
                                e.currentTarget.style.boxShadow =
                                  "0 10px 20px rgba(112, 224, 0, 0.25)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform =
                                  "translateY(0)";
                                e.currentTarget.style.boxShadow =
                                  "0 0.125rem 0.25rem rgba(0,0,0,0.075)";
                              }}
                            >
                              <h6 className="fw-bold mb-1 text-success">
                                {item.title}
                              </h6>

                              <span
                                className="fw-semibold d-block mb-2"
                                style={{
                                  color: "#2d6a4f",
                                  fontSize: "0.95rem",
                                  wordBreak: "break-word",
                                }}
                              >
                                {item.text}
                              </span>

                              <small
                                style={{
                                  color: "#245c43",
                                  lineHeight: "1.6",
                                }}
                              >
                                {item.note}
                              </small>
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>

                    <div
                      className="text-center mt-4 p-3 rounded-3"
                      style={{
                        background: "rgba(112, 224, 0, 0.12)",
                        border: "1px solid rgba(112, 224, 0, 0.25)",
                      }}
                    >
                      <p className="fw-medium mb-0" style={{ color: "#245c43" }}>
                        Thank you for visiting my portfolio. I’d be happy to
                        discuss how I can support your team or project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}