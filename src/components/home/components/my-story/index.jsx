import React from "react";
import { Link } from "react-router-dom";
import { IoLogoLinkedin } from "react-icons/io5";
import { Modal } from "rsuite";

import styles from "./my-story.module.css";
import { useMedia } from "../../../../helper/usemedia";
const Mystory = () => {
  const isMobile = useMedia(600);

  if (isMobile) {
    return (
      <div className={styles.mobileComponent}>
        <div className={styles.mobileInnerComponent}>
          <div className={styles.mobileImageComponent}>
            <img src="/images/monica.jpg" alt="founder logo" />
          </div>
          <div className={styles.mystoryright}>
            <h1>
              <span>La</span> mia storia…
            </h1>
            <div className={styles.underline} />
            <div className={styles.descriptionComponent}>
              <p>
                …come andare sulla montagna russa!
                <br />
                Già i tempi delle scuole sono stati molto movimentati: 3 anni di
                superiori in Calabria e gli ultimi 2 a Milano.
                <br />
                Considerando il cambio di mentalità, compagni, professori,
                <Link to="/" style={{ marginLeft: 5 }}>
                  Read more ....
                </Link>
              </p>
            </div>
            <p className={styles.sign}>Monica</p>
            <a
              href="https://www.linkedin.com/in/monica-dominijanni-4b3a1970"
              target="_blank"
              className={styles.linkedin}
            >
              <IoLogoLinkedin
                color="#fff"
                size={25}
                style={{ marginTop: 10, textAlign: "center" }}
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <img src="/images/monica.jpg" alt="founder logo" />
      <div className={styles.mystoryright}>
        <h1>
          <span>La</span> mia storia…
        </h1>
        <div className={styles.underline} />
        <div className={styles.descriptionComponent}>
          <p>
            …come andare sulla montagna russa!
            <br />
            <br />
            Già i tempi delle scuole sono stati molto movimentati: 3 anni di
            superiori in Calabria e gli ultimi 2 a Milano.
            <br />
            <br />
            Considerando il cambio di mentalità, compagni, professori, cerchio
            di amicizie, metodi di studio posso dire di essere veramente tosta!
            Come entrare in un frullino e uscire rimanendo in piedi! Fatto ☺
            <br />
            <br />
            Grazie all’ascolto empatico di cui sono dotata dalla nascita, la
            conoscenza acquisita e quello che sono in grado di acquisire con
            semplicità, so di poter essere un valido supporto aziendale in tutti
            i campi che deciderò di conoscere.{" "}
            <Link to="/">Read more ....</Link>
          </p>
        </div>
        <p className={styles.sign}>Monica</p>
        <a
          href="https://www.linkedin.com/in/monica-dominijanni-4b3a1970"
          target="_blank"
        >
          <IoLogoLinkedin color="#fff" size={25} style={{ marginTop: 10 }} />
        </a>
      </div>
    </div>
  );
};

export default Mystory;
