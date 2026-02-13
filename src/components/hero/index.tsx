import type { ReactNode } from "react";
import styles from "./styles.module.scss";

export type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
  external?: boolean;
  download?: string;
};

export type HeroProps = {
  name?: string;
  preTitle?: string;
  occupation?: string;
  email?: string;
  phone?: string;
  socialLinks?: SocialLink[];
};

const Hero = ({
  name,
  preTitle,
  occupation,
  email,
  phone,
  socialLinks,
}: HeroProps) => {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.heroContent}>
        {/* Newspaper Author Block */}
        <div className={styles.authorBlock}>
          {/* Name & Title */}
          <div className={styles.nameWrapper}>
            <div className={styles.heroTitle}>{preTitle}</div>
            <div className={styles.heroName}>{name}</div>
            <div className={styles.heroOccupation}>{occupation}</div>
          </div>

          {/* Divider */}
          <div className={styles.dividerWrapper}>
            <hr className={styles.heroDivider} />
          </div>

          {/* Contact Details */}
          <div className={styles.contactDetails}>
            {email && (
              <a
                href={`mailto:${email}`}
                className={styles.heroEmail}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8d4b8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f5f1e8")}
              >
                {email}
              </a>
            )}
            {phone && <span className={styles.heroPhone}>{phone}</span>}
          </div>
        </div>

        {/* Social Icons */}
        {socialLinks && socialLinks.length > 0 && (
          <div className={styles.socialIconContainer}>
            {socialLinks.map((link, index) => (
              <a
                className={styles.iconTooltip}
                key={link.label}
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                {...(link.download ? { download: link.download } : {})}
                aria-label={link.label}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.15)";
                  e.currentTarget.style.color = "#e8d4b8";
                  const tooltip = e.currentTarget.querySelector(
                    `[id^=tooltip-${index}]`,
                  );
                  if (tooltip) (tooltip as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#f5f1e8";
                  const tooltip = e.currentTarget.querySelector(
                    `[id^=tooltip-${index}]`,
                  );
                  if (tooltip) (tooltip as HTMLElement).style.opacity = "0";
                }}
              >
                {link.icon}
                <span id={`tooltip-${index}`} className={styles.tooltipLabel}>
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
