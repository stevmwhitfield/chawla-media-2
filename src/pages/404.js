import React from "react";

import Layout from "../components/Layout";
import Head from "../components/Head";
import * as styles from "../styles/pages/404.module.scss";

const NotFound = () => {
  return (
    <Layout>
      <Head
        title="Page not found - Error 404 | Chawla Media"
        description="Error 404: Page not found."
        url="https://www.chawlamedia.com/404"
      />
      <main id={styles.main}>
        <h1>Error 404</h1>
        <h3>Page not found.</h3>
      </main>
    </Layout>
  );
};

export default NotFound;
