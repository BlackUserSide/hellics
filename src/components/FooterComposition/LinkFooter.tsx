import React, { useContext } from "react";
import geoLocation from "../../image/geometka.svg";
import mailIcon from "../../image/mail.svg";
import phone from "../../image/bx_bxs-phone-call.svg";
import time from "../../image/time-vals.png";
import { Context } from "../../LangContext";
export const LinkFooter: React.FC = () => {
  const lang = useContext(Context);
  const address =
    lang === "ru"
      ? "500 метров от МКАД по Новорижскому"
      : "500 meters from MKAD along Novorizhskoe";
  const address_1 =
    lang === "ru"
      ? "шоссе, съезд на Мякининское шоссе."
      : "highway, exit to Myakininskoe highway.";
  return (
    <div className="contact-footer">
      <p>
        <img src={geoLocation} alt="" />
        {address}
        <br />
        {address_1}
      </p>
      <p>
        <img src={phone} alt="" /> +7 (495) 77-000-77, +7 (800) 551-77-96
      </p>
      <p>
        <img src={mailIcon} alt="" /> office@heliport-moscow.ru
      </p>
      <p>
        <img src={time} alt="" />
        08.00 - 21.00
      </p>
    </div>
  );
};
