import React from "react";

import { IStateCard } from "./type";
import timeIcon from "../../image/time-vals.png";
type TProps = {
  content: IStateCard | undefined;
};

export const TextCardComposition: React.FC<TProps> = ({ content }) => {
  return (
    <div className="text-card-composition">
      <div className="top-line-wrapp-card">
        <h1 className="h1">{content?.name}</h1>
      </div>
      <div className="time-wrap">
        <p>{content?.time}</p>
      </div>
      <div className="flex-compose">
        <p>14 230 р.</p>
        <span>Заказать</span>
      </div>

      <div className="description-wrap">
        <p>
          <span>СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</span>МАРШРУТ “ЖИВОПИСНЫЙ”
        </p>
        <p>
          Реализуйте свою мечту! – Подарите себе или вашим близким 15-минутный
          полёт на современном вертолете, взгляните на жизнь города с высоты
          птичьего полета! Это незабываемые моменты ярких впечатлений и
          совершенно новых ощущений.
        </p>
        <p>
          Во время вертолетной экскурсии у вас будет возможность увидеть с
          высоты птичьего полета крупнейший выставочный комплекс «КРОКУС-ЭКСПО»,
          ландшафтный парк «Митино», Большой Строгинский затон и пересечь на
          вертолете Москву-реку.
        </p>
        <div className="price-text-wrap">
          <h3 className="h3">Стоимость экскурсии:</h3>
          <p>
            Robinson R44 – 14 230 руб (максимум 3 пассажира)
            <br /> Robinson R66 – 18 120 руб (максимум 4 пассажира)
            <br /> Airbus H130 – 30 350 руб (максимум 6 пассажиров)
          </p>
        </div>
        <p>
          Каждый пассажир (участник вертолетной экскурсии) застрахован на 2 000
          000 рублей.
        </p>
      </div>
    </div>
  );
};
