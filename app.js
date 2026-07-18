// Localization dictionary
const I18N = {
  ru: {
    nav_study: "Обучение",
    nav_achievements: "Достижения",
    streak_days_label: "дней",
    hero_title: "Учи английский <span>играя!</span>",
    hero_subtitle: "Интерактивные карточки, увлекательные викторины, сборка слов по буквам и озвучка правильного произношения. Специально для школьников 10-15 лет!",
    hero_button: "Начать изучение",
    dashboard_title: "Выбери тему для изучения",
    btn_back: "Назад на главную",
    btn_start_quiz: "Запустить тест",
    card_hint_front: "Кликни, чтобы перевернуть карточку 🔄",
    card_hint_back: "Кликни, чтобы перевернуть обратно 🔄",
    btn_clear: "Очистить",
    results_accuracy_label: "Точность",
    results_xp_label: "Опыт XP",
    results_time_label: "Время",
    btn_results_home: "На главную",
    btn_results_retry: "Повторить тест",
    achievements_title: "Твой профиль и достижения",
    stats_xp_label: "Очки Опыта (XP)",
    stats_quizzes_label: "Пройдено тестов",
    stats_accuracy_label: "Средняя точность",
    stats_streak_label: "Ударные дни",
    achievements_subtitle: "Награды и Кубки",
    footer_copy: "&copy; 2026 LingoKids. Учи английский язык в удовольствие!",
    footer_desc: "Создано специально для детей и подростков от 10 до 15 лет.",
    
    // JS dynamic strings
    tooltip_xp: "Всего опыта (XP)",
    tooltip_streak: "Ударный режим (дней)",
    toast_streak: "Ударный темп сохранен! 🔥 ",
    toast_badge: "Новое достижение: ",
    difficulty_elementary: "Начальный",
    difficulty_intermediate: "Средний",
    difficulty_grammar: "Грамматика",
    
    // Quiz dynamic strings
    quiz_type_choice: "Выбери правильный перевод",
    quiz_type_spelling: "Собери слово по буквам",
    quiz_correct_feedback: "Правильно! +10 XP 🎉",
    quiz_wrong_feedback: "Ошибка. Правильный ответ: ",
    
    // Results texts
    results_perfect_title: "Идеальный результат!",
    results_perfect_msg: "Ты ответил на все вопросы правильно! Мега-мозг!",
    results_good_title: "Отличная работа!",
    results_good_msg: "Ты показал прекрасный результат. Уверенно идешь вперед!",
    results_try_title: "Хорошая попытка!",
    results_try_msg: "Еще немного тренировки, и всё получится на отлично! Попробуй еще раз.",
    
    // Header labels
    lang_btn_text: "UA"
  },
  ua: {
    nav_study: "Навчання",
    nav_achievements: "Досягнення",
    streak_days_label: "днів",
    hero_title: "Вчи англійську <span>граючи!</span>",
    hero_subtitle: "Інтерактивні картки, захоплюючі вікторини, складання слів за буквами та озвучка правильної вимови. Спеціально для школярів 10-15 років!",
    hero_button: "Почати вивчення",
    dashboard_title: "Обери тему для вивчення",
    btn_back: "Назад на головну",
    btn_start_quiz: "Запустити тест",
    card_hint_front: "Клікни, щоб перевернути картку 🔄",
    card_hint_back: "Клікни, щоб перевернути назад 🔄",
    btn_clear: "Очистити",
    results_accuracy_label: "Точність",
    results_xp_label: "Досвід XP",
    results_time_label: "Час",
    btn_results_home: "На головну",
    btn_results_retry: "Повторити тест",
    achievements_title: "Твій профіль та досягнення",
    stats_xp_label: "Очки Досвіду (XP)",
    stats_quizzes_label: "Пройдено тестів",
    stats_accuracy_label: "Середня точність",
    stats_streak_label: "Ударні дні",
    achievements_subtitle: "Нагороди та Кубки",
    footer_copy: "&copy; 2026 LingoKids. Вчи англійську мову із задоволенням!",
    footer_desc: "Створено спеціально для дітей та підлітків від 10 до 15 років.",
    
    // JS dynamic strings
    tooltip_xp: "Всього досвіду (XP)",
    tooltip_streak: "Ударний режим (днів)",
    toast_streak: "Ударний темп збережено! 🔥 ",
    toast_badge: "Нове досягнення: ",
    difficulty_elementary: "Початковий",
    difficulty_intermediate: "Середній",
    difficulty_grammar: "Грамматика",
    
    // Quiz dynamic strings
    quiz_type_choice: "Обери правильну відповідь",
    quiz_type_spelling: "Збери слово за буквами",
    quiz_correct_feedback: "Правильно! +10 XP 🎉",
    quiz_wrong_feedback: "Помилка. Правильна відповідь: ",
    
    // Results texts
    results_perfect_title: "Ідеальний результат!",
    results_perfect_msg: "Ти відповів на всі запитання правильно! Мега-мозок!",
    results_good_title: "Чудова робота!",
    results_good_msg: "Ти показав чудовий результат. Впевнено йдеш вперед!",
    results_try_title: "Хороша спроба!",
    results_try_msg: "Ще трохи тренувань, і все вийде на відмінно! Спробуй ще раз.",
    
    // Header labels
    lang_btn_text: "RU"
  }
};

// Curriculum and Word database with dual language translations
const TOPICS_DATA = [
  {
    id: "seasons",
    title: { ru: "Времена года & Погода", ua: "Времена року & Погода" },
    description: { ru: "Погода, времена года и природные явления.", ua: "Погода, пори року та природні явища." },
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM4 10.5H1v2h3v-2zm9-6.8V1h-2v3.7h2zm6.24.14l-1.41-1.41-1.8 1.79 1.42 1.42 1.79-1.8zM20 10.5h3v2h-3v-2zm-8-7c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5zm0 13c-3.03 0-5.5-2.47-5.5-5.5S10.97 6 12.5 6s5.5 2.47 5.5 5.5-2.47 5.5-5.5 5.5zm4.74 3.66l1.8 1.79 1.41-1.41-1.79-1.8-1.42 1.42zM6.76 16.16l-1.42 1.42 1.79 1.8 1.41-1.41-1.78-1.81zM11 19.3v3.7h2v-3.7h-2z"/></svg>`,
    color: "#06b6d4",
    words: [
      { word: "Autumn", ipa: "[ˈɔːtəm]", translation: { ru: "Осень", ua: "Осінь" }, emoji: "🍂", example: "In autumn, the leaves turn yellow and red.", exampleTranslation: { ru: "Осенью листья становятся желтыми и красными.", ua: "Восени листя стає жовтим і червоним." } },
      { word: "Winter", ipa: "[ˈwɪntər]", translation: { ru: "Зима", ua: "Зима" }, emoji: "❄️", example: "Winter is the coldest season of the year.", exampleTranslation: { ru: "Зима — самое холодное время года.", ua: "Зима — найхолодніша пора року." } },
      { word: "Spring", ipa: "[sprɪŋ]", translation: { ru: "Весна", ua: "Весна" }, emoji: "🌱", example: "Flowers start to grow in spring.", exampleTranslation: { ru: "Цветы начинают расти весной.", ua: "Квіти починають рости навесні." } },
      { word: "Summer", ipa: "[ˈsʌmər]", translation: { ru: "Лето", ua: "Літо" }, emoji: "☀️", example: "I love swimming in the sea during summer.", exampleTranslation: { ru: "Я люблю плавать в море летом.", ua: "Я люблю плавати в морі влітку." } },
      { word: "Weather", ipa: "[ˈweðər]", translation: { ru: "Погода", ua: "Погода" }, emoji: "🌤️", example: "What is the weather like today?", exampleTranslation: { ru: "Какая сегодня погода?", ua: "Яка сьогодні погода?" } },
      { word: "Rainy", ipa: "[ˈreɪni]", translation: { ru: "Дождливый", ua: "Дощовий" }, emoji: "🌧️", example: "Take an umbrella on a rainy day.", exampleTranslation: { ru: "Возьми зонтик в дождливый день.", ua: "Візьми парасольку в дощовий день." } },
      { word: "Season", ipa: "[ˈsiːzn]", translation: { ru: "Время года / Сезон", ua: "Пора року / Сезон" }, emoji: "📅", example: "My favorite season is summer.", exampleTranslation: { ru: "Мое любимое время года — лето.", ua: "Моя улюблена пора року — літо." } },
      { word: "Sunny", ipa: "[ˈsʌni]", translation: { ru: "Солнечный", ua: "Сонячний" }, emoji: "☀️", example: "It is a sunny and warm morning.", exampleTranslation: { ru: "Сегодня солнечное и теплое утро.", ua: "Сьогодні сонячний і теплий ранок." } }
    ]
  },
  {
    id: "colors",
    title: { ru: "Цвета & Искусство", ua: "Кольори & Мистецтво" },
    description: { ru: "Разнообразная палитра и художественные термины.", ua: "Різноманітна палітра та художні терміни." },
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-9 9c0 1.91 1.59 3.5 3.5 3.5.85 0 1.63-.31 2.25-.82.26-.22.61-.22.87 0C10.23 15.19 11.08 15.5 12 15.5c2.92 0 5.5-2.08 5.5-5S15 3 12 3zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5S7.33 11 6.5 11zm3-3C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>`,
    color: "#a855f7",
    words: [
      { word: "Turquoise", ipa: "[ˈtɜːrkwɔɪz]", translation: { ru: "Бирюзовый", ua: "Бірюзовий" }, emoji: "💎", example: "The Caribbean sea has beautiful turquoise water.", exampleTranslation: { ru: "В Карибском море красивая бирюзовая вода.", ua: "У Карибському морі красива бірюзова вода." } },
      { word: "Crimson", ipa: "[ˈkrɪmzn]", translation: { ru: "Малиновый / Темно-красный", ua: "Малиновий / Темно-червоний" }, emoji: "🍒", example: "Her cheeks turned crimson when she felt embarrassed.", exampleTranslation: { ru: "Её щеки стали малиновыми, когда она смутилась.", ua: "Її щоки стали малиновими, коли вона зніяковіла." } },
      { word: "Palette", ipa: "[ˈpælət]", translation: { ru: "Палитра", ua: "Палітра" }, emoji: "🎨", example: "The artist mixed colors on his palette.", exampleTranslation: { ru: "Художник смешивал цвета на своей палитре.", ua: "Художник змішував кольори на своїй палітрі." } },
      { word: "Rainbow", ipa: "[ˈreɪnbəʊ]", translation: { ru: "Радуга", ua: "Веселка" }, emoji: "🌈", example: "A colorful rainbow appeared in the sky after the rain.", exampleTranslation: { ru: "После дождя на небе появилась разноцветная радуга.", ua: "Після дощу на небі з'явилася різнокольорова веселка." } },
      { word: "Charcoal", ipa: "[ˈtʃɑːrkəʊl]", translation: { ru: "Угольный / Темно-серый", ua: "Вугільний / Темно-сірий" }, emoji: "🖤", example: "He wore a stylish charcoal grey suit.", exampleTranslation: { ru: "Он носил стильный угольно-серый костюм.", ua: "Він носив стильний вугільно-сірий костюм." } },
      { word: "Pastel", ipa: "[pæˈstel]", translation: { ru: "Пастельный", ua: "Пастельний" }, emoji: "🌸", example: "She painted her bedroom in soft pastel colors.", exampleTranslation: { ru: "Она покрасила свою спальню в нежные пастельные тона.", ua: "Вона пофарбувала свою спальню в ніжні пастельні тони." } },
      { word: "Shading", ipa: "[ˈʃeɪdɪŋ]", translation: { ru: "Штриховка / Растушевка", ua: "Штрихування / Розтушовування" }, emoji: "✏️", example: "Good shading makes a drawing look 3D.", exampleTranslation: { ru: "Хорошая штриховка придает рисунку трехмерный вид.", ua: "Гарне штрихування надає малюнку тривимірного вигляду." } },
      { word: "Violet", ipa: "[ˈvaɪələt]", translation: { ru: "Фиолетовый", ua: "Фіолетовий" }, emoji: "🪻", example: "Violets are beautiful purple flowers.", exampleTranslation: { ru: "Фиалки — красивые фиолетовые цветы.", ua: "Фіалки — красиві фіолетові квіти." } }
    ]
  },
  {
    id: "family",
    title: { ru: "Семья & Отношения", ua: "Родина & Стосунки" },
    description: { ru: "Родственные связи и общение близких людей.", ua: "Родинні зв'язки та спілкування близьких людей." },
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.48 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
    color: "#ec4899",
    words: [
      { word: "Siblings", ipa: "[ˈsɪblɪŋz]", translation: { ru: "Родные братья и сестры", ua: "Рідні брати та сестри" }, emoji: "👦👧", example: "Do you have any siblings or are you an only child?", exampleTranslation: { ru: "У тебя есть братья или сестры, или ты единственный ребенок?", ua: "У тебе є брати чи сестри, чи ти єдина дитина?" } },
      { word: "Relatives", ipa: "[ˈrelətɪvz]", translation: { ru: "Родственники", ua: "Родичі" }, emoji: "👵👴", example: "All our relatives gather for dinner.", exampleTranslation: { ru: "Все наши родственники собираются на ужин.", ua: "Всі наші родичі збираються на вечерю." } },
      { word: "Parents", ipa: "[ˈperənts]", translation: { ru: "Родители", ua: "Батьки" }, emoji: "👩‍👦‍👦", example: "My parents always support my hobbies.", exampleTranslation: { ru: "Мои родители всегда поддерживают мои увлечения.", ua: "Мої батьки завжди підтримують мої захоплення." } },
      { word: "Generation", ipa: "[ˌdʒenəˈreɪʃn]", translation: { ru: "Поколение", ua: "Покоління" }, emoji: "⏳", example: "Three generations lived in the same old house.", exampleTranslation: { ru: "Три поколения жили в одном старом доме.", ua: "Три покоління жили в одному старому будинку." } },
      { word: "Childhood", ipa: "[ˈtʃaɪldhʊd]", translation: { ru: "Детство", ua: "Дитинство" }, emoji: "🪁", example: "I spent my childhood in a small village.", exampleTranslation: { ru: "Я провел свое детство в маленькой деревне.", ua: "Я провів своє дитинство в маленькому селі." } },
      { word: "Friendship", ipa: "[ˈfrendʃɪp]", translation: { ru: "Дружба", ua: "Дружба" }, emoji: "🤝", example: "Their friendship started in school.", exampleTranslation: { ru: "Их дружба началась в школе.", ua: "Їхня дружба почалася в школі." } },
      { word: "Support", ipa: "[səˈpɔːrt]", translation: { ru: "Поддержка / Поддерживать", ua: "Підтримка / Підтримувати" }, emoji: "❤️", example: "Family support is very important.", exampleTranslation: { ru: "Поддержка семьи очень важна.", ua: "Підтримка родини дуже важлива." } },
      { word: "Honesty", ipa: "[ˈa:nəsti]", translation: { ru: "Честность", ua: "Чесність" }, emoji: "😇", example: "Honesty is the foundation of trust.", exampleTranslation: { ru: "Честность — основа доверия.", ua: "Чесність — основа довіри." } }
    ]
  },
  {
    id: "objects",
    title: { ru: "Дом & Предметы", ua: "Дім & Предмети" },
    description: { ru: "Вещи вокруг нас, гаджеты и домашний инвентарь.", ua: "Речі навколо нас, гаджети та домашній інвентар." },
    difficulty: "Elementary",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
    color: "#10b981",
    words: [
      { word: "Headphones", ipa: "[ˈhedfəʊnz]", translation: { ru: "Наушники", ua: "Навушники" }, emoji: "🎧", example: "I put on my headphones to listen to music.", exampleTranslation: { ru: "Я надел наушники, чтобы послушать музыку.", ua: "Я одягнув навушники, щоб послухати музику." } },
      { word: "Backpack", ipa: "[ˈbækpæk]", translation: { ru: "Рюкзак", ua: "Рюкзак" }, emoji: "🎒", example: "Put your textbooks inside your backpack.", exampleTranslation: { ru: "Положи учебники в свой рюкзак.", ua: "Поклади підручники у свій рюкзак." } },
      { word: "Mirror", ipa: "[ˈmɪrər]", translation: { ru: "Зеркало", ua: "Дзеркало" }, emoji: "🪞", example: "She looked in the mirror to check her hair.", exampleTranslation: { ru: "Она посмотрела в зеркало, чтобы поправить волосы.", ua: "Вона подивилася в дзеркало, щоб поправити волосся." } },
      { word: "Device", ipa: "[dɪˈvaɪs]", translation: { ru: "Устройство / Девайс", ua: "Пристрій / Девайс" }, emoji: "📱", example: "A smartphone is a smart electronic device.", exampleTranslation: { ru: "Смартфон — это умное электронное устройство.", ua: "Смартфон — це розумний електронний пристрій." } },
      { word: "Wardrobe", ipa: "[ˈwɔːrdrəʊb]", translation: { ru: "Шкаф для одежды", ua: "Шафа для одягу" }, emoji: "🧥", example: "He hung his coat in the wardrobe.", exampleTranslation: { ru: "Он повесил пальто в шкаф.", ua: "Він повісив пальто в шафу." } },
      { word: "Key", ipa: "[kiː]", translation: { ru: "Ключ", ua: "Ключ" }, emoji: "🔑", example: "I cannot find the key to open the door.", exampleTranslation: { ru: "Я не могу найти ключ, чтобы открыть дверь.", ua: "Я не можу знайти ключ, щоб відкрити двері." } },
      { word: "Bookshelf", ipa: "[ˈbʊkʃelf]", translation: { ru: "Книжная полка", ua: "Книжкова полиця" }, emoji: "📚", example: "There are many adventure novels on the bookshelf.", exampleTranslation: { ru: "На книжной полке много приключенческих романов.", ua: "На книжковій полиці багато пригодницьких романів." } },
      { word: "Blanket", ipa: "[ˈblæŋkɪt]", translation: { ru: "Одеяло / Плед", ua: "Ковдра / Плед" }, emoji: "🛌", example: "It is cold, so I need a warm blanket.", exampleTranslation: { ru: "Холодно, поэтому мне нужно теплое одеяло.", ua: "Холодно, тому мені потрібна тепла ковдра." } }
    ]
  },
  {
    id: "hobbies",
    title: { ru: "Увлечения & Досуг", ua: "Захоплення & Дозвілля" },
    description: { ru: "Хобби, спорт, игры и свободное время.", ua: "Хобі, спорт, ігри та вільний час." },
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
    color: "#f59e0b",
    words: [
      { word: "Photography", ipa: "[fəˈtɑːɡrəfi]", translation: { ru: "Фотография", ua: "Фотографія" }, emoji: "📷", example: "Photography is the hobby of taking pictures.", exampleTranslation: { ru: "Фотография — это увлечение делать снимки.", ua: "Фотографія — це захоплення робити знімки." } },
      { word: "Adventure", ipa: "[ədˈventʃər]", translation: { ru: "Приключение", ua: "Пригода" }, emoji: "🗺️", example: "Reading books takes you on a great adventure.", exampleTranslation: { ru: "Чтение книг отправляет тебя в великое приключение.", ua: "Читання книг відправляє тебе у велику пригоду." } },
      { word: "Cycling", ipa: "[ˈsaɪklɪŋ]", translation: { ru: "Велоспорт", ua: "Велоспорт" }, emoji: "🚴", example: "We go cycling in the park every Sunday.", exampleTranslation: { ru: "Каждое воскресенье мы катаемся на велосипедах в парке.", ua: "Щонеділі ми катаємося на велосипедах у парку." } },
      { word: "Painting", ipa: "[ˈpeɪntɪŋ]", translation: { ru: "Живопись", ua: "Живопис / Малювання" }, emoji: "🎨", example: "Watercolor painting requires patience.", exampleTranslation: { ru: "Рисование акварелью требует терпения.", ua: "Малювання аквареллю вимагає терпіння." } },
      { word: "Travel", ipa: "[ˈtrævl]", translation: { ru: "Путешествие", ua: "Подорож / Подорожувати" }, emoji: "✈️", example: "They plan to travel across Europe.", exampleTranslation: { ru: "Они планируют путешествовать по Европе.", ua: "Вони планують подорожувати Європою." } },
      { word: "Cooking", ipa: "[ˈkʊkɪŋ]", translation: { ru: "Кулинария", ua: "Кулінарія / Готування" }, emoji: "🍳", example: "Baking cookies is my favorite cooking activity.", exampleTranslation: { ru: "Выпечка печенья — моё любимое кулинарное занятие.", ua: "Випікання печива — моє улюблене кулінарне заняття." } },
      { word: "Gaming", ipa: "[ˈɡeɪmɪŋ]", translation: { ru: "Гейминг / Игры", ua: "Геймінг / Ігри" }, emoji: "🎮", example: "Online gaming is very popular among teenagers.", exampleTranslation: { ru: "Онлайн-игры очень популярны среди подростков.", ua: "Онлайн-ігри дуже популярні серед підлітків." } },
      { word: "Gardening", ipa: "[ˈɡɑːrdnɪŋ]", translation: { ru: "Садоводство", ua: "Садівництво" }, emoji: "🏡", example: "My grandmother enjoys gardening.", exampleTranslation: { ru: "Моя бабушка наслаждается садоводством.", ua: "Моя бабуся насолоджується садівництвом." } }
    ]
  },
  {
    id: "school",
    title: { ru: "Школа & Наука", ua: "Школа & Наука" },
    description: { ru: "Учебные предметы, инструменты познания и наука.", ua: "Навчальні предмети, інструменти пізнання та наука." },
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13c-3.31 0-6-2.69-6-6 0-3.31 2.69-6 6-6s6 2.69 6 6c0 3.31-2.69 6-6 6z"/></svg>`,
    color: "#3b82f6",
    words: [
      { word: "Chemistry", ipa: "[ˈkemɪstri]", translation: { ru: "Химия", ua: "Хімія" }, emoji: "🧪", example: "We do experiments in chemistry class.", exampleTranslation: { ru: "Мы проводим опыты на уроке химии.", ua: "Ми проводимо досліди на уроці хімії." } },
      { word: "Biology", ipa: "[baɪˈɑːlədʒi]", translation: { ru: "Биология", ua: "Біологія" }, emoji: "🦠", example: "Biology teaches us about living organisms.", exampleTranslation: { ru: "Биология учит нас живым организмам.", ua: "Біологія вчить нас живим організмам." } },
      { word: "Textbook", ipa: "[ˈtekstbʊk]", translation: { ru: "Учебник", ua: "Підручник" }, emoji: "📘", example: "Don't forget your English textbook.", exampleTranslation: { ru: "Не забудь свой учебник по английскому.", ua: "Не забудь свій підручник з англійської." } },
      { word: "Experiment", ipa: "[ɪkˈsperɪmənt]", translation: { ru: "Эксперимент / Опыт", ua: "Експеримент / Дослід" }, emoji: "⚗️", example: "We showed a cool volcanic experiment.", exampleTranslation: { ru: "Мы показали крутой эксперимент с вулканом.", ua: "Ми показали крутий експеримент з вулканом." } },
      { word: "Calculator", ipa: "[ˈkælkjuleɪtər]", translation: { ru: "Калькулятор", ua: "Калькулятор" }, emoji: "🧮", example: "Use a calculator to solve math equations.", exampleTranslation: { ru: "Используйте калькулятор для решения уравнений.", ua: "Використовуйте калькулятор для розв'язання рівнянь." } },
      { word: "Geometry", ipa: "[dʒiˈɑːmətri]", translation: { ru: "Геометрия", ua: "Геометрія" }, emoji: "📐", example: "Geometry deals with shapes and angles.", exampleTranslation: { ru: "Геометрия изучает фигуры и углы.", ua: "Геометрія вивчає фігури та кути." } },
      { word: "Knowledge", ipa: "[ˈnɑːlɪdʒ]", translation: { ru: "Знания / Знание", ua: "Знання / Знання" }, emoji: "🧠", example: "Reading books is a way to gain knowledge.", exampleTranslation: { ru: "Чтение книг — способ получить знания.", ua: "Читання книг — спосіб отримати знання." } },
      { word: "Notebook", ipa: "[ˈnəʊtbʊk]", translation: { ru: "Тетрадь", ua: "Зошит" }, emoji: "📓", example: "Write your homework in your notebook.", exampleTranslation: { ru: "Запиши домашнее задание в тетрадь.", ua: "Запиши домашнє завдання в зошит." } }
    ]
  },
  {
    id: "grammar_tenses",
    title: { ru: "Грамматика: Времена Simple vs Continuous", ua: "Граматика: Часи Simple vs Continuous" },
    description: { ru: "Разница между Present Simple (привычки) и Present Continuous (сейчас).", ua: "Різниця між Present Simple (звички) та Present Continuous (зараз)." },
    difficulty: "Grammar",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>`,
    color: "#ec4899",
    words: [
      { word: "Present Simple", ipa: "[rule: daily habits]", translation: { ru: "Subject + Verb(s) (для регулярных привычек)", ua: "Subject + Verb(s) (для регулярних звичок)" }, emoji: "⏰", example: "I walk to school every day.", exampleTranslation: { ru: "Я хожу в школу каждый день.", ua: "Я ходжу до школи кожен день." } },
      { word: "Present Continuous", ipa: "[rule: happening now]", translation: { ru: "Subject + am/is/are + Verb-ing (действие сейчас)", ua: "Subject + am/is/are + Verb-ing (дія зараз)" }, emoji: "⏳", example: "I am writing an English test now.", exampleTranslation: { ru: "Я пишу тест по английскому сейчас.", ua: "Я пишу тест з англійської зараз." } },
      { word: "Usually & Always", ipa: "[adverbs of frequency]", translation: { ru: "Обычно и Всегда (маркеры Present Simple)", ua: "Зазвичай та Завжди (маркери Present Simple)" }, emoji: "🔄", example: "She always speaks English at home.", exampleTranslation: { ru: "Она всегда говорит по-английски дома.", ua: "Вона завжди говорить англійською вдома." } },
      { word: "Now & At the moment", ipa: "[time markers of Continuous]", translation: { ru: "Сейчас и В данный момент (маркеры Continuous)", ua: "Зараз та В даний момент (маркери Continuous)" }, emoji: "⏱️", example: "Listen! The birds are singing at the moment.", exampleTranslation: { ru: "Слушай! Птицы поют в данный момент.", ua: "Слухай! Птахи співають в даний момент." } },
      { word: "State Verbs", ipa: "[know, love, want - no -ing]", translation: { ru: "Глаголы состояния (не имеют окончания -ing)", ua: "Дієслова стану (не мають закінчення -ing)" }, emoji: "🧠", example: "I want a sandwich, I know the answer.", exampleTranslation: { ru: "Я хочу сэндвич, я знаю ответ.", ua: "Я хочу сендвіч, я знаю відповідь." } },
      { word: "He/She/It + S rule", ipa: "[verbs ending in S/ES]", translation: { ru: "Окончание -S глагола для He/She/It в Simple", ua: "Закінчення -S дієслова для He/She/It в Simple" }, emoji: "✏️", example: "He runs fast, but they run slowly.", exampleTranslation: { ru: "Он бегает быстро, но они бегают медленно.", ua: "Він бігає швидко, а вони бігають повільно." } },
      { word: "Don't & Doesn't", ipa: "[helpers for negative Simple]", translation: { ru: "Отрицания Don't (I/We) / Doesn't (He/She)", ua: "Заперечення Don't (I/We) / Doesn't (He/She)" }, emoji: "🚫", example: "She doesn't like milk. We don't play chess.", exampleTranslation: { ru: "Ей не нравится молоко. Мы не играем в шахматы.", ua: "Їй не подобається молоко. Ми не граємо в шахи." } },
      { word: "Continuous Questions", ipa: "[Am/Is/Are + Subject + -ing]", translation: { ru: "Вопросы в Continuous: Глагол to be на первом месте", ua: "Питання в Continuous: Дієслово to be на першому місці" }, emoji: "❓", example: "Are you watching a film right now?", exampleTranslation: { ru: "Ты смотришь фильм прямо сейчас?", ua: "Ти дивишся фільм прямо зараз?" } }
    ]
  },
  {
    id: "grammar_articles",
    title: { ru: "Грамматика: Артикли и Местоимения", ua: "Граматика: Артиклі та Займенники" },
    description: { ru: "Правила использования артиклей a/an/the и различных местоимений.", ua: "Правила використання артиклів a/an/the та різних займенників." },
    difficulty: "Grammar",
    icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>`,
    color: "#10b981",
    words: [
      { word: "Article A / AN", ipa: "[singular countable nouns]", translation: { ru: "Артикль A (перед согласными) / AN (перед гласными)", ua: "Артикль A (перед приголосними) / AN (перед голосними)" }, emoji: "🍏", example: "I want an apple and a banana.", exampleTranslation: { ru: "Я хочу яблоко и банан.", ua: "Я хочу яблуко і банан." } },
      { word: "Article THE", ipa: "[specific, unique nouns]", translation: { ru: "Определенный артикль THE (конкретный, известный предмет)", ua: "Означений артикль THE (конкретний, відомий предмет)" }, emoji: "🌍", example: "Look at the moon. The car is blue.", exampleTranslation: { ru: "Посмотри на луну. Машина синяя.", ua: "Подивися на місяць. Машина синя." } },
      { word: "Subject Pronouns", ipa: "[I, you, he, she, it, we, they]", translation: { ru: "Личные местоимения (выполняют действие: Кто?)", ua: "Особові займенники (виконують дію: Хто?)" }, emoji: "🧑", example: "They are students and she is a doctor.", exampleTranslation: { ru: "Они студенты, а она врач.", ua: "Вони студенти, а вона лікар." } },
      { word: "Object Pronouns", ipa: "[me, you, him, her, it, us, them]", translation: { ru: "Объектные местоимения (Кого? Кому? на кого направлено действие)", ua: "Об'єктні займенники (Кого? Кому? на кого спрямована дія)" }, emoji: "👉", example: "Listen to me! Give it to him.", exampleTranslation: { ru: "Послушай меня! Дай это ему.", ua: "Послухай мене! Дай це йому." } },
      { word: "Possessive Adjectives", ipa: "[my, your, his, her, its, our, their]", translation: { ru: "Притяжательные прилагательные (Чей? перед существительным)", ua: "Присвійні прикметники (Чий? перед іменником)" }, emoji: "🏠", example: "This is my house and that is their dog.", exampleTranslation: { ru: "Это мой дом, а то их собака.", ua: "Це мій будинок, а то їхній собака." } },
      { word: "Possessive Pronouns", ipa: "[mine, yours, his, hers, ours, theirs]", translation: { ru: "Притяжательные местоимения (Чей? заменяют существительное)", ua: "Присвійні займенники (Чий? замінюють іменник)" }, emoji: "🔑", example: "This key is mine, not yours.", exampleTranslation: { ru: "Этот ключ мой, а не твой.", ua: "Цей ключ мій, а не твій." } },
      { word: "Zero Article", ipa: "[plural, uncountable, general]", translation: { ru: "Нулевой артикль (множественное число, обобщения, имена)", ua: "Нульовий артикль (множина, загальні поняття, імена)" }, emoji: "🚫", example: "I like milk. Water is essential for life.", exampleTranslation: { ru: "Я люблю молоко. Вода необходима для жизни.", ua: "Я люблю молоко. Вода необхідна для життя." } },
      { word: "Reflexive Pronouns", ipa: "[myself, yourself, himself, ourselves]", translation: { ru: "Возвратные местоимения (себя, сам, самостоятельно)", ua: "Зворотні займенники (себе, сам, самостійно)" }, emoji: "🪞", example: "He cleaned the room by himself.", exampleTranslation: { ru: "Он убрал комнату сам.", ua: "Він прибрав кімнату сам." } }
    ]
  },
  {
    id: "traits",
    title: { ru: "Черты характера", ua: "Риси характеру" },
    description: { ru: "Слова, описывающие личность и поведение людей.", ua: "Слова, що описують особистість та поведінку людей." },
    difficulty: "Intermediate",
    icon: `<svg viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
    color: "#eab308",
    words: [
      { word: "friendly", ipa: "[ˈfrendli]", translation: { ru: "Дружелюбный", ua: "Дружелюбний" }, emoji: "🤝", example: "Our new classmate is very friendly.", exampleTranslation: { ru: "Наш новый одноклассник очень дружелюбный.", ua: "Наш новий однокласник дуже дружелюбний." } },
      { word: "unfriendly", ipa: "[ʌnˈfrendli]", translation: { ru: "Недружелюбный", ua: "Недружелюбний" }, emoji: "😠", example: "The clerk was cold and unfriendly.", exampleTranslation: { ru: "Продавец был холодным и недружелюбным.", ua: "Продавець був холодним і недружелюбним." } },
      { word: "shy", ipa: "[ʃaɪ]", translation: { ru: "Застенчивый", ua: "Сором'язливий" }, emoji: "🫣", example: "He is too shy to speak in public.", exampleTranslation: { ru: "Он слишком застенчивый, чтобы говорить на публике.", ua: "Він занадто сором'язливий, щоб виступати публічно." } },
      { word: "moody", ipa: "[ˈmuːdi]", translation: { ru: "Капризный / Смена настроения", ua: "Не в настрої / Зміна настрою" }, emoji: "😒", example: "Teenagers can be moody sometimes.", exampleTranslation: { ru: "Подростки иногда могут быть капризными.", ua: "Підлітки іноді можуть бути не в настрої." } },
      { word: "clever", ipa: "[ˈklevər]", translation: { ru: "Умный", ua: "Розумний" }, emoji: "🧠", example: "She is a clever girl who solves puzzles quickly.", exampleTranslation: { ru: "Она умная девочка, которая быстро решает головоломки.", ua: "Вона розумна дівчинка, яка швидко розгадує головоломки." } },
      { word: "selfish", ipa: "[ˈselfɪʃ]", translation: { ru: "Эгоистичный", ua: "Егоїст" }, emoji: "🍭", example: "Don't be selfish, share your sweets!", exampleTranslation: { ru: "Не будь эгоистичным, поделись конфетами!", ua: "Не будь егоїстом, поділися цукерками!" } },
      { word: "cheerful", ipa: "[ˈtʃɪrfl]", translation: { ru: "Жизнерадостный", ua: "Радісний" }, emoji: "😊", example: "She always has a cheerful smile on her face.", exampleTranslation: { ru: "У нее всегда жизнерадостная улыбка на лице.", ua: "У неї завжди радісна посмішка на обличчі." } },
      { word: "lazy", ipa: "[ˈleɪzi]", translation: { ru: "Ленивый", ua: "Ледачий" }, emoji: "🦥", example: "He is too lazy to do his homework.", exampleTranslation: { ru: "Он слишком ленивый, чтобы делать домашнюю работу.", ua: "Він занадто ледачий, щоб робити домашню роботу." } },
      { word: "stupid", ipa: "[ˈstuːpɪd]", translation: { ru: "Глупый / Неразумный", ua: "Нерозумний" }, emoji: "🤪", example: "It was a stupid mistake, ignore it.", exampleTranslation: { ru: "Это была глупая ошибка, забудь о ней.", ua: "Це була нерозумна помилка, забудь про неї." } },
      { word: "generous", ipa: "[ˈdʒenərəs]", translation: { ru: "Щедрый", ua: "Щедрий" }, emoji: "🎁", example: "Thank you for the generous gift!", exampleTranslation: { ru: "Спасибо за щедрый подарок!", ua: "Дякую за щедрий подарунок!" } },
      { word: "hard-working", ipa: "[ˌhɑːrd ˈwɜːrkɪŋ]", translation: { ru: "Трудолюбивый", ua: "Працьовитий" }, emoji: "🐝", example: "Hard-working students get good grades.", exampleTranslation: { ru: "Трудолюбивые ученики получают хорошие оценки.", ua: "Працьовиті учні отримують хороші оцінки." } },
      { word: "talkative", ipa: "[ˈtɔːkətɪv]", translation: { ru: "Разговорчивый", ua: "Балакучий" }, emoji: "🗣️", example: "She is talkative and loves sharing stories.", exampleTranslation: { ru: "Она разговорчивая и обожает делиться историями.", ua: "Вона балакуча і обожнює ділитися історіями." } }
    ]
  }
];

// Predefined interactive Quizzes for each topic (including both languages for questions)
const QUIZZES_DATA = {
  seasons: [
    {
      type: "choice",
      question: { ru: "Какое слово переводится как 'Время года'?", ua: "Яке слово перекладається як 'Пора року'?" },
      emoji: "📅",
      choices: ["Autumn", "Season", "Sunny", "Weather"],
      answer: "Season"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Осень':", ua: "Збери слово 'Осінь':" },
      emoji: "🍂",
      answer: "AUTUMN"
    },
    {
      type: "choice",
      question: { ru: "Вставь слово: 'It is a ______ day. Let's swim in the pool.'", ua: "Встав слово: 'It is a ______ day. Let's swim in the pool.'" },
      emoji: "☀️",
      choices: ["rainy", "winter", "sunny", "autumn"],
      answer: "sunny"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Погода':", ua: "Збери слово 'Погода':" },
      emoji: "🌤️",
      answer: "WEATHER"
    },
    {
      type: "choice",
      question: { ru: "Какое время года самое холодное?", ua: "Яка пора року найхолодніша?" },
      emoji: "❄️",
      choices: ["Summer", "Spring", "Autumn", "Winter"],
      answer: "Winter"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Весна':", ua: "Збери слово 'Весна':" },
      emoji: "🌱",
      answer: "SPRING"
    },
    {
      type: "choice",
      question: { ru: "Как переводится слово 'Rainy'?", ua: "Як перекладається слово 'Rainy'?" },
      emoji: "🌧️",
      choices: ["Солнечный / Сонячний", "Теплый / Теплий", "Дождливый / Дощовий", "Облачный / Хмарний"],
      answer: "Дождливый / Дощовий"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Лето':", ua: "Збери слово 'Літо':" },
      emoji: "☀️",
      answer: "SUMMER"
    }
  ],
  colors: [
    {
      type: "choice",
      question: { ru: "Какой оттенок описывает слово 'Turquoise'?", ua: "Який відтінок описує слово 'Turquoise'?" },
      emoji: "💎",
      choices: ["Малиновый / Малиновий", "Бирюзовый / Бірюзовий", "Темно-серый / Темно-сірий", "Пастельный / Пастельний"],
      answer: "Бирюзовый / Бірюзовий"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Радуга':", ua: "Збери слово 'Веселка':" },
      emoji: "🌈",
      answer: "RAINBOW"
    },
    {
      type: "choice",
      question: { ru: "Для чего используется 'palette' в искусстве?", ua: "Для чого використовується 'palette' в мистецтві?" },
      emoji: "🎨",
      choices: ["Для заточки карандашей / олівців", "Для смешивания красок / фарб", "Для рамок картин", "Для очистки кистей / пензлів"],
      answer: "Для смешивания красок / фарб"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Фиолетовый':", ua: "Збери слово 'Фіолетовий':" },
      emoji: "🪻",
      answer: "VIOLET"
    },
    {
      type: "choice",
      question: { ru: "Какой цвет на английском называется 'Crimson'?", ua: "Який колір англійською називається 'Crimson'?" },
      emoji: "🍒",
      choices: ["Черный / Чорний", "Малиновый / Малиновий", "Серый / Сірий", "Салатовый / Салатовий"],
      answer: "Малиновый / Малиновий"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Штриховка / Растушевка':", ua: "Збери слово 'Штрихування / Розтушовування':" },
      emoji: "✏️",
      answer: "SHADING"
    },
    {
      type: "choice",
      question: { ru: "Какое слово описывает нежные светлые тона?", ua: "Яке слово описує ніжні світлі тони?" },
      emoji: "🌸",
      choices: ["Charcoal", "Pastel", "Crimson", "Violet"],
      answer: "Pastel"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Угольный':", ua: "Збери слово 'Вугільний':" },
      emoji: "🖤",
      answer: "CHARCOAL"
    }
  ],
  family: [
    {
      type: "choice",
      question: { ru: "Кто такие 'Siblings'?", ua: "Хто такі 'Siblings'?" },
      emoji: "👦👧",
      choices: ["Двоюродные братья / двоюрідні брати", "Родные братья и сестры / Рідні брати та сестри", "Родители / Батьки", "Родственники / Родичі"],
      answer: "Родные братья и сестры / Рідні брати та сестри"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Родители':", ua: "Збери слово 'Батьки':" },
      emoji: "👩‍👦‍👦",
      answer: "PARENTS"
    },
    {
      type: "choice",
      question: { ru: "Какое слово означает близких родственников в общем?", ua: "Яке слово означає родичів взагалі?" },
      emoji: "👵👴",
      choices: ["Relatives", "Siblings", "Friends", "Parents"],
      answer: "Relatives"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Дружба':", ua: "Збери слово 'Дружба':" },
      emoji: "🤝",
      answer: "FRIENDSHIP"
    },
    {
      type: "choice",
      question: { ru: "Вставь слово: 'Three ______ of this family live in the house.'", ua: "Встав слово: 'Three ______ of this family live in the house.'" },
      emoji: "⏳",
      choices: ["childhoods", "generations", "friendships", "supports"],
      answer: "generations"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Поддержка':", ua: "Збери слово 'Підтримка':" },
      emoji: "❤️",
      answer: "SUPPORT"
    },
    {
      type: "choice",
      question: { ru: "Как на английском будет слово 'Детство'?", ua: "Як англійською буде слово 'Дитинство'?" },
      emoji: "🪁",
      choices: ["Children", "Childhood", "Friends", "Honesty"],
      answer: "Childhood"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Честность':", ua: "Збери слово 'Честність':" },
      emoji: "😇",
      answer: "HONESTY"
    }
  ],
  objects: [
    {
      type: "choice",
      question: { ru: "Как переводится слово 'Backpack'?", ua: "Як перекладається слово 'Backpack'?" },
      emoji: "🎒",
      choices: ["Зеркало / Дзеркало", "Шкаф / Шафа", "Рюкзак / Рюкзак", "Наушники / Навушники"],
      answer: "Рюкзак / Рюкзак"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Наушники':", ua: "Збери слово 'Навушники':" },
      emoji: "🎧",
      answer: "HEADPHONES"
    },
    {
      type: "choice",
      question: { ru: "Какой предмет отражает лицо человека?", ua: "Який предмет відображає обличчя людини?" },
      emoji: "🪞",
      choices: ["Bookshelf", "Device", "Blanket", "Mirror"],
      answer: "Mirror"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Устройство':", ua: "Збери слово 'Пристрій':" },
      emoji: "📱",
      answer: "DEVICE"
    },
    {
      type: "choice",
      question: { ru: "Куда вешают пальто и куртки?", ua: "Куди вішають пальто та куртки?" },
      emoji: "🧥",
      choices: ["In the bookshelf", "In the wardrobe", "Under the blanket", "On the mirror"],
      answer: "In the wardrobe"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Ключ':", ua: "Збери слово 'Ключ':" },
      emoji: "🔑",
      answer: "KEY"
    },
    {
      type: "choice",
      question: { ru: "Как переводится слово 'Blanket'?", ua: "Як перекладається слово 'Blanket'?" },
      emoji: "🛌",
      choices: ["Одеяло / Ковдра", "Шкаф / Шафа", "Полка / Полиця", "Прибор / Пристрій"],
      answer: "Одеяло / Ковдра"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Книжная полка':", ua: "Збери слово 'Книжкова полиця':" },
      emoji: "📚",
      answer: "BOOKSHELF"
    }
  ],
  hobbies: [
    {
      type: "choice",
      question: { ru: "Как называется увлечение фотографированием?", ua: "Як називається захоплення фотографуванням?" },
      emoji: "📷",
      choices: ["Painting", "Adventure", "Photography", "Cycling"],
      answer: "Photography"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Приключение':", ua: "Збери слово 'Пригода':" },
      emoji: "🗺️",
      answer: "ADVENTURE"
    },
    {
      type: "choice",
      question: { ru: "Какое занятие связано с ездой на велосипеде?", ua: "Яке заняття пов'язане з їздою на велосипеді?" },
      emoji: "🚴",
      choices: ["Gaming", "Cycling", "Cooking", "Gardening"],
      answer: "Cycling"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Живопись':", ua: "Збери слово 'Живопис':" },
      emoji: "🎨",
      answer: "PAINTING"
    },
    {
      type: "choice",
      question: { ru: "Вставь слово: 'Baking cookies is my favorite ______ activity.'", ua: "Встав слово: 'Baking cookies is my favorite ______ activity.'" },
      emoji: "🍳",
      choices: ["gardening", "gaming", "cycling", "cooking"],
      answer: "cooking"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Путешествие':", ua: "Збери слово 'Подорож':" },
      emoji: "✈️",
      answer: "TRAVEL"
    },
    {
      type: "choice",
      question: { ru: "Какое хобби включает выращивание цветов и уход за садом?", ua: "Яке хоббі включає вирощування квітів та догляд за садом?" },
      emoji: "🏡",
      choices: ["Gardening", "Gaming", "Photography", "Painting"],
      answer: "Gardening"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Гейминг':", ua: "Збери слово 'Геймінг':" },
      emoji: "🎮",
      answer: "GAMING"
    }
  ],
  school: [
    {
      type: "choice",
      question: { ru: "Какой школьный предмет переводится как 'Химия'?", ua: "Який шкільний предмет перекладається як 'Хімія'?" },
      emoji: "🧪",
      choices: ["Biology", "Geometry", "Chemistry", "Textbook"],
      answer: "Chemistry"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Биология':", ua: "Збери слово 'Біологія':" },
      emoji: "🦠",
      answer: "BIOLOGY"
    },
    {
      type: "choice",
      question: { ru: "Какую учебную книгу школьники используют на уроках?", ua: "Яку навчальну книгу школярі використовують на уроках?" },
      emoji: "📘",
      choices: ["Notebook", "Textbook", "Calculator", "Experiment"],
      answer: "Textbook"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Эксперимент':", ua: "Збери слово 'Експеримент':" },
      emoji: "⚗️",
      answer: "EXPERIMENT"
    },
    {
      type: "choice",
      question: { ru: "Какое электронное устройство помогает быстро считать на математике?", ua: "Який електронний пристрій допомагає швидко рахувати на математиці?" },
      emoji: "🧮",
      choices: ["Geometry", "Calculator", "Notebook", "Experiment"],
      answer: "Calculator"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Геометрия':", ua: "Збери слово 'Геометрія':" },
      emoji: "📐",
      answer: "GEOMETRY"
    },
    {
      type: "choice",
      question: { ru: "Как переводится слово 'Knowledge'?", ua: "Як перекладається слово 'Knowledge'?" },
      emoji: "🧠",
      choices: ["Тетрадь / Зошит", "Учебник / Підручник", "Знание / Знання", "Опыт / Дослід"],
      answer: "Знание / Знання"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Тетрадь':", ua: "Збери слово 'Зошит':" },
      emoji: "📓",
      answer: "NOTEBOOK"
    }
  ],
  grammar_tenses: [
    {
      type: "choice",
      question: { ru: "Вставь форму: 'She ______ (read) a book right now.'", ua: "Встав форму: 'She ______ (read) a book right now.'" },
      emoji: "⏳",
      choices: ["reads", "is reading", "are reading", "read"],
      answer: "is reading"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'ВСЕГДА' (наречие Simple):", ua: "Збери слово 'ЗАВЖДИ' (прислівник Simple):" },
      emoji: "🔄",
      answer: "ALWAYS"
    },
    {
      type: "choice",
      question: { ru: "Какой перевод верен: 'She always speaks English at home.'?", ua: "Який переклад вірний: 'She always speaks English at home.'?" },
      emoji: "🏡",
      choices: [
        "Она всегда говорит по-английски дома. / Вона завжди говорить англійською вдома.",
        "Она говорит по-английски прямо сейчас. / Вона говорить англійською прямо зараз.",
        "Она не говорит по-английски дома. / Вона не говорить англійською вдома.",
        "Она учит английский дома. / Вона вчить англійську вдома."
      ],
      answer: "Она всегда говорит по-английски дома. / Вона завжди говорить англійською вдома."
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'СЕЙЧАС' (маркер Continuous):", ua: "Збери слово 'ЗАРАЗ' (маркер Continuous):" },
      emoji: "⏱️",
      answer: "NOW"
    },
    {
      type: "choice",
      question: { ru: "Какой вариант грамматически верный?", ua: "Який варіант граматично вірний?" },
      emoji: "🧠",
      choices: ["I am wanting a sandwich.", "I want a sandwich.", "I wants a sandwich.", "I wanting a sandwich."],
      answer: "I want a sandwich."
    },
    {
      type: "spelling",
      question: { ru: "Собери вспомогательный глагол отрицания Simple для He/She/It:", ua: "Збери допоміжне дієслово заперечення Simple для He/She/It:" },
      emoji: "🚫",
      answer: "DOESNT"
    },
    {
      type: "choice",
      question: { ru: "Вставь форму: 'They ______ chess every Sunday.'", ua: "Встав форму: 'They ______ chess every Sunday.'" },
      emoji: "⏰",
      choices: ["play", "plays", "are playing", "playing"],
      answer: "play"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'ОБЫЧНО' (Usually):", ua: "Збери слово 'ЗАЗВИЧАЙ' (Usually):" },
      emoji: "🔄",
      answer: "USUALLY"
    }
  ],
  grammar_articles: [
    {
      type: "choice",
      question: { ru: "Вставь артикль: 'He wants ______ orange.'", ua: "Встав артикль: 'He wants ______ orange.'" },
      emoji: "🍏",
      choices: ["a", "an", "the", "zero article"],
      answer: "an"
    },
    {
      type: "spelling",
      question: { ru: "Собери личное местоимение 'ОНИ' (They):", ua: "Збери особовий займенник 'ВОНИ' (They):" },
      emoji: "🧑",
      answer: "THEY"
    },
    {
      type: "choice",
      question: { ru: "Какое предложение грамматически верное?", ua: "Яке речення граматично вірне?" },
      emoji: "🔑",
      choices: ["This key is my.", "This key is mine.", "This key is me.", "This key is mine key."],
      answer: "This key is mine."
    },
    {
      type: "spelling",
      question: { ru: "Собери местоимение 'ТВОЙ / ВАШ' (Your):", ua: "Збери займенник 'ТВІЙ / ВАШ' (Your):" },
      emoji: "👉",
      answer: "YOUR"
    },
    {
      type: "choice",
      question: { ru: "Вставь объектное местоимение: 'Listen to ______ (я).'", ua: "Встав об'єктний займенник: 'Listen to ______ (я).'" },
      emoji: "👉",
      choices: ["I", "me", "my", "mine"],
      answer: "me"
    },
    {
      type: "spelling",
      question: { ru: "Собери возвратное местоимение 'САМ / СЕБЯ' для Него (Himself):", ua: "Збери зворотний займенник 'САМ / СЕБЕ' для Нього (Himself):" },
      emoji: "🪞",
      answer: "HIMSELF"
    },
    {
      type: "choice",
      question: { ru: "Вставь артикль: 'Look at ______ moon. It is beautiful.'", ua: "Встав артикль: 'Look at ______ moon. It is beautiful.'" },
      emoji: "🌍",
      choices: ["a", "an", "the", "zero article"],
      answer: "the"
    },
    {
      type: "spelling",
      question: { ru: "Собери личное местоимение 'МЫ' (We):", ua: "Збери особовий займенник 'МИ' (We):" },
      emoji: "🧑‍🤝‍🧑",
      answer: "WE"
    }
  ],
  traits: [
    {
      type: "choice",
      question: { ru: "Как переводится слово 'shy'?", ua: "Як перекладається слово 'shy'?" },
      emoji: "🫣",
      choices: ["Трудолюбивый / Працьовитий", "Застенчивый / Сором'язливий", "Эгоистичный / Егоїст", "Щедрый / Щедрий"],
      answer: "Застенчивый / Сором'язливий"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Умный':", ua: "Збери слово 'Розумний':" },
      emoji: "🧠",
      answer: "CLEVER"
    },
    {
      type: "choice",
      question: { ru: "Какое слово противоположно по смыслу дружелюбному (friendly)?", ua: "Яке слово протилежне за значенням до дружелюбного (friendly)?" },
      emoji: "😠",
      choices: ["cheerful", "lazy", "talkative", "unfriendly"],
      answer: "unfriendly"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Ленивый':", ua: "Збери слово 'Ледачий':" },
      emoji: "🦥",
      answer: "LAZY"
    },
    {
      type: "choice",
      question: { ru: "Как называют человека, который не хочет делиться вещами с другими?", ua: "Як називають людину, яка не хоче ділитися речами з іншими?" },
      emoji: "🍭",
      choices: ["generous", "selfish", "hard-working", "clever"],
      answer: "selfish"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Щедрый':", ua: "Збери слово 'Щедрий':" },
      emoji: "🎁",
      answer: "GENEROUS"
    },
    {
      type: "choice",
      question: { ru: "Вставь слово: 'My friend talks all day. She is very ______.'", ua: "Встав слово: 'My friend talks all day. She is very ______.'" },
      emoji: "🗣️",
      choices: ["moody", "lazy", "talkative", "shy"],
      answer: "talkative"
    },
    {
      type: "spelling",
      question: { ru: "Собери слово 'Веселый':", ua: "Збери слово 'Радісний':" },
      emoji: "😊",
      answer: "CHEERFUL"
    }
  ]
};

// Achievement data with localized text
const ACHIEVEMENTS = [
  { id: "first_step", title: { ru: "Первый шаг", ua: "Перший крок" }, desc: { ru: "Пройти свой первый тест", ua: "Пройти свій перший тест" }, emoji: "🏁", condition: (stats) => stats.quizzesCompleted >= 1 },
  { id: "perfect_score", title: { ru: "Отличник", ua: "Відмінник" }, desc: { ru: "Сдать любой тест на 100% правильно", ua: "Здати будь-який тест на 100% правильно" }, emoji: "🏆", condition: (stats) => stats.hasPerfectScore },
  { id: "xp_collector", title: { ru: "Собиратель опыта", ua: "Збирач досвіду" }, desc: { ru: "Набрать суммарно 500 XP", ua: "Набрати сумарно 500 XP" }, emoji: "🔮", condition: (stats) => stats.totalXp >= 500 },
  { id: "streak_hero", title: { ru: "На волне", ua: "На хвилі" }, desc: { ru: "Поддерживать ударный режим 3 дня", ua: "Підтримувати ударний режим 3 дні" }, emoji: "🔥", condition: (stats) => stats.streakDays >= 3 },
  { id: "seasons_champ", title: { ru: "Повелитель стихий", ua: "Повелитель стихій" }, desc: { ru: "Пройти тест по Временам Года", ua: "Пройти тест по Порам Року" }, emoji: "☀️", condition: (stats) => stats.completedTopics.includes("seasons") },
  { id: "colors_master", title: { ru: "Мастер цвета", ua: "Майстер кольору" }, desc: { ru: "Пройти тест по Цветам и Искусству", ua: "Пройти тест по Кольорам та Мистецтву" }, emoji: "🎨", condition: (stats) => stats.completedTopics.includes("colors") },
  { id: "family_expert", title: { ru: "Хранитель традиций", ua: "Охоронець традицій" }, desc: { ru: "Пройти тест по Семье и Отношениям", ua: "Пройти тест по Родині та Стосункам" }, emoji: "❤️", condition: (stats) => stats.completedTopics.includes("family") },
  { id: "objects_guru", title: { ru: "Знаток вещей", ua: "Знавець речей" }, desc: { ru: "Пройти тест по Дому и Предметам", ua: "Пройти тест по Дому та Предметам" }, emoji: "🎒", condition: (stats) => stats.completedTopics.includes("objects") },
  { id: "hobbies_explorer", title: { ru: "Искатель приключений", ua: "Шукач пригод" }, desc: { ru: "Пройти тест по Увлечениям", ua: "Пройти тест по Захопленням" }, emoji: "🗺️", condition: (stats) => stats.completedTopics.includes("hobbies") },
  { id: "science_genius", title: { ru: "Юный гений", ua: "Юний геній" }, desc: { ru: "Пройти тест по Школе и Науке", ua: "Пройти тест по Школі та Науці" }, emoji: "🧪", condition: (stats) => stats.completedTopics.includes("school") },
  { id: "grammar_master", title: { ru: "Магистр грамматики", ua: "Магістр граматики" }, desc: { ru: "Пройти грамматический тест", ua: "Пройти граматичний тест" }, emoji: "🧠", condition: (stats) => stats.completedTopics.includes("grammar_tenses") || stats.completedTopics.includes("grammar_articles") },
  { id: "traits_expert", title: { ru: "Психолог", ua: "Психолог" }, desc: { ru: "Пройти тест по Чертам характера", ua: "Пройти тест по Рисах характеру" }, emoji: "🧑‍⚕️", condition: (stats) => stats.completedTopics.includes("traits") }
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
    this.playTone(523.25, 0.15, "sine", 0);
    this.playTone(659.25, 0.15, "sine", 0.08);
    this.playTone(783.99, 0.15, "sine", 0.16);
    this.playTone(1046.50, 0.35, "sine", 0.24);
  },

  playError() {
    this.playTone(180, 0.4, "sawtooth", 0);
    this.playTone(150, 0.4, "sawtooth", 0.1);
  },

  playClick() {
    this.playTone(600, 0.05, "sine");
  },

  playFlip() {
    this.playTone(300, 0.15, "triangle");
  },

  playWin() {
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
    currentLang: "ru",
    currentTopic: null,
    
    studyIndex: 0,
    
    quizIndex: 0,
    quizScore: 0,
    quizXp: 0,
    quizTimeStart: null,
    quizQuestions: [],
    
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

  spellingState: {
    answer: "",
    scrambled: [],
    currentGuess: [],
    tileMap: {}
  },

  init() {
    this.loadLang();
    this.loadStats();
    this.setupListeners();
    this.applyTheme();
    this.checkStreak();
    this.updateLanguageUI(); // Update UI translations
    
    window.addEventListener("resize", () => {
      const canvas = document.getElementById("confetti-canvas");
      if (canvas && canvas.width !== window.innerWidth) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    });
  },

  // Lang Persistence
  loadLang() {
    const saved = localStorage.getItem("lingokids_lang");
    if (saved === "ru" || saved === "ua") {
      this.state.currentLang = saved;
    } else {
      // Auto-detect browser locale
      const locale = navigator.language || navigator.userLanguage;
      if (locale.startsWith("uk") || locale.startsWith("ua")) {
        this.state.currentLang = "ua";
      } else {
        this.state.currentLang = "ru";
      }
    }
  },

  toggleLanguage() {
    this.state.currentLang = this.state.currentLang === "ru" ? "ua" : "ru";
    localStorage.setItem("lingokids_lang", this.state.currentLang);
    AudioEngine.playClick();
    this.updateLanguageUI();
  },

  updateLanguageUI() {
    const lang = this.state.currentLang;
    const dict = I18N[lang];

    // Loop through data-i18n attributes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Set buttons inner labels and headers
    document.getElementById("btn-lang-toggle").textContent = dict.lang_btn_text;
    document.getElementById("tooltip-xp-title").title = dict.tooltip_xp;
    document.getElementById("tooltip-streak-title").title = dict.tooltip_streak;

    // Refresh Active Page Contents
    const activePage = this.state.currentPage;
    if (activePage === "dashboard") {
      this.renderTopics();
    } else if (activePage === "study") {
      document.getElementById("study-topic-title").textContent = this.state.currentTopic.title[lang];
      this.renderFlashcard();
    } else if (activePage === "achievements") {
      this.renderAchievements();
    } else if (activePage === "quiz") {
      // Re-fill question content based on language
      const qObj = this.state.quizQuestions[this.state.quizIndex];
      if (qObj) {
        document.getElementById("quiz-question-type-text").textContent = 
          qObj.type === "choice" ? dict.quiz_type_choice : dict.quiz_type_spelling;
        document.getElementById("quiz-question-content").textContent = qObj.question[lang];
      }
    }

    this.updateHeaderStats();
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
    const lang = this.state.currentLang;
    document.getElementById("header-xp").textContent = this.state.userStats.totalXp;
    document.getElementById("header-streak").textContent = this.state.userStats.streakDays;
  },

  checkStreak() {
    const stats = this.state.userStats;
    const today = new Date().toDateString();
    const lang = this.state.currentLang;
    
    if (stats.lastActiveDate) {
      const lastDate = new Date(stats.lastActiveDate);
      const diffTime = Math.abs(new Date(today) - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays === 1) {
        stats.streakDays += 1;
        this.showToast(I18N[lang].toast_streak + stats.streakDays + " " + I18N[lang].streak_days_label);
      } else if (diffDays > 1) {
        stats.streakDays = 1;
      }
    } else {
      stats.streakDays = 1;
    }
    
    stats.lastActiveDate = today;
    this.saveStats();
  },

  applyTheme() {
    document.body.setAttribute("data-theme", this.state.theme);
    const themeSvg = document.getElementById("theme-svg-path");
    if (this.state.theme === "light") {
      themeSvg.setAttribute("d", "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z");
    } else {
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
      document.querySelector(".section-title").scrollIntoView({ behavior: "smooth" });
    });

    // Theme, Sound & Language toggles
    document.getElementById("btn-theme-toggle").addEventListener("click", () => {
      this.state.theme = this.state.theme === "dark" ? "light" : "dark";
      this.applyTheme();
      AudioEngine.playClick();
    });

    document.getElementById("btn-sound-toggle").addEventListener("click", () => {
      AudioEngine.enabled = !AudioEngine.enabled;
      const soundSvg = document.getElementById("sound-svg-path");
      if (AudioEngine.enabled) {
        soundSvg.setAttribute("d", "M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-2.5 2.27L6.5 10H2v4h4.5l5 4.5V5.5z");
        AudioEngine.playClick();
      } else {
        soundSvg.setAttribute("d", "M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.21.05-.42.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H2v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 5.89 12 7.98V4z");
      }
    });

    document.getElementById("btn-lang-toggle").addEventListener("click", () => {
      this.toggleLanguage();
    });

    // Study View controls
    document.getElementById("btn-study-back").addEventListener("click", () => {
      AudioEngine.playClick();
      this.navigateTo("dashboard");
    });

    const flashcard = document.getElementById("flashcard-element");
    flashcard.addEventListener("click", (e) => {
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

    // Quiz controls
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
    const lang = this.state.currentLang;

    TOPICS_DATA.forEach((topic) => {
      const stats = this.state.userStats;
      const completedCount = stats.completedTopics.filter(t => t === topic.id).length;
      const percent = completedCount > 0 ? 100 : 0;

      const card = document.createElement("div");
      card.className = "topic-card";
      card.style.setProperty("--card-accent", topic.color);
      
      let diffLabel = "";
      if (topic.difficulty === "Elementary") {
        diffLabel = I18N[lang].difficulty_elementary;
      } else if (topic.difficulty === "Intermediate") {
        diffLabel = I18N[lang].difficulty_intermediate;
      } else {
        diffLabel = I18N[lang].difficulty_grammar;
      }

      card.innerHTML = `
        <div class="topic-header">
          <div class="topic-icon">${topic.icon}</div>
          <span class="topic-difficulty">${diffLabel}</span>
        </div>
        <div class="topic-info">
          <h3>${topic.title[lang]}</h3>
          <p>${topic.description[lang]}</p>
        </div>
        <div class="topic-progress-container">
          <div class="topic-progress-bar">
            <div class="topic-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <div class="topic-progress-text">
            <span>${topic.difficulty === "Grammar" ? (lang === "ru" ? "Правил" : "Правил") : (lang === "ru" ? "Карточек" : "Карток")}: ${topic.words.length}</span>
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
    document.querySelectorAll("nav a.nav-link").forEach((link) => {
      if (link.getAttribute("data-page") === pageId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

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
    
    document.getElementById("study-topic-title").textContent = topic.title[this.state.currentLang];
    this.renderFlashcard();
    this.navigateTo("study");
  },

  renderFlashcard() {
    const topic = this.state.currentTopic;
    const wordInfo = topic.words[this.state.studyIndex];
    const flashcard = document.getElementById("flashcard-element");
    const lang = this.state.currentLang;
    
    flashcard.classList.remove("flipped");

    document.getElementById("card-emoji").textContent = wordInfo.emoji;
    document.getElementById("card-english-word").textContent = wordInfo.word;
    document.getElementById("card-ipa").textContent = wordInfo.ipa;

    // Use current language for translations
    document.getElementById("card-russian-translation").textContent = wordInfo.translation[lang];
    document.getElementById("card-english-example").textContent = `"${wordInfo.example}"`;
    document.getElementById("card-russian-example").textContent = `"${wordInfo.exampleTranslation[lang]}"`;

    document.getElementById("study-current-index").textContent = this.state.studyIndex + 1;
    document.getElementById("study-total-count").textContent = topic.words.length;

    // Pronounce automatically if it's an English vocabulary word, skip grammar rules name complex speech
    setTimeout(() => {
      if (this.state.currentPage === "study" && this.state.studyIndex === topic.words.indexOf(wordInfo)) {
        if (topic.difficulty !== "Grammar" || wordInfo.word.split(" ").length <= 2) {
          this.speakWord(wordInfo.word);
        }
      }
    }, 400);
  },

  speakWord(text) {
    if (!AudioEngine.enabled) return;
    try {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "en-US";
        utterance.rate = 0.85;
        
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
    const lang = this.state.currentLang;
    const dict = I18N[lang];
    
    if (qIndex >= qList.length) {
      this.finishQuiz();
      return;
    }

    const questionObj = qList[qIndex];
    const progressPercent = (qIndex / qList.length) * 100;
    document.getElementById("quiz-progress-fill-element").style.width = `${progressPercent}%`;

    // Fill Question Text using current language
    document.getElementById("quiz-question-type-text").textContent = 
      questionObj.type === "choice" ? dict.quiz_type_choice : dict.quiz_type_spelling;
    
    document.getElementById("quiz-media-visual").textContent = questionObj.emoji;
    document.getElementById("quiz-question-content").textContent = questionObj.question[lang];

    const feedback = document.getElementById("quiz-feedback-text-element");
    feedback.className = "quiz-feedback-text";
    feedback.style.opacity = "0";

    const actBtn = document.getElementById("btn-quiz-action");
    actBtn.textContent = lang === "ru" ? "Проверить" : "Перевірити";
    actBtn.disabled = true;
    
    // Bind action
    actBtn.onclick = () => this.checkQuizAnswer();

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
        container.querySelectorAll(".choice-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        AudioEngine.playClick();
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

    for (let i = 0; i < answer.length; i++) {
      const slot = document.createElement("div");
      slot.className = "spelling-letter-slot";
      slot.dataset.index = i;
      
      slot.addEventListener("click", () => {
        if (slot.classList.contains("filled")) {
          const tileIdx = slot.dataset.tileIndex;
          this.removeLetterFromSpelling(i, tileIdx);
        }
      });

      slotsContainer.appendChild(slot);
    }

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
      slot.dataset.tileIndex = tileIndex;

      tileElement.classList.add("disabled");
      this.spellingState.tileMap[tileIndex] = tileElement;

      const isComplete = this.spellingState.currentGuess.every(l => l !== null);
      document.getElementById("btn-quiz-action").disabled = !isComplete;
    }
  },

  removeLetterFromSpelling(slotIndex, tileIndex) {
    AudioEngine.playClick();
    const slots = document.getElementById("spelling-slots-container").children;
    const slot = slots[slotIndex];
    
    this.spellingState.currentGuess[slotIndex] = null;
    slot.textContent = "";
    slot.classList.remove("filled");
    slot.removeAttribute("data-tile-index");

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

    document.getElementById("spelling-letters-choices").querySelectorAll(".letter-tile").forEach(tile => {
      tile.classList.remove("disabled");
    });

    document.getElementById("btn-quiz-action").disabled = true;
  },

  handleQuizAction() {
    // If the button is clicked while checking answer, check it. Otherwise trigger next.
    // This is controlled by what function is bound to onclick.
  },

  checkQuizAnswer() {
    const qList = this.state.quizQuestions;
    const qIndex = this.state.quizIndex;
    const questionObj = qList[qIndex];
    const lang = this.state.currentLang;
    
    let isCorrect = false;
    let selectedText = "";

    if (questionObj.type === "choice") {
      const selectedBtn = document.querySelector("#quiz-choices-container .choice-btn.selected");
      if (!selectedBtn) return;
      selectedText = selectedBtn.querySelector(".choice-text").textContent;
      isCorrect = selectedText === questionObj.answer;

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

    if (isCorrect) {
      AudioEngine.playSuccess();
      
      // Pronounce word if applicable
      const speakText = questionObj.type === "spelling" ? questionObj.answer : 
                        (questionObj.choices.indexOf(questionObj.answer) !== -1 && /^[a-zA-Z\s]+$/.test(questionObj.answer) ? questionObj.answer : null);
      if (speakText) {
        setTimeout(() => this.speakWord(speakText), 300);
      }

      this.state.quizScore++;
      this.state.quizXp += 10;
      document.getElementById("quiz-earned-xp").textContent = this.state.quizXp;
      
      const feedback = document.getElementById("quiz-feedback-text-element");
      feedback.textContent = I18N[lang].quiz_correct_feedback;
      feedback.className = "quiz-feedback-text correct";
    } else {
      AudioEngine.playError();
      const feedback = document.getElementById("quiz-feedback-text-element");
      feedback.textContent = I18N[lang].quiz_wrong_feedback + ` "${questionObj.answer}" ❌`;
      feedback.className = "quiz-feedback-text wrong";
    }

    // Change action button to "Continue"
    const actBtn = document.getElementById("btn-quiz-action");
    actBtn.textContent = lang === "ru" ? "Продолжить" : "Продовжити";
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
    const lang = this.state.currentLang;
    
    const timeDiff = Math.floor((new Date() - this.state.quizTimeStart) / 1000);
    const minutes = Math.floor(timeDiff / 60);
    const seconds = timeDiff % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const accuracy = Math.round((finalScore / qList.length) * 100);

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

    this.checkBadgesProgression();
    this.saveStats();

    // Fill Results UI
    document.getElementById("results-accuracy").textContent = `${accuracy}%`;
    document.getElementById("results-xp").textContent = `+${finalXp}`;
    document.getElementById("results-time").textContent = formattedTime;

    const emojiElement = document.getElementById("results-emoji");
    const titleElement = document.getElementById("results-title");
    const messageElement = document.getElementById("results-message");

    const textPack = I18N[lang];

    if (accuracy === 100) {
      emojiElement.textContent = "🏆";
      titleElement.textContent = textPack.results_perfect_title;
      messageElement.textContent = textPack.results_perfect_msg;
      AudioEngine.playWin();
      ConfettiEffect.start();
    } else if (accuracy >= 70) {
      emojiElement.textContent = "🌟";
      titleElement.textContent = textPack.results_good_title;
      messageElement.textContent = textPack.results_good_msg;
      AudioEngine.playWin();
      ConfettiEffect.start();
    } else {
      emojiElement.textContent = "👍";
      titleElement.textContent = textPack.results_try_title;
      messageElement.textContent = textPack.results_try_msg;
      AudioEngine.playTone(400, 0.5, "sine");
    }

    this.navigateTo("results");
  },

  // ================= ACHIEVEMENTS LOGIC =================
  checkBadgesProgression() {
    const stats = this.state.userStats;
    const lang = this.state.currentLang;
    let unlockedAny = false;

    ACHIEVEMENTS.forEach((badge) => {
      if (!stats.unlockedBadges.includes(badge.id)) {
        if (badge.condition(stats)) {
          stats.unlockedBadges.push(badge.id);
          unlockedAny = true;
          this.showToast(I18N[lang].toast_badge + `"${badge.title[lang]}"! 🏅`);
        }
      }
    });

    return unlockedAny;
  },

  renderAchievements() {
    const stats = this.state.userStats;
    const lang = this.state.currentLang;
    
    document.getElementById("stats-total-xp").textContent = stats.totalXp;
    document.getElementById("stats-quizzes-completed").textContent = stats.quizzesCompleted;
    document.getElementById("stats-streak-days").textContent = stats.streakDays;

    const accuracyRatio = stats.totalQuestionsAnswered > 0 
      ? Math.round((stats.correctAnswers / stats.totalQuestionsAnswered) * 100) 
      : 0;
    document.getElementById("stats-accuracy-avg").textContent = `${accuracyRatio}%`;

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
          <h4>${badge.title[lang]}</h4>
          <p>${badge.desc[lang]}</p>
        </div>
      `;

      grid.appendChild(card);
    });
  },

  showToast(message) {
    const toast = document.getElementById("toast-notification");
    document.getElementById("toast-message-text").textContent = message;
    
    toast.classList.add("show");
    AudioEngine.playSuccess();

    setTimeout(() => {
      toast.classList.remove("show");
    }, 4000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
