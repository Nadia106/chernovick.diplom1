import { genres as genres } from "./genres.api";

// const genres = {
//     military: {
//         _id: "11rb765512bkk65441201",
//         name: "Военный",
//         color: "success"
//     },
//     detective: {
//         _id: "11rb765512bkk65441202",
//         name: "Детектив",
//         color: "warning"
//     },
//     drama: {
//         _id: "11rb765512bkk65441203",
//         name: "Драма",
//         color: "warning"
//     },
//     foreignClassics: {
//         _id: "11rb765512bkk65441204",
//         name: "Зарубежная классика",
//         color: "secondary"
//     },
//     historical: {
//         _id: "11rb765512bkk65441205",
//         name: "Исторический",
//         color: "info"
//     },
//     counterculture: {
//         _id: "11rb765512bkk65441206",
//         name: "Контркультура",
//         color: "danger"
//     },
//     romanceNovel: {
//         _id: "11rb765512bkk65441207",
//         name: "Любовный роман",
//         color: "info"
//     },
//     mystique: {
//         _id: "11rb765512bkk65441208",
//         name: "Мистика",
//         color: "secondary"
//     },
//     prose: {
//         _id: "11rb765512bkk65441209",
//         name: "Проза",
//         color: "secondary"
//     },
//     psychology: {
//         _id: "11rb765512bkk65441210",
//         name: "Психология",
//         color: "warning"
//     },
//     realism: {
//         _id: "11rb765512bkk65441211",
//         name: "Реализм",
//         color: "dark"
//     },
//     russianClassics: {
//         _id: "11rb765512bkk65441212",
//         name: "Русская классика",
//         color: "primary"
//     },
//     modernLiterature: {
//         _id: "11rb765512bkk65441213",
//         name: "Современная литература",
//         color: "success"
//     },
//     referenceLiterature: {
//         _id: "11rb765512bkk65441214",
//         name: "Справочная литература",
//         color: "info"
//     },
//     thriller: {
//         _id: "11rb765512bkk65441215",
//         name: "Триллер",
//         color: "danger"
//     },
//     horrors: {
//         _id: "11rb765512bkk65441216",
//         name: "Ужасы",
//         color: "dark"
//     },
//     fantastic: {
//         _id: "11rb765512bkk65441217",
//         name: "Фантастика",
//         color: "primary"
//     },
//     fantasy: {
//         _id: "11rb765512bkk65441218",
//         name: "Фэнтези",
//         color: "success"
//     }
// }

const books = [
  {
    _id: "22bk17ld4687ork971201",
    name: "Говори",
    author: "Лори Хальс Андерсон",
    genres: [genres.drama, genres.realism, genres.modernLiterature],
    img:"http://cv0.litres.ru/pub/c/cover/8707409.jpg",
    rate: 3.5,
    description:
      "На школьной вечеринке по поводу окончания летних каникул пятнадуатилетняя Мелинда вызвала полицейских, но сбежала до приезда копов, ничего никому не объяснив. Поэтому учебный год начался для нее ужасно. Друзья отвернулись от девушки. В школе никто с ней не общается. Она - изгой, пария. И постепенно сама Мелинда перестает разговаривать не только в школе, но и дома. Сможет ли девушка рассказать о том, что действительно произошло на вечеринке? Сможет ли она дать отпор тому, кто обидел ее и кого она считает чудовищем? Удастся ли Мелинде преодолеть свои страхи и начать говорить?",
    favourite: false,
    addedInBasket: false,
    price: 180,
    yearOfPublishing: 2014
  },
  {
    _id: "22bk17ld4687ork971202",
    name: "Темные тайны",
    author: "Гиллиан Флинн",
    genres: [genres.detective, genres.thriller],
    img:"https://cdn1.ozone.ru/s3/multimedia-l/6245058825.jpg",
    rate: 4.1,
    description:
      "Двадцать четыре года прошло с тех пор, когда чудовищное преступление потрясло весь Канзас: в маленьком городке пятнадцатилетний подросток зверски убил собственную семью. Тогда чудом уцелела лишь семилетняя Либби, но случившаяся трагедия наложила неизгладимый отпечаток на ее дальнейшую жизнь. Юноша отбывает пожизненное заключение, но он так и не признался в содеянном. Либби, когда-то ставшая главным свидетелем обвинения, после столь долгих лет наконец-то решает встретиться с братом. В прошлое возвращаться страшно, тем более что за его завесой скрываются зловещие тайны…",
    favourite: false,
    addedInBasket: false,
    price: 320,
    yearOfPublishing: 2017
  },
  {
    _id: "22bk17ld4687ork971203",
    name: "Исчезнувшая",
    author: "Гиллиан Флинн",
    genres: [genres.detective, genres.thriller],
    img: "https://www.bookvoed.ru/files/1836/34/86/95/8.jpeg",
    rate: 4.2,
    description:
      "Все было готово для празднования пятилетнего юбилея супружеской жизни, когда вдруг необъяснимо пропал один из виновников торжества. Остались следы борьбы в доме, кровь, которую явно пытались стереть, — и цепочка «ключей» в игре под названием «охота за сокровищами»; красивая, умная и невероятно изобретательная жена ежегодно устраивала ее для своего обожаемого мужа. И похоже, что эти «ключи» — размещенные ею тут и там странные записки и не менее странные безделушки — дают единственный шанс пролить свет на судьбу исчезнувшей. Вот только не придется ли «охотнику» в процессе поиска раскрыть миру и пару-тройку собственных малосимпатичных тайн?",
    favourite: false,
    addedInBasket: false,
    price: 320,
    yearOfPublishing: 2014
  },
  {
    _id: "22bk17ld4687ork971204",
    name: "Письма незнакомке",
    author: "Андре Моруа",
    genres: [genres.prose],
    img:"https://knigamir.com/upload/iblock/bb2/bb266b04ec9a361b9d660f4a7b8427ef.jpg",
    rate: 3.9,
    description:
      "Андре Моруа, классик французской литературы XX века, автор знаменитых романизированных биографий Дюма, Бальзака, Виктора Гюго и др., считается подлинным мастером психологической прозы. Его книга «Письма незнакомке» начинается словами: «Вы существуете, и вместе с тем вас нет». Как странно: Анна Каренина есть, Эмма Бовари и тысячи других литературных героинь есть, а незнакомки Моруа нет… А кто же есть? Есть красавица, мелькнувшая в театральном фойе, есть незримая молчаливая собеседница, готовая часами слушать рассуждения о жизни, любви, расставаниях и встречах. Есть писатель, проживший долгую жизнь и готовый делиться сокровенными мыслями. И вот возникает удивительное повествование, которое тут же разлетается на цитаты.",
    favourite: false,
    addedInBasket: false,
    price: 160,
    yearOfPublishing: 2015
  },
  {
    _id: "22bk17ld4687ork971205",
    name: "Мальчик в полосатой пижаме",
    author: "Джон Бойн",
    genres: [genres.military, genres.drama, genres.historical, genres.realism],
    img: "https://cv3.litres.ru/pub/c/elektronnaya-kniga/cover_200/5023331-dzhon-boyn-malchik-v-polosatoy-pizhame.jpg",
    rate: 3.9,
    description:
      "Девятилетнему Бруно ничего не известно об окончательном решении еврейского вопроса. Он не осведомлен о зверствах и небывалой жестокости применяемых немцами по отношению к населению Европы. Все что знает мальчик, так это то, что его вырвали из комфортабельного родного дома в Берлине в этот новый дом, в пустынной местности, где даже поиграть не с кем. Так продолжается до тех пор, пока он не встречает Шмуэля, мальчика, родившегося с Бруно в один день, но живущего, словно в параллельной реальности, за бесконечным забором из колючей проволоки, где все люди носят одинаковые полосатые пижамы.",
    favourite: false,
    addedInBasket: false,
    price: 150,
    yearOfPublishing: 2015
  },
  {
    _id: "22bk17ld4687ork971206",
    name: "Великий Гэтсби",
    author: "Френсис Скотт Фицджеральд",
    genres: [genres.foreignClassics, genres.prose],
    img: "https://newbookshop.ru/pictures/1015321042.jpg",
    rate: 4.0,
    description:
      "«Бурные» двадцатые годы прошлого столетия… Время шикарных вечеринок, «сухого закона» и «легких» денег… Эти «новые американцы» уверены, что расцвет будет вечным, что, достигнув вершин власти и богатства, они обретут и личное счастье… Таким был и Джей Гэтсби, ставший жертвой бессмысленной погони за пленительной мечтой об истинной и вечной любви, которой не суждено было сбыться…",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2013
  },
  {
    _id: "22bk17ld4687ork971207",
    name: "Багровый пик",
    author: "Нэнси Холдер",
    genres: [genres.detective, genres.mystique, genres.thriller],
    img: "https://cv5.litres.ru/pub/c/elektronnaya-kniga/cover/8215652-nensi-holder-bagrovyy-pik.jpg",
    rate: 4.2,
    description:
      "Призраки былых злодеяний оживают в новом шедевре несравненного мастера кошмаров Гильермо дель Торо! Старый дом, полный скрипов и сквозняков, призрачных обитателей и зловещих тайн. Здесь засохшая кровь навсегда въелась в пол, а ужас и ненависть поколений пропитали стены. Здесь невинная улыбка молодого английского лорда скрывает ядовитую ложь, а юной невесте вместо любви уготованы лишь предательство, мука и гибель…",
    favourite: false,
    addedInBasket: false,
    price: 240,
    yearOfPublishing: 2015
  },
  {
    _id: "22bk17ld4687ork971208",
    name: "Если я останусь",
    author: "Гейл Форман",
    genres: [genres.mystique, genres.modernLiterature],
    img: "https://pm1.narvii.com/6951/fb76c5200f90afdaa6c29963a85060315becdf7dr1-682-1280v2_hq.jpg",
    rate: 4.5,
    description:
      "Эту книгу сравнивают с романом Элис Сиболд «Милые кости», самым поразительным бестселлером начала XXI века по единодушному мнению критики. Хотя общая у них только канва: и здесь, и там душа юной девушки, расставшись с телом, наблюдает со стороны за жизнью близких людей. Но в случае с героиней книги Гейл Форман, семнадцатилетней Мией, дело обстоит много сложнее. Судьба поставила ее перед выбором – или вернуться к жизни, или навсегда уйти в мир иной, последовав за самыми любимыми для нее людьми.",
    favourite: false,
    addedInBasket: false,
    price: 180,
    yearOfPublishing: 2015
  },
  {
    _id: "22bk17ld4687ork971209",
    name: "Виноваты звезды",
    author: "Джон Грин",
    genres: [genres.drama, genres.romanceNovel],
    img: "https://img3.labirint.ru/rc/a5a406b56d264ac3778185ac6998c67b/220x340/books44/437861/cover.png?1613053517",
    rate: 4.3,
    description:
      "Подростки, страдающие от тяжелой болезни, не собираются сдаваться.Они по-прежнему остаются подростками – ядовитыми, неугомонными, взрывными, бунтующими, равно готовыми и к ненависти, и к любви.Хейзел и Огастус бросают вызов судьбе. Они влюблены друг в друга, их терзает не столько нависшая над ними тень смерти, сколько обычная ревность, злость и непонимание. Они – вместе. Сейчас – вместе. Но что их ждет впереди?",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2013
  },
  {
    _id: "22bk17ld4687ork971210",
    name: "Кэрри",
    author: "Стивен Кинг",
    genres: [genres.mystique, genres.horrors],
    img: "https://img5.lalafo.com/i/posters/original/f6/aa/b2/d2fdb87ec5b7cca161dc3526f2.jpeg",
    rate: 3.4,
    description:
      "«Кэрри». Роман, после публикации которого Стивен Кинг проснулся знаменитым. История затравленной одноклассниками, забитой матерью девушки из маленького городка Касл-Рок. Девушки, в которой дремлет чудовищный по силе дар телекинеза.",
    favourite: false,
    addedInBasket: false,
    price: 220,
    yearOfPublishing: 2016
  },
  {
    _id: "22bk17ld4687ork971211",
    name: "Дом голосов",
    author: "Донато Карризи",
    genres: [genres.detective],
    img: "https://img1.knigamir.com/248/24862f558d8b6dbb25c15090f172451c.jpg",
    rate: 3.8,
    description:
      "Пьетро Джербер – психолог, но не такой, как другие. Его специализация – гипноз, и все его пациенты – это дети, с которыми что-то случилось: они перенесли травму, стали свидетелями драматических событий или в их хрупкой памяти хранится важная информация, которая может помочь полиции или органам опеки в расследовании. Но вот с другого конца света, из Австралии, психологу звонит коллега и просит принять пациента. Пьетро недоумевает, зачем обращаться именно к нему, ведь Ханна Холл взрослая. Оказывается, молодой женщине не дает покоя воспоминание о некоем убийстве, будто бы совершенном ею в детстве. И чтобы понять, правда это или иллюзия, ей необходим лучший психолог Флоренции – Пьетро Джербер.",
    favourite: false,
    addedInBasket: false,
    price: 360,
    yearOfPublishing: 2021
  },
  {
    _id: "22bk17ld4687ork971212",
    name: "1984",
    author: "Джордж Оруэлл",
    genres: [genres.foreignClassics, genres.fantastic],
    img: "https://avatars.mds.yandex.net/get-zen_doc/1936066/pub_5ea1f07992123e17054f0ec7_5ea1f3c20673ee3893da4fe1/scale_1200",
    rate: 3.9,
    description:
      "Одна из самых знаменитых антиутопий XX века – роман «1984» английского писателя Джорджа Оруэлла (1903–1950) был написан в 1948 году и продолжает тему «преданной революции», раскрытую в «Скотном дворе». По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы. Тоталитаризм уничтожает в человеке все духовные потребности, мысли, чувства и сам разум, оставляя лишь постоянный страх и единственный выбор – между молчанием и смертью, и если Старший Брат смотрит на тебя и заявляет, что «дважды два – пять», значит, так и есть.",
    favourite: false,
    addedInBasket: false,
    price: 230,
    yearOfPublishing: 2018
  },
  {
    _id: "22bk17ld4687ork971213",
    name: "Повелитель мух",
    author: "Уильям Голдинг",
    genres: [genres.foreignClassics],
    img: "https://img4.labirint.ru/rc/cdbd2ca2c0feeb06c1f35676396ef05d/220x340/books43/420218/cover.png?1612956310",
    rate: 4.0,
    description:
      "Странная, страшная и бесконечно притягательная книга. История благовоспитанных мальчиков, внезапно оказавшихся на необитаемом острове.Философская притча о том, что может произойти с людьми, забывшими о любви и милосердии.Гротескная антиутопия, роман-предупреждение и, конечно, напоминание о хрупкости мира, в котором живем мы все.",
    favourite: false,
    addedInBasket: false,
    price: 170,
    yearOfPublishing: 2021
  },
  {
    _id: "22bk17ld4687ork971214",
    name: "Парень из Колорадо",
    author: "Стивен Кинг",
    genres: [genres.detective],
    img:"https://img3.labirint.ru/rc/cf9cfa31a79bde578fb3c5f3ef116d6f/220x340/books60/598159/cover.jpg?1565673983",
    rate: 3.8,
    description:
      "На маленьком острове близ побережья штата Мэн найден труп молодого мужчины, но при нем не обнаружено никаких документов. Кто он? Что привело его в уединенное место? И действительно ли, как утверждает полиция, причиной смерти стал несчастный случай?Два местных журналиста решают раскрыть тайну гибели незнакомца самостоятельно. Но чем дальше продвигается их расследование, тем больше возникает вопросов и тем меньше на них ответов…«Парень из Колорадо» – захватывающий роман, написанный в лучших традициях классического американского детектива. Стивен Кинг вновь доказывает – его «фирменный стиль» хорош для любого жанра.",
    favourite: false,
    addedInBasket: false,
    price: 160,
    yearOfPublishing: 2019
  },
  {
    _id: "22bk17ld4687ork971215",
    name: "Лавка дурных снов",
    author: "Стивен Кинг",
    genres: [genres.mystique, genres.horrors, genres.fantasy],
    img: "https://cdn.eksmo.ru/v2/ASE000000000845689/COVER/cover1.jpg",
    rate: 3.6,
    description:
      "Автор многочисленных романов, Стивен Кинг всегда считался еще и блестящим мастером малой прозы, ведь именно эти произведения принесли ему престижную премию О. Генри. Новый сборник рассказов Кинга «Лавка дурных снов» – книга уникальная. Мастер впервые предваряет каждое произведение удивительно откровенной историей его создания, приоткрывая «дверь» в свою творческую мастерскую. Захватывающие и пугающие, будоражащие воображение и предостерегающие, эти рассказы – маленькие шедевры, которые мог написать только великий Стивен Кинг. «Я создал их специально для тебя, – обращается писатель к своему читателю. – Можешь смотреть, можешь трогать, но будь осторожен. У самых лучших есть зубы».",
    favourite: false,
    addedInBasket: false,
    price: 250,
    yearOfPublishing: 2020
  },
  {
    _id: "22bk17ld4687ork971216",
    name: "Удушье",
    author: "Чак Паланик",
    genres: [genres.counterculture, genres.modernLiterature],
    img: "https://mywishboard.com/thumbs/wish/a/h/c/1020x0_irtfqvzccqfsewzh_jpg_faaf.jpg" ,
    rate: 3.9,
    description:
      "Книга о молодом мошеннике, который каждодневно разыгрывает в дорогих ресторанах приступы удушья – и зарабатывает на этом неплохие деньги… Книга о сексоголиках, алкоголиках и шмоткаголиках. О любви, дружбе и философии. О сомнительном «втором пришествии» – и несомненной «невыносимой легкости бытия» наших дней. Впрочем… сам Паланик говорит о ней: «Собираетесь прочесть? Зря!» Короче – читайте на свой риск и страх!",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2016
  },
  {
    _id: "22bk17ld4687ork971217",
    name: "Колыбельная",
    author: "Чак Паланик",
    genres: [genres.mystique, genres.thriller],
    img: "https://s4-goods.ozstatic.by/2000/657/104/10/10104657_0.jpg",
    rate: 3.9,
    description:
      "Это – Чак Паланик, какого вы не то что не знаете – но не можете даже вообразить. Вы полагаете, что ничего стильнее и болезненнее «Бойцовского клуба» написать невозможно? Тогда просто прочитайте «Колыбельную»! …СВСМ. Синдром внезапной смерти младенцев. Каждый год семь тысяч детишек грудного возраста умирают без всякой видимой причины – просто засыпают и больше не просыпаются… Синдром «смерти в колыбельке»? Или – СМЕРТЬ ПОД «КОЛЫБЕЛЬНУЮ»? Под колыбельную, которую, как говорят, «в некоторых древних культурах пели детям во время голода и засухи. Или когда племя так разрасталось, что уже не могло прокормиться на своей земле».Под колыбельную, которую пели изувеченным в битве и смертельно больным – всем, кому лучше было бы умереть. Тихо. Без боли. Без мучений… Это – «Колыбельная».",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2016
  },
  {
    _id: "22bk17ld4687ork971218",
    name: "Призраки",
    author: "Чак Паланик",
    genres: [genres.counterculture, genres.modernLiterature],
    img: "https://static.onlinetrade.ru/img/items/b/prizraki_palanik_chak__779547_2.jpg",
    rate: 3.9,
    description:
      "Невероятная, страшная и смешная история, которую каждый рассказывает по-своему. Двадцать три «человека искусства», которые приняли заманчивое предложение на три месяца отрешиться от мирской суеты и создать шедевры – а попали в ад! Полуразрушенный подземный готический театр, в котором нет ни электричества, ни отопления… Еда на исходе… Помощи ждать неоткуда… Выживает сильнейший!",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2016
  },
  {
    _id: "22bk17ld4687ork971219",
    name: "Лолита",
    author: "Владимир Набоков",
    genres: [genres.russianClassics],
    img: "https://i.pinimg.com/736x/57/85/7d/57857d0771f643faa9699e6588ab367b.jpg",
    rate: 3.6,
    description:
      "Сорокалетний литератор и рантье, перебравшись из Парижа в Америку, влюбляется в двенадцатилетнюю провинциальную школьницу, стремление обладать которой становится его губительной манией. Принесшая Владимиру Набокову (1899–1977) мировую известность, технически одна из наиболее совершенных его книг – дерзкая, глубокая, остроумная, пронзительная и живая, – «Лолита» (1955) неизменно делит читателей на две категории: восхищенных ценителей яркого искусства и всех прочих. В середине 60-х годов Набоков создал русскую версию своей любимой книги, внеся в нее различные дополнения и уточнения. Русское издание увидело свет в Нью-Йорке в 1967 году. Несмотря на запрет, продлившийся до 1989 года, «Лолита» получила в СССР широкое распространение и оказала значительное влияние на всю последующую русскую литературу.",
    favourite: false,
    addedInBasket: false,
    price: 220,
    yearOfPublishing: 2014
  },
  {
    _id: "22bk17ld4687ork971220",
    name: "Винный эксперт за 24 часа",
    author: "Дженсис Робинсон",
    genres: [genres.referenceLiterature],
    img: "https://main-cdn.sbermegamarket.ru/hlr-system/1630059626/100024752352b0.jpg",
    rate: 3.7,
    description:
      "Цель этой книги – передать вам самый необходимый запас знаний, чтобы вы ощутили себя винным экспертом за 24 часа.",
    favourite: false,
    addedInBasket: false,
    price: 210,
    yearOfPublishing: 2018
  },
  {
    _id: "22bk17ld4687ork971221",
    name: "Ревность",
    author: "Роберт Лихи",
    genres: [genres.psychology],
    img: "https://bookcity.uk/upload/iblock/213/2134bf77ebaac811e31217f3e54b5898.jpg",
    rate: 3.1,
    description:
      "Может ли ревность быть полезной для отношений? Мы знаем много историй, где один из партнеров изводит другого своей ревностью. И думаем о необходимости от нее избавляться. Но не все так просто, говорит нам психотерапевт с мировым именем Роберт Лихи. Ревность указывает, что отношения нам важны и ценны. Лихи предлагает нам более тонкое понимание феномена ревности. Из этой книги вы узнаете эволюционное происхождение ревности и зачем она нужна современному человеку. Мы часто чувствуем ревность, потому что боимся потерять людей, которые важны для нас больше всего. А еще ревность может не только повредить, но и помочь вашим отношениям, когда вы освоите эффективные навыки, чтобы держать ее в узде.",
    favourite: false,
    addedInBasket: false,
    price: 280,
    yearOfPublishing: 2021
  },
  {
    _id: "22bk17ld4687ork971222",
    name: "НЛП-технологии: Разговорный гипноз",
    author: "Анвар Бакиров",
    genres: [genres.psychology],
    img: "https://knigamir.com/upload/iblock/37e/37e1784d847e16ee22fa05b22c072551.jpg",
    rate: 4.0,
    description:
      "Разговорный гипноз – перспективное направление современной практической психологии, активно используемое в НЛП-технологиях. Он основан на простейших и легко осваиваемых словесных приемах, позволяющих воздействовать на собеседника и добиваться успеха в любых сферах деятельности: переговорах, продажах, рекламе, маркетинге, управлении персоналом, личных отношениях. В этой книге описаны серьезные и мощные техники, способные изменить как вашу жизнь, так и жизни тех, с кем вас сводит судьба. Вы научитесь получать от людей то, что раньше не могли; узнаете, как просто ввести человека в транс и внушить нужные вам идеи и побуждения; поймете, как влиять на окружающих даже на уровне их самочувствия.",
    favourite: false,
    addedInBasket: false,
    price: 340,
    yearOfPublishing: 2019
  },
  {
    _id: "22bk17ld4687ork971223",
    name: "Игры, в которые играют люди. Люди, которые играют в игры",
    author: "Эрик Берн",
    genres: [genres.psychology],
    img: "https://main-cdn.sbermegamarket.ru/hlr-system/1511856/100023056813b0.jpg",
    rate: 3.7,
    description:
      "Перед вами одна из основополагающих культовых книг по психологии человеческих взаимоотношений. Эрик Берн – создатель оригинального направления в психотерапии – «транзактного анализа», рассматривающего игру в качестве основы человеческих взаимоотношений. Система, разработанная автором, призвана избавить человека от влияния жизненных сценариев, программирующих его поведение, и научить его меньше «играть» в отношениях с собой и другими, чтобы обрести подлинную свободу и побудить к личностному росту.",
    favourite: false,
    addedInBasket: false,
    price: 430,
    yearOfPublishing: 2020
  },
  {
    _id: "22bk17ld4687ork971224",
    name: "Гарри Поттер и философский камень",
    author: "Джоан К. Роулинг",
    genres: [genres.fantasy],
    img: "https://www.mirf.ru/wp-content/uploads/2009/10/garri1.jpg",
    rate: 4.6,
    description:
      "Гарри Поттер ни разу даже не слышал о «Хогварце», но на дверной коврик дома номер четыре по Бирючинной улице начинают падать письма. Адрес написан зелеными чернилами на желтоватом пергаменте, а конверт скрепляет лиловая печать. Однако письма тут же конфисковывают тетя и дядя мальчика, имеющие на редкость скверный характер. Потом, на одиннадцатый день рождения Гарри, в дом врывается гигант по имени Рубеус Огрид с невероятными новостями: Гарри Поттер – волшебник, и его ждет место в школе колдовства и ведьминских искусств «Хогварц». Потрясающие приключения начинаются!",
    favourite: false,
    addedInBasket: false,
    price: 290,
    yearOfPublishing: 2001
  },
  {
    _id: "22bk17ld4687ork971225",
    name: "Сумерки",
    author: "Стефани Майер",
    genres: [genres.mystique, genres.fantasy],
    img: "https://s2-goods.ozstatic.by/2000/43/56/1/1056043_0.jpg",
    rate: 3.9,
    description:
      "История обычной старшеклассницы из провинциального городка Беллы Свон, покорившей сердца двух весьма необычных парней: выходца из аристократического вампирского клана Эдварда Каллена и бесстрашного индейца-оборотня Джейкоба Блэка. История нелегкого выбора, опасных приключений, кровавых событий, трагических недопониманий, драматических открытий и всепобеждающей любви…",
    favourite: false,
    addedInBasket: false,
    price: 280,
    yearOfPublishing: 2009
  },
  {
    _id: "22bk17ld4687ork971226",
    name: "Дивергент",
    author: "Вероника Рот",
    genres: [genres.fantastic],
    img: "https://s1-goods.ozstatic.by/2000/710/367/10/10367710_0.jpg",
    rate: 4.3,
    description:
      "В мире, где живет Беатрис Прайор, люди делятся на пять фракций, каждая из которых посвящена определенному качеству человеческой личности. Эти фракции – Правдолюбие, Альтруизм. Лихость, Товарищество и Эрудиция. Каждый год в определенный день подростки, достигшие 16 лет, имеют право выбрать свой путь. От того, что решит Беатрис, зависит, останется ли она со своей семьей или станет тем, кем ей хочется быть на самом деле. И девушка делает выбор, который удивляет всех, в том числе и ее саму. Ее жизнь меняется окончательно и бесповоротно. У нее появляются новые друзья, новые обязанности и новые чувства – любовь к немного нелюдимому и загадочному наставнику. Однако у Трис есть и собственная тайна, смертельно опасная для нее в том случае, если кто-то проведает о ней. И эта тайна вот-вот может быть раскрыта…",
    favourite: false,
    addedInBasket: false,
    price: 290,
    yearOfPublishing: 2012
  },
  {
    _id: "22bk17ld4687ork971227",
    name: "Голодные игры",
    author: "Сьюзен Коллинз",
    genres: [genres.fantastic],
    img: "https://newbookshop.ru/pictures/1012152797.jpg",
    rate: 4.4,
    description:
      "Эти парень и девушка знакомы с детства и еще могут полюбить друг друга, но им придется стать врагами… По жребию они должны участвовать в страшных Голодных играх, где выживает только один – сильнейший. Пока в жестоком квесте остаются хотя бы какие-то участники, Китнисс и Пит могут защищать друг друга и сражаться вместе. Но рано или поздно кому-то из них придется пожертвовать жизнью ради любимого… Таков закон Голодных игр. Закон, который не нарушался еще никогда!",
    favourite: false,
    addedInBasket: false,
    price: 290,
    yearOfPublishing: 2008
  },
  {
    _id: "22bk17ld4687ork971228",
    name: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    genres: [genres.mystique, genres.russianClassics],
    img: "https://book24.kz/upload/iblock/5ca/5ca837ac87995485ab04127e5207d06d.jpg",
    rate: 3.8,
    description:
      "«Мастер и Маргарита» – блистательный шедевр, созданный Михаилом Булгаковым, завораживающая мистическая дьяволиада, обнажающая вечные темы любви, борьбы добра со злом, смерти и бессмертия. Эта книга – на века, она не теряет своей привлекательности; прочтя первую фразу: «В час жаркого весеннего заката на Патриарших прудах появились двое граждан…», мы добровольно, неминуемо и безвозвратно погружаемся в мир Мастера, Маргариты, Пилата, Воланда, Азазелло с Коровьевым и других героев романа.",
    favourite: false,
    addedInBasket: false,
    price: 300,
    yearOfPublishing: 2011
  },
  {
    _id: "22bk17ld4687ork971229",
    name: "Ведьмак",
    author: "Анджей Сапковский",
    genres: [genres.fantasy],
    img: "https://i.pinimg.com/originals/66/28/f0/6628f099bd40ea40d2d0d2e5be8e4061.jpg",
    rate: 4.5,
    description:
      "Ведьмак – это мастер меча и мэтр волшебства, ведущий непрерывную войну с кровожадными монстрами, которые угрожают покою сказочной страны. «Ведьмак» – это мир на острие меча, ошеломляющее действие, незабываемые ситуации, великолепные боевые сцены",
    favourite: false,
    addedInBasket: false,
    price: 490,
    yearOfPublishing: 2013
  },
  {
    _id: "22bk17ld4687ork971230",
    name: "Капитанская дочка",
    author: "Александр Пушкин",
    genres: [genres.historical, genres.russianClassics],
    img: "https://ruslania.com/pictures/books_photos/45/451337/o.jpg",
    rate: 3.9,
    description:
      "Имя А.С. Пушкина сопровождает русского человека в течение всей его жизни – прелестной сказкой в детстве, непревзойденной любовной лирикой в юности… В любом возрасте мы неизменно обращаемся к богатейшему творческому наследию классика. «Школьная библиотека» предлагает вашему вниманию историческую повесть «Капитанская дочка», написанную А.С. Пушкиным на основе собственных исследований истории Пугачевского бунта. Эта повесть о любви и злодействе, о коварстве и великодушии, о предательстве и отваге. Слушая прекрасную пушкинскую прозу, вы вместе с главными героями, сами невольно станете участниками легендарных исторических событий.",
    favourite: false,
    addedInBasket: false,
    price: 200,
    yearOfPublishing: 2008
  }
];
const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(books);
    }, 1500);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(books.find((book) => book._id === id));
    });
  });

export default {
  fetchAll,
  getById
};
