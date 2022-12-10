import useMobile from "../../utils/useMobile";
import styles from "./Section.module.css";
import Image from "next/image";

const SectionDesktop = ({
  pictureSrc,
  pictureAfterText = false,
  text,
  children,
}) => {
  return (
    <div
      className={pictureAfterText ? styles.pictureAfterText : styles.wrapper}
    >
      {pictureSrc && <img src={pictureSrc} className={styles.picture} />}
      <div className={styles.text}>{text || children}</div>
    </div>
  );
};

const SectionMobile = ({ pictureSrc, text, children }) => {
  return (
    <div className={styles.wrapper}>
      {pictureSrc && <img className={styles.pictureMobile} src={pictureSrc} />}
      <div className={styles.text}>{text || children}</div>
    </div>
  );
};

const Section = (props) => {
  const isMobile = useMobile();
  return isMobile ? (
    <SectionMobile {...props} />
  ) : (
    <SectionDesktop {...props} />
  );
};

export default Section;
