import useGameDetail from "../../hooks/useGameDetail";
import style from "./Detail.module.css";

const Detail = () => {
  const game = useGameDetail();

  return (
    <div className={style.contGame}>
      {game.name ? (
        <>
          <div className={style.contAllInfo}>
            <div className={style.contTitleImg}>
              <h2>Game Information</h2>
              <h3>{game.name}</h3>
              <img className={style.imgGame} src={game.image} alt="" />
            </div>

            <div className={style.detailGame}>
              {game.createinDb === false ? (
                <>
                  <p>ID: {game.id}</p>
                  <p>
                    Platforms:{" "}
                    {game.platforms
                      ?.map((platform) => platform.name)
                      .join(", ")}
                  </p>
                  <p>Description:</p>
                  <div dangerouslySetInnerHTML={{ __html: game.description }} />
                  <p>Released: {game.released}</p>
                  <p>Rating: {String(game.rating).slice(0, 4)}</p>
                  <p>Genres: {game.genres?.toString()}</p>
                </>
              ) : (
                <>
                  <p>ID: {game.id}</p>
                  <p>
                    Platforms:{" "}
                    {game.platforms
                      ?.map((platform) => platform.name)
                      .join(", ")}
                  </p>
                  <p>Description:</p>
                  <div dangerouslySetInnerHTML={{ __html: game.description }} />
                  <p>Released: {game.released}</p>
                  <p>Rating: {String(game.rating).slice(0, 4)}</p>
                  <p>
                    Genres: {game.genres?.map((genre) => genre.name).toString()}
                  </p>
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Detail;
