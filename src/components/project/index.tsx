import type { ReactNode } from "react";
import styles from "./styles.module.scss";

export type ProjectProps = {
  title?: string;
  subtitle?: string;
  children?: string;
  skills?: Array<string>;
  skillIcons?: ReactNode[];
};

const Project = ({
  title,
  subtitle,
  children,
  skills,
  skillIcons,
}: ProjectProps) => {
  return (
    <div className={styles.experienceCard}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>{subtitle}</div>
      </div>
      <p className={styles.cardBody}>{children}</p>
      <div className={styles.cardBody}>
        <ul className={styles.skillList}>
          {skills?.map((skill) => (
            <li className={styles.skillTag} key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.techIconWrapper}>
        {skillIcons?.map((icon) => icon)}
      </div>
    </div>
  );
};

export default Project;
