import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../LangContext";
import { LinkFooter } from "../../FooterComposition/LinkFooter";

export const TextMainWrapper = () => {
  const lang = useContext(Context);
  const name =
    lang === "ru" ? "Авиакомпания Heliluxury" : "Heliluxury Airlines";
  const order = lang === "ru" ? "ЗАКАЗ ПОЛЕТОВ" : "ORDERING FLIGHTS";
  const btn = lang === "ru" ? "Заказать" : "To order";

  const linkTo = () => {
    return <Link to="/routes" />;
  };

  return (
    <div className="text-composition-wrapper">
      <div className="logo-text">
        <p className="logo-main">{name}</p>
      </div>
      <div className="text-main">
        <h1 className="h1">{order}</h1>
        <div onClick={() => linkTo()} className="btn-order-text-composition">
          <Link to="/routes">
            <span className="text-bt">{btn}</span>
          </Link>
          <span className="arrow-btn"></span>
        </div>
      </div>
    </div>
  );
};
