import React, { useContext, useState } from "react";
import { Context } from "../../LangContext";
import { CollectionRoutes } from "./CollectionRoutes";
interface IRoutesData {
  case: number;
}
export const RoutesWrapperItems: React.FC = () => {
  const [dataRoutes, setDataRoutes] = useState({
    case: 1,
  });
  const lang = useContext(Context);
  const handlerChange = (numberCase: number) => {
    setDataRoutes({ case: numberCase });
  };
  return (
    <div className="wrapper-collection-routes">
      <div className="nav-routes-wrap">
        <ul>
          <li onClick={() => handlerChange(1)}>
            <span>
              {lang === "ru" ? "Экскурсионные полеты" : "Sightseeing flights"}
            </span>
          </li>
          <li onClick={() => handlerChange(2)}>
            <span>
              {lang === "ru" ? "Популярные маршруты" : "Popular routes"}
            </span>
          </li>
          <li onClick={() => handlerChange(3)}>
            <span>
              {lang === "ru" ? "Города Север" : "Cities of the North"}
            </span>
          </li>
          <li onClick={() => handlerChange(4)}>
            <span>{lang === "ru" ? "Города Запад" : "Cities of the West"}</span>
          </li>
          <li onClick={() => handlerChange(5)}>
            <span>{lang === "ru" ? "Города Юг" : "Cities South"}</span>
          </li>
          <li onClick={() => handlerChange(6)}>
            <span>{lang === "ru" ? "Города Восток" : "Cities East"}</span>
          </li>
          <li onClick={() => handlerChange(7)}>
            <span>{lang === "ru" ? "Охота/Рыбалка" : "Hunting Fishing"}</span>
          </li>
          <li onClick={() => handlerChange(8)}>
            <span>
              {lang === "ru"
                ? "Яхт-клубы/загородные клубы"
                : "Yacht Clubs / Country Clubs"}
            </span>
          </li>
          <li onClick={() => handlerChange(9)}>
            <span>{lang === "ru" ? "Гольф-клубы" : "Golf clubs"}</span>
          </li>
          <li onClick={() => handlerChange(10)}>
            <span>
              {lang === "ru"
                ? "Отели/Парки/заповедники"
                : "Hotels / Parks / Reserves"}
            </span>
          </li>
          <li onClick={() => handlerChange(11)}>
            <span>
              {lang === "ru" ? "Подарочные сертификаты" : "Gift certificates"}
            </span>
          </li>
        </ul>
      </div>
      <CollectionRoutes cases={dataRoutes.case} />
    </div>
  );
};
