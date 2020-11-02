import React, { useState } from "react";
import { CollectionRoutes } from "./CollectionRoutes";
interface IRoutesData {
  case: number;
}
export const RoutesWrapperItems: React.FC = () => {
  const [dataRoutes, setDataRoutes] = useState({
    case: 1,
  });
  const handlerChange = (numberCase: number) => {
    setDataRoutes({ case: numberCase });
  };
  return (
    <div className="wrapper-collection-routes">
      <div className="nav-routes-wrap">
        <ul>
          <li onClick={() => handlerChange(1)}>
            <span>Экскурсионные полеты</span>
          </li>
          <li onClick={() => handlerChange(2)}>
            <span>Популярные маршруты</span>
          </li>
          <li onClick={() => handlerChange(3)}>
            <span>Города Север</span>
          </li>
          <li onClick={() => handlerChange(4)}>
            <span>Города Запад</span>
          </li>
          <li onClick={() => handlerChange(5)}>
            <span>Города Юг</span>
          </li>
          <li onClick={() => handlerChange(6)}>
            <span>Города Восток</span>
          </li>
          <li onClick={() => handlerChange(7)}>
            <span>Охота/Рыбалка</span>
          </li>
          <li onClick={() => handlerChange(8)}>
            <span>Яхт-клубы/загородные клубы</span>
          </li>
          <li onClick={() => handlerChange(9)}>
            <span>Гольф-клубы</span>
          </li>
          <li onClick={() => handlerChange(10)}>
            <span>Отели/парки/заповедники</span>
          </li>
          <li onClick={() => handlerChange(11)}>
            <span>Подарочные сертификаты</span>
          </li>
        </ul>
      </div>
      <CollectionRoutes cases={dataRoutes.case} />
    </div>
  );
};
