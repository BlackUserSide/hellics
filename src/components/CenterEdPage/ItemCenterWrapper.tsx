import React from "react";
import { Link } from "react-router-dom";
import { TCenterType } from "../../api/ItemCenter";
import LogoImage from "../../image/itemCenter/1.jpg";
type TProps = {
  content: TCenterType;
};

export const ItemCenterWrapper: React.FC<TProps> = ({ content }) => {
  return (
    <>
      <Link to={`/card-center/${content.id}`}>
        <div className="item-center">
          <div className="image-wrapper">
            <img src={LogoImage} alt="" />
          </div>
          <h3 className="h3">{content.name}</h3>
          <p className="price-wrappe">{content.price}₽</p>
        </div>
      </Link>
    </>
  );
};
