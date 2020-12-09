import React from "react";
import { BlackHeader } from "../BlackHeader";
import { MainNavBlack } from "../MainNavBlack";
import "./center.sass";
import { CenterCollection } from "./CenterCollection";

export const CenterWrapper: React.FC = () => {
  return (
    <div className="center-wrapper">
      <BlackHeader />
      <MainNavBlack />
      <CenterCollection />
    </div>
  );
};
