import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, genres, image, rating, createinDb }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className={style.Card} style={backgroundImageStyle}>
        <Link to={`/detail/${id}`}>
          <h4>{name}</h4>
        </Link>
      </div>
    </div>
  );
};

export default Card;
