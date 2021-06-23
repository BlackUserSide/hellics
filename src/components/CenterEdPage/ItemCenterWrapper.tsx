import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TCenterType } from "../../api/ItemCenter";
import LogoImage from "../../image/itemCenter/1.jpg";
import { Context } from "../../LangContext";
type TProps = {
  content: TCenterType;
};

export const ItemCenterWrapper: React.FC<TProps> = ({ content }) => {
  const lang = useContext(Context);
  return (
    <>
      <Link to={`/card-center/${content.id}`}>
        <div className="item-center">
          <div className="image-wrapper">
            <img src={LogoImage} alt="" />
          </div>
          <h3 className="h3">
            {lang === "ru" ? content.name : content.nameEng}
          </h3>
          <p className="price-wrappe">{content.price}₽</p>
        </div>
      </Link>
    </>
  );
};
