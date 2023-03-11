import React, { useState } from "react";
import styles from "./about-us.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 664, min: 0 },
    items: 1,
  },
};

const AboutUSFirst = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

 

  return (
    <div>
    
    <div className={styles.rootComponent}>
      <video id={styles.background}  loop autoPlay muted>
        <source src="/videos/video-4.mp4" type="video/mp4" />
      </video>
     
      
    </div>
    <div className={styles.component}  id="about">
    <div className={styles.leftComponent}>
      <img src="/images/whoWeAre.png" alt="WhoWeAre" />
    </div>
    <div className={styles.introComponent}>
    <p style={{color: '#26a4bb'}}>About Us</p>
      <h1>Come scegliere il giusto professionista per creare il tuo
e-commerce?
Punta alla Luna!
</h1>
      <div className={styles.underline} />
      <div className={styles.description}>
        <p>
        Chi di voi non ha cercato una web agency su internet?E chi di voi non è stato catturato dal messaggio pubblicitario «tutto incluso a 99 euro»? 

        </p>
        <p>
        Ebbene si, di messaggi che inquinano letteralmente il mercato lasciando il cliente insoddisfatto ce ne sono molti.

        </p>
        <p>
        Personalmente faccio consulenza dal 2008 in svariate realtà e non ho mai trovato un cliente che, nonostante producesse o commercializzasse gli stessi prodotti, avesse più di una virgola in comune con un altro.


        </p>
        <p>
        Ogni azienda ha le sue necessità, come è vero che ogni essere umano è unico e raro.
Ogni azienda ha la sua peculiarità come ogni essere umano ha i suoi talenti: se non sono in grado di mettere in risalto i miei talenti ho già fallito nel cercare di esprimere il mio vero essere.

        </p>
      </div>
    </div>
  </div>

  
    </div>
    
  );
};

export default AboutUSFirst;
