import React, { useState } from "react";

import { IStateCard } from "./type";
import timeIcon from "../../image/time-vals.png";
import Select from "react-select";

type TProps = {
  content: IStateCard | undefined;
};
type ArraySelect = {
  label: string;
  value: number;
};
export const TextCardComposition: React.FC<TProps> = ({ content }) => {
  const [dataHel, setDataHel] = useState({
    value: 0,
  });
  const option: Array<ArraySelect> = [];
  content?.priceTrans.map((e, i) => {
    option.push({ label: `${e.name} (до ${e.candidate} человек)`, value: i });
  });
  const selectHandler = (select: any) => {
    if (select) {
      setDataHel({ value: select.value });
    }
  };
  return (
    <div className="text-card-composition">
      <div className="top-line-wrapp-card">
        <h1 className="h1">{content?.name}</h1>
      </div>
      <div className="time-wrap">
        <img src={timeIcon} alt="" />
        <p>{content?.time}</p>
      </div>
      <div className="flex-compose">
        <Select
          options={option}
          onChange={selectHandler}
          placeholder={"Выберите тип вертолета"}
          className="select-atribute"
        />
        <p>{content?.priceTrans[dataHel.value].price} р.</p>
        <span className="btn btn-wrapper">Заказать</span>
      </div>

      <div className="description-wrap">
        <p>{content?.descMain}</p>
      </div>
    </div>
  );
};
