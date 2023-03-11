import React from "react";
import { useMedia } from "../../../../helper/usemedia";

import styles from "./projects.module.css";

const data = [
  {
    imgUrl: "/images/bekarmic.png",
    url: "https://www.bekarmic.com/",
  },
  {
    imgUrl: "/images/onewon.png",
    url: "https://onewon.in/",
  },
  {
    imgUrl: "/images/oncinema.png",
    url: "https://play.google.com/store/apps/details?id=com.oneCinema",
  },
  {
    imgUrl: "/images/eurostarinn.png",
    url: "https://eurostarinn.com/",
  },
  {
    imgUrl: "/images/globalhealth.png",
    url: "https://www.globalhealthinitiative.info/",
  },
  {
    imgUrl: "/images/tvk.png",
    url: "https://tvktours.com/",
  },
];

const Projects = () => {
  const isMobile = useMedia(600);
  return (
    <div className={styles.rootComponent}>
      <div className={styles.innerComponent}>
        <h1>Vuoi vedere qualche lavoro?</h1>
        <div className={styles.underline} />
        <div>
        {isMobile ? <div className={styles.mobileMapComponent}>
        {data?.map((item, index) => {
          return (
            <div key={index} className={styles.mobileCardComponent}>
              <a href={item.url} target="_blank">
                <img src={item.imgUrl} alt="projects" />
              </a>
            </div>
          );
        })}
      </div>: <div className={styles.mapComponent}>
        {data?.map((item, index) => {
          return (
            <div key={index} className={styles.cardComponent}>
              <a href={item.url} target="_blank">
                <img src={item.imgUrl} alt="projects" />
              </a>
            </div>
          );
        })}
      </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
