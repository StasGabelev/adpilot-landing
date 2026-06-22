// ── Translations ──────────────────────────────────────────────────────────────
const T = {
  ru: {
    nav_try: "Попробовать",
    nav_pricing: "Цены",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Реклама в Meta",
    hero_title_3: "пока вы работаете",
    hero_sub: "Опишите бизнес за 10 минут — AI напишет объявления, настроит аудитории и запустит кампанию. Потом следит 24/7, оптимизирует и присылает отчёты каждое утро.",
    btn_start: "🚀 Попробовать 14 дней бесплатно",
    btn_demo: "Смотреть как работает",
    chat_online: "● онлайн",
    cm1: "Привет! У меня кофейня в Варшаве",
    cm2: "Отлично! Что делает вашу кофейню особенной?",
    cm3: "Specialty coffee и авторские завтраки",
    cm4: "🔍 Анализирую нишу и конкурентов...",
    cm5a: "3 объявления написаны", cm5b: "Аудитория настроена", cm5c: "Оценка AI:",
    cm6: "🚀 Запустить в Meta",
    pb1: "В 10× быстрее агентства", pb2: "Автопилот 24/7 — следит пока вы спите", pb3: "A/B победитель выбирается сам", pb4: "Без доступа к вашему паролю",
    stat_1_num: "6 ч", stat_1_label: "мониторинг кампании",
    stat_2_num: "9+", stat_2_label: "вариантов текста",
    stat_3_num: "15 мин", stat_3_label: "до запуска",
    stat_4_num: "19", stat_4_label: "ниш бизнеса",
    // Autopilot
    ap_tag: "АВТОПИЛОТ 24/7",
    ap_title: "Запустили — и забыли.<br>AI следит сам.",
    ap_sub: "После запуска кампании AdPilot переходит в режим автопилота. Вы работаете — он оптимизирует.",
    ap_t1_time: "Каждые 6 часов",
    ap_t1_text: "Проверяет CTR, CPL и частоту показов каждой кампании",
    ap_t2_time: "Каждое утро",
    ap_t2_text: "Отчёт в Telegram с метриками и советом от AI-эксперта",
    ap_t3_time: "День 7",
    ap_t3_text: "A/B тест завершён — AI выбирает победителя и переводит весь бюджет",
    ap_t4_time: "ROAS выше цели",
    ap_t4_text: "Предлагает масштабировать бюджет +20% — вы одобряете одним кликом",
    ap_t5_time: "Частота > 4.0",
    ap_t5_text: "Замечает «усталость» объявления и предлагает свежий вариант",
    ap_t6_time: "Каждый понедельник",
    ap_t6_text: "PDF-отчёт за неделю с динамикой показателей",
    ap_note: "Все важные действия — только с вашего одобрения. Ничего не происходит без вашего ведома.",
    // How it works
    how_tag: "КАК ЭТО РАБОТАЕТ",
    how_title: "Три шага до запуска рекламы",
    how_sub: "Никаких агентств, никакой сложности. Просто расскажите о бизнесе.",
    step1_num: "ШАГ 1", step1_title: "Расскажите о бизнесе",
    step1_text: "Ответьте на вопросы AI-консультанта в Telegram. Что продаёте, кому, где. Занимает 5–10 минут.",
    step2_num: "ШАГ 2", step2_title: "AI создаёт кампанию",
    step2_text: "Claude, Gemini и GPT-4 соревнуются. Claude-ревьюер отбирает только объявления с оценкой 8+/10.",
    step3_num: "ШАГ 3", step3_title: "Запуск одним кликом",
    step3_text: "Нажмите «Запустить» — AdPilot создаст кампанию, группы объявлений и загрузит тексты в Meta.",
    // Results
    res_tag: "ЧТО ВЫ ПОЛУЧАЕТЕ",
    res_title: "Конкретные результаты, не обещания",
    rcb1_before: "Раньше", rcb1_old: "4–6 часов", rcb1_new: "15 минут", rcb1_label: "на запуск кампании",
    rcb2_before: "Агентство", rcb2_old: "$500–2000/мес", rcb2_new: "$49/мес", rcb2_label: "вместо $500–2000 за агентство",
    rcb3_before: "Junior копирайтер", rcb3_old: "1–2 объявления", rcb3_new: "9+ вариантов", rcb3_label: "с оценкой 8+/10 по Ogilvy",
    rcb4_before: "Своими силами", rcb4_old: "раз в неделю", rcb4_new: "каждые 6 часов", rcb4_label: "мониторинг кампании",
    // Features
    feat_tag: "ВОЗМОЖНОСТИ",
    feat_title: "Всё что нужно для умной рекламы",
    feat_sub: "Технологии Fortune 500 — теперь доступны каждому бизнесу",
    f1_title: "Три AI-модели соревнуются",
    f1_text: "Claude 4, Gemini и GPT-4 независимо пишут объявления. Claude-ревьюер оценивает по 8 критериям топ-копирайтеров мира. Проходят только 8+/10.",
    f2_title: "Умный таргетинг по 19 нишам",
    f2_text: "Для каждой из 19 ниш — проверенные интересы, возраст, гео и плейсменты. Не угадывание — готовая база знаний.",
    f3_title: "15 языков нативно",
    f3_text: "Польский, английский, украинский, немецкий, французский и ещё 10 языков ЕС. Каждое объявление пишется нативно, а не переводится.",
    f4_title: "AI-генерация фото и видео",
    f4_text: "AdPilot пишет сценарий под каждый креатив, а потом генерирует его: баннеры для Facebook, Stories и Reels для Instagram. Не шаблоны — уникальный сценарий и визуал под ваш продукт.",
    f5_title: "A/B тест — автоматически",
    f5_text: "3 варианта с равным бюджетом. На 7-й день AI определяет победителя и переводит весь бюджет — без вашего участия.",
    f6_title: "Мониторинг каждые 6 часов",
    f6_text: "Бот проверяет кампании каждые 6 часов. Плохой CPL — предлагает паузу. Хороший ROAS — предлагает масштабировать. Всё с вашего одобрения.",
    // AI Score
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
    // Agency
    ag_tag: "ДЛЯ АГЕНТСТВ",
    ag_title: "Ведёте несколько клиентов?<br>AdPilot — ваш операционный суперинтеллект",
    ag_sub: "Один тариф — неограниченное количество клиентских проектов. Каждый в своём кабинете Meta.",
    ag_calc_label: "Экономия вашего времени:",
    ag_calc_before: "4 ч × 10 клиентов = 40 ч в месяц",
    ag_calc_after: "15 мин × 10 = 2.5 часа",
    ag_btn: "🏢 Попробовать для агентства",
    ag_f1: "Неограниченное количество проектов",
    ag_f2: "Отдельный Meta-аккаунт под каждого клиента",
    ag_f3: "Полная изоляция данных между клиентами",
    ag_f4: "Отчёты по каждому проекту отдельно",
    ag_f5: "Запуск кампании — 15 минут вместо 4–6 часов",
    ag_f6: "Один тариф — сколько угодно клиентов",
    // Pricing
    pr_tag: "ЦЕНА",
    pr_title: "Одна подписка. Всё включено.",
    pr_sub: "Никаких скрытых платежей. Никаких процентов от бюджета.",
    pr_per: "/месяц",
    pr_trial_badge: "14 дней бесплатно · Карта обязательна",
    pr_f1: "✅ Неограниченное количество кампаний",
    pr_f2: "✅ Автопилот 24/7 — мониторинг каждые 6 часов",
    pr_f3: "✅ AI-генерация фото-креативов со сценарием",
    pr_f4: "✅ AI-генерация видео-роликов со сценарием (Stories, Reels)",
    pr_f5: "✅ A/B тестирование с автовыбором победителя",
    pr_f6: "✅ Авто-оптимизация (пауза / масштаб / ротация)",
    pr_f7: "✅ Неограниченное количество проектов",
    pr_f8: "✅ 19 ниш бизнеса с AI-знаниями",
    pr_f9: "✅ Ретаргетинг и лид-формы",
    pr_vs: "Сравните: агентство берёт $500–2000/мес за один аккаунт",
    pr_btn: "🚀 Попробовать 14 дней бесплатно",
    pr_note: "Карта обязательна · 14 дней бесплатно · Затем $49/мес · Отмена в любой момент",
    // Social Proof
    sp_tag: "ТИПИЧНЫЙ СТАРТ",
    sp_title: "Что происходит в первые 30 дней",
    sp_sub: "Показатели зависят от ниши, бюджета и рынка. Это — ориентиры, не гарантии.",
    sp1_niche: "🏋️ Фитнес и здоровье",
    sp1_metric: "CPL $2–6",
    sp1_desc: "Первые лиды — за 48 часов после запуска",
    sp2_niche: "💅 Beauty и салоны",
    sp2_metric: "CTR 2–4%",
    sp2_desc: "Запись через лид-форму без сайта, прямо в Instagram",
    sp3_niche: "🏠 Недвижимость",
    sp3_metric: "В 2–3× дешевле",
    sp3_desc: "Стоимость заявки ниже, чем через агентство",
    sp4_niche: "📚 Онлайн-курсы",
    sp4_metric: "День 7: победитель",
    sp4_desc: "3 варианта объявлений тестируются автоматически",
    // Compare
    cmp_tag: "СРАВНЕНИЕ",
    cmp_title: "AdPilot vs Агентство vs Самостоятельно",
    cmp_sub: "Почему тысячи бизнесов выбирают AI-агента",
    ct_h0: "", ct_best: "Лучший выбор", ct_h2: "Агентство", ct_h3: "Своими силами",
    ct_r1: "Подписка в месяц", ct_r1a: "$49/мес", ct_r1b: "$500–2000/мес", ct_r1c: "Бесплатно",
    ct_r2: "Время до запуска", ct_r2a: "15 минут", ct_r2b: "2–4 недели", ct_r2c: "3–5 часов",
    ct_r3: "Качество текстов", ct_r3a: "AI + 8 критериев", ct_r3b: "Зависит от исполнителя", ct_r3c: "Зависит от вас",
    ct_r4: "A/B тестирование", ct_r4a: "✓ Автоматически", ct_r4b: "Доп. оплата", ct_r4c: "Вручную",
    ct_r5: "Языки", ct_r5a: "15 нативно", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Работает 24/7", ct_r6a: "✓ Всегда", ct_r6b: "Рабочие часы", ct_r6c: "✗",
    // Trust
    trust_tag: "ТЕХНОЛОГИИ",
    trust_title: "Работает на лучших AI-моделях мира",
    t1_name: "Claude 4", t1_desc: "Главный ревьюер и стратег",
    t2_name: "Gemini", t2_desc: "Генерация вариантов",
    t3_name: "GPT-4", t3_desc: "Генерация вариантов",
    t4_name: "Meta API", t4_desc: "Автозапуск кампаний",
    tb1: "Ваш пароль не передаётся", tb2: "Данные защищены", tb3: "GDPR совместимо",
    // FAQ
    faq_tag: "ВОПРОСЫ", faq_title: "Часто задаваемые вопросы",
    faq1_q: "Нужны ли технические знания для работы с AdPilot?",
    faq1_a: "Нет. Вся работа ведётся через обычный Telegram-чат. Вы просто отвечаете на вопросы, как при разговоре с консультантом. AI делает всё остальное: пишет тексты, настраивает таргетинг, создаёт кампанию в Meta.",
    faq2_q: "Я передаю AdPilot доступ к своему рекламному кабинету?",
    faq2_a: "Вы авторизуете AdPilot через официальный Meta Business API — это безопасный стандартный способ. Ваш пароль от Facebook никуда не передаётся. Вы можете отозвать доступ в любой момент.",
    faq3_q: "Сколько стоит использование AdPilot?",
    faq3_a: "AdPilot стоит $49/месяц. Первые 14 дней — бесплатно: карта обязательна при регистрации, списание начнётся только после триала. Дополнительно вы платите только за рекламный бюджет напрямую в Meta — AdPilot не берёт процент от бюджета.",
    faq4_q: "Для каких ниш подходит AdPilot?",
    faq4_a: "Система оптимизирована для 19 ниш: рестораны и кафе, салоны красоты, фитнес, онлайн-курсы, недвижимость, одежда и аксессуары, медицина, юридические услуги, автосервис и другие. Для каждой ниши — свои проверенные формулы объявлений.",
    faq5_q: "Что если объявления мне не понравятся?",
    faq5_a: "Вы всегда видите объявления перед запуском и можете попросить сгенерировать новые варианты или внести коррективы через Telegram. Кампания запускается только после вашего подтверждения.",
    faq6_q: "Что AI создаёт помимо рекламных текстов?",
    faq6_a: "AdPilot генерирует не только тексты объявлений, но и визуальные креативы: фото-баннеры для Facebook и Instagram, а также видео-ролики в формате Stories и Reels. Всё создаётся под вашу нишу и бренд — одним запросом в Telegram, без дизайнера и видеографа.",
    faq7_q: "Как работает автопилот после запуска?",
    faq7_a: "После запуска кампании AdPilot проверяет её каждые 6 часов: CTR, CPL, частоту показов. Каждое утро вы получаете отчёт в Telegram. На 7-й день A/B тест завершается — AI выбирает лучший вариант и переводит весь бюджет. Все критичные действия — с вашего одобрения.",
    // CTA
    cta_tag: "НАЧНИТЕ СЕГОДНЯ",
    cta_title: "14 дней бесплатно — протестируйте AdPilot",
    cta_sub: "Карта обязательна при регистрации. Никаких скрытых платежей. Отмена в любой момент.",
    cta_btn: "🚀 Начать 14-дневный триал",
    cta_note: "14 дней бесплатно · Карта обязательна · Затем $49/мес · Отмена в любой момент",
    footer_copy: "© 2026 AdPilot. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_contact: "Контакт",
  },
  uk: {
    nav_try: "Спробувати",
    nav_pricing: "Ціни",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Реклама в Meta",
    hero_title_3: "поки ви працюєте",
    hero_sub: "Опишіть бізнес за 10 хвилин — AI напише оголошення, налаштує аудиторії та запустить кампанію. Потім стежить 24/7, оптимізує і надсилає звіти щоранку.",
    btn_start: "🚀 Спробувати 14 днів безкоштовно",
    btn_demo: "Дивитися як працює",
    chat_online: "● онлайн",
    cm1: "Привіт! У мене кав'ярня у Варшаві",
    cm2: "Чудово! Що робить вашу кав'ярню особливою?",
    cm3: "Specialty coffee та авторські сніданки",
    cm4: "🔍 Аналізую нішу та конкурентів...",
    cm5a: "3 оголошення написано", cm5b: "Аудиторію налаштовано", cm5c: "Оцінка AI:",
    cm6: "🚀 Запустити в Meta",
    pb1: "У 10× швидше агентства", pb2: "Автопілот 24/7 — стежить поки ви спите", pb3: "A/B переможець обирається сам", pb4: "Без доступу до вашого пароля",
    stat_1_num: "6 год", stat_1_label: "моніторинг кампанії",
    stat_2_num: "9+", stat_2_label: "варіантів тексту",
    stat_3_num: "15 хв", stat_3_label: "до запуску",
    stat_4_num: "19", stat_4_label: "ніш бізнесу",
    // Autopilot
    ap_tag: "АВТОПІЛОТ 24/7",
    ap_title: "Запустили — і забули.<br>AI стежить сам.",
    ap_sub: "Після запуску кампанії AdPilot переходить в режим автопілота. Ви працюєте — він оптимізує.",
    ap_t1_time: "Кожні 6 годин",
    ap_t1_text: "Перевіряє CTR, CPL та частоту показів кожної кампанії",
    ap_t2_time: "Кожен ранок",
    ap_t2_text: "Звіт у Telegram з метриками та порадою від AI-експерта",
    ap_t3_time: "День 7",
    ap_t3_text: "A/B тест завершено — AI обирає переможця і переводить весь бюджет",
    ap_t4_time: "ROAS вище мети",
    ap_t4_text: "Пропонує масштабувати бюджет +20% — ви погоджуєтесь одним кліком",
    ap_t5_time: "Частота > 4.0",
    ap_t5_text: "Помічає «втому» оголошення і пропонує свіжий варіант",
    ap_t6_time: "Щопонеділка",
    ap_t6_text: "PDF-звіт за тиждень з динамікою показників",
    ap_note: "Всі важливі дії — тільки з вашого дозволу. Нічого не відбувається без вашого відома.",
    // How it works
    how_tag: "ЯК ЦЕ ПРАЦЮЄ",
    how_title: "Три кроки до запуску реклами",
    how_sub: "Ніяких агентств, ніякої складності. Просто розкажіть про бізнес.",
    step1_num: "КРОК 1", step1_title: "Розкажіть про бізнес",
    step1_text: "Дайте відповіді на питання AI-консультанта в Telegram. Що продаєте, кому, де. Займає 5–10 хвилин.",
    step2_num: "КРОК 2", step2_title: "AI створює кампанію",
    step2_text: "Claude, Gemini та GPT-4 змагаються. Claude-рев'юер відбирає лише 8+/10.",
    step3_num: "КРОК 3", step3_title: "Запуск одним кліком",
    step3_text: "Натисніть «Запустити» — AdPilot створить кампанію, групи оголошень і завантажить тексти в Meta.",
    // Results
    res_tag: "ЩО ВИ ОТРИМУЄТЕ",
    res_title: "Конкретні результати, не обіцянки",
    rcb1_before: "Раніше", rcb1_old: "4–6 годин", rcb1_new: "15 хвилин", rcb1_label: "на запуск кампанії",
    rcb2_before: "Агентство", rcb2_old: "$500–2000/міс", rcb2_new: "$49/міс", rcb2_label: "замість $500–2000 за агентство",
    rcb3_before: "Junior копірайтер", rcb3_old: "1–2 оголошення", rcb3_new: "9+ варіантів", rcb3_label: "з оцінкою 8+/10 по Ogilvy",
    rcb4_before: "Своїми силами", rcb4_old: "раз на тиждень", rcb4_new: "кожні 6 годин", rcb4_label: "моніторинг кампанії",
    // Features
    feat_tag: "МОЖЛИВОСТІ",
    feat_title: "Все для розумної реклами",
    feat_sub: "Технології Fortune 500 — тепер доступні кожному бізнесу",
    f1_title: "Три AI-моделі змагаються",
    f1_text: "Claude 4, Gemini та GPT-4 незалежно пишуть оголошення. Claude-рев'юер оцінює за 8 критеріями. Проходять лише 8+/10.",
    f2_title: "Розумний таргетинг по 19 нішах",
    f2_text: "Для кожної з 19 ніш — перевірені інтереси, вік, гео та плейсменти. Не вгадування — готова база знань.",
    f3_title: "15 мов нативно",
    f3_text: "Польська, англійська, українська, німецька, французька та ще 10 мов ЄС. Кожне оголошення пишеться нативно.",
    f4_title: "AI-генерація фото та відео",
    f4_text: "AdPilot пише сценарій під кожен креатив, а потім генерує його: банери для Facebook, Stories та Reels для Instagram. Не шаблони — унікальний сценарій і візуал під ваш продукт.",
    f5_title: "A/B тест — автоматично",
    f5_text: "3 варіанти з рівним бюджетом. На 7-й день AI визначає переможця і переводить весь бюджет — без вашої участі.",
    f6_title: "Моніторинг кожні 6 годин",
    f6_text: "Бот перевіряє кампанії кожні 6 годин. Поганий CPL — пропонує паузу. Хороший ROAS — пропонує масштабувати. Все з вашого дозволу.",
    // AI Score
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
    // Agency
    ag_tag: "ДЛЯ АГЕНТСТВ",
    ag_title: "Ведете кількох клієнтів?<br>AdPilot — ваш операційний суперінтелект",
    ag_sub: "Один тариф — необмежена кількість клієнтських проектів. Кожен у своєму кабінеті Meta.",
    ag_calc_label: "Економія вашого часу:",
    ag_calc_before: "4 год × 10 клієнтів = 40 год на місяць",
    ag_calc_after: "15 хв × 10 = 2.5 години",
    ag_btn: "🏢 Спробувати для агентства",
    ag_f1: "Необмежена кількість проектів",
    ag_f2: "Окремий Meta-кабінет для кожного клієнта",
    ag_f3: "Повна ізоляція даних між клієнтами",
    ag_f4: "Звіти по кожному проекту окремо",
    ag_f5: "Запуск кампанії — 15 хвилин замість 4–6 годин",
    ag_f6: "Один тариф — скільки завгодно клієнтів",
    // Pricing
    pr_tag: "ЦІНА",
    pr_title: "Одна підписка. Все включено.",
    pr_sub: "Жодних прихованих платежів. Жодних відсотків від бюджету.",
    pr_per: "/місяць",
    pr_trial_badge: "14 днів безкоштовно · Карта обов'язкова",
    pr_f1: "✅ Необмежена кількість кампаній",
    pr_f2: "✅ Автопілот 24/7 — моніторинг кожні 6 годин",
    pr_f3: "✅ AI-генерація фото-креативів зі сценарієм",
    pr_f4: "✅ AI-генерація відео-роликів зі сценарієм (Stories, Reels)",
    pr_f5: "✅ A/B тестування з автовибором переможця",
    pr_f6: "✅ Авто-оптимізація (пауза / масштаб / ротація)",
    pr_f7: "✅ Необмежена кількість проектів",
    pr_f8: "✅ 19 ніш бізнесу з AI-знаннями",
    pr_f9: "✅ Ретаргетинг та лід-форми",
    pr_vs: "Порівняйте: агентство бере $500–2000/міс за один кабінет",
    pr_btn: "🚀 Спробувати 14 днів безкоштовно",
    pr_note: "Карта обов'язкова · 14 днів безкоштовно · Потім $49/міс · Скасування будь-коли",
    // Social Proof
    sp_tag: "ТИПОВИЙ СТАРТ",
    sp_title: "Що відбувається у перші 30 днів",
    sp_sub: "Показники залежать від ніші, бюджету та ринку. Це — орієнтири, не гарантії.",
    sp1_niche: "🏋️ Фітнес та здоров'я",
    sp1_metric: "CPL $2–6",
    sp1_desc: "Перші ліди — за 48 годин після запуску",
    sp2_niche: "💅 Beauty та салони",
    sp2_metric: "CTR 2–4%",
    sp2_desc: "Запис через лід-форму без сайту, прямо в Instagram",
    sp3_niche: "🏠 Нерухомість",
    sp3_metric: "У 2–3× дешевше",
    sp3_desc: "Вартість заявки нижча, ніж через агентство",
    sp4_niche: "📚 Онлайн-курси",
    sp4_metric: "День 7: переможець",
    sp4_desc: "3 варіанти оголошень тестуються автоматично",
    // Compare
    cmp_tag: "ПОРІВНЯННЯ",
    cmp_title: "AdPilot vs Агентство vs Самостійно",
    cmp_sub: "Чому тисячі бізнесів обирають AI-агента",
    ct_h0: "", ct_best: "Кращий вибір", ct_h2: "Агентство", ct_h3: "Своїми силами",
    ct_r1: "Підписка на місяць", ct_r1a: "$49/міс", ct_r1b: "$500–2000/міс", ct_r1c: "Безкоштовно",
    ct_r2: "Час до запуску", ct_r2a: "15 хвилин", ct_r2b: "2–4 тижні", ct_r2c: "3–5 годин",
    ct_r3: "Якість текстів", ct_r3a: "AI + 8 критеріїв", ct_r3b: "Залежить від виконавця", ct_r3c: "Залежить від вас",
    ct_r4: "A/B тестування", ct_r4a: "✓ Автоматично", ct_r4b: "Доп. оплата", ct_r4c: "Вручну",
    ct_r5: "Мови", ct_r5a: "15 нативно", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Працює 24/7", ct_r6a: "✓ Завжди", ct_r6b: "Робочі години", ct_r6c: "✗",
    // Trust
    trust_tag: "ТЕХНОЛОГІЇ",
    trust_title: "Працює на найкращих AI-моделях світу",
    t1_name: "Claude 4", t1_desc: "Головний рев'юер і стратег",
    t2_name: "Gemini", t2_desc: "Генерація варіантів",
    t3_name: "GPT-4", t3_desc: "Генерація варіантів",
    t4_name: "Meta API", t4_desc: "Автозапуск кампаній",
    tb1: "Ваш пароль не передається", tb2: "Дані захищено", tb3: "GDPR сумісно",
    // FAQ
    faq_tag: "ПИТАННЯ", faq_title: "Часті запитання",
    faq1_q: "Чи потрібні технічні знання для роботи з AdPilot?",
    faq1_a: "Ні. Вся робота ведеться через звичайний Telegram-чат. Ви просто відповідаєте на питання, AI робить все інше.",
    faq2_q: "Я передаю AdPilot доступ до свого рекламного кабінету?",
    faq2_a: "Ви авторизуєте AdPilot через офіційний Meta Business API. Ваш пароль від Facebook нікуди не передається. Можете відкликати доступ будь-коли.",
    faq3_q: "Скільки коштує використання AdPilot?",
    faq3_a: "AdPilot коштує $49/місяць. Перші 14 днів — безкоштовно: картка обов'язкова при реєстрації, списання починається лише після триалу. Додатково ви платите тільки за рекламний бюджет напряму в Meta — AdPilot не бере відсоток від бюджету.",
    faq4_q: "Для яких ніш підходить AdPilot?",
    faq4_a: "Система оптимізована для 19 ніш: ресторани, салони краси, фітнес, онлайн-курси, нерухомість, одяг, медицина, юридичні послуги та інші.",
    faq5_q: "Що якщо оголошення мені не сподобаються?",
    faq5_a: "Ви завжди бачите оголошення перед запуском і можете попросити нові варіанти. Кампанія запускається лише після вашого підтвердження.",
    faq6_q: "Що AI створює, окрім рекламних текстів?",
    faq6_a: "AdPilot генерує не лише тексти оголошень, але й візуальні креативи: фото-банери для Facebook та Instagram, а також відео-ролики у форматі Stories та Reels. Все створюється під вашу нішу та бренд — одним запитом у Telegram, без дизайнера та відеографа.",
    faq7_q: "Як працює автопілот після запуску?",
    faq7_a: "Після запуску кампанії AdPilot перевіряє її кожні 6 годин: CTR, CPL, частоту показів. Щоранку ви отримуєте звіт у Telegram. На 7-й день A/B тест завершується — AI обирає кращий варіант і переводить весь бюджет. Всі критичні дії — з вашого дозволу.",
    // CTA
    cta_tag: "ПОЧНІТЬ СЬОГОДНІ",
    cta_title: "14 днів безкоштовно — протестуйте AdPilot",
    cta_sub: "Картка обов'язкова при реєстрації. Жодних прихованих платежів. Скасування будь-коли.",
    cta_btn: "🚀 Розпочати 14-денний триал",
    cta_note: "14 днів безкоштовно · Карта обов'язкова · Потім $49/міс · Скасування будь-коли",
    footer_copy: "© 2026 AdPilot. Всі права захищені.",
    footer_privacy: "Політика конфіденційності",
    footer_terms: "Умови використання",
    footer_contact: "Контакт",
  },
  en: {
    nav_try: "Get Started",
    nav_pricing: "Pricing",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Meta Ads that",
    hero_title_3: "while you run your business",
    hero_sub: "Describe your business in 10 minutes — AI writes the ads, builds the audience, and launches the campaign. Then it monitors 24/7, optimizes, and sends you a report every morning.",
    btn_start: "🚀 Try Free for 14 Days",
    btn_demo: "See How It Works",
    chat_online: "● online",
    cm1: "Hi! I have a coffee shop in Warsaw",
    cm2: "Great! What makes your coffee shop special?",
    cm3: "Specialty coffee and signature breakfasts",
    cm4: "🔍 Analyzing your niche and competitors...",
    cm5a: "3 ads written", cm5b: "Audience configured", cm5c: "AI Score:",
    cm6: "🚀 Launch in Meta",
    pb1: "10× faster than an agency", pb2: "Autopilot 24/7 — watches while you sleep", pb3: "A/B winner selected automatically", pb4: "Your password is never shared",
    stat_1_num: "6h", stat_1_label: "campaign monitoring",
    stat_2_num: "9+", stat_2_label: "ad variants",
    stat_3_num: "15 min", stat_3_label: "to launch",
    stat_4_num: "19", stat_4_label: "business niches",
    // Autopilot
    ap_tag: "AUTOPILOT 24/7",
    ap_title: "Launch and forget.<br>AI keeps watch.",
    ap_sub: "After launch, AdPilot switches to autopilot mode. You run your business — it optimizes your ads.",
    ap_t1_time: "Every 6 hours",
    ap_t1_text: "Checks CTR, CPL and frequency for every active campaign",
    ap_t2_time: "Every morning",
    ap_t2_text: "Report in Telegram with metrics and AI expert recommendation",
    ap_t3_time: "Day 7",
    ap_t3_text: "A/B test complete — AI picks the winner and moves the full budget",
    ap_t4_time: "ROAS above target",
    ap_t4_text: "Suggests scaling budget +20% — you approve with one tap",
    ap_t5_time: "Frequency > 4.0",
    ap_t5_text: "Detects ad fatigue and proposes a fresh creative",
    ap_t6_time: "Every Monday",
    ap_t6_text: "Weekly PDF report with trends and performance summary",
    ap_note: "All important actions require your approval. Nothing changes without your knowledge.",
    // How it works
    how_tag: "HOW IT WORKS",
    how_title: "Three steps to launch your campaign",
    how_sub: "No agencies, no complexity. Just tell us about your business.",
    step1_num: "STEP 1", step1_title: "Tell Us About Your Business",
    step1_text: "Answer the AI consultant's questions in Telegram. What you sell, who to, where. Takes 5–10 minutes.",
    step2_num: "STEP 2", step2_title: "AI Creates Your Campaign",
    step2_text: "Claude, Gemini and GPT-4 compete for the best result. Claude reviewer selects only 8+/10 scores.",
    step3_num: "STEP 3", step3_title: "Launch With One Click",
    step3_text: "Hit Launch — AdPilot creates the campaign, ad sets, and uploads all copy to Meta automatically.",
    // Results
    res_tag: "WHAT YOU GET",
    res_title: "Concrete results, not promises",
    rcb1_before: "Before", rcb1_old: "4–6 hours", rcb1_new: "15 minutes", rcb1_label: "to launch a campaign",
    rcb2_before: "Agency", rcb2_old: "$500–2000/mo", rcb2_new: "$49/mo", rcb2_label: "vs $500–2000 for an agency",
    rcb3_before: "Junior copywriter", rcb3_old: "1–2 ads", rcb3_new: "9+ variants", rcb3_label: "scored 8+/10 by Ogilvy criteria",
    rcb4_before: "Self-managed", rcb4_old: "once a week", rcb4_new: "every 6 hours", rcb4_label: "campaign monitoring",
    // Features
    feat_tag: "FEATURES",
    feat_title: "Everything you need for smart advertising",
    feat_sub: "Fortune 500 technology — now accessible to every business",
    f1_title: "Three AI Models Compete",
    f1_text: "Claude 4, Gemini and GPT-4 independently write ads. Claude reviewer grades by 8 criteria from world-class copywriters. Only 8+/10 pass.",
    f2_title: "Smart Targeting Across 19 Niches",
    f2_text: "For each of 19 niches — proven interests, age, geo and placements. Not guesswork — a ready knowledge base.",
    f3_title: "15 Languages Natively",
    f3_text: "Polish, English, Ukrainian, German, French and 10 more EU languages. Each ad is written natively — not translated.",
    f4_title: "AI Photo & Video Creatives",
    f4_text: "AdPilot writes a unique script for each creative, then generates it: photo banners for Facebook, Stories and Reels for Instagram. Not templates — a custom script and visual tailored to your product.",
    f5_title: "A/B Testing Automatically",
    f5_text: "Launches 3 variants with equal budget. After 7 days AI identifies the winner and shifts the full budget — no action needed from you.",
    f6_title: "Monitoring Every 6 Hours",
    f6_text: "The bot checks campaigns every 6 hours. Bad CPL — suggests pause. Good ROAS — suggests scale. All with your approval.",
    // AI Score
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
    // Agency
    ag_tag: "FOR AGENCIES",
    ag_title: "Managing multiple clients?<br>AdPilot is your operational AI superpower",
    ag_sub: "One subscription — unlimited client projects. Each with its own Meta account.",
    ag_calc_label: "Your time savings:",
    ag_calc_before: "4h × 10 clients = 40 hours/month",
    ag_calc_after: "15 min × 10 = 2.5 hours",
    ag_btn: "🏢 Try for Your Agency",
    ag_f1: "Unlimited number of projects",
    ag_f2: "Separate Meta account per client",
    ag_f3: "Full data isolation between clients",
    ag_f4: "Separate reports for each project",
    ag_f5: "Campaign launch: 15 minutes instead of 4–6 hours",
    ag_f6: "One subscription — as many clients as you want",
    // Pricing
    pr_tag: "PRICING",
    pr_title: "One subscription. Everything included.",
    pr_sub: "No hidden fees. No percentage taken from your ad budget.",
    pr_per: "/month",
    pr_trial_badge: "14 days free · Card required",
    pr_f1: "✅ Unlimited campaigns",
    pr_f2: "✅ 24/7 autopilot — monitoring every 6 hours",
    pr_f3: "✅ AI photo creatives with custom script",
    pr_f4: "✅ AI video with custom script (Stories, Reels)",
    pr_f5: "✅ A/B testing with auto-winner selection",
    pr_f6: "✅ Auto-optimization (pause / scale / rotate)",
    pr_f7: "✅ Unlimited projects",
    pr_f8: "✅ 19 business niches with AI expertise",
    pr_f9: "✅ Retargeting and lead forms",
    pr_vs: "Compare: agencies charge $500–2000/month for a single account",
    pr_btn: "🚀 Try Free for 14 Days",
    pr_note: "Card required · 14 days free · Then $49/mo · Cancel anytime",
    // Social Proof
    sp_tag: "TYPICAL RESULTS",
    sp_title: "What happens in the first 30 days",
    sp_sub: "Results vary by niche, budget, and market. These are benchmarks, not guarantees.",
    sp1_niche: "🏋️ Fitness & Health",
    sp1_metric: "CPL $2–6",
    sp1_desc: "First leads within 48 hours of launch",
    sp2_niche: "💅 Beauty & Salons",
    sp2_metric: "CTR 2–4%",
    sp2_desc: "Bookings via lead form — no website needed",
    sp3_niche: "🏠 Real Estate",
    sp3_metric: "2–3× cheaper",
    sp3_desc: "Cost per lead lower than through an agency",
    sp4_niche: "📚 Online Courses",
    sp4_metric: "Day 7: winner found",
    sp4_desc: "3 ad variants tested automatically",
    // Compare
    cmp_tag: "COMPARISON",
    cmp_title: "AdPilot vs Agency vs DIY",
    cmp_sub: "Why thousands of businesses choose the AI agent",
    ct_h0: "", ct_best: "Best Choice", ct_h2: "Agency", ct_h3: "Do It Yourself",
    ct_r1: "Monthly subscription", ct_r1a: "$49/mo", ct_r1b: "$500–2000/mo", ct_r1c: "Free",
    ct_r2: "Time to launch", ct_r2a: "15 minutes", ct_r2b: "2–4 weeks", ct_r2c: "3–5 hours",
    ct_r3: "Ad quality", ct_r3a: "AI + 8 criteria", ct_r3b: "Depends on person", ct_r3c: "Depends on you",
    ct_r4: "A/B testing", ct_r4a: "✓ Automatic", ct_r4b: "Extra cost", ct_r4c: "Manual",
    ct_r5: "Languages", ct_r5a: "15 natively", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Works 24/7", ct_r6a: "✓ Always", ct_r6b: "Business hours", ct_r6c: "✗",
    // Trust
    trust_tag: "TECHNOLOGY",
    trust_title: "Built on the world's best AI models",
    t1_name: "Claude 4", t1_desc: "Chief reviewer & strategist",
    t2_name: "Gemini", t2_desc: "Ad generation",
    t3_name: "GPT-4", t3_desc: "Ad generation",
    t4_name: "Meta API", t4_desc: "Auto campaign launch",
    tb1: "Your password is never shared", tb2: "Data is protected", tb3: "GDPR compliant",
    // FAQ
    faq_tag: "FAQ", faq_title: "Frequently Asked Questions",
    faq1_q: "Do I need technical knowledge to use AdPilot?",
    faq1_a: "No. Everything happens through a regular Telegram chat. You just answer questions like talking to a consultant. AI does the rest.",
    faq2_q: "Do I give AdPilot access to my ad account?",
    faq2_a: "You authorize AdPilot through the official Meta Business API — a secure standard method. Your Facebook password is never shared. You can revoke access at any time.",
    faq3_q: "How much does AdPilot cost?",
    faq3_a: "AdPilot is $49/month. The first 14 days are free — a card is required at signup but you won't be charged until after the trial. Additionally you pay for your Meta ad budget directly (you control the amount). AdPilot never takes a percentage of your ad spend.",
    faq4_q: "Which niches does AdPilot support?",
    faq4_a: "The system is optimized for 19 niches: restaurants, beauty salons, fitness, online courses, real estate, clothing, healthcare, legal services, auto service, and more.",
    faq5_q: "What if I don't like the ads?",
    faq5_a: "You always see the ads before launch and can request new variants through Telegram. The campaign only launches after your confirmation.",
    faq6_q: "What does AI generate beyond ad copy?",
    faq6_a: "AdPilot generates not just ad text, but also visual creatives: photo banners for Facebook and Instagram, and video content in Stories and Reels format. Everything is created for your niche and brand — from a single Telegram request, no designer or videographer needed.",
    faq7_q: "How does the autopilot work after launch?",
    faq7_a: "After launch, AdPilot checks your campaigns every 6 hours — tracking CTR, CPL, and ad frequency. Every morning you get a Telegram report. On day 7, the A/B test closes automatically and the winner gets the full budget. All critical actions (pause, scale, rotate) need your approval.",
    // CTA
    cta_tag: "START TODAY",
    cta_title: "14 days free — try AdPilot risk-free",
    cta_sub: "Card required at signup. No hidden fees. Cancel anytime.",
    cta_btn: "🚀 Start Your 14-Day Trial",
    cta_note: "14 days free · Card required · Then $49/mo · Cancel anytime",
    footer_copy: "© 2026 AdPilot. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_contact: "Contact",
  },
  pl: {
    nav_try: "Wypróbuj",
    nav_pricing: "Cennik",
    badge: "Powered by Claude 4 · Gemini · GPT-4",
    hero_title_1: "Reklamy w Meta",
    hero_title_3: "gdy Ty prowadzisz biznes",
    hero_sub: "Opisz swój biznes w 10 minut — AI napisze ogłoszenia, dobierze grupę docelową i uruchomi kampanię. Potem pilnuje 24/7, optymalizuje i wysyła Ci raport co rano.",
    btn_start: "🚀 Wypróbuj 14 dni za darmo",
    btn_demo: "Zobacz jak działa",
    chat_online: "● online",
    cm1: "Cześć! Mam kawiarnię w centrum Warszawy",
    cm2: "Świetnie! Co wyróżnia Twoją kawiarnię?",
    cm3: "Specialty coffee i autorskie śniadania",
    cm4: "🔍 Analizuję niszę i konkurencję...",
    cm5a: "3 ogłoszenia napisane", cm5b: "Grupa docelowa skonfigurowana", cm5c: "Wynik AI:",
    cm6: "🚀 Uruchom w Meta",
    pb1: "10× szybciej niż agencja", pb2: "Autopilot 24/7 — pilnuje gdy śpisz", pb3: "Zwycięzca A/B wybierany automatycznie", pb4: "Bez dostępu do Twojego hasła",
    stat_1_num: "6h", stat_1_label: "monitoring kampanii",
    stat_2_num: "9+", stat_2_label: "wariantów reklam",
    stat_3_num: "15 min", stat_3_label: "do uruchomienia",
    stat_4_num: "19", stat_4_label: "nisz biznesowych",
    // Autopilot
    ap_tag: "AUTOPILOT 24/7",
    ap_title: "Uruchomiłeś — i zapomnij.<br>AI pilnuje sam.",
    ap_sub: "Po uruchomieniu kampanii AdPilot przechodzi w tryb autopilota. Ty pracujesz — on optymalizuje.",
    ap_t1_time: "Co 6 godzin",
    ap_t1_text: "Sprawdza CTR, CPL i częstotliwość wyświetleń każdej kampanii",
    ap_t2_time: "Każdy ranek",
    ap_t2_text: "Raport w Telegramie z metrykami i radą eksperta AI",
    ap_t3_time: "Dzień 7",
    ap_t3_text: "Test A/B zakończony — AI wybiera zwycięzcę i przenosi cały budżet",
    ap_t4_time: "ROAS powyżej celu",
    ap_t4_text: "Proponuje skalowanie budżetu +20% — zatwierdzasz jednym kliknięciem",
    ap_t5_time: "Częstotliwość > 4.0",
    ap_t5_text: "Wykrywa zmęczenie reklamy i proponuje świeży wariant",
    ap_t6_time: "Co poniedziałek",
    ap_t6_text: "Tygodniowy raport PDF z dynamiką wyników",
    ap_note: "Wszystkie ważne działania wymagają Twojej zgody. Nic nie dzieje się bez Twojej wiedzy.",
    // How it works
    how_tag: "JAK TO DZIAŁA",
    how_title: "Trzy kroki do uruchomienia reklamy",
    how_sub: "Żadnych agencji, żadnej złożoności. Po prostu opowiedz o biznesie.",
    step1_num: "KROK 1", step1_title: "Opowiedz o swoim biznesie",
    step1_text: "Odpowiedz na pytania konsultanta AI w Telegramie. Co sprzedajesz, komu, gdzie. Zajmuje 5–10 minut.",
    step2_num: "KROK 2", step2_title: "AI tworzy kampanię",
    step2_text: "Claude, Gemini i GPT-4 rywalizują. Recenzent Claude wybiera tylko 8+/10.",
    step3_num: "KROK 3", step3_title: "Uruchomienie jednym kliknięciem",
    step3_text: "Kliknij Uruchom — AdPilot automatycznie tworzy kampanię, zestawy reklam i wgrywa teksty do Meta.",
    // Results
    res_tag: "CO OTRZYMUJESZ",
    res_title: "Konkretne wyniki, nie obietnice",
    rcb1_before: "Wcześniej", rcb1_old: "4–6 godzin", rcb1_new: "15 minut", rcb1_label: "na uruchomienie kampanii",
    rcb2_before: "Agencja", rcb2_old: "$500–2000/mies", rcb2_new: "$49/mies", rcb2_label: "zamiast $500–2000 za agencję",
    rcb3_before: "Junior copywriter", rcb3_old: "1–2 ogłoszenia", rcb3_new: "9+ wariantów", rcb3_label: "z oceną 8+/10 wg Ogilvy",
    rcb4_before: "Samodzielnie", rcb4_old: "raz w tygodniu", rcb4_new: "co 6 godzin", rcb4_label: "monitoring kampanii",
    // Features
    feat_tag: "MOŻLIWOŚCI",
    feat_title: "Wszystko do inteligentnej reklamy",
    feat_sub: "Technologie Fortune 500 — teraz dostępne dla każdej firmy",
    f1_title: "Trzy modele AI rywalizują",
    f1_text: "Claude 4, Gemini i GPT-4 niezależnie piszą ogłoszenia. Recenzent Claude ocenia według 8 kryteriów. Przechodzą tylko 8+/10.",
    f2_title: "Inteligentny targeting w 19 niszach",
    f2_text: "Dla każdej z 19 nisz — sprawdzone zainteresowania, wiek, geo i formaty. Nie zgadywanie — gotowa baza wiedzy.",
    f3_title: "15 języków natywnie",
    f3_text: "Polski, angielski, ukraiński, niemiecki, francuski i 10 innych języków UE. Każde ogłoszenie pisane natywnie.",
    f4_title: "AI generuje zdjęcia i wideo",
    f4_text: "AdPilot pisze scenariusz pod każdą kreację, a następnie ją generuje: banery na Facebook, Stories i Reels na Instagram. Nie szablony — unikalny scenariusz i wizualizacja pod Twój produkt.",
    f5_title: "Test A/B automatycznie",
    f5_text: "Uruchamia 3 warianty z równym budżetem. Po 7 dniach AI wyłania zwycięzcę i przenosi cały budżet — bez Twojego udziału.",
    f6_title: "Monitoring co 6 godzin",
    f6_text: "Bot sprawdza kampanie co 6 godzin. Zły CPL — proponuje pauzę. Dobry ROAS — proponuje skalowanie. Wszystko za Twoją zgodą.",
    // AI Score
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
    // Agency
    ag_tag: "DLA AGENCJI",
    ag_title: "Obsługujesz wielu klientów?<br>AdPilot to Twój operacyjny superinteligent",
    ag_sub: "Jeden abonament — nieograniczona liczba projektów klientów. Każdy z własnym kontem Meta.",
    ag_calc_label: "Oszczędność Twojego czasu:",
    ag_calc_before: "4h × 10 klientów = 40 h/miesiąc",
    ag_calc_after: "15 min × 10 = 2.5 godziny",
    ag_btn: "🏢 Wypróbuj dla agencji",
    ag_f1: "Nieograniczona liczba projektów",
    ag_f2: "Osobne konto Meta dla każdego klienta",
    ag_f3: "Pełna izolacja danych między klientami",
    ag_f4: "Raporty dla każdego projektu osobno",
    ag_f5: "Uruchomienie kampanii — 15 minut zamiast 4–6 godzin",
    ag_f6: "Jeden abonament — ilu klientów chcesz",
    // Pricing
    pr_tag: "CENNIK",
    pr_title: "Jeden abonament. Wszystko włączone.",
    pr_sub: "Żadnych ukrytych opłat. Żadnego procentu od budżetu.",
    pr_per: "/miesiąc",
    pr_trial_badge: "14 dni za darmo · Karta wymagana",
    pr_f1: "✅ Nieograniczona liczba kampanii",
    pr_f2: "✅ Autopilot 24/7 — monitoring co 6 godzin",
    pr_f3: "✅ AI kreacje foto z własnym scenariuszem",
    pr_f4: "✅ AI wideo z własnym scenariuszem (Stories, Reels)",
    pr_f5: "✅ Test A/B z automatycznym wyborem zwycięzcy",
    pr_f6: "✅ Auto-optymalizacja (pauza / skalowanie / rotacja)",
    pr_f7: "✅ Nieograniczona liczba projektów",
    pr_f8: "✅ 19 nisz biznesowych z wiedzą AI",
    pr_f9: "✅ Retargeting i formularze leadów",
    pr_vs: "Porównaj: agencja pobiera $500–2000/mies. za jedno konto",
    pr_btn: "🚀 Wypróbuj 14 dni za darmo",
    pr_note: "Karta wymagana · 14 dni za darmo · Potem $49/mies · Anuluj kiedy chcesz",
    // Social Proof
    sp_tag: "TYPOWY START",
    sp_title: "Co się dzieje w pierwszych 30 dniach",
    sp_sub: "Wyniki zależą od niszy, budżetu i rynku. To są punkty odniesienia, nie gwarancje.",
    sp1_niche: "🏋️ Fitness i zdrowie",
    sp1_metric: "CPL $2–6",
    sp1_desc: "Pierwsze leady — 48 godzin po uruchomieniu",
    sp2_niche: "💅 Beauty i salony",
    sp2_metric: "CTR 2–4%",
    sp2_desc: "Rezerwacja przez formularz leadów, bez strony, prosto w Instagramie",
    sp3_niche: "🏠 Nieruchomości",
    sp3_metric: "2–3× taniej",
    sp3_desc: "Koszt zapytania niższy niż przez agencję",
    sp4_niche: "📚 Kursy online",
    sp4_metric: "Dzień 7: jest zwycięzca",
    sp4_desc: "3 warianty reklam testowane automatycznie",
    // Compare
    cmp_tag: "PORÓWNANIE",
    cmp_title: "AdPilot vs Agencja vs Samemu",
    cmp_sub: "Dlaczego tysiące firm wybierają agenta AI",
    ct_h0: "", ct_best: "Najlepszy wybór", ct_h2: "Agencja", ct_h3: "Samodzielnie",
    ct_r1: "Abonament miesięczny", ct_r1a: "$49/mies", ct_r1b: "$500–2000/mies", ct_r1c: "Bezpłatnie",
    ct_r2: "Czas do startu", ct_r2a: "15 minut", ct_r2b: "2–4 tygodnie", ct_r2c: "3–5 godzin",
    ct_r3: "Jakość tekstów", ct_r3a: "AI + 8 kryteriów", ct_r3b: "Zależy od osoby", ct_r3c: "Zależy od Ciebie",
    ct_r4: "Test A/B", ct_r4a: "✓ Automatycznie", ct_r4b: "Dodatkowa opłata", ct_r4c: "Ręcznie",
    ct_r5: "Języki", ct_r5a: "15 natywnie", ct_r5b: "1–2", ct_r5c: "1",
    ct_r6: "Działa 24/7", ct_r6a: "✓ Zawsze", ct_r6b: "Godziny pracy", ct_r6c: "✗",
    // Trust
    trust_tag: "TECHNOLOGIA",
    trust_title: "Zbudowany na najlepszych modelach AI świata",
    t1_name: "Claude 4", t1_desc: "Główny recenzent i strateg",
    t2_name: "Gemini", t2_desc: "Generowanie wariantów",
    t3_name: "GPT-4", t3_desc: "Generowanie wariantów",
    t4_name: "Meta API", t4_desc: "Auto-uruchomienie kampanii",
    tb1: "Twoje hasło nie jest przekazywane", tb2: "Dane są chronione", tb3: "Zgodność z GDPR",
    // FAQ
    faq_tag: "PYTANIA", faq_title: "Często zadawane pytania",
    faq1_q: "Czy potrzebuję wiedzy technicznej?",
    faq1_a: "Nie. Wszystko odbywa się przez zwykły czat Telegram. Po prostu odpowiadasz na pytania jak w rozmowie z konsultantem.",
    faq2_q: "Czy przekazuję AdPilot dostęp do konta reklamowego?",
    faq2_a: "Autoryzujesz AdPilot przez oficjalne Meta Business API. Twoje hasło do Facebooka nigdzie nie jest przekazywane. Możesz cofnąć dostęp kiedy chcesz.",
    faq3_q: "Ile kosztuje AdPilot?",
    faq3_a: "AdPilot kosztuje $49/miesiąc. Pierwsze 14 dni są bezpłatne — karta jest wymagana przy rejestracji, ale opłata zostanie pobrana dopiero po zakończeniu okresu próbnego. Dodatkowo płacisz tylko za budżet reklamowy bezpośrednio do Meta — AdPilot nie pobiera prowizji od budżetu.",
    faq4_q: "Dla jakich nisz działa AdPilot?",
    faq4_a: "System jest zoptymalizowany dla 19 nisz: restauracje, salony urody, fitness, kursy online, nieruchomości, odzież, medycyna, usługi prawne i inne.",
    faq5_q: "Co jeśli ogłoszenia mi się nie spodobają?",
    faq5_a: "Zawsze widzisz ogłoszenia przed uruchomieniem i możesz poprosić o nowe warianty. Kampania startuje dopiero po Twoim potwierdzeniu.",
    faq6_q: "Co AI generuje poza tekstami reklamowymi?",
    faq6_a: "AdPilot generuje nie tylko teksty ogłoszeń, ale także kreacje wizualne: banery foto na Facebook i Instagram oraz filmy wideo w formacie Stories i Reels. Wszystko tworzone pod Twoją niszę i markę — jednym poleceniem w Telegramie, bez projektanta i kamerzysty.",
    faq7_q: "Jak działa autopilot po uruchomieniu?",
    faq7_a: "Po uruchomieniu kampanii AdPilot sprawdza ją co 6 godzin — CTR, CPL, częstotliwość. Każdy ranek dostajesz raport w Telegramie. W dniu 7. test A/B kończy się automatycznie — AI wybiera lepszy wariant i przenosi cały budżet. Wszystkie krytyczne działania wymagają Twojej zgody.",
    // CTA
    cta_tag: "ZACZNIJ DZIŚ",
    cta_title: "14 dni za darmo — przetestuj AdPilot bez ryzyka",
    cta_sub: "Karta wymagana przy rejestracji. Żadnych ukrytych opłat. Anuluj kiedy chcesz.",
    cta_btn: "🚀 Rozpocznij 14-dniowy trial",
    cta_note: "14 dni za darmo · Karta wymagana · Potem $49/mies · Anuluj kiedy chcesz",
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
