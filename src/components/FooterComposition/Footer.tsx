import React from "react";
import "./footer.sass";
import LogoWrap from "../../image/logo.svg";
export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="composition-footer">
        <div className="logo-footer-wrap">
          <img src={LogoWrap} alt="" />
        </div>
      </div>
    </footer>
  );
};
