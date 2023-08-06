import React from "react";
import useGameDetail from "../../hooks/useGameDetail";
import styles from "./Detail.module.css";

const Detail = () => {
  const game = useGameDetail();
  const backgroundImageStyle = {
    position: "relative",
  };

  const backgroundOverlayStyle = {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${game.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.4, // Ajusta el valor de opacidad para la imagen de fondo
    borderRadius: "30px", // Opcional: agrega bordes redondeados a la imagen de fondo
  };
  return (
    <div className={styles.globalCont}>
      <div className={styles.contGame} style={backgroundImageStyle}>
        <div style={backgroundOverlayStyle}></div>
        {game.name ? (
          <div className={styles.contAllInfo}>
            <div className={styles.detailGame}>
              {game.createinDb === false ? (
                <>
                  <p>ID: {game.id}</p>
                  <p>Platforms: {game.platforms?.join(" | ")}</p>
                  <p>Description:</p>
                  <div dangerouslySetInnerHTML={{ __html: game.description }} />
                  <p>Released: {game.released}</p>
                  <p>Rating: {String(game.rating).slice(0, 4)}</p>
                  <p>Genres: {game.genres?.join(" | ")}</p>
                </>
              ) : (
                <>
                  <p>ID: {game.id}</p>
                  <p>Platforms: {game.platforms?.join(", ")}</p>
                  <p>Description:</p>
                  <div dangerouslySetInnerHTML={{ __html: game.description }} />
                  <p>Released: {game.released}</p>
                  <p>Rating: {String(game.rating).slice(0, 4)}</p>
                  <p>
                    Genres: {game.genres?.map((genre) => genre.name).join(", ")}
                  </p>
                </>
              )}
            </div>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
};

export default Detail;
