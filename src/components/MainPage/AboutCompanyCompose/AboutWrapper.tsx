import React from "react";
import "./about.sass";

export const AboutWrapper = () => {
  return (
    <div className="about-wrapper">
      <div className="top-line">
        <div className="line-about"></div>
        <h1 className="h1">О компании</h1>
        <div className="line-about"></div>
      </div>
      <div className="about-text-composition">
        <p>
          Это текст. Нажмите один раз и выберите «Редактировать текст» или
          просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
          Вы можете переместить его в любое место на странице. Расскажите
          посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей
          компании и услугах.
        </p>
      </div>
    </div>
  );
};
