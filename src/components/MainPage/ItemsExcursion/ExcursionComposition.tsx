import React, { useState } from "react";
import { ItemExcursions } from "../../../api/itemExcursions";
import { ItemExcurtionWrapp } from "./ItemExcurtionWrapp";
import "./items.sass";
export const ExcursionComposition = () => {
  const [dataExcursion] = useState(ItemExcursions);

  return (
    <div className="excursion-wrapper">
      {dataExcursion.map((e, i) => (
        <ItemExcurtionWrapp content={e} key={i} />
      ))}
    </div>
  );
};
