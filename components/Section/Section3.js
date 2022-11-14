import styles from "./Section.module.css";

const Section = ({ children, pictureAfterText = false, picture, text }) => {
  return (
    <p className={pictureAfterText ? styles.sectionLeft : styles.sectionRight}>
      {picture}
      {text || children}
    </p>
  );
};

export default Section;
