import React from "react";
import homeStyles from "../home-page/home.module.scss";
import styles from "./styles.module.scss";

export type AwardItem = {
  label?: string;
  title?: string;
  subtitle?: string;
  children?: string;
  icon?: React.ReactNode;
};

type AwardsProps = {
  awards?: AwardItem[];
};

const Awards = ({ awards }: AwardsProps) => {
  return (
    <section id="awards" className={`section ${homeStyles.fadeInDelayed}`}>
      <hr className={homeStyles.newspaperRuleThick} />
      <h2 className={homeStyles.sectionTitle}>Awards & Extracurriculars</h2>
      <hr className={homeStyles.newspaperRule} />

      <div className={styles.experienceGrid}>
        {awards?.map((a, i) => (
          <div key={a.title ?? i} className={styles.experienceCard}>
            <div className={styles.cardHeader}>
              {a.icon && <div className={styles.awardIcon}>{a.icon}</div>}
              {a.label && <div className={styles.cardLabel}>{a.label}</div>}
              {a.title && <div className={styles.cardTitle}>{a.title}</div>}
              {a.subtitle && <div className={styles.cardSubtitle}>{a.subtitle}</div>}
            </div>
            {a.children && <div className={styles.cardBody}>{a.children}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Awards;
