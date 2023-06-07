import { useSelector } from "react-redux";
import style from "./Paginator.module.css";

const Paginado = ({ currentPage, setCurrentPage, cantGames, gamesPag }) => {
  const allGames = useSelector((state) => state.filterGames);

  let pags = [];
  for (let i = 1; i <= Math.ceil(cantGames / gamesPag); i++) {
    pags.push(i);
  }
  return (
    <div>
      <div className={style.contPages}>
        <p>PAGE:</p>
        {currentPage !== 1 && allGames.length !== 0 ? (
          <button
            className={style.buttonPages}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            ◀
          </button>
        ) : allGames.length === 0 ? (
          <p>No hay juegos disponibles</p>
        ) : (
          <></>
        )}

        {pags.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? style.buttonC : style.button}
            >
              {page}
            </button>
          );
        })}

        {currentPage !== Math.ceil(cantGames / gamesPag) &&
        allGames.length !== 0 ? (
          <button
            className={style.buttonPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            ▶
          </button>
        ) : allGames.length === 0 ? (
          <></>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Paginado;
