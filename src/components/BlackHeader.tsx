import React, { useContext } from "react";
import phoneLogo from "../image/bx_bxs-phone-call.svg";
import { Context, LangContext } from "../LangContext";
export const BlackHeader: React.FC = () => {
  const { changeLang } = useContext(LangContext);
  const change = (lang: string) => {
    localStorage.setItem("lang", lang);
    changeLang(lang);
  };
  const lang = useContext(Context);
  const callOrder = lang === "ru" ? "Заказать звонок" : "Request a call";
  return (
    <header className="site-header-black">
      <div className="nav-contact">
        <a href="/#">
          <img src={phoneLogo} alt="" />
          7(800)551-77-96
        </a>
        <a href="/#">
          <img src={phoneLogo} alt="" />
          7(800)551-77-96
        </a>
      </div>
      <a href="/#" className="routes-link">
        {callOrder}
      </a>
      <div className="link-lang">
        <div onClick={() => change("ru")} className="ru">
          <span>ru </span>
        </div>
        <span>/</span>
        <div onClick={() => change("eng")} className="eng">
          <span>eng</span>
        </div>
      </div>
    </header>
  );
};
