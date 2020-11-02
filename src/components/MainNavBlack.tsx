import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../image/logo2.svg";
export const MainNavBlack: React.FC = () => {
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
              <Link to="/routes">Учебный центр</Link>
            </li>
            <li className="nav-link-black">
              <Link to="/routes">Маршруты полетов</Link>
            </li>
            <li className="nav-link-black">
              <Link to="/routes">Инфраструктура комплекса</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
