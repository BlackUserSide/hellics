import React from "react";
import { TCenterType } from "../../api/ItemCenter";
import { FormCardCenter } from "./FormCardCenter";
type TProps = {
  content: TCenterType;
};
export const CardCollectionCenter: React.FC<TProps> = ({ content }) => {
  return (
    <div className="card-collection-center-wrapper">
      <div className="top-line-card-center">
        <h1 className="h1">Описание курса</h1>
      </div>
      <div className="flex-wrap-card">
        <div className="text-wrapper-card">
          <div className="item-card-text">
            <p className="logo-item">О курсе</p>
            <p className="tag-exp">{content.name}</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Тип вертолета</p>
            <p className="tag-exp">{content.typeHel}</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Летная подготовка</p>
            <p className="tag-exp">{content.flyLes} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Теоретические занятия</p>
            <p className="tag-exp">{content.les} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Зачет-экзамен</p>
            <p className="tag-exp">{content.exam} ч.</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Аттестация</p>
            <p className="tag-exp">{content.certification}</p>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Необходимые документы</p>
            <ul className="list-wrapper-card">
              {content.docs.map((e, i) => (
                <li className="item-list-wrap" key={i}>
                  {e.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="line-top">
            <h3 className="h3">Дисциплины</h3>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Теория (разделы)</p>
            <ul className="list-wrapper-card">
              {content.theory.map((e, i) => (
                <li className="item-list-wrap" key={i}>
                  {e.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="item-card-text">
            <p className="logo-item">Практика (упражнения)</p>
            <ul className="list-wrapper-card">
              {content.practice.map((e, i) => (
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
