import type { ReactNode } from "react";
import styles from "./styles.module.scss";

export type ExperienceProps = {
  label?: string;
  title?: string;
  subtitle?: string;
  children?: string;
  skills?: Array<string>;
  skillIcons?: ReactNode[];
};

const Experience = ({
  label,
  title,
  subtitle,
  children,
  skills,
  skillIcons,
}: ExperienceProps) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.cardHeader}>
        {label && <div className={styles.cardLabel}>{label}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>{subtitle}</div>
      </div>
      <p className={styles.cardBody}>{children}</p>
      {skills && skills.length > 0 && (
        <div className={styles.cardBody}>
          <ul className={styles.skillList}>
            {skills.map((skill) => (
              <li className={styles.skillTag} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
      {skillIcons && skillIcons.length > 0 && (
        <div className={styles.techIconWrapper}>
          {skillIcons.map((icon) => icon)}
        </div>
      )}
    </div>
  );
};

export default Experience;
