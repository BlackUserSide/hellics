import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemExcursions } from "../../api/itemExcursions";
import { BlackHeader } from "../BlackHeader";
import { MainNavBlack } from "../MainNavBlack";
import { IRouteParam, IStateCard } from "./type";
import "./card.sass";
import { TextCardComposition } from "./TextCardComposition";

export const CardItemWrapper: React.FC = () => {
  const [dataItem, setDataItem] = useState<IStateCard>();
  const param = useParams<IRouteParam>();
  useEffect(() => {
    const data = ItemExcursions;

    if (param.id !== undefined) {
      const id = +param.id;
      const letData = data.find((e) => {
        if (e.id === id) {
          return e;
        } else return false;
      });
      setDataItem(letData);
    }
  }, []);
  console.log(dataItem);

  return (
    <>
      <BlackHeader />
      <MainNavBlack />
      <div className="card-item-wrapper">
        <div className="image-wrapper-s">
          <img src={dataItem?.image} alt="" />
        </div>
        <TextCardComposition content={dataItem} />
      </div>
    </>
  );
};
