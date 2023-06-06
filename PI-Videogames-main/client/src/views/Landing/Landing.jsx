import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";


const Landing  = ()=> {
    
    return(
        <div className={style.Landing}>
            <h1 >Welcome to Videogames Proyect</h1>
            <p><Link to='/home'>Start</Link></p>
        </div>
    )
}

export default Landing;

