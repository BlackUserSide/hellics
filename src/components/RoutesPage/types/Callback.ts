export const titleChange = (cases: number) => {
  let title: string = "";
  switch (cases) {
    case 1:
      title = "Экскурсионные полеты";
      return title;
    case 2:
      title = "Популярные маршруты";
      return title;
    case 3:
      title = "Города Север";
      return title;
    case 4:
      title = "Города Запад";
      return title;
    case 5:
      title = "Города Юг";
      return title;
    case 6:
      title = "Города Восток";
      return title;
    case 7:
      title = "Охота/Рыбалка";
      return title;
    case 8:
      title = "Яхт-клубы/загородные клубы";
      return title;
    case 9:
      title = "Гольф-клубы";
      return title;
    case 10:
      title = "Отели/Парки/заповедники";
      return title;
    case 11:
      title = "Подарочные сертификаты";
      return title;
  }
};
