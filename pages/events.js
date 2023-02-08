import Section from '../components/Section';
import useMobile from '../utils/useMobile';

const EventPage = () => {
  const isMobile = useMobile();
  return (
    <div>
      <Section>
        <h1>Events</h1>
        <h2>Upcoming event</h2>
      </Section>
      <Section pictureSrc="/img/logoDiCita.jpeg" customClass="introduction">
        <h2>Spring Concert</h2>
        <h3>Mozart & Cervo Liguria </h3>
        <h3>Opéra Le nozze di Figaro </h3>
        <p>
          Young talents and soloists of Tamara&apos;s Opera Singers School are taking part in the program &quot;Le nozze di
          Figaro&quot;:
        </p>
        <ul className="offersUl">
          <li>Vocal Couch - Tamara Tarskikh</li>
          <li>Maestro - Francesco Barbagelata</li>
          <li>Stage director - Elena Beck</li>
        </ul>
      </Section>
      <Section pictureSrc="/img/photos/cervoTown.jpeg" />
      <div>
        {/* <iframe
          src="https://player.vimeo.com/video/791852977?h=6ae4e88e53&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width={!isMobile ? '848' : '300'}
          height={!isMobile ? '448' : '300'}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Concert in Monaco"
        ></iframe> */}
        <iframe
          src="https://player.vimeo.com/video/791868476?h=95842cd31f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width={!isMobile ? '848' : '300'}
          height={!isMobile ? '448' : '300'}
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Christmas gala concert"
        ></iframe>
      </div>
    </div>
  );
};

export default EventPage;
