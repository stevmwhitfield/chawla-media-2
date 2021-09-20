import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";

import logo from "../assets/chawla-media.png";
import * as styles from "../styles/Header.module.scss";

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const checkSize = () => {
    setWindowSize(window.innerWidth);
  };

  const checkScroll = e => {
    if (e.deltaY > 0) {
      setIsScrollDown(false);
    }
    if (e.deltaY <= 0) {
      setIsScrollDown(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", checkScroll);
    return () => {
      window.removeEventListener("wheel", checkScroll);
    };
  });

  const navBtnHandler = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
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
          <ul className={isMobileNavOpen ? null : styles.hidden}>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={
                  isMobileNavOpen ? styles.navLink : styles.navLinkHidden
                }
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={
                  isMobileNavOpen ? styles.navLink : styles.navLinkHidden
                }
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={
                  isMobileNavOpen ? styles.navLink : styles.navLinkHidden
                }
                to="/booking"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={
                  isMobileNavOpen ? styles.navLink : styles.navLinkHidden
                }
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={
                  isMobileNavOpen ? styles.navLink : styles.navLinkHidden
                }
                to="/about-me"
              >
                About Me
              </Link>
            </li>
          </ul>
          <button
            className={isMobileNavOpen ? styles.navBtnActive : styles.navBtn}
            onClick={navBtnHandler}
          >
            Toggle Navigation
          </button>
        </nav>
      </header>
    );
  } else {
    return (
      <header id={styles.header}>
        <div className={styles.logoContainer}>
          <Link to="/">
            <img src={logo} alt="Chawla Media" />
          </Link>
        </div>
        {/* Hides nav when scrolling up --- Might remove */}
        {/* <nav className={!isScrollDown ? styles.hidden : null}> */}
        <nav>
          <ul>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/booking"
              >
                Booking
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/faq"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/about-me"
              >
                About Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
};

export default Header;
