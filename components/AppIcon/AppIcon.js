import {
  FaSearch,
  FaSpider,
  FaBars,
  FaPhoneVolume,
  FaEnvelope,
  FaWhatsappSquare,
  FaFacebookSquare,
} from 'react-icons/fa';

const ICONS = {
  contact: FaPhoneVolume,
  default: FaSpider,
  email: FaEnvelope,
  facebook: FaFacebookSquare,
  logotype: ({ size, title }) => (
    <img src="./img/icons/icon.jpeg" width={size} height={size} title={title} alt={title} />
  ),
  menu: FaBars,
  search: FaSearch,
  whatsapp: FaWhatsappSquare,
};

const AppIcon = ({ name = 'default', size = 16, ...restOfProps }) => {
  const iconName = name.trim().toLowerCase();
  const ComponentToRender = ICONS[iconName];
  return <ComponentToRender size={size} {...restOfProps} />;
};

export default AppIcon;
