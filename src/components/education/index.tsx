import styles from "./styles.module.scss";

export type EducationProps = {
  label?: string;
  title?: string;
  subtitle?: string;
  items?: string[];
};

const Education = ({ label, title, subtitle, items }: EducationProps) => {
  return (
    <div className={styles.educationCard}>
      <div className={styles.cardHeader}>
        {label && <div className={styles.cardLabel}>{label}</div>}
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardSubtitle}>{subtitle}</div>
      </div>
      {items && items.length > 0 && (
        <div className={styles.cardBody}>
          <ul className={styles.itemList}>
            {items.map((item, i) => (
              <li key={item ?? i}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Education;
