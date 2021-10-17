import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/components/PortfolioCard.module.scss";

const PortfolioCard = ({ title, description, photoshoot, imgSrc, slug }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title} />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to={`/portfolio/${slug}`}>
          See More <i class="fas fa-arrow-right"></i>
        </Link>
        <h3>{photoshoot} shoot</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
