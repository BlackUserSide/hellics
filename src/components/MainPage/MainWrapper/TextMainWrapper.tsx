import React, { useContext } from "react";
import { Context } from "../../../LangContext";

export const TextMainWrapper = () => {
  const lang = useContext(Context);
  const name =
    lang === "ru" ? "Авиакомпания Heliluxury" : "Heliluxury Airlines";
  const order = lang === "ru" ? "ЗАКАЗ ПОЛЕТОВ" : "ORDERING FLIGHTS";
  const btn = lang === "ru" ? "Заказать" : "To order";

  return (
    <div className="text-composition-wrapper">
      <div className="logo-text">
        <p className="logo-main">{name}</p>
      </div>
      <div className="text-main">
        <h1 className="h1">{order}</h1>
        <div className="btn-order-text-composition">
          <span className="text-bt">{btn}</span>
          <span className="arrow-btn"></span>
        </div>
      </div>
    </div>
  );
};
