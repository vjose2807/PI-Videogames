//import { useEffect } from "react";
import useGameDetail from "../../hooks/useGameDetail";
import style from "./Detail.module.css";
//import { getAllGames } from "../../redux/actions";
//import { useDispatch } from "react-redux";


//dangerouslySetInnerHTML={{ __html: CONTENIDO }}  Para la description.
const Detail = () => {
  const game = useGameDetail();
  
  return (
    <div className={style.contGame}>
      {game.name? (<>
        <div className={style.contAllInfo}>
          <div className={style.contTitleImg}>
            <h2>Game Information</h2>
            <h3>{game.name}</h3>
            <img className={style.imgGame} src={game.image} alt=""/>
          </div>
  
          <div className={style.detailGame}>          
            {(game.createinDb === false)? <>
              <p>ID: {game.id}</p>
              <p>Platforms: {game.platforms?.toString()}</p>
              <p>Description: {game.description}</p> 
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating}</p>
              <p>Genres: {game.genres?.toString()}</p>
            </>:<>
              <p>ID: {game.id}</p>
              <p>Platforms: {game.platforms?.toString()}</p>
              <p>Description: {game.description}</p>
              <p>Released: {game.released}</p>
              <p>Rating: {game.rating.slice(0,4)}</p>
              <p>Genres: {(game.Genres?.map((genre)=> genre.name)).toString()}</p>
            </>}                                     
          </div>
        </div>
      </>) : (<h2>Loading...</h2>)
      }
    </div>
  );
}

export default Detail;