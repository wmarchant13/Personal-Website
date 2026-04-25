"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../utililties/useIsMobile";
import { navLinks, logoConfig } from "../../data/navbarData";
import Image from "next/image";
import styles from "./index.module.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [nameTagWave, setNameTagWave] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = window.localStorage.getItem("theme-preference");
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme: "light" | "dark") => {
      document.documentElement.setAttribute("data-theme", nextTheme);
      setTheme(nextTheme);
    };

    if (savedTheme === "light" || savedTheme === "dark") applyTheme(savedTheme);
    else applyTheme(mediaQuery.matches ? "dark" : "light");

    const onSystemThemeChange = (event: MediaQueryListEvent) => {
      const localTheme = window.localStorage.getItem("theme-preference");
      if (!localTheme) {
        applyTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", onSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", onSystemThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    window.localStorage.setItem("theme-preference", nextTheme);
    setTheme(nextTheme);
  };

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
      "awards",
    ];

    const scrollContainer = document.querySelector(
      '[data-scroll-container="true"]',
    ) as HTMLElement;

    const onScroll = () => {
      let found = "";
      // Higher threshold on mobile means section activates sooner
      const threshold = isMobile ? 500 : 200;

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

      setActiveSection((found || sectionIds[0]) as string);
      setClickedSection("");
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll);
      onScroll();
      return () => scrollContainer.removeEventListener("scroll", onScroll);
    }
  }, [isMobile]);
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={logoConfig.linkTo} className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image
              src={logoConfig.imageSrc}
              alt={logoConfig.imageAlt}
              className={styles.logoImage}
              width={300}
              height={450}
            />
          </div>
          <div
            onMouseEnter={() => setNameTagWave(true)}
            onMouseLeave={() => setNameTagWave(false)}
            onAnimationEnd={() => setNameTagWave(false)}
            className={`${styles.nameTag} ${nameTagWave ? styles.wave : ""}`}
          >
            <div className={styles.nameTagGreeting}>{logoConfig.greeting}</div>
            <div className={styles.nameTagName}>{logoConfig.name}</div>
          </div>
        </Link>

        {/* Hamburger menu button for mobile */}
        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.hamburger}
          >
            <div className={styles.hamburgerBar} />
            <div className={styles.hamburgerBar} />
            <div className={styles.hamburgerBar} />
          </button>
        )}

        {/* Desktop menu */}
        <div className={styles.desktopMenu}>
          <button
            type="button"
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span
              aria-hidden="true"
              className={`${styles.themeSun} ${theme === "light" ? styles.activeThemeIcon : ""}`}
            >
              ☀
            </span>
            <span
              aria-hidden="true"
              className={`${styles.themeMoon} ${theme === "dark" ? styles.activeThemeIcon : ""}`}
            >
              ☾
            </span>
          </button>
          {navLinks.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(e) => {
                handleSmoothScroll(e, tab.id);
                setClickedSection(tab.id);
              }}
              className={`${styles.navLink} ${
                (
                  clickedSection
                    ? clickedSection === tab.id
                    : activeSection === tab.id
                )
                  ? styles.active
                  : ""
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobile && isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <button
            type="button"
            className={styles.mobileThemeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark"
              ? "Theme: Dark (switch to light)"
              : "Theme: Light (switch to dark)"}
          </button>
          {navLinks.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(e) => {
                handleSmoothScroll(e, tab.id);
                setClickedSection(tab.id);
              }}
              className={`${styles.mobileNavLink} ${
                (
                  clickedSection
                    ? clickedSection === tab.id
                    : activeSection === tab.id
                )
                  ? styles.active
                  : ""
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
