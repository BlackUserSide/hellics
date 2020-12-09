export type TCenterType = {
  id: string;
  name: string;
  period: string;
  typeHel: string;
  flyLes: string;
  les: string;
  exam: string;
  price: string;
  certification: string;
  docs: Array<TDocs>;
  theory: Array<TTheory>;
  practice: Array<TPractice>;
  category: string;
  image: string;
};
export type TDocs = {
  id: number;
  name: string;
};
export type TTheory = {
  id: number;
  name: string;
};
export type TPractice = {
  id: number;
  name: string;
};
export const ItemCenter: Array<TCenterType> = [
  {
    id: "0",
    name: "Курс первоначальной подготовки Robinson R44",
    period: "135",
    typeHel: "Robinson R44",
    flyLes: "43",
    price: "1.800.800",
    les: "232",
    exam: "15",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theory: [{ id: 0, name: "Практическая аеродинамика" }],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "1",
    image: "",
  },
  {
    id: "1",
    name: "Курс первоначальной подготовки Robinson R44 TEST 2",
    period: "180",
    typeHel: "Robinson dsadsadsad",
    price: "1.800.800",
    flyLes: "45",
    les: "232",
    exam: "15",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theory: [{ id: 0, name: "Практическая аеродинамика" }],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "1",
    image: "",
  },
  {
    id: "2",
    name: "Курс первоначальной подготовки Robinson R44 TEST 2",
    period: "180",
    price: "1.800.800",
    typeHel: "Robinson R44",
    flyLes: "45",
    les: "232",
    exam: "15",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theory: [{ id: 0, name: "Практическая аеродинамика" }],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "2",
    image: "",
  },
];
