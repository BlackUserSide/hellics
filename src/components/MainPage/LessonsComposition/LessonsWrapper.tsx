import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../LangContext";
import "./lessons.sass";

export const LessonsWrapper = () => {
  const lang = useContext(Context);
  const center =
    lang === "ru" ? "АВИАЦИОННЫЙ УЧЕБНЫЙ ЦЕНТР" : "AVIATION TRAINING CENTER";
  const more = lang === "ru" ? "Подробнее" : "More";
  return (
    <div className="lessons-wrapper-main">
      <div className="lessons-composition">
        <h1 className="h1">{center}</h1>
        <Link to="/educational-center">
          {more}
          <span></span>
        </Link>
      </div>
    </div>
  );
};
