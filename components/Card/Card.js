import styles from './Card.module.css';

const Card = ({ pictureSrc, text, children }) => {
  return (
    <div className={styles.wrapper}>
      {pictureSrc && <img className={styles.picture} src={pictureSrc} />}
      <div className={styles.text}>{text || children}</div>
    </div>
  );
};

export default Card;
