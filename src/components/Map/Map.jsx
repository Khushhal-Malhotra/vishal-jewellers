import React from "react";
import styles from "./Map.module.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h6 className={styles.subtitle}>Vishal Jewellers</h6>
        <h1 className={styles.Map}>MAP</h1>
        <h6 className={styles.subtitle}>
          Upper Ground Floor, Under Hotel STAR INN, 06, Swami Dayanand Marg,
          opposite Chandralok Vaishno Dhaba, Old Dhan Mandi, Sri Ganganagar,
          Rajasthan 335001
        </h6>
        <button className={styles.btn}>
          {" "}
          GET DIRECTIONS{" "}
          <svg className={styles.icon} fill="#000000"width="10px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.432 492.432" xmlSpace="preserve" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.9848640000000002"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_134_"> <path id="XMLID_135_" d="M142.238,492.432c-9.79,0-19.588-3.736-27.05-11.209c-14.945-14.934-14.945-39.162,0-54.098l180.9-180.909 l-180.9-180.91c-14.945-14.935-14.945-39.163,0-54.098c14.926-14.944,39.172-14.944,54.098,0l207.96,207.958 c14.943,14.935,14.943,39.164,0,54.1l-207.96,207.957C161.824,488.697,152.026,492.432,142.238,492.432z"></path> </g> </g></svg>
        </button>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13831.300330170745!2d73.8725625!3d29.9269375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b50e147b2c61%3A0x62f987df6b36f9e!2sVishal%20Jewellers!5e0!3m2!1sen!2sin!4v1705836472533!5m2!1sen!2sin"
        width="400"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
