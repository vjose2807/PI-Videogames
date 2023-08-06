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
      <label>Órden Alfabético:</label>
      <select name="Order" onChange={(event) => ordenamiento(event)}>
        <option value="AllGames">Todos</option>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
        <option value="Rating">Rating</option>
      </select>
      <br />
      <label>Almacenamiento:</label>
      <select name="Datatype" onChange={(event) => filterDbAPI(event)}>
        <option value="AllGames">Todos</option>
        <option value="Stored Games">Juegos almacenados</option>
        <option value="Created Games">Juegos creados</option>
      </select>
      <br />
      <label>Género:</label>
      <select name="Filters" onChange={(event) => filterGenre(event)}>
        <option value="Genres">Todos</option>
        {allGenres?.map((genre, index) => {
          return (
            <option key={index} value={genre}>
              {genre}
            </option>
          );
        })}
      </select>
      <br />
      <button onClick={() => showAllVideogames()}>Todos los Videojuegos</button>
      <p>Filtros Aplicados:</p>
      <div className={style.contInfoFilters}>
        {filterInfo.length === 0 ? (
          <li>Sin filtros.</li>
        ) : filterInfo.length > 6 ? (
          <li>Límite de filtros.</li>
        ) : (
          filterInfo.map((filter, index) => {
            return (
              <div key={index} className={style.closeFilter}>
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
