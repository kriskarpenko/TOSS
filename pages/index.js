import useMobile from '../utils/useMobile';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import Map from '../components/Map/Map';
import { CONFIG } from '../utils/consts';

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div className={styles.content}>
      <Section>
        <h1>{CONFIG.website.title}</h1>
      </Section>

      <Section pictureSrc="/img/photos/everyOneGarden.jpeg" />

      <Section>
        A new generation singing school. A place where you can fullfil your dream, of becoming greate singer, with only
        one year of learning.
      </Section>
      <div>
        <Section
          pictureAfterText
          pictureSrc="/img/photos/tamara.jpeg"
          // text="Hello, I am Tamara Tarskikh, a professional Mezzosoprano singer and
          // vocal coach.
          // After decades of living the dream of my life though performing in the
          // biggest theatres of the Europe. I decided to open Tamara’s Opera
          // Singers’ school, a school which I would like to have when I was at the
          // begining of my career. The main point of the school is to help young
          // artists to fulfil their dreams in show business. I offer my knowledge
          // in signing, timemanagment amd the art of performing via a new
          // innovative teaching method, that I have discovered."
        >
          The founder, Tamara Tarskikh, Mezzosoprano with a brilliant career and Doctor of Communication Psychology,
          thanks to her long professional experience, offers to her young artists, with passion and creativity,
        </Section>
      </div>

      <hr />

      <Section pictureSrc="/img/photos/tamaraEdward.jpeg">
        <Section
          text="Our mission is to achieve personal and professional successes with only one year of learning, the goal is to give
        students maximum knowledge of the Grande Musica showing passion for creativity, introspective growth
        and dissemination of the Art.
        "
        ></Section>
        <br />
        <h2 className={styles.text}>Our vision is:</h2>
        <ul>
          <li>Theatre performance </li>
          <li>Concerts</li>
          <li>Admission to the conservatory</li>
          <li>Concourses & Masterclass</li>
          <li>Cinema</li>
        </ul>
      </Section>
      <hr />
      <Section pictureSrc="../img/photos/maestro.jpeg" pictureAfterText>
        <h2> Maestro</h2>
        Maestro Francesco Barbagelata has performed at the Teatro Carlo Felice in Genoa with the Paganini Orchestra in
        O.Respighi`&apos;`s `&lsquo;`Fontane di Roma`&lsquo;`, `&lsquo;`Ma mère l`&apos;`oye`&lsquo;` by M.Ravel,
        `&lsquo;`Three pieces for youth orchestra`&lsquo;` by G Turchi, `&lsquo;`The firebird`&lsquo;` by I. Stravinsky
        alternating piano and celesta. He collaborated for several years in the stage art course held by the director
        Lorenza Codignola and in the `&lsquo;`Vocal laboratory of Chamber Music`&lsquo;`, held by Soprano Carmen Vilalta
        and Maestro Massimiliano Damerini at the Conservatory N. Paganini. He has been a master collaborator in
        specialization courses held by Barbara Frittoli, Fiorenza Cedolins, Annunziata Lia Lantieri, Luciana Serra,
        Alessandra Rossi, Irene Cerboncini, Linda Campanella, Bernadette Manca di Nissa, Raffaella Ambrosino, Ugo
        Benelli, Andrea Elena, Luis Alva, Paolo Montarsolo and Claudio Ottino.
      </Section>

      <div
        style={
          !isMobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                padding: '1.25rem',
                justifyContent: 'center',
                alignContent: 'center',
              }
            : {
                display: 'flex',
                margin: '2rem',
                flexDirection: 'collumn',
              }
        }
      >
        <Section>
          <h2>We are here</h2>
          <Map mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46002.92463091408!2d8.011477999999999!3d43.8934808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26c28624f3fe5%3A0xac2676331e1ebb04!2s18100%20Imperia%2C%20Province%20of%20Imperia!5e0!3m2!1sen!2sit!4v1669667096493!5m2!1sen!2sit" />
        </Section>
      </div>
    </div>
  );
}
