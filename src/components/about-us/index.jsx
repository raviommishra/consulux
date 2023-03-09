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

const AboutUS = () => {
  const [playingVideo, setPlayingVideo] = useState(false);

 

  return (
    <div className={styles.rootComponent}>
      <video id={styles.background}  loop autoPlay muted>
        <source src="/videos/video-4.mp4" type="video/mp4" />
      </video>
     
      
    </div>
  );
};

export default AboutUS;
