import React from "react";
import { TCenterType } from "../../api/ItemCenter";

type TProps = {
  content: TCenterType;
};

export const FormCardCenter: React.FC<TProps> = ({ content }) => {
  return (
    <form className="action-card-form">
      <div className="top-line-form">
        <h3 className="h3">{content.name}</h3>
      </div>
      <div className="price-wrapper">
        <p>Стоимость</p>
        <h3 className="h3">{content.price}₽</h3>
      </div>
      <div className="form-body">
        <h5 className="h5">Оставьте заявку на обучение</h5>
        <input type="text" name="fullName" placeholder="ФИО" />
        <input type="text" name="phone" placeholder="Телефон" />
        <input type="text" name="email" placeholder="E-mail" />
      </div>
      <button type="submit">Оставить заявку</button>
    </form>
  );
};
