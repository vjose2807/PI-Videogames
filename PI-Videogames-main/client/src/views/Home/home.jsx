import Card from "../../components/Card/Card.jsx";
import style from "./home.module.css"; //CSS

import Paginado from "../../components/Paginator/Paginator.jsx";

import { useState } from "react";
import { useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters.jsx";

const Home = ({ allGenres, currentPage, setCurrentPage }) => {
  const games = useSelector((state) => state.filterGames);
  const filterInfo = useSelector((state) => state.filterInfo);
  //Paginado----------------------------------------------------------
  const [gamesPag] = useState(15);
  const lastGameIndex = currentPage * gamesPag;
  const firstGameIndex = lastGameIndex - gamesPag;
  const currentGames = games.slice(firstGameIndex, lastGameIndex);
  //-------------------------------------------------------------------

  return (
    <div className={style.globalCont}>
      <div className={style.filtersCont}>
        <Filters
          allGenres={allGenres}
          setCurrentPage={setCurrentPage}
          filterInfo={filterInfo}
        />
      </div>

      <div className={style.contVideogames}>
        <div className={style.contPags}>
          <Paginado
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            cantGames={games.length}
            gamesPag={gamesPag}
          />
        </div>
        <div className={style.ContCards}>
          {games.length !== 0 ? (
            currentGames.map(
              ({ id, name, genres, Genres, image, rating, createinDb }) => {
                return (
                  <Card
                    key={id}
                    id={id}
                    name={name ? name : "Videogame Name"}
                    genres={createinDb === true ? Genres : genres}
                    image={image}
                    rating={rating}
                    createinDb={createinDb}
                  />
                );
              }
            )
          ) : games.length === 0 && filterInfo.length !== 0 ? (
            <div className={style.textAlert}>
              <h2>No se encontraron videojuegos para los filtros aplicados</h2>
            </div>
          ) : (
            <div className={style.contLoading}>
              <h2>Loading...</h2>
              <img
                className={style.imgChargeGame}
                src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                alt="gif"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
