import React from "react";
import { TContextTypeCenter } from "./type";

export const CenterContext = React.createContext<Partial<TContextTypeCenter>>(
  {}
);
