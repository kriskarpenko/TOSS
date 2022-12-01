import { useCallback, useState } from "react";
import MenuLinks from "./MenuLinks";
import styles from "./NavBarMobile.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";

const NavBarMobile = () => {
  const [menuOpen, setMenuOpen] = useState(
    localStorage.getItem("menuOpen") ?? false
  );

  const onMenuTogle = useCallback(() => {
    setMenuOpen((oldValue) => {
      const newValue = !oldValue;
      localStorage.setItem("menuOpen", newValue);
      return newValue;
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      <Button className={styles.menuButton} onClick={onMenuTogle}>
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </Button>
      {menuOpen && <MenuLinks className={styles.menuLinks} />}
    </div>
  );
};

export default NavBarMobile;

const Button = styled.button`
  background-color: transparent;
`;
