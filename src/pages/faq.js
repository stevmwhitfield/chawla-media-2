import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const FAQ = () => {
  return (
    <Layout>
      <Helmet title="Frequently Asked Questions (FAQ) | Chawla Media" />
      <main>
        <h1>FAQ</h1>
        <h3>Commonly asked questions</h3>
      </main>
    </Layout>
  );
};

export default FAQ;
