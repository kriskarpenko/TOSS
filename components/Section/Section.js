import useMobile from "../../utils/useMobile";
import styles from "./Section.module.css";

const Section = ({ children, pictureAfterText = false, picture, text }) => {
  return (
    <div className={styles.section}>
      {pictureAfterText ? null : picture}
      {text || children}
      {pictureAfterText ? picture : null}
    </div>
  );
};

const Section2 = ({
  children,
  pictureAfterText = false,
  picture,
  text,
  isMobile = false,
}) => {
  const mobile = useMobile(isMobile);
  return (
    <div className={mobile ? styles.sectionMobile : styles.sectionDesktop}>
      {isMobile && mobile}
      <p
        className={pictureAfterText ? styles.sectionLeft : styles.sectionRight}
      ></p>
      {picture}
      {text || children}
    </div>
  );
};

const Section3 = ({ children, pictureAfterText = false, picture, text }) => {
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
