import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";

import Searchbar from "../Searchbar/Searchbar";

const Navbar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(getAllGames());
    setCurrentPage(1);
  };

  return (
    <div className={style.contBarra}>
      <div className={style.contOptions}>
        <Link to="/home">
          <p onClick={handleHomeClick}>HOME</p>
        </Link>

        <Link to="/create">
          <p>CREATE GAME</p>
        </Link>

        <Link to="/about">
          <p>ABOUT</p>
        </Link>
      </div>

      <div>
        <Searchbar setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default Navbar;
