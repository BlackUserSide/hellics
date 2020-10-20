import React from "react";
import "./footer.sass";
import LogoWrap from "../../image/logo.svg";
import { LinkFooter } from "./LinkFooter";
import { Link } from "react-router-dom";
export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="composition-footer">
        <div className="logo-footer-wrap">
          <Link to="/">
            <img src={LogoWrap} alt="" />
          </Link>
        </div>
        <LinkFooter />
      </div>
    </footer>
  );
};
