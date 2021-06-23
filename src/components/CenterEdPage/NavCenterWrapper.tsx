import React, { useContext } from "react";
import { Context } from "../../LangContext";
import { CenterContext } from "./context/CenterContext";

export const NavCenterWrapper: React.FC = () => {
  const { changeCategory } = useContext(CenterContext);
  const changeHandler = (val: string) => {
    if (changeCategory !== undefined) {
      changeCategory(val);
    }
  };
  const lang = useContext(Context);
  return (
    <div className="nav-center-wrapper">
      <nav className="center-nav">
        <ul>
          <li className="link-center" onClick={() => changeHandler("1")}>
            <span>
              {lang === "ru" ? "Программы для пилотов" : "Pilot programs"}
            </span>
          </li>
          <li className="link-center" onClick={() => changeHandler("2")}>
            <span>
              {lang === "ru"
                ? "Программы для технических специалистов"
                : "Technician Programs"}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
