import React, { useContext, useState } from "react";
import { Context } from "../../LangContext";
import { CenterItemWrapper } from "./CenterItemWrapper";
import { CenterContext } from "./context/CenterContext";
import { TContextTypeCenter } from "./context/type";
import { TextCenter } from "./TextCenter";

export const CenterCollection: React.FC = () => {
  const [category, setCategory] = useState<string>("1");
  const centerContext: TContextTypeCenter = {
    categoryValue: category,
    changeCategory: (categoryVal: string) => {
      if (categoryVal === category) {
        return;
      }
      setCategory(categoryVal);
    },
  };
  const lang = useContext(Context);
  return (
    <CenterContext.Provider value={centerContext}>
      <div className="center-collection">
        <div className="wrapper-image-col">
          <h1 className="h1">
            {lang === "ru"
              ? "АВИАЦИОННЫЙ УЧЕБНЫЙ ЦЕНТР"
              : "AVIATION TRAINING CENTER"}
          </h1>
        </div>
        <CenterItemWrapper />
      </div>
      <div className="text-composition-center-wrap">
        <TextCenter />
      </div>
    </CenterContext.Provider>
  );
};
