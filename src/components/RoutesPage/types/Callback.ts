export const titleChange = (cases: number) => {
  const lang = localStorage.getItem("lang");
  console.log(lang, "local");

  let title: string = "";
  switch (cases) {
    case 1:
      title = lang === "ru" ? "Экскурсионные полеты" : "Sightseeing flights";
      return title;
    case 2:
      title = lang === "ru" ? "Популярные маршруты" : "Popular routes";
      return title;
    case 3:
      title = lang === "ru" ? "Города Север" : "Cities of the North";
      return title;
    case 4:
      title = lang === "ru" ? "Города Запад" : "Cities of the West";
      return title;
    case 5:
      title = lang === "ru" ? "Города Юг" : "Cities South";
      return title;
    case 6:
      title = lang === "ru" ? "Города Восток" : "Cities East";
      return title;
    case 7:
      title = lang === "ru" ? "Охота/Рыбалка" : "Hunting Fishing";
      return title;
    case 8:
      title =
        lang === "ru"
          ? "Яхт-клубы/загородные клубы"
          : "Yacht Clubs / Country Clubs";
      return title;
    case 9:
      title = lang === "ru" ? "Гольф-клубы" : "Golf clubs";
      return title;
    case 10:
      title =
        lang === "ru" ? "Отели/Парки/заповедники" : "Hotels / Parks / Reserves";
      return title;
    case 11:
      title = lang === "ru" ? "Подарочные сертификаты" : "Gift certificates";
      return title;
  }
};
