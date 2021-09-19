import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import logo from "../assets/chawla-media.png";
import * as styles from "../styles/Header.module.scss";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const navBtnHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (windowSize < 480) {
    return (
      <header id={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Chawla Media" />
          </Link>
        </div>
        <nav>
          <ul className={isNavOpen ? null : styles.navHidden}>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={isNavOpen ? styles.navLink : styles.navLinkHidden}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={isNavOpen ? styles.navLink : styles.navLinkHidden}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={isNavOpen ? styles.navLink : styles.navLinkHidden}
                to="/booking"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={isNavOpen ? styles.navLink : styles.navLinkHidden}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={isNavOpen ? styles.navLink : styles.navLinkHidden}
                to="/about-me"
              >
                About Me
              </Link>
            </li>
          </ul>
          <button
            className={isNavOpen ? styles.navBtnActive : styles.navBtn}
            onClick={navBtnHandler}
          ></button>
        </nav>
      </header>
    );
  } else {
    // need to style
    return (
      <header id="header">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Chawla Media" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/about-me">About Me</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
