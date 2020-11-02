import React from "react";
import { BlackHeader } from "../BlackHeader";
import { MainNavBlack } from "../MainNavBlack";
import { RoutesCollection } from "./RoutesCollection";
import "./routes.sass";
import { RoutesTextCollection } from "./RoutesTextCollection";

export const RoutesMain = () => {
  return (
    <main className="routes">
      <BlackHeader />
      <MainNavBlack />
      <RoutesCollection />
      <RoutesTextCollection />
    </main>
  );
};
