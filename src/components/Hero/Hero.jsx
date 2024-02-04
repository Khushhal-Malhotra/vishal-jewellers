import React from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.textContainer}>
            <h6 className={styles.subtitle}>BEST COLLECTION</h6>
            <h1 className={styles.title}>High-End Jewellry Items</h1>
            <p className={styles.desc}>Whether you’re looking for a stunning engagement ring, a sentimental keepsake, or a stylish fashion piece, you’ll find it here at Vishal Jewellers.</p>
        <button onClick={()=>{
          const contact= document.getElementById("Contact");
          contact.scrollIntoView({behavior:'smooth'})
        }} className={styles.btn}> CONTACT US</button>
        </div>
    </section>
  )
}

export default Hero