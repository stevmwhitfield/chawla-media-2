import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";
import * as styles from "../styles/base.module.scss";

export default function Home() {
  return (
    <Layout>
      <Helmet title="Photography, Editing, and Content Creation | Chawla Media" />
      <h1>Home Page</h1>
    </Layout>
  );
}
