import React, { useState } from "react";
import { IStateTextCenter } from "./types";
import AvatarTeacher from "../../image/avatarTeacher/1.jpg";

export const TextCenter = () => {
  const [dataText] = useState<Array<IStateTextCenter>>([
    {
      id: 1,
      fullName: "Зикеев Вячеслав Сергеевич",
      dob: "1979",
      fullFly: "4550",
      helicopters: [
        { id: 0, name: "R44" },
        { id: 1, name: "R66" },
      ],
    },
  ]);
  return (
    <div className="text-center-composition">
      <div className="teacher-wrapper">
        <div className="top-line-teacher">
          <h1 className="h1">ПРЕПОДАВАТЕЛЬСКИЙ состав</h1>
        </div>
        {dataText.map((e, i) => (
          <div className="teacher-item" key={i}>
            <div className="image-wrapper-teacher">
              <img src={AvatarTeacher} alt="" />
            </div>
            <div className="text-teacher-wrapper">
              <h1 className="h1">{e.fullName}</h1>
              <div className="dob-wrap">
                <span>
                  <strong>Год рождения:</strong>
                </span>
                <span>{e.dob}</span>
              </div>
              <div className="full-fly-wrap">
                <span>
                  <strong>Общий налет:</strong>
                </span>
                <span>{e.fullFly} часов</span>
              </div>
              <div className="hell-wrap-teacher">
                <span>Инструктор: </span>
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
