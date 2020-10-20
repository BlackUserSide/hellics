import React from "react";
import { Link } from "react-router-dom";

export const MainNavBar = () => {
  return (
    <nav className="nav-wrap-main">
      <ul>
        <li className="nav-mail-link">
          <Link to="/lessens">Учебный центр</Link>
        </li>
        <li className="nav-mail-link">
          <Link to="/routes">Маршруты полетов</Link>
        </li>
        <li className="nav-mail-link">
          <Link to="/infrastructure">Инфраструктура комплекса</Link>
        </li>
      </ul>
    </nav>
  );
};
