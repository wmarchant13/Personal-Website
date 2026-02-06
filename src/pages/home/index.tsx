import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiPython,
  SiFlask,
  SiMongodb,
  SiDocker,
  SiPostgresql,
  SiSass,
  SiVitest,
  SiStorybook,
  SiGitlab,
  SiCypress,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { TbWebhook } from "react-icons/tb";
import styles from "./home.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const heroScrolledClass = styles.heroScrolled || "heroScrolled";
    const onScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 40) {
        hero.classList.add(heroScrolledClass);
      } else {
        hero.classList.remove(heroScrolledClass);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(5deg); }
          20% { transform: rotate(-2deg); }
          30% { transform: rotate(5deg); }
          40% { transform: rotate(-1deg); }
          50% { transform: rotate(3deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        
        /* Focus styles for accessibility */
        *:focus-visible {
          outline: 3px solid #3d3530;
          outline-offset: 2px;
        }
        
        a:focus-visible {
          outline: 3px solid #f5f1e8;
          outline-offset: 2px;
        }
        
        /* High contrast for dark backgrounds */
        [style*="background: #685f57"] a:focus-visible,
        [style*="background: #3d3530"] a:focus-visible {
          outline: 3px solid #f5f1e8;
          outline-offset: 3px;
        }
        
        /* Ensure interactive elements have focus styles */
        button:focus-visible,
        [role="button"]:focus-visible {
          outline: 3px solid #3d3530;
          outline-offset: 2px;
        }
      `}</style>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Left side: sticky hero and contact */}
        <div
          onWheel={(e) => {
            if (isMobile) return; // Don't forward scroll on mobile
            e.preventDefault();
            if (scrollContainerRef.current) {
              scrollContainerRef.current.scrollBy({
                top: e.deltaY,
                behavior: "instant",
              });
            }
          }}
          style={{
            borderRight: isMobile ? undefined : "4px solid #3d3530",
            borderTop: isMobile ? undefined : "4px solid #3d3530",
            width: isMobile ? "100%" : "40%",
            height: isMobile ? "auto" : "100vh",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "center" : "space-between",
            background: "#685f57",
            overflow: "hidden",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              padding: isMobile ? "var(--space-md)" : "var(--space-2xl)",
            }}
          >
            <section
              id="hero"
              className={`${styles.fadeIn}`}
              style={{ boxSizing: "border-box" }}
            >
              <div className={styles.heroContent}>
                <div
                  style={{
                    display: "inline-block",
                    background:
                      "linear-gradient(180deg, #d9534f 0%, #d9534f 35%, white 35%, white 100%)",
                    padding: isMobile ? "var(--space-sm)" : "var(--space-md)",
                    borderRadius: "8px",
                    border: "3px solid #c9302c",
                    boxShadow: "0 0 0 3px white, 0 4px 6px rgba(0, 0, 0, 0.1)",
                    marginBottom: isMobile
                      ? "var(--space-sm)"
                      : "var(--space-md)",
                    cursor: "pointer",
                    transition: "transform 0.1s ease",
                    transformOrigin: "bottom center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = "wave 0.6s ease";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.animation = "none";
                  }}
                  onAnimationEnd={(e) => {
                    e.currentTarget.style.animation = "none";
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? "0.75rem" : "1rem",
                      fontWeight: 700,
                      color: "white",
                      textAlign: "center",
                      marginBottom: "4px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                      fontFamily: "Barlow, sans-serif",
                    }}
                  >
                    HELLO I'M
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "1.25rem" : "2rem",
                      fontWeight: 700,
                      color: "#3d3530",
                      textAlign: "center",
                      padding: isMobile
                        ? "var(--space-xs) var(--space-sm)"
                        : "var(--space-sm) var(--space-md)",
                      fontFamily: "Barlow, sans-serif",
                    }}
                  >
                    William Marchant
                  </div>
                </div>
                <div
                  className={styles.heroTagsRow}
                  style={{
                    paddingBottom: isMobile ? "0" : "20px",
                    display: isMobile ? "none" : "block",
                  }}
                >
                  {/* <span
                  className={styles.heroTag}
                  style={{ background: "#2c5282", color: "#23242a" }}
                >
                  Software Engineer
                </span> */}
                </div>
                <div
                  style={{
                    marginTop: isMobile ? "var(--space-sm)" : "var(--space-lg)",
                  }}
                >
                  {isMobile ? (
                    // Mobile layout
                    <>
                      <div
                        style={{
                          display: "flex",
                          gap: "var(--space-md)",
                          marginBottom: "var(--space-xs)",
                          fontSize: "0.9rem",
                          flexWrap: "wrap",
                        }}
                      >
                        <a
                          href="mailto:wmarchant13@gmail.com"
                          style={{
                            color: "#f5f1e8",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontWeight: 600,
                            fontFamily: "Barlow, sans-serif",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#e8d4b8")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#f5f1e8")
                          }
                        >
                          <FaEnvelope size={"16px"} />
                          wmarchant13@gmail.com
                        </a>
                        <span
                          style={{
                            color: "#f5f1e8",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontWeight: 600,
                            fontFamily: "Barlow, sans-serif",
                          }}
                        >
                          <FaPhone size={"16px"} />
                          +1 518-813-7261
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          marginTop: "var(--space-md)",
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/william-marchant-4b2633294/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaLinkedin size={"20px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-30px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "4px 8px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            LinkedIn
                          </span>
                        </a>
                        <a
                          href="https://github.com/wmarchant13"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaGithub size={"20px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-30px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "4px 8px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            GitHub
                          </span>
                        </a>
                        <a
                          href="/resume.pdf"
                          download="William_Marchant_Resume.pdf"
                          aria-label="Download Resume"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaDownload size={"20px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-30px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "4px 8px",
                              paddingTop: "6px",
                              borderRadius: "4px",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            Download Resume
                          </span>
                        </a>
                      </div>
                    </>
                  ) : (
                    // Desktop layout
                    <>
                      <div
                        style={{
                          marginBottom: "var(--space-sm)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#f5f1e8",
                          fontSize: "1.1rem",
                        }}
                      >
                        <FaEnvelope
                          size={"20px"}
                          style={{ color: "#f5f1e8" }}
                        />
                        <strong
                          style={{
                            fontFamily: "Barlow, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Email:
                        </strong>{" "}
                        <a
                          href="mailto:wmarchant13@gmail.com"
                          style={{
                            color: "#f5f1e8",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                            display: "inline-block",
                            fontWeight: 600,
                            fontFamily: "Barlow, sans-serif",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "#e8d4b8")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "#f5f1e8")
                          }
                        >
                          wmarchant13@gmail.com
                        </a>
                      </div>
                      <div
                        style={{
                          marginBottom: "var(--space-sm)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#f5f1e8",
                          fontSize: "1.1rem",
                        }}
                      >
                        <FaPhone size={"20px"} style={{ color: "#f5f1e8" }} />
                        <strong
                          style={{
                            fontFamily: "Barlow, sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          Phone:
                        </strong>{" "}
                        <span
                          style={{
                            color: "#f5f1e8",
                            fontWeight: 600,
                            fontFamily: "Barlow, sans-serif",
                          }}
                        >
                          +1 518-813-7261
                        </span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "15px",
                          marginTop: "var(--space-md)",
                        }}
                      >
                        <a
                          href="https://www.linkedin.com/in/william-marchant-4b2633294/"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaLinkedin size={"30px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-35px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "6px 10px",
                              paddingTop: "8px",
                              borderRadius: "4px",
                              fontSize: "13px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            LinkedIn
                          </span>
                        </a>
                        <a
                          href="https://github.com/wmarchant13"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaGithub size={"30px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-35px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "6px 10px",
                              paddingTop: "8px",
                              borderRadius: "4px",
                              fontSize: "13px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            GitHub
                          </span>
                        </a>
                        <a
                          href="/resume.pdf"
                          download="William_Marchant_Resume.pdf"
                          aria-label="Download Resume"
                          style={{
                            color: "#f5f1e8",
                            transition: "all 0.2s ease",
                            display: "inline-block",
                            position: "relative",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.15)";
                            e.currentTarget.style.color = "#e8d4b8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "1";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.color = "#f5f1e8";
                            const tooltip =
                              e.currentTarget.querySelector(".tooltip");
                            if (tooltip)
                              (tooltip as HTMLElement).style.opacity = "0";
                          }}
                        >
                          <FaDownload size={"30px"} />
                          <span
                            className="tooltip"
                            style={{
                              position: "absolute",
                              bottom: "-35px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background: "#3d3530",
                              color: "white",
                              padding: "6px 10px",
                              paddingTop: "8px",
                              borderRadius: "4px",
                              fontSize: "13px",
                              whiteSpace: "nowrap",
                              opacity: 0,
                              transition: "opacity 0.2s ease",
                              pointerEvents: "none",
                            }}
                          >
                            Download Resume
                          </span>
                        </a>
                      </div>
                    </>
                  )}
                </div>
                {/* <div className={styles.heroSummaryCard}>
                <div className={styles.experienceCard}>
                  <p className={styles.cardBody}>
                    Frontend-focused Software Engineer based out of Buffalo, NY
                    with full-stack experience, collaborating with clients and
                    content authors to build scalable, user-friendly
                    applications. Skilled at translating feedback into
                    functional features and continuously expanding technical
                    expertise.
                  </p>
                </div>
              </div> */}
              </div>
            </section>
          </div>

          {/* Contact Section */}
          {/* <div style={{ padding: "var(--space-2xl)" }}>
          <section id="contact" className={`${styles.fadeInDelayed}`}>
            <h2 style={{ marginBottom: "var(--space-lg)" }}>Contact Info</h2>
            <div className={styles.experienceCard}>
              <div className={styles.cardBody}>
                <div style={{ marginBottom: "var(--space-md)" }}>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </div>
                <div>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://linkedin.com/in/wmarchant">
                    linkedin.com/in/wmarchant
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div> */}
        </div>

        {/* Right side: scrollable sections */}
        <div
          ref={scrollContainerRef}
          data-scroll-container="true"
          style={{
            width: isMobile ? "100%" : "60%",
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            background: "#f5f1e8",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundAttachment: "local",
            position: "relative",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {/* Animated background elements */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: isMobile ? 0 : "40%",
              width: isMobile ? "100%" : "60%",
              height: "100vh",
              overflow: "hidden",
              pointerEvents: "none",
              zIndex: 0,
            }}
          >
            {/* Floating orbs */}
            <div
              style={{
                position: "absolute",
                top: "5%",
                right: "5%",
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(166, 138, 109, 0.08) 0%, transparent 70%)",
                animation: "float 20s ease-in-out infinite",
                filter: "blur(40px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "8%",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(196, 165, 123, 0.06) 0%, transparent 70%)",
                animation: "float 15s ease-in-out infinite 2s",
                filter: "blur(40px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "40%",
                right: "15%",
                width: "320px",
                height: "320px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(166, 138, 109, 0.05) 0%, transparent 70%)",
                animation: "float 25s ease-in-out infinite 5s",
                filter: "blur(50px)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "70%",
                left: "40%",
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(196, 165, 123, 0.04) 0%, transparent 70%)",
                animation: "float 18s ease-in-out infinite 3s",
                filter: "blur(45px)",
              }}
            />
          </div>

          {/* Progress bar */}
          <div
            style={{
              position: "sticky",
              top: 0,
              left: 0,
              width: "100%",
              height: "4px",
              background: "rgba(224, 224, 224, 0.5)",
              backdropFilter: "blur(10px)",
              zIndex: 99,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${scrollProgress}%`,
                background: "#3d3530",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>

          {/* About Section */}
          <section
            id="about"
            className={`section ${styles.fadeInDelayed}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="container">
              <h2 style={{ marginBottom: "var(--space-xl)", color: "#3d3530" }}>
                About
              </h2>
              <div className={styles.experienceCard}>
                <p className={styles.cardBody}>
                  Frontend-focused Software Engineer based out of Buffalo, NY
                  with full-stack experience, collaborating with clients and
                  content authors to build scalable, user-friendly applications.
                  Skilled at translating feedback into functional features and
                  continuously expanding technical expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section
            className={`section ${styles.fadeInDelayed}`}
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              paddingBottom: "var(--space-2xl)",
              padding: "unset",
            }}
          >
            <div className="container">
              <div
                style={{
                  maxWidth: "800px",
                  margin: "0 auto",
                  padding: "var(--space-xl)",
                  // borderLeft: "4px solid #3d3530",
                  background: "rgba(61, 53, 48, 0.03)",
                  borderRadius: "8px",
                  top: -50,
                  position: "relative",
                }}
              >
                <p
                  style={{
                    fontSize: isMobile ? "1.25rem" : "1.5rem",
                    fontStyle: "italic",
                    color: "#3d3530",
                    marginBottom: "var(--space-md)",
                    fontFamily: "Instrument Serif, Georgia, serif",
                    lineHeight: "1.6",
                  }}
                >
                  "To give anything less than your best is to sacrifice the
                  gift."
                </p>
                <p
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    color: "#3d3530",
                    fontFamily: "Barlow, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  — Steve Prefontaine
                </p>
              </div>
            </div>
          </section>

          {/* Professional Experience Section */}
          <section
            id="experience"
            className={`section ${styles.fadeInDelayed}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="container">
              <h2 style={{ marginBottom: "var(--space-xl)", color: "#3d3530" }}>
                Professional Experience
              </h2>
              <div className={styles.experienceGrid}>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLabel}>June 2024 – Present</div>
                    <h3 className={styles.cardTitle}>
                      Junior Software Engineer
                    </h3>
                    <div className={styles.cardSubtitle}>Mean Guppy</div>
                  </div>
                  <p className={styles.cardBody}>
                    Build reusable React packages with TypeScript and SASS
                    modules for a Fortune 500 company, supporting scalable
                    frontend development. Write unit and component tests using
                    Vitest and React Testing Library across multiple packages.
                    Contribute to the redevelopment of a Fortune 500 company's
                    website; collaborate on building a Payload CMS solution that
                    streamlines content author workflows.
                  </p>
                  <p className={styles.cardBody}>
                    <ul className={styles.skillList}>
                      <li className={styles.skillTag}>TypeScript</li>
                      <li className={styles.skillTag}>SCSS</li>
                      <li className={styles.skillTag}>Payload CMS</li>
                      <li className={styles.skillTag}>Vitest</li>
                      <li className={styles.skillTag}>React</li>
                      <li className={styles.skillTag}>HTML</li>
                      <li className={styles.skillTag}>Gitlab</li>
                      <li className={styles.skillTag}>Storybook</li>
                    </ul>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      marginTop: "var(--space-md)",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <SiTypescript
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="TypeScript"
                    />
                    <SiReact
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="React"
                    />
                    <SiSass
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="SCSS"
                    />
                    <SiHtml5
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="HTML"
                    />
                    <SiVitest
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Vitest"
                    />
                    <SiStorybook
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Storybook"
                    />
                    <SiGitlab
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="GitLab"
                    />
                  </div>
                </div>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLabel}>
                      June 2023 – August 2023
                    </div>
                    <h3 className={styles.cardTitle}>Technology Intern</h3>
                    <div className={styles.cardSubtitle}>M&T Bank</div>
                  </div>
                  <p className={styles.cardBody}>
                    Developed a web application that connects women of color in
                    the Buffalo area with financial advisors. Leveraged
                    TypeScript, React, HTML, and CSS to build the web app, added
                    Cypress test coverage, and enforced quality gates through a
                    YAML-based CI pipeline. Part of a research experiment
                    comparing AI-generated code to human developers, kept a
                    weekly log to track progress and differences between the
                    two.
                  </p>
                  <p className={styles.cardBody}>
                    <ul className={styles.skillList}>
                      <li className={styles.skillTag}>TypeScript</li>
                      <li className={styles.skillTag}>CSS</li>
                      <li className={styles.skillTag}>YAML</li>
                      <li className={styles.skillTag}>Cypress</li>
                      <li className={styles.skillTag}>CI Pipeline</li>
                      <li className={styles.skillTag}>Gitlab</li>
                    </ul>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      marginTop: "var(--space-md)",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <SiTypescript
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="TypeScript"
                    />
                    <SiReact
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="React"
                    />
                    <SiHtml5
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="HTML"
                    />
                    <SiCss3
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="CSS"
                    />
                    <SiCypress
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Cypress"
                    />
                    <SiGitlab
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="GitLab"
                    />
                  </div>
                </div>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLabel}>
                      June 2021 – August 2022
                    </div>
                    <h3 className={styles.cardTitle}>
                      Cashier/Sales Associate
                    </h3>
                    <div className={styles.cardSubtitle}>Stewart’s Shops</div>
                  </div>
                  <p className={styles.cardBody}>
                    Worked as part of a team to prepare food, stock shelves,
                    organize coolers and freezers, operate the cash register,
                    serve ice cream, and ensure store cleanliness.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className={`section ${styles.fadeInDelayed}`}>
            <div className="container">
              <h2 style={{ marginBottom: "var(--space-xl)", color: "#3d3530" }}>
                Education
              </h2>
              <div className={styles.experienceGrid}>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardLabel}>2020 – 2024</div>
                    <h3 className={styles.cardTitle}>BS, Computer Science</h3>
                    <div className={styles.cardSubtitle}>
                      University at Buffalo
                    </div>
                  </div>
                  <p className={styles.cardBody}>
                    <ul>
                      <li>GPA: 3.4 </li>
                      <li>
                        Scholarships: Pride of New York Scholarship Recipient,
                        Athletic Scholarship for Cross Country/Track
                      </li>
                      <li>
                        Member of the NCAA D1 Cross Country, Indoor, and Outdoor
                        Track teams
                      </li>
                      <li>
                        Relevant Courses: Systems Programming, Applied Human
                        Computer-Interaction and Interface Design, Distributed
                        Systems, Algorithms and Complexity, Data Models and
                        Query Languages, Intro to Machine Learning
                      </li>
                      <li>
                        Dean’s List 2020, MAC All-Academic Team 2021-23 Cross
                        Country, 2022-24 Indoor Track, and 2023-24 Outdoor Track
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className={`section ${styles.fadeInDelayed}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="container">
              <h2 style={{ marginBottom: "var(--space-xl)", color: "#3d3530" }}>
                Skills
              </h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillBlock}>
                  <h3 className={styles.skillTitle}>Programming Languages</h3>
                  <ul className={styles.skillList}>
                    <li className={styles.skillTag}>Java</li>
                    <li className={styles.skillTag}>JavaScript</li>
                    <li className={styles.skillTag}>Python</li>
                    <li className={styles.skillTag}>Scala</li>
                    <li className={styles.skillTag}>TypeScript</li>
                    <li className={styles.skillTag}>SQL</li>
                    <li className={styles.skillTag}>Go</li>
                  </ul>
                </div>
                <div className={styles.skillBlock}>
                  <h3 className={styles.skillTitle}>Computer Skills</h3>
                  <ul className={styles.skillList}>
                    <li className={styles.skillTag}>Bash Shell Script</li>
                    <li className={styles.skillTag}>Linux</li>
                    <li className={styles.skillTag}>Docker</li>
                    <li className={styles.skillTag}>Github</li>
                    <li className={styles.skillTag}>GitLab</li>
                    <li className={styles.skillTag}>React</li>
                    <li className={styles.skillTag}>Cypress</li>
                    <li className={styles.skillTag}>Vitest</li>
                    <li className={styles.skillTag}>CSS</li>
                    <li className={styles.skillTag}>SCSS</li>
                    <li className={styles.skillTag}>Postman</li>
                    <li className={styles.skillTag}>HTML</li>
                    <li className={styles.skillTag}>Jira</li>
                    <li className={styles.skillTag}>Figma</li>
                    <li className={styles.skillTag}>Asana</li>
                    <li className={styles.skillTag}>CMS</li>
                    <li className={styles.skillTag}>Storybook</li>
                    <li className={styles.skillTag}>YAML</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className={`section ${styles.fadeInDelayed}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="container">
              <h2 style={{ marginBottom: "var(--space-xl)", color: "#3d3530" }}>
                Projects
              </h2>
              <div className={styles.experienceGrid}>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    {/* <div className={styles.cardLabel}>2025</div> */}
                    <h3 className={styles.cardTitle}>Database Project</h3>
                    <div className={styles.cardSubtitle}>
                      University Project
                    </div>
                  </div>
                  <p className={styles.cardBody}>
                    Designed and implemented a SQL database using PostgreSQL
                    with publicly available datasets. Developed a database
                    schema to solve a defined problem and wrote queries to
                    manipulate and analyze the data. Delivered and presented
                    formal findings to demonstrate project outcomes.
                  </p>
                  <p className={styles.cardBody}>
                    <ul className={styles.skillList}>
                      <li className={styles.skillTag}>PostgreSQL</li>
                      <li className={styles.skillTag}>SQL</li>
                    </ul>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      marginTop: "var(--space-md)",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <SiPostgresql
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="PostgreSQL"
                    />
                  </div>
                </div>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    {/* <div className={styles.cardLabel}>2024</div> */}
                    <h3 className={styles.cardTitle}>UB Roomies</h3>
                    <div className={styles.cardSubtitle}>
                      University Project
                    </div>
                  </div>
                  <p className={styles.cardBody}>
                    Built a roommate-finder web app for UB students using
                    TypeScript, JavaScript, React, HTML, and CSS. Implemented
                    features for friending, messaging, posting, and apartment
                    listings.
                  </p>
                  <p className={styles.cardBody}>
                    <ul className={styles.skillList}>
                      <li className={styles.skillTag}>TypeScript</li>
                      <li className={styles.skillTag}>JavaScript</li>
                      <li className={styles.skillTag}>React</li>
                      <li className={styles.skillTag}>HTML</li>
                      <li className={styles.skillTag}>CSS</li>
                    </ul>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      marginTop: "var(--space-md)",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <SiTypescript
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="TypeScript"
                    />
                    <SiJavascript
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="JavaScript"
                    />
                    <SiReact
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="React"
                    />
                    <SiHtml5
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="HTML5"
                    />
                    <SiCss3
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="CSS3"
                    />
                  </div>
                </div>
                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    {/* <div className={styles.cardLabel}>2024</div> */}
                    <h3 className={styles.cardTitle}>Group Web App Project</h3>
                    <div className={styles.cardSubtitle}>
                      University Project
                    </div>
                  </div>
                  <p className={styles.cardBody}>
                    Developed a full-stack web application with secure login,
                    live chat, media sharing, and full user customization.
                    Managed team workflow via GitHub and leveraged Python Flask,
                    HTML, CSS, WebSockets, MongoDB Atlas, and Docker.
                  </p>
                  <p className={styles.cardBody}>
                    <ul className={styles.skillList}>
                      <li className={styles.skillTag}>Python</li>
                      <li className={styles.skillTag}>Flask</li>
                      <li className={styles.skillTag}>MongoDB</li>
                      <li className={styles.skillTag}>GitHub</li>
                      <li className={styles.skillTag}>HTML</li>
                      <li className={styles.skillTag}>CSS</li>
                      <li className={styles.skillTag}>WebSockets</li>
                      <li className={styles.skillTag}>Docker</li>
                    </ul>
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "var(--space-md)",
                      marginTop: "var(--space-md)",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <SiPython
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Python"
                    />
                    <SiFlask
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Flask"
                    />
                    <SiMongodb
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="MongoDB"
                    />
                    <DiGithubBadge
                      size={isMobile ? 32 : 36}
                      style={{ color: "#3d3530" }}
                      title="GitHub"
                    />
                    <SiHtml5
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="HTML5"
                    />
                    <SiCss3
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="CSS3"
                    />
                    <TbWebhook
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="WebSockets"
                    />
                    <SiDocker
                      size={isMobile ? 28 : 32}
                      style={{ color: "#3d3530" }}
                      title="Docker"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div style={{ paddingBottom: "var(--space-3xl)" }} />
        </div>
      </div>
    </>
  );
}
