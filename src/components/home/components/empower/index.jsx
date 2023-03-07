import React from "react";

import styles from "./empower.module.css";

const detail = [
  {
    url: "/images/a-4.jpg",
    text: "From Idea to Implementation",
  },
  {
    url: "/images/b-4.jpg",
    text: "The Digital Statement",
  },
  {
    url: "/images/c-4.jpg",
    text: "The Team that Delivers Results",
  },
  {
    url: "/images/d-4.jpg",
    text: "We touch your life in more ways!",
  },
];

const Empowers = () => {
  const renderDetailComponent = (item, index) => {
    return (
      <div key={index} className={styles.cardComponent}>
        <div>
          <img src={item.url} alt={item.text} />
        </div>
        <div className={styles.overlayComponent}>
          <div>
            <p>{item.text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.rootInnerComponent}>
        <div className={styles.titleComponent}>
          <h1>
            <span>Consultancy</span> that empowers you...
          </h1>
          <div className={styles.descriptionComponent}>
            <p>
              Unlike other Frameworks which try to cover everything, It has been
              built specifically for wordpress. Aliquam sapien est, scelerisque
              sed dolor. Proin accumsan erat sem, id porta risus dignissim ac...
            </p>
          </div>
          <button className={styles.buttonComponent}>Read more</button>
        </div>
        <div className={styles.mapImageComponent}>
          {detail.map((item, index) => {
            return renderDetailComponent(item, index);
          })}
        </div>
      </div>
    </div>
  );
};

export default Empowers;
