import React from "react";

import Navbar from "../navbar";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerComponent}>
      <h3>Sticky Navigation Example</h3>
  <p>The navbar will stick to the top when you reach its scroll position.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
  <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <Navbar />
    </div>
  );
};

export default Header;
