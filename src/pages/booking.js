import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import BookingCard from "../components/BookingCard";

import * as styles from "../styles/pages/Booking.module.scss";

const Booking = () => {
  const data = useStaticQuery(graphql`
    {
      allStrapiBookings {
        edges {
          node {
            Name
            Description
            Rate
            Image {
              localFile {
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet title="Booking | Chawla Media" />
      <main>
        <h1>Available Bookings</h1>
        <h3>Let's create something together</h3>
        <div className={styles.bookingContainer}>
          {data.allStrapiBookings.edges.map((edge, index) => {
            return (
              <BookingCard
                key={index}
                name={edge.node.Name}
                description={edge.node.Description}
                rate={edge.node.Rate}
                imgSrc={edge.node.Image.localFile.url}
              />
            );
          })}
        </div>
        <p className={styles.message}>
          At the moment, due to limited availability and online resources,
          online booking is not available at this time. Please DM{" "}
          <a href="https://www.instagram.com/chawlamedia/" target="_blank">
            @chawlamedia
          </a>{" "}
          on Instagram with your choice of booking. All factors will be taken
          into consideration and prices may be slightly altered depending on
          wants and needs for the shoot.
        </p>
        {/* <BookingForm /> */}
      </main>
    </Layout>
  );
};

export default Booking;
