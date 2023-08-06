import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import style from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { getAllGames } from "../../redux/actions";
import SearchBar from "../Searchbar/Searchbar";

const Navbar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleHomeClick = () => {
    dispatch(getAllGames());
    setCurrentPage(1);
  };

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={style.navContainer}>
      {/* Contenedor para el botón del menú */}
      <div className={style.menuContainer}>
        {/* Mostrar el ícono del menú en dispositivos móviles */}
        <div className={style.menuIcon} onClick={handleMenuClick}>
          <FaBars />
        </div>

        {/* Mostrar el menú desplegable */}
        {isMenuOpen && (
          <div className={style.menuOptions}>
            <Link to="/home" onClick={handleMenuClick}>
              INICIO
            </Link>
            <Link to="/create" onClick={handleMenuClick}>
              CREAR JUEGO
            </Link>
            <Link to="/about" onClick={handleMenuClick}>
              ACERCA DE
            </Link>
          </div>
        )}
      </div>

      {/* Enlaces de navegación */}
      <div
        className={`${style.contOptions} ${
          isMenuOpen ? style.showMenu : style.hideMenu
        }`}
      >
        <Link to="/home" onClick={handleHomeClick}>
          <p>INICIO</p>
        </Link>

        <Link to="/create">
          <p>CREAR JUEGO</p>
        </Link>

        <Link to="/about">
          <p>ACERCA DE</p>
        </Link>
      </div>

      <div>
        <SearchBar setCurrentPage={setCurrentPage} />
      </div>

      {/* Enlace vacío para cubrir el contenido cuando el menú está abierto */}
      {isMenuOpen && (
        <div className={style.overlay} onClick={handleMenuClick}></div>
      )}
    </div>
  );
};

export default Navbar;
