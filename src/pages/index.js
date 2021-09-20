import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import ImageGallery from "../components/ImageGallery";

import baseStyles from "../styles/base.module.scss";
import styles from "../styles/Home.module.scss";

export const query = graphql`
  query {
    strapiImageGalleries(Name: { eq: "Home" }) {
      Name
      Images {
        name
        alternativeText
        localFile {
          childImageSharp {
            gatsbyImageData(breakpoints: [400, 650, 850], placeholder: NONE)
          }
        }
      }
    }
  }
`;

const Home = props => {
  return (
    <Layout>
      <Helmet title="Photography, Editing, and Content Creation | Chawla Media" />
      <main>
        <h1>Sunishth Chawla</h1>
        <h3>— Photographer | Editor | Creator —</h3>
        <ImageGallery props={props} />
      </main>
    </Layout>
  );
};

export default Home;
