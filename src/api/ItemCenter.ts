export type TCenterType = {
  id: string;
  nameEng: string;
  name: string;
  period: string;
  typeHel: string;
  flyLes: string;
  les: string;
  exam: string;
  price: string;
  certification: string;
  docsEng: TDocs[];
  docs: Array<TDocs>;
  theory: Array<TTheory>;
  practice: Array<TPractice>;
  theoryEng: TTheory[];
  practiceEng: TPractice[];
  category: string;
  image: string;
  certificationEng: string;
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
    nameEng: "Robinson R44 Initial Training Course",
    name: "Курс первоначальной подготовки Robinson R44",
    period: "135",
    typeHel: "Robinson R44",
    flyLes: "43",
    price: "1.800.800",
    les: "232",
    exam: "15",
    certificationEng:
      "At the end of the training program, a certificate of completion of the `Program for the initial training of private pilots for the Robinson R44 helicopter` is issued, in order to receive a certificate of a pilot of an amateur civil aviation (GA) in the VKK (TKK) FAVT Rosaviatsia.",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docsEng: [
      { id: 0, name: "Copy of the passport" },
      { id: 1, name: "Copy of education diploma" },
    ],
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theoryEng: [{ id: 0, name: "Practical aerodynamics" }],
    theory: [{ id: 0, name: "Практическая аэродинамика" }],
    practiceEng: [
      { id: 0, name: "Hovering, moving and turning near the ground" },
    ],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "1",
    image: "",
  },
  {
    id: "1",
    nameEng: "Robinson R44 TEST 2 Initial Training Course",
    name: "Курс первоначальной подготовки Robinson R44 TEST 2",
    period: "180",
    typeHel: "Robinson dsadsadsad",
    price: "1.800.800",
    flyLes: "45",
    les: "232",
    exam: "15",
    certificationEng:
      "At the end of the training program, a certificate of completion of the `Program for the initial training of private pilots for the Robinson R44 helicopter` is issued, in order to receive a certificate of a pilot of an amateur civil aviation (GA) in the VKK (TKK) FAVT Rosaviatsia.",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docsEng: [
      { id: 0, name: "Copy of the passport" },
      { id: 1, name: "Copy of education diploma" },
    ],
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theoryEng: [{ id: 0, name: "Practical aerodynamics" }],
    theory: [{ id: 0, name: "Практическая аеродинамика" }],
    practiceEng: [
      { id: 0, name: "Hovering, moving and turning near the ground" },
    ],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "1",
    image: "",
  },
  {
    id: "2",
    nameEng: "Robinson R44 TEST 2 Initial Training Course",
    name: "Курс первоначальной подготовки Robinson R44 TEST 2",
    period: "180",
    price: "1.800.800",
    typeHel: "Robinson R44",
    flyLes: "45",
    les: "232",
    exam: "15",
    certificationEng:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    certification:
      "По окончании программы обучения выдаётся свидетельство о прохождении «Программы первоначальной подготовки частных пилотов на вертолёт Robinson R44», для получения в ВКК (ТКК) ФАВТ Росавиация свидетельства пилота любителя гражданской авиации (ГА).",
    docsEng: [
      { id: 0, name: "Copy of the passport" },
      { id: 1, name: "Copy of education diploma" },
    ],
    docs: [
      { id: 0, name: "Копия паспорта" },
      { id: 1, name: "Копия диплома об образовании" },
    ],
    theoryEng: [{ id: 0, name: "Practical aerodynamics" }],
    theory: [{ id: 0, name: "Практическая аеродинамика" }],
    practiceEng: [
      { id: 0, name: "Hovering, moving and turning near the ground" },
    ],
    practice: [
      { id: 0, name: "Полеты на висение, перемещения и развороты у земли" },
    ],
    category: "2",
    image: "",
  },
];
