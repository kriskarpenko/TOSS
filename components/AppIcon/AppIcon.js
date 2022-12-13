import { FaSearch, FaSpider, FaBars, FaPhoneVolume, FaEnvelope, FaWhatsappSquare } from 'react-icons/fa';

const ICONS = {
  default: FaSpider,
  search: FaSearch,
  menu: FaBars,
  email: FaEnvelope,
  contact: FaPhoneVolume,
  whatsapp: FaWhatsappSquare,
  logotype: ({ size, title }) => (
    <img src="./img/icons/icon.jpeg" width={size} height={size} title={title} alt={title} />
  ),
};

const AppIcon = ({ name = 'default', size = 16, ...restOfProps }) => {
  const iconName = name.trim().toLowerCase();
  const ComponentToRender = ICONS[iconName];
  return <ComponentToRender size={size} {...restOfProps} />;
};

export default AppIcon;
