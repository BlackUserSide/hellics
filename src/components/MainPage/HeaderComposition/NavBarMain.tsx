import React, { useContext, useState } from "react";
import tellIcon from "../../../image/bx_bxs-phone-call.svg";
import { Context, LangContext } from "../../../LangContext";
import { PopUpForm } from "../../CartItem/PopUpForm";

export const NavBarMain = () => {
  const [popUp, setPopUp] = useState(false);
  const { changeLang } = useContext(LangContext);
  const change = (lang: string) => {
    localStorage.setItem("lang", lang);
    changeLang(lang);
  };
  const lang = useContext(Context);
  const callOrder = lang === "ru" ? "Заказать звонок" : "Request a call";
  const call = lang === "ru" ? "Заявка на полет" : "Flight application";

  return (
    <nav className="main-nav-wrapper">
      <ul className="nav-main">
        <li className="link-wrapper-main">
          <img src={tellIcon} alt="" />
          <a href="tel:+7 (800) 551-77-96" className="link-phone">
            +8-800-555-61-47
          </a>
        </li>
        <li onClick={() => setPopUp(true)} className="link-wrapper-main">
          <a href="/#" className="order-call-link">
            {callOrder}
          </a>
        </li>
        <li onClick={() => setPopUp(true)} className="link-wrapper-main">
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
      {popUp ? <PopUpForm content={0} value={0} /> : ""}
    </nav>
  );
};
