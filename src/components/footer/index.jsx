import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.component}>
      <p>
        Copyrights 2021 &copy;{" "}
        <a
          href="https://onewon.in/"
          target="_blank"
          className={styles.onewon}
          rel="noreferrer"
        >
          oneWonLabs
        </a>{" "}
      </p>
    </div>
  );
};

export default Footer;
