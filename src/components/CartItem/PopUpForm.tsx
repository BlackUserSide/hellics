import React, { FormEvent, useState } from "react";
type TProps = {
  popUpHandler: () => void;
  content: any;
  value: number;
};
interface IStateForm {
  fullName: string;
  phone: string;
  description: string;
}
export const PopUpForm: React.FC<TProps> = ({
  popUpHandler,
  content,
  value,
}) => {
  const [dataForm, setDataForm] = useState<IStateForm>({
    fullName: "",
    phone: "",
    description: "",
  });
  const changeHandler = (
    e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>
  ) => {
    const name: string = e.currentTarget.name;
    const value: string = e.currentTarget.value;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="bg-lock" onClick={popUpHandler}></div>
      <form className="pop-form">
        <div className="top-line-form">
          <h1 className="h1">Закажите услугу</h1>
          <p>Оставьте свои контакты, менеджер перезвонит вам</p>
        </div>
        <div className="inp-wrapper">
          <input
            type="text"
            name="fullName"
            placeholder="ФИО"
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            name="phone"
            placeholder="Телефон"
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="text-area-wrapper">
          <textarea
            name="description"
            placeholder="Комментарий"
            onChange={(e) => changeHandler(e)}
          ></textarea>
        </div>
        <div className="btn-wrapper">
          <button className="btn btn-sbmt" type="submit">
            Оставить заявку
          </button>
        </div>
      </form>
    </>
  );
};
