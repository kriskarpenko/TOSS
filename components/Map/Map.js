import useMobile from '../../utils/useMobile';

const Map = () => {
  const isMobile = useMobile();
  return (
    <div
      style={
        isMobile
          ? { width: 'fit-content', padding: '1rem', paddingBlockStart: 0 }
          : { width: '100%', display: 'flex', alignContent: 'center' }
      }
    >
      <iframe
        style={{ border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.526485557696!2d8.016935315272688!3d43.88636147911395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d26d458b28d997%3A0x6bcb6afd3e36f8a1!2sTamara&#39;s%20Opera%20Singers%20School!5e0!3m2!1sen!2sit!4v1673378218209!5m2!1sen!2sit"
        width="110%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
