import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../LangContext";

export const MainNavBar = () => {
  const lang = useContext(Context);
  const lessens = lang === "ru" ? "Учебный центр" : "The educational center";
  const routes = lang === "ru" ? "Маршруты полетов" : "Flight routes";
  const infrastructure =
    lang === "ru" ? "Инфраструктура комплекса" : "Complex infrastructure";

  return (
    <nav className="nav-wrap-main">
      <ul>
        <li className="nav-mail-link">
          <Link to="/educational-center">{lessens}</Link>
        </li>
        <li className="nav-mail-link">
          <Link to="/routes">{routes}</Link>
        </li>
        <li className="nav-mail-link">
          <Link to="/infrastructure">{infrastructure}</Link>
        </li>
      </ul>
    </nav>
  );
};
