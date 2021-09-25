import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import FAQCard from "../components/FAQCard";

import Layout from "../components/Layout";

const FAQ = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiFaqs {
        edges {
          node {
            Question
            Answer
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <Helmet title="Frequently Asked Questions (FAQ) | Chawla Media" />
      <main>
        <h1>FAQ</h1>
        <h3>Commonly asked questions</h3>
        {data.allStrapiFaqs.edges.map((edge, index) => {
          return (
            <FAQCard
              key={index}
              question={edge.node.Question}
              answer={edge.node.Answer}
            />
          );
        })}
      </main>
    </Layout>
  );
};

export default FAQ;
