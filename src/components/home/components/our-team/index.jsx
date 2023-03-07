import React from "react";
import styles from "./our-team.module.css";

const OurTeam = () => {
  return (
    <div>
    <div className={styles.root}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,0L60,0C120,0,240,0,360,10.7C480,21,600,43,720,69.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className={styles.innerComponent}>OurTeam</div>
     
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 130">
    <path
      fill="#d0dfea"
      fill-opacity="1"
      d="M0,0L60,0C120,0,240,0,360,10.7C480,21,600,43,720,69.3C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
    </div>
  );
};

export default OurTeam;
