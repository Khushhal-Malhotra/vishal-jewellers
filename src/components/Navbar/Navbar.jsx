import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.links}>
          <a className={styles.link} href="#">
            RINGS
          </a>
          <a className={styles.link} href="#">
            BRACELETS
          </a>
          <a className={styles.link} href="#">
            EARRINGS
          </a>
          <a className={styles.link} href="#">
            NECKLACES
          </a>
        </nav>
        <div className={styles.logo}>
          <span className={styles.name}>VISHAL</span> <span className={styles.tagline}>JEWELLERS</span>
        </div>
        <nav className={styles.links}>
          <a className={styles.link} href="#">
            HOME
          </a>
          <a className={styles.link} href="#">
            ABOUT
          </a>
          <a className={styles.link} href="#">
            CONTACT
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
