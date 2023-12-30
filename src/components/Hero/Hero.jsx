import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>bonjour, je me présente Sébastien</h1>
        <p className={styles.description}>
        Je suis développeur full-stack depuis 5 mois en réact et NodeJS. si vous voulez en savoir plus!
        </p>
        <a href="mailto:bas.envoi@yahoo.fr" className={styles.contactBtn}>
          Contact Moi
        </a>
      </div>
      <img
        src={getImageUrl("hero/photo.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
