import React from "react";

import * as styles from "../styles/components/BookingCard.module.scss";

const BookingCard = ({ name, description, rate, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={name} />
      <div className={styles.content}>
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>{rate}</h3>
      </div>
    </div>
  );
};

export default BookingCard;
