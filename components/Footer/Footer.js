import React from "react";
import styles from "./Footer.module.css";
import toss from "../common-consts/toss";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>Copyright &copy; {toss}</div>
    </>
  );
};

export default Footer;
