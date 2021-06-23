import React, { useContext } from "react";
import { Link } from "react-router-dom";
import tellIcon from "../../../image/bx_bxs-phone-call.svg";
import { Context, LangContext } from "../../../LangContext";
type TProps = {
  active: boolean;
  setMenu: any;
};
export const NavMobile: React.FC<TProps> = ({ active, setMenu }) => {
  const { changeLang } = useContext(LangContext);
  const change = (lang: string) => {
    localStorage.setItem("lang", lang);
    changeLang(lang);
  };
  const lang = useContext(Context);
  const callOrder = lang === "ru" ? "Заказать звонок" : "Request a call";
  const call = lang === "ru" ? "Заявка на полет" : "Flight application";
  const lessens = lang === "ru" ? "Учебный центр" : "The educational center";
  const routes = lang === "ru" ? "Маршруты полетов" : "Flight routes";
  const infrastructure =
    lang === "ru" ? "Инфраструктура комплекса" : "Complex infrastructure";

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
            <Link to="/educational-center">{lessens}</Link>
          </li>
          <li>
            <Link to="/routes">{routes}</Link>
          </li>
          <li>
            <Link to="">{infrastructure}</Link>
          </li>
          <li>
            <a href="/#" className="order-call-link">
              {callOrder}
            </a>
          </li>
          <li>
            <a href="/#" className="order-fly-link">
              {call}
            </a>
          </li>
          <li className="link-wrapper-main">
            <div onClick={() => change("ru")} className="ru">
              <span>ru </span>
            </div>
            <span>/</span>
            <div onClick={() => change("eng")} className="eng">
              <span>eng</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};
