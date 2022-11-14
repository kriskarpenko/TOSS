import React from "react";
import Section from "../../components/Section";
import styles from "./ContentMain.module.css";

const ContentMain = () => {
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
              src="/logo.jpeg"
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
};

export default ContentMain;
