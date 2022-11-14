import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <div className={styles.contactButton}>
      <Link href="./contact">
        <button>
          <div>
            <FontAwesomeIcon icon={faPhoneVolume} width="30" />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Contact;
