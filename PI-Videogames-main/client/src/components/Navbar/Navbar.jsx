import { Link } from "react-router-dom";
import style from "./Navbar.module.css";

import Searchbar from "../Searchbar/Searchbar";

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className={style.contBarra}>
      <div className={style.contOptions}>
        <Link to="/home">
          <p>HOME</p>
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
