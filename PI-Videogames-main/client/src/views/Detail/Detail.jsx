import useGameDetail from "../../hooks/useGameDetail";
import style from "./Detail.module.css";

const Detail = () => {
  const game = useGameDetail();
  const backgroundImageStyle = {
    backgroundImage: `url(${game.image})`,
  };

  return (
    <div className={style.contGame} style={backgroundImageStyle}>
      {game.name ? (
        <>
          <div className={style.contAllInfo}>
            <div className={style.contTitleImg}>
              <h3>{game.name}</h3>
              <img className={style.imgGame} src={game.image} alt="" />
            </div>

            <div className={style.detailGame}>
              {game.createinDb === false ? (
                <>
                  <p>ID: {game.id}</p>
                  <p>Platforms: {game.platforms?.join(", ")}</p>
                  <p>Description:</p>
                  <div dangerouslySetInnerHTML={{ __html: game.description }} />
                  <p>Released: {game.released}</p>
                  <p>Rating: {String(game.rating).slice(0, 4)}</p>
                  <p>Genres: {game.genres?.join(", ")}</p>
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
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Detail;
