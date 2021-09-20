import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import * as styles from "../styles/404.module.scss";

const NotFound = () => {
  return (
    <Layout>
      <Helmet title="Page not found | Chawla Media" />
      <main id={styles.main}>
        <h1>Error 404</h1>
        <h3>Page not found.</h3>
      </main>
    </Layout>
  );
};

export default NotFound;
