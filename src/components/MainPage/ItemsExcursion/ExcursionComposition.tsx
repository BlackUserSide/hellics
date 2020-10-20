import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ItemExcursions } from "../../../api/itemExcursions";
import { ItemExcurtionWrapp } from "./ItemExcurtionWrapp";
import "./items.sass";
export const ExcursionComposition = () => {
  const [dataExcursion] = useState(ItemExcursions);

  return (
    <>
      <div className="excursion-wrapper">
        {dataExcursion.map((e, i) => (
          <ItemExcurtionWrapp content={e} key={i} />
        ))}
      </div>
      <div className="link-wrap-to">
        <Link to="/routes" className="link-item">
          Все экскурсии
        </Link>
      </div>
    </>
  );
};
