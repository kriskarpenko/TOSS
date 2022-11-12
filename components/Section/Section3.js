import styles from "./Section.module.css";

const Section = ({ children, pictureAfterText = false, picture, text }) => {
  return (
    <p className={pictureAfterText ? styles.sectionRight : styles.sectionLeft}>
      {picture}
      {text || children}
    </p>
  );
};

export default Section;
