import React from "react";
import "./header.sass";
import logoImg from "../../../image/logo.svg";
import { NavBarMain } from "./NavBarMain";
export const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <img src={logoImg} alt="" />
      </div>
      <NavBarMain />
    </header>
  );
};
