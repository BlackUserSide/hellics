import React from "react";
import { RoutesWrapperItems } from "./RoutesWrappItems";

export const RoutesCollection: React.FC = () => {
  return (
    <div className="routes-wrap-collection">
      <div className="top-line">
        <h1 className="h1">Маршруты полетов</h1>
      </div>
      <RoutesWrapperItems />
    </div>
  );
};
