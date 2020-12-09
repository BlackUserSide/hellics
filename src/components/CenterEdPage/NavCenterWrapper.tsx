import React, { useContext } from "react";
import { CenterContext } from "./context/CenterContext";

export const NavCenterWrapper: React.FC = () => {
  const { changeCategory } = useContext(CenterContext);
  const changeHandler = (val: string) => {
    if (changeCategory !== undefined) {
      changeCategory(val);
    }
  };
  return (
    <div className="nav-center-wrapper">
      <nav className="center-nav">
        <ul>
          <li className="link-center" onClick={() => changeHandler("1")}>
            <span>Программы для пилотов</span>
          </li>
          <li className="link-center" onClick={() => changeHandler("2")}>
            <span>Программы для технических специалистов</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
