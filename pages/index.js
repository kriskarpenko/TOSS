import useMobile from '../utils/useMobile';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import Map from '../components/Map/Map';
import { CONFIG } from '../utils/consts';
import Card from '../components/Card';

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div className={styles.content}>
      <div id="introduction" className="wrapper">
        <Section>
          <h1>{CONFIG.website.title}</h1>A new generation singing school. A place where you can fullfil your dream with
          only one year of learning.
        </Section>

        <Section pictureSrc="/img/photos/everyOneGarden.jpeg" />

        <Section>
          Located in the splendid setting of the western Ligurian Riviera.
          <br />
          It is a residential with a concert hall including.
        </Section>
        <hr />
      </div>
      <div id="information">
        <Section>
          <h3 className={styles.text}>Training offers:</h3>
          <ul>
            <li>Opera singing, modern singing.</li>
            <li>Stage art</li>
            <li>Practice of the vocal repertoire</li>
            <li>Time management </li>
            <li>Psychological training</li>
          </ul>
        </Section>
        <Section>
          <h4>Practice of the vocal repertoire </h4>
          The course aims at acquiring specific awareness of one&apos;s vocal peculiarities and technical-expressive
          abilities, built through a careful choice of the repertoire, with particular attention to phrasing, correct
          pronunciation and recitation of the text, adherence to the various musical and textual characteristics of the
          music sheet, and care for the performance and aesthetic aspects of traditions.
        </Section>

        <Section>
          <h4>Time management </h4>A course that specifies on managing time effectively and analyzing your personal
          schedule to achieve your goals. Exercising conscious control of time spent on specific activities, especially
          to increase effectiveness, efficiency, and productivity.
        </Section>

        <Section>
          <h4>Psychological training</h4>
          An indispensable type of training to help cope with the stress and anxiety related to the working conditions
          and psychological pressures of the theatre, overcoming stage and performance anxiety.
        </Section>
        <hr />
      </div>
      <div id="psycology">
        <Section>
          <h2>Psychology and Opera </h2>A study investigated the effects of a training program focused on both
          performance and psychological well- being in singers. Singing is considered as a pure musical element which
          affects positively on the soul. Those who sing are able to balance, control and shake their inner world!
          <br />
          *** T. Tarskikh &quot;the art of music and the development of the emotional, cognitive and psychological
          aspects of the individual / Baccalaureato thesis in Psychology of Communication.
          <br />
          Opera singers are required to maintain a strong motivation and a capacity for self-regulation to cope with the
          stress and anxiety related to working conditions and psychological pressures.
        </Section>
      </div>
      <div id="tamara">
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
        <hr />
      </div>
      <div id="vision">
        <Section pictureSrc="/img/photos/tamaraEdward.jpeg">
          Our mission is to achieve personal and professional successes with only one year of learning, the goal is to
          give students maximum knowledge of the Grande Musica showing passion for creativity, introspective growth and
          dissemination of the Art.
          <br />
          <h3 className={styles.text}>Our vision is:</h3>
          <ul>
            <li>Theatre performance </li>
            <li>Concerts</li>
            <li>Admission to the conservatory</li>
            <li>Concourses & Masterclass</li>
            <li>Cinema</li>
          </ul>
        </Section>
        <hr />
      </div>
      <div
        id="stuff"
        style={
          isMobile
            ? { display: 'flex', flexDirection: 'column' }
            : { display: 'flex', flexDirection: 'row', placeContent: 'center', alignItems: 'baseline' }
        }
      >
        <Section>
          <h2> Maestro</h2>
          <Card pictureSrc="../img/photos/maestro.jpeg">
            Francesco Barbagelata, he has been collaborating master and stage music director for the Puccini Festival
            Foundation since 2016 and professor of study of the score at the Academy of High Specialization for Opera
            Singers and Master Collaborators of the Puccini Repertoire.
            <br />
            <p> </p>
            <br />
            He is Choir Master and Stage Music Director of the Montenegrin National Theater in Podgorica. He is
            professor of piano accompaniment at the R.Franci Institute of Higher Music Studies in Siena and the L.
            Boccherini Institute of Higher Music Studies in Lucca. He was a teacher of piano accompaniment for the
            academic year 2019-20 at the G.B.Martini Conservatory of Bologna.
            <br />
          </Card>
        </Section>
        <Section>
          <h2> Vocal Couch</h2>
          <Card pictureSrc="../img/photos/tatiana.jpeg">
            Tatiana Anisimova had finished the Odesa State conservatory by the name of A. V. Negdanova in 1992.Tatiana
            Anisimova was adopted in the collective of the Odessa State Academic opera and ballet house at the same
            year. She participated in the Maiden International competition by the name of M. V. Lysenko, where she
            became the winner of the Maiden premium and the owner of Grand Prix.
            <br />
            In 1997 she took part in statement of opera “ Cavaleria rusticana”, where she starred Santuzzi in
            Las-Palmas, Spain.
            <br />
          </Card>
        </Section>
      </div>
      <div
        id="map"
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
          <Map mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.526484549455!2d8.019124!3d43.8863615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26d458b28d997%3A0x6bcb6afd3e36f8a1!2sTamara&#39;s%20Opera%20Singers%20School!5e0!3m2!1sen!2sit!4v1673052579290!5m2!1sen!2sit" />
        </Section>
      </div>
    </div>
  );
}
