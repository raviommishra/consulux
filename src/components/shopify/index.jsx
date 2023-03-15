import React from "react";
import { useNavigate } from "react-router-dom";
import { useMedia } from "../../helper/usemedia";

import styles from "./shopify.module.css";

const Shopify = () => {
  const isMobile = useMedia(700);
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.bannerComponent}>
        {isMobile ? (
          <img src="/images/shopify-mobile-banner.png" alt="shopify" />
        ) : (
          <img src="/images/shopify-banner.png" alt="shopify" />
        )}
      </div>
      <div className={styles.aboutShopify}>
        <div>
          <p>
            Dopo attente valutazioni delle soluzioni presenti sul mercato ci
            siamo specializzati nello sviluppo di e-commerce su Shopify. <br />
            {!isMobile && <br />}
            Grazie a questo strumento siamo in grado di offrire soluzioni
            e-commerce adatte a ogni tipologia di cliente, mantenendo standard
            di servizio qualitativamente eccellenti.
          </p>
          <button
            className={styles.contactButton}
            onClick={() => navigate("/contact")}
          >
            Contattaci
          </button>
        </div>
        <div>
          <img src="/images/shopify-reviews.jpg" alt="shopify-logo" />
        </div>
      </div>
      <div className={styles.underline} />
      <div className={styles.descriptionComponent}>
        <p>
          Possiedi una piccola o media impresa? Allora Shopify fa sicuramente al
          caso tuo.
          <br />
          A differenza di Magento, decisamente più difficile da gestire, Shopify
          rappresenta il giusto compromesso tra funzionalità e facilità di
          utilizzo. Per questo è adatto a tutte le realtà che si vogliono
          affacciare al mondo dell’e-commerce con un sito solido e performante.
          <br />
          Shopify prevede infatti diversi piani con i quali poter vendere
          online:
        </p>
        <dl>
          <dd>
            - <b>Basic Shopifyè</b> la soluzione di partenza per lanciare il tuo
            primo store online,
          </dd>
          <dd>
            - <b>Shopify</b>è la soluzione di livello superiore per chi vuole
            fare le cose un po’ più seriamente
          </dd>
          <dd>
            - <b>Advanced Shopify</b> è l’ideale per ingrandire il proprio
            store.
          </dd>
        </dl>
        <br />
        <p>
          Per grosse realtà commerciali, con un cospicuo giro di ordini e
          vendite, è disponibile anche la soluzione <b>ShopifyPlus</b>.
        </p>
        <br />
        <p>
          Shopify è facile da utilizzare, con un livello di personalizzazione in
          grado di soddisfare qualsiasi esigenza. Creare un sito e-commerce con
          Shopify assicura ai tuoi utenti una navigazione fluida, veloce e
          intuitiva poiché possiede tutto il necessario per farti vendere i tuoi
          prodotti in maniera ottimale.
        </p>
      </div>
    </div>
  );
};

export default Shopify;
