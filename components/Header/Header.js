import NavBar from '../NavBar';
import Link from 'next/link';
import styles from './Header.module.css';
import AppIcon from '../AppIcon';
import useMobile from '../../utils/useMobile';
import CONFIF, { CONFIG } from '../../utils/consts';

const Header = () => {
  const isMobile = useMobile();
  return (
    <div>
      <div className={styles.header}>
        <div className={isMobile ? styles.headerLogoMobile : styles.headerLogo}>
          <Link href="/">
            <AppIcon name="logotype" size={43} />
          </Link>
          {CONFIG.website.title}
        </div>
        <NavBar />
      </div>
      <div className={styles.halfEllipse} />
    </div>
  );
};

export default Header;
