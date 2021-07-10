import React, { useContext } from "react";
import geoLocation from "../../image/geometka.svg";
import mailIcon from "../../image/mail.svg";
import phone from "../../image/bx_bxs-phone-call.svg";
import time from "../../image/time-vals.png";
import { Context } from "../../LangContext";
export const LinkFooter: React.FC = () => {
  const lang = useContext(Context);
  const text =
    lang === "ru" ? "ОГРНИП: 321774600194776" : "PSRNSP: 321774600194776";
  const ip =
    lang === "ru"
      ? "ИП: Шохирев Сергей Сиргеевич"
      : "SP Shokhirev Sergey Sirgeevich";
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
      <p>{ip}</p>
      <p>{text}</p>
      <p>
        <img src={geoLocation} alt="" />
        {address}
        <br />
        {address_1}
      </p>
      <p>
        <img src={phone} alt="" /> +8-800-555-61-47
      </p>
      <p>
        <img src={mailIcon} alt="" /> helics.biz@gmail.com
      </p>
      <p>
        <img src={time} alt="" />
        08.00 - 21.00
      </p>
    </div>
  );
};
