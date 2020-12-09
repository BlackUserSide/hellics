import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCenter, TCenterType } from "../../api/ItemCenter";
import { BlackHeader } from "../BlackHeader";
import { IRouteParam } from "../CartItem/type";
import { MainNavBlack } from "../MainNavBlack";
import { CardCollectionCenter } from "./CardCollectionCenter";
import "./cartcenter.sass";
export const CardCenterWrapper: React.FC = () => {
  const [dataCenter, setDataCenter] = useState<TCenterType>({
    id: "0",
    name: "",
    period: "",
    typeHel: "",
    flyLes: "",
    les: "",
    exam: "",
    price: "",
    certification: "",
    docs: [],
    theory: [],
    practice: [],
    category: "",
    image: "",
  });
  const param = useParams<IRouteParam>();

  useEffect(() => {
    const dataItem = ItemCenter;
    if (param.id !== undefined) {
      dataItem.find((e) => {
        if (e.id === param.id) {
          setDataCenter(e);
          return e;
        }
        return "";
      });
    }
  }, [param]);
  return (
    <>
      <BlackHeader />
      <MainNavBlack />
      <div className="header-wrapper-card">
        <h1 className="h1">{dataCenter.name}</h1>
      </div>
      <CardCollectionCenter content={dataCenter} />
    </>
  );
};
