import React from "react";

import styles from "./empower.module.css";

const detail = [
  {
    url: "/images/a-4.jpg",
    text: "Business Central sul Dispositivo mobile",
    targetUrl: "https://www.youtube.com/watch?v=Zv8EjzpqpMs",
  },
  {
    url: "/images/b-4.jpg",
    text: "E-commerce: come scegliere un professionista",
    targetUrl: "/",
  },
];

const Empowers = () => {
  const renderDetailComponent = (item, index) => {
    return (
      <div key={index} className={styles.cardComponent}>
        <div>
          <img src={item.url} alt={item.text} />
        </div>
        <div className={styles.overlayComponent}>
          <div>
            <p>
              <a href={item.targetUrl} target="_blank" rel="noreferrer">
                {item.text}
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.rootInnerComponent}>
        <div className={styles.titleComponent}>
          <h1>
            Oltre il software: quando è necessaria una{" "}
            <span>Consulenza ERP?</span>
          </h1>
          <div className={styles.descriptionComponent}>
            <p>
              La consulenza legata all’implementazione di un nuovo sistema
              gestionale ERP è strategica.
              <br />
              <p>
                Il sistema ERP non può infatti essere implementato senza
                prevedere anche un aggiornamento dei processi aziendali.{" "}
              </p>
            </p>
          </div>
          <button className={styles.buttonComponent}>Read more</button>
        </div>
        <div className={styles.mapImageComponent}>
          {detail.map((item, index) => {
            return renderDetailComponent(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default Empowers;
