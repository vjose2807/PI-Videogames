import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Bienvenido a Videogames Project</h1>
      <p className={styles.aboutText}>
        Videogames Project es una plataforma dedicada a brindarte los últimos y
        mejores videojuegos de todo el mundo. Nuestra misión es proporcionar a
        los jugadores una base de datos completa de juegos, con información
        detallada, calificaciones y reseñas de usuarios. Ya seas un jugador
        casual o un entusiasta apasionado, tenemos algo para todos.
      </p>
      <p className={styles.aboutText}>
        Nuestro equipo de apasionados jugadores trabaja incansablemente para
        curar una colección diversa de videojuegos que abarca varios géneros y
        plataformas. Desde emocionantes juegos de disparos hasta inmersivas
        aventuras de rol, lo encontrarás todo aquí. También tenemos una sección
        especial para juegos creados por usuarios, permitiendo a desarrolladores
        aspirantes mostrar sus talentos.
      </p>
      <p className={styles.aboutText}>
        En Videogames Project, creemos que los videojuegos deben ser accesibles
        para todos. Es por eso que ofrecemos una interfaz fácil de usar que
        facilita la búsqueda y el descubrimiento de nuevos juegos. Ya sea que
        busques los últimos lanzamientos o clásicos atemporales, nuestra
        plataforma lo tiene todo cubierto.
      </p>
      <p className={styles.aboutText}>
        Únete a nosotros en este emocionante viaje de juegos. Explora, descubre
        y conecta con otros jugadores. No te pierdas la oportunidad de
        experimentar lo mejor del mundo de los videojuegos al alcance de tus
        manos.
      </p>
    </div>
  );
};

export default About;
