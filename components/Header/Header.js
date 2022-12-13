import NavBar from '../NavBar';
import Link from 'next/link';
import styles from './Header.module.css';
import AppIcon from '../AppIcon';

const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <Link href="/">
          <AppIcon name="logotype" size={32} />
        </Link>
        <NavBar />
      </div>
      <div className={styles.halfEllipse} />
    </div>
  );
};

export default Header;
