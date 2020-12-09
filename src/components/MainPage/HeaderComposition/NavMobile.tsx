import React from "react";
import { Link } from "react-router-dom";
import tellIcon from "../../../image/bx_bxs-phone-call.svg";
type TProps = {
  active: boolean;
  setMenu: any;
};
export const NavMobile: React.FC<TProps> = ({ active, setMenu }) => {
  return (
    <div className={`nav-mobile ${active ? "is-active" : ""}`}>
      <nav className="mobile-wrapper">
        <ul>
          <li>
            <span className="esc-wrapper" onClick={setMenu}>
              X
            </span>
          </li>
          <li>
            <img src={tellIcon} alt="" />
            <a href="tel:+7 (800) 551-77-96" className="link-phone">
              +7 (800) 551-77-96
            </a>
          </li>
          <li>
            <img src={tellIcon} alt="" />
            <a href="tel:+7 (800) 551-77-96" className="link-phone">
              +7 (800) 551-77-96
            </a>
          </li>
          <li>
            <Link to="">Учебный центр</Link>
          </li>
          <li>
            <Link to="">Маршруты полетов</Link>
          </li>
          <li>
            <Link to="">Инфраструктура комплекса</Link>
          </li>
          <li>
            <a href="/#" className="order-call-link">
              Заказать звонок
            </a>
          </li>
          <li>
            <a href="/#" className="order-fly-link">
              Заявка на полет
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
