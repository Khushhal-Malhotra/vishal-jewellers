import React from "react";
import styles from "./Features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={"promise.png"}
            alt="promise"
            height={40}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Quality promised</h2>
          <p className={styles.subtitle}>
            Have questions? Get in touch with us at any time.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={"bis.png"} alt="bis" height={40} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>BIS Hallmarked Gold</h2>
          <p className={styles.subtitle}>Purity is Verified</p>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img
            className={styles.img}
            src={"jewellry.png"}
            alt="jewellry"
            height={40}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Great Collection</h2>
          <p className={styles.subtitle}>Best & Elegant Designs</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
