import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaFileAlt,
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
        
        /* Newspaper section dividers */
        .newspaper-rule {
          border: none;
          border-top: 1px solid #3d3530;
          margin: 0;
          width: 100%;
          padding-bottom: 10%;
        }
        .newspaper-rule-thick {
          border: none;
          border-top: 3px double #3d3530;
          margin: 0;
          width: 100%;
        }
        .drop-cap::first-letter {
          font-family: 'Instrument Serif', Georgia, serif;
          float: left;
          font-size: 4.2em;
          line-height: 0.8;
          padding-right: 8px;
          padding-top: 4px;
          color: #3d3530;
          font-weight: 700;
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
            height: isMobile ? "25vh" : "100vh",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: isMobile ? "0" : "var(--space-3xl)",
            background: "#483d36",
            backgroundImage: `
              radial-gradient(ellipse at 15% 30%, rgba(60, 48, 38, 0.6) 0%, transparent 45%),
              radial-gradient(ellipse at 85% 60%, rgba(30, 24, 18, 0.5) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 0%, rgba(55, 45, 35, 0.2) 0%, transparent 35%),
              radial-gradient(ellipse at 50% 100%, rgba(25, 20, 15, 0.5) 0%, transparent 35%),
              radial-gradient(ellipse at 70% 20%, rgba(65, 52, 42, 0.1) 0%, transparent 30%),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='leather'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.55' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23leather)' opacity='0.18'/%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23grain)' opacity='0.06'/%3E%3C/svg%3E")
            `,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Hero Section */}
          <div
            style={{
              padding: isMobile
                ? "var(--space-xs) var(--space-md)"
                : "var(--space-2xl)",
              height: isMobile ? "100%" : "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <section
              id="hero"
              className={`${styles.fadeIn}`}
              style={{ boxSizing: "border-box", width: "100%" }}
            >
              <div className={styles.heroContent}>
                {/* Newspaper Author Block */}
                <div
                  style={{
                    borderTop: isMobile
                      ? "2px double #f5f1e8"
                      : "3px double #f5f1e8",
                    borderBottom: isMobile
                      ? "2px double #f5f1e8"
                      : "3px double #f5f1e8",
                    padding: isMobile
                      ? "var(--space-xs) 0"
                      : "var(--space-lg) 0",
                    marginBottom: isMobile
                      ? "var(--space-xs)"
                      : "var(--space-xl)",
                    display: isMobile ? "flex" : "block",
                    alignItems: isMobile ? "center" : undefined,
                    gap: isMobile ? "var(--space-md)" : undefined,
                  }}
                >
                  {/* Left: Name & Title */}
                  <div style={{ flex: isMobile ? "1" : undefined }}>
                    <div
                      style={{
                        fontSize: isMobile ? "0.5rem" : "0.8rem",
                        fontWeight: 600,
                        color: "rgba(245, 241, 232, 0.5)",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontFamily: "Barlow, sans-serif",
                        marginBottom: isMobile ? "1px" : "var(--space-xs)",
                      }}
                    >
                      Written By
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? "1.1rem" : "2.5rem",
                        fontWeight: 700,
                        color: "#f5f1e8",
                        fontFamily: "Instrument Serif, Georgia, serif",
                        lineHeight: 1.1,
                        marginBottom: isMobile ? "1px" : "var(--space-sm)",
                      }}
                    >
                      William Marchant
                    </div>
                    <div
                      style={{
                        fontSize: isMobile ? "0.7rem" : "1.2rem",
                        fontStyle: "italic",
                        color: "#f5f1e8",
                        fontFamily: "Instrument Serif, Georgia, serif",
                        marginBottom: 0,
                        opacity: 0.7,
                      }}
                    >
                      Software Engineer
                    </div>
                  </div>
                  {/* Right: Contact Details */}
                  <div
                    style={{
                      display: isMobile ? "none" : "block",
                    }}
                  >
                    <hr
                      style={{
                        border: "none",
                        borderTop: "1px solid rgba(245, 241, 232, 0.2)",
                        margin: "0 0 var(--space-md) 0",
                      }}
                    />
                  </div>
                  {/* Contact Details */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: isMobile ? "2px" : "var(--space-sm)",
                    }}
                  >
                    <a
                      href="mailto:wmarchant13@gmail.com"
                      style={{
                        color: "#f5f1e8",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: isMobile ? "0.65rem" : "1rem",
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 500,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#e8d4b8")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#f5f1e8")
                      }
                    >
                      <FaEnvelope size={isMobile ? 10 : 16} />
                      wmarchant13@gmail.com
                    </a>
                    <span
                      style={{
                        color: "#f5f1e8",
                        display: "flex",
                        alignItems: "center",
                        gap: isMobile ? "5px" : "8px",
                        fontSize: isMobile ? "0.6rem" : "1rem",
                        fontFamily: "Barlow, sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      <FaPhone size={isMobile ? 10 : 16} />
                      +1 518-813-7261
                    </span>
                  </div>
                </div>

                {/* Social Icons */}
                <div
                  style={{
                    display: "flex",
                    gap: isMobile ? "12px" : "15px",
                    alignItems: "center",
                    marginTop: isMobile ? "0" : undefined,
                  }}
                >
                  {[
                    {
                      href: "https://www.linkedin.com/in/william-marchant-4b2633294/",
                      label: "LinkedIn",
                      icon: <FaLinkedin size={isMobile ? 16 : 24} />,
                      external: true,
                    },
                    {
                      href: "https://github.com/wmarchant13",
                      label: "GitHub",
                      icon: <FaGithub size={isMobile ? 16 : 24} />,
                      external: true,
                    },
                    {
                      href: "/resume.pdf",
                      label: "Download Resume",
                      icon: <FaDownload size={isMobile ? 16 : 24} />,
                      download: "William_Marchant_Resume.pdf",
                    },
                    {
                      href: "https://github.com/wmarchant13/Personal-Website#readme",
                      label: "Read Me",
                      icon: <FaFileAlt size={isMobile ? 16 : 24} />,
                      external: true,
                    },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      {...(link.download ? { download: link.download } : {})}
                      aria-label={link.label}
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
                      {link.icon}
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
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
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

          {/* About & Quote — fills first viewport, centered */}
          <div
            style={{
              minHeight: "calc(100vh - 4px)",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              // placeContent: "center",
              zIndex: 1,
              paddingTop: "7%",
            }}
          >
            <section
              id="about"
              className={`section ${styles.fadeInDelayed}`}
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                padding: 0,
              }}
            >
              <div className="container">
                <hr className="newspaper-rule-thick" />
                <h2
                  style={{
                    color: "#3d3530",
                    fontFamily: "Instrument Serif, Georgia, serif",
                    fontSize: isMobile ? "1.4rem" : "2.25rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    margin: isMobile
                      ? "var(--space-sm) 0"
                      : "var(--space-md) 0",
                  }}
                >
                  About
                </h2>
                <hr className="newspaper-rule" />
                <div
                  style={{
                    marginTop: isMobile ? "var(--space-md)" : "var(--space-lg)",
                    maxWidth: "680px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <p
                    className="drop-cap"
                    style={{
                      fontSize: isMobile ? "0.95rem" : "1.1rem",
                      lineHeight: 1.8,
                      color: "#3d3530",
                      fontFamily: "Instrument Serif, Georgia, serif",
                      textAlign: "justify",
                      fontWeight: 400,
                    }}
                  >
                    Frontend-focused Software Engineer based out of Buffalo, NY
                    with full-stack experience, collaborating with clients and
                    content authors to build scalable, user-friendly
                    applications. Skilled at translating feedback into
                    functional features and continuously expanding technical
                    expertise.
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
                // padding: "15% 0 ",
                // paddingTop: "15%",
                width: "100%",
              }}
            >
              <div className="container">
                <div
                  style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    padding: isMobile ? "var(--space-md)" : "var(--space-xl)",
                    background: "rgba(61, 53, 48, 0.03)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: isMobile ? "1.05rem" : "1.5rem",
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
          </div>

          {/* Professional Experience Section */}
          <section
            id="experience"
            className={`section ${styles.fadeInDelayed}`}
            style={{ position: "relative", zIndex: 1 }}
          >
            <div className="container">
              <hr className="newspaper-rule-thick" />
              <h2
                style={{
                  color: "#3d3530",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: isMobile ? "1.4rem" : "2.25rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  margin: isMobile ? "var(--space-sm) 0" : "var(--space-md) 0",
                  padding: 0,
                }}
              >
                Professional Experience
              </h2>
              <hr className="newspaper-rule" />
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
              <hr className="newspaper-rule-thick" />
              <h2
                style={{
                  color: "#3d3530",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: isMobile ? "1.4rem" : "2.25rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  margin: isMobile ? "var(--space-sm) 0" : "var(--space-md) 0",
                }}
              >
                Education
              </h2>
              <hr className="newspaper-rule" />
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
              <hr className="newspaper-rule-thick" />
              <h2
                style={{
                  color: "#3d3530",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: isMobile ? "1.4rem" : "2.25rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  margin: isMobile ? "var(--space-sm) 0" : "var(--space-md) 0",
                }}
              >
                Skills
              </h2>
              <hr className="newspaper-rule" />
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
              <hr className="newspaper-rule-thick" />
              <h2
                style={{
                  color: "#3d3530",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontSize: isMobile ? "1.4rem" : "2.25rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  textAlign: "center",
                  margin: isMobile ? "var(--space-sm) 0" : "var(--space-md) 0",
                }}
              >
                Projects
              </h2>
              <hr className="newspaper-rule" />
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
