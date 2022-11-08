import React from "react";
import toss from "../common-consts/toss";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.title}>{toss}</div>
    </div>
  );
};

export default NavBar;
