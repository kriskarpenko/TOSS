import useMobile from '../utils/useMobile';
import styles from '../styles/Home.module.css';
import Section from '../components/Section';
import Map from '../components/Map/Map';
import { CONFIG } from '../utils/consts';

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div className={styles.content}>
      <div id="introduction">
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
      <div id="maestro">
        <Section pictureSrc="../img/photos/maestro.jpeg" pictureAfterText>
          <h2> Maestro</h2>
          Francesco Barbagelata, born in Genoa in 1979, graduated with full marks in 1999 under the guidance of Maestro
          Franco Trabucco at the N. Paganini Conservatory in Genoa, where he also undertook the study of composition
          with Maestro Luigi Giachino and attended (from 2001 to 2003) the specialization courses for Master
          collaborators as part of the &quot;Post diploma specialization courses held by M ° Riccardo Marsano and
          the&quot; Music and image &quot;course held by M ° Carlo Savina (director and arranger of the music de
          &quot;The Godfather&quot;).
          <br />
          <p> </p>
          <br />
          Francesco Barbagelata, born in Genoa in 1979, graduated with full marks in 1999 under the guidance of Maestro
          Franco Trabucco at the N. Paganini Conservatory in Genoa, where he also undertook the study of composition
          with Maestro Luigi Giachino and attended (from 2001 to 2003) the specialization courses for Master
          collaborators as part of the &quot;Post diploma specialization courses held by M ° Riccardo Marsano and
          the&quot; Music and image &quot;course held by M ° Carlo Savina (director and arranger of the music de
          &quot;The Godfather&quot).
          <br />
          <p> </p>
          <br />
          Francesco Barbagelata, born in Genoa in 1979, graduated with full marks in 1999 under the guidance of Maestro
          Franco Trabucco at the N. Paganini Conservatory in Genoa, where he also undertook the study of composition
          with Maestro Luigi Giachino and attended (from 2001 to 2003) the specialization courses for Master
          collaborators as part of the &quot;Post diploma specialization courses held by M ° Riccardo Marsano and
          the&quot; Music and image &quot; course held by M ° Carlo Savina (director and arranger of the music de
          &quot;The Godfather&quot;).
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
          <Map mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.526466248342!2d8.016909315272715!3d43.886361879114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26c26acfe1575%3A0x33cd25671e40d33d!2sVia%20delle%20Valli%2C%2058%2C%2018100%20Imperia%20IM!5e0!3m2!1sen!2sit!4v1672879586958!5m2!1sen!2sit" />
        </Section>
      </div>
    </div>
  );
}
