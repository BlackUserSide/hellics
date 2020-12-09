import React, { useState } from "react";
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
  return (
    <CenterContext.Provider value={centerContext}>
      <div className="center-collection">
        <div className="wrapper-image-col">
          <h1 className="h1">АВИАЦИОННЫЙ УЧЕБНЫЙ ЦЕНТР</h1>
        </div>
        <CenterItemWrapper />
      </div>
      <div className="text-composition-center-wrap">
        <TextCenter />
      </div>
    </CenterContext.Provider>
  );
};
