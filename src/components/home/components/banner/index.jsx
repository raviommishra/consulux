import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useMedia } from "../../../../helper/usemedia";

import styles from "./banner.module.css";

const Banner = () => {
  const isMobile = useMedia(600);

  const WebComponent = () => {
    return (
      <div className={styles.innerComponent}>
        <div className={styles.block_1}>
          <div>
            <div className={styles.block_1_heading_component}>
              <h1>
                <span>
                  <b>C</b>
                </span>
                onsulenza{" "}
                <span>
                  <b>A</b>
                </span>
                ziendale
              </h1>
              <p>E-commerce: come scegliere un professionista</p>
            </div>
            <div className={styles.block_1_name_component}>
              <div>
                <p>Monica Dominijanni</p>
                <p>
                  <span>
                    <b>Partita IVA:</b>
                  </span>{" "}
                  03918000120
                </p>
              </div>
              <div>
                <button className={styles.contactButton}>
                  Contact{" "}
                  <IoArrowForwardOutline
                    color="#fff"
                    size={18}
                    style={{ marginLeft: 10 }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block_2}>
          <img src="/images/banner-1.png" alt="business consultency banner" />
        </div>
      </div>
    );
  };

  const MobileComponent = () => {
    return (
      <div className={styles.mobileComponent}>
      <div className={styles.mobileHeadingComponent}>
              <h1>
                <span>
                  <b>C</b>
                </span>
                onsulenza{" "}
                <span>
                  <b>A</b>
                </span>
                ziendale
              </h1>
              <p>E-commerce: come scegliere un professionista</p>
            </div>
        <div className={styles.mobileImageComponent}>
          <img src="/images/banner-1.png" alt="business consultency banner" />
        </div>
        <div className={styles.mobileNameComponent}>
              <div>
                <p>Monica Dominijanni</p>
                <p>
                  <span>
                    <b>Partita IVA:</b>
                  </span>{" "}
                  03918000120
                </p>
              </div>
              <div>
                <button className={styles.mobileContactButton}>
                  Contact{" "}
                  <IoArrowForwardOutline
                    color="#fff"
                    size={15}
                    style={{ marginLeft: 10 }}
                  />
                </button>
              </div>
            </div>
      </div>
    );
  };
  return (
    <div className={styles.rootComponent}>
      {isMobile ? <MobileComponent /> : <WebComponent />}
    </div>
  );
};

export default Banner;
