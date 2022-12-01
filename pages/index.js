import useMobile from "../utils/useMobile";
import styles from "../styles/Home.module.css";
import Section from "../components/Section";

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div className={styles.content}>
      <div
        style={
          !isMobile
            ? {
                lineHeight: "1.15",
                fontSize: "4rem",
                marginLeft: "3.2rem",
                textTransform: "uppercase",
              }
            : {
                textTransform: "uppercase",
                lineHeight: "1.15",
                fontSize: "3.5rem",
              }
        }
      >
        <Section text="We are" />
        <Section
          picture={
            !isMobile ? (
              <img
                src="./img/photos/everyOneGarden.jpeg"
                width="100%"
                height="30%"
              />
            ) : (
              <img
                src="./img/photos/everyOneGarden.jpeg"
                width="100%"
                height="20%"
              />
            )
          }
        />
      </div>

      <div className={styles.text} style={{ margin: "2rem" }}>
        <Section
          pictureAfterText
          picture={
            !isMobile ? (
              <img
                // className={styles.onOverlay}
                src="./img/logo.png"
                width="360rem"
                height="470rem"
              />
            ) : (
              <img
                // className={styles.onOverlay}
                style={{ minWidth: "100px" }}
                src="./img/logo.png"
                width="40%"
                height="30%"
              />
            )
          }
        >
          A new generation singing school. A place where you can fullfil your
          dream, of becoming greate singer, with only one year of learning.
        </Section>
      </div>
      <hr />

      <div className={styles.text}>
        <Section
          text="Our mission is to achieve personal and professional successes with only one year of learning, the goal is to give
        students maximum knowledge of the Grande Musica showing passion for creativity, introspective growth
        and dissemination of the Art.
        "
        ></Section>
      </div>
      <div
        style={
          !isMobile
            ? {
                display: "flex",
                padding: "1.25rem",
                justifyContent: "center",
                alignContent: "center",
              }
            : {
                margin: "2rem",
                display: "flex",
                flexDirection: "collumn",
              }
        }
      >
        <h2 className={styles.text}>Our goals are:</h2>
        <ul>
          <li>Concourses & Masterclass</li>
          <li>Admission to the conservatory</li>
          <li>Theatre performance </li>
          <li>Cinema</li>
        </ul>
      </div>

      <div className={styles.text} style={{ margin: "2rem" }}>
        <Section
          pictureAfterText
          picture={
            !isMobile ? (
              <img
                // className={styles.onOverlay}
                src="./img/photos/tamara.jpeg"
                width="400px"
                height="30%"
              />
            ) : (
              <img
                // className={styles.onOverlay}
                src="./img/photos/tamara.jpeg"
                width="30%"
                height="20%"
              />
            )
          }
        >
          Hello, I am Tamara Tarskikh, a professional Mezzosoprano singer and
          vocal coach. <br />
          After decades of living the dream of my life though performing in the
          biggest theatres of the Europe. I decided to open Tamara’s Opera
          Singers’ school, a school which I would like to have when I was at the
          begining of my career. The main point of the school is to help young
          artists to fulfil their dreams in show business. I offer my knowledge
          in signing, timemanagment amd the art of performing via a new
          innovative teaching method, that I have discovered.
        </Section>
      </div>
      <div
        style={
          !isMobile
            ? {
                display: "flex",
                flexDirection: "column",
                padding: "1.25rem",
                justifyContent: "center",
                alignContent: "center",
              }
            : {
                display: "flex",
                margin: "2rem",
                flexDirection: "collumn",
              }
        }
      >
        <h2>We are here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46002.92463091408!2d8.011477999999999!3d43.8934808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26c28624f3fe5%3A0xac2676331e1ebb04!2s18100%20Imperia%2C%20Province%20of%20Imperia!5e0!3m2!1sen!2sit!4v1669667096493!5m2!1sen!2sit"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {/* <img
          width="90%"
          height="30%"
          src="./img/photos/Imperia.jpeg"
          alt="Di Julian Nyča - Opera propria, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=39657678"
        /> */}
      </div>
    </div>
  );
}
