import React from "react";
import styles from "./Contact.module.css";
import AppIcon from "../AppIcon";

import Link from "next/link";

const FloatingButton = ({ icon, linkUrl }) => {
  return (
    <div className={styles.contactButton}>
      <Link href={linkUrl}>
        <button>
          <AppIcon name={icon} size={36} />
        </button>
      </Link>
    </div>
  );
};

export default FloatingButton;
