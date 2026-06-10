// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  ru: {
    nav_try: "Попробовать",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Реклама в Meta",
    hero_title_3: "пока вы работаете",
    hero_sub: "Расскажите о бизнесе — AI напишет объявления, настроит аудиторию и запустит кампанию. Без агентств, без курсов.",
    btn_start: "🚀 Начать бесплатно",
    btn_demo: "Смотреть как работает",
    chat_online: "● онлайн",
    cm1: "Привет! У меня кофейня в Варшаве",
    cm2: "Отлично! Что делает вашу кофейню особенной?",
    cm3: "Specialty coffee и авторские завтраки",
    cm4: "🔍 Анализирую нишу и конкурентов...",
    cm5a: "3 объявления написаны", cm5b: "Аудитория настроена", cm5c: "Оценка AI:",
    cm6: "🚀 Запустить в Meta",
    pb1: "В 10× быстрее агентства", pb2: "Экономия $500+ в месяц", pb3: "15 европейских языков", pb4: "Без доступа к вашему паролю",
    stat_1_num: "15", stat_1_label: "языков",
    stat_2_num: "3", stat_2_label: "AI-модели",
    stat_3_num: "15 мин", stat_3_label: "до первой кампании",
    stat_4_num: "$0", stat_4_label: "первая кампания",
    how_tag: "КАК ЭТО РАБОТАЕТ",
    how_title: "Три шага до запуска рекламы",
    how_sub: "Никаких агентств, никакой сложности. Просто расскажите о бизнесе.",
    step1_num: "ШАГ 1", step1_title: "Расскажите о бизнесе",
    step1_text: "Ответьте на вопросы AI-консультанта в Telegram. Что продаёте, кому, где. Занимает 5–10 минут.",
    step2_num: "ШАГ 2", step2_title: "AI создаёт кампанию",
    step2_text: "Claude, Gemini и GPT-4 соревнуются. Claude-ревьюер отбирает только объявления с оценкой 8+/10.",
    step3_num: "ШАГ 3", step3_title: "Запуск одним кликом",
    step3_text: "Нажмите «Запустить» — AdPilot создаст кампанию, группы объявлений и загрузит тексты в Meta.",
    res_tag: "ЧТО ВЫ ПОЛУЧАЕТЕ",
    res_title: "Конкретные результаты, не обещания",
    rcb1_before: "Раньше", rcb1_old: "4–6 часов", rcb1_new: "15 минут", rcb1_label: "на запуск кампании",
    rcb2_before: "Раньше", rcb2_old: "$500–2000/мес", rcb2_new: "$0 первая", rcb2_label: "стоимость запуска",
    rcb3_before: "Junior копирайтер", rcb3_old: "1–2 объявления", rcb3_new: "9+ вариантов", rcb3_label: "с оценкой 8+/10 по Ogilvy",
    rcb4_before: "Агентство", rcb4_old: "1 язык", rcb4_new: "15 языков", rcb4_label: "нативные тексты, не переводы",
    feat_tag: "ВОЗМОЖНОСТИ",
    feat_title: "Всё что нужно для умной рекламы",
    feat_sub: "Технологии Fortune 500 — теперь доступны каждому бизнесу",
    f1_title: "Три AI-модели соревнуются",
    f1_text: "Claude 4, Gemini и GPT-4 независимо пишут объявления. Claude-ревьюер оценивает по 8 критериям топ-копирайтеров мира. Проходят только 8+/10.",
    f2_title: "Умный таргетинг",
    f2_text: "Система знает 19 ниш бизнеса. Автоматически подбирает интересы, возраст, гео и оптимальный формат кампании для вашей аудитории.",
    f3_title: "15 языков нативно",
    f3_text: "Польский, английский, украинский, немецкий, французский и ещё 10 языков ЕС. Каждое объявление пишется нативно, а не переводится.",
    f4_title: "Коллективный AI-интеллект",
    f4_text: "Лучшие заголовки каждой ниши попадают в общий пул. Новые клиенты сразу получают проверенные формулы — система умнеет от каждой кампании.",
    f5_title: "A/B тест автоматически",
    f5_text: "Запускает 3 варианта с равным бюджетом. Через 7 дней AI определяет победителя и переводит весь бюджет на него — без вашего участия.",
    f6_title: "Авто-оптимизация",
    f6_text: "Бот ежедневно анализирует метрики. Плохой CPL — останавливает. Хороший ROAS — масштабирует. Ваш бюджет всегда работает на максимум.",
    score_tag: "КАЧЕСТВО ТЕКСТОВ",
    score_title: "Каждое объявление оценивается по 8 критериям",
    score_sub: "Методологии Ogilvy, Schwartz, Halbert, Sugarman — в одном AI-ревьюере",
    score_label: "Оценка объявления",
    score_pass: "✓ Прошло проверку",
    score_txt_title: "Только лучшие объявления доходят до вас",
    score_txt_sub: "Слабые тексты автоматически уходят на переработку. Вы видите только то, что реально работает в вашей нише.",
    c1: "Стоп-скролл (Ogilvy)", c2: "Симптом ЦА (Schwartz)", c3: "Язык клиента (VoC)", c4: "Скользкая горка (Sugarman)", c5: "Конкретная деталь (Carlton)", c6: "Оффер + причина (Hopkins)", c7: "Один человек (Halbert)", c8: "Соответствие Meta",
    sl1: "Слабые объявления отправляются на доработку автоматически",
    sl2: "Только варианты с оценкой 7.5+ попадают к вам",
    sl3: "Запрещённые клише и выдуманные факты отсекаются жёстко",
    sl4: "С каждым раундом система становится умнее",
    cmp_tag: "СРАВНЕНИЕ",
    cmp_title: "AdPilot vs Агентство vs Самостоятельно",
    cmp_sub: "Почему тысячи бизнесов выбирают AI-агента",
    ct_h0: "", ct_best: "Лучший выбор", ct_h2: "Агентство", ct_h3: "Своими силами",
    ct_r1: "Стоимость запуска", ct_r1a: "Бесплатно", ct_r1b: "$500–2000/мес", ct_r1c: "Бесплатно",
    ct_r2: "Время до запуска", ct_r2a: "15 минут", ct_r2b: "2–4 недели", ct_r2c: "3–5 часов",
    ct_r3: "Качество текстов", ct_r3a: "AI + 8 критериев", ct_r3b: "Зависит от исполнителя", ct_r3c: "Зависит от вас",
    ct_r4: "A/B тестирование", ct_r4a: "✓ Автоматически", ct_r4b: "Доп. оплата", ct_r4c: "Вручную",
    ct_r5: "Языки", ct_r5a: "15 нативно", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Работает 24/7", ct_r6a: "✓ Всегда", ct_r6b: "Рабочие часы", ct_r6c: "✗",
    trust_tag: "ТЕХНОЛОГИИ",
    trust_title: "Работает на лучших AI-моделях мира",
    t1_name: "Claude 4", t1_desc: "Главный ревьюер и стратег",
    t2_name: "Gemini", t2_desc: "Генерация вариантов",
    t3_name: "GPT-4", t3_desc: "Генерация вариантов",
    t4_name: "Meta API", t4_desc: "Автозапуск кампаний",
    tb1: "Ваш пароль не передаётся", tb2: "Данные защищены", tb3: "GDPR совместимо",
    faq_tag: "ВОПРОСЫ", faq_title: "Часто задаваемые вопросы",
    faq1_q: "Нужны ли технические знания для работы с AdPilot?",
    faq1_a: "Нет. Вся работа ведётся через обычный Telegram-чат. Вы просто отвечаете на вопросы, как при разговоре с консультантом. AI делает всё остальное: пишет тексты, настраивает таргетинг, создаёт кампанию в Meta.",
    faq2_q: "Я передаю AdPilot доступ к своему рекламному кабинету?",
    faq2_a: "Вы авторизуете AdPilot через официальный Meta Business API — это безопасный стандартный способ. Ваш пароль от Facebook никуда не передаётся. Вы можете отозвать доступ в любой момент.",
    faq3_q: "Сколько стоит использование AdPilot?",
    faq3_a: "Первая кампания — полностью бесплатно, карта не нужна. Вы платите только за рекламный бюджет напрямую в Meta — AdPilot не берёт процент от бюджета.",
    faq4_q: "Для каких ниш подходит AdPilot?",
    faq4_a: "Система оптимизирована для 19 ниш: рестораны и кафе, салоны красоты, фитнес, онлайн-курсы, недвижимость, одежда, медицина, юридические услуги, автосервис и другие.",
    faq5_q: "Что если объявления мне не понравятся?",
    faq5_a: "Вы всегда видите объявления перед запуском и можете попросить сгенерировать новые варианты через Telegram. Кампания запускается только после вашего подтверждения.",
    cta_tag: "НАЧНИТЕ СЕГОДНЯ",
    cta_title: "Ваша первая AI-кампания — бесплатно",
    cta_sub: "Подключитесь за 5 минут. Никаких карт, никаких обязательств.",
    cta_btn: "🚀 Открыть AdPilot в Telegram",
    cta_note: "Бесплатный старт · Без карты · Отмена в любой момент",
    footer_copy: "© 2026 AdPilot. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_contact: "Контакт",
  },
  uk: {
    nav_try: "Спробувати",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Реклама в Meta",
    hero_title_3: "поки ви працюєте",
    hero_sub: "Опишіть бізнес — AI напише оголошення, налаштує аудиторію та запустить кампанію. Без агентств, без курсів.",
    btn_start: "🚀 Почати безкоштовно",
    btn_demo: "Дивитися як працює",
    chat_online: "● онлайн",
    cm1: "Привіт! У мене кав'ярня у Варшаві",
    cm2: "Чудово! Що робить вашу кав'ярню особливою?",
    cm3: "Specialty coffee та авторські сніданки",
    cm4: "🔍 Аналізую нішу та конкурентів...",
    cm5a: "3 оголошення написано", cm5b: "Аудиторію налаштовано", cm5c: "Оцінка AI:",
    cm6: "🚀 Запустити в Meta",
    pb1: "У 10× швидше агентства", pb2: "Економія $500+ на місяць", pb3: "15 європейських мов", pb4: "Без доступу до вашого пароля",
    stat_1_num: "15", stat_1_label: "мов",
    stat_2_num: "3", stat_2_label: "AI-моделі",
    stat_3_num: "15 хв", stat_3_label: "до першої кампанії",
    stat_4_num: "$0", stat_4_label: "перша кампанія",
    how_tag: "ЯК ЦЕ ПРАЦЮЄ",
    how_title: "Три кроки до запуску реклами",
    how_sub: "Ніяких агентств, ніякої складності. Просто розкажіть про бізнес.",
    step1_num: "КРОК 1", step1_title: "Розкажіть про бізнес",
    step1_text: "Дайте відповіді на питання AI-консультанта в Telegram. Що продаєте, кому, де. Займає 5–10 хвилин.",
    step2_num: "КРОК 2", step2_title: "AI створює кампанію",
    step2_text: "Claude, Gemini та GPT-4 змагаються. Claude-рев'юер відбирає лише 8+/10.",
    step3_num: "КРОК 3", step3_title: "Запуск одним кліком",
    step3_text: "Натисніть «Запустити» — AdPilot створить кампанію, групи оголошень і завантажить тексти в Meta.",
    res_tag: "ЩО ВИ ОТРИМУЄТЕ",
    res_title: "Конкретні результати, не обіцянки",
    rcb1_before: "Раніше", rcb1_old: "4–6 годин", rcb1_new: "15 хвилин", rcb1_label: "на запуск кампанії",
    rcb2_before: "Раніше", rcb2_old: "$500–2000/міс", rcb2_new: "$0 перша", rcb2_label: "вартість запуску",
    rcb3_before: "Junior копірайтер", rcb3_old: "1–2 оголошення", rcb3_new: "9+ варіантів", rcb3_label: "з оцінкою 8+/10 по Ogilvy",
    rcb4_before: "Агентство", rcb4_old: "1 мова", rcb4_new: "15 мов", rcb4_label: "нативні тексти, не переклади",
    feat_tag: "МОЖЛИВОСТІ",
    feat_title: "Все для розумної реклами",
    feat_sub: "Технології Fortune 500 — тепер доступні кожному бізнесу",
    f1_title: "Три AI-моделі змагаються",
    f1_text: "Claude 4, Gemini та GPT-4 незалежно пишуть оголошення. Claude-рев'юер оцінює за 8 критеріями. Проходять лише 8+/10.",
    f2_title: "Розумний таргетинг",
    f2_text: "Система знає 19 ніш бізнесу. Автоматично підбирає інтереси, вік, гео та формат кампанії.",
    f3_title: "15 мов нативно",
    f3_text: "Польська, англійська, німецька, французька та ще 10 мов ЄС. Кожне оголошення пишеться нативно.",
    f4_title: "Колективний AI-інтелект",
    f4_text: "Кращі заголовки кожної ніші потрапляють у загальний пул. Нові клієнти одразу отримують перевірені формули.",
    f5_title: "A/B тест автоматично",
    f5_text: "Запускає 3 варіанти з рівним бюджетом. Через 7 днів AI визначає переможця і переводить весь бюджет.",
    f6_title: "Авто-оптимізація",
    f6_text: "Бот щодня аналізує метрики. Поганий CPL — зупиняє. Хороший ROAS — масштабує.",
    score_tag: "ЯКІСТЬ ТЕКСТІВ",
    score_title: "Кожне оголошення оцінюється за 8 критеріями",
    score_sub: "Методології Ogilvy, Schwartz, Halbert, Sugarman — в одному AI-рев'юері",
    score_label: "Оцінка оголошення",
    score_pass: "✓ Пройшло перевірку",
    score_txt_title: "Лише кращі оголошення доходять до вас",
    score_txt_sub: "Слабкі тексти автоматично йдуть на переробку. Ви бачите лише те, що реально працює.",
    c1: "Стоп-скрол (Ogilvy)", c2: "Симптом ЦА (Schwartz)", c3: "Мова клієнта (VoC)", c4: "Слизька гірка (Sugarman)", c5: "Конкретна деталь (Carlton)", c6: "Офер + причина (Hopkins)", c7: "Одна людина (Halbert)", c8: "Відповідність Meta",
    sl1: "Слабкі оголошення автоматично відправляються на доопрацювання",
    sl2: "До вас потрапляють лише варіанти з оцінкою 7.5+",
    sl3: "Заборонені кліше та вигадані факти відсікаються жорстко",
    sl4: "З кожним раундом система стає розумнішою",
    cmp_tag: "ПОРІВНЯННЯ",
    cmp_title: "AdPilot vs Агентство vs Самостійно",
    cmp_sub: "Чому тисячі бізнесів обирають AI-агента",
    ct_h0: "", ct_best: "Кращий вибір", ct_h2: "Агентство", ct_h3: "Своїми силами",
    ct_r1: "Вартість запуску", ct_r1a: "Безкоштовно", ct_r1b: "$500–2000/міс", ct_r1c: "Безкоштовно",
    ct_r2: "Час до запуску", ct_r2a: "15 хвилин", ct_r2b: "2–4 тижні", ct_r2c: "3–5 годин",
    ct_r3: "Якість текстів", ct_r3a: "AI + 8 критеріїв", ct_r3b: "Залежить від виконавця", ct_r3c: "Залежить від вас",
    ct_r4: "A/B тестування", ct_r4a: "✓ Автоматично", ct_r4b: "Доп. оплата", ct_r4c: "Вручну",
    ct_r5: "Мови", ct_r5a: "15 нативно", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Працює 24/7", ct_r6a: "✓ Завжди", ct_r6b: "Робочі години", ct_r6c: "✗",
    trust_tag: "ТЕХНОЛОГІЇ",
    trust_title: "Працює на найкращих AI-моделях світу",
    t1_name: "Claude 4", t1_desc: "Головний рев'юер і стратег",
    t2_name: "Gemini", t2_desc: "Генерація варіантів",
    t3_name: "GPT-4", t3_desc: "Генерація варіантів",
    t4_name: "Meta API", t4_desc: "Автозапуск кампаній",
    tb1: "Ваш пароль не передається", tb2: "Дані захищено", tb3: "GDPR сумісно",
    faq_tag: "ПИТАННЯ", faq_title: "Часті запитання",
    faq1_q: "Чи потрібні технічні знання для роботи з AdPilot?",
    faq1_a: "Ні. Вся робота ведеться через звичайний Telegram-чат. Ви просто відповідаєте на питання, AI робить все інше.",
    faq2_q: "Я передаю AdPilot доступ до свого рекламного кабінету?",
    faq2_a: "Ви авторизуєте AdPilot через офіційний Meta Business API. Ваш пароль від Facebook нікуди не передається.",
    faq3_q: "Скільки коштує використання AdPilot?",
    faq3_a: "Перша кампанія — повністю безкоштовно, картка не потрібна. Ви платите лише за рекламний бюджет напряму в Meta.",
    faq4_q: "Для яких ніш підходить AdPilot?",
    faq4_a: "Система оптимізована для 19 ніш: ресторани, салони краси, фітнес, онлайн-курси, нерухомість, одяг, медицина та інші.",
    faq5_q: "Що якщо оголошення мені не сподобаються?",
    faq5_a: "Ви завжди бачите оголошення перед запуском і можете попросити нові варіанти. Кампанія запускається лише після вашого підтвердження.",
    cta_tag: "ПОЧНІТЬ СЬОГОДНІ",
    cta_title: "Ваша перша AI-кампанія — безкоштовно",
    cta_sub: "Підключіться за 5 хвилин. Без карток, без зобов'язань.",
    cta_btn: "🚀 Відкрити AdPilot у Telegram",
    cta_note: "Безкоштовний старт · Без карти · Скасування будь-коли",
    footer_copy: "© 2026 AdPilot. Всі права захищені.",
    footer_privacy: "Політика конфіденційності",
    footer_terms: "Умови використання",
    footer_contact: "Контакт",
  },
  en: {
    nav_try: "Get Started",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Meta Ads that",
    hero_title_3: "while you run your business",
    hero_sub: "Describe your business — AI writes the ads, finds the audience, and launches the campaign. No agencies, no courses.",
    btn_start: "🚀 Start for Free",
    btn_demo: "See How It Works",
    chat_online: "● online",
    cm1: "Hi! I have a coffee shop in Warsaw",
    cm2: "Great! What makes your coffee shop special?",
    cm3: "Specialty coffee and signature breakfasts",
    cm4: "🔍 Analyzing your niche and competitors...",
    cm5a: "3 ads written", cm5b: "Audience configured", cm5c: "AI Score:",
    cm6: "🚀 Launch in Meta",
    pb1: "10× faster than an agency", pb2: "Save $500+ per month", pb3: "15 European languages", pb4: "Your password is never shared",
    stat_1_num: "15", stat_1_label: "languages",
    stat_2_num: "3", stat_2_label: "AI models",
    stat_3_num: "15 min", stat_3_label: "to first campaign",
    stat_4_num: "$0", stat_4_label: "first campaign",
    how_tag: "HOW IT WORKS",
    how_title: "Three steps to launch your campaign",
    how_sub: "No agencies, no complexity. Just tell us about your business.",
    step1_num: "STEP 1", step1_title: "Tell Us About Your Business",
    step1_text: "Answer the AI consultant's questions in Telegram. What you sell, who to, where. Takes 5–10 minutes.",
    step2_num: "STEP 2", step2_title: "AI Creates Your Campaign",
    step2_text: "Claude, Gemini and GPT-4 compete for the best result. Claude reviewer selects only 8+/10 scores.",
    step3_num: "STEP 3", step3_title: "Launch With One Click",
    step3_text: "Hit Launch — AdPilot creates the campaign, ad sets, and uploads all copy to Meta automatically.",
    res_tag: "WHAT YOU GET",
    res_title: "Concrete results, not promises",
    rcb1_before: "Before", rcb1_old: "4–6 hours", rcb1_new: "15 minutes", rcb1_label: "to launch a campaign",
    rcb2_before: "Before", rcb2_old: "$500–2000/mo", rcb2_new: "$0 first", rcb2_label: "launch cost",
    rcb3_before: "Junior copywriter", rcb3_old: "1–2 ads", rcb3_new: "9+ variants", rcb3_label: "scored 8+/10 by Ogilvy criteria",
    rcb4_before: "Agency", rcb4_old: "1 language", rcb4_new: "15 languages", rcb4_label: "native copy, not translations",
    feat_tag: "FEATURES",
    feat_title: "Everything you need for smart advertising",
    feat_sub: "Fortune 500 technology — now accessible to every business",
    f1_title: "Three AI Models Compete",
    f1_text: "Claude 4, Gemini and GPT-4 independently write ads. Claude reviewer grades by 8 criteria from world-class copywriters. Only 8+/10 pass.",
    f2_title: "Smart Targeting",
    f2_text: "The system knows 19 business niches. Automatically selects interests, age, geo and the optimal campaign format for your audience.",
    f3_title: "15 Languages Natively",
    f3_text: "Polish, English, Ukrainian, German, French and 10 more EU languages. Each ad is written natively — not translated.",
    f4_title: "Collective AI Intelligence",
    f4_text: "Top headlines per niche enter a global pool. New clients immediately get proven formulas — the system learns from every campaign.",
    f5_title: "A/B Testing Automatically",
    f5_text: "Launches 3 variants with equal budget. After 7 days AI identifies the winner and shifts the full budget to it.",
    f6_title: "Auto-Optimization",
    f6_text: "The bot analyzes metrics daily. Bad CPL — it pauses. Good ROAS — it scales. Your budget always works at maximum.",
    score_tag: "AD QUALITY",
    score_title: "Every ad scored by 8 copywriting criteria",
    score_sub: "Ogilvy, Schwartz, Halbert, Sugarman methodologies — in one AI reviewer",
    score_label: "Ad Score",
    score_pass: "✓ Passed Review",
    score_txt_title: "Only the best ads reach you",
    score_txt_sub: "Weak copy is automatically sent back for revision. You only see what actually works in your niche.",
    c1: "Scroll-Stop (Ogilvy)", c2: "Symptom Hit (Schwartz)", c3: "Customer Voice (VoC)", c4: "Slippery Slope (Sugarman)", c5: "Specific Detail (Carlton)", c6: "Offer + Reason (Hopkins)", c7: "One Person (Halbert)", c8: "Meta Compliance",
    sl1: "Weak ads are automatically sent back for revision",
    sl2: "Only variants scoring 7.5+ reach you",
    sl3: "Forbidden clichés and fabricated facts are ruthlessly cut",
    sl4: "With every round, the system gets smarter",
    cmp_tag: "COMPARISON",
    cmp_title: "AdPilot vs Agency vs DIY",
    cmp_sub: "Why thousands of businesses choose the AI agent",
    ct_h0: "", ct_best: "Best Choice", ct_h2: "Agency", ct_h3: "Do It Yourself",
    ct_r1: "Launch cost", ct_r1a: "Free", ct_r1b: "$500–2000/mo", ct_r1c: "Free",
    ct_r2: "Time to launch", ct_r2a: "15 minutes", ct_r2b: "2–4 weeks", ct_r2c: "3–5 hours",
    ct_r3: "Ad quality", ct_r3a: "AI + 8 criteria", ct_r3b: "Depends on person", ct_r3c: "Depends on you",
    ct_r4: "A/B testing", ct_r4a: "✓ Automatic", ct_r4b: "Extra cost", ct_r4c: "Manual",
    ct_r5: "Languages", ct_r5a: "15 natively", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Works 24/7", ct_r6a: "✓ Always", ct_r6b: "Business hours", ct_r6c: "✗",
    trust_tag: "TECHNOLOGY",
    trust_title: "Built on the world's best AI models",
    t1_name: "Claude 4", t1_desc: "Chief reviewer & strategist",
    t2_name: "Gemini", t2_desc: "Ad generation",
    t3_name: "GPT-4", t3_desc: "Ad generation",
    t4_name: "Meta API", t4_desc: "Auto campaign launch",
    tb1: "Your password is never shared", tb2: "Data is protected", tb3: "GDPR compliant",
    faq_tag: "FAQ", faq_title: "Frequently Asked Questions",
    faq1_q: "Do I need technical knowledge to use AdPilot?",
    faq1_a: "No. Everything happens through a regular Telegram chat. You just answer questions like talking to a consultant. AI does the rest.",
    faq2_q: "Do I give AdPilot access to my ad account?",
    faq2_a: "You authorize AdPilot through the official Meta Business API — a secure standard method. Your Facebook password is never shared. You can revoke access at any time.",
    faq3_q: "How much does AdPilot cost?",
    faq3_a: "First campaign is completely free — no card needed. You only pay for your ad budget directly to Meta. AdPilot takes no percentage of your budget.",
    faq4_q: "Which niches does AdPilot support?",
    faq4_a: "The system is optimized for 19 niches: restaurants, beauty salons, fitness, online courses, real estate, clothing, healthcare, legal services, auto service, and more.",
    faq5_q: "What if I don't like the ads?",
    faq5_a: "You always see the ads before launch and can request new variants through Telegram. The campaign only launches after your confirmation.",
    cta_tag: "START TODAY",
    cta_title: "Your first AI campaign — free",
    cta_sub: "Connect in 5 minutes. No card, no commitment.",
    cta_btn: "🚀 Open AdPilot in Telegram",
    cta_note: "Free start · No card required · Cancel anytime",
    footer_copy: "© 2026 AdPilot. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_contact: "Contact",
  },
  pl: {
    nav_try: "Wypróbuj",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Reklamy w Meta",
    hero_title_3: "gdy Ty prowadzisz biznes",
    hero_sub: "Opisz swój biznes — AI napisze ogłoszenia, dobierze grupę docelową i uruchomi kampanię. Bez agencji, bez kursów.",
    btn_start: "🚀 Zacznij za darmo",
    btn_demo: "Zobacz jak działa",
    chat_online: "● online",
    cm1: "Cześć! Mam kawiarnię w centrum Warszawy",
    cm2: "Świetnie! Co wyróżnia Twoją kawiarnię?",
    cm3: "Specialty coffee i autorskie śniadania",
    cm4: "🔍 Analizuję niszę i konkurencję...",
    cm5a: "3 ogłoszenia napisane", cm5b: "Grupa docelowa skonfigurowana", cm5c: "Wynik AI:",
    cm6: "🚀 Uruchom w Meta",
    pb1: "10× szybciej niż agencja", pb2: "Oszczędność $500+ miesięcznie", pb3: "15 języków europejskich", pb4: "Bez dostępu do Twojego hasła",
    stat_1_num: "15", stat_1_label: "języków",
    stat_2_num: "3", stat_2_label: "modele AI",
    stat_3_num: "15 min", stat_3_label: "do pierwszej kampanii",
    stat_4_num: "$0", stat_4_label: "pierwsza kampania",
    how_tag: "JAK TO DZIAŁA",
    how_title: "Trzy kroki do uruchomienia reklamy",
    how_sub: "Żadnych agencji, żadnej złożoności. Po prostu opowiedz o biznesie.",
    step1_num: "KROK 1", step1_title: "Opowiedz o swoim biznesie",
    step1_text: "Odpowiedz na pytania konsultanta AI w Telegramie. Co sprzedajesz, komu, gdzie. Zajmuje 5–10 minut.",
    step2_num: "KROK 2", step2_title: "AI tworzy kampanię",
    step2_text: "Claude, Gemini i GPT-4 rywalizują. Recenzent Claude wybiera tylko 8+/10.",
    step3_num: "KROK 3", step3_title: "Uruchomienie jednym kliknięciem",
    step3_text: "Kliknij Uruchom — AdPilot automatycznie tworzy kampanię, zestawy reklam i wgrywa teksty do Meta.",
    res_tag: "CO OTRZYMUJESZ",
    res_title: "Konkretne wyniki, nie obietnice",
    rcb1_before: "Wcześniej", rcb1_old: "4–6 godzin", rcb1_new: "15 minut", rcb1_label: "na uruchomienie kampanii",
    rcb2_before: "Wcześniej", rcb2_old: "$500–2000/mies", rcb2_new: "$0 pierwsza", rcb2_label: "koszt uruchomienia",
    rcb3_before: "Junior copywriter", rcb3_old: "1–2 ogłoszenia", rcb3_new: "9+ wariantów", rcb3_label: "z oceną 8+/10 wg Ogilvy",
    rcb4_before: "Agencja", rcb4_old: "1 język", rcb4_new: "15 języków", rcb4_label: "natywne teksty, nie tłumaczenia",
    feat_tag: "MOŻLIWOŚCI",
    feat_title: "Wszystko do inteligentnej reklamy",
    feat_sub: "Technologie Fortune 500 — teraz dostępne dla każdej firmy",
    f1_title: "Trzy modele AI rywalizują",
    f1_text: "Claude 4, Gemini i GPT-4 niezależnie piszą ogłoszenia. Recenzent Claude ocenia według 8 kryteriów. Przechodzą tylko 8+/10.",
    f2_title: "Inteligentny targeting",
    f2_text: "System zna 19 nisz biznesowych. Automatycznie dobiera zainteresowania, wiek, geo i format kampanii.",
    f3_title: "15 języków natywnie",
    f3_text: "Polski, angielski, ukraiński, niemiecki, francuski i 10 innych języków UE. Każde ogłoszenie pisane natywnie.",
    f4_title: "Zbiorowa inteligencja AI",
    f4_text: "Najlepsze nagłówki każdej niszy trafiają do globalnej puli. Nowi klienci od razu dostają sprawdzone formuły.",
    f5_title: "Test A/B automatycznie",
    f5_text: "Uruchamia 3 warianty z równym budżetem. Po 7 dniach AI wyłania zwycięzcę i przenosi cały budżet.",
    f6_title: "Auto-optymalizacja",
    f6_text: "Bot codziennie analizuje metryki. Zły CPL — zatrzymuje. Dobry ROAS — skaluje.",
    score_tag: "JAKOŚĆ TEKSTÓW",
    score_title: "Każde ogłoszenie oceniane według 8 kryteriów",
    score_sub: "Metodologie Ogilvy, Schwartz, Halbert, Sugarman — w jednym recenzencie AI",
    score_label: "Ocena ogłoszenia",
    score_pass: "✓ Przeszło weryfikację",
    score_txt_title: "Tylko najlepsze ogłoszenia do Ciebie trafiają",
    score_txt_sub: "Słabe teksty automatycznie wracają do poprawki. Widzisz tylko to, co naprawdę działa w Twojej niszy.",
    c1: "Stop-scroll (Ogilvy)", c2: "Symptom CA (Schwartz)", c3: "Język klienta (VoC)", c4: "Śliska zjeżdżalnia (Sugarman)", c5: "Konkretny detal (Carlton)", c6: "Oferta + powód (Hopkins)", c7: "Jedna osoba (Halbert)", c8: "Zgodność z Meta",
    sl1: "Słabe ogłoszenia automatycznie wracają do poprawki",
    sl2: "Do Ciebie trafiają tylko warianty z oceną 7.5+",
    sl3: "Zakazane klisze i wymyślone fakty są bezwzględnie odcinane",
    sl4: "Z każdą rundą system staje się mądrzejszy",
    cmp_tag: "PORÓWNANIE",
    cmp_title: "AdPilot vs Agencja vs Samemu",
    cmp_sub: "Dlaczego tysiące firm wybierają agenta AI",
    ct_h0: "", ct_best: "Najlepszy wybór", ct_h2: "Agencja", ct_h3: "Samodzielnie",
    ct_r1: "Koszt uruchomienia", ct_r1a: "Bezpłatnie", ct_r1b: "$500–2000/mies", ct_r1c: "Bezpłatnie",
    ct_r2: "Czas do startu", ct_r2a: "15 minut", ct_r2b: "2–4 tygodnie", ct_r2c: "3–5 godzin",
    ct_r3: "Jakość tekstów", ct_r3a: "AI + 8 kryteriów", ct_r3b: "Zależy od osoby", ct_r3c: "Zależy od Ciebie",
    ct_r4: "Test A/B", ct_r4a: "✓ Automatycznie", ct_r4b: "Dodatkowa opłata", ct_r4c: "Ręcznie",
    ct_r5: "Języki", ct_r5a: "15 natywnie", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Działa 24/7", ct_r6a: "✓ Zawsze", ct_r6b: "Godziny pracy", ct_r6c: "✗",
    trust_tag: "TECHNOLOGIA",
    trust_title: "Zbudowany na najlepszych modelach AI świata",
    t1_name: "Claude 4", t1_desc: "Główny recenzent i strateg",
    t2_name: "Gemini", t2_desc: "Generowanie wariantów",
    t3_name: "GPT-4", t3_desc: "Generowanie wariantów",
    t4_name: "Meta API", t4_desc: "Auto-uruchomienie kampanii",
    tb1: "Twoje hasło nie jest przekazywane", tb2: "Dane są chronione", tb3: "Zgodność z GDPR",
    faq_tag: "PYTANIA", faq_title: "Często zadawane pytania",
    faq1_q: "Czy potrzebuję wiedzy technicznej?",
    faq1_a: "Nie. Wszystko odbywa się przez zwykły czat Telegram. Po prostu odpowiadasz na pytania jak w rozmowie z konsultantem.",
    faq2_q: "Czy przekazuję AdPilot dostęp do konta reklamowego?",
    faq2_a: "Autoryzujesz AdPilot przez oficjalne Meta Business API. Twoje hasło do Facebooka nigdzie nie jest przekazywane.",
    faq3_q: "Ile kosztuje AdPilot?",
    faq3_a: "Pierwsza kampania jest całkowicie bezpłatna — karta nie jest potrzebna. Płacisz tylko za budżet reklamowy bezpośrednio do Meta.",
    faq4_q: "Dla jakich nisz działa AdPilot?",
    faq4_a: "System jest zoptymalizowany dla 19 nisz: restauracje, salony urody, fitness, kursy online, nieruchomości, odzież, medycyna, usługi prawne i inne.",
    faq5_q: "Co jeśli ogłoszenia mi się nie spodobają?",
    faq5_a: "Zawsze widzisz ogłoszenia przed uruchomieniem i możesz poprosić o nowe warianty. Kampania startuje dopiero po Twojym potwierdzeniu.",
    cta_tag: "ZACZNIJ DZIŚ",
    cta_title: "Twoja pierwsza kampania AI — bezpłatnie",
    cta_sub: "Połącz się w 5 minut. Bez kart, bez zobowiązań.",
    cta_btn: "🚀 Otwórz AdPilot w Telegramie",
    cta_note: "Bezpłatny start · Bez karty · Anuluj kiedy chcesz",
    footer_copy: "© 2026 AdPilot. Wszelkie prawa zastrzeżone.",
    footer_privacy: "Polityka prywatności",
    footer_terms: "Warunki użytkowania",
    footer_contact: "Kontakt",
  }
};

// ── Language Switch ────────────────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ru';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = T[lang];

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

// ── Particles ──────────────────────────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const count = Math.min(60, Math.floor(window.innerWidth / 25));
  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.4 + 0.05,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(124,58,237,${p.opacity})`;
      ctx.fill();
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });

    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(124,58,237,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    requestAnimationFrame(draw);
  }

  draw();
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ── Typewriter ─────────────────────────────────────────────────────────────────
function initTypewriter() {
  const el = document.getElementById('typewriter-word');
  if (!el) return;

  const words = {
    ru: ['запускается сама', 'работает 24/7', 'пишет объявления', 'масштабирует бюджет'],
    uk: ['запускається сама', 'працює 24/7', 'пише оголошення', 'масштабує бюджет'],
    en: ['launch themselves', 'run on autopilot', 'write themselves', 'scale automatically'],
    pl: ['uruchamiają się same', 'działają 24/7', 'piszą się same', 'skalują automatycznie'],
  };

  let wordIdx = 0, charIdx = 0, deleting = false;

  function type() {
    const list = words[currentLang] || words.ru;
    const word = list[wordIdx % list.length];

    if (!deleting) {
      el.textContent = word.slice(0, ++charIdx);
      if (charIdx === word.length) {
        setTimeout(() => { deleting = true; type(); }, 2200);
        return;
      }
    } else {
      el.textContent = word.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx++;
      }
    }
    setTimeout(type, deleting ? 50 : 90);
  }
  type();
}

// ── Chat Animation ─────────────────────────────────────────────────────────────
function initChatAnimation() {
  const msgs = document.querySelectorAll('.chat-msg');
  if (!msgs.length) return;

  const delays = [400, 1200, 2400, 3400, 5200, 6400];

  function showMessages() {
    msgs.forEach(m => { m.classList.remove('visible'); });
    msgs.forEach((msg, i) => {
      setTimeout(() => msg.classList.add('visible'), delays[i] || i * 800);
    });
  }

  showMessages();
  setInterval(showMessages, 9000);
}

// ── Scroll Reveal ──────────────────────────────────────────────────────────────
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.step, .feature-card, .trust-card, .result-card-big').forEach(el => {
    observer.observe(el);
  });
}

// ── Score Counter ──────────────────────────────────────────────────────────────
function initScoreCounter() {
  const el = document.getElementById('scoreNum');
  if (!el) return;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !el.dataset.counted) {
      el.dataset.counted = '1';
      let v = 0;
      const target = 8.7;
      const step = () => {
        v = Math.min(v + 0.1, target);
        el.textContent = v.toFixed(1);
        if (v < target) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, { threshold: 0.5 });

  observer.observe(el);
}

// ── Bar Animation ──────────────────────────────────────────────────────────────
function initBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.bar-fill').forEach(bar => {
          const w = bar.dataset.width;
          if (w) bar.style.width = w + '%';
        });
      }
    });
  }, { threshold: 0.3 });

  const scoreSection = document.querySelector('#score');
  if (scoreSection) observer.observe(scoreSection);
}

// ── FAQ Accordion ──────────────────────────────────────────────────────────────
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── Nav scroll effect ──────────────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── Init ───────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  applyLang(currentLang);
  initParticles();
  initTypewriter();
  initChatAnimation();
  initScrollReveal();
  initScoreCounter();
  initBars();
  initFAQ();
});
