import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import "./styles/design-tokens.scss";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [nameTagWave, setNameTagWave] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();

    const section = document.getElementById(id);
    const scrollContainer = document.querySelector(
      '[data-scroll-container="true"]',
    ) as HTMLElement;

    if (section && scrollContainer) {
      const h2 = section.querySelector("h2");
      const targetElement = h2 || section;
      const containerRect = scrollContainer.getBoundingClientRect();
      const elementRect = targetElement.getBoundingClientRect();
      const scrollTop = scrollContainer.scrollTop;
      const targetScroll = scrollTop + elementRect.top - containerRect.top - 40;
      scrollContainer.scrollTo({ top: targetScroll, behavior: "smooth" });
    }

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Scrollspy logic
  const [activeSection, setActiveSection] = useState<string>("");
  const [clickedSection, setClickedSection] = useState<string>("");
  useEffect(() => {
    const sectionIds = [
      "about",
      "experience",
      "education",
      "skills",
      "projects",
    ];

    const scrollContainer = document.querySelector(
      '[data-scroll-container="true"]',
    ) as HTMLElement;

    const onScroll = () => {
      let found = "";
      const threshold = 150;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const h2 = section.querySelector("h2");
          if (h2) {
            const rect = h2.getBoundingClientRect();
            if (rect.top <= threshold) {
              found = id;
            }
          }
        }
      }

      setActiveSection(found || "about");
      setClickedSection("");
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll);
      onScroll();
      return () => scrollContainer.removeEventListener("scroll", onScroll);
    }
  }, [isMobile]);

  return (
    <div>
      <nav
        style={{
          background: "#f5f1e8",
          borderBottom: "1px solid rgba(139, 115, 85, 0.2)",
          padding: "var(--space-md) 0",
          position: "sticky",
          top: 0,
          zIndex: 100,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          fontFamily: "Barlow, sans-serif",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "var(--space-lg)",
            paddingRight: "var(--space-lg)",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <img
              src="/William_Marchant.JPG"
              alt="William Marchant"
              style={{
                width: "84px",
                height: "84px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center 20%",
                border: "2px solid #e8d4b8",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15)",
                marginLeft: "-8px",
              }}
            />
            <div
              onMouseEnter={() => setNameTagWave(true)}
              onMouseLeave={() => setNameTagWave(false)}
              onAnimationEnd={() => setNameTagWave(false)}
              style={{
                display: "inline-block",
                background:
                  "linear-gradient(180deg, #d9534f 0%, #d9534f 35%, white 35%, white 100%)",
                padding: "4px 10px",
                borderRadius: "5px",
                border: "2px solid #c9302c",
                boxShadow: "0 0 0 2px white, 0 2px 4px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                transition: "transform 0.1s ease",
                transformOrigin: "bottom center",
                animation: nameTagWave ? "wave 0.6s ease" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "0.5rem",
                  fontWeight: 700,
                  color: "white",
                  textAlign: "center",
                  marginBottom: "1px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                HELLO I'M
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#3d3530",
                  textAlign: "center",
                  padding: "2px 6px",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                William Marchant
              </div>
            </div>
          </Link>

          {/* Hamburger menu button for mobile */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "var(--space-xs)",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#3d3530",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#3d3530",
                }}
              />
              <div
                style={{
                  width: "24px",
                  height: "2px",
                  background: "#3d3530",
                }}
              />
            </button>
          )}

          {/* Desktop menu */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              gap: "var(--space-md)",
              alignItems: "center",
            }}
          >
            {/* ...existing code... */}
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => {
                  handleSmoothScroll(e, tab.id);
                  setClickedSection(tab.id);
                }}
                style={{
                  color: (
                    clickedSection
                      ? clickedSection === tab.id
                      : activeSection === tab.id
                  )
                    ? "#3d3530"
                    : "rgba(61, 53, 48, 0.7)",
                  borderRadius: (
                    clickedSection
                      ? clickedSection === tab.id
                      : activeSection === tab.id
                  )
                    ? "16px"
                    : undefined,
                  textDecoration: "none",
                  fontSize: "var(--fs-body-sm)",
                  fontWeight: (
                    clickedSection
                      ? clickedSection === tab.id
                      : activeSection === tab.id
                  )
                    ? 700
                    : 500,
                  transition: "color var(--transition-base), background 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#3d3530")}
                onMouseOut={(e) =>
                  (e.currentTarget.style.color =
                    activeSection === tab.id
                      ? "#3d3530"
                      : "rgba(61, 53, 48, 0.7)")
                }
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#f5f1e8",
              borderBottom: "1px solid rgba(139, 115, 85, 0.2)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "var(--space-md)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-sm)",
            }}
          >
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "education", label: "Education" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
            ].map((tab) => (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={(e) => {
                  handleSmoothScroll(e, tab.id);
                  setClickedSection(tab.id);
                }}
                style={{
                  color: (
                    clickedSection
                      ? clickedSection === tab.id
                      : activeSection === tab.id
                  )
                    ? "#3d3530"
                    : "rgba(61, 53, 48, 0.7)",
                  textDecoration: "none",
                  fontSize: "var(--fs-body)",
                  fontWeight: (
                    clickedSection
                      ? clickedSection === tab.id
                      : activeSection === tab.id
                  )
                    ? 700
                    : 500,
                  padding: "var(--space-sm)",
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
