import { useMediaQuery } from "react-responsive";
import React from "react";
import styles from "./NavBar.module.css";
import NavBarDesktop from "./NavComponents/NavBarDesktop";
import NavBarMobile from "./NavComponents/NavBarMobile";

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <nav className={styles.navBar}>
      {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
    </nav>
  );
};

export default NavBar;
