import React from "react";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.rootComponent}>
      <div className={styles.innerComponent}>
        <div className={styles.block_1}>
          <div>
            <div className={styles.block_1_heading_component}>
              <h1>Consulenza Aziendale</h1>
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
            </div>
          </div>
        </div>
        <div className={styles.block_2}>
          <img src="/images/banner-1.png" alt="business consultency banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
