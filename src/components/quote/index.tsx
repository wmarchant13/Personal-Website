import styles from "./styles.module.scss";

export type QuoteProps = {
  text?: string;
  attribution?: string;
};

const Quote = ({ text, attribution }: QuoteProps) => {
  return (
    <section className={styles.quoteSection}>
      <div className={styles.quoteContainer}>
        <p className={styles.quoteContent}>{text}</p>
        {attribution && (
          <p className={styles.quoteAttribution}>{attribution}</p>
        )}
      </div>
    </section>
  );
};

export default Quote;
