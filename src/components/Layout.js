import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import * as baseStyles from "../styles/base.module.scss";
import * as styles from "../styles/components/Layout.module.scss";

const Layout = props => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.mainWrapper}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
