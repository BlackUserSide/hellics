import React, { useContext } from "react";
import { TCenterType } from "../../api/ItemCenter";
import { Context } from "../../LangContext";
import { FormCardCenter } from "./FormCardCenter";
type TProps = {
  content: TCenterType;
};
export const CardCollectionCenter: React.FC<TProps> = ({ content }) => {
  const lang = useContext(Context);

  return (
    <div className="card-collection-center-wrapper">
      <div className="top-line-card-center">
        <h1 className="h1">
          {lang === "ru" ? "Описание курса" : "Course Description"}
        </h1>
      </div>
      <div className="flex-wrap-card">
        <div className="text-wrapper-card">
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "О курсе" : "About the course"}
            </p>
            <p className="tag-exp">
              {lang === "ru" ? content.name : content.nameEng}
            </p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Тип вертолета" : "Helicopter type"}
            </p>
            <p className="tag-exp">{content.typeHel}</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Летная подготовка" : "Flight training"}
            </p>
            <p className="tag-exp">{content.flyLes} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Теоретические занятия" : "Theoretical lessons"}
            </p>
            <p className="tag-exp">{content.les} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Зачет-экзамен" : "Exam"}
            </p>
            <p className="tag-exp">{content.exam} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Аттестация" : "Attestation"}
            </p>
            <p className="tag-exp">
              {lang === "ru" ? content.certification : content.certificationEng}
            </p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Необходимые документы" : "Required documents"}
            </p>
            <ul className="list-wrapper-card">
              {lang === "ru"
                ? content.docs.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))
                : content.docsEng.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="line-top">
            <h3 className="h3">
              {lang === "ru" ? "Дисциплины" : "Disciplines"}
            </h3>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Теория (разделы)" : "Theory (sections)"}
            </p>
            <ul className="list-wrapper-card">
              {lang === "ru"
                ? content.theory.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))
                : content.theoryEng.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="item-card-text">
            <p className="logo-item">
              {lang === "ru" ? "Практика (упражнения)" : "Practice (exercises)"}
            </p>
            <ul className="list-wrapper-card">
              {lang === "ru"
                ? content.practice.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))
                : content.practiceEng.map((e, i) => (
                    <li className="item-list-wrap" key={i}>
                      {e.name}
                    </li>
                  ))}
            </ul>
          </div>
        </div>
        <div className="form-wrapper-order">
          <FormCardCenter content={content} />
        </div>
      </div>
    </div>
  );
};
