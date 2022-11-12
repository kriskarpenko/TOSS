import React from "react";
import MenuLinks from "./MenuLinks";
import styles from "../NavBar.module.css";

const NavBarDesktop = () => {
  return (
    <div className={styles.desktop}>
      <MenuLinks />
    </div>
  );
};

export default NavBarDesktop;
