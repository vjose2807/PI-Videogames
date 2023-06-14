import style from "./Filters.module.css";
import { useDispatch } from "react-redux";
import {
  cleanInfoFilters,
  deleteGenre,
  filterGamesDBorAPI,
  filterGenres,
  getAllGames,
  orderGames,
} from "../../redux/actions";

const Filters = ({ allGenres, setCurrentPage, filterInfo }) => {
  const dispatch = useDispatch();

  const ordenamiento = (event) => {
    const selectedOrder = event.target.value;
    if (selectedOrder === "AllGames") {
      dispatch(cleanInfoFilters());
      dispatch(getAllGames());
    } else {
      dispatch(orderGames(selectedOrder));
    }
    setCurrentPage(1);
  };

  const filterGenre = (event) => {
    const selectedGenre = event.target.value;
    if (selectedGenre === "Genres") {
      dispatch(cleanInfoFilters());
      dispatch(getAllGames());
    } else {
      dispatch(filterGenres(selectedGenre));
    }
    setCurrentPage(1);
  };

  const filterDbAPI = (event) => {
    const selectedStorage = event.target.value;
    if (selectedStorage === "AllGames") {
      dispatch(cleanInfoFilters());
      dispatch(getAllGames());
    } else {
      dispatch(filterGamesDBorAPI(selectedStorage));
    }
    setCurrentPage(1);
  };

  const showAllVideogames = () => {
    dispatch(cleanInfoFilters());
    dispatch(getAllGames());
    setCurrentPage(1);
  };

  const onCloseFilter = (filter) => {
    dispatch(deleteGenre(filter));
  };

  return (
    <div className={style.contFilters}>
      <p>Filtrar juegos por:</p>
      <label>*Órden Alfabético:</label>
      <select name="Order" onChange={(event) => ordenamiento(event)}>
        <option value="AllGames">All Games</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        <option value="Rating">Rating</option>
      </select>
      <br />
      <label>*Almacenamiento:</label>
      <select name="Datatype" onChange={(event) => filterDbAPI(event)}>
        <option value="AllGames">All Games</option>
        <option value="Stored Games">Stored Games</option>
        <option value="Created Games">Created Games</option>
      </select>
      <br />
      <label>*Géneros:</label>
      <select name="Filters" onChange={(event) => filterGenre(event)}>
        <option value="Genres">All Genres</option>
        {allGenres?.map((genre) => {
          return <option value={genre}>{genre}</option>;
        })}
      </select>
      <br />
      <button onClick={() => showAllVideogames()}>
        Mostrar todos los Videojuegos
      </button>
      <p>Filtros Aplicados:</p>
      <div className={style.contInfoFilters}>
        {filterInfo.length === 0 ? (
          <li>Sin filtros.</li>
        ) : filterInfo.length > 6 ? (
          <li>Límite de filtros.</li>
        ) : (
          filterInfo.map((filter) => {
            return (
              <div className={style.closeFilter}>
                <button
                  className={style.delButton}
                  onClick={() => onCloseFilter(filter)}
                >
                  ❌
                </button>
                <p>{filter}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Filters;
