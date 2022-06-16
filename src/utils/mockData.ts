import { ProductsType, QuestionType } from "../types/types";
export const mockCategory = [
  { id: "1", name: "Bakery" },
  { id: "2", name: "Fruit and vagetable" },
  { id: "3", name: "Milk and cheese" },
  { id: "4", name: "Drinks" },
  { id: "5", name: "Kitchen" },
  { id: "6", name: "Special nutrition" },
  { id: "7", name: "Baby" },
  { id: "8", name: "Pharmacy" },
];
export const mockBrands = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Samsung" },
  { id: "3", name: "Xiaomi" },
];
export const MockDataProducts: ProductsType[] = [
  {
    id: "1",
    brands: mockBrands[1],
    category: mockCategory[1],
    image:
      "https://mcstore.com.ua/image/cache/catalog/MNDW3-1649700688-600x600.jpg",
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "Iphone 12",
    name: "Iphone 12",
    price: "100",
  },
  {
    id: "2",
    brands: mockBrands[0],
    category: mockCategory[1],
    image:
      "https://miodessa.com/wp-content/uploads/2021/07/note10_pro_cn_3.jpg",
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "Xiomi redmi note5 dual sim 13",
    name: "Xiomi redmi note5",
    price: "1000",
  },
  {
    id: "3",
    brands: mockBrands[0],
    image:
      "https://www.notebookcheck-ru.com/uploads/tx_nbc2/ASUS_D509DA-BR128_04.jpg",
    category: mockCategory[1],
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "Iphone 13",
    name: "Iphone 13",
    price: "1000",
  },
  {
    id: "4",
    brands: mockBrands[0],
    image:
      "https://img.moyo.ua/img/gallery/4887/37/1113410_middle.jpg?1617358932",
    category: mockCategory[1],
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "MacBookMacBookMacBook",
    name: "MacBook",
    price: "1000",
  },
  {
    id: "3",
    brands: mockBrands[0],
    image:
      "https://www.notebookcheck-ru.com/uploads/tx_nbc2/ASUS_D509DA-BR128_04.jpg",
    category: mockCategory[1],
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "Iphone 13",
    name: "Iphone 13",
    price: "1000",
  },
  {
    id: "4",
    brands: mockBrands[0],
    image:
      "https://img.moyo.ua/img/gallery/4887/37/1113410_middle.jpg?1617358932",
    images: [
      "https://img.moyo.ua/img/gallery/4887/37/1113410_middle.jpg?1617358932",
      "https://files.foxtrot.com.ua/PhotoNew/img_0_58_18011_0.jpg",
      "https://www.notebookcheck-ru.com/uploads/tx_nbc2/air13teaser.jpg",
    ],
    category: mockCategory[1],
    descriptionInfo:
      "<ol><li><p>yrtyrtyrtyt</p></li><li><p>rtttt</p></li></ol>",
    descriptionName: "MacBookMacBookMacBook",
    name: "MacBook",
    price: "1000",
  },
];

export const mockComments: QuestionType[] = [
  {
    id: "1",
    question: "Добрий день. А чи підійде до UE32T4500?",
    date: "11.12.34",
    answers: [
      {
        id: "1",
        text: "Yes",
        date: "11.12.34",
      },
      {
        id: "2",
        text: "no",
        date: "11.12.34",
      },
    ],
  },
  {
    id: "2",
    question: "fgdgfgdfgdfgdgДобрий день. А чи підійде до UE32T4500?",
    date: "11.12.34",
    answers: [
      {
        id: "1",
        text: "Yes",
        date: "11.12.34",
      },
      {
        id: "2",
        text: "no",
        date: "11.12.34",
      },
    ],
  },
];
export const textDescription =
  "Оптимальний екран \n" +
  "Яким би сучасним не був смартфон, оцінюють його в першу чергу за тим, як саме виглядає зображенні на його екрані. У цьому плані iPhone 13 128GB Midnight MLPF3 демонструє найвищі результати. Діагональ 6.1 дюйма оптимальна для багатьох видів діяльності, від моніторингу соцмереж до монтажу відео. Дисплей Super Retina HDR OLED має роздільну здатність 2532 на 1170 пікселів (таким чином, щільність становить 460 пікселів на один дюйм). Крім того, у нього підвищено базову яскравість, тепер вона становить 800 КД/м2. А максимально вона може сягати 1200 КД/м2. Завдяки цьому у вас не виникне ситуація, коли доведеться болісно мружитися, розглядаючи, що саме відбувається на екрані. І це ще не все, адже завдяки вдосконаленому балансу білого True Tone смартфон чудово показує себе під час роботи в умовах зайвого яскравого освітлення. Спеціально посилене скло Ceramic Shield не залишає шансів випадковим падінням, тепер гаджет надійно захищено від них, адже міцність скла стала вищою в 4 рази. Витончена алюмінієва рамка корпусу, що обрамляє екран, створює додатковий захист, а також покращує контакт при триманні пристрою в руці.\n" +
  "\n" +
  "Новаторський процесор \n" +
  "У iPhone 13 128GB Midnight MLPF3 - процесор А15 Bionic, і це говорить саме за себе, адже це найдосконаліший і найшвидший процесор на сьогоднішній день. Крім того, він ще й енергоефективний, що дозволяє смартфону пропрацювати в стандартних умовах приблизно на дві з половиною години довше за свого попередника. У середньому процесор у півтора рази випереджає за потужністю свої аналоги. На практиці це відображається в швидкості роботи, при якій Ви практично ніколи не зіткнетеся з таким малоприємним процесом, як гальмування і тим більше зависання. Навіть якщо йдеться про те, що ви запустили супер вимогливу мобільну гру, а в паралельному вікні намагаєтеся змонтувати відео. Чотирьохядерний графічний процесор виводить обробку графіки на новий рівень. Завдяки йому, а також співпроцесору Neural Engine, який відповідає за машинне навчання та створення віртуальної реальності, стає можливою робота чудової двомодульної камери. Тепер нічний та портретний режим і в ній стали винятково вражаючими, а фотографії чіткими навіть за досить поганого освітлення.\n" +
  "\n" +
  "Чорне золото";
