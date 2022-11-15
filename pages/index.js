import useMobile from "../utils/useMobile";
import styles from "../styles/Home.module.css";
import Section from "../components/Section";

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div className={styles.gridContainer}>
      <p className={styles.titleLeft}>We are</p>
      <div className={styles.description}>
        <Section
          text="A new generation singing school. A place where you can fullfil your
      dream, of becoming greate singer, with only one year of learning."
          picture={
            <img
              // className={styles.onOverlay}
              src="./img/logo.png"
              width="400"
              height="500"
            />
          }
        ></Section>
      </div>
      <div className={styles.gridContainerDescribtion}>
        <Section></Section>
      </div>
    </div>
  );
}
