import React from "react";
import { AboutWrapper } from "./AboutCompanyCompose/AboutWrapper";
import { ExcursionComposition } from "./ItemsExcursion/ExcursionComposition";
import { LessonsWrapper } from "./LessonsComposition/LessonsWrapper";
import { MainWrapper } from "./MainWrapper/MainWrapper";

export const MainPage = () => {
  return (
    <main className="main-page">
      <MainWrapper />
      <AboutWrapper />
      <LessonsWrapper />
      <ExcursionComposition />
    </main>
  );
};
