import React, { useContext } from "react";
import { TArrayItem } from "./types";
import timeIcon from "../../image/time-vals.png";
import { Link } from "react-router-dom";
import { Context } from "../../LangContext";
type TProps = {
  content: TArrayItem;
};

export const ItemRouteWrap: React.FC<TProps> = ({ content }) => {
  const lang = useContext(Context);

  return (
    <div className="item-wrapper-route">
      <Link
        to={`/card/${content.id}`}
        style={{ color: "#000", textDecoration: "none" }}
      >
        <div className="image-wrapper">
          <img src={content.image} alt="" />
        </div>
        <div className="name-wrapper">
          <span>{lang === "ru" ? content.name : content.nameEng}</span>
        </div>
        <div className="time-wrapper">
          <img src={timeIcon} alt="" />
          <span>{content.time}</span>
        </div>
      </Link>
    </div>
  );
};
