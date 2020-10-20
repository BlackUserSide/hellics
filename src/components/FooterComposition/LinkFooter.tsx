import React from "react";
import geoLocation from "../../image/geometka.svg";
import mailIcon from "../../image/mail.svg";
import phone from "../../image/bx_bxs-phone-call.svg";
import time from "../../image/time-vals.png";
export const LinkFooter: React.FC = () => {
  return (
    <div className="contact-footer">
      <p>
        <img src={geoLocation} alt="" /> 500 метров от МКАД по Новорижскому
        <br />
        шоссе, съезд на Мякининское шоссе.
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
