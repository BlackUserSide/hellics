import React, { FormEvent, useContext, useState } from "react";
import { Context } from "../../LangContext";
import axios from "axios";

type TProps = {
  content: any;
  value: number;
};
interface IStateForm {
  fullName: string;
  phone: string;
  description: string;
}
export const PopUpForm: React.FC<TProps> = ({ content, value }) => {
  const [dataForm, setDataForm] = useState<IStateForm>({
    fullName: "",
    phone: "",
    description: "",
  });
  const lang = useContext(Context);
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

  const submitHanler = () => {
    if (dataForm.fullName === "" || dataForm.phone === "") return;
    axios({
      method: "post",
      url: "../../../uniMail-master/script/mail.php",
      data: {
        name: dataForm.fullName,
        phone: dataForm.phone,
        desc: dataForm.description,
      },
    })
      .then((res: any) => {})
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="bg-lock"></div>
      <form className="pop-form">
        <div className="top-line-form">
          <h1 className="h1">
            {lang === "ru" ? "Закажите услугу" : "Order the service"}
          </h1>
          <p>
            {lang === "ru"
              ? "Оставьте свои контакты, менеджер перезвонит вам"
              : "Leave your contacts, the manager will call you back"}
          </p>
        </div>
        <div className="inp-wrapper">
          <input
            type="text"
            name="fullName"
            placeholder={lang === "ru" ? "ФИО" : "Full Name"}
            onChange={(e) => changeHandler(e)}
          />
          <input
            type="text"
            name="phone"
            placeholder={lang === "ru" ? "Телефон" : "Phone"}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="text-area-wrapper">
          <textarea
            name="description"
            placeholder={lang === "ru" ? "Комментарий" : "Description"}
            onChange={(e) => changeHandler(e)}
          ></textarea>
        </div>
        <div className="btn-wrapper">
          <button onClick={submitHanler} className="btn btn-sbmt" type="submit">
            {lang === "ru" ? "Оставить заявку" : "Submit your application"}
          </button>
        </div>
      </form>
    </>
  );
};
