import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ItemExcursions } from "../../../api/itemExcursions";
import { Context } from "../../../LangContext";
import { ItemExcurtionWrapp } from "./ItemExcurtionWrapp";
import "./items.sass";
export const ExcursionComposition = () => {
  const [dataExcursion, setExcursion] = useState([]);
  //console.log(dataExcursion, "data");

  useEffect(() => {
    const data: any = [];
    ItemExcursions.map((e: any, i) => {
      if (Number(e.id) < 3) data.push(e);
    });
    setExcursion(data);
  }, []);
  const lang = useContext(Context);
  const all = lang === "ru" ? "Все экскурсии" : "All excursions";
  return (
    <>
      <div className="excursion-wrapper">
        {dataExcursion.map((e: any, i: number) => (
          <ItemExcurtionWrapp content={e} key={i} />
        ))}
      </div>
      <div className="link-wrap-to">
        <Link to="/routes" className="link-item">
          {all}
        </Link>
      </div>
    </>
  );
};
