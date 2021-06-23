import Icon1 from "../image/item/Excurtion/1.jpg";
import Icon2 from "../image/item/Excurtion/2.jpg";
import Icon3 from "../image/item/Excurtion/3.jpg";
import Icon4 from "../image/item/Excurtion/4.jpg";
import Icon5 from "../image/item/Excurtion/5.jpg";
import Icon6 from "../image/item/Excurtion/6.jpg";
import Icon7 from "../image/item/Excurtion/7.jpg";
import Icon8 from "../image/item/Excurtion/8.jpg";
import Icon9 from "../image/item/Excurtion/9.jpg";
import Icon10 from "../image/item/Excurtion/10.jpg";
import Icon11 from "../image/item/Excurtion/11.jpg";
import Icon12 from "../image/item/Excurtion/12.jpg";
import Icon13 from "../image/item/Excurtion/13.jpeg";
import Icon14 from "../image/item/Excurtion/14.jpg";
import Icon15 from "../image/item/Excurtion/15.jpg";
import Icon16 from "../image/item/Excurtion/16.jpg";
import Icon17 from "../image/item/Excurtion/17.jpg";
import Icon18 from "../image/item/Excurtion/18.jpg";
import Icon19 from "../image/item/Excurtion/19.jpg";
import Icon20 from "../image/item/Excurtion/20.jpg";
import Icon21 from "../image/item/Excurtion/21.jpg";
import Icon22 from "../image/item/Excurtion/22.jpg";
import Icon23 from "../image/item/Excurtion/23.jpg";
import Icon24 from "../image/item/Excurtion/24.jpg";
import Icon25 from "../image/item/Excurtion/25.jpg";
import Icon26 from "../image/item/Excurtion/26.jpg";
import Icon27 from "../image/item/Excurtion/27.jpg";
import Icon28 from "../image/item/Excurtion/28.jpg";
import Icon29 from "../image/item/Excurtion/29.jpg";
import Icon30 from "../image/item/Excurtion/30.jpg";
import Icon31 from "../image/item/Excurtion/31.jpg";
import Icon32 from "../image/item/Excurtion/32.jpg";
import Icon33 from "../image/item/Excurtion/33.jpg";
import Icon34 from "../image/item/Excurtion/34.jpg";
import Icon35 from "../image/item/Excurtion/35.jpg";
import Icon36 from "../image/item/Excurtion/36.jpg";
import Icon37 from "../image/item/Excurtion/37.jpg";
import Icon38 from "../image/item/Excurtion/38.jpg";
import Icon39 from "../image/item/Excurtion/39.jpg";
import Icon40 from "../image/item/Excurtion/40.jpg";
import Icon41 from "../image/item/Excurtion/41.jpg";
import Icon42 from "../image/item/Excurtion/42.jpg";
import Icon43 from "../image/item/Excurtion/43.jpg";
import Icon44 from "../image/item/Excurtion/44.jpg";
import Icon45 from "../image/item/Excurtion/45.jpg";
import Icon46 from "../image/item/Excurtion/46.jpg";
import Icon47 from "../image/item/Excurtion/47.jpg";
import Icon48 from "../image/item/Excurtion/48.jpg";
import Icon49 from "../image/item/Excurtion/49.jpg";
import Icon50 from "../image/item/Excurtion/50.jpg";
import Icon51 from "../image/item/Excurtion/51.jpg";
import Icon52 from "../image/item/Excurtion/52.jpg";
import Icon53 from "../image/item/Excurtion/53.jpg";
import Icon54 from "../image/item/Excurtion/54.jpg";
import Icon55 from "../image/item/Excurtion/55.jpg";
import Icon56 from "../image/item/Excurtion/56.jpg";
import Icon57 from "../image/item/Excurtion/57.jpg";
import Icon58 from "../image/item/Excurtion/58.jpg";
import Icon59 from "../image/item/Excurtion/59.jpg";
import Icon60 from "../image/item/Excurtion/60.jpg";
import Icon61 from "../image/item/Excurtion/61.jpg";
import Icon62 from "../image/item/Excurtion/62.png";
import Icon63 from "../image/item/Excurtion/63.jpg";
import Icon64 from "../image/item/Excurtion/64.jpg";
import Icon65 from "../image/item/Excurtion/65.jpg";
import Icon66 from "../image/item/Excurtion/66.jpg";
import Icon67 from "../image/item/Excurtion/67.jpg";
import Icon68 from "../image/item/Excurtion/68.jpg";
import Icon69 from "../image/item/Excurtion/69.jpg";
import Icon80 from "../image/item/Excurtion/70.jpg";

export interface IItemExcursion {
  id: number;
  nameEng: string;
  name: string;
  time: string;
  descEng: string;
  image: string;
  category: number;
  descMain: string;
  priceTrans: Array<ArrayExcursion>;
}
export type ArrayExcursion = {
  name: string;
  price: string;
  candidate: string;
};

export const ItemExcursions: Array<IItemExcursion> = [
  {
    id: 0,
    nameEng: "Scenic route",
    name: "Маршрут 'Живописный'",
    time: "0:15",
    category: 1,
    image: Icon1,
    descEng:
      "Make your dream come true! - Treat yourself or your loved ones with a 15-minute flight on a modern helicopter, take a bird's eye view of the life of the city! A helicopter flight in the vicinity of Zhivopisnaya Bay, the fabulous Opalikhovsky forest park and Krasnogorsk near Moscow are unforgettable moments of vivid impressions and completely new sensations. During the helicopter tour you will have the opportunity to see from a bird's eye view the largest exhibition complex CROCUS-EXPO, the landscape park Mitino , the Big Stroginsky backwater and cross the Moskva River by helicopter",
    descMain:
      "Реализуйте мечту! – Подарите себе или вашим близким 15-минутный полёт на современном вертолете, взгляните на жизнь города с высоты птичьего полета! Полет на вертолете в окрестностях Живописной бухты, сказочного Опалиховского лесопарка и подмосковного Красногорска – это незабываемые моменты ярких впечатлений и совершенно новых ощущений.Во время вертолетной экскурсии у вас будет возможность увидеть с высоты птичьего полета крупнейший выставочный комплекс «КРОКУС-ЭКСПО», ландшафтный парк «Митино», Большой Строгинский затон и пересечь на вертолете Москву-реку.",
    priceTrans: [
      { name: "Robinson R44", price: "15 810", candidate: "3" },
      { name: "Robinson R66", price: "20 130", candidate: "4" },
      { name: "Airbus H130", price: "33 720", candidate: "6" },
    ],
  },
  {
    id: 1,
    nameEng: "Moscow Observation",
    name: "Москва Обзорная",
    time: "0:40",
    category: 1,
    image: Icon2,
    descEng:
      "Moscow is the most beautiful capital of the world with a rich history, many parks, attractions and architectural masterpieces. Heliport Moscow offers to look at the beauty of the metropolis from above! Believe me, few have seen it from this angle. Vivid impressions and good mood are guaranteed! Despite the fact that flights over the historical center of the city are closed, flying by helicopter around Moscow, you will see many interesting places. In a 40-minute flight you can admire Pavshinskaya floodplain, Zhivopisny bridge, Moscow City skyscraper complex, Sheremetyevo airport, Ostankinskaya tower, park Losiny Ostrov, the Moscow State University area, Poklonnaya Gora, the oldest Moscow airfield Tushino, the River Station, the Skolkovo innovation center and many more unusual and beautiful places.",
    descMain:
      "Москва – красивейшая столица мира с богатой историей, множеством парков, достопримечательностей и архитектурных шедевров. Хелипорт Москва предлагает взглянуть на красоту мегаполиса сверху! Поверьте, с такого ракурса ее видели немногие. Яркие впечатления и хорошее настроение гарантированы!  Несмотря на то, что полеты над историческим центром города закрыты, пролетая на вертолете вокруг Москвы, Вы увидите множество интересных мест.За 40 минут полета Вы сможете полюбоваться Павшинской поймой, Живописным мостом, комплексом небоскребов Москва-Сити, аэропортом Шереметьево, Останкинской башней, парком Лосиный остров, районом МГУ, Поклонной горой, старейшим московским аэродромом Тушино, Речным вокзалом, инновационным центром Сколково и еще множеством необычных и красивых мест.",
    priceTrans: [
      { name: "Robinson R44", price: "36 560", candidate: "3" },
      { name: "Airbus H130", price: "77 120", candidate: "6" },
    ],
  },
  {
    id: 2,
    nameEng: "NEW JERUSALEM",
    name: "НОВЫЙ ИЕРУСАЛИМ",
    time: "0:30",
    category: 1,
    image: Icon3,
    descEng:
      "A study flight to the New Jerusalem Monastery is always popular. It is not surprising, because it is an excellent choice for both family and romantic travel. The monastery is located next to the ancient city of Istra. The New Jerusalem Monastery is surrounded by a powerful wall and looks fabulous at any time of the year. In winter, its domes are decorated with fluffy snow, and in summer, the sun shines brightly. During the flight, you will also see Pavlovskaya Sloboda - a village with a long history and the Church of the Annunciation of the Blessed Virgin Mary, built 350 years ago. And, of course, enjoy the views of Krasnogorsk, the Nakhabino golf club and the magnificent nature, which is a real pleasure to look at from a height",
    descMain:
      "Ознакомительный полет в Ново-Иерусалимский монастырь пользуется неизменной популярностью. Неудивительно, ведь это - отличный выбор как для семейного, так и для романтического путешествия. Монастырь находится рядом с древним городом Истрой. Ново-Иерусалимский монастырь окружен мощной стеной и выглядит сказочно в любое время года. Зимой его купола украшает пушистый снег, а летом ярко освещает солнце. Во время полета Вы также увидите Павловскую слободу - село с многолетней историей и Храмом Благовещения Пресвятой Богородицы, построенным 350 лет назад. И, конечно, насладитесь видами Красногорска, гольф-клуба Нахабино и великолепной природой, смотреть на которую с высоты – настоящее удовольствие. ",
    priceTrans: [
      { name: "Robinson R44", price: "28 260", candidate: "3" },
      { name: "Airbus H130", price: "59 720", candidate: "6" },
    ],
  },
  {
    id: 3,
    nameEng: "Zvenigorod",
    name: "ЗВЕНИГОРОД",
    time: "0:35",
    category: 1,
    image: Icon4,
    descEng:
      'The flight to Zvenigorod is one of the most scenic routes for travel. Therefore, a familiarization flight to the center of Russian architecture is a great surprise for your friends and loved ones! Zvenigorod has always been of great strategic importance. Over the long history, a huge number of historical monuments of ancient Russian architecture have been created in the city. The main attractions of Zvenigorod to this day are the Savvino-Storozhevsky Monastery, erected at the end of the XIV century, and the Assumption Cathedral, built at the turn of the XIV-XV centuries. In the vicinity of the city there are numerous estates: "Ershovo", the house of the composer S.I. Taneev "Dunino", the estate of the Soviet writer MM Prishvina "Dyutkovo" ... All of them are perfectly visible from a helicopter!',
    descMain:
      "Полет в Звенигород – один из самых живописных маршрутов для путешествия. А потому, ознакомительный полет в центр русского зодчества – отличный сюрприз для ваших друзей и любимых! Звенигород всегда имел важное стратегическое значение. За многолетнюю историю в городе создано огромное количество исторических памятников древнерусской архитектуры. Главными достопримечательностями Звенигорода по сей день являются Саввино-Сторожевский монастырь, возведённый в конце XIV века, и Успенский Собор, построенный на рубеже XIV-XV вв. В окрестностях города расположены многочисленные усадьбы: «Ершово», дом композитора С.И. Танеева «Дунино», усадьба советского писателя М.М. Пришвина «Дютьково»… Все они прекрасно видны с вертолета! ",
    priceTrans: [
      { name: "Robinson R44", price: "32 410", candidate: "3" },
      { name: "Airbus H130", price: "68 370", candidate: "6" },
    ],
  },
  {
    id: 4,
    nameEng: "SERGIEV POSAD",
    name: "СЕРГИЕВ ПОСАД",
    time: "1:00",
    category: 1,
    image: Icon5,
    descEng:
      "A flight to the ancient city of Sergiev Posad will definitely leave you a pleasant experience. After all, this is the only city in the Moscow region included in the Golden Ring of Russia! Sergiev Posad is the most beautiful city in the Moscow region, which is called the center of Orthodoxy in Russia for the abundance of operating cathedrals and churches. The flight takes place without landing, which will not prevent you from seeing the main sights of Sergiev Posad. The main one is the architectural ensemble of the Trinity-Sergius Lavra (Holy Trinity-Sergius Lavra). It is a cultural and artistic monument of world importance, included in the UNESCO cultural heritage list. For five centuries, an ensemble of more than fifty architectural structures has appeared on the territory of the Trinity-Sergius Lavra. It is here that Andrei Rublev painted his masterpiece - the icon `Trinity`. Flying over the forests of the Moscow region, you can feel like on a real safari - moose, wild boars and other wild animals are perfectly visible from a helicopter! A walk to Sergiev Posad with Heliport Moscow is a journey to the source of spiritual strength and the opportunity to see the panorama of the ancient city from a bird's eye view",
    descMain:
      "Полет в старинный город Сергиев Посад обязательно оставит у Вас приятные впечатления. Ведь, это единственный город Московской области, включенный в состав Золотого Кольца России! Сергиев Посад - красивейший город Подмосковья, который называют «центром православия России» за обилие действующих соборов и церквей.Полет совершается без посадки, что не помешает Вам увидеть основные достопримечательности Сергиева Посада. Главная из них – архитектурный ансамбль Троице-Сергиевой лавры (Свято-Троицкая Сергиева лавра). Это памятник культуры и искусства мирового значения, занесённый в список культурного наследия ЮНЕСКО. За пять столетий на территории Троице-Сергиевой лавры появился ансамбль из более пятидесяти архитектурных сооружений. Именно здесь Андрей Рублёв написал свой шедевр — икону «Троица».Пролетая над лесными массивами Подмосковья, Вы можете почувствовать себя на настоящем сафари - лоси, кабаны и другие дикие звери отлично видны с вертолета!Прогулка в Сергиев Посад вместе с Хелипорт Москва – это путешествие к источнику духовной силы и возможность увидеть панораму древнего города с высоты птичьего полета.",
    priceTrans: [
      { name: "Robinson R44", price: "53 260", candidate: "3" },
      { name: "Airbus H130", price: "111 820", candidate: "6" },
    ],
  },
  {
    id: 5,
    nameEng: "MOSCOW OBZORNAYA (EVENING FLIGHT)",
    name: "МОСКВА ОБЗОРНАЯ (ВЕЧЕРНИЙ ПОЛЁТ)",
    time: "0:40",
    category: 1,
    image: Icon6,
    descEng:
      "Ideal for lovers and romantics! Evening 40-minute flight around the capital. You will be able to admire the views of the city at night, painted with millions of colored lights. Night Moscow is transforming beyond recognition. The beauty of the capital`s buildings and the light of the night lights from the height of the flight looks especially exciting and romantic. For everyone who has long wanted to feel the pulse of the city and become a little closer to the sky - a flight around Moscow at night will be the brightest impression of this summer.",
    descMain:
      "Идеальный вариант для влюблённых и романтиков!Вечерний 40-минутный полет вокруг Столицы. Вы сможете полюбоваться видами ночного города, раскрашенного миллионами разноцветных огней. Ночная Москва преображается до неузнаваемости. Красота столичных зданий и свет ночных огней с высоты полета выглядит особенно захватывающе и романтично. Для всех, кто давно хотел почувствовать пульс города и стать чуть ближе к небу - полет вокруг ночной Москвы станет самым ярким впечатлением этого лета.",
    priceTrans: [
      { name: "Robinson R44", price: "39 910", candidate: "3" },
      { name: "Airbus H130", price: "80 120", candidate: "6" },
    ],
  },
  {
    id: 6,
    nameEng: "FLIGHT WITHOUT BORDERS (60 MINUTES)",
    name: "ПОЛЁТ БЕЗ ГРАНИЦ (60 МИНУТ)",
    time: "1:00",
    category: 1,
    image: Icon7,
    descEng:
      "Flight program WITHOUT BORDERS is a unique opportunity to fly by helicopter on almost any route. When choosing a direction, you are limited only by your imagination. Take an individual helicopter ride - this flight will be remembered for a long time! Give your loved ones, friends and business partners the comfort, convenience and endless possibilities of helicopter flights.",
    descMain:
      "Лётная программы БЕЗ ГРАНИЦ – это уникальная возможность совершить полет на вертолете практически по любому маршруту. При выборе направления Вы ограничены только Вашей фантазией. Совершите индивидуальную прогулку на вертолете – этот полет запомнится надолго!Подарите Вашим близким, друзьям и деловым партнерам комфорт, удобство и безграничные возможности перелетов на вертолете. ",
    priceTrans: [
      { name: "Robinson R44", price: "53 260", candidate: "3" },
      { name: "Airbus H130", price: "111 820", candidate: "6" },
    ],
  },
  {
    id: 7,
    nameEng: "SPECIAL PROGRAM: FEEL YOURSELF AS A PILOT!",
    name: "СПЕЦПРОГРАММА: ПОЧУВСТВУЙ СЕБЯ ПИЛОТОМ!",
    time: "0:45",
    category: 1,
    image: Icon8,
    descEng:
      "Since childhood, you are in love with the sky and dream of learning the secrets of piloting, to understand what principles a helicopter flies by? Perhaps you still dream of becoming a pilot, but do not know how to make your dream come true? We have prepared a unique offer for you! The FEEL AS A PILOT program includes a flight from the Heliport Moscow helicopter center to the base by a Robinson R44 / R66 helicopter, a sightseeing tour of the training center, where you will be told in detail how helicopter pilots are trained, visit classrooms, lecture halls, and hangars of the helicopter center , talk to real pilots-instructors and teachers, learn a lot of interesting things about the principles of flight and piloting a helicopter, the basics of aerodynamics, acquire basic knowledge about the structure of an aircraft.",
    descMain:
      "Вы с детства влюблены в небо и мечтаете узнать секреты пилотирования, понять по каким принципам летает вертолёт? Быть может, вы до сих пор мечтаете стать пилотом, но не знаете, как воплотить свою мечту в реальность? Мы подготовили для вас уникальное предложение! Программа ПОЧУВСТВУЙ СЕБЯ ПИЛОТОМ включает в себя перелёт из вертолетного центра Хелипорт Москва до базы   на вертолете Robinson R44/R66, обзорную экскурсию по территории учебного центра, на которой Вам  в деталях расскажут как осуществляется подготовка пилотов вертолетов,  посетите учебные классы, лектории, ангары вертолетного центра, пообщаетесь с настоящими пилотами-инструкторами и преподавателями, узнаете много интересного о принципах полёта и пилотирования вертолета, основах аэродинамики, приобретете базовые знания об устройстве воздушного судна. ",
    priceTrans: [{ name: "Robinson R44", price: "55 000", candidate: "3" }],
  },
  {
    id: 8,
    nameEng: "THREE RESERVOIRS (SEVEN BRIDGES)",
    name: "ТРИ ВОДОХРАНИЛИЩА (СЕМЬ МОСТОВ)",
    time: "0:50",
    category: 1,
    image: Icon9,
    descEng:
      'The most "Water" helicopter excursion that you can imagine in Moscow. During the flight, we will fly over Zhivopisnaya Bay, Rechnoy Vokzal and head for the water area of ​​the Moscow Canal, perhaps the most amazing channel in the world, because it is not "gravity", but energy: water from the Volga to the watershed section rises by pumps on five steps , at the ends of the steps there are sluices, of which there are a total of 11. The main shipping route of the canal ends at the Northern River Port and the Northern River Terminal in Moscow. In 50 minutes of flight, during the navigation period, the most curious sight can be observation of ships and water transport from a bird`s eye view.',
    descMain:
      "Самая <<Водная>> вертолетная экскурсия, которую только можно представить в Москве. Во время полета мы пролетим над Живописной бухтой, Речным вокзалом и взяв курс на акваторию Канала имени Москвы, пожалуй, самого удивительного канала в мире, потому что он не “самотечный”, а энергетический: вода из Волги в водораздельный участок поднимается насосами по пяти ступеням, на концах ступеней размещены шлюзы, которых в общей сложности 11.На участке экскурсионной трассы по каналу имени Москвы, мы пролетим над рядом водохранилищ - Пироговское, Учинское и Икшинское - 19,5 км длины канала составляет путь по водохранилищам. Основная судоходная трасса канала оканчивается у Северного речного порта и Северного речного вокзала Москвы. За 50 минут полета, в навигационный период, самым любопытным зрелищем может стать наблюдение за судами и водными видами транспорта, с высоты птичьего полета. ",
    priceTrans: [
      { name: "Robinson R44", price: "45 260", candidate: "3" },
      { name: "Airbus H130", price: "95 080", candidate: "6" },
    ],
  },
  {
    id: 9,
    nameEng: "ISTRA RESERVOIR",
    name: "ИСТРИНСКОЕ ВОДОХРАНИЛИЩЕ",
    time: "0:45",
    category: 1,
    image: Icon10,
    descEng:
      "Route: Heliport Moscow - New Jerusalem - Istra Reservoir - Istra - Heliport Moscow. The sightseeing flight to the New Jerusalem Monastery will never be the same again! Indeed, now the variety of location groups is even greater, which means that the feeling of a real helicopter trip reaches its maximum. From a bird`s eye view, we will see Russian Palestine, recreated in the image of the holy lands. Some buildings repeat the outlines of structures in Jerusalem, such as the Resurrection Cathedral 1656-1685, created in the image and likeness of the Church of the Holy Sepulcher. The monastery was founded on a hill called Zion. To the east of it was the Olive Hill with the stone Olive Chapel, in the north - Tabor Hill. And on the banks of the Istra river, renamed Jordan, the skete of the patriarch was built.",
    descMain:
      "Маршрут: Хелипорт Москва - Новый Иерусалим - Истринское водохранилище - Истра - Хелипорт Москва.Ознакомительный полет в Ново-Иерусалимский монастырь никогда уже не будет прежним! Ведь, теперь разнообразие локационных групп еще больше, а значит ощущение реального вертолетного путешествия достигает максимума. С высоты птичьего полета мы увидим, русскую Палестину, воссозданную по образу святых земель.  Некоторые здания повторяют очертания сооружений Иерусалима, как, например, Воскресенский собор (1656—1685), создан по образу и подобию Храма Гроба Господнего. Мужской монастырь был заложен на холме, прозванном Сион. К востоку от него располагался Елеонский холм с каменной Елеонской часовней, на севере — холм Фавор. А на берегу реки Истры, переименованной в Иордан, был построен скит патриарха.  ",
    priceTrans: [
      { name: "Robinson R44", price: "40 710", candidate: "3" },
      { name: "Airbus H130", price: "85 720", candidate: "6" },
    ],
  },
  {
    id: 10,
    nameEng: "PIROGOVSKOE RESERVOIRЕ",
    name: "ПИРОГОВСКОЕ ВОДОХРАНИЛИЩЕ",
    time: "1:00",
    category: 1,
    image: Icon11,
    descEng:
      "In a 60-minute flight, you can admire the Picturesque Bay, Sheremetyevo Airport, Ostankino Tower, the oldest Moscow airfield Tushino, River Station, as well as the water surface of the Pirogov Reservoir, which is part of the Klyazminskoye Reservoir, the water area of which is more than 27 million.",
    descMain:
      "За 60 минут полета Вы сможете полюбоваться Живописной бухтой, аэропортом Шереметьево, Останкинской башней, старейшим московским аэродромом Тушино, Речным вокзалом, а также водной гладью Пироговского водохранилища, являющегося частью Клязьминского водохранилища, акватория которого более 27 млн.куб.м.",
    priceTrans: [
      { name: "Robinson R44", price: "53 260", candidate: "3" },
      { name: "Airbus H130", price: "111 820", candidate: "6" },
    ],
  },
  {
    id: 11,
    nameEng: "FRESH WIND",
    name: "ВОЛЕН / СОРОЧАНЫ / FRESH WIND",
    time: "0:33",
    category: 2,
    image: Icon12,
    descEng:
      "`Volen` is a sports park! One of the few resorts in the Moscow region that meet the world standards of the tourism industry. Over the years of its existence and constant development, the Park has earned a reputation as a popular and fashionable place for winter and summer holidays.",
    descMain:
      "«Волен» - спортивный парк!Один из немногих в Подмосковье курортов, соответствующих мировым стандартам индустрии туризма. За годы своего существования и постоянного развития Парк заслужил репутацию популярного и модного места для зимнего и летнего отдыха.",
    priceTrans: [
      { name: "Robinson R44", price: "53 260", candidate: "3" },
      { name: "Airbus H130", price: "111 820", candidate: "6" },
    ],
  },
  {
    id: 12,
    nameEng: "SUZDAL",
    name: "СУЗДАЛЬ",
    time: "1:33",
    category: 2,
    image: Icon13,
    descEng:
      "To ancient Suzdal by helicopter? Welcome! Suzdal is a major tourist center that attracts Russian and foreign tourists. Yuri Dolgoruky, Alexander Nevsky, Alexander Suvorov, Dmitry Pozharsky - these and many other names familiar to all Russians are associated with the ancient Suzdal land. Over 200 cultural and architectural monuments of the 12th-19th centuries have survived in Suzdal. Remaining within the boundaries of the 18th century, Suzdal is filled with the indescribable flavor of the old Russian city, the amazing harmony of ancient Russian architecture and the environment. The main architectural ensembles of the city - the Kremlin, Pokrovsky and Spaso-Evfimiev monasteries, as well as the Church of Boris and Gleb in Kideksha are included in the UNESCO World Heritage List.",
    descMain:
      "В древний Суздаль на вертолете? Добро пожаловать!Суздаль - крупный туристический центр, привлекающий российских и иностранных туристов. Юрий Долгорукий, Александр Невский, Александр Суворов, Дмитрий Пожарский - эти и многие другие знакомые всем россиянам имена связаны с древней суздальской землей.В Суздале сохранилось свыше 200 памятников культуры и архитектуры XII-XIX вв. Оставшись в границах XVIII века, Суздаль наполнен непередаваемым колоритом старинного русского города, удивительной гармонией древнерусской архитектуры и окружающей среды. Главные архитектурные ансамбли города — Кремль, Покровский и Спасо-Евфимиев монастыри, а также церковь Бориса и Глеба в Кидекше внесены в Список Всемирного Наследия ЮНЕСКО.",
    priceTrans: [
      { name: "Robinson R44", price: "От 152 700", candidate: "3" },
      { name: "Robinson R66", price: "От 225 400", candidate: "4" },
      { name: "Airbus H130", price: "От 303 100", candidate: "6" },
    ],
  },
  {
    id: 13,
    nameEng: "CONAKOVO RIVER CLUB",
    name: "КОНАКОВО РИВЕР КЛАБ",
    time: "0:52",
    category: 2,
    image: Icon14,
    descEng:
      "Helicopter flight - rest between heaven and earth! `Konakovo River Club` is a picturesque bank of the Volga (about 120 km from Moscow), rich forests of the Tver region, untouched islands of the Ivankovskoye reservoir, magnificent mushroom, fish and hunting places, beautiful sunsets ... the territory is a comfortable hotel and infrastructure for outdoor activities.",
    descMain:
      "Полет на вертолете - отдых между небом и землей!«Конаково Ривер Клаб» – это живописный берег Волги (около 120 км от Москвы), богатые леса Тверской области, нетронутые острова Иваньковского водохранилища, великолепные грибные, рыбные и охотничьи места, красивейшие закаты…На территории комфортабельный отель и инфраструктура для активного отдыха на природе.",
    priceTrans: [
      { name: "Robinson R44", price: "От 92 500", candidate: "3" },
      { name: "Robinson R66", price: "От 134 900", candidate: "4" },
      { name: "Airbus H130", price: "От 184 300", candidate: "6" },
    ],
  },
  {
    id: 14,
    nameEng: "ZAVIDOVO",
    name: "ЗАВИДОВО",
    time: "0:52",
    category: 2,
    image: Icon15,
    descEng:
      "Located on the picturesque bank of the Doibitsa River, which flows into the Volga, in one of the cleanest corners of nature on Earth, the new Radisson Resort Zavidovo has everything to offer you an ideal vacation in the countryside: 239 comfortable rooms overlooking the water surface of the river, a spa center with swimming pool and saunas, PGA National golf club, several excellent restaurants, kids club.",
    descMain:
      "В расположенном на живописном берегу реки Дойбица, впадающей в Волгу, в одном из самых чистых уголков природы на Земле, новом курорте Radisson Resort Zavidovo есть все, чтобы предложить Вам идеальный загородный отдых: 239 комфортабельных номеров с видом на водную гладь реки, спа-центр с бассейном и саунами, гольф клуб PGA National, несколько превосходных ресторанов, детский клуб.",
    priceTrans: [
      { name: "Robinson R44", price: "От 82 300", candidate: "3" },
      { name: "Robinson R66", price: "От 119 500", candidate: "4" },
      { name: "Airbus H130", price: "От 161 300", candidate: "6" },
    ],
  },
  {
    id: 15,
    nameEng: "FOX NORA / GURBAN",
    name: "ЛИСЬЯ НОРА / ГУРБАН",
    time: "0:30",
    category: 2,
    image: Icon16,
    descEng:
      "Incredible surprise flight! Fox hole is a unique place for an unforgettable vacation. It is located only 39 km from Moscow. Fresh air, picturesque landscape, variety of opportunities and excellent service create all conditions for vivid impressions and comfortable leisure for the whole family.",
    descMain:
      "Невероятный полет-сюрприз! Лисья нора — уникальное место для незабываемого отдыха. Находится всего в 39 км от Москвы. Свежий воздух, живописный ландшафт, разнообразие возможностей и отличный сервис создают все условия для ярких впечатлений и комфортного досуга для всей семьи.",
    priceTrans: [
      { name: "Robinson R44", price: "От 60 300", candidate: "3" },
      { name: "Robinson R66", price: "От 86 400", candidate: "4" },
      { name: "Airbus H130", price: "От 118 400", candidate: "6" },
    ],
  },
  {
    id: 16,
    nameEng: "VAZUZA COUNTRY CLUB",
    name: "ВАЗУЗА КАНТРИ КЛАБ",
    time: "1:08",
    category: 2,
    image: Icon17,
    descEng:
      "Travel to Russian Switzerland! Vazuza Country Club is a new premium-class hotel on the bank of the Vazuza reservoir, known as one of the most beautiful and ecologically clean corners of the Smolensk region. A place of beautiful wild landscapes, fresh air and great fishing.",
    descMain:
      "Путешествие в Русскую Швейцарию! «Vazuza Country Club» - новый отель премиум-класса на берегу Вазузского водохранилища, известного как одно из самых красивых и экологически чистых уголков Смоленской области. Место прекрасных диких пейзажей, свежего воздуха и отличной рыбалки.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 17,
    nameEng: "PALEKH",
    name: "ПАЛЕХ",
    time: "1:08",
    category: 3,
    image: Icon18,
    descEng: "",
    descMain: "",
    priceTrans: [
      { name: "Robinson R44", price: "От 286 850", candidate: "4" },
      { name: "Airbus H130", price: "От 379 500", candidate: "6" },
      //{ name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 18,
    nameEng: "Rybinsk",
    name: "РЫБИНСК",
    time: "1:08",
    category: 3,
    image: Icon19,
    descEng: "",
    descMain: "",
    priceTrans: [
      { name: "Robinson R44", price: "От 173 200", candidate: "3" },
      { name: "Robinson R66", price: "От 256 300", candidate: "4" },
      { name: "Airbus H130", price: "От 346 100", candidate: "6" },
    ],
  },
  {
    id: 19,
    nameEng: "Plyos",
    name: "ПЛЁС",
    time: "1:08",
    category: 3,
    image: Icon20,
    descEng:
      "See the famous Levitanovskie landscapes from a bird's eye view, accessible to everyone who is able to see the beauty of Russian nature. Walking along the embankment, admiring the latitude of the great river from numerous Plyos hills-capes is an integral part of any tourist program in Plyos. Plyos is a city-reserve. It covers an area of ​​three square kilometers and is one of the smallest cities in Russia. However, it is here that the spirit of the Russian province, as it was before the historical upheavals of the 20th century, has been preserved and anxiously maintained. Plyos is a city-medicine, which is shown to residents of capitals and other megacities, overloaded with everyday life. It is worth finding it once, to return again and again, or even stay here forever.",
    descMain:
      "Увидеть с высоты птичьего полета знаменитые Левитановские пейзажи, доступные каждому, кто способен видеть красоту русской природы. Прогуляться по набережной, полюбоваться на широту великой реки с многочисленных плёсских горок-мысов — неотъемлемая часть любой туристической программы в Плёсе. Плёс — город-заповедник. Он занимает площадь в три квадратных километра и является одним из самых маленьких городов России. Однако именно здесь сохранился и трепетно поддерживается дух русской провинции, какой она была до исторических потрясений XX века. Плёс — город-лекарство, которое показано жителям столиц и других мегаполисов, перегруженных повседневностью. Его стоит найти однажды, чтобы возвращаться снова и снова или даже остаться здесь навсегда",
    priceTrans: [
      { name: "Robinson R44", price: "От 228 900", candidate: "3" },
      { name: "Robinson R66", price: "От 340 100", candidate: "4" },
      { name: "Airbus H130", price: "От 392 200", candidate: "6" },
    ],
  },
  {
    id: 20,
    nameEng: "KOSTROMA",
    name: "КОСТРОМА",
    time: "1:08",
    category: 3,
    image: Icon21,
    descEng:
      "Enjoy the beauty of the Volga from a helicopter! Kostroma is the most beautiful city that is part of the Golden Ring of Russia. One of the oldest cities, cultural, historical and industrial center. Kostroma is located 330 km from Moscow right on the banks of the Volga and Kostroma rivers. There are many berths on the Kostroma embankment. It is best to admire the picturesque beauty of the banks of the Volga from a helicopter. In Kostroma, you definitely need to take a walk in the city center - admire the ancient architecture, white-stone churches, old shopping arcades, where life is still in full swing, the hallmark of Kostroma is a fire tower ... how moose live, you can feed them, take pictures with the little ones. Fun for kids and adults. Fly to Kostroma to feel the feeling of an ancient city, like a helicopter is a time machine!",
    descMain:
      "Оцени красоту Волги с вертолета! Кострома - красивейший город, входящий в состав Золотого кольца России. Один из древнейших городов, культурный исторический и промышленный центр. Кострома расположена в 330 км от Москвы сразу на берегах реки Волги и реки Костромы. На набережной Костромы расположено много причалов. Любоваться живописными красотами берегов Волги лучше всего с вертолета. ВКостроме непременно нужно погулять по центру города – полюбоваться на древнюю архитектуру, белокаменные церкви, старинные Торговые ряды, в которых жизнь кипит до сих пор, визитную карточку Костромы – пожарную каланчу... Под Костромой расположена единственная в России лосиная ферма, где Вам покажут, как живут лоси, Вы сможете их покормить, сфотографироваться с маленькими. Веселье для детей и взрослых. Прилетайте в Кострому, чтобы почувствовать ощущение древнего города, словно вертолет – это машина времени!",
    priceTrans: [
      { name: "Robinson R44", price: "От 206 900", candidate: "3" },
      { name: "Robinson R66", price: "От 307 000", candidate: "4" },
      { name: "Airbus H130", price: "От 375 800", candidate: "6" },
    ],
  },
  {
    id: 21,
    nameEng: "YAROSLAVL",
    name: "ЯРОСЛАВЛЬ",
    time: "1:08",
    category: 3,
    image: Icon22,
    descEng:
      "An interesting route through historical sites! The city of Yaroslavl is one of the most amazing cities in the Golden Ring of Russia with a thousand-year history. The first mention of Yaroslavl can be found in the annals of 1071. Yaroslavl is called the pearl of the Golden Ring of ancient Russian cities, as well as one of the architectural capitals of Russia. A bear is depicted on the coat of arms of the city; in his left paw he holds a golden ax. According to legend, Prince Yaroslav killed the sacred beast - a bear, so he conquered the locals. At present, Yaroslavl is a large cultural center of Russia. The historical center of the city is included in the UNESCO World Heritage List.",
    descMain:
      "Интересный маршрут по историческим местам! Город Ярославль - один из самых удивительных городов Золотого кольца России с тысячелетней историей. Первое упоминание о Ярославле можно найти в летописи 1071 года. Ярославль называют жемчужиной Золотого кольца древнерусских городов, а также одной из архитектурных столиц России. На гербе города изображен медведь, в левой лапе он держит золотую секиру. Согласно легенде, князь Ярослав убил священного зверя - медведя, так он покорил местных жителей. В настоящее время Ярославль - крупный культурный центр России. Исторический центр город внесен в список Мирового культурно-исторического наследия ЮНЕСКО.",
    priceTrans: [
      { name: "Robinson R44", price: "От 184 900", candidate: "3" },
      { name: "Robinson R66", price: "От 273 900", candidate: "4" },
      { name: "Airbus H130", price: "От 332 800", candidate: "6" },
    ],
  },
  {
    id: 22,
    nameEng: "MYSHKIN",
    name: "МЫШКИН",
    time: "1:08",
    category: 3,
    image: Icon23,
    descEng:
      "Check out the open-air museum! Myshkin is a small but unique city in Russia. This is a kind of city-museum of the Russian province, which has preserved the old buildings of the merchant city and a special provincial way of life. Having received the status of a city in 1777, it began to develop rapidly. The famous Myshkin fairs were held here. The city was famous for its blacksmiths and potters. And the Myshkin craftsmen Petrov and Poltev made furniture from birch flows, which were acquired by members of the royal family. Myshkin's tourist image is constantly growing, which creates an investment attractiveness in the field of tourism business.",
    descMain:
      "Посмотри на музей под открытым небом! Мышкин – маленький, но уникальный город России. Это своеобразный город-музей русской провинции, сохранивший старинную застройку купеческого города и особый провинциальный уклад жизни. Получив в 1777 году статус города, он стал быстро развиваться.Здесь проводились знаменитые Мышкинские ярмарки. Город славился своими кузнецами и гончарами. А мышкинские мастера Петров и Полтев делали из берёзовых наплывов мебель, которую приобретали члены царской фамилии. Туристический имидж Мышкина постоянно возрастает, что создаёт инвестиционную привлекательность в сфере туристического бизнеса.",
    priceTrans: [
      { name: "Robinson R44", price: "От 158 500", candidate: "3" },
      { name: "Robinson R66", price: "От 234 200", candidate: "4" },
      { name: "Airbus H130", price: "От 286 700", candidate: "6" },
    ],
  },
  {
    id: 23,
    nameEng: "UGLICH",
    name: "УГЛИЧ",
    time: "1:08",
    category: 3,
    image: Icon24,
    descEng:
      "Open the world by helicopter! Uglich is located in the Yaroslavl region on the banks of the Volga. It is a fairly small city, but with a rich history, because it was first mentioned in the chronicles back in the 12th century. Initially, Uglich was the capital of the principality and a border town with the Moscow principality, therefore, active construction was carried out here. Now Uglich is a city included in the Golden Ring of Russia. There are many cultural historical monuments here; Uglich Kremlin, Holy Resurrection Monastery, Epiphany Monastery, Alekseevsky Monastery with the Assumption (`Wondrous`) Church, built in 1628. There are many interesting private museums in Uglich: Russian vodka, myths and superstitions. In the vicinity of the city, there are many monasteries and churches that you can admire from a bird's eye view. You will be inspired by the views from the banks of the Volga, and you will surely want to come back here again.",
    descMain:
      "Открой мир на вертолете! Углич находится в Ярославской области на берегу Волги. Это достаточно небольшой город, но с богатой историей, ведь он впервые упоминается в летописи еще в 12 веке. Первоначально Углич был столицей княжества и пограничным городом с московским княжеством, поэтому здесь велось активное строительство. Сейчас Углич является городом, входящим в Золотое кольцо России. Здесь немало культурных исторических памятников; Угличский Кремль, Свято-Воскресенский монастырь, Богоявленский монастырь, Алексеевский монастырь с Успенской («Дивной») церковью, построенной в 1628 году. В Угличе много частных интересных музеев: русской водки, мифов и суеверий. В окрестностях города сохранилось много монастырей и церквей, которыми вы сможете полюбоваться с высоты птичьего полета. Вас вдохновят виды, открывающиеся с берегов Волги, и вы наверняка захотите вернуться сюда вновь.",
    priceTrans: [
      { name: "Robinson R44", price: "От 140 900", candidate: "3" },
      { name: "Robinson R66", price: "От 207 700", candidate: "4" },
      { name: "Airbus H130", price: "От 260 300", candidate: "6" },
    ],
  },
  {
    id: 24,
    nameEng: "ROSTOV VELIKY",
    name: "РОСТОВ ВЕЛИКИЙ",
    time: "1:08",
    category: 3,
    image: Icon25,
    descEng:
      "Rostov (Rostov the Great) is one of the oldest cities in Russia. The first mention in the chronicle since 862. Located 53 km south-west of Yaroslavl, on the shores of Lake Nero. There are 326 cultural monuments on the territory of Rostov. The city is the tourist center of the Golden Ring of Russia. Flying over Rostov by helicopter, you will see the Rostov Kremlin, Avraamiev Monastery of the Epiphany, Spaso-Yakovlevsky, Trinity-Varnitsky and Rozhdestvensky monasteries.",
    descMain:
      "Ростов (Ростов Великий) – один из древнейших городов России. Первое упоминание в летописи с 862 года. Расположен в 53 км к юго-западу от Ярославля, на берегу озера Неро. На территории Ростова 326 памятников культуры. Город является туристическим центром Золотого кольца России. Пролетая над Ростовом на вертолете, Вы увидите Ростовский Кремль, Авраамиев Богоявленский монастырь, Спасо-Яковлевский, Троице-Варницкий и Рождественский монастыри.",
    priceTrans: [
      { name: "Robinson R44", price: "От 144 600", candidate: "3" },
      { name: "Robinson R66", price: "От 213 200", candidate: "4" },
      { name: "Airbus H130", price: "От 293 200", candidate: "6" },
    ],
  },
  {
    id: 25,
    nameEng: "KALYAZIN",
    name: "КАЛЯЗИН",
    time: "1:08",
    category: 3,
    image: Icon26,
    descEng:
      "Treat yourself to a flight! The small town of Kalyazin is located 190 km from Moscow along the Yaroslavskoye and Dmitrovskoye highways. Like many provincial cities of Russia, its history is associated with the creation of a fortress-monastery, around which a settlement grew, and later on, on opposite sides of the river, two more settlements arose, united in 1775 with each other and received, by decree of Empress Catherine II, the status of a city. If you fly to Kalyazin by helicopter, you will enjoy the incredible panorama of the city from the most unusual angles. The bell tower of St. Nicholas Cathedral, the ensemble of the Ascension Church and old residential buildings of the 18th-19th centuries have survived on a small island and partially flooded.",
    descMain:
      "Подарите себе полет! В 190 км от Москвы по Ярославскому и Дмитровскому шоссе расположился небольшой город Калязин. Подобно многим провинциальным городам России, его история связана с созданием крепости-монастыря, вокруг которого разрослась слобода, а в последующем времени на противоположных сторонах реки возникли ещё две слободы, объединённые в 1775 году между собой и получившие по указу императрицы Екатерины II статус города. Если Вы полетите в Калязин на вертолете, то насладитесь невероятной панорамой города с самых необычных ракурсов. Сохранились «плавающая» на небольшом островке и частично затопленная колокольня Никольского собора, ансамбль Вознесенской церкви и старинные жилые дома XVIII—XIX вв.",
    priceTrans: [
      { name: "Robinson R44", price: "От 120 400", candidate: "3" },
      { name: "Robinson R66", price: "От 176 800", candidate: "4" },
      { name: "Airbus H130", price: "От 220 700", candidate: "6" },
    ],
  },
  {
    id: 26,
    nameEng: "PERESLAVL-ZALESSKY",
    name: "ПЕРЕСЛАВЛЬ-ЗАЛЕССКИЙ",
    time: "1:08",
    category: 3,
    image: Icon27,
    descEng:
      "A unique route for a family vacation! Pereslavl-Zalessky is an ancient Russian city, one of the tourist centers of the Golden Ring of Russia, located 140 km from Moscow. Pereslavl and its environs are famous for their history, architectural monuments and unusually beautiful nature. Pereslavl-Zalessky was founded in 1152 by Yuri Dolgoruky. An outstanding politician and military leader, Prince Alexander Nevsky, was also born here. Part of the city is part of the Pleshcheyevo Lake National Park. The lake is extremely picturesque due to its hilly shores. It is home to the famous `royal herring` - vendace, which earlier ended the coronation feast of the heir to the Moscow grand-ducal, and then the royal throne. At the end of the 17th century. On the shores of Lake Pleshcheevo, under the leadership of Peter I, the beginning of the Russian military fleet was laid. The only surviving ship of the `amusing flotilla` - the bot` Fortuna` is kept in the museum-estate `Botik of Peter I`, 2 km from the city, near the ancient village Ves'kovo. You will also see a panorama of the white-stone Spaso-Preobrazhensky Cathedral and earthen ramparts - the remains of an ancient city fortress. There are no older structures in central Russia.",
    descMain:
      "Уникальный маршрут для семейного отдыха! Переславль-Залесский - древний русский город, один из туристических центров Золотого Кольца России, расположенный в 140 км от Москвы. Переславль и его окрестности славятся своей историей, архитектурными памятниками и необыкновенно красивой природой. Переславль-Залесский основан в 1152 году Юрием Долгоруким. Здесь также родился выдающийся политический деятель и полководец князь Александр Невский. Часть города входит в состав национального парка `Плещеево озеро`. Озеро необыкновенно живописно благодаря своим холмистым берегам. В нем водится знаменитая `царская селедка` – ряпушка, которой ранее завершался коронационный пир наследника московского великокняжеского, а затем и царского престола. В конце XVII в. на берегах Плещеева озера под руководством Петра I было положено начало российскому военному флоту. Единственный дошедший до нашего времени корабль `потешной флотилии` - бот `Фортуна` хранится в музее-усадьбе `Ботик Петра I` в 2 км от города, возле старинного села Веськово. Вы также увидите панораму белокаменного Спасо-Преображенского собора и земляные валы - остатки древней городской крепости. В центральной России нет более древних сооружений.",
    priceTrans: [
      { name: "Robinson R44", price: "От 111 600", candidate: "3" },
      { name: "Robinson R66", price: "От 163 600", candidate: "4" },
      { name: "Airbus H130", price: "От 204 100", candidate: "6" },
    ],
  },
  {
    id: 27,
    nameEng: "Dubna",
    name: "ДУБНА",
    time: "1:08",
    category: 3,
    image: Icon28,
    descEng:
      "Periodic table from a helicopter! Dubna is one of the young cities in Russia and the Moscow region. It is known in the world as a major scientific center. Scientists from many countries have been working here for more than half a century. This is the only Russian settlement immortalized in the Periodic Table of Elements of D.I.Mendeleev: `Dubnium` is the name of the chemical element discovered by the scientists of the city 105. It has the status of a science city since 2001. A special economic zone of technology-innovative type has been formed in the city since 2006. Dubna is located 125 km from Moscow in a picturesque corner of the Northern Moscow region, on the Volga bank.",
    descMain:
      "Таблица Менделеева с вертолета! Дубна – один из молодых городов России и Московской области. В мире известен как крупный научный центр. Более полувека здесь работают ученые многих стран. Это единственный российский населенный пункт, увековеченный в Периодической таблице элементов Д.И. Менделеева: «дубнием» называется открытый учеными города 105 химический элемент. С 2001 года имеет статус наукограда. С 2006 года в городе формируется особая экономическая зона технико-внедренческого типа. Дубна находится в 125 км от Москвы в живописном уголке Северного Подмосковья, на берегу Волги.",
    priceTrans: [
      { name: "Robinson R44", price: "От 89 600", candidate: "3" },
      { name: "Robinson R66", price: "От 130 500", candidate: "4" },
      { name: "Airbus H130", price: "От 164 500", candidate: "6" },
    ],
  },
  {
    id: 28,
    nameEng: "SERGIEV POSAD",
    name: "СЕРГИЕВ ПОСАД",
    time: "1:08",
    category: 3,
    image: Icon29,
    descEng:
      "Around the Golden Circle by helicopter! Everything is possible! Sergiev Posad is the pearl of the Golden Ring of Russia. The city is located only 70 km from Moscow and is a major tourist center. For centuries Sergiev Posad played an important spiritual role in the life of Russia, and especially during wartime. In 1337, the Monk Sergius of Radonezh founded a monastery that received the name Trinity-Sergius. In its vicinity, settlements appeared, which in 1782 were united into a city by the decree of Catherine the Great. The Trinity-Sergius Lavra is a cultural and artistic monument of world importance, included in the UNESCO cultural heritage list. For five centuries, an ensemble of more than fifty architectural structures has appeared on the territory of the Trinity-Sergius Lavra. It was here that Andrei Rublev painted his masterpiece - the Trinity icon. The Trinity Church contains the remains of the founder - the Monk Sergius of Radonezh. On the way to Sergiev Posad, you can feel like on a real safari - moose, wild boars and other wild animals are perfectly visible from a helicopter!",
    descMain:
      "По Золотому кольцу на вертолете! Все возможно! Сергиев Посад – жемчужина Золотого кольца России. Город расположен всего в 70 км от Москвы и является крупным туристическим центром. Сергиев Посад веками играл важную духовную роль в жизни России, и особенно в военное время. В 1337 году преподобный Сергий Радонежский основал монастырь, получивший название Троице-Сергиев. В его окрестностях появились поселения, которые в 1782 году указом Екатерины Великой были объединены в город. Троице-Сергиева лавра - памятник культуры и искусства мирового значения, занесённый в список культурного наследия ЮНЕСКО. За пять столетий на территории Троице-Сергиевой лавры появился ансамбль из более пятидесяти архитектурных сооружений. Именно здесь Андрей Рублёв написал свой шедевр — икону «Троица». В Троицкой церкви находится прах основателя – преподобного Сергия Радонежского. По пути в Сергиев Посад, Вы можете почувствовать себя на настоящем сафари - лоси, кабаны и другие дикие звери отлично видны с вертолета!",
    priceTrans: [
      { name: "Robinson R44", price: "От 67 600", candidate: "3" },
      { name: "Robinson R66", price: "От 97 400", candidate: "4" },
      { name: "Airbus H130", price: "От 128 300", candidate: "6" },
    ],
  },
  {
    id: 29,
    nameEng: "DMITROV / YAKHROMA",
    name: "ДМИТРОВ/ЯХРОМА",
    time: "1:08",
    category: 3,
    image: Icon30,
    descEng:
      "Sport starts with a helicopter! Park `Yakhroma` is located in a quiet and clean corner of the Moscow region, surrounded by picturesque slopes and forests, 46 km from Moscow along Dmitrovskoe highway. These are 300 hectares of parks, ponds and forests. The most spectacular of all `Yakhroma` looks from a helicopter. Sports park `Yakhroma` is year-round. Guests are offered a wide range of accommodation options. A huge sports and entertainment base for sports: skiing, snowboarding, ice skating, snowmobiling, hot air balloon rides, riding ATVs and off-road vehicles, trampoline, golf, badminton, tennis, football, etc. The park has the only one in Russia attraction `Tobogan` - you can ride a sleigh on a rail track with bends 850 m long at a speed of 60 km / h. And then you can relax and unwind in a Russian or Finnish bath.",
    descMain:
      "Спорт начинается с вертолета! Парк `Яхрома` расположен в тихом и чистом уголке Подмосковья, в окружении живописных склонов и лесов, в 46 км от Москвы по Дмитровскому шоссе. Это 300 га парков, прудов и леса. Зрелищнее всего «Яхрома» выглядит с вертолета. Спортивный парк `Яхрома` круглогодичный. Гостям предлагается широкий выбор вариантов размещения. Огромная спортивно-развлекательная база для занятий спортом: лыжи, сноуборд, катание на коньках, снегоходах, прогулки на воздушном шаре, катание на квадроциклах и внедорожниках, батут, гольф, бадминтон, теннис, футбол, и др. На территории парка работает единственный в России аттракцион `Тобоган` – вы можете прокатиться на санях по рельсовой трассе с виражами протяжностью 850 м со скоростью 60 км/час. А после можно отдохнуть и расслабиться в русской или финской бане.",
    priceTrans: [
      { name: "Robinson R44", price: "От 64 700", candidate: "3" },
      { name: "Robinson R66", price: "От 93 000", candidate: "4" },
      { name: "Airbus H130", price: "От 121 700", candidate: "6" },
    ],
  },
  {
    id: 30,
    nameEng: "MOZHAYSK",
    name: "МОЖАЙСК",
    time: "1:08",
    category: 4,
    image: Icon31,
    descEng:
      "Fly by helicopter to Mozhaisk and Borodino! It's trendy! Mozhaisk is located on a hilly area, has a rectangular grid of streets. The ancient part of the city is the Cathedral Mountain, on which the Kremlin was located; there remained a settlement, framed by the remains of ramparts. In its eastern part - the pseudo-Gothic St. Nicholas Cathedral of the 19th century with a multi-tiered bell tower. Near the Peter and Paul Church and the Church of Joachim and Anna. On the outskirts of Mozhaisk, on Brykina Gora, above the floodplain of the Moskva River, there is an ensemble of the Luzhetsky Monastery (founded in 1408). The five-domed brick cathedral of the Nativity of the Theotokos (1520s), the tent-roofed bell tower (1673-1692), the gateway church stand out. Near Mozhaisk, in the village of Borodino, there is the famous Borodino field, known to us from the battle between Russian and French troops during the Patriotic War of 1812. Agree, it is best to view its scale from a helicopter! The beauty of the village of Borodino is an elegant Christmas church built in the 17th century. On the left high bank of Protva in 1599, Boris Godunov built a small fortress Tsarev Borisov Gorodok.",
    descMain:
      "Летайте на вертолете в Можайск и Бородино! Это модно! Можайск расположен на холмистой местности, имеет прямоугольную сетку улиц. Древняя часть города - Соборная гора, на которой находился Кремль; осталось городище, обрамлённое остатками крепостных валов. В его восточной части – псевдоготический Никольский собор 19 века с многоярусной колокольней. Рядом Петропавловская церковь и церковь Иоакима и Анны. На окраине Можайска, на Брыкиной горе, над поймой реки Москва, стоит ансамбль Лужецкого монастыря (основан в 1408 году). Выделяется пятиглавый кирпичный собор Рождества Богородицы (1520-е гг.), шатровая колокольня (1673-1692), надвратная церковь. Близ Можайска, в селе Бородино, находится знаменитое Бородинское поле, известное нам по битве между русскими и французскими войсками во время Отечественной войны 1812. Согласитесь, окинуть его масштаб лучше всего с вертолета! Краса села Бородино - нарядная Рождественская церковь, построенная в 17 веке. На левом высоком берегу Протвы в 1599 году Борисом Годуновым была построена небольшая крепость Царёв Борисов Городок.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 31,
    nameEng: "Volokolamsk",
    name: "ВОЛОКОЛАМСК",
    time: "1:08",
    category: 4,
    image: Icon32,
    descEng:
      "Volokolamsk must be seen from a helicopter! After all, the panorama of this city is a beautiful sight! Volokolamsk is located in the Moscow region, 100 km north-west of Moscow. The most famous sights are the Volokolamsk Kremlin and the Resurrection Cathedral. The Kremlin is located on a high hill - you can see it from afar, but best of all, of course, from a helicopter. The Kremlin houses a white-stone cathedral of the XIV century. At 30 km along the highway towards Klin there is a large Joseph-Volotsky monastery - one of the centers of the Moscow region pilgrimage of the Moscow region, interesting for its architecture.",
    descMain:
      "Волоколамск необходимо увидеть с вертолета! Ведь панорама этого города – красивейшее зрелище! Волоколамск находится в Московской области в 100 км к северо-западу от Москвы. Самые известные достопримечательности: Волоколамский кремль и Воскресенский собор. Кремль расположен на высоком холме – его видно издалека, но лучше всего, кончено, с вертолета. В Кремле находится белокаменный собор XIV века. В 30 км по трассе в сторону Клина расположен крупный Иосифо-Волоцкий монастырь - один из центров подмосковного паломничества Московской области, интересный своей архитектурой.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 32,
    nameEng: "ISTRA",
    name: "ИСТРА",
    time: "1:08",
    category: 4,
    image: Icon33,
    descEng:
      "Most popular route! Istra is a city in the Moscow region, founded in 1781. The name of the city is of Baltic origin - the most probable meaning is `river`. The city is located on the Istra River, about 40 km from Moscow. The history of Istra is closely connected with the life of A.P. Chekhov, M. Yu. Lermontov, I.I. Levitan. Walks in Istra are the most popular! Indeed, in flight you will see the incredibly beautiful and famous New Jerusalem Monastery. It is surrounded by a powerful wall and looks fabulous at any time of the year. In winter, its domes are decorated with fluffy snow, and in summer, the sun shines brightly. Also on the way to Istra you can see the panorama of Pavlovskaya Sloboda - a village with a long history and the Church of the Annunciation of the Most Holy Theotokos, built 350 years ago.",
    descMain:
      "Самый популярный маршрут! Истра - город в Московской области, основанный в 1781 году. Название города балтийского происхождения - наиболее вероятное значение `река`. Город расположен на реке Истра приблизительно в 40 км от Москвы. История Истры тесно связана с жизнью А.П. Чехова, М.Ю. Лермонтова, И.И. Левитана. Прогулки в Истру – самые популярные! Ведь в полете Вы увидите невероятно красивый и знаменитый Ново-Иерусалимский монастырь. Он окружен мощной стеной и выглядит сказочно в любое время года. Зимой его купола украшает пушистый снег, а летом ярко освещает солнце. Также на пути в Истру видна панорама Павловской слободы - села с многолетней историей и Храмом Благовещения Пресвятой Богородицы, построенным 350 лет назад.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 33,
    nameEng: "CHEKHOV",
    name: "ЧЕХОВ",
    time: "1:08",
    category: 5,
    image: Icon52,
    descEng:
      "The city of Chekhov `grew` from the village of Lopasnya. The name Lopasnya, in turn, belonged to a very ancient Russian city, located many centuries ago on the same place or nearby - historians argue about this to this day. In time immemorial, on the Priokskaya plain, as a result of the melting of a powerful glacier descending from the north, the Oka and its tributaries Nara, Protva, Lopasnya and other rivers that have survived to this day arose. The first people of the Neolithic era inhabited these lands, from which stone tools, axes, knives, spears, remained. From the VIII century BC. e. and up to the 6th century A.D. e. Here, the settlements of patriarchal clan communities were formed, which already knew fire and even created primitive clay products. In the second half of the 10th century, Vyatichi began to settle along the banks of the Oka. The remains of these ancient Slavic villages were found in different places in the Lopasna region at the confluence of the Terebenka river into Lopasnya, near the village of Solnyshkov, in Spas-Temne, Stary Spas, Talezh.",
    descMain:
      "Город Чехов «вырос» из села Лопасня. Название же Лопасня, в свою очередь, принадлежало весьма древнему русскому городу, много веков назад размещавшемуся на этом же месте или поблизости — об этом по сей день спорят историки. В незапамятные времена на приокской равнине в результате таяния спустившегося с севера мощного ледника возникли Ока и её притоки Нара, Протва, Лопасня и другие речки, сохранившиеся до наших дней. Населяли эти земли первые люди эпохи неолита, от которых остались каменные орудия топоры, ножи, копья. С VIII века до н. э. и по VI век н. э. здесь складывались поселения патриархально-родовых общин, уже знавших огонь и даже создававших примитивные глиняные изделия. Во второй половине X века по берегам Оки стали селиться вятичи. Остатки этих древних славянских сёл находили в разных местах лопасненского края при впадении речки Теребенки в Лопасню, у села Солнышкова, в Спас-Темне, Старом Спасе, Талеже.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 34,
    nameEng: "Kolomna",
    name: "КОЛОМНА",
    time: "1:08",
    category: 5,
    image: Icon53,
    descEng:
      "Kolomna is one of the oldest and most beautiful cities in the Moscow region, a large industrial center and transport hub, a river port on the Oka. The first mention dates back to the 12th century. The city has partially preserved a rare monument of ancient Russian defensive architecture - the Kolomna Kremlin, which has Italian features. Feel yourself in Italy, it's so romantic! Especially by helicopter!",
    descMain:
      "Коломна — один из древнейших и красивейших городов Подмосковья, крупный промышленный центр и транспортный узел, речной порт на Оке. Первое упоминание относится к 12 веку. В городе частично сохранился редкий памятник древнерусского оборонительного зодчества - Коломенский кремль, который имеет итальянские черты. Почувствуйте себя в Италии, ведь это так романтично! Особенно на вертолете!",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 35,
    nameEng: "Serpukhov",
    name: "СЕРПУХОВ",
    time: "1:08",
    category: 5,
    image: Icon54,
    descEng:
      "Serpukhov is a city in the Moscow region, located 99 km south of the capital. There are many sights in Serpukhov. For example, the Serpukhov History and Art Museum is a unique cultural monument. The ancient center of Serpukhov - Cathedral Mountain - is located at the confluence of the Serpeyka and Nara rivers. Fragments of the white-stone walls of the city Kremlin and the Trinity Cathedral, which now houses a branch of the Historical and Art Museum, have survived here.",
    descMain:
      "Серпухов – город Московской области, расположенный в 99 км к югу от столицы. В Серпухове много достопримечательностей. Например, Серпуховский историко-художественный музей – уникальный памятник культуры. Древний центр Серпухова – Соборная гора – находится при слиянии рек Серпейки и Нары. Здесь уцелели фрагменты белокаменных стен городского Кремля и Троицкий собор, в котором ныне располагается филиал Историко-художественного музея.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 36,
    nameEng: "MOUROM",
    name: "МУРОМ",
    time: "1:08",
    category: 6,
    image: Icon55,
    descEng:
      "Murom was first mentioned in the `Tale of Bygone Years` under the year 862 among the cities ruled by Prince Rurik after the Varangians were called. According to other dates, Slavic colonists appeared here not earlier than the second half of the 10th century.",
    descMain:
      "Муром впервые упомянут в «Повести временных лет» под 862 годом среди городов, подвластных князю Рюрику после призвания варягов. Согласно другим датировкам славянские колонисты появились здесь не ранее второй половины X века.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 37,
    nameEng: "NIZHNY NOVGOROD",
    name: "НИЖНИЙ НОВГОРОД",
    time: "1:08",
    category: 6,
    image: Icon56,
    descEng:
      "To the UNESCO World Heritage City by helicopter! Nizhny Novgorod is located in the Central European part of Russia at the confluence of two large rivers - the Volga and Oka. The Spit of the Oka and Volga is the geometric center of the Russian Plain. Nizhny Novgorod is the largest industrial, cultural and economic city, founded in 1221. There are more than 600 unique historical, architectural and cultural monuments in the city. It is included in the list of 100 cities in the world of great historical and cultural importance, according to UNESCO.",
    descMain:
      "В город всемирного наследия ЮНЕСКО на вертолете! Нижний Новгород расположен в Центральной Европейской части России на слиянии двух крупных рек – Волги и Оки. Стрелка Оки и Волги - геометрический центр Русской равнины. Нижний Новгород – это крупнейший промышленный, культурный и экономический город, основанный в 1221 году. В городе более 600 уникальных исторических, архитектурных и культурных памятников. Входит в список 100 городов мира с огромным историческим и культурным значением, по версии ЮНЕСКО.",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 38,
    nameEng: "VLADIMIR",
    name: "ВЛАДИМИР",
    time: "1:08",
    category: 6,
    image: Icon57,
    descEng:
      "Helicopter flight to the very heart of Russia! Vladimir is a member of the Golden Ring of Russia. This is an ancient city in which the formation of the Russian state took place. For some time Vladimir was the capital of Russia. Vladimir was founded by the Grand Duke Vladimir Krasnoe Solnyshko in 990. The Assumption Cathedral, the Dmitrievsky Cathedral, the Intercession on the Nerl, the Crystal Museum - all this is Vladimir by helicopter! A helicopter flight with children or with parents to Vladimir is a great opportunity to admire the tourist Mecca from a bird's eye view. It's better than any observation deck!",
    descMain:
      "Полет на вертолете в самое сердце России! Владимир входит в Золотое Кольцо России. Это древний город, в котором происходило формирование российского государства. Какое то время Владимир был столицей Руси. Владимир основал великий князь Владимир Красное Солнышко в 990 году. Успенский собор, Дмитриевский собор, Покрова на Нерли, Музей Хрусталя - все это Владимир на вертолете! Полет на вертолете с детьми или с родителями во Владимир – прекрасная возможность полюбоваться туристической Меккой с высоты птичьего полета. Это лучше любой смотровой площадки!",
    priceTrans: [
      { name: "Robinson R44", price: "От 116 000", candidate: "3" },
      { name: "Robinson R66", price: "От 170 200", candidate: "4" },
      { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
    ],
  },
  {
    id: 39,
    nameEng: "HUNTING BASE `BARSUKOVO`",
    name: "ОХОТНИЧЬЯ БАЗА `БАРСУКОВО`",
    time: "1:08",
    category: 7,
    image: Icon34,
    descEng:
      "Helicopter flight to the very heart of Russia! Vladimir is a member of the Golden Ring of Russia. This is an ancient city in which the formation of the Russian state took place. For some time Vladimir was the capital of Russia. Vladimir was founded by the Grand Duke Vladimir Krasnoe Solnyshko in 990. The Assumption Cathedral, the Dmitrievsky Cathedral, the Intercession on the Nerl, the Crystal Museum - all this is Vladimir by helicopter! A helicopter flight with children or with parents to Vladimir is a great opportunity to admire the tourist Mecca from a bird's eye view. It's better than any observation deck!",
    descMain:
      "Охота в охотничьих угодьях `Барсуково`. Такого разнообразия охоты и трофеев в средней полосе вам больше не предложит никто! Отличное место, а впрочем, как и саму охоту, турбаза «Барсуково» рада предложить современному охотнику. Вся охота организуется в охотничьих угодьях ОООиP «Верхневолжская», площадь которых составляет 21,1 тысяча гектар. Мы проводим охоты на медведя с вышек и лобазов, а так же на берлоге, на кабана с вышек, облавные охоты на лося и кабана. Также организована охота в весенний период на глухаря и тетерева. Осуществляется охота на зайца, лисицу, бобра, рысь, рябчика, вальдшнепа, селезня с подсадной, уток и куликов в разрешенный сезон охоты.",
    priceTrans: [
      { name: "Robinson R44", price: "От 214 300", candidate: "3" },
      { name: "Robinson R66", price: "От 318 100", candidate: "4" },
      { name: "Airbus H130", price: "От 425 300", candidate: "6" },
    ],
  },
  {
    id: 40,
    nameEng: "HUNTING CLUB `BEAR` (BREITOVO)",
    name: "ОХОТНИЧИЙ КЛУБ `МЕДВЕДЬ` (БРЕЙТОВО)",
    time: "1:08",
    category: 7,
    image: Icon35,
    descEng:
      "The Hunting Club `Bear` invites you to its own hunting grounds, located in the picturesque area of ​​the Breitovo village, 185 km north-west of Yaroslavl, near the border of the Tver region, where the Sit River flows into the famous Rybinsk reservoir. Nature has endowed these places with extraordinary beauty at any time of the year. And whether it is spring or summer hunting, hunting in autumn or winter hunting, you will always get a double pleasure from communicating with nature, forest and hunting. The hunting grounds of the `Bear` club are so vast and rich that everyone will find `their own` prey here - this is a hunt for capercaillie, black grouse, woodcock, goose, duck, wild boar from towers and corral, for elk and elk `for a roar` ... These places are famous for the passage of geese. Spring hunting, like summer hunting or hunting in autumn, is an unlimited shooting of permitted species of waterfowl. Especially for our guests, hunting for a goose, as well as duck hunting is carried out with the provision of dogs and accompanied by experienced huntsmen. If you prefer winter hunting, i.e. bear hunting, wild boar hunting or moose hunting, then beaters will always help you, and professional huntsmen will not only tell you how to hunt more efficiently, taking into account the peculiarities of the terrain, but also lure an elk if necessary. Hunting in our lands is distinguished by a variety of both birds and animals, as well as hunting methods. The `Bear` club can organize a hunting tour - a wild boar hunt or, for example, a duck hunt in a variety of variations. After the hunt, a three-storey club hotel Grand Adventure Absolute Resort 4 * with rooms ranging from `standard` to `presidential` and four two-storey townhouses, where there are all conditions for a decent rest, is waiting for you located on the very bank of the river. Each townhouse on the first floor has a spacious hall with a fireplace, and on the second there are two cozy bedrooms with balconies. Here you will find everything you need for the most comfortable rest after hunting - two swimming pools, a sauna, a Russian bath, a gym and a billiard room, at your service there is also a conference hall and a “hunting hall” with a fireplace. The restaurant will give you the feeling of sailing on a ship - huge windows over the entire wall, open a panorama of the harbor with moored luxury yachts, and magnificent European and Russian cuisine will complement your experience. Even the most sophisticated guest will be satisfied",
    descMain:
      "Охотничий клуб «Медведь» приглашает Вас на собственные охотничьи угодья, расположенные в живописном районе села Брейтово в 185 км к северо-западу от Ярославля близ границы Тверской области, где в знаменитое Рыбинское водохранилище впадает река Сить. Природа наделила эти места необычайной красотой в любое время года. И будь то весенняя или летняя охота, охота осенью или зимняя охота Вы всегда получите двойное удовольствие от общения с природой, лесом и охоты. Охотничьи угодья клуба «Медведь» настолько обширны и богаты, что каждый найдет здесь «свою» добычу – это охота на глухаря, тетерева, вальдшнепа, гуся, утку, кабана с вышек и загоном, на лося и лося «на реву», на медведя. Эти места славятся пролетом гусей. Весенняя охота, как и летняя охота или охота осенью – это неограниченный отстрел водоплавающей дичи разрешенных видов. Специально для наших гостей охота на гуся, а также утиная охота проводится с предоставлением собак и в сопровождении опытных егерей. Если больше по душе зимняя охота, т.е. охота на медведя, охота на кабана или охота на лося, то тут Вам всегда помогут загонщики, а профессиональные егеря не только подскажут, как провести охоту более эффективно с учетом особенностей местности, но и подманят при необходимости лося. Охота в наших угодьях отличается разнообразием как птицы и зверя, так и способами охоты. Клуб «Медведь» может организовать охотничий тур – это охота на кабана или, например, охота на уток в самых разных вариациях. После охоты Вас ждет расположенный на самом берегу реки трехэтажный клубный отель Grand Adventure Absolute Resort 4* с номерами от «стандартного» до «президентского» и четыре двухэтажных таунхауса, где есть все условия для достойного отдыха. Каждый таунхаус на первом этаже имеет просторный холл с камином, а на втором – две уютные спальни с балконами. Здесь Вы найдете все необходимое для максимально комфортного отдыха после охоты – два бассейна, сауна, русская баня, тренажерный зал и бильярдная, к Вашим услугам также конференц-зал и «охотничий зал» с камином. Ресторан создаст Вам ощущение плавания на корабле – огромные окна во всю стену, открывают панораму на гавань с пришвартованными роскошными яхтами, а великолепная европейская и русская кухня дополнит Ваши ощущения. Даже самый искушенный гость останется довольным",
    priceTrans: [
      { name: "Robinson R44", price: "От 221 600", candidate: "3" },
      { name: "Robinson R66", price: "От 329 100 ", candidate: "4" },
      { name: "Airbus H130", price: "От 369 200", candidate: "6" },
    ],
  },
  {
    id: 41,
    nameEng: "HUNTING `NAZARECHE`",
    name: "ОХОТОХОЗЯЙСТВО `НАЗАРЕЧЬЕ`",
    time: "1:08",
    category: 7,
    image: Icon36,
    descEng:
      "HUNTING FARM `NAZARECHE` Offers you its services for the organization and conduct of hunting and fishing. Hunting grounds with an area of ​​27 thousand hectares are located on the banks of the Yauzskoye reservoir on the border of the Moscow and Smolensk regions, 180 km from Moscow along the Novorizhskoye highway. Hunting grounds with a total area of ​​27 thousand hectares with a large livestock of wild boar and elk. Aviary with an area of ​​55 hectares with the maintenance of sika deer. A unique opportunity to get a trophy of a white-tailed deer, imported from Canada, in the aviary of our hunting farm with an area of ​​240 hectares. Hunting for the current wood grouse and black grouse. Year-round sports pheasant and pigeon hunting. The clean Yauzskoye reservoir, rich in fish, will bring joy not only to fishermen, but also to all lovers of water sports. Picturesque shores, touching sunrises, colorful glowing sunsets will take their rightful place in your photo gallery.",
    descMain:
      "ОХОТНИЧЬЕ ХОЗЯЙСТВО «НАЗАРЕЧЬЕ» Предлагает Вам свои услуги по организации и проведению охоты и рыбалки. Охотничьи угодья площадью 27 тыс. га, расположены на берегу Яузского водохранилища на границе Московской и Смоленской области в 180км от Москвы по Новорижскому шоссе. Охотничьи угодья общей площадью 27 тысяч гектар с большим поголовьем кабана и лося в дикой природе.      Вольер площадью 55 гектар с содержанием оленя пятнистого. Уникальная возможность добыть трофей оленя белохвостого, завезенного из Канады,в вольере нашего охотничьего хозяйства площадью 240 гектар. Охота на токующего глухаря и тетерева. Круглогодичная спортивная охота на фазана и голубя. Чистое Яузское водохранилище, богатое рыбой доставит радость не только рыбакам, но и всем любителям водных видов развлечений. Живописные берега, трогательные рассветы, красочные пылающие закаты займут достойное место в вашей фотогалерее.",
    priceTrans: [
      { name: "Robinson R44", price: "От 101 300 ", candidate: "3" },
      { name: "Robinson R66", price: "От 148 200", candidate: "4" },
      { name: "Airbus H130", price: "От 200 900", candidate: "6" },
    ],
  },
  {
    id: 42,
    nameEng: "RECREATION CENTER Uzmen",
    name: "БАЗА ОТДЫХА `УЗМЕНЬ`",
    time: "1:08",
    category: 7,
    image: Icon37,
    descEng:
      "The Glybinskoye hunting farm is located in the Firovsky district of the Tver region. The area of hunting grounds is 38,500 hectares. The recreation center Uzmen specializes in organizing and conducting group and individual hunting and fishing. Hunting for bear, wild boar, elk, fox, meadow bird and wading bird is available. A well-equipped hotel complex with a restaurant awaits hunters.",
    descMain:
      "Глыбинское охотничье хозяйство расположено в Фировском районе Тверской области. Площадь охотничьих угодий составляет 38 500 га. База отдыха Узмень специализируется на организации и проведении групповой и индивидуальной охоты и рыбалки. Доступна охота на медведя, кабана, лося, лису, луговую и болотную птицу. Охотников ждет прекрасно оснащенный гостиничный комплекс с рестораном.",
    priceTrans: [
      { name: "Robinson R44", price: "От 196 700", candidate: "3" },
      { name: "Robinson R66", price: "От 291 600", candidate: "4" },
      { name: "Airbus H130", price: "От 392 200", candidate: "6" },
    ],
  },
  {
    id: 43,
    nameEng: "HUNTING `LAKE`",
    name: "ОХОТОХОЗЯСТВО `ОЗЁРНОЕ`",
    time: "1:08",
    category: 7,
    image: Icon38,
    descEng:
      "The Ozernoye hunting farm is located in several districts of the Kaluga region at once: Borovsky, Iznoskovsky, Maloyaroslavetsky and Medynsky. The recreation center is surrounded by deciduous forests and reservoirs of the Oka basin. The impressive hunting area is 82 hectares. Hunting for all kinds of game is available: beavers, hares, wild boars, roe deer, elk, birds - woodcocks, black grouses, ducks. Wonderful Russian nature, silence, clean air. After the hunt, you will find comfortable rooms and cottages at the Tsentralnaya and Gireyevo bases, where you can taste your trophies over a joint evening meal.",
    descMain:
      "Охотхозяйство «Озерное» находится сразу в нескольких районах Калужской области:  Боровском, Износковском, Малоярославецком и Медынском. База отдыха окружена широколиственными лесами и водоёмами бассейна Оки. Внушительная площадь охотничьих угодий составляет 82 гектара. Доступна охота на всевозможную дичь: бобров, зайцев, кабанов, косуль, лосей, птиц - вальдшнепов, тетеревов, уток. Чудесная русская природа, тишина, чистый воздух. После охоты вас ждут комфортабельные номера и коттеджи на базе «Центральная» и «Гиреево», где вы сможете попробовать свои трофеи за совместной вечерней трапезой.",
    priceTrans: [
      { name: "Robinson R44", price: "От 99 900", candidate: "3" },
      { name: "Robinson R66", price: "От 146 000", candidate: "4" },
      { name: "Airbus H130", price: "От 94 200", candidate: "6" },
    ],
  },
  {
    id: 44,
    nameEng: "BASE `BROWN BEAR`",
    name: "БАЗА `БУРЫЙ МЕДВЕДЬ`",
    time: "1:08",
    category: 7,
    image: Icon39,
    descEng:
      "The recreation center is located in the southern Priilmenye, an ecologically clean place of the Novgorod region. The confluence of the Lovat, Pola and Vergot rivers, surrounded by large and small lakes, form a huge water surface rich in fish and game. This is a true waterfowl hunting paradise. A huge food base and more than a hundred rivers and lakes, connected by numerous channels, serve as a convenient place for nesting and raising offspring of birds. Hunting for birds: black grouse, woodcock, goose, duck. Large game lives in local forests: elk and wolf, bear and wild boar. The base `Brown Bear` has everything for a comfortable stay of fishermen and hunters: heated cottages with hot and cold water, equipped with kitchens and all the necessary household appliances, a hot Russian sauna on wood.",
    descMain:
      "База отдыха расположена в южном Приильменье, экологически чистом месте Новгородской области. Слияние рек Ловать, Пола и Верготь, окруженных большими и малыми озерами, образуют огромную водную гладь, богатую рыбой и дичью. Это настоящий рай для охоты на водоплавающую дичь. Огромная кормовая база и более сотни рек и озер, соединяющиеся многочисленными протоками, служат удобным местом для гнездования и выращивания потомства пернатых. Охота на пернатых: тетерева, вальдшнепа, гуся, утку.  В местных лесах обитает крупная дичь: лось и волк, медведь и кабан. На базе «Бурый медведь» есть все для комфортного проживания рыбаков и охотников: отапливаемые коттеджи с горячей и холодной водой, оборудованные кухнями и всей необходимой бытовой техникой, жаркая русская баня на дровах.",
    priceTrans: [
      { name: "Robinson R44", price: "От 324 300", candidate: "3" },
      { name: "Robinson R66", price: "От 483 300", candidate: "4" },
      { name: "Airbus H130", price: "От 722 300", candidate: "6" },
    ],
  },
  {
    id: 45,
    nameEng: "FORDEWIND ",
    name: "FORDEWIND ",
    time: "1:08",
    category: 8,
    image: Icon40,
    descEng:
      "The FordeWind Hotel and Yacht Club is located in a picturesque corner of the Moscow Region, 100 km from the Moscow Ring Road along the Dmitrovskoe Highway, in the area of ​​the city of Dubna, next to the Volga River, the Moscow and Ivankovskoe reservoir. Ideal for country holidays with family or friends, corporate events or various celebrations, as well as for recreation on the water. And, of course, for a helicopter flight! The hotel and yacht club offer a comfortable hotel, a modern yacht club harbor (capable of accepting up to 24 sailing and motor boats up to 25 m long), a full range of services for servicing and injuring ships, etc. There is a helipad! Recommended!",
    descMain:
      "Отель и яхт-клуб «FordeWind» расположен в живописном уголке Подмосковья в 100 км от МКАД по Дмитровскому шоссе, в районе города Дубна, рядом – река Волга, канал им. Москвы и Иваньковское водохранилище. Идеально подходит для загородного отдыха в кругу семьи или друзей, проведения корпоративных мероприятий или различных торжеств, а также для отдыха на воде. И, конечно, для полета на вертолете! К услугам гостей отеля и яхт-клуба комфортабельная гостиница, современная гавань яхт-клуба (способна принять до 24 парусных и моторных судов длиной до 25 м), полный комплекс услуг по обслуживанию и ранению судов и др. Есть вертолетная площадка! Рекомендуем!",
    priceTrans: [
      { name: "Robinson R44", price: "От 95 500 ", candidate: "3" },
      { name: "Robinson R66", price: "От 139 300", candidate: "4" },
      { name: "Airbus H130", price: "От 187 700", candidate: "6" },
    ],
  },
  {
    id: 46,
    nameEng: "PIROGOVO`",
    name: "ПИРОГОВО",
    time: "1:08",
    category: 8,
    image: Icon41,
    descEng:
      "`Pirogovo` is a modern developed infrastructure, a large fleet, there are children's and adult sailing schools. The largest in Russia fleet of national class of yachts `eM-Ka` is based here.",
    descMain:
      "«Пирогово» - это современная развитая инфраструктура, многочисленный флот, действуют детская и взрослая парусные школы. Здесь базируется самый большой в России флот национального класса яхт «эМ-Ка».",
    priceTrans: [
      { name: "Robinson R44", price: "От 45 600", candidate: "3" },
      { name: "Robinson R66", price: "От 64 300", candidate: "4" },
      { name: "Airbus H130", price: "От 88 700", candidate: "6" },
    ],
  },
  {
    id: 47,
    nameEng: "BUREVESTNIK",
    name: "БУРЕВЕСТНИК`",
    time: "1:08",
    category: 8,
    image: Icon42,
    descEng:
      "The Burevestnik Yacht Club is one of the oldest yacht clubs in Russia, founded in 1953 in the bay of the Klyazminskoye Reservoir. The main advantages of the yacht club: first-class infrastructure for servicing a fleet of any size and purpose, warm storage in our own boathouses. The well-maintained harbors can accommodate up to 250 vessels over 100 feet in size with a draft of up to 4 meters. It has a full-fledged heliport, so this route is very convenient for helicopter flights.",
    descMain:
      "Яхт-клуб «Буревестник» – один из старейших яхт-клубов России, основан в 1953 году в заливе Клязьминского водохранилища. Главные достоинства яхт-клуба: первоклассная инфраструктура по обслуживанию флота любого размера и назначения, теплое хранение в собственных эллингах. Благоустроенные гавани позволяют принимать до 250 судов размером свыше 100 футов с осадкой до 4 метров Располагает полноценным вертодромом, поэтому этот маршрут очень удобен для полетов на вертолете.",
    priceTrans: [
      { name: "Robinson R44", price: "От 41 200", candidate: "3" },
      { name: "Robinson R66", price: "От 57 700", candidate: "4" },
      { name: "Airbus H130", price: "От 78 800", candidate: "6" },
    ],
  },
  {
    id: 48,
    nameEng: "PESTOVO GOLF CLUB",
    name: "ПЕСТОВО ГОЛЬФ КЛУБ",
    time: "1:08",
    category: 9,
    image: Icon43,
    descEng:
      "Pestovo is a club with a developed infrastructure, built in accordance with international standards. The highlight is the championship 18-hole course with a length of 6487 meters. In the process of designing the field, the features of the landscape were taken into account: open spaces interspersed with forests and the natural balance of nature was preserved. The field has a winding pattern: it starts in the forest zone, then goes to open places with picturesque lakes. There is a golf academy, high-level tournaments are regularly held.",
    descMain:
      "«Пестово» - клуб с развитой инфраструктурой, построенный в соответствии с международными стандартами. Изюминка - чемпионское 18-луночное поле протяженностью 6487 метров. В процессе проектирования поля были учтены особенности ландшафта: открытые пространства перемежаются с лесом и сохранен естественный природный баланс. Поле имеет извилистый рисунок: начинается в лесной зоне, затем выходит на открытые места с живописными озерами. Работает академия гольфа, регулярно проводятся турниры высокого уровня.",
    priceTrans: [
      { name: "Robinson R44", price: "От 52 900", candidate: "3" },
      { name: "Robinson R66", price: "От 75 300", candidate: "4" },
      { name: "Airbus H130", price: "От 105 100", candidate: "6" },
    ],
  },
  {
    id: 49,
    nameEng: "MOSCOW COUNTRY CLUB ",
    name: "MOSCOW COUNTRY CLUB (НАХАБИНО)",
    time: "1:08",
    category: 9,
    image: Icon44,
    descEng:
      "Great helicopter route for a family holiday! Moscow Country Club (Nakhabino) is a resort in the Moscow region. On the territory of the complex there are residences for long-term rent, a five-star hotel, a sports complex and an international golf course. A full range of services for entertainment and recreation.",
    descMain:
      "Великолепный вертолетный маршрут для семейного отдыха! Moscow Country Club (Нахабино) – курорт в Московской области. На территории комплекса расположены резиденции для долгосрочной аренды, пятизвездочный отель, спортивный комплекс и гольф-поле международного уровня. Весь спектр услуг для развлечений и отдыха.",
    priceTrans: [
      { name: "Robinson R44", price: "От 34 600", candidate: "3" },
      { name: "Robinson R66", price: "От 47 700", candidate: "4" },
      { name: "Airbus H130", price: "От 67 200", candidate: "6" },
    ],
  },
  {
    id: 50,
    nameEng: "TARGET GOLF AND POLO CLUB",
    name: "ЦЕЛЕЕВО ГОЛЬФ И ПОЛО КЛУБ",
    time: "1:08",
    category: 9,
    image: Icon45,
    descEng:
      "Fly by helicopter to the world of luxury and pleasure! Tseleevo Golf and Polo Club is a closed country club located 42 km from Moscow. This is the best golf course in Eastern Europe (18-hole golf course, which has the status of Jack Nicklaus Signature Design Golf Course), ski club and polo club.",
    descMain:
      "Летите на вертолете в мир роскоши и удовольствия! «Целеево Гольф и Поло Клуб» - закрытый загородный клуб, расположенный в 42 км от Москвы. Это лучшее в Восточной Европе гольф-поле (18-тилуночное гольф-поле, которое обладает статусом Jack Nicklaus Signature Design Golf Course), горнолыжный клуб и поло-клуб.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 51,
    nameEng: "RUSSIAN SEASONS - RESORT PERESVET",
    name: "РУССКИЕ СЕЗОНЫ - КУРОРТ ПЕРЕСВЕТ",
    time: "0:40",
    category: 10,
    image: Icon58,
    descEng:
      "Russian Seasons Resort Peresvet is a modern resort located in a unique, ecologically clean area of ​​the Moscow region and surrounded by a forest. The total area is 73 hectares and is rich in a varied, modern infrastructure. We are located 70 kilometers from Moscow along the Yaroslavl highway and 15 kilometers from Sergiev Posad, the center of Russian Orthodoxy. Russian Season Resort Peresvet is ideal for family vacations, sports and business events, conferences, weddings, team building and any other events. The resort is equipped with 209 rooms of various categories, and the territory surprises with its rich infrastructure: 2 restaurants with author's cuisine, a pub, a 4-lane bowling alley, billiards, a karaoke equipped with the latest technology, a wonderful SPA complex, 3 swimming pools, one of which is 25 meters in length, as well as an outdoor pool, heated all year round to 28 degrees. At your service, we also offer bath and SPA rooms with modern services for the restoration of beauty and health, massage rooms, a hammam, a sauna, a salt room, a fitness center, a gym, sports equipment rental, surfing on an artificial wave, an outdoor solarium, billiards, as well as its own cinema with 80 seats. Russian Seasons Resort Peresvet will pleasantly surprise you with the highest level of service and will delight even the most sophisticated guest.",
    descMain:
      "Русские Сезоны Курорт Пересвет – это современный Курорт, расположенный в уникальном, экологически чистом районе Московской области и окруженный лесным массивом. Общая площадь составляет 73 гектара и богата разнообразной, современной инфраструктурой. Мы находимся в 70 километрах от Москвы по Ярославскому шоссе и в 15 километрах от Сергиева Посада – центра русского православия. Русские Сезон Курорт Пересвет идеально подходит для семейного отдыха, проведения спортивных и деловых мероприятий, конференций, свадебных торжеств, тимбилдингов и любых других мероприятий. Курорт оснащен 209 номерами различных категорий, а территория удивляет своей богатой инфраструктурой: 2 ресторана с авторской кухней, паб, боулинг на 4 дорожки, бильярд, караоке, оснащенное по последнему слову техники, прекрасный SPA-комплекс, 3 бассейна, один из которых составляет 25 метров в длину, а также открытый бассейн, прогреваемый круглый год до 28 градусов. К вашим услугам мы также предлагаем банные и SPA-комнаты c современными услугами по восстановлению красоты и здоровья, массажные кабинеты, хамам, сауна, соляная комната, фитнес центр, тренажерный зал, прокат спортивного инвентаря, серфинг на искусственной волне, открытый солярий, бильярд, а также собственный кинотеатр на 80 мест. Русские Сезоны Курорт Пересвет приятно удивит Вас высочайшим уровнем сервиса и порадует даже самого искушенного гостя.",
    priceTrans: [
      { name: "Robinson R44", price: "От 74 550", candidate: "3" },
      { name: "Robinson R66", price: "От 97 985", candidate: "4" },
      { name: "Airbus H130", price: "От 137 800", candidate: "6" },
    ],
  },
  {
    id: 52,
    nameEng: "NAME `SPASSKOE`",
    name: "ИМЕНИЕ `СПАССКОЕ`",
    time: "0:35",
    category: 10,
    image: Icon46,
    descEng:
      "Where to relax near Moscow? So that it is beautiful, environmentally friendly and unusual. The new route `Estate Spasskoye` views are not inferior to the Tver reserves. Helicopter rides over the Bitsa river bed and over the Moscow Ring Road amaze the imagination with the diversity of the landscape in one location. A country resort with signature cuisine, horse rides, helicopter tours and spacious townhouses, ideal for families, weddings and corporate meetings",
    descMain:
      "Где отдохнуть недалеко от Москвы? Так, чтобы было красиво, экологично и необычно. Новый маршрут `Имение Спасское` виды не уступают Тверским заказникам. Вертолетные прогулки над руслом реки Битца и над МКАД - поражают воображение разнообразностью ландшафта в одной локации. Загородный курорт с авторской кухней, конными прогулками, вертолетными экскурсиями и просторными таунхаусами идеально подходит для семейного отдыха, проведения свадебных торжеств и корпоративных встреч",
    priceTrans: [
      { name: "Robinson R44", price: "От 53 760", candidate: "3" },
      { name: "Robinson R66", price: "От 70 380", candidate: "4" },
      { name: "Airbus H130", price: "От 103 190", candidate: "6" },
    ],
  },
  {
    id: 53,
    nameEng: "DOBROGRAD (AERODROME)",
    name: "ДОБРОГРАД (АЭРОДРОМ)",
    time: "1:45",
    category: 10,
    image: Icon47,
    descEng:
      "Park-hotel `Dobrograd` is a place where everything is done so that you and your loved ones can enjoy your vacation surrounded by picturesque Russian nature, away from the noise of the city and everyday worries. In addition, Dobrograd is an ideal place for any corporate events: business meetings, conferences, forums, teambuildings, government events and much more. All rooms and cottages of the park-hotel are equipped with the best developments of the leading manufacturer of products for healthy sleep - the Askona company. The use of professional sleep products in combination with high quality textiles and bedding accessories, as well as clean forest air will allow you to relax and unwind from the noise and stress of the big city.",
    descMain:
      "Парк-отель «Доброград» – место, где все сделано для того, чтобы Вы и Ваши близкие смогли насладиться отдыхом в окружении живописной русской природы, вдали от городского шума и ежедневных забот. Кроме этого, Доброград является идеальным местом для проведения любых корпоративных мероприятий: деловых встреч, конференций, форумов, тимбилдингов, государственных мероприятий и много другого. Весь номерной фонд и коттеджи парк-отеля укомплектованы лучшими разработками ведущего производителя товаров для здорового сна – компании Askona. Использование профессиональных товаров для сна в сочетании с высококачественным текстилем и спальными принадлежностями, а также с чистым лесным воздухом позволит Вам расслабиться и отдохнуть от шума и напряжения большого города.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 55,
    nameEng: "ECO HOTEL LEPOTA",
    name: "ЭКО-ОТЕЛЬ ЛЕПОТА",
    time: "1:45",
    category: 10,
    image: Icon48,
    descEng:
      "Countryside eco-hotel Lepota is located in the Moscow Region, 80 km from the Moscow Ring Road along Dmitrovskoye Shosse in a picturesque forest corner on the banks of the Dubna River. Comfortable rooms and cottages are made in Russian style from natural wood. Also in the hotel: SPA center, bath complex, restaurant and bar, outdoor sports grounds, conference hall, banquet hall. On the territory of 12 hectares adjacent to the hotel, there is a place for a fun barbecue party, and for a romantic picnic for two, a corporate party in nature, a family vacation in the Moscow region. The long coastline of the Dubna River is perfect for fishing.",
    descMain:
      "Загородный эко-отель «Лепота» расположен в Подмосковье, в 80 км от МКАД по Дмитровскому шоссе в живописном лесном уголке на берегу реки Дубна. Комфортные номера и коттеджи выполнены в русском стиле из натурального дерева. Также в отеле: СПА-центр, банный комплекс, ресторан и бар, открытые спортивные площадками, конференц-зал, банкетный холл. На прилегающей к отелю территории в 12 гектаров найдется место и для веселой барбекю-вечеринки, и для романтического пикника для двоих, корпоратива на природе, семейного отдыха в Подмосковье. Продолжительная береговая линия реки Дубна прекрасно подойдет для рыбалки.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 56,
    nameEng: "YACHONTS - TARUSA",
    name: "ЯХОНТЫ - ТАРУСА",
    time: "0:53",
    category: 10,
    image: Icon49,
    descEng:
      "Are you tired of the noisy metropolis with its hum, stress and eternal traffic jams? Do you want to take a break from everyday work, problems and worries? Do you want to plunge into the silence of nature, tranquility and birdsong? Park Hotel Yakhonty Tarusa is an ideal solution! Everything here breathes with calmness and tranquility. Yakhonty Tarusa is a country hotel located on the territory of the Tarusa nature reserve, the most ecologically clean area of ​​the Kaluga region and the Moscow region. Located 120 km from Moscow, on the border of the Moscow and Kaluga regions, the hotel has excellent transport accessibility and several options for leaving Moscow along the Kiev, Varshavsky, Simferopol and Kaluga highways. Comfortable accommodation conditions, 4 meals a day `buffet`, a high level of service, a wide range of additional services and leisure options for children and adults, as well as wide conference facilities make the Yakhonty Tarusa hotel an ideal place for family and corporate recreation. For younger guests, the hotel provides daily animation programs, master classes, a large games room, sports equipment rental, and that's not all. Our hotel is ideal for business and corporate meetings, as well as family celebrations. The hotel has all the conditions for various events, there are banquet halls, including open-air areas, conference halls and meeting rooms. For our guests, on the shore of a picturesque lake, there is a private sandy beach with sun loungers and umbrellas. The presence of a modern Aquacenter in the hotel provides an excellent opportunity for active recreation, and you can also get a lot of pleasure from procedures in the SPA center. The highlight of the hotel is the large heated pool, which will delight our guests in summer and winter. The hotel is surrounded by interesting and historical sites. You can visit the Sparrows Bird Park, the Museum of Marshal Zhukov, the Vysotsky and Vladychesky Monastery, the Svyato-Pafnutiev Monastery in Borovsk, the Tsvetaevs' house-museum, the Prioksko-Terrace Reserve of Bison and Bison, the Tsiolkovsky Cosmonautics Museum with a planetarium in Kaluga, Devil's Settlement , Koltsovsky caves and much more.",
    descMain:
      "Вы устали от шумного мегаполиса с его гулом, стрессами и вечными пробками? Хотите отдохнуть от трудовых будней, проблем и переживаний? Хотите окунуться в тишину природы, спокойствие и пение птиц? Парк-отель Яхонты Таруса – идеальное решение! Здесь все дышит спокойствием и умиротворением. Яхонты Таруса — загородный отель, находящийся на территории Тарусского заповедника, наиболее экологически чистого района Калужской области и Подмосковья. Находясь в 120 км от Москвы, на границе Московской и Калужской областей, отель имеет отличную транспортную доступность и несколько вариантов выезда из Москвы по Киевскому, Варшавскому, Симферопольскому и Калужскому скоростным шоссе. Комфортные условия размещения, 4-х разовое питание «шведский стол», высокий уровень сервиса, обширный выбор дополнительных услуг и вариантов проведения досуга для детей и взрослых, а также широкие конференц-возможности делают отель Яхонты Таруса идеальным местом для семейного и корпоративного отдыха. Для маленьких гостей в отеле предусмотрены ежедневные анимационные программы, мастер-классы, большая игровая комната, прокат спортивного инвентаря и это далеко не все. Наш отель идеально подходит для проведения деловых и корпоративных встреч, а также семейных праздников. На территории отеля созданы все условия для проведения различных мероприятий, имеются банкетные залы, включая площадки под открытым небом, конференц-залы и переговорные комнаты. Для наших гостей на берегу живописного озера оборудован собственный песчаный пляж с шезлонгами и зонтиками. Наличие современного Аквацентра в отеле дает отличную возможность для активного отдыха, также немало удовольствия можно получить от процедур в SPA-центре. Изюминкой отеля является большой подогреваемый бассейн, который доставит особое удовольствие нашим гостям и в летнее, и в зимнее время. Отель окружен интересными и историческими местами. Вы сможете посетить парк птиц «Воробьи», музей Маршала Жукова, Высоцкий и Владыческий монастырь, Свято-Пафнутьев монастырь в г. Боровск, дом-музей Цветаевых, Приокско-террасный заповедник бизонов и зубров, музей космонавтики Циолковского с планетарием в Калуге, Чертово городище, Кольцовские пещеры и многое другое.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 57,
    nameEng: "ROMANOV LES",
    name: "РОМАНОВ ЛЕС",
    time: "2:00",
    category: 10,
    image: Icon50,
    descEng:
      "Most romantic flight! Ecohotel `Romanov Les` provides a chance for a full-fledged suburban vacation from the usual hustle and bustle. Here, not far from Kostroma, in the shade of age-old trees, on the banks of the Volga, the weekend will last exactly as long as you want. In terms of the quality of services and comfort, the country hotel `Romanov Les` meets high European standards and at the same time is located only 340 kilometers from Moscow. The hotel is ideal for outdoor weddings or corporate events. For you boating, fishing, sightseeing tours and much more.",
    descMain:
      "Самый романтичный полет! Экоотель «Романов лес» предоставляет шанс на полноценный загородный отдых от привычной суеты. Здесь, недалеко от Костромы, в тени вековых деревьев, на берегу Волги, выходные продлятся ровно столько, сколько вы сами захотите. По качеству услуг и комфорту загородный отель «Романов лес» соответствует высоким европейским стандартам и в то же время находится всего в 340 километрах от Москвы. Отель идеально подходит для проведения свадьбы на природе или корпоративных мероприятий. Для Вас катание на лодках, рыбалка, экскурсионные прогулки и многое другое.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 58,
    nameEng: "PARK-HOTEL BUKHTA KOPRINO (RYBINSK)",
    name: "ПАРК-ОТЕЛЬ БУХТА КОПРИНО (РЫБИНСК)",
    time: "1:47",
    category: 10,
    image: Icon51,
    descEng:
      "Surprise everyone - fly by helicopter! Park-hotel `Bukhta Koprino` is located on the banks of the Rybinsk reservoir. The hotel is surrounded on all sides by a pine forest, thanks to which the air here is fresh and filled with the aroma of pine needles. In the hotel `Bay Koprino` you will forget about the hustle and bustle of city everyday life. To your attention a variety of services and entertainment, cozy cottages and rooms, delicious food, friendly staff and, of course, the beauty of the surrounding nature. The hotel is perfect for weddings, celebrations and corporate events. A unique atmosphere and an unforgettable weekend or family vacation, starting by helicopter.",
    descMain:
      "Удивите всех – прилетите на вертолете! Парк-отель `Бухта Коприно` расположен на берегу Рыбинского водохранилища. Отель со всех сторон окружает сосновый бор, благодаря этому воздух здесь свежий и наполнен ароматом хвои. В отеле `Бухта Коприно` Вы забудете о суете городских будней. Вашему вниманию разнообразие услуг и развлечений, уютные коттеджи и номера, вкусная еда, приветливый персонал и, конечно же, красота окружающей природы. Отель прекрасно подходит для проведения свадеб, праздников и корпоративных мероприятий. Неповторимая атмосфера и незабываемые выходные или отпуск с семьей, который начнется на вертолете.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 59,
    nameEng: "VELES (VLADIMIR)",
    name: "ВЕЛЕС (ВЛАДИМИР)",
    time: "1:36",
    category: 10,
    image: Icon59,
    descEng:
      "The flight to Veles guarantees positive emotions and unforgettable sensations. The club hotel is located 215 km from Moscow, 27 km from old Vladimir and 50 km from Suzdal. Flowering meadows, fresh air of a pine forest, clean reservoirs - all this is `Veles`. The hotel territory is 51 hectares of mixed forest. `Veles` was built in the style of Russian wooden architecture. During its construction, the felling of trees was minimized. Due to this, the peculiarities of the local climate have been preserved: in summer there is no sultry heat, and in winter it is much warmer. Here you can relax body and soul and feel like a part of nature. Magnificent pine forests, age-old trees protected by the state, healing, crystal clear air, crystal waters of the Klyazma River and Lake Zapolskoye.",
    descMain:
      "Полет в «Велес» гарантирует положительные эмоции и незабываемые ощущения. Клуб-отель расположен в 215 км от Москвы в 27 км от старинного Владимира и 50 км от Суздаля. Цветущие луга, свежий воздух соснового бора, чистые водоемы – все это «Велес». Территория отеля - 51 га смешанного леса. Построен «Велес» в стиле русского деревянного зодчества. При его строительстве была сведена к минимуму вырубка деревьев. За счет этого сохранились особенности местного климата: летом не бывает знойной жары, а зимой значительно теплее. Здесь можно отдохнуть душой и телом и почувствовать себя частью природы. Великолепные сосновые леса, охраняемые государством вековые деревья, целебный, кристально чистый воздух, хрустальные воды реки Клязьмы и озера Запольского.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 60,
    nameEng: "AZIMUT SUZDAL",
    name: "АЗИМУТ СУЗДАЛЬ",
    time: "1:32",
    category: 10,
    image: Icon60,
    descEng:
      "By helicopter around Suzdal! HELIOPARK Suzdal is a 5-minute walk from the Spaso-Evfimievsky Monastery and 3 km from the center of Suzdal. The hotel offers a Russian bath, billiards and karaoke. 85 bright rooms decorated in a rustic style with traditional wooden furniture. Each air-conditioned room includes a TV, refrigerator and a private bathroom with free toiletries and a hairdryer. There is a restaurant.",
    descMain:
      "На вертолете вокруг Суздаля! HELIOPARK Суздаль находится в 5 минутах ходьбы от Спасо-Евфимьевского монастыря и в 3 км от центра Суздаля. К услугам гостей отеля русская баня, бильярд и караоке. 85 светлых номеров, оформленных в загородном стиле и обставленных традиционной деревянной мебелью. В каждом номере кондиционер, телевизор, холодильник и собственная ванная комната с бесплатными туалетно-косметическими принадлежностями и феном. Работает ресторан.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 61,
    nameEng: "PARK DRAKINO (SERPUKHOV)",
    name: "ПАРК ДРАКИНО (СЕРПУХОВ)",
    time: "0:54",
    category: 10,
    image: Icon61,
    descEng:
      "The most youthful route! Park-hotel `Drakino` is a country resort located in a picturesque forest, not far from the ancient Russian cities of Serpukhov and Protvino. If you arrive here by helicopter with a company, we recommend staying in one of the comfortable cottages. You will have fun and interesting time and you will definitely not get bored! By the way, in 2005 the world championship in aerobatics was held on the territory of the park. Feel the adrenaline rush of the flight and you!",
    descMain:
      "Самый молодежный маршрут! Парк-отель «Дракино» - загородный курорт, расположенный в живописном лесу, недалеко от старинных русских городов Серпухов и Протвино. Если вы прилетите сюда на вертолете с компанией, то рекомендуем остановиться в одном из комфортабельных коттеджей. Вы весело и интересно проведете время и точно не будете скучать! Кстати, в 2005 году на территории парка проходил чемпионат мира по высшему пилотажу. Почувствуйте адреналин полета и Вы!",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 62,
    nameEng: "TSARGRAD (SERPUKHOV DISTRICT)",
    name: "ЦАРЬГРАД (СЕРПУХОВСКОЙ РАЙОН)",
    time: "0:59",
    category: 10,
    image: Icon62,
    descEng:
      "Unique route! Country Hotel Tsargrad is located on the banks of the Oka River near the Prioksko-Terrasny Nature Reserve. The peculiarity of the hotel is the stylization `a la rus` in architecture and interiors. All furniture and decorative elements are made by hand according to an individual order. The remoteness from the capital and the proximity of the forest of the nature reserve provide a special ecology. `Tsargrad` combines the atmosphere of Russian antiquity and an expensive resort - and all this against the backdrop of the magnificent nature near Moscow.",
    descMain:
      "Уникальный маршрут! Загородный отель «Царьград» расположен на берегу реки Оки вблизи от Приокско-Террасного заповедника. Особенность отеля - стилизации «а ля рус» в архитектуре и интерьерах. Вся мебель и декоративные элементы оформления сделаны вручную по индивидуальному заказу. Удаленность от столицы и близость лесного массива природного заповедника обеспечивают особую экологию. «Царьград» сочетает атмосферу русской старины и дорогого курорта - и все это на фоне великолепной подмосковной природы.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 63,
    nameEng: "HELIOPARK LESNOY",
    name: "HELIOPARK LESNOY",
    time: "0:25",
    category: 10,
    image: Icon63,
    descEng:
      "Enjoy the flight! Heliopark Lesnoy is located in a picturesque area with a relict forest, 37 km from Moscow. And you will definitely be satisfied with a helicopter ride here. It offers a spa area with an indoor swimming pool and sauna. The hotel has 137 rooms, with modern furniture, TV, private bathroom with shower, hairdryer and free toiletries. The Heliopark Lesnoy restaurants serve European and Oriental cuisine. Guests can play billiards and rent ski equipment, skates and ATVs.",
    descMain:
      "Получите удовольствие от полета! Отель Heliopark Lesnoy расположен в живописном районе с реликтовым лесом в 37 км от Москвы. И Вы точно будете довольны, совершив сюда прогулку на вертолете. К услугам гостей спа-центр с крытым плавательным бассейном и сауной. В отеле 137 номеров, с современной мебелью, телевизором, собственной ванной комнатой с душем, феном и бесплатными туалетно-косметическими принадлежностями. В ресторанах Heliopark Lesnoy подаются блюда европейской и восточной кухни. Гости могут поиграть в бильярд, взять напрокат лыжное снаряжение, коньки и квадроциклы.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 64,
    nameEng: "FORESTA ",
    name: "FORESTA ",
    time: "0:44",
    category: 10,
    image: Icon64,
    descEng:
      "The best family and corporate itinerary! The Foresta Festival Park hotel near Moscow is located in one of the picturesque and ecologically clean places, 30 km from Moscow along the Simferopol highway. The hotel offers services for family and corporate recreation: comfortable rooms, cottages, restaurants, bars, indoor and outdoor pools, 5 types of saunas, a bath complex, a SPA complex, a paintball club 7.62`, a children's project `Academy of Magic`, rental sports equipment, fishing, horseback riding.",
    descMain:
      "Лучший семейный и корпоративный маршрут! Подмосковный отель Foresta Festival Park находится в одном из живописных и экологически чистых мест, в 30 км от Москвы по Симферопольскому шоссе. Отель предлагает услуги для семейного и корпоративного отдыха: комфортабельные номера, коттеджи, рестораны, бары, открытый и закрытый бассейны, 5 видов саун, банный комплекс, SPA— комплекс, пейнтбольный клуб «7,62», детский проект «Академия Волшебства», прокат спортивного инвентаря, рыбалку, конные прогулки.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 65,
    nameEng: "M’ISTRA’L HOTEL & SPA",
    name: "M’ISTRA’L HOTEL & SPA",
    time: "0:27",
    category: 10,
    image: Icon65,
    descEng:
      "Flight for everyone! The M'Istra'L Hotel & SPA on the Istra Reservoir is ideal for all categories of guests. Whether you are flying with your family, with your significant other, or with business partners, you will certainly find entertainment for every taste! M'Istra'L Hotel & SPA will allow you to relax away from the noise of the metropolis and routine problems. It offers classic rooms with large panoramic windows, luxurious comfortable apartments, gourmet and national cuisine restaurants, a well-equipped SPA center, a 25-meter swimming pool under a panoramic roof and much more.",
    descMain:
      "Полет для всех! Отель M’Istra’L Hotel & SPA на Истринском водохранилище идеален для всех категорий гостей. Летите ли вы с семьей, со своей второй половинкой или с деловыми партнерами  – Вы непременно найдете развлечение на любой вкус! M’Istra’L Hotel & SPA позволит Вам отдохнуть вдали от шума мегаполиса и рутинных проблем. К услугам гостей классические номера с большими панорамными окнами, роскошные комфортабельные апартаменты, рестораны высокой и национальной кухни, прекрасно оборудованный SPA-центр, 25-метровый бассейн под панорамной крышей и многое другое.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 66,
    nameEng: "HOTEL SENESHAL",
    name: "ОТЕЛЬ SENESHAL",
    time: "0:27",
    category: 10,
    image: Icon66,
    descEng:
      "An amazing flight into the world of luxury relaxation ... Hotel Seneshal. Refined style of interiors and home comfort, complete unity with nature and harmony with oneself. Here is the recipe for a great stay at the Seneshal Boutique Hotel. The design of the hotel was created with soul, using environmentally friendly materials and exquisite handcrafted furniture. Each guest will be able to enjoy beautiful views on the shores of Lake Senezh, relax on one of the many terraces, plunge into the world of relaxation and harmony with nature. The place, truly mesmerizing, will immerse you in a story filled with magic and amazing moments. Stop the time and experience the taste of luxury with Hotel Seneshal",
    descMain:
      "Удивительный полет в мир роскошного отдыха…Отель Seneshal. Утонченный стиль интерьеров и домашний уют, полное единение с природой и гармония с самим собой. Вот рецепт отличного отдыха Бутик – Отеля Seneshal. Дизайн отеля был создан с душой, с использованием экологически чистых материалов и изысканной мебели ручной работы. Каждый гость сможет насладиться прекрасными видами, на берегу озера Сенеж, отдохнуть на одной из многочисленных террас, окунуться в мир релаксации и гармонии с природой. Место, поистине завораживающее, погрузит в историю наполненную волшебством и удивительными моментами. Остановите время, ощутите вкус роскошного отдыха вместе с отелем Seneshal. Подробная информация об отеле: seneshal.com",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 67,
    nameEng: "LOVE (YAROSLAVL)",
    name: "ЛЮБИМ (ЯРОСЛАВЛЬ)",
    time: "1:45",
    category: 10,
    image: Icon67,
    descEng:
      "`Love` is a hotel complex in Yaroslavl. Conveniently located in the historical part of the city, 100 meters from the Kotorosl River embankment and a 5-minute walk from the city center. On its own well-groomed territory of the hotel with an area of ​​2.5 hectares, there are three residential buildings. `Lyubim` is suitable for family vacations and business trips. Conference and concert halls, audio and lighting equipment are at guests' disposal. A large restaurant complex for 450 people will allow you to hold banquets, weddings, anniversaries, graduations and other events. Round-the-clock security of the hotel territory guarantees a safe stay. On the territory there are two comfortable and spacious guarded parking lots, a helipad.",
    descMain:
      "«Любим» - гостиничный комплекс в Ярославле. Удобно расположен в исторической части города, в 100 метрах от набережной реки Которосль и в 5-ти минутах ходьбы от центра города. На собственной ухоженной территории гостинцы площадью в 2,5 гектара размещены три жилых корпуса. «Любим» подходит для семейного отдыха и бизнес-поездок. В распоряжении гостей залы для проведения конференций и концертов, аудио и световое оборудование. Большой ресторанный комплекс, рассчитанный на 450 персон, позволит провести банкеты, свадьбы, юбилеи, выпускные и другие мероприятия. Круглосуточная охрана территории отеля гарантирует безопасное пребывание. На территории есть две комфортные и просторные охраняемые парковки, вертолетная площадка.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
  {
    id: 68,
    nameEng: "MOSCOW COUNTRY CLUB",
    name: "MOSCOW COUNTRY CLUB",
    time: "0:10",
    category: 10,
    image: Icon68,
    descEng:
      "Great helicopter route for a family holiday! Moscow Country Club (Nakhabino) is a resort in the Moscow region. On the territory of the complex there are residences for long-term rent, a five-star hotel, a sports complex and an international golf course. A full range of services for entertainment and recreation.",
    descMain:
      "Великолепный вертолетный маршрут для семейного отдыха! Moscow Country Club (Нахабино) – курорт в Московской области. На территории комплекса расположены резиденции для долгосрочной аренды, пятизвездочный отель, спортивный комплекс и гольф-поле международного уровня. Весь спектр услуг для развлечений и отдыха.",
    priceTrans: [
      { name: "Robinson R44", price: "От 61 700", candidate: "3" },
      { name: "Robinson R66", price: "От 88 600", candidate: "4" },
      { name: "Airbus H130", price: "От 134 800", candidate: "6" },
    ],
  },
];
