import React, { useContext } from "react";
import { Context } from "../../LangContext";
import { BlackHeader } from "../BlackHeader";
import { MainNavBlack } from "../MainNavBlack";
import { InfraItemComposition } from "./InfraComposition/InfraItemComposition";
import { infrastuctureData } from "./infrastuctureData";
import "./infra.sass";

export const InfraMain: React.FC = () => {
  const lang = useContext(Context);
  return (
    <div className="infra-main">
      <BlackHeader />
      <MainNavBlack />
      <h1>
        {lang === "ru"
          ? "ИНФРАСТРУКТУРА КОМПЛЕКСА"
          : "INFRASTRUCTURE OF THE COMPLEX"}
      </h1>
      <div className="items">
        {infrastuctureData.map((e, i) => (
          <InfraItemComposition item={e} key={i} />
        ))}
      </div>
    </div>
  );
};
