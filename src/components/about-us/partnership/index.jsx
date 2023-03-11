import React from "react";
import { useMedia } from "../../../helper/usemedia";
import styles from "./partnership.module.css";

const data = [
  {
    title: "Sito internet",
    text: "Come comunica attraverso il suo sito? Può essere un indizio su come porterà a termine il lavoro per voi.",
  },
  {
    title: "Case History",
    text: "Ci sono dei lavori che catturano la vostra attenzione?",
  },
  {
    title: "Rapporti umani",
    text: "Vi sentite ascoltati nelle vostre richieste o ricevete in risposta bellissime frasi ma completamente scollegate dalla vostra domanda? \n Avete spazio per potervi esprimere liberamente?",
  },
  {
    title: "Costo del progetto",
    text: "Vi fa un prezzo su 2 piedi giusto per convincervi a firmare al momento o si prende i suoi tempi per valutare le vostre richieste con il tecnico?",
  },
];

const Partnership = () => {
  const isMobile = useMedia(600);
  return (
    <div className={isMobile ? styles.mobileComponent : styles.component}>
      <div
        className={
          isMobile ? styles.mobileInnerComponent : styles.innerComponent
        }
      >
        <h2>Consigli per scegliere un professionista</h2>
        <div className={styles.underline} />
        <div className={styles.cardsComponent}>
          {data.map((item) => {
            return (
              <div
                className={
                  isMobile ? styles.mobileCardComponent : styles.cardComponent
                }
              >
                <div className={styles.redCircle} />
                <div
                  className={
                    isMobile ? styles.mobileDescription : styles.description
                  }
                >
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partnership;
