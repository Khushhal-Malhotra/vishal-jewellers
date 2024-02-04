import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.links}>
          <a className={styles.link} href="https://www.instagram.com/vishaljewellerssgnr/" target="_blank">
            INSTAGRAM
          </a>
          <a className={styles.link} href="https://www.instagram.com/vishaljewellerssgnr/" target="_blank">
            FACEBOOK
          </a>
          <a className={styles.link} href="https://www.youtube.com/@VishalJewellersSGNR" target="_blank">
            YOUTUBE
          </a>
          {/* <a className={styles.link} href="#Gallery">
            EARRINGS
          </a>
          <a className={styles.link} href="#Gallery">
            NECKLACES
          </a> */}
        </nav>
        <div className={styles.logo}>
          <span className={styles.name}>VISHAL</span>{" "}
          <span className={styles.tagline}>JEWELLERS</span>
        </div>
        <nav className={styles.links}>
          <a className={styles.link} onClick={(e)=>{
              e.preventDefault();
          const gallery= document.getElementById("Gallery");
          gallery.scrollIntoView({behavior:'smooth'})
        }} href="#Gallery" >
            GALLERY
          </a>
          <a className={styles.link} onClick={(e)=>{
              e.preventDefault();
          const contact= document.getElementById("Contact");
          contact.scrollIntoView({behavior:'smooth'})
        }} href="#Contact">
            CONTACT
          </a>
          <a className={styles.link} href="#Testimonials" onClick={(e)=>{
              e.preventDefault();
          const testimonials= document.getElementById("Testimonials");
          testimonials.scrollIntoView({behavior:'smooth'})
        }} >
            TESTIMONIALS
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
