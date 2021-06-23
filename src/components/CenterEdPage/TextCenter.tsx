import React, { useContext, useState } from "react";
import { IStateTextCenter } from "./types";
import AvatarTeacher from "../../image/avatarTeacher/1.jpg";
import { Context } from "../../LangContext";

export const TextCenter = () => {
  const [dataText] = useState<Array<IStateTextCenter>>([
    {
      id: 1,
      fullNameEng: "Zikeev Vyacheslav Sergeevich",
      fullName: "Зикеев Вячеслав Сергеевич",
      dob: "1979",
      fullFly: "4550",
      helicopters: [
        { id: 0, name: "R44" },
        { id: 1, name: "R66" },
      ],
    },
  ]);
  const lang = useContext(Context);
  return (
    <div className="text-center-composition">
      <div className="teacher-wrapper">
        <div className="top-line-teacher">
          <h1 className="h1">
            {lang === "ru" ? "ПРЕПОДАВАТЕЛЬСКИЙ состав" : "Teaching Staff"}
          </h1>
        </div>
        {dataText.map((e, i) => (
          <div className="teacher-item" key={i}>
            <div className="image-wrapper-teacher">
              <img src={AvatarTeacher} alt="" />
            </div>
            <div className="text-teacher-wrapper">
              <h1 className="h1">
                {lang === "ru" ? e.fullName : e.fullNameEng}
              </h1>
              <div className="dob-wrap">
                <span>
                  <strong>
                    {lang === "ru" ? "Год рождения:" : "Year of birth:"}
                  </strong>
                </span>
                <span>{e.dob}</span>
              </div>
              <div className="full-fly-wrap">
                <span>
                  <strong>
                    {lang === "ru" ? "Общий налет:" : "Total plaque:"}
                  </strong>
                </span>
                <span>
                  {e.fullFly} {lang === "ru" ? "часов" : "hours"}
                </span>
              </div>
              <div className="hell-wrap-teacher">
                <span>{lang === "ru" ? "Инструктор: " : "Instructor: "}</span>
                {e.helicopters.map((e, i) => (
                  <span key={i}>{e.name}, </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
