// Landing.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Video Games Project</h1>
      <p className={styles.description}>
        Start exploring the world of video games!
      </p>
      <Link to="/home" className={styles.button}>
        Get Started
      </Link>
    </div>
  );
};

export default Landing;
