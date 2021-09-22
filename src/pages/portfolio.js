import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import Card from "../components/Card";

import * as styles from "../styles/pages/Portfolio.module.scss";

const Portfolio = () => {
  return (
    <Layout>
      <Helmet title="Portfolio | Chawla Media" />
      <main>
        <h1>Portfolio</h1>
        <h3>Explore my previous works</h3>
        <div className={styles.cardWrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
