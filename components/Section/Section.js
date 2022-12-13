import useMobile from '../../utils/useMobile';
import styles from './Section.module.css';

export const SectionDesktop = ({ children, pictureAfterText = false, pictureSrc, text }) => {
  return (
    <div className={`${styles.wrapper} ${styles.flexRow} ${pictureAfterText && styles.pictureAfterText}`}>
      {pictureSrc && <img src={pictureSrc} className={styles.picture} />}
      <div className={styles.text}>{text || children}</div>
    </div>
  );
};

export const SectionMobile = ({ pictureSrc, text, children }) => {
  return (
    <div className={styles.wrapper + ' ' + styles.flexColumn}>
      {pictureSrc && <img className={styles.pictureMobile} src={pictureSrc} />}
      <div className={styles.text}>{text || children}</div>
    </div>
  );
};

const Section = (props) => {
  const isMobile = useMobile();
  return isMobile ? <SectionMobile {...props} /> : <SectionDesktop {...props} />;
};

export default Section;
