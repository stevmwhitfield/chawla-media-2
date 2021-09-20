import React from "react";
import { Helmet } from "react-helmet";

import baseStyles from "../styles/base.module.scss";
import * as styles from "../styles/About.module.scss";
import Layout from "../components/Layout";
import Img from "../assets/about-me/sunishth-chawla.jpg";

const About = () => {
  return (
    <Layout>
      <Helmet title="About Me | Chawla Media" />
      <main id={styles.main}>
        <h1>About Me</h1>
        <img src={Img} alt="Sunishth Chawla" />
        <p>
          It all started when my dad would have me use his huge DSLRs to take
          pictures of the family. Every time I would take a picture, it would be
          blurry, uncentered, and nowhere near professional. Over the course of
          five years, I have developed the technique of photography; whether it
          be of cars, human subjects, or nature. Having just bought my first,
          "very own" camera, I have finally gotten the freedom to travel to many
          parts of the country that I never knew existed. Since then, I have
          been clicking away and satisfying not only my clientele, but my own
          self as well.
        </p>
        <p>
          Alongside being your photographer, I want to teach you what it is like
          to pick up a hobby like mine and actually be able to go forth with it.
          The process of picking up a camera and taking a picture is intricate
          enough, but there is a lot behind behind the scenes that goes on to
          capture that vivid shot that we want to show our friends, family, and
          the whole world.
        </p>
      </main>
    </Layout>
  );
};

export default About;
