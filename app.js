// Curriculum and Word database
const TOPICS_DATA = [
  {
    id: "seasons",
    title: "Времена года & Погода",
    titleEn: "Seasons & Weather",
    description: "Погода, времена года и природные явления.",
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM4 10.5H1v2h3v-2zm9-6.8V1h-2v3.7h2zm6.24.14l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM20 10.5h3v2h-3v-2zm-8-7c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13c-3.03 0-5.5-2.47-5.5-5.5S10.97 6 12.5 6s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm4.74 3.66l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM6.76 16.16l-1.42 1.42 1.79 1.8 1.41-1.41-1.78-1.81zM11 19.3v3.7h2v-3.7h-2z"/></svg>`,
    color: "#06b6d4",
    words: [
      { word: "Autumn", ipa: "[ˈɔːtəm]", translation: "Осень", emoji: "🍂", example: "In autumn, the leaves turn yellow and red.", exampleTranslation: "Осенью листья становятся желтыми и красными." },
      { word: "Winter", ipa: "[ˈwɪntər]", translation: "Зима", emoji: "❄️", example: "Winter is the coldest season in Russia.", exampleTranslation: "Зима — самое холодное время года в России." },
      { word: "Spring", ipa: "[sprɪŋ]", translation: "Весна", emoji: "🌱", example: "Flowers start to grow in spring.", exampleTranslation: "Весной начинают расти цветы." },
      { word: "Summer", ipa: "[ˈsʌmər]", translation: "Лето", emoji: "☀️", example: "I love swimming in the sea during summer.", exampleTranslation: "Я люблю плавать в море летом." },
      { word: "Weather", ipa: "[ˈweðər]", translation: "Погода", emoji: "🌤️", example: "What is the weather like today?", exampleTranslation: "Какая сегодня погода?" },
      { word: "Rainy", ipa: "[ˈreɪni]", translation: "Дождливый", emoji: "🌧️", example: "Take an umbrella on a rainy day.", exampleTranslation: "Возьми зонтик в дождливый день." },
      { word: "Season", ipa: "[ˈsiːzn]", translation: "Время года", emoji: "📅", example: "My favorite season is summer.", exampleTranslation: "Моё любимое время года — лето." },
      { word: "Sunny", ipa: "[ˈsʌni]", translation: "Солнечный", emoji: "☀️", example: "It is a sunny and warm morning.", exampleTranslation: "Сегодня солнечное и теплое утро." }
    ]
  },
  {
    id: "colors",
    title: "Цвета & Искусство",
    titleEn: "Colors & Art",
    description: "Разнообразная палитра и художественные термины.",
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 1.91 1.59 3.5 3.5 3.5.85 0 1.63-.31 2.25-.82.26-.22.61-.22.87 0C10.23 15.19 11.08 15.5 12 15.5c2.92 0 5.5-2.08 5.5-5S15 3 12 3zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-3C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    color: "#a855f7",
    words: [
      { word: "Turquoise", ipa: "[ˈtɜːrkwɔɪz]", translation: "Бирюзовый", emoji: "💎", example: "The Caribbean sea has beautiful turquoise water.", exampleTranslation: "В Карибском море красивая бирюзовая вода." },
      { word: "Crimson", ipa: "[ˈkrɪmzn]", translation: "Малиновый / Темно-красный", emoji: "🍒", example: "Her cheeks turned crimson when she felt embarrassed.", exampleTranslation: "Её щеки стали малиновыми, когда она смутилась." },
      { word: "Palette", ipa: "[ˈpælət]", translation: "Палитра", emoji: "🎨", example: "The artist mixed colors on his palette.", exampleTranslation: "Художник смешивал цвета на своей палитре." },
      { word: "Rainbow", ipa: "[ˈreɪnbəʊ]", translation: "Радуга", emoji: "🌈", example: "A colorful rainbow appeared in the sky after the rain.", exampleTranslation: "После дождя на небе появилась разноцветная радуга." },
      { word: "Charcoal", ipa: "[ˈtʃɑːrkəʊl]", translation: "Угольный / Темно-серый", emoji: "🖤", example: "He wore a stylish charcoal grey suit.", exampleTranslation: "Он носил стильный угольно-серый костюм." },
      { word: "Pastel", ipa: "[pæˈstel]", translation: "Пастельный", emoji: "🌸", example: "She painted her bedroom in soft pastel colors.", exampleTranslation: "Она покрасила свою спальню в нежные пастельные тона." },
      { word: "Shading", ipa: "[ˈʃeɪdɪŋ]", translation: "Штриховка / Растушевка", emoji: "✏️", example: "Good shading makes a drawing look 3D.", exampleTranslation: "Хорошая штриховка придает рисунку трехмерный вид." },
      { word: "Violet", ipa: "[ˈvaɪələt]", translation: "Фиолетовый", emoji: "🪻", example: "Violets are beautiful purple flowers.", exampleTranslation: "Фиалки — красивые фиолетовые цветы." }
    ]
  },
  {
    id: "family",
    title: "Семья & Отношения",
    titleEn: "Family & Relations",
    description: "Родственные связи и общение близких людей.",
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.48 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    color: "#ec4899",
    words: [
      { word: "Siblings", ipa: "[ˈsɪblɪŋz]", translation: "Родные братья и сестры", emoji: "👦👧", example: "Do you have any siblings or are you an only child?", exampleTranslation: "У тебя есть братья или сестры, или ты единственный ребенок?" },
      { word: "Relatives", ipa: "[ˈrelətɪvz]", translation: "Родственники", emoji: "👵👴", example: "All our relatives gather for Thanksgiving dinner.", exampleTranslation: "Все наши родственники собираются вместе на праздничный ужин." },
      { word: "Parents", ipa: "[ˈperənts]", translation: "Родители", emoji: "👩‍👦‍👦", example: "My parents always support my hobbies.", exampleTranslation: "Мои родители всегда поддерживают мои увлечения." },
      { word: "Generation", ipa: "[ˌdʒenəˈreɪʃn]", translation: "Поколение", emoji: "⏳", example: "Three generations lived in the same old house.", exampleTranslation: "Три поколения жили в одном старом доме." },
      { word: "Childhood", ipa: "[ˈtʃaɪldhʊd]", translation: "Детство", emoji: "🪁", example: "I spent my childhood in a small village.", exampleTranslation: "Я провел свое детство в маленькой деревне." },
      { word: "Friendship", ipa: "[ˈfrendʃɪp]", translation: "Дружба", emoji: "🤝", example: "Their friendship started in kindergarten.", exampleTranslation: "Их дружба началась в детском саду." },
      { word: "Support", ipa: "[səˈpɔːrt]", translation: "Поддержка / Поддерживать", emoji: "❤️", example: "Family support is very important in difficult times.", exampleTranslation: "Поддержка семьи очень важна в трудные времена." },
      { word: "Honesty", ipa: "[ˈɑːnəsti]", translation: "Честность", emoji: "😇", example: "Honesty is the foundation of a good relationship.", exampleTranslation: "Честность — это основа хороших отношений." }
    ]
  },
  {
    id: "objects",
    title: "Дом & Предметы",
    titleEn: "Everyday Objects",
    description: "Вещи вокруг нас, гаджеты и бытовые принадлежности.",
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
    color: "#10b981",
    words: [
      { word: "Headphones", ipa: "[ˈhedfəʊnz]", translation: "Наушники", emoji: "🎧", example: "I put on my headphones to listen to music.", exampleTranslation: "Я надел наушники, чтобы послушать музыку." },
      { word: "Backpack", ipa: "[ˈbækpæk]", translation: "Рюкзак", emoji: "🎒", example: "Put your textbooks inside your backpack.", exampleTranslation: "Положи учебники в свой рюкзак." },
      { word: "Mirror", ipa: "[ˈmɪrər]", translation: "Зеркало", emoji: "🪞", example: "She looked in the mirror to check her hair.", exampleTranslation: "Она посмотрела в зеркало, чтобы поправить волосы." },
      { word: "Device", ipa: "[dɪˈvaɪs]", translation: "Устройство / Девайс", emoji: "📱", example: "A smartphone is a very smart electronic device.", exampleTranslation: "Смартфон — это очень умное электронное устройство." },
      { word: "Wardrobe", ipa: "[ˈwɔːrdrəʊb]", translation: "Шкаф для одежды", emoji: "🧥", example: "He hung his winter coat in the wardrobe.", exampleTranslation: "Он повесил зимнее пальто в шкаф." },
      { word: "Key", ipa: "[kiː]", translation: "Ключ", emoji: "🔑", example: "I cannot find the key to open the front door.", exampleTranslation: "Я не могу найти ключ, чтобы открыть входную дверь." },
      { word: "Bookshelf", ipa: "[ˈbʊkʃelf]", translation: "Книжная полка", emoji: "📚", example: "There are many adventure novels on the bookshelf.", exampleTranslation: "На книжной полке много приключенческих романов." },
      { word: "Blanket", ipa: "[ˈblæŋkɪt]", translation: "Одеяло / Плед", emoji: "🛌", example: "It is cold, so I need a warm blanket.", exampleTranslation: "Холодно, поэтому мне нужно теплое одеяло." }
    ]
  },
  {
    id: "hobbies",
    title: "Увлечения & Свободное время",
    titleEn: "Hobbies & Leisure",
    description: "Хобби, спорт, игры и способы проводить выходные.",
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
    color: "#f59e0b",
    words: [
      { word: "Photography", ipa: "[fəˈtɑːɡrəfi]", translation: "Фотография", emoji: "📷", example: "Photography is the hobby of taking pictures.", exampleTranslation: "Фотография — это увлечение делать снимки." },
      { word: "Adventure", ipa: "[ədˈventʃər]", translation: "Приключение", emoji: "🗺️", example: "Reading books takes you on a great adventure.", exampleTranslation: "Чтение книг отправляет тебя в великое приключение." },
      { word: "Cycling", ipa: "[ˈsaɪklɪŋ]", translation: "Велосипедный спорт", emoji: "🚴", example: "We go cycling in the local park every Sunday.", exampleTranslation: "Каждое воскресенье мы катаемся на велосипедах в местном парке." },
      { word: "Painting", ipa: "[ˈpeɪntɪŋ]", translation: "Живопись / Рисование красками", emoji: "🎨", example: "Watercolor painting requires patience and skill.", exampleTranslation: "Рисование акварелью требует терпения и навыков." },
      { word: "Travel", ipa: "[ˈtrævl]", translation: "Путешествие / Путешествовать", emoji: "✈️", example: "They plan to travel across Europe this summer.", exampleTranslation: "Этим летом они планируют путешествовать по Европе." },
      { word: "Cooking", ipa: "[ˈkʊkɪŋ]", translation: "Готовить еду / Кулинария", emoji: "🍳", example: "Baking chocolate chip cookies is my favorite cooking activity.", exampleTranslation: "Выпечка печенья с шоколадной крошкой — моё любимое кулинарное занятие." },
      { word: "Gaming", ipa: "[ˈɡeɪmɪŋ]", translation: "Компьютерные игры / Гейминг", emoji: "🎮", example: "Online gaming is very popular among teenagers.", exampleTranslation: "Онлайн-игры очень популярны среди подростков." },
      { word: "Gardening", ipa: "[ˈɡɑːrdnɪŋ]", translation: "Садоводство", emoji: "🏡", example: "My grandmother enjoys gardening and growing roses.", exampleTranslation: "Моя бабушка наслаждается садоводством и выращиванием роз." }
    ]
  },
  {
    id: "school",
    title: "Школа & Наука",
    titleEn: "School & Science",
    description: "Учебные предметы, инструменты познания и наука.",
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13c-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.31-2.69 6-6 6z"/></svg>`,
    color: "#3b82f6",
    words: [
      { word: "Chemistry", ipa: "[ˈkemɪstri]", translation: "Химия", emoji: "🧪", example: "We do exciting experiments in chemistry class.", exampleTranslation: "На уроках химии мы делаем увлекательные эксперименты." },
      { word: "Biology", ipa: "[baɪˈɑːlədʒi]", translation: "Биология", emoji: "🦠", example: "Biology teaches us about living organisms and animals.", exampleTranslation: "Биология учит нас живым организмам и животным." },
      { word: "Textbook", ipa: "[ˈtekstbʊk]", translation: "Учебник", emoji: "📘", example: "Don't forget to bring your English textbook.", exampleTranslation: "Не забудь принести свой учебник по английскому языку." },
      { word: "Experiment", ipa: "[ɪkˈsperɪmənt]", translation: "Эксперимент / Опыт", emoji: "⚗️", example: "The science teacher showed us a cool experiment with volcano model.", exampleTranslation: "Учитель естествознания показал нам крутой эксперимент с моделью вулкана." },
      { word: "Calculator", ipa: "[ˈkælkjuleɪtər]", translation: "Калькулятор", emoji: "🧮", example: "Use a calculator to solve these complex math equations.", exampleTranslation: "Используйте калькулятор для решения этих сложных математических уравнений." },
      { word: "Geometry", ipa: "[dʒiˈɑːmətri]", translation: "Геометрия", emoji: "📐", example: "Geometry deals with shapes, lines, and angles.", exampleTranslation: "Геометрия имеет дело с фигурами, линиями и углами." },
      { word: "Knowledge", ipa: "[ˈnɑːlɪdʒ]", translation: "Знание / Знания", emoji: "🧠", example: "Reading books is a great way to gain knowledge.", exampleTranslation: "Чтение книг — отличный способ получить знания." },
      { word: "Notebook", ipa: "[ˈnəʊtbʊk]", translation: "Тетрадь / Блокнот", emoji: "📓", example: "Write down your homework in your notebook.", exampleTranslation: "Запиши домашнее задание в тетрадь." }
    ]
  }
];

// Predefined interactive Quizzes for each topic
const QUIZZES_DATA = {
  seasons: [
    {
      type: "choice",
      question: "Какое слово переводится как 'Время года'?",
      emoji: "📅",
      choices: ["Autumn", "Season", "Sunny", "Weather"],
      answer: "Season"
    },
    {
      type: "spelling",
      question: "Собери слово 'Осень':",
      emoji: "🍂",
      answer: "AUTUMN"
    },
    {
      type: "choice",
      question: "Complete the sentence: 'It is a ______ day. Let's go to the beach and swim.'",
      emoji: "☀️",
      choices: ["rainy", "winter", "sunny", "autumn"],
      answer: "sunny"
    },
    {
      type: "spelling",
      question: "Собери слово 'Погода':",
      emoji: "🌤️",
      answer: "WEATHER"
    },
    {
      type: "choice",
      question: "Which season is the coldest of all?",
      emoji: "❄️",
      choices: ["Summer", "Spring", "Autumn", "Winter"],
      answer: "Winter"
    },
    {
      type: "spelling",
      question: "Собери слово 'Весна':",
      emoji: "🌱",
      answer: "SPRING"
    },
    {
      type: "choice",
      question: "Как переводится слово 'Rainy'?",
      emoji: "🌧️",
      choices: ["Солнечный", "Теплый", "Дождливый", "Облачный"],
      answer: "Дождливый"
    },
    {
      type: "spelling",
      question: "Собери слово 'Лето':",
      emoji: "☀️",
      answer: "SUMMER"
    }
  ],
  colors: [
    {
      type: "choice",
      question: "Какой оттенок описывает слово 'Turquoise'?",
      emoji: "💎",
      choices: ["Малиновый", "Бирюзовый", "Угольно-серый", "Пастельный"],
      answer: "Бирюзовый"
    },
    {
      type: "spelling",
      question: "Собери слово 'Радуга':",
      emoji: "🌈",
      answer: "RAINBOW"
    },
    {
      type: "choice",
      question: "What is a 'palette' used for in art?",
      emoji: "🎨",
      choices: ["For sharpening pencils", "For mixing colors", "For framing paintings", "For cleaning brushes"],
      answer: "For mixing colors"
    },
    {
      type: "spelling",
      question: "Собери слово 'Фиолетовый':",
      emoji: "🪻",
      answer: "VIOLET"
    },
    {
      type: "choice",
      question: "Какой цвет на английском называется 'Crimson'?",
      emoji: "🍒",
      choices: ["Черный", "Малиновый / Темно-красный", "Темно-серый", "Салатовый"],
      answer: "Малиновый / Темно-красный"
    },
    {
      type: "spelling",
      question: "Собери слово 'Штриховка / Растушевка':",
      emoji: "✏️",
      answer: "SHADING"
    },
    {
      type: "choice",
      question: "Which word describes soft, light colors like baby blue or light pink?",
      emoji: "🌸",
      choices: ["Charcoal", "Pastel", "Crimson", "Violet"],
      answer: "Pastel"
    },
    {
      type: "spelling",
      question: "Собери слово 'Угольно-серый':",
      emoji: "🖤",
      answer: "CHARCOAL"
    }
  ],
  family: [
    {
      type: "choice",
      question: "Кто такие 'Siblings'?",
      emoji: "👦👧",
      choices: ["Двоюродные братья", "Родные братья и сестры", "Родители", "Родственники"],
      answer: "Родные братья и сестры"
    },
    {
      type: "spelling",
      question: "Собери слово 'Родители':",
      emoji: "👩‍👦‍👦",
      answer: "PARENTS"
    },
    {
      type: "choice",
      question: "What word means brothers, sisters, uncles, aunts, and grandparents altogether?",
      emoji: "👵👴",
      choices: ["Relatives", "Siblings", "Friends", "Parents"],
      answer: "Relatives"
    },
    {
      type: "spelling",
      question: "Собери слово 'Дружба':",
      emoji: "🤝",
      answer: "FRIENDSHIP"
    },
    {
      type: "choice",
      question: "Complete the sentence: 'Three ______ of this family live under one roof.'",
      emoji: "⏳",
      choices: ["childhoods", "generations", "friendships", "supports"],
      answer: "generations"
    },
    {
      type: "spelling",
      question: "Собери слово 'Поддержка':",
      emoji: "❤️",
      answer: "SUPPORT"
    },
    {
      type: "choice",
      question: "Как на английском будет слово 'Детство'?",
      emoji: "🪁",
      choices: ["Children", "Childhood", "Friends", "Honesty"],
      answer: "Childhood"
    },
    {
      type: "spelling",
      question: "Собери слово 'Честность':",
      emoji: "😇",
      answer: "HONESTY"
    }
  ],
  objects: [
    {
      type: "choice",
      question: "Как переводится слово 'Backpack'?",
      emoji: "🎒",
      choices: ["Зеркало", "Шкаф", "Рюкзак", "Наушники"],
      answer: "Рюкзак"
    },
    {
      type: "spelling",
      question: "Собери слово 'Наушники':",
      emoji: "🎧",
      answer: "HEADPHONES"
    },
    {
      type: "choice",
      question: "What everyday object is used to reflect your face when checking your hair?",
      emoji: "🪞",
      choices: ["Bookshelf", "Device", "Blanket", "Mirror"],
      answer: "Mirror"
    },
    {
      type: "spelling",
      question: "Собери слово 'Устройство / Девайс':",
      emoji: "📱",
      answer: "DEVICE"
    },
    {
      type: "choice",
      question: "Где люди вешают пальто и зимнюю одежду?",
      emoji: "🧥",
      choices: ["In the bookshelf", "In the wardrobe", "Under the blanket", "On the mirror"],
      answer: "In the wardrobe"
    },
    {
      type: "spelling",
      question: "Собери слово 'Ключ':",
      emoji: "🔑",
      answer: "KEY"
    },
    {
      type: "choice",
      question: "What is a warm cover for a bed called?",
      emoji: "🛌",
      choices: ["Blanket", "Wardrobe", "Bookshelf", "Device"],
      answer: "Blanket"
    },
    {
      type: "spelling",
      question: "Собери слово 'Книжная полка':",
      emoji: "📚",
      answer: "BOOKSHELF"
    }
  ],
  hobbies: [
    {
      type: "choice",
      question: "Как по-английски называется увлечение 'Фотография'?",
      emoji: "📷",
      choices: ["Painting", "Adventure", "Photography", "Cycling"],
      answer: "Photography"
    },
    {
      type: "spelling",
      question: "Собери слово 'Приключение':",
      emoji: "🗺️",
      answer: "ADVENTURE"
    },
    {
      type: "choice",
      question: "What sport is described by riding a bicycle?",
      emoji: "🚴",
      choices: ["Gaming", "Cycling", "Cooking", "Gardening"],
      answer: "Cycling"
    },
    {
      type: "spelling",
      question: "Собери слово 'Живопись / Рисование':",
      emoji: "🎨",
      answer: "PAINTING"
    },
    {
      type: "choice",
      question: "Complete the sentence: 'My favorite part of ______ is baking delicious chocolate cupcakes!'",
      emoji: "🍳",
      choices: ["gardening", "gaming", "cycling", "cooking"],
      answer: "cooking"
    },
    {
      type: "spelling",
      question: "Собери слово 'Путешествие':",
      emoji: "✈️",
      answer: "TRAVEL"
    },
    {
      type: "choice",
      question: "Which activity involves growing flowers and vegetables around the house?",
      emoji: "🏡",
      choices: ["Gardening", "Gaming", "Photography", "Painting"],
      answer: "Gardening"
    },
    {
      type: "spelling",
      question: "Собери слово 'Гейминг':",
      emoji: "🎮",
      answer: "GAMING"
    }
  ],
  school: [
    {
      type: "choice",
      question: "Какой учебный предмет переводится как 'Химия'?",
      emoji: "🧪",
      choices: ["Biology", "Geometry", "Chemistry", "Textbook"],
      answer: "Chemistry"
    },
    {
      type: "spelling",
      question: "Собери слово 'Биология':",
      emoji: "🦠",
      answer: "BIOLOGY"
    },
    {
      type: "choice",
      question: "What is the science book used by students for their lessons?",
      emoji: "📘",
      choices: ["Notebook", "Textbook", "Calculator", "Experiment"],
      answer: "Textbook"
    },
    {
      type: "spelling",
      question: "Собери слово 'Эксперимент':",
      emoji: "⚗️",
      answer: "EXPERIMENT"
    },
    {
      type: "choice",
      question: "What electronic tool helps you calculate big numbers quickly in math?",
      emoji: "🧮",
      choices: ["Geometry", "Calculator", "Notebook", "Experiment"],
      answer: "Calculator"
    },
    {
      type: "spelling",
      question: "Собери слово 'Геометрия':",
      emoji: "📐",
      answer: "GEOMETRY"
    },
    {
      type: "choice",
      question: "Как переводится слово 'Knowledge'?",
      emoji: "🧠",
      choices: ["Тетрадь", "Учебник", "Знание / Знания", "Калькулятор"],
      answer: "Знание / Знания"
    },
    {
      type: "spelling",
      question: "Собери слово 'Тетрадь':",
      emoji: "📓",
      answer: "NOTEBOOK"
    }
  ]
};

// Achievement data
const ACHIEVEMENTS = [
  { id: "first_step", title: "Первый шаг", desc: "Пройти свой первый тест", emoji: "🏁", condition: (stats) => stats.quizzesCompleted >= 1 },
  { id: "perfect_score", title: "Отличник", desc: "Сдать любой тест на 100% правильно", emoji: "🏆", condition: (stats) => stats.hasPerfectScore },
  { id: "xp_collector", title: "Собиратель опыта", desc: "Набрать суммарно 500 XP", emoji: "🔮", condition: (stats) => stats.totalXp >= 500 },
  { id: "streak_hero", title: "На волне", desc: "Поддерживать ударный режим 3 дня", emoji: "🔥", condition: (stats) => stats.streakDays >= 3 },
  { id: "seasons_champ", title: "Повелитель стихий", desc: "Пройти тест по Временам Года", emoji: "☀️", condition: (stats) => stats.completedTopics.includes("seasons") },
  { id: "colors_master", title: "Мастер цвета", desc: "Пройти тест по Цветам и Искусству", emoji: "🎨", condition: (stats) => stats.completedTopics.includes("colors") },
  { id: "family_expert", title: "Хранитель традиций", desc: "Пройти тест по Семье и Отношениям", emoji: "❤️", condition: (stats) => stats.completedTopics.includes("family") },
  { id: "objects_guru", title: "Знаток вещей", desc: "Пройти тест по Дому и Предметам", emoji: "🎒", condition: (stats) => stats.completedTopics.includes("objects") },
  { id: "hobbies_explorer", title: "Искатель приключений", desc: "Пройти тест по Увлечениям", emoji: "🗺️", condition: (stats) => stats.completedTopics.includes("hobbies") },
  { id: "science_genius", title: "Юный гений", desc: "Пройти тест по Школе и Науке", emoji: "🧪", condition: (stats) => stats.completedTopics.includes("school") }
];

// Sound Synthesizer Engine (Web Audio API)
const AudioEngine = {
  ctx: null,
  enabled: true,

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },

  playTone(freq, duration, type = "sine", delay = 0) {
    if (!this.enabled) return;
    this.init();
    
    // Resume context if suspended (common browser policy)
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        // Exponential decay
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.error("Audio playback error:", e);
      }
    }, delay * 1000);
  },

  playSuccess() {
    // Joyful chime C5 -> E5 -> G5 -> C6
    this.playTone(523.25, 0.15, "sine", 0);
    this.playTone(659.25, 0.15, "sine", 0.08);
    this.playTone(783.99, 0.15, "sine", 0.16);
    this.playTone(1046.50, 0.35, "sine", 0.24);
  },

  playError() {
    // Low buzzer slide down
    this.playTone(180, 0.4, "sawtooth", 0);
    this.playTone(150, 0.4, "sawtooth", 0.1);
  },

  playClick() {
    // Short pop sound
    this.playTone(600, 0.05, "sine");
  },

  playFlip() {
    // Swoosh sound
    this.playTone(300, 0.15, "triangle");
  },

  playWin() {
    // Triumph fanfare
    const notes = [523.25, 523.25, 523.25, 659.25, 587.33, 659.25, 783.99];
    const delays = [0, 0.1, 0.2, 0.3, 0.45, 0.55, 0.7];
    const durations = [0.1, 0.1, 0.1, 0.15, 0.1, 0.1, 0.4];
    
    notes.forEach((note, index) => {
      this.playTone(note, durations[index], "sine", delays[index]);
    });
  }
};

// Custom Confetti physics generator
const ConfettiEffect = {
  canvas: null,
  ctx: null,
  colors: ["#06b6d4", "#a855f7", "#ec4899", "#10b981", "#f59e0b", "#3b82f6"],
  particles: [],
  animationId: null,

  init() {
    this.canvas = document.getElementById("confetti-canvas");
    this.ctx = this.canvas.getContext("2d");
  },

  start() {
    if (!this.canvas) this.init();
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    
    this.particles = [];
    const count = 120;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height - this.canvas.height,
        size: Math.random() * 8 + 6,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * 5 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 4 - 2
      });
    }

    if (this.animationId) cancelAnimationFrame(this.animationId);
    this.animate();
    
    // Stop after 3.5 seconds
    setTimeout(() => {
      cancelAnimationFrame(this.animationId);
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.animationId = null;
    }, 3500);
  },

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let active = false;

    this.particles.forEach((p) => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y < this.canvas.height) {
        active = true;
      }

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      this.ctx.restore();
    });

    if (active) {
      this.animationId = requestAnimationFrame(() => this.animate());
    }
  }
};

// Global App State manager
const App = {
  state: {
    currentPage: "dashboard",
    theme: "dark",
    currentTopic: null,
    
    // Flashcard Index tracking
    studyIndex: 0,
    
    // Quiz Progress tracking
    quizIndex: 0,
    quizScore: 0,
    quizXp: 0,
    quizTimeStart: null,
    quizQuestions: [],
    
    // User progress stats (persisted)
    userStats: {
      totalXp: 0,
      streakDays: 0,
      lastActiveDate: null,
      quizzesCompleted: 0,
      correctAnswers: 0,
      totalQuestionsAnswered: 0,
      hasPerfectScore: false,
      completedTopics: [],
      unlockedBadges: []
    }
  },

  // Spelling builder task workspace
  spellingState: {
    answer: "",
    scrambled: [],
    currentGuess: [],
    tileMap: {} // map of letter index to tile element for tracking
  },

  init() {
    this.loadStats();
    this.setupListeners();
    this.renderTopics();
    this.applyTheme();
    this.checkStreak();
    this.updateHeaderStats();
    
    // Handle Window Resizing for Confetti
    window.addEventListener("resize", () => {
      const canvas = document.getElementById("confetti-canvas");
      if (canvas && canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  },

  // State Persistence
  loadStats() {
    const saved = localStorage.getItem("lingokids_stats");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.state.userStats = { ...this.state.userStats, ...parsed };
      } catch (e) {
        console.error("Error loading localStorage stats:", e);
      }
    }
  },

  saveStats() {
    localStorage.setItem("lingokids_stats", JSON.stringify(this.state.userStats));
    this.updateHeaderStats();
  },

  updateHeaderStats() {
    document.getElementById("header-xp").textContent = this.state.userStats.totalXp;
    document.getElementById("header-streak").textContent = this.state.userStats.streakDays;
  },

  checkStreak() {
    const stats = this.state.userStats;
    const today = new Date().toDateString();
    
    if (stats.lastActiveDate) {
      const lastDate = new Date(stats.lastActiveDate);
      const diffTime = Math.abs(new Date(today) - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        // Active consecutive day
        stats.streakDays += 1;
        this.showToast("Ударный темп сохранен! 🔥 " + stats.streakDays + " дн.");
      } else if (diffDays > 1) {
        // Streak broken
        stats.streakDays = 1;
      }
    } else {
      // First setup
      stats.streakDays = 1;
    }
    
    stats.lastActiveDate = today;
    this.saveStats();
  },

  applyTheme() {
    document.body.setAttribute("data-theme", this.state.theme);
    const themeSvg = document.getElementById("theme-svg-path");
    if (this.state.theme === "light") {
      // Sun icon path
      themeSvg.setAttribute("d", "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z");
    } else {
      // Moon icon path
      themeSvg.setAttribute("d", "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z");
    }
  },

  // Listeners setup
  setupListeners() {
    // Navigation Routing
    document.querySelectorAll("nav a.nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        AudioEngine.playClick();
        this.navigateTo(link.getAttribute("data-page"));
      });
    });

    document.getElementById("nav-logo").addEventListener("click", () => {
      AudioEngine.playClick();
      this.navigateTo("dashboard");
    });

    document.getElementById("btn-hero-start").addEventListener("click", () => {
      AudioEngine.playClick();
      // Scroll to categories Title
      document.querySelector(".section-title").scrollIntoView({ behavior: "smooth" });
    });

    // Theme and Sound toggling
    document.getElementById("btn-theme-toggle").addEventListener("click", () => {
      this.state.theme = this.state.theme === "dark" ? "light" : "dark";
      this.applyTheme();
      AudioEngine.playClick();
    });

    document.getElementById("btn-sound-toggle").addEventListener("click", () => {
      AudioEngine.enabled = !AudioEngine.enabled;
      const soundSvg = document.getElementById("sound-svg-path");
      if (AudioEngine.enabled) {
        // Sound on icon
        soundSvg.setAttribute("d", "M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 2.27L6.5 10H2v4h4.5l5 4.5V5.5z");
        AudioEngine.playClick();
      } else {
        // Sound off/muted icon
        soundSvg.setAttribute("d", "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H2v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 5.89 12 7.98V4z");
      }
    });

    // Study View controls
    document.getElementById("btn-study-back").addEventListener("click", () => {
      AudioEngine.playClick();
      this.navigateTo("dashboard");
    });

    const flashcard = document.getElementById("flashcard-element");
    flashcard.addEventListener("click", (e) => {
      // Don't flip if clicking speaker button
      if (e.target.closest("#btn-speak-word") || e.target.closest(".card-speaker-btn")) {
        return;
      }
      AudioEngine.playFlip();
      flashcard.classList.toggle("flipped");
    });

    document.getElementById("btn-speak-word").addEventListener("click", (e) => {
      e.stopPropagation();
      this.speakWord(this.state.currentTopic.words[this.state.studyIndex].word);
    });

    document.getElementById("btn-study-prev").addEventListener("click", () => {
      if (this.state.studyIndex > 0) {
        AudioEngine.playClick();
        this.state.studyIndex--;
        this.renderFlashcard();
      }
    });

    document.getElementById("btn-study-next").addEventListener("click", () => {
      const words = this.state.currentTopic.words;
      if (this.state.studyIndex < words.length - 1) {
        AudioEngine.playClick();
        this.state.studyIndex++;
        this.renderFlashcard();
      }
    });

    document.getElementById("btn-study-start-quiz").addEventListener("click", () => {
      AudioEngine.playClick();
      this.startQuiz();
    });

    // Quiz Navigation / Interaction
    document.getElementById("btn-quiz-action").addEventListener("click", () => {
      this.handleQuizAction();
    });

    // Results Actions
    document.getElementById("btn-results-home").addEventListener("click", () => {
      AudioEngine.playClick();
      this.navigateTo("dashboard");
    });

    document.getElementById("btn-results-retry").addEventListener("click", () => {
      AudioEngine.playClick();
      this.startQuiz();
    });

    // Word Builder Clean buttons
    document.getElementById("btn-spell-clear").addEventListener("click", () => {
      AudioEngine.playClick();
      this.clearSpellingGuess();
    });
  },

  // Dynamic Topics Rendering
  renderTopics() {
    const container = document.getElementById("topics-container");
    container.innerHTML = "";

    TOPICS_DATA.forEach((topic) => {
      const stats = this.state.userStats;
      // Calculate individual topic progress
      const completedCount = stats.completedTopics.filter(t => t === topic.id).length;
      // For progress: 0% if never completed, 100% if completed at least once
      const percent = completedCount > 0 ? 100 : 0;

      const card = document.createElement("div");
      card.className = "topic-card";
      card.style.setProperty("--card-accent", topic.color);
      
      card.innerHTML = `
        <div class="topic-header">
          <div class="topic-icon">${topic.icon}</div>
          <span class="topic-difficulty">${topic.difficulty}</span>
        </div>
        <div class="topic-info">
          <h3>${topic.title}</h3>
          <p>${topic.description}</p>
        </div>
        <div class="topic-progress-container">
          <div class="topic-progress-bar">
            <div class="topic-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="topic-progress-text">
            <span>Карточек: ${topic.words.length}</span>
            <span>${percent}%</span>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        AudioEngine.playClick();
        this.selectTopic(topic);
      });

      container.appendChild(card);
    });
  },

  navigateTo(pageId) {
    // Nav bar active link updates
    document.querySelectorAll("nav a.nav-link").forEach((link) => {
      if (link.getAttribute("data-page") === pageId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Show/hide page cards
    document.querySelectorAll(".page").forEach((page) => {
      if (page.id === pageId + "-page") {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    this.state.currentPage = pageId;

    if (pageId === "achievements") {
      this.renderAchievements();
    } else if (pageId === "dashboard") {
      this.renderTopics();
    }
  },

  selectTopic(topic) {
    this.state.currentTopic = topic;
    this.state.studyIndex = 0;
    
    document.getElementById("study-topic-title").textContent = topic.title;
    this.renderFlashcard();
    this.navigateTo("study");
  },

  renderFlashcard() {
    const topic = this.state.currentTopic;
    const wordInfo = topic.words[this.state.studyIndex];
    const flashcard = document.getElementById("flashcard-element");
    
    // Reset flip status
    flashcard.classList.remove("flipped");

    // Fill Front Face
    document.getElementById("card-emoji").textContent = wordInfo.emoji;
    document.getElementById("card-english-word").textContent = wordInfo.word;
    document.getElementById("card-ipa").textContent = wordInfo.ipa;

    // Fill Back Face
    document.getElementById("card-russian-translation").textContent = wordInfo.translation;
    document.getElementById("card-english-example").textContent = `"${wordInfo.example}"`;
    document.getElementById("card-russian-example").textContent = `"${wordInfo.exampleTranslation}"`;

    // Progress counter
    document.getElementById("study-current-index").textContent = this.state.studyIndex + 1;
    document.getElementById("study-total-count").textContent = topic.words.length;

    // Pronounce automatically on card entry (delayed to let user absorb)
    setTimeout(() => {
      if (this.state.currentPage === "study" && this.state.studyIndex === topic.words.indexOf(wordInfo)) {
        this.speakWord(wordInfo.word);
      }
    }, 400);
  },

  speakWord(text) {
    if (!AudioEngine.enabled) return;
    try {
      // Check SpeechSynthesis support
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel(); // Stop ongoing speech
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 0.85; // slightly slower for educational clear accent
        
        // Try finding a premium English voice
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith("en-US") && v.name.includes("Google")) 
                        || voices.find(v => v.lang.startsWith("en-US") || v.lang.startsWith("en"));
        if (enVoice) {
          utterance.voice = enVoice;
        }

        window.speechSynthesis.speak(utterance);
      }
    } catch (e) {
      console.warn("TTS Speech Synthesis failed:", e);
    }
  },

  // ================= QUIZ LOGIC =================
  startQuiz() {
    const topic = this.state.currentTopic;
    this.state.quizQuestions = QUIZZES_DATA[topic.id] || [];
    this.state.quizIndex = 0;
    this.state.quizScore = 0;
    this.state.quizXp = 0;
    this.state.quizTimeStart = new Date();
    
    document.getElementById("quiz-earned-xp").textContent = "0";
    
    this.renderQuizQuestion();
    this.navigateTo("quiz");
  },

  renderQuizQuestion() {
    const qList = this.state.quizQuestions;
    const qIndex = this.state.quizIndex;
    
    if (qIndex >= qList.length) {
      this.finishQuiz();
      return;
    }

    const questionObj = qList[qIndex];
    
    // Update progress bar
    const progressPercent = (qIndex / qList.length) * 100;
    document.getElementById("quiz-progress-fill-element").style.width = `${progressPercent}%`;

    // Fill Question Text
    document.getElementById("quiz-question-type-text").textContent = 
      questionObj.type === "choice" ? "Выбери перевод" : "Собери слово по буквам";
    
    document.getElementById("quiz-media-visual").textContent = questionObj.emoji;
    document.getElementById("quiz-question-content").textContent = questionObj.question;

    // Reset feedback text & action button
    const feedback = document.getElementById("quiz-feedback-text-element");
    feedback.className = "quiz-feedback-text";
    feedback.style.opacity = "0";

    const actBtn = document.getElementById("btn-quiz-action");
    actBtn.textContent = "Проверить";
    actBtn.disabled = true;
    actBtn.onclick = () => this.checkQuizAnswer();

    // Toggle question modes
    const choicesContainer = document.getElementById("quiz-choices-container");
    const spellingContainer = document.getElementById("quiz-spelling-container");

    if (questionObj.type === "choice") {
      choicesContainer.style.display = "grid";
      spellingContainer.style.display = "none";
      this.renderChoiceOptions(questionObj);
    } else {
      choicesContainer.style.display = "none";
      spellingContainer.style.display = "flex";
      this.initSpellingMode(questionObj);
    }
  },

  renderChoiceOptions(questionObj) {
    const container = document.getElementById("quiz-choices-container");
    container.innerHTML = "";

    const alphabet = ["A", "B", "C", "D"];
    questionObj.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = `
        <span class="choice-badge">${alphabet[index]}</span>
        <span class="choice-text">${choice}</span>
      `;

      btn.addEventListener("click", () => {
        // Deselect others
        container.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        AudioEngine.playClick();
        
        // Enable action check button
        document.getElementById("btn-quiz-action").disabled = false;
      });

      container.appendChild(btn);
    });
  },

  initSpellingMode(questionObj) {
    const slotsContainer = document.getElementById("spelling-slots-container");
    const letterChoices = document.getElementById("spelling-letters-choices");
    
    slotsContainer.innerHTML = "";
    letterChoices.innerHTML = "";

    const answer = questionObj.answer.toUpperCase();
    this.spellingState.answer = answer;
    this.spellingState.currentGuess = new Array(answer.length).fill(null);
    this.spellingState.tileMap = {};

    // Generate letter slots
    for (let i = 0; i < answer.length; i++) {
      const slot = document.createElement("div");
      slot.className = "spelling-letter-slot";
      slot.dataset.index = i;
      
      // Let children click filled slots to remove them
      slot.addEventListener("click", () => {
        if (slot.classList.contains("filled")) {
          const tileIdx = slot.dataset.tileIndex;
          this.removeLetterFromSpelling(i, tileIdx);
        }
      });

      slotsContainer.appendChild(slot);
    }

    // Scramble letters
    let letterArray = answer.split("");
    // Add extra random letters to make it a bit trickier if length < 6
    if (letterArray.length < 6) {
      const extraPool = "ABCDEGHILNOPRSTUWY";
      while (letterArray.length < 7) {
        const randLetter = extraPool[Math.floor(Math.random() * extraPool.length)];
        letterArray.push(randLetter);
      }
    }
    
    // Fisher-Yates Scramble
    for (let i = letterArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letterArray[i], letterArray[j]] = [letterArray[j], letterArray[i]];
    }

    this.spellingState.scrambled = letterArray;

    // Render Scrambled tiles
    letterArray.forEach((letter, index) => {
      const tile = document.createElement("div");
      tile.className = "letter-tile";
      tile.textContent = letter;
      tile.dataset.index = index;

      tile.addEventListener("click", () => {
        AudioEngine.playClick();
        this.addLetterToSpelling(letter, index, tile);
      });

      letterChoices.appendChild(tile);
    });
  },

  addLetterToSpelling(letter, tileIndex, tileElement) {
    const slots = document.getElementById("spelling-slots-container").children;
    
    // Find first empty slot
    let emptyIndex = -1;
    for (let i = 0; i < this.spellingState.currentGuess.length; i++) {
      if (this.spellingState.currentGuess[i] === null) {
        emptyIndex = i;
        break;
      }
    }

    if (emptyIndex !== -1) {
      this.spellingState.currentGuess[emptyIndex] = letter;
      
      const slot = slots[emptyIndex];
      slot.textContent = letter;
      slot.classList.add("filled");
      slot.dataset.tileIndex = tileIndex; // track where it came from

      // Hide or disable the tile
      tileElement.classList.add("disabled");
      this.spellingState.tileMap[tileIndex] = tileElement;

      // Check if spelling complete
      const isComplete = this.spellingState.currentGuess.every(l => l !== null);
      document.getElementById("btn-quiz-action").disabled = !isComplete;
    }
  },

  removeLetterFromSpelling(slotIndex, tileIndex) {
    AudioEngine.playClick();
    const slots = document.getElementById("spelling-slots-container").children;
    const slot = slots[slotIndex];
    
    // Empty the slot state
    this.spellingState.currentGuess[slotIndex] = null;
    slot.textContent = "";
    slot.classList.remove("filled");
    slot.removeAttribute("data-tile-index");

    // Re-enable the letter tile
    const tile = this.spellingState.tileMap[tileIndex];
    if (tile) {
      tile.classList.remove("disabled");
    }

    document.getElementById("btn-quiz-action").disabled = true;
  },

  clearSpellingGuess() {
    const slots = document.getElementById("spelling-slots-container").children;
    for (let i = 0; i < this.spellingState.currentGuess.length; i++) {
      this.spellingState.currentGuess[i] = null;
      slots[i].textContent = "";
      slots[i].classList.remove("filled");
      slots[i].removeAttribute("data-tile-index");
    }

    // Re-enable all tiles
    document.getElementById("spelling-letters-choices").querySelectorAll(".letter-tile").forEach(tile => {
      tile.classList.remove("disabled");
    });

    document.getElementById("btn-quiz-action").disabled = true;
  },

  checkQuizAnswer() {
    const qList = this.state.quizQuestions;
    const qIndex = this.state.quizIndex;
    const questionObj = qList[qIndex];
    
    let isCorrect = false;
    let selectedText = "";

    if (questionObj.type === "choice") {
      const selectedBtn = document.querySelector("#quiz-choices-container .choice-btn.selected");
      if (!selectedBtn) return;
      selectedText = selectedBtn.querySelector(".choice-text").textContent;
      isCorrect = selectedText === questionObj.answer;

      // Color choice buttons
      document.querySelectorAll("#quiz-choices-container .choice-btn").forEach(btn => {
        const text = btn.querySelector(".choice-text").textContent;
        if (text === questionObj.answer) {
          btn.classList.add("correct");
        } else if (btn.classList.contains("selected") && !isCorrect) {
          btn.classList.add("wrong");
          document.getElementById("quiz-question-card").classList.add("shake");
          setTimeout(() => {
            document.getElementById("quiz-question-card").classList.remove("shake");
          }, 500);
        }
      });
    } else {
      // Spelling check
      const guess = this.spellingState.currentGuess.join("");
      isCorrect = guess === this.spellingState.answer;
      selectedText = guess;

      const slots = document.getElementById("spelling-slots-container").children;
      if (isCorrect) {
        for (let i = 0; i < slots.length; i++) {
          slots[i].style.borderColor = "var(--accent-lime)";
          slots[i].style.color = "var(--accent-lime)";
        }
      } else {
        document.getElementById("quiz-question-card").classList.add("shake");
        setTimeout(() => {
          document.getElementById("quiz-question-card").classList.remove("shake");
        }, 500);

        for (let i = 0; i < slots.length; i++) {
          slots[i].style.borderColor = "var(--accent-rose)";
          slots[i].style.color = "var(--accent-rose)";
        }
      }
    }

    // Play Voice Pronunciation if correct English word was guessed/selected
    if (isCorrect) {
      AudioEngine.playSuccess();
      const speakText = questionObj.type === "spelling" ? questionObj.answer : 
                        (questionObj.choices.indexOf(questionObj.answer) !== -1 && /^[a-zA-Z\s]+$/.test(questionObj.answer) ? questionObj.answer : null);
      if (speakText) {
        setTimeout(() => this.speakWord(speakText), 300);
      }

      this.state.quizScore++;
      this.state.quizXp += 10;
      document.getElementById("quiz-earned-xp").textContent = this.state.quizXp;
      
      const feedback = document.getElementById("quiz-feedback-text-element");
      feedback.textContent = "Правильно! +10 XP 🎉";
      feedback.className = "quiz-feedback-text correct";
    } else {
      AudioEngine.playError();
      const feedback = document.getElementById("quiz-feedback-text-element");
      feedback.textContent = `Ошибка. Ответ: ${questionObj.answer} ❌`;
      feedback.className = "quiz-feedback-text wrong";
    }

    // Update Action Button to "Next"
    const actBtn = document.getElementById("btn-quiz-action");
    actBtn.textContent = "Продолжить";
    actBtn.onclick = () => this.goToNextQuestion();
  },

  goToNextQuestion() {
    this.state.quizIndex++;
    this.renderQuizQuestion();
  },

  finishQuiz() {
    const qList = this.state.quizQuestions;
    const finalScore = this.state.quizScore;
    const finalXp = this.state.quizXp;
    
    // Time delta
    const timeDiff = Math.floor((new Date() - this.state.quizTimeStart) / 1000);
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const accuracy = Math.round((finalScore / qList.length) * 100);

    // Save user stats
    const stats = this.state.userStats;
    stats.totalXp += finalXp;
    stats.quizzesCompleted += 1;
    stats.correctAnswers += finalScore;
    stats.totalQuestionsAnswered += qList.length;
    
    if (accuracy === 100) {
      stats.hasPerfectScore = true;
    }

    const currentTopicId = this.state.currentTopic.id;
    if (!stats.completedTopics.includes(currentTopicId)) {
      stats.completedTopics.push(currentTopicId);
    }

    // Check Badge Awards
    this.checkBadgesProgression();
    this.saveStats();

    // Fill Results UI
    document.getElementById("results-accuracy").textContent = `${accuracy}%`;
    document.getElementById("results-xp").textContent = `+${finalXp}`;
    document.getElementById("results-time").textContent = formattedTime;

    const emojiElement = document.getElementById("results-emoji");
    const titleElement = document.getElementById("results-title");
    const messageElement = document.getElementById("results-message");

    if (accuracy === 100) {
      emojiElement.textContent = "🏆";
      titleElement.textContent = "Идеальный результат!";
      messageElement.textContent = "Ты ответил на все вопросы правильно! Мега-мозг!";
      AudioEngine.playWin();
      ConfettiEffect.start();
    } else if (accuracy >= 70) {
      emojiElement.textContent = "🌟";
      titleElement.textContent = "Отличная работа!";
      messageElement.textContent = "Ты показал прекрасный результат. Уверенно идешь вперед!";
      AudioEngine.playWin();
      ConfettiEffect.start();
    } else {
      emojiElement.textContent = "👍";
      titleElement.textContent = "Хорошая попытка!";
      messageElement.textContent = "Еще немного тренировки, и всё получится на отлично! Попробуй еще раз.";
      AudioEngine.playTone(400, 0.5, "sine");
    }

    this.navigateTo("results");
  },

  // ================= ACHIEVEMENTS LOGIC =================
  checkBadgesProgression() {
    const stats = this.state.userStats;
    let unlockedAny = false;

    ACHIEVEMENTS.forEach((badge) => {
      if (!stats.unlockedBadges.includes(badge.id)) {
        if (badge.condition(stats)) {
          stats.unlockedBadges.push(badge.id);
          unlockedAny = true;
          this.showToast(`Новое достижение: "${badge.title}"! 🏅`);
        }
      }
    });

    return unlockedAny;
  },

  renderAchievements() {
    const stats = this.state.userStats;
    
    // Stats Summary Boxes
    document.getElementById("stats-total-xp").textContent = stats.totalXp;
    document.getElementById("stats-quizzes-completed").textContent = stats.quizzesCompleted;
    document.getElementById("stats-streak-days").textContent = stats.streakDays;

    const accuracyRatio = stats.totalQuestionsAnswered > 0 
      ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100) 
      : 0;
    document.getElementById("stats-accuracy-avg").textContent = `${accuracyRatio}%`;

    // Render Badge cards
    const grid = document.getElementById("achievements-grid-container");
    grid.innerHTML = "";

    ACHIEVEMENTS.forEach((badge) => {
      const isUnlocked = stats.unlockedBadges.includes(badge.id);
      const card = document.createElement("div");
      card.className = `achievement-card ${isUnlocked ? 'unlocked' : 'locked'}`;

      card.innerHTML = `
        <div class="achievement-icon-wrapper">
          <span>${badge.emoji}</span>
          <div class="badge-lock">
            <svg viewBox="0 0 24 24">
              ${isUnlocked 
                ? '<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>' 
                : '<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>'}
            </svg>
          </div>
        </div>
        <div class="achievement-details">
          <h4>${badge.title}</h4>
          <p>${badge.desc}</p>
        </div>
      `;

      grid.appendChild(card);
    });
  },

  // Display sliding popups/notifications
  showToast(message) {
    const toast = document.getElementById("toast-notification");
    document.getElementById("toast-message-text").textContent = message;
    
    toast.classList.add("show");
    AudioEngine.playSuccess(); // trigger chime

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
};

// Initialize App on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
