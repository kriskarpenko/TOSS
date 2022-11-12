import styles from "../styles/Home.module.css";
import Section from "../components/Section";

export default function Home({}) {
  return (
    <main className={styles.main}>
      <div className={styles.gridContainer}>
        <div className={styles.gridContainerTitle}>
          <p className={styles.title}>We are</p>
        </div>
        <div className={styles.gridContainerLogo}>
          <Section
            pictureAfterText
            picture={
              <img
                // className={styles.onOverlay}
                src="/logo.jpeg"
                width="500"
                height="625"
              />
            }
          ></Section>
        </div>
        <div className={styles.gridContainerDescribtion}>
          <Section></Section>A new generation singing school.
        </div>
      </div>
    </main>
  );
}
