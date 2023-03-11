import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.component}>
    <div>
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
      <div className={styles.verticalLine} />
      <div>
        <p>Monica Dominijanni</p>
        <p>
          <span>
            <b>Partita IVA:</b>
          </span>{" "}
          03918000120
        </p>
      </div>
    </div>
  );
};

export default Footer;
