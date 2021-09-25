import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";
import { Helmet } from "react-helmet";

export const query = graphql`
  query ($slug: String!) {
    strapiPortfolioCards(slug: { eq: $slug }) {
      slug
      Title
      Description
      Photoshoot
    }
    strapiImageGalleries(slug: { eq: $slug }) {
      slug
      Name
      Images {
        name
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: NONE, width: 850)
          }
        }
      }
    }
  }
`;

const Photoshoot = props => {
  return (
    <Layout>
      <Helmet
        title={`${props.data.strapiPortfolioCards.Title} | Portfolio | Chawla Media`}
      />
      <main>
        <h1>{props.data.strapiPortfolioCards.Title}</h1>
        <h3>{props.data.strapiPortfolioCards.Description}</h3>
        <ImageGallery props={props} />
      </main>
    </Layout>
  );
};

export default Photoshoot;
