import React, { useContext, useEffect, useState } from "react";
import "./header.sass";
import logoImg from "../../../image/logo.svg";
import { NavBarMain } from "./NavBarMain";
import { MainWidthContent } from "../../MainWidthContet";
import HamburgerMenu from "react-hamburger-menu";
import { NavMobile } from "./NavMobile";

export const Header = () => {
  const [statDevice, setStatDevice] = useState<String>();
  const [menu, setMenu] = useState(false);
  const { device } = useContext(MainWidthContent);
  useEffect(() => {
    if (device) {
      if (device() === "desktop") {
        setStatDevice(device());
        return;
      }
      setStatDevice(device());
    }
  }, [device]);
  console.log(menu);
  const changeClick = () => {
    if (menu) {
      setMenu(false);
      return;
    }
    setMenu(true);
  };
  return (
    <header className="site-header">
      <div className="logo-wrapper">
        <img src={logoImg} alt="" />
      </div>

      {statDevice !== undefined ? (
        statDevice === "mobile" ? (
          <div className="mobile-wrapper">
            <HamburgerMenu
              isOpen={menu}
              menuClicked={changeClick}
              width={22}
              height={22}
              strokeWidth={2}
              rotate={0}
              color={"#fff"}
              borderRadius={0.5}
              animationDuration={0.5}
            />
            <NavMobile active={menu} setMenu={() => setMenu(false)} />
          </div>
        ) : (
          <NavBarMain />
        )
      ) : (
        ""
      )}
    </header>
  );
};
