import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.textContainer}>
            <h6 className={styles.subtitle}>BEST COLLECTION</h6>
            <h1 className={styles.title}>High-End Jewellry Items</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <button className={styles.btn}> CONTACT US</button>
        </div>
    </section>
  )
}

export default Hero