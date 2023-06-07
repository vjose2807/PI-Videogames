import styles from "./Form.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createGames } from "../../redux/actions";
import validation from "./validate";

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

  const AddPlatform = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.getAttribute("data-value");

    if (isChecked) {
      setGameData({
        ...gameData,
        platforms: [...gameData.platforms, value],
      });
    } else {
      setGameData({
        ...gameData,
        platforms: gameData.platforms.filter((plat) => plat !== value),
      });
    }
  };

  const AddGenres = (event) => {
    const isChecked = event.target.checked;
    const value = event.target.getAttribute("data-value");
    if (isChecked) {
      setGameData({
        ...gameData,
        genres: [...gameData.genres, value],
      });
      setErrors(
        validation(
          { ...gameData, genres: [...gameData.genres, value] },
          allVideogames
        )
      );
    } else {
      setGameData({
        ...gameData,
        genres: gameData.genres.filter((gen) => gen !== value),
      });
      setErrors(
        validation(
          {
            ...gameData,
            genres: gameData.genres.filter((gen) => gen !== value),
          },
          allVideogames
        )
      );
    }
  };

  const handleSubmit = (event) => {
    if (gameData.name === "") event.preventDefault(); //Sirve para que la página no haga refresh por default.
    dispatch(createGames(gameData));
  };
  const ratingInCero = (event) => {
    if (!gameData.rating) event.target.value = 0;
  };

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
          ></input>

          <label htmlFor="description">Description:</label>
          <textarea
            name="description"
            onChange={handleChange}
            value={gameData.description}
          ></textarea>

          <label htmlFor="platforms">Platforms:</label>
          <div className={styles.contPlatforms}>
            {Array.isArray(allPlatforms) &&
              allPlatforms?.map((platform) => {
                return (
                  <div key={platform.id}>
                    <input
                      type="checkbox"
                      onChange={AddPlatform}
                      value={platform.id}
                    />
                    <label htmlFor={platform.id}>{platform.name}</label>
                  </div>
                );
              })}
          </div>

          <label htmlFor="released">Released:</label>
          <input
            type="date"
            name="released"
            onChange={handleChange}
            value={gameData.released}
          ></input>

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            onBlur={(event) => ratingInCero(event)}
            onChange={handleChange}
            step="0.01"
            value={gameData.rating}
          ></input>

          <label htmlFor="genres">Choose your favorites Genres:</label>
          <div className={styles.contGenres}>
            {Array.isArray(allGenres) &&
              allGenres?.map((genre) => {
                return (
                  <div key={genre.id} className={styles.labelContainer}>
                    <input
                      type="checkbox"
                      onChange={AddGenres}
                      value={genre.id}
                    />
                    <label htmlFor={genre.id}>{genre.name}</label>
                  </div>
                );
              })}
          </div>
          {errors.flag === true ? (
            <button disabled>Create Game</button>
          ) : (
            <button>Create Game</button>
          )}
        </form>
      </div>

      <div className={styles.infoValidation}>
        <div className={styles.titleInfo}>
          <h2>📌 Validaciones:</h2>
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
