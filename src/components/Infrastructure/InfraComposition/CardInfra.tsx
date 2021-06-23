import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../../LangContext";
import { BlackHeader } from "../../BlackHeader";
import { MainNavBlack } from "../../MainNavBlack";
import { IInfraData, infrastuctureData } from "../infrastuctureData";
import "../infra.sass";

interface IParam {
  id: string | undefined;
}

export const CardInfra: React.FC = () => {
  const lang = useContext(Context);
  const { id } = useParams<IParam>();
  const [state, setState] = useState<any>([]);

  useEffect(() => {
    const data = infrastuctureData.find((e, i) => {
      if (e.id === Number(id)) {
        return e;
      } else return false;
    });
    setState(data);
  }, [id]);

  console.log(state.data, "state");

  return (
    <div className="card-item">
      <BlackHeader />
      <MainNavBlack />
      <div className="items-card">
        <h1>{lang === "ru" ? state.name : state.engName}</h1>

        {state.data !== undefined ? (
          <p>{lang === "ru" ? state.data[0].text1 : state.data[0].textEng}</p>
        ) : (
          ""
        )}

        {state.data !== undefined && state.data[0].url !== "" ? (
          <img src={state.data[0].url} alt="" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
