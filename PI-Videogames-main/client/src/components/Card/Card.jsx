import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, genres, image, rating, createinDb }) => {
  return (
    <div className={style.Card}>
      <Link to={`/detail/${id}`}>
        <h4>{name}</h4>
      </Link>
      <img className={style.imgCards} src={image} alt="img" />
      <p>Genre: {getGenres(genres, createinDb)}</p>
      <p>Rating: {createinDb ? rating.toString().slice(0, 4) : rating}</p>
    </div>
  );
};

const getGenres = (genres, createinDb) => {
  if (createinDb) {
    return genres.map((genre) => genre.name).join(", ");
  } else {
    return genres.join(", ");
  }
};

export default Card;
