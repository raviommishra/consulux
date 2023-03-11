import React from "react";
import { useMedia } from "../../../../helper/usemedia";

import styles from "./our-team.module.css";

const array = [
    {
        url: "https://firebasestorage.googleapis.com/v0/b/onewonlabs.appspot.com/o/Ravi.jpeg?alt=media&token=49dad259-89ff-474f-9d28-c9e34f730d82",
        name: "Ravi Mishra"
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/onewonlabs.appspot.com/o/kapil.png?alt=media&token=ac50b6c8-fec1-43d0-8a5c-81122c449123",
        name: "Kapil Shukla",
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/onewonlabs.appspot.com/o/teamVicky.jpeg?alt=media&token=78921403-2285-4a90-a8cd-410aa0e6a4e9",
        name: "Vikash Mishra",
    },
    {
        url: "https://firebasestorage.googleapis.com/v0/b/onewonlabs.appspot.com/o/TeamShweta.jpeg?alt=media&token=84f741aa-a561-4803-aada-bcb86b688490",
        name: "Shweta Mishra",
    }
]
const OurTeam = () => {
  const isMobile = useMedia(600);
  return (
    <div className={styles.root} id="team">
      <div className={styles.innerComponent}>
      <div className={styles.titleComponent}>
        <h1>
          <span>Il</span>&nbsp;Team
        </h1>
        <div className={styles.underline} />
        </div>
        <div className={isMobile ? styles.mobileMapCardComponent :styles.mapCardComponent}>
          {array.map((item, index) => {
            return (
              <div key={index} className={styles.card_style}>
                <div className={styles.cardInnerComponent}>
                  <div className={styles.imageComponent}>
                    <img src={item?.url} alt="images" />
                  </div>
                  <div className={styles.descriptionComponent}>
                    <p className={styles.name}>{item.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.buttonComponent}>
        <button className={styles.readMore}>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
