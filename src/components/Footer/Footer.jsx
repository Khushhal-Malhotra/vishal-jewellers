import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.menuContainer}>
        <div className={styles.logo}>
          <span className={styles.name}>VISHAL</span>{" "}
          <span className={styles.tagline}>JEWELLERS</span>
        </div>
        <nav className={styles.links}>
        <h5 className={styles.linkTitle}>SOCIAL LINKS</h5> 
          <a target="_blank" className={styles.link} href="https://www.instagram.com/vishaljewellerssgnr/">
            Instagram
          </a>
          <a target="_blank" className={styles.link} href="https://www.instagram.com/vishaljewellerssgnr/">
            Facebook
          </a>
          <a target="_blank" className={styles.link} href="https://www.youtube.com/@VishalJewellersSGNR" >
          Youtube
          </a>
        </nav>
        {/* <nav className={styles.links}> 
        <h5 className={styles.linkTitle}>EXPLORE</h5>
          <a className={styles.link} href="#">
            Rings
          </a>
          <a className={styles.link} href="#">
            Bracelets
          </a>
          <a className={styles.link} href="#">
            Earrings
          </a>
          <a className={styles.link} href="#">
            Necklaces
          </a>
        </nav> */}
        <nav className={styles.links}> <h5 className={styles.linkTitle}>ADDRESS</h5>
          <a target="_blank" className={styles.link} href="https://maps.app.goo.gl/cifPiyGFvuo4Kbwb6">
          Upper Ground Floor, Under Hotel STAR INN, 06, Swami Dayanand Marg, opposite Chandralok Vaishno Dhaba, Old Dhan Mandi, Sri Ganganagar, Rajasthan 335001
          </a>
          <a className={styles.link} href="tel: 9414210148">
          (+91) 94142 10148
          </a>
        </nav>
      </div>
      <div className={styles.footer}>
        <p>Copyright © {new Date().getFullYear()} Vishal Jewellers | Developed by <span>
        <a className={styles.link}  href="https://in.linkedin.com/in/khushal-malhotra">
           Khushal Malhotra
        </a>
        </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
