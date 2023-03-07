import React from "react";

import Navbar from "../navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerComponent}>
      <Navbar />
    </div>
  );
};

export default Header;
