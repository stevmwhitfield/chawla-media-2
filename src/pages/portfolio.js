import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Card from "../components/Card";

import * as styles from "../styles/pages/Portfolio.module.scss";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPortfolioCards {
        edges {
          node {
            Title
            Description
            Photoshoot
            Thumbnail {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet title="Portfolio | Chawla Media" />
      <main>
        <h1>Portfolio</h1>
        <h3>Explore my previous works</h3>
        <div className={styles.cardWrapper}>
          {data.allStrapiPortfolioCards.edges.map(edge => {
            return (
              <Card
                title={edge.node.Title}
                description={edge.node.Description}
                photoshoot={edge.node.Photoshoot}
                imgSrc={edge.node.Thumbnail.localFile.url}
              />
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;