import { useMediaQuery } from "react-responsive";
import React from "react";
import styles from "./NavBar.module.css";
import NavBarDesktop from "./NavComponents/NavBarDesktop";
import NavBarMobile from "./NavComponents/NavBarMobile";
import Link from "next/link";

const NavBar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
        <Link href="./">
          <img src="./icon.jpeg" width="40" height="40" />
        </Link>
      </div>

      {isMobile ? <NavBarMobile /> : <NavBarDesktop />}
    </nav>
  );
};

export default NavBar;
