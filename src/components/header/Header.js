import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerleft">
        <Link to="/">
          {" "}
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="imdblogo"
          />
        </Link>
        <Link
          to="/movies/popular"
          style={{ textDecoration: "none", marginTop: "4px" }}
        >
          <span>POPULAR</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>TOP RATING</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>UPCOMING</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
