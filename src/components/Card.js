import React from "react";

import * as styles from "../styles/components/Card.module.scss";
import Img from "../assets/about-me/sunishth-chawla.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={Img} alt="" />
      <div className={styles.content}>
        <h1>title</h1>
        {/* <p>{description}</p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          assumenda sunt maxime.
        </p>
        <a href="">See More</a>
        <h3>shoot-type</h3>
      </div>
    </div>
  );
};

export default Card;
