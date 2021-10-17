import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import FAQCard from "../components/FAQCard";

import Layout from "../components/Layout";
import Head from "../components/Head";

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
      <Head
        title="Frequently Asked Questions (FAQ) | Chawla Media"
        description="Find the answers to some of my most commonly asked questions here."
        url="https://www.chawlamedia.com/faq"
      />
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
