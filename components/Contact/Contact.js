import React from "react";
import styles from "./Contact.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

const Contact = ({ url }) => {
  const router = useRouter();
  // const linkContact = () => {
  //   return (
  //     {router.asPath === "./contact" && null}
  //   );
  // };
  return (
    <div className={styles.contactButton}>
      <Link href="/contact">
        <button>
          {/* <div>
            <FontAwesomeIcon icon={faPhoneVolume} width="64" />
          </div> */}
        </button>
      </Link>
    </div>
  );
};

export default Contact;
