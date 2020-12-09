import React, { useContext, useEffect, useState } from "react";
import { TCenterType } from "../../api/ItemCenter";
import { CenterContext } from "./context/CenterContext";
import { ItemCenterWrapper } from "./ItemCenterWrapper";

type TProps = {
  dataCenter: Array<TCenterType>;
};

export const CollectionItemWrapper: React.FC<TProps> = ({ dataCenter }) => {
  const [activeData, setActiveData] = useState<Array<TCenterType>>([]);
  const { categoryValue } = useContext(CenterContext);
  useEffect(() => {
    let dataActive: Array<TCenterType> = [];

    dataCenter.map((e) => {
      if (e.category === categoryValue) {
        dataActive.push(e);
      }
      return false;
    });

    setActiveData(dataActive);
  }, [categoryValue, dataCenter]);

  return (
    <div className="collection-item-wrap">
      {activeData.map((e, i) => (
        <ItemCenterWrapper content={e} key={i} />
      ))}
    </div>
  );
};
