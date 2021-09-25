import React from "react";

import * as styles from "../styles/components/FAQCard.module.scss";

const FAQCard = ({ question, answer }) => {
  return (
    <div className={styles.questionContainer}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default FAQCard;
