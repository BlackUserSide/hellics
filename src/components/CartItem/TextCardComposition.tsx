import React, { useContext, useState } from "react";

import { IStateCard } from "./type";
import timeIcon from "../../image/time-vals.png";
import Select from "react-select";
import { PopUpForm } from "./PopUpForm";
import { Context } from "../../LangContext";

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
    popUpStats: false,
  });
  const lang = useContext(Context);

  const option: Array<ArraySelect> = [];
  content?.priceTrans.map((e, i) => {
    option.push({ label: `${e.name} (до ${e.candidate} человек)`, value: i });
  });
  const selectHandler = (select: any) => {
    if (select) {
      setDataHel((prev) => ({
        ...prev,
        value: select.value,
      }));
    }
  };
  const popUpHandler = () => {
    if (dataHel.popUpStats) {
      setDataHel((prev) => ({
        ...prev,
        popUpStats: false,
      }));
      return;
    }
    setDataHel((prev) => ({
      ...prev,
      popUpStats: true,
    }));
  };
  return (
    <>
      <div className="text-card-composition">
        <div className="top-line-wrapp-card">
          <h1 className="h1">
            {lang === "ru" ? content?.name : content?.nameEng}
          </h1>
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
            value={option[dataHel.value]}
          />
          <p>{content?.priceTrans[dataHel.value].price} р.</p>
          <span className="btn btn-wrapper" onClick={popUpHandler}>
            {lang === "ru" ? "Заказать" : "To Order"}
          </span>
        </div>

        <div className="description-wrap">
          <p>{lang === "ru" ? content?.descMain : content?.descEng}</p>
        </div>
        <div className="wrapper-price-data"></div>
      </div>
      {dataHel.popUpStats ? (
        <PopUpForm
          content={content}
          value={dataHel.value}
          //popUpHandler={popUpHandler}
        />
      ) : (
        ""
      )}
    </>
  );
};
