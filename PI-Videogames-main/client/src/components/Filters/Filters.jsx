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
      <p className={style.filterTitle}>Filtrar juegos por:</p>
      <label className={style.filterLabel}>*Órden Alfabético:</label>
      <div className={style.filterRow}>
        <select
          name="Order"
          className={style.filterSelect}
          onChange={ordenamiento}
        >
          <option value="AllGames">All Games</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
          <option value="Rating">Rating</option>
        </select>
      </div>
      <label className={style.filterLabel}>*Almacenamiento:</label>
      <div className={style.filterRow}>
        <select
          name="Datatype"
          className={style.filterSelect}
          onChange={filterDbAPI}
        >
          <option value="AllGames">All Games</option>
          <option value="Stored Games">Stored Games</option>
          <option value="Created Games">Created Games</option>
        </select>
      </div>
      <label className={style.filterLabel}>*Géneros:</label>
      <div className={style.filterRow}>
        <select
          name="Filters"
          className={style.filterSelect}
          onChange={filterGenre}
        >
          <option value="Genres">All Genres</option>
          {genresGames?.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <button className={style.showAllButton} onClick={showAllVideogames}>
        Mostrar todos los Videojuegos
      </button>
      <p className={style.appliedFiltersTitle}>Filtros Aplicados:</p>
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
              <p className={style.filterInfo}>{filter}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Filters;
