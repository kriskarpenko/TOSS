import { useCallback, useState } from 'react';
import MenuLinks from './MenuLinks';
import styles from './NavBarMobile.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(localStorage.getItem('menuOpen') ?? false);

  const onMenuTogle = useCallback(() => {
    setMenuOpen((oldValue) => {
      const newValue = !oldValue;
      localStorage.setItem('menuOpen', newValue);
      return newValue;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <button className={styles.menuButton} onClick={onMenuTogle}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      {menuOpen && <MenuLinks className={styles.menuLinks} />}
    </div>
  );
};

export default NavBarMobile;
