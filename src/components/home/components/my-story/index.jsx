import React from "react";
import { Link } from "react-router-dom";
import styles from "./my-story.module.css";
const Mystory = () => {
  return (
    <div className={styles.root}>
        <img src="/images/monica.jpg" alt="founder logo" />
      <div className={styles.mystoryright} >
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
        <p className={styles.sign}>Monika</p>
        <p className={styles.name}>- Monica</p>
      </div>
    </div>
  );
};

export default Mystory;
