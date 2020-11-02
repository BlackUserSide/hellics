import React from "react";
import phoneLogo from "../image/bx_bxs-phone-call.svg";
export const BlackHeader: React.FC = () => {
  return (
    <header className="site-header-black">
      <div className="nav-contact">
        <a href="/#">
          <img src={phoneLogo} alt="" />
          7(800)551-77-96
        </a>
        <a href="/#">
          <img src={phoneLogo} alt="" />
          7(800)551-77-96
        </a>
      </div>
      <a href="/#" className="routes-link">
        Заказать звонок
      </a>
    </header>
  );
};
