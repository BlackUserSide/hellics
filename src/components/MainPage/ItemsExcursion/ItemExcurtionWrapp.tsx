import React from "react";
import { Link } from "react-router-dom";

type TItem = {
  content: {
    name: string;
    id: number;
    time: string;
    image: string;
  };
};

export const ItemExcurtionWrapp: React.FC<TItem> = ({ content }) => {
  return (
    <div className="ItemExcurtionWrapp">
      <Link
        to={`/card/${content.id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div className="image-wrapper">
          <img src={content.image} alt="" />
        </div>
        <h3 className="h3">{content.name}</h3>
        <p>
          <span></span>
          {content.time}
        </p>
      </Link>
    </div>
  );
};
