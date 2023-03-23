import Section from '../components/Section';
import useMobile from '../utils/useMobile';

const EventPage = () => {
  const isMobile = useMobile();
  return (
    <div customClass="introduction">
      <Section>
        <h1>Events</h1>
        <h2>Upcoming event</h2>
      </Section>
      <Section customClass="introduction">
        <h2>Spring Concert</h2>
        <h3>Mozart & Cervo Liguria </h3>
        <iframe
          width={!isMobile ? '848' : '300'}
          height={!isMobile ? '548' : '300'}
          src="https://www.youtube.com/embed/tcqfvO9tBP8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* <h3>Opéra Le nozze di Figaro </h3>
        <p>
          Young talents and soloists of Tamara&apos;s Opera Singers School are presenting &quot;Le nozze di
          Figaro&quot;:
        </p>
        <ul className="offersUl">
          <li>Vocal Couch - Tamara Tarskikh</li>
          <li>Maestro - Francesco Barbagelata</li>
          <li>Stage director - Elena Beck</li>
        </ul> */}
      </Section>
      <Section>
        <h2>Past events</h2>
        <Section customClass="introduction">
          <h2>Concert Rehearsal</h2>
          <iframe
            width={!isMobile ? '848' : '300'}
            height={!isMobile ? '548' : '300'}
            src="https://www.youtube.com/embed/_yvnReCO43M"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Section>

        <div>
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
      </Section>
    </div>
  );
};

export default EventPage;
