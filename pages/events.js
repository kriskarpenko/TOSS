import ReactPlayer from 'react-player';
import Section from '../components/Section';

const EventPage = () => {
  return (
    <div>
      <Section>
        <h1>Events</h1>
        <ReactPlayer url="https://www.facebook.com/watch/?v=444399894429348" controls />
      </Section>
    </div>
  );
};

export default EventPage;
