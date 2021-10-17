import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Head from "../components/Head";
import ImageGallery from "../components/ImageGallery";

import styles from "../styles/pages/Home.module.scss";

export const query = graphql`
  query {
    strapiImageGalleries(Name: { eq: "Home" }) {
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

const Home = props => {
  return (
    <Layout>
      <Head
        title="Photography, Editing, and Content Creation | Chawla Media"
        description="Chawla Media offers professional photography, editing, and content creation services in the Orlando area. Contact @chawlamedia on Instagram for bookings."
        url="https://www.chawlamedia.com"
      />
      <main>
        <h1>Sunishth Chawla</h1>
        <h3>— Photographer | Editor | Creator —</h3>
        <ImageGallery props={props} />
      </main>
    </Layout>
  );
};

export default Home;
