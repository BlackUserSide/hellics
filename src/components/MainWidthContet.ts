import React from "react";

export type TPartial = {
  checkWidth: () => void;
  width: number;
  device: () => "mobile" | "desktop";
};

export const MainWidthContent = React.createContext<Partial<TPartial>>({});
