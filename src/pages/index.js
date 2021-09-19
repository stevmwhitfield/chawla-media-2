import React from "react";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import * as styles from "../styles/base.module.scss";

export default function Home() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <Layout>
      <Helmet title="Photography, Editing, and Content Creation | Chawla Media" />
      <h1>Home Page</h1>
      <p>{windowSize} PX</p>
    </Layout>
  );
}
