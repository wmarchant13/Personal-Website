import styles from "./home.module.scss";
import { useEffect, useRef, useState } from "react";
import Project, { ProjectProps } from "../../components/project";
import Experience, { ExperienceProps } from "../../components/experience";
import Hero, { HeroProps } from "../../components/hero";
import Quote, { QuoteProps } from "../../components/quote";
import Education, { EducationProps } from "../../components/education";
import Skills, { SkillsProps } from "../../components/skills";
import { useIsMobile } from "../../utililties/useIsMobile";

export interface HomeProps {
  heroSection?: HeroProps;
  quoteSection?: QuoteProps;
  experienceSection?: { experiences?: Array<ExperienceProps> };
  educationSection?: { entries?: Array<EducationProps> };
  skillsSection?: SkillsProps;
  projectSection?: { projects?: Array<ProjectProps> };
}

const Home = ({
  heroSection,
  quoteSection,
  experienceSection,
  educationSection,
  skillsSection,
  projectSection,
  ...rest
}: HomeProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();

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
      <div className={styles.pageWrapper}>
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
          className={styles.leftSideContainer}
        >
          {/* Hero Section */}
          <div className={styles.heroWrapper}>
            {heroSection && <Hero {...heroSection} />}
          </div>
        </div>

        {/* Right side: scrollable sections */}
        <div
          ref={scrollContainerRef}
          data-scroll-container="true"
          className={styles.rightSideWrapper}
        >
          {/* Progress bar */}
          <div className={styles.progressBarContainer}>
            <div
              style={{ width: `${scrollProgress}%` }}
              className={styles.progressBar}
            />
          </div>

          {/* About & Quote — fills first viewport, centered */}
          <div className={styles.aboutContainer}>
            <section id="about" className={`section ${styles.fadeInDelayed}`}>
              <div>
                <hr className={styles.newspaperRuleThick} />
                <h2 className={styles.sectionTitle}>About</h2>
                <hr className={styles.newspaperRule} />
                <div className={styles.aboutContentWrapper}>
                  <p>
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
            {quoteSection && <Quote {...quoteSection} />}
          </div>

          {/* Professional Experience Section */}
          <section
            id="experience"
            className={`section ${styles.fadeInDelayed}`}
          >
            <div>
              <hr className={styles.newspaperRuleThick} />
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              <hr className={styles.newspaperRule} />
              <div className={styles.experienceGrid}>
                {experienceSection &&
                  experienceSection?.experiences?.map(
                    (experience: ExperienceProps) => (
                      <Experience key={experience.title} {...experience} />
                    ),
                  )}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className={`section ${styles.fadeInDelayed}`}>
            <div>
              <hr className={styles.newspaperRuleThick} />
              <h2 className={styles.sectionTitle}>Education</h2>
              <hr className={styles.newspaperRule} />
              <div className={styles.experienceGrid}>
                {educationSection &&
                  educationSection?.entries?.map((entry: EducationProps) => (
                    <Education key={entry.title} {...entry} />
                  ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className={`section ${styles.fadeInDelayed}`}>
            <div>
              <hr className={styles.newspaperRuleThick} />
              <h2 className={styles.sectionTitle}>Skills</h2>
              <hr className={styles.newspaperRule} />
              {skillsSection && <Skills {...skillsSection} />}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className={`section ${styles.fadeInDelayed}`}>
            <hr className={styles.newspaperRuleThick} />
            <h2 className={styles.sectionTitle}>Projects</h2>
            <hr className={styles.newspaperRule} />

            <div className={styles.experienceGrid}>
              {projectSection &&
                projectSection?.projects?.map((project: ProjectProps) => (
                  <Project {...project} />
                ))}
            </div>
          </section>

          <div style={{ paddingBottom: "var(--space-3xl)" }} />
        </div>
      </div>
    </>
  );
};

export default Home;
