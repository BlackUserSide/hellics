import React, { useContext } from "react";
import { Context } from "../../LangContext";
import { RoutesWrapperItems } from "./RoutesWrappItems";

export const RoutesCollection: React.FC = () => {
  const lang = useContext(Context);
  const h1 = lang === "ru" ? "Маршруты полетов" : "Flight routes";
  return (
    <div className="routes-wrap-collection">
      <div className="top-line">
        <h1 className="h1">{h1}</h1>
      </div>
      <RoutesWrapperItems />
    </div>
  );
};
