import React, { useContext } from "react";
import { TCenterType } from "../../api/ItemCenter";
import { Context } from "../../LangContext";

type TProps = {
  content: TCenterType;
};

export const FormCardCenter: React.FC<TProps> = ({ content }) => {
  const lang = useContext(Context);
  return (
    <form className="action-card-form">
      <div className="top-line-form">
        <h3 className="h3">{lang === "ru" ? content.name : content.nameEng}</h3>
      </div>
      <div className="price-wrapper">
        <p>{lang === "ru" ? "Стоимость" : "Prcie"}</p>
        <h3 className="h3">{content.price}₽</h3>
      </div>
      <div className="form-body">
        <h5 className="h5">
          {lang === "ru"
            ? "Оставьте заявку на обучение"
            : "Leave a request for training"}
        </h5>
        <input
          type="text"
          name="fullName"
          placeholder={lang === "ru" ? "ФИО" : "Full Name"}
        />
        <input
          type="text"
          name="phone"
          placeholder={lang === "ru" ? "Телефон" : "Phone"}
        />
        <input type="text" name="email" placeholder="E-mail" />
      </div>
      <button type="submit">
        {lang === "ru" ? "Оставить заявку" : "Submit your application"}
      </button>
    </form>
  );
};
