import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import Head from "../components/Head";
import PortfolioCard from "../components/PortfolioCard";

import * as styles from "../styles/pages/Portfolio.module.scss";

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiPortfolioCards {
        edges {
          node {
            slug
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
      <Head
        title="Portfolio | Chawla Media"
        description="Come see what I have created for others and what I can create for you."
        url="https://www.chawlamedia.com/portfolio"
      />
      <main>
        <h1>Portfolio</h1>
        <h3>Explore my previous works</h3>
        <div className={styles.cardWrapper}>
          {data.allStrapiPortfolioCards.edges.map(edge => {
            return (
              <PortfolioCard
                title={edge.node.Title}
                description={edge.node.Description}
                photoshoot={edge.node.Photoshoot}
                imgSrc={edge.node.Thumbnail.localFile.url}
                slug={edge.node.slug}
              />
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Portfolio;
