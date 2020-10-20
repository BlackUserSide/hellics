import React from "react";
import tellIcon from "../../../image/bx_bxs-phone-call.svg";
export const NavBarMain = () => {
  return (
    <nav className="main-nav-wrapper">
      <ul className="nav-main">
        <li className="link-wrapper-main">
          <img src={tellIcon} alt="" />
          <a href="tel:+7 (800) 551-77-96" className="link-phone">
            +7 (800) 551-77-96
          </a>
        </li>
        <li className="link-wrapper-main">
          <img src={tellIcon} alt="" />
          <a href="tel:+7 (800) 551-77-96" className="link-phone">
            +7 (800) 551-77-96
          </a>
        </li>
        <li className="link-wrapper-main">
          <a href="/#" className="order-call-link">
            Заказать звонок
          </a>
        </li>
        <li className="link-wrapper-main">
          <a href="/#" className="order-fly-link">
            Заявка на полет
          </a>
        </li>
      </ul>
    </nav>
  );
};
