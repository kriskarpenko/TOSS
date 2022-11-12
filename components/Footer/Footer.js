import React from "react";
import styles from "./Footer.module.css";
import { CONFIG } from "../../utils/consts";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Copyright &copy; {new Date().getFullYear()} {CONFIG.website.title}
    </footer>
  );
};

export default Footer;
