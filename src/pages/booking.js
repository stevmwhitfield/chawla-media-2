import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/Layout";

const Booking = () => {
  return (
    <Layout>
      <Helmet title="Booking | Chawla Media" />
      <main>
        <h1>Available Bookings</h1>
        <h3>Let's create something together</h3>
      </main>
    </Layout>
  );
};

export default Booking;
