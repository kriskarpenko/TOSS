import styles from "../styles/Home.module.css";

export default function Home({}) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.container}>
          <p style={{ display: "inline" }}>
            <img src="logo.jpeg" width={350} />
          </p>
        </div>
      </main>
    </div>
  );
}
