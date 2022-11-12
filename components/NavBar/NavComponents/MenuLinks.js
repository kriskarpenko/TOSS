import Link from "next/link";
import React from "react";
import styles from "../NavBar.module.css";

const MenuLinks = () => {
  return (
    <ul className={styles.desktope}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
