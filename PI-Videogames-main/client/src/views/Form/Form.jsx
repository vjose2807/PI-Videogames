import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGames } from "../../redux/actions";
import validation from "./validate";
import styles from "./Form.module.css";

const Form = ({ allGenres, allPlatforms }) => {
  const allVideogames = useSelector((state) => state.allGames);
  const dispatch = useDispatch();

  const [gameData, setGameData] = useState({
    name: "",
    image: "",
    description: "",
    platforms: [],
    released: "",
    rating: 0,
    genres: [],
  });

  const [errors, setErrors] = useState({
    name: "Agregar información.",
    image: "Agregar información.",
    description: "Agregar información.",
    released: "Agregar información.",
    rating: "Agregar información.",
    platforms: "Agregar información.",
    genres: "Agregar información.",
  });

  const handleChange = (event) => {
    const prop = event.target.name;
    const value = event.target.value;

    setGameData({ ...gameData, [prop]: value });
    setErrors(validation({ ...gameData, [prop]: value }, allVideogames));
  };

  const handleSubmit = (event) => {
    if (gameData.name === "") event.preventDefault(); // Sirve para que la página no haga refresh por defecto.
    dispatch(createGames(gameData));
  };

  const ratingInCero = (event) => {
    if (!gameData.rating) event.target.value = 0;
  };
  console.log(allGenres);
  return (
    <div className={styles.globalCont}>
      <div className={styles.contForm}>
        <h2 className={styles.title}>🕹️ ADD YOUR GAME 🕹️</h2>

        <form onSubmit={handleSubmit} className={styles.formData}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={gameData.name}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="url"
            name="image"
            onChange={handleChange}
            value={gameData.image}
          />

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={gameData.description}
          />

          <label htmlFor="platforms">Platforms:</label>
          <select
            name="platforms"
            multiple
            onChange={handleChange}
            value={gameData.platforms}
          >
            {allPlatforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.name}
              </option>
            ))}
          </select>

          <label htmlFor="released">Released:</label>
          <input
            type="date"
            name="released"
            onChange={handleChange}
            value={gameData.released}
          />

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            onBlur={(event) => ratingInCero(event)}
            onChange={handleChange}
            step="0.01"
            value={gameData.rating}
          />

          <label htmlFor="genres">Choose your favorite genres:</label>
          <select
            name="genres"
            multiple
            onChange={handleChange}
            value={gameData.genres}
          >
            {Array.isArray(allGenres) &&
              allGenres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
          </select>

          {errors.flag === true ? (
            <button disabled className={styles.disabledButton}>
              Create Game
            </button>
          ) : (
            <button className={styles.button}>Create Game</button>
          )}
        </form>
      </div>

      <div className={styles.infoValidation}>
        <div className={styles.titleInfo}>
          <h2>📌 Validations:</h2>
          <p>
            - Deberán cumplirse las condiciones de validación para almacenar el
            nuevo videojuego en la base de datos, de lo contrario, los datos no
            se guardarán.
          </p>
        </div>
        <ul className={styles.uList}>
          <li className={errors.name ? styles.errorName : styles.validName}>
            Name: {errors.name ? errors.name : "Información correcta."}
          </li>
          <li className={errors.image ? styles.errorImg : styles.validImg}>
            Image: {errors.image ? errors.image : "Información correcta."}
          </li>
          <li
            className={errors.description ? styles.errorDes : styles.validDes}
          >
            Description:{" "}
            {errors.description ? errors.description : "Información correcta."}
          </li>
          <li className={errors.released ? styles.errorRel : styles.validRel}>
            Released:{" "}
            {errors.released ? errors.released : "Información correcta."}
          </li>
          <li className={errors.rating ? styles.errorRat : styles.validRat}>
            Rating: {errors.rating ? errors.rating : "Información correcta."}
          </li>
          <li className={errors.genres ? styles.errorGen : styles.validGen}>
            Genres: {errors.genres ? errors.genres : "Información correcta."}
          </li>
          <li
            className={errors.platforms ? styles.errorPlat : styles.validPlat}
          >
            Platforms:{" "}
            {errors.platforms ? errors.platforms : "Información correcta."}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Form;
