import useMobile from "../../utils/useMobile";

const Map = ({ mapUrl }) => {
  const isMobile = useMobile();
  return (
    <div>
      {mapUrl && (
        <iframe
          src={mapUrl}
          style={isMobile ? { maxWidth: 280 } : { width: 1000 }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      )}
    </div>
  );
};

export default Map;
