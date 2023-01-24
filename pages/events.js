import Section from '../components/Section';

const EventPage = () => {
  return (
    <div>
      <Section>
        <h1>Events</h1>
      </Section>
      <Section>
        <iframe
          src="https://player.vimeo.com/video/791852977?h=6ae4e88e53&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="848"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Concert in Monaco"
        ></iframe>

        <iframe
          src="https://player.vimeo.com/video/791868476?h=95842cd31f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          width="848"
          height="480"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Christmas gala concert"
        ></iframe>
      </Section>
    </div>
  );
};

export default EventPage;
