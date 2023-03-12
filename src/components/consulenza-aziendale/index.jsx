import React from "react";
import {useNavigate} from 'react-router-dom';

import { useMedia } from "../../helper/usemedia";
import styles from "./consulenza-aziendale.module.css";

const ConsulenzaAziendale = () => {
  const isMobile = useMedia(700);
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.bannerComponent}>
        <div className={styles.banner_text}>
          <h1>
            <span>
              <b>Oltre il software:</b>
            </span>{" "}
            quando è necessaria una consulenza ERP?
          </h1>
          {!isMobile && (
            <div className={styles.bannerTextBottomComponent}>
              <button className={styles.contactButton} onClick={() => navigate('/contact')}>Contattci</button>
            </div>
          )}
        </div>
        <div className={styles.rightComponent}>
          <div className={styles.imgComponent}>
            <img src="/images/consulenza.png" alt="consulenza" />
          </div>
        </div>
        {isMobile && (
          <div style={{ width: "100%" }}>
            <div className={styles.bannerTextBottomComponent}>
              <button className={styles.contactButton} onClick={() => navigate('/contact')}>Contattci</button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.descriptionComponent}>
        <p>
          La consulenza legata all’implementazione di un nuovo sistema
          gestionale ERP è strategica.
          <br />
          <br />
          Il sistema ERP non può infatti essere implementato senza prevedere
          anche un aggiornamento dei processi aziendali.
          <br />
          <br />
          In previsione di una riorganizzazione dei processi, una consulenza ERP
          può essere un valido supporto nell’analisi approfondita dei processi
          aziendali per comprendere in che modo riorganizzarli in maniera più
          efficiente.
          <br />
          <br />
          Ecco le fasi del percorso di adozione di un nuovo sistema gestionale
          in cui una consulenza ERP è in grado di offrire supporto all’impresa:
          <br />
          <br />
        </p>
        <br />
        <ul style={{marginLeft: '3%'}}>
          <li>Analisi dei processi aziendali</li>
          <li>
            Valutazione e discussione delle soluzioni proposte dal Partner ERP
            selezionato
          </li>
          <li>Supporto nei test di conformità degli utenti </li>
          <li>Supporto post implementazione</li>
        </ul>
      </div>
    </div>
  );
};

export default ConsulenzaAziendale;
