import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LogoImg from "../image/logo2.svg";
import { Context } from "../LangContext";
export const MainNavBlack: React.FC = () => {
  const lang = useContext(Context);
  const lessens = lang === "ru" ? "Учебный центр" : "The educational center";
  const routes = lang === "ru" ? "Маршруты полетов" : "Flight routes";
  const infrastructure =
    lang === "ru" ? "Инфраструктура комплекса" : "Complex infrastructure";
  return (
    <>
      <div className="main-nav-black-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={LogoImg} alt="" />
          </Link>
        </div>
        <nav className="main-nav-black">
          <ul className="nav-main-black">
            <li className="nav-link-black">
              <Link to="/educational-center">{lessens}</Link>
            </li>
            <li className="nav-link-black">
              <Link to="/routes">{routes}</Link>
            </li>
            <li className="nav-link-black">
              <Link to="/infra">{infrastructure}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
