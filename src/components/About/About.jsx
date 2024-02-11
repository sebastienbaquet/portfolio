import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>à propos</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/photo.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3> Développement Front-end </h3>
              <p>
              Programmation des routes du front-end vers back-end en get,put,post,delete.
              Conception des composants avec son Css.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Développemnt Back-end </h3>
              <p>
              Programmation des routes du back-end vers SQL en get,put,post,delete.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI designe</h3>
              <p>
             Conception de la maquette sur figma est mise en  production du figma.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
