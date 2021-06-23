import React, { useContext } from "react";
import { Context } from "../../../LangContext";
import { Link } from "react-router-dom";

type TProps = {
  item: any;
};

export const InfraItemComposition: React.FC<TProps> = ({ item }) => {
  const lang = useContext(Context);
  return (
    <Link to={`/infrad/card/${item.id}`} className="infra-item">
      <img src={item.url} alt="" />
      <strong>{lang === "ru" ? item.name : item.engName}</strong>
    </Link>
  );
};
