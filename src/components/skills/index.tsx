import styles from "./styles.module.scss";

export type SkillBlockProps = {
  title?: string;
  skills?: string[];
};

export type SkillsProps = {
  blocks?: SkillBlockProps[];
};

const Skills = ({ blocks }: SkillsProps) => {
  return (
    <div className={styles.skillsGrid}>
      {blocks?.map((block) => (
        <div className={styles.skillBlock} key={block.title}>
          <h3 className={styles.skillTitle}>{block.title}</h3>
          <ul className={styles.skillList}>
            {block.skills?.map((skill) => (
              <li className={styles.skillTag} key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Skills;
