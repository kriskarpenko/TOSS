import { useCallback, useState } from "react";
import MenuLinks from "./MenuLinks";
import styles from "../NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
      <button onClick={onMenuTogle}>
        {menuOpen ? (
          <FontAwesomeIcon icon={faXmark} width="16" />
        ) : (
          <FontAwesomeIcon icon={faBars} width="20" />
        )}
      </button>
      {menuOpen && <MenuLinks />}
    </div>
  );
};

export default NavBarMobile;
