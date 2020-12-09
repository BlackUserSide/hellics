import React, { useEffect, useState } from "react";
import { ItemCenter, TCenterType } from "../../api/ItemCenter";
import { CollectionItemWrapper } from "./CollectionItemWrapper";
import { NavCenterWrapper } from "./NavCenterWrapper";

export const CenterItemWrapper: React.FC = () => {
  const [dataCenter, setDataCenter] = useState<Array<TCenterType>>([]);

  useEffect(() => {
    setDataCenter(ItemCenter);
  }, []);
  return (
    <div className="center-item-wrapper">
      <NavCenterWrapper />
      <div className="item-center-wrapper">
        <CollectionItemWrapper dataCenter={dataCenter} />
      </div>
    </div>
  );
};
