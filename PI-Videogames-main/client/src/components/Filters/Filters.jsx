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

const Filters = ({ genresGames, setCurrentPage, filterInfo }) => {
  const dispatch = useDispatch();

  const ordenamiento = (event) => {
    dispatch(orderGames(event.target.value));
    setCurrentPage(1);
  };

  const filterGenre = (event) => {
    dispatch(filterGenres(event.target.value));
    setCurrentPage(1);
  };

  const filterDbAPI = (event) => {
    dispatch(filterGamesDBorAPI(event.target.value));
    setCurrentPage(1);
  };

  const showAllVideogames = () => {
    dispatch(cleanInfoFilters());
    dispatch(getAllGames());
  };

  const onCloseFilter = (filter) => {
    dispatch(deleteGenre(filter));
  };

  return (
    <div className={style.contFilters}>
      <p>Filtrar juegos por:</p>
      <label>*Órden Alfabético:</label>
      <select name="Order" onChange={ordenamiento}>
        <option value="AllGames">All Games</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        <option value="Rating">Rating</option>
      </select>
      <br />
      <label>*Almacenamiento:</label>
      <select name="Datatype" onChange={filterDbAPI}>
        <option value="AllGames">All Games</option>
        <option value="Stored Games">Stored Games</option>
        <option value="Created Games">Created Games</option>
      </select>
      <br />
      <label>*Géneros:</label>
      <select name="Filters" onChange={filterGenre}>
        <option value="Genres">All Genres</option>
        {genresGames?.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <br />
      <button onClick={showAllVideogames}>Mostrar todos los Videojuegos</button>
      <p>Filtros Aplicados:</p>
      <div className={style.contInfoFilters}>
        {filterInfo.length === 0 ? (
          <li>Sin filtros.</li>
        ) : filterInfo.length > 6 ? (
          <li>Límite de filtros.</li>
        ) : (
          filterInfo.map((filter) => (
            <div className={style.closeFilter} key={filter}>
              <button
                className={style.delButton}
                onClick={() => onCloseFilter(filter)}
              >
                ❌
              </button>
              <p>{filter}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filters;
