import styles from "./Section.module.css";

const Section = ({ children, pictureAfterText = false, picture, text }) => {
  return (
    <p className={styles.section}>
      {pictureAfterText ? null : picture}
      {text || children}
      {pictureAfterText ? picture : null}
    </p>
  );
};

export default Section;
