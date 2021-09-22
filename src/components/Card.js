import React from "react";

import * as styles from "../styles/components/Card.module.scss";

const Card = ({ title, description, photoshoot, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href="">See More</a>
        <h3>{photoshoot} shoot</h3>
      </div>
    </div>
  );
};

export default Card;
