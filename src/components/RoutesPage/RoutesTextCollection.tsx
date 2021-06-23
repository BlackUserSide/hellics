import React, { useContext } from "react";
import giftSerch from "../../image/gift.png";
import { Context } from "../../LangContext";
export const RoutesTextCollection = () => {
  const lang = useContext(Context);

  const h3 =
    lang === "ru"
      ? "Приведённые выше расчёты являются ориентировочными и не учитывают:"
      : "The above calculations are indicative and do not take into account:";
  const h1 = lang === "ru" ? "ПОДАРОЧНЫЕ СЕРТИФИКАТЫ" : "GIFT CERTIFICATES";
  const p =
    lang === "ru"
      ? "сборы за взлетно-посадочные операции на вертолётных площадках и аэродромах • возможные дополнительные посадки для дозаправки изменение оптимальной трассы маршрута из-за возможного введения временных ограничений на полёты в воздушных зонах по которым проходит оптимальная трасса и др. Для точного расчёта обращайтесь к сотрудникам HeliLuxury Москва по телефону + 7 (495) 77-000-77"
      : "fees for takeoff and landing operations at helipads and airfields • possible additional landings for refueling change of the optimal route route due to the possible introduction of temporary restrictions on flights in air zones along which the optimal route passes, etc. For an accurate calculation, contact HeliLuxury Moscow staff at phone + 7 (495) 77-000-77";
  const p2 =
    lang === "ru"
      ? "Наша авиокомпания предлагает приобрести подарочный сертификат на любой экскурсионный полет или полет по индивидуальному маршруту. Вылет из Heliluxury Москва - это комфорт и удобство современного вертолетного центра.Наслаждайтесь впечатлениями, свободой передвижения и безграничными возможностями вертолета."
      : "Our airline offers to purchase a gift certificate for any sightseeing flight or flight on an individual route. Departure from Heliluxury Moscow is the comfort and convenience of a modern helicopter center. Enjoy the experience, freedom of movement and unlimited possibilities of a helicopter.";

  return (
    <div className="routes-text-collection">
      <div className="text-firs-wrapp">
        <h3 className="h3">{h3}</h3>
        <p> {p}</p>
      </div>
      <div className="text-second-wrapper">
        <h1 className="h1">{h1}</h1>
        <div className="text-second-collect">
          <img src={giftSerch} alt="" />
          <div className="text-in-out">
            <p>{p2}</p>
            <span>Заказать</span>
          </div>
        </div>
      </div>
    </div>
  );
};
