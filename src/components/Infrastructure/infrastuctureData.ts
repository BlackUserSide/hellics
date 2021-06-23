import icon1 from "../../image/infrastructure/22.jpg";
import icon2 from "../../image/infrastructure/33.jpg";
import icon3 from "../../image/infrastructure/44.jpg";
import icon4 from "../../image/infrastructure/77.jpg";
import icon5 from "../../image/infrastructure/88.jpg";

export interface IInfraData {
  id: number;
  engName: string;
  name: string;
  url: string;
  data: [
    {
      text1: string;
      text1Eng: string;
      url: string;
      text2: string;
      text2Eng: string;
    }
  ];
}

export const infrastuctureData = [
  {
    id: 0,
    engName: "PILOT TRAINING",
    name: "ОБУЧЕНИЕ ПИЛОТИРОВАНИЮ",
    url: icon1,
    data: [
      {
        text1:
          'Авиационный Учебный Центр "Хелипорт Истра", входящий в состав ГК Хелипорты России – первая в истории современной российской авиации летная школа, специализирующаяся на подготовке частных пилотов легких вертолетов. Центр подготовки пилотов успешно работает с 2003 года. Сертифицирован Росавиацией.  Бессрочный сертификат АУЦ №314 от 1 февраля 2019 года подтверждает право проводить программы первоначальной подготовки и переподготовки пилотов легких вертолетов Robinson R44/R66, переподготовки на вертолеты EC130 T2, AS350 B3, Bell 407. Лицензированные программы и методики обучения, опытные пилоты-инструкторы, накопленный опыт подготовки частных пилотов создают уникальную среду для эффективного обучения. Индивидуальный подход к каждому курсанту обеспечивает быстрое усвоение знаний и навыков.  Подробнее о программах учебного центра можно узнать здесь: Авиационный Учебный Центр Подробности и запись на обучение: +7 (495) 023-87-39.',
        textEng:
          "The Heliport Istra Aviation Training Center, which is part of the Heliports of Russia Group of Companies, is the first flight school in the history of modern Russian aviation, specializing in the training of private pilots for light helicopters. The pilot training center has been successfully operating since 2003. Certified by the Federal Air Transport Agency. Perpetual certificate of ATC # 314 dated February 1, 2019 confirms the right to conduct initial training and retraining programs for pilots of light helicopters Robinson R44 / R66, retraining for EC130 T2, AS350 B3, Bell 407 helicopters. Licensed programs and training methods, experienced pilot-instructors, accumulated private pilot training experience creates a unique environment for effective training. An individual approach to each student ensures the rapid acquisition of knowledge and skills. More information about the training center programs can be found here: Aviation Training Center Details and registration for training: +7 (495) 023-87-39.",
        url: icon1,
        text2: "",
        text2Eng: "",
      },
    ],
  },
  {
    id: 1,
    engName: "INSURANCE AND LEASING",
    name: "СТРАХОВАНИЕ И ЛИЗИНГ",
    url: icon2,
    data: [
      {
        text1:
          "Комплексное страхование Хелипорт Москва заботится о Вас! Ваши комфорт и безопасность – приоритеты нашей работы. Клиентам Хелипорт Москва доступны эксклюзивные условия страхования по всем видам рисков. Наши специалисты сделают все, чтобы Вы чувствовали себя спокойно как в небе, так и на земле.  Помимо обеспечения безопасности полетов, мы предоставляем страхование всех возможных рисков, которые могут возникнуть при эксплуатации ВС. Наша ответственность за качество производимых работ также застрахована. С нами Вы в полной безопасности! Все условия страхования уточняйте по телефону +7 (495) 023-87-39",
        textEng:
          "Comprehensive insurance Heliport Moscow takes care of you! Your comfort and safety are the priorities of our work. Heliport Moscow clients have access to exclusive insurance conditions for all types of risks. Our experts will do everything to make you feel calm both in the sky and on the ground. In addition to ensuring flight safety, we provide insurance for all possible risks that may arise during aircraft operation. Our responsibility for the quality of the work performed is also insured. You are completely safe with us! Specify all insurance conditions by phone +7 (495) 023-87-39",
        url: "",
        text2: "",
        text2Eng: "",
      },
    ],
  },
  {
    id: 2,
    engName: "REGISTRATION AND CERTIFICATION",
    name: "РЕГИСТРАЦИЯ И СЕРТИФИКАЦИЯ",
    url: icon3,
    data: [
      {
        text1:
          "Хелипорт Москва поможет зарегистрировать новое воздушное судно или оформить сделку покупки/продажи ресурсного вертолета. При оформлении сделок с ресурсными воздушными судами квалифицированные юристы Хелипорт Москва помогут провести сделку с соблюдением закона и обеспечением экономической и правовой безопасности. При покупке нового вертолета в Хелипорт Москва, регистрация ВС включена в стоимость.",
        textEng:
          "Heliport Moscow will help register a new aircraft or complete a purchase / sale transaction for a resource helicopter. When completing transactions with resource aircraft, Heliport Moscow's qualified lawyers will help to conduct the transaction in compliance with the law and ensuring economic and legal security. When buying a new helicopter at Heliport Moscow, aircraft registration is included in the price.",
        url: icon5,
        text2:
          "Необходимые документы для выполнения всех процедур регистрации посредством Хелипорт Москва: - нотариальная доверенность на представителя Хелипорт Москва для представления ваших интересов; - документы участников сделки с воздушным судном, а именно: - для юридического лица - документы, подтверждающие полные наименования юридических лиц с указанием их мест нахождения (нотариальные копии учредительных документов в 2-х экз.), одобрение крупной сделки, выписка из ЕГРЮЛ не старше 2-х недель по состоянию на дату подачи на регистрацию; - для физического лица - документы, удостоверяющие личность (копия паспорта), ИНН физического лица, нотариальное согласие супруги/супруга на сделку или нотариальное заявление об отсутствии супруги/супруга. - договор купли-продажи и акт приема-передачи; - свидетельство о регистрации воздушного судна (только для ресурсных) и формуляры.",
        text2Eng:
          "Required documents to complete all registration procedures through Heliport Moscow: - notarized power of attorney for a Heliport Moscow representative to represent your interests; - documents of the participants in the transaction with the aircraft, namely: - for a legal entity - documents confirming the full names of legal entities with an indication of their locations (notarized copies of constituent documents in 2 copies), approval of a major transaction, an extract from the Unified State Register of Legal Entities no older 2 weeks as of the date of filing for registration; - for an individual - identity documents (copy of a passport), TIN of an individual, notarial consent of a spouse to a transaction or a notarial statement about the absence of a spouse. - purchase and sale agreement and acceptance certificate; - certificate of registration of the aircraft (only for resource) and forms.",
      },
    ],
  },
];
