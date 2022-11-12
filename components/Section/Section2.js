import styles from "./Section.module.css";

const Section = ({ children, pictureAfterText = false, picture, text }) => {
  return (
    <p
      className={styles.section}
      style={pictureAfterText ? { flexDirection: "row-reverse" } : undefined}
    >
      {picture}
      {text || children}
    </p>
  );
};

export default Section;
