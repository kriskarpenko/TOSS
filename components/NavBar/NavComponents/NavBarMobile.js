import { useCallback, useState } from "react";
import MenuLinks from "./MenuLinks";
import styles from "../NavBar.module.css";

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
    <div className={styles.mobile}>
      <button onClick={onMenuTogle}>{menuOpen ? "X" : "?"}</button>
      {menuOpen && <MenuLinks />}
    </div>
  );
};

export default NavBarMobile;
