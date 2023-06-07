import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actions";
import styles from "./Searchbar.module.css";

const SearchBar = ({ setCurrentPage }) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setName(event.target.value); //Guardo el valor del input en un estado local.
  };

  const onSearch = (name) => {
    dispatch(getGameByName(name)); //Busco el juego por name.
    setCurrentPage(1);
  };

  return (
    <div className={styles["search-bar-container"]}>
      <input
        type="search"
        className={styles["search-bar-input"]}
        onChange={handleChange}
      />
      <button
        className={styles["search-bar-button"]}
        onClick={() => onSearch(name)}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
