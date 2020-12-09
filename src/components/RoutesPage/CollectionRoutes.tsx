import React, { useEffect, useState } from "react";
import { ItemExcursions } from "../../api/itemExcursions";
import { ItemRouteWrap } from "./ItemRouteWrap";
import { IStateItemRoute } from "./types";
import { titleChange } from "./types/Callback";
type TProps = {
  cases: number;
};

export const CollectionRoutes: React.FC<TProps> = ({ cases }) => {
  const [data, setData] = useState<IStateItemRoute>({
    dataItem: [],
    title: "",
  });
  const dataContent = ItemExcursions;
  useEffect(() => {
    let data: any = [];

    switch (cases) {
      case 1:
        data = dataContent.filter((e) => {
          if (e.category === cases) {
            return e;
          }
          return false;
        });
        break;
      case 2:
        data = dataContent.filter((e) => {
          if (e.category === cases) {
            return e;
          }
          return false;
        });
        break;
    }
    const title = titleChange(cases);
    setData((prev) => ({
      ...prev,
      dataItem: data,
      title: title,
    }));
  }, [cases, dataContent]);
  console.log(data);
  return (
    <div className="wrapper-item-routes-task">
      <div className="top-line-route-wrapper">
        <div className="h3">{data.title}</div>
      </div>
      <div className="wrap-item-coll">
        {data.dataItem.map((e, i) => (
          <ItemRouteWrap content={e} key={i} />
        ))}
      </div>
    </div>
  );
};
