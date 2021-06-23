import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../LangContext";

type TItem = {
  content: {
    name: string;
    id: number;
    time: string;
    image: string;
    nameEng: string;
    descEng: string;
  };
};

export const ItemExcurtionWrapp: React.FC<TItem> = ({ content }) => {
  const lang = useContext(Context);
  return (
    <div className="ItemExcurtionWrapp">
      <Link
        to={`/card/${content.id}`}
        style={{ textDecoration: "none", color: "#000" }}
      >
        <div className="image-wrapper">
          <img src={content.image} alt="" />
        </div>
        <h3 className="h3">{lang === "ru" ? content.name : content.nameEng}</h3>
        <p>
          <span></span>
          {content.time}
        </p>
      </Link>
    </div>
  );
};
