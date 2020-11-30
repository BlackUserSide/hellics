import React from "react";

export const PopUpForm = () => {
  return (
    <>
      <div className="bg-lock"></div>
      <form className="pop-form">
        <div className="top-line-form">
          <h1 className="h1">Закажите услугу</h1>
          <p>Оставьте свои контакты, менеджер перезвонит вам</p>
        </div>
        <div className="inp-wrapper">
            <input type="text" name="name" placeholder="" /><input type="text" name="phone" />
        </div>
      </form>
    </>
  );
};
