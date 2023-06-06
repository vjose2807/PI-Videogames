import { useState } from "react";
import { useDispatch } from "react-redux";
import { getGameByName } from "../../redux/actions";

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
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={() => onSearch(name)}>Buscar</button>
    </div>
  );
};

export default SearchBar;
