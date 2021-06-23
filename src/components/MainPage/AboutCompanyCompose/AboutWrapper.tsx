import React, { useContext } from "react";
import { Context } from "../../../LangContext";
import "./about.sass";

export const AboutWrapper = () => {
  const lang = useContext(Context);
  const about = lang === "ru" ? "О компании" : "About us";
  const about_text =
    lang === "ru"
      ? "Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах."
      : "This is the text. Press once and select Edit Text or just double click to add your own text and customize the font. You can move it anywhere on the page. Tell site visitors about yourself. The text about your company and services.";

  return (
    <div className="about-wrapper">
      <div className="top-line">
        <div className="line-about"></div>
        <h1 className="h1">{about}</h1>
        <div className="line-about"></div>
      </div>
      <div className="about-text-composition">
        <p>{about_text}</p>
      </div>
    </div>
  );
};
