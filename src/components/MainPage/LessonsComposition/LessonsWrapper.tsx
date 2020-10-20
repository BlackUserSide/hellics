import React from "react";
import { Link } from "react-router-dom";
import "./lessons.sass";

export const LessonsWrapper = () => {
  return (
    <div className="lessons-wrapper-main">
      <div className="lessons-composition">
        <h1 className="h1">АВИАЦИОННЫЙ УЧЕБНЫЙ ЦЕНТР</h1>
        <Link to="/lessons">
          Подробнее <span></span>
        </Link>
      </div>
    </div>
  );
};
