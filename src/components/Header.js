import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { debounce } from "lodash";
import logo from "../assets/chawla-media.png";
import * as styles from "../styles/components/Header.module.scss";

const Header = () => {
  let pageWidth;

  if (typeof window !== "undefined") {
    pageWidth = window.innterWidth;
  }

  const [windowWidth, setWindowWidth] = useState(pageWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const navBtnHandler = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  if (pageWidth < 480) {
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
