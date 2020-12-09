import React from "react";
import { TArrayItem } from "./types";
import timeIcon from "../../image/time-vals.png";
import { Link } from "react-router-dom";
type TProps = {
  content: TArrayItem;
};

export const ItemRouteWrap: React.FC<TProps> = ({ content }) => {
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
          <span>{content.name}</span>
        </div>
        <div className="time-wrapper">
          <img src={timeIcon} alt="" />
          <span>{content.time}</span>
        </div>
      </Link>
    </div>
  );
};
