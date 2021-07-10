import React, { useContext, useEffect, useState } from "react";
import "./footer.sass";
import LogoWrap from "../../image/logo.svg";
import { LinkFooter } from "./LinkFooter";
import { Link } from "react-router-dom";
import { MainWidthContent } from "../MainWidthContet";
import { NavMobile } from "../MainPage/HeaderComposition/NavMobile";
import HamburgerMenu from "react-hamburger-menu";
export const Footer: React.FC = () => {
  const [statDevice, setStatDevice] = useState<String>();
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
  console.log(device);

  const [menu, setMenu] = useState(false);
  const changeClick = () => {
    if (menu) {
      setMenu(false);
      return;
    }
    setMenu(true);
  };
  return (
    <footer className="site-footer">
      <div className="composition-footer">
        <div className="logo-footer-wrap">
          <Link to="/">
            <img src={LogoWrap} alt="" />
          </Link>
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
              <LinkFooter />
            </div>
          ) : (
            <LinkFooter />
          )
        ) : (
          ""
        )}
      </div>
    </footer>
  );
};
