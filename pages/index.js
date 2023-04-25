import useMobile from '../utils/useMobile';
import Section from '../components/Section';
import Map from '../components/Map/Map';
import { CONFIG } from '../utils/consts';

export default function Home({}) {
  const isMobile = useMobile();

  return (
    <div>
      <div id="introduction">
        <Section>
          <h1>{CONFIG.website.title}</h1>
          <p>New generation singing school. A place where you can fulfill your dream with only one year of learning.</p>
        </Section>

        <Section pictureSrc="/img/photos/everyOneGarden.jpeg" customClass="introduction">
          <p>It is a residential establishment with a concert hall including.</p>
          <p>Located in the splendid setting of the western Ligurian Riviera.</p>
        </Section>
      </div>
      <hr />
      <div id="information">
        <Section>
          <h3>Training offers:</h3>
          <ul className="offersUl">
            <li>Opera singing, modern singing.</li>
            <li>Stage art</li>
            <li>Practice of the vocal repertoire</li>
            <li>Time management</li>
            <li>Psychological training</li>
          </ul>
        </Section>
        <Section>
          <h4>Practice of the vocal repertoire</h4>
          <p>
            The course aims at acquiring specific awareness of one&apos;s vocal peculiarities and technical-expressive
            abilities, built through a careful choice of the repertoire, with particular attention to phrasing, correct
            pronunciation and recitation of the text, adherence to the various musical and textual characteristics of
            the music sheet, and care for the performance and aesthetic aspects of traditions.
          </p>
        </Section>

        <Section>
          <h4>Time management</h4>
          <p>
            A course that specifies on managing time effectively and analyzing your personal schedule to achieve your
            goals. Exercising conscious control of time spent on specific activities, especially to increase
            effectiveness, efficiency, and productivity.
          </p>
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
          <h2>Psychology and Opera</h2>
          <p>
         A study investigated the effects of a training program focused on both performance and psychological well-being in singers. 
         Singing is considered a purely musical element that affects positively the soul. 
         Those who sing are able to balance, control, and shake their inner world!
          </p>
//           <p>
//             T. Tarskikh &quot;the art of music and the development of the emotional, cognitive and psychological aspects
//             of the individual&quot; Baccalaureato thesis in Psychology of Communication.
//           </p>
          <p>
            Opera singers are required to maintain a strong motivation and a capacity for self-regulation to cope with
            the stress and anxiety related to working conditions and psychological pressures.
          </p>
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
          The founder, Tamara Tarskikh, a Mezzosoprano with a brilliant career and Doctor of Communication Psychology,
          thanks to her long professional experience, offers to her young artists, with passion and creativity,
        </Section>
      </div>
      <hr />
      <div id="vision">
        <Section pictureSrc="/img/photos/tamaraEdward.jpeg">
          <p>
           Our mission is to achieve personal and professional success with only one year of learning, 
           the goal is to give students maximum knowledge of the Grande Musica showing passion for creativity,
           introspective growth, and dissemination of the Art.
          </p>
          <h3>Our vision is:</h3>
          <ul className="offersUl">
            <li>Theatre performance</li>
            <li>Concerts</li>
            <li>Admission to the conservatory</li>
            <li>Concourses & Masterclass</li>
            <li>Cinema</li>
          </ul>
        </Section>
      </div>
      <hr />
      <div className="staff">
        <Section pictureSrc="/img/photos/maestro.jpeg" pictureAfterText>
          <h2> Maestro</h2>

          <p>
            Francesco Barbagelata has been collaborating master and stage music director for the Puccini Festival 
            Foundation since 2016 and professor of the study of the score at the Academy of High Specialization 
            for Opera Singers and Master Collaborators of the Puccini Repertoire.
          </p>
          <p>
           He is the Choir Master and Stage Music Director of the Montenegrin National Theater in Podgorica. 
           He is a professor of piano accompaniment at the R.Franci Institute of Higher Music Studies in Siena and the L.  
           Boccherini Institute of Higher Music Studies in Lucca. He was a teacher of piano accompaniment for the academic year 2019-20 at the 
           G.B. Martin Conservatory of Bologna.
          </p>
        </Section>
        <Section pictureSrc="/img/photos/tatiana.jpeg">
          <h2>Opera Stage art</h2>
          <p>
            Tatyana Anisimova carries out artistic activities for our students. 
            She had finished the Odessa State Conservatory by the name of A. V. Negdanova in the class of Professor 
            G. A. Polivanova in 1992. Tatiana Anisimova was adopted into the collective of the Odessa State Academic 
            Opera and ballet house in the same year.
          </p>
          <p>
           Participation at theatres of Ukraine: Kyiv, Lviv. She took part in a structure of the Ukrainian Delegacy &quot;Mission of the Peace&quot; in 1993. 
           In 1995 the president of Ukraine L. Kuchma assigned her the rank &quot;The Honored Artist Of Ukraine&quot;. In 1996 - participated in the competition of Alfred Kraus. 
           She had taken third place. She also took second place in the competition of opera singers in Bilbao, Spain.
          </p>
        </Section>
        <Section pictureSrc="/img/photos/yulia.png" pictureAfterText>
          <h2> Time management</h2>
          <p>
            Yuliya Lyashuk is a writer and poet, she has successfully published 8 books. Yulia has founded an online
            edition of Coffee Time Journal - a channel of creativity, creation, vision, expansion, inspiration and new
            bold ideas. She is a welcomed speaker and motivator on forums of various formats. Yulia is an author and
            trainer of the personal growth program for the online coache&apos;s tour called &quot;New Plank&quot;.
            Author and coach of the program called &quot;Goal Setting and Time Management&quot;.
          </p>
        </Section>
      </div>
      <div id="map">
        <h2>We are here</h2>
        <Map />
      </div>
    </div>
  );
}
