import React from "react";
import styles from "./HeroSection.module.css"
import Headphone from "../../assets/headphones.png"

const HeroSection = () => {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroTitle}>
                    <h1>100 Thousand Songs, ad-free</h1>
                    <h1>Over thousands podcast episodes</h1>
                </div>
                    <img className={styles.heroImage} src={Headphone} alt="Headphone" />
            </section>
        </>
    )
}

export default HeroSection;