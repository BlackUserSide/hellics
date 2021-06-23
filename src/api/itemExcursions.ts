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
// import Icon11 from "../image/item/Excurtion/11.jpg";
// import Icon12 from "../image/item/Excurtion/12.jpg";
// import Icon13 from "../image/item/Excurtion/13.jpeg";
// import Icon14 from "../image/item/Excurtion/14.jpg";
// import Icon15 from "../image/item/Excurtion/15.jpg";
// import Icon16 from "../image/item/Excurtion/16.jpg";
// import Icon17 from "../image/item/Excurtion/17.jpg";
// import Icon18 from "../image/item/Excurtion/18.jpg";
// import Icon19 from "../image/item/Excurtion/19.jpg";
// import Icon20 from "../image/item/Excurtion/20.jpg";
// import Icon21 from "../image/item/Excurtion/21.jpg";
// import Icon22 from "../image/item/Excurtion/22.jpg";
// import Icon23 from "../image/item/Excurtion/23.jpg";
// import Icon24 from "../image/item/Excurtion/24.jpg";
// import Icon25 from "../image/item/Excurtion/25.jpg";
// import Icon26 from "../image/item/Excurtion/26.jpg";
// import Icon27 from "../image/item/Excurtion/27.jpg";
// import Icon28 from "../image/item/Excurtion/28.jpg";
// import Icon29 from "../image/item/Excurtion/29.jpg";
// import Icon30 from "../image/item/Excurtion/30.jpg";
// import Icon31 from "../image/item/Excurtion/31.jpg";
// import Icon32 from "../image/item/Excurtion/32.jpg";
// import Icon33 from "../image/item/Excurtion/33.jpg";
// import Icon34 from "../image/item/Excurtion/34.jpg";
// import Icon35 from "../image/item/Excurtion/35.jpg";
// import Icon36 from "../image/item/Excurtion/36.jpg";
// import Icon37 from "../image/item/Excurtion/37.jpg";
// import Icon38 from "../image/item/Excurtion/38.jpg";
// import Icon39 from "../image/item/Excurtion/39.jpg";
// import Icon40 from "../image/item/Excurtion/40.jpg";
// import Icon41 from "../image/item/Excurtion/41.jpg";
// import Icon42 from "../image/item/Excurtion/42.jpg";
// import Icon43 from "../image/item/Excurtion/43.jpg";
// import Icon44 from "../image/item/Excurtion/44.jpg";
// import Icon45 from "../image/item/Excurtion/45.jpg";
// import Icon46 from "../image/item/Excurtion/46.jpg";
// import Icon47 from "../image/item/Excurtion/47.jpg";
// import Icon48 from "../image/item/Excurtion/48.jpg";
// import Icon49 from "../image/item/Excurtion/49.jpg";
// import Icon50 from "../image/item/Excurtion/50.jpg";
// import Icon51 from "../image/item/Excurtion/51.jpg";
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
  // {
  //   id: 4,
  //   nameEng: "SERGIEV POSAD",
  //   name: "СЕРГИЕВ ПОСАД",
  //   time: "1:00",
  //   category: 1,
  //   image: Icon5,
  //   descEng:
  //     "A flight to the ancient city of Sergiev Posad will definitely leave you a pleasant experience. After all, this is the only city in the Moscow region included in the Golden Ring of Russia! Sergiev Posad is the most beautiful city in the Moscow region, which is called the center of Orthodoxy in Russia for the abundance of operating cathedrals and churches. The flight takes place without landing, which will not prevent you from seeing the main sights of Sergiev Posad. The main one is the architectural ensemble of the Trinity-Sergius Lavra (Holy Trinity-Sergius Lavra). It is a cultural and artistic monument of world importance, included in the UNESCO cultural heritage list. For five centuries, an ensemble of more than fifty architectural structures has appeared on the territory of the Trinity-Sergius Lavra. It is here that Andrei Rublev painted his masterpiece - the icon `Trinity`. Flying over the forests of the Moscow region, you can feel like on a real safari - moose, wild boars and other wild animals are perfectly visible from a helicopter! A walk to Sergiev Posad with Heliport Moscow is a journey to the source of spiritual strength and the opportunity to see the panorama of the ancient city from a bird's eye view",
  //   descMain:
  //     "Полет в старинный город Сергиев Посад обязательно оставит у Вас приятные впечатления. Ведь, это единственный город Московской области, включенный в состав Золотого Кольца России! Сергиев Посад - красивейший город Подмосковья, который называют «центром православия России» за обилие действующих соборов и церквей.Полет совершается без посадки, что не помешает Вам увидеть основные достопримечательности Сергиева Посада. Главная из них – архитектурный ансамбль Троице-Сергиевой лавры (Свято-Троицкая Сергиева лавра). Это памятник культуры и искусства мирового значения, занесённый в список культурного наследия ЮНЕСКО. За пять столетий на территории Троице-Сергиевой лавры появился ансамбль из более пятидесяти архитектурных сооружений. Именно здесь Андрей Рублёв написал свой шедевр — икону «Троица».Пролетая над лесными массивами Подмосковья, Вы можете почувствовать себя на настоящем сафари - лоси, кабаны и другие дикие звери отлично видны с вертолета!Прогулка в Сергиев Посад вместе с Хелипорт Москва – это путешествие к источнику духовной силы и возможность увидеть панораму древнего города с высоты птичьего полета.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "53 260", candidate: "3" },
  //     { name: "Airbus H130", price: "111 820", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 5,
  //   nameEng: "MOSCOW OBZORNAYA (EVENING FLIGHT)",
  //   name: "МОСКВА ОБЗОРНАЯ (ВЕЧЕРНИЙ ПОЛЁТ)",
  //   time: "0:40",
  //   category: 1,
  //   image: Icon6,
  //   descEng:
  //     "Ideal for lovers and romantics! Evening 40-minute flight around the capital. You will be able to admire the views of the city at night, painted with millions of colored lights. Night Moscow is transforming beyond recognition. The beauty of the capital`s buildings and the light of the night lights from the height of the flight looks especially exciting and romantic. For everyone who has long wanted to feel the pulse of the city and become a little closer to the sky - a flight around Moscow at night will be the brightest impression of this summer.",
  //   descMain:
  //     "Идеальный вариант для влюблённых и романтиков!Вечерний 40-минутный полет вокруг Столицы. Вы сможете полюбоваться видами ночного города, раскрашенного миллионами разноцветных огней. Ночная Москва преображается до неузнаваемости. Красота столичных зданий и свет ночных огней с высоты полета выглядит особенно захватывающе и романтично. Для всех, кто давно хотел почувствовать пульс города и стать чуть ближе к небу - полет вокруг ночной Москвы станет самым ярким впечатлением этого лета.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "39 910", candidate: "3" },
  //     { name: "Airbus H130", price: "80 120", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 6,
  //   nameEng: "FLIGHT WITHOUT BORDERS (60 MINUTES)",
  //   name: "ПОЛЁТ БЕЗ ГРАНИЦ (60 МИНУТ)",
  //   time: "1:00",
  //   category: 1,
  //   image: Icon7,
  //   descEng:
  //     "Flight program WITHOUT BORDERS is a unique opportunity to fly by helicopter on almost any route. When choosing a direction, you are limited only by your imagination. Take an individual helicopter ride - this flight will be remembered for a long time! Give your loved ones, friends and business partners the comfort, convenience and endless possibilities of helicopter flights.",
  //   descMain:
  //     "Лётная программы БЕЗ ГРАНИЦ – это уникальная возможность совершить полет на вертолете практически по любому маршруту. При выборе направления Вы ограничены только Вашей фантазией. Совершите индивидуальную прогулку на вертолете – этот полет запомнится надолго!Подарите Вашим близким, друзьям и деловым партнерам комфорт, удобство и безграничные возможности перелетов на вертолете. ",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "53 260", candidate: "3" },
  //     { name: "Airbus H130", price: "111 820", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 7,
  //   nameEng: "SPECIAL PROGRAM: FEEL YOURSELF AS A PILOT!",
  //   name: "СПЕЦПРОГРАММА: ПОЧУВСТВУЙ СЕБЯ ПИЛОТОМ!",
  //   time: "0:45",
  //   category: 1,
  //   image: Icon8,
  //   descEng:
  //     "Since childhood, you are in love with the sky and dream of learning the secrets of piloting, to understand what principles a helicopter flies by? Perhaps you still dream of becoming a pilot, but do not know how to make your dream come true? We have prepared a unique offer for you! The FEEL AS A PILOT program includes a flight from the Heliport Moscow helicopter center to the base by a Robinson R44 / R66 helicopter, a sightseeing tour of the training center, where you will be told in detail how helicopter pilots are trained, visit classrooms, lecture halls, and hangars of the helicopter center , talk to real pilots-instructors and teachers, learn a lot of interesting things about the principles of flight and piloting a helicopter, the basics of aerodynamics, acquire basic knowledge about the structure of an aircraft.",
  //   descMain:
  //     "Вы с детства влюблены в небо и мечтаете узнать секреты пилотирования, понять по каким принципам летает вертолёт? Быть может, вы до сих пор мечтаете стать пилотом, но не знаете, как воплотить свою мечту в реальность? Мы подготовили для вас уникальное предложение! Программа ПОЧУВСТВУЙ СЕБЯ ПИЛОТОМ включает в себя перелёт из вертолетного центра Хелипорт Москва до базы   на вертолете Robinson R44/R66, обзорную экскурсию по территории учебного центра, на которой Вам  в деталях расскажут как осуществляется подготовка пилотов вертолетов,  посетите учебные классы, лектории, ангары вертолетного центра, пообщаетесь с настоящими пилотами-инструкторами и преподавателями, узнаете много интересного о принципах полёта и пилотирования вертолета, основах аэродинамики, приобретете базовые знания об устройстве воздушного судна. ",
  //   priceTrans: [{ name: "Robinson R44", price: "55 000", candidate: "3" }],
  // },
  // {
  //   id: 8,
  //   nameEng: "THREE RESERVOIRS (SEVEN BRIDGES)",
  //   name: "ТРИ ВОДОХРАНИЛИЩА (СЕМЬ МОСТОВ)",
  //   time: "0:50",
  //   category: 1,
  //   image: Icon9,
  //   descEng:
  //     'The most "Water" helicopter excursion that you can imagine in Moscow. During the flight, we will fly over Zhivopisnaya Bay, Rechnoy Vokzal and head for the water area of ​​the Moscow Canal, perhaps the most amazing channel in the world, because it is not "gravity", but energy: water from the Volga to the watershed section rises by pumps on five steps , at the ends of the steps there are sluices, of which there are a total of 11. The main shipping route of the canal ends at the Northern River Port and the Northern River Terminal in Moscow. In 50 minutes of flight, during the navigation period, the most curious sight can be observation of ships and water transport from a bird`s eye view.',
  //   descMain:
  //     "Самая <<Водная>> вертолетная экскурсия, которую только можно представить в Москве. Во время полета мы пролетим над Живописной бухтой, Речным вокзалом и взяв курс на акваторию Канала имени Москвы, пожалуй, самого удивительного канала в мире, потому что он не “самотечный”, а энергетический: вода из Волги в водораздельный участок поднимается насосами по пяти ступеням, на концах ступеней размещены шлюзы, которых в общей сложности 11.На участке экскурсионной трассы по каналу имени Москвы, мы пролетим над рядом водохранилищ - Пироговское, Учинское и Икшинское - 19,5 км длины канала составляет путь по водохранилищам. Основная судоходная трасса канала оканчивается у Северного речного порта и Северного речного вокзала Москвы. За 50 минут полета, в навигационный период, самым любопытным зрелищем может стать наблюдение за судами и водными видами транспорта, с высоты птичьего полета. ",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "45 260", candidate: "3" },
  //     { name: "Airbus H130", price: "95 080", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 9,
  //   nameEng: "ISTRA RESERVOIR",
  //   name: "ИСТРИНСКОЕ ВОДОХРАНИЛИЩЕ",
  //   time: "0:45",
  //   category: 1,
  //   image: Icon10,
  //   descEng:
  //     "Route: Heliport Moscow - New Jerusalem - Istra Reservoir - Istra - Heliport Moscow. The sightseeing flight to the New Jerusalem Monastery will never be the same again! Indeed, now the variety of location groups is even greater, which means that the feeling of a real helicopter trip reaches its maximum. From a bird`s eye view, we will see Russian Palestine, recreated in the image of the holy lands. Some buildings repeat the outlines of structures in Jerusalem, such as the Resurrection Cathedral 1656-1685, created in the image and likeness of the Church of the Holy Sepulcher. The monastery was founded on a hill called Zion. To the east of it was the Olive Hill with the stone Olive Chapel, in the north - Tabor Hill. And on the banks of the Istra river, renamed Jordan, the skete of the patriarch was built.",
  //   descMain:
  //     "Маршрут: Хелипорт Москва - Новый Иерусалим - Истринское водохранилище - Истра - Хелипорт Москва.Ознакомительный полет в Ново-Иерусалимский монастырь никогда уже не будет прежним! Ведь, теперь разнообразие локационных групп еще больше, а значит ощущение реального вертолетного путешествия достигает максимума. С высоты птичьего полета мы увидим, русскую Палестину, воссозданную по образу святых земель.  Некоторые здания повторяют очертания сооружений Иерусалима, как, например, Воскресенский собор (1656—1685), создан по образу и подобию Храма Гроба Господнего. Мужской монастырь был заложен на холме, прозванном Сион. К востоку от него располагался Елеонский холм с каменной Елеонской часовней, на севере — холм Фавор. А на берегу реки Истры, переименованной в Иордан, был построен скит патриарха.  ",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "40 710", candidate: "3" },
  //     { name: "Airbus H130", price: "85 720", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 10,
  //   name: "ПИРОГОВСКОЕ ВОДОХРАНИЛИЩЕ",
  //   time: "1:00",
  //   category: 1,
  //   image: Icon11,
  //   descMain:
  //     "За 60 минут полета Вы сможете полюбоваться Живописной бухтой, аэропортом Шереметьево, Останкинской башней, старейшим московским аэродромом Тушино, Речным вокзалом, а также водной гладью Пироговского водохранилища, являющегося частью Клязьминского водохранилища, акватория которого более 27 млн.куб.м.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "53 260", candidate: "3" },
  //     { name: "Airbus H130", price: "111 820", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 11,
  //   name: "ВОЛЕН / СОРОЧАНЫ / FRESH WIND",
  //   time: "0:33",
  //   category: 2,
  //   image: Icon12,
  //   descMain:
  //     "«Волен» - спортивный парк!Один из немногих в Подмосковье курортов, соответствующих мировым стандартам индустрии туризма. За годы своего существования и постоянного развития Парк заслужил репутацию популярного и модного места для зимнего и летнего отдыха.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "53 260", candidate: "3" },
  //     { name: "Airbus H130", price: "111 820", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 12,
  //   name: "СУЗДАЛЬ",
  //   time: "1:33",
  //   category: 2,
  //   image: Icon13,
  //   descMain:
  //     "В древний Суздаль на вертолете? Добро пожаловать!Суздаль - крупный туристический центр, привлекающий российских и иностранных туристов. Юрий Долгорукий, Александр Невский, Александр Суворов, Дмитрий Пожарский - эти и многие другие знакомые всем россиянам имена связаны с древней суздальской землей.В Суздале сохранилось свыше 200 памятников культуры и архитектуры XII-XIX вв. Оставшись в границах XVIII века, Суздаль наполнен непередаваемым колоритом старинного русского города, удивительной гармонией древнерусской архитектуры и окружающей среды. Главные архитектурные ансамбли города — Кремль, Покровский и Спасо-Евфимиев монастыри, а также церковь Бориса и Глеба в Кидекше внесены в Список Всемирного Наследия ЮНЕСКО.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "От 152 700", candidate: "3" },
  //     { name: "Robinson R66", price: "От 225 400", candidate: "4" },
  //     { name: "Airbus H130", price: "От 303 100", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 13,
  //   name: "КОНАКОВО РИВЕР КЛАБ",
  //   time: "0:52",
  //   category: 2,
  //   image: Icon14,
  //   descMain:
  //     "Полет на вертолете - отдых между небом и землей!«Конаково Ривер Клаб» – это живописный берег Волги (около 120 км от Москвы), богатые леса Тверской области, нетронутые острова Иваньковского водохранилища, великолепные грибные, рыбные и охотничьи места, красивейшие закаты…На территории комфортабельный отель и инфраструктура для активного отдыха на природе.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "От 92 500", candidate: "3" },
  //     { name: "Robinson R66", price: "От 134 900", candidate: "4" },
  //     { name: "Airbus H130", price: "От 184 300", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 14,
  //   name: "ЗАВИДОВО",
  //   time: "0:52",
  //   category: 2,
  //   image: Icon15,
  //   descMain:
  //     "В расположенном на живописном берегу реки Дойбица, впадающей в Волгу, в одном из самых чистых уголков природы на Земле, новом курорте Radisson Resort Zavidovo есть все, чтобы предложить Вам идеальный загородный отдых: 239 комфортабельных номеров с видом на водную гладь реки, спа-центр с бассейном и саунами, гольф клуб PGA National, несколько превосходных ресторанов, детский клуб.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "От 82 300", candidate: "3" },
  //     { name: "Robinson R66", price: "От 119 500", candidate: "4" },
  //     { name: "Airbus H130", price: "От 161 300", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 14,
  //   name: "ЛИСЬЯ НОРА / ГУРБАН",
  //   time: "0:30",
  //   category: 2,
  //   image: Icon16,
  //   descMain:
  //     "Невероятный полет-сюрприз! Лисья нора — уникальное место для незабываемого отдыха. Находится всего в 39 км от Москвы. Свежий воздух, живописный ландшафт, разнообразие возможностей и отличный сервис создают все условия для ярких впечатлений и комфортного досуга для всей семьи.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "От 60 300", candidate: "3" },
  //     { name: "Robinson R66", price: "От 86 400", candidate: "4" },
  //     { name: "Airbus H130", price: "От 118 400", candidate: "6" },
  //   ],
  // },
  // {
  //   id: 15,
  //   name: "ВАЗУЗА КАНТРИ КЛАБ",
  //   time: "1:08",
  //   category: 2,
  //   image: Icon17,
  //   descMain:
  //     "Путешествие в Русскую Швейцарию! «Vazuza Country Club» - новый отель премиум-класса на берегу Вазузского водохранилища, известного как одно из самых красивых и экологически чистых уголков Смоленской области. Место прекрасных диких пейзажей, свежего воздуха и отличной рыбалки.",
  //   priceTrans: [
  //     { name: "Robinson R44", price: "От 116 000", candidate: "3" },
  //     { name: "Robinson R66", price: "От 170 200", candidate: "4" },
  //     { name: "Airbus H130", price: "От XXXXX", candidate: "6" },
  //   ],
  // },
];
