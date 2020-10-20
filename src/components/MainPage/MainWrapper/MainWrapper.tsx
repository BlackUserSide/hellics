import React from "react";
import { Header } from "../HeaderComposition/Header";
import { MainNavBar } from "./MainNavBar";
import "./mainwrapper.sass";
import { TextMainWrapper } from "./TextMainWrapper";

export const MainWrapper = () => {
  return (
    <div className="main-wrapper">
      <div className="bg-lock-main"></div>
      <Header />
      <MainNavBar />
      <TextMainWrapper />
    </div>
  );
};
