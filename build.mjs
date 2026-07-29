import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://adpilot.projectstudio-big.net';
const locales = ['ru', 'en', 'pl', 'uk'];

const copy = {
  ru: {
    langName: 'Русский',
    metaTitle: 'AdPilot — бесплатный AI-разбор рекламы для Meta и TikTok',
    metaDescription: 'Ответьте на вопросы о бизнесе и бесплатно получите персональную стратегическую рекомендацию. Без карты, подключения Meta и API-ключей.',
    skip: 'Перейти к содержанию',
    menu: 'Открыть меню',
    nav: ['Как работает', 'Что получите', 'Безопасность', 'Цена', 'Вопросы'],
    navTry: 'Получить разбор',
    heroBadge: 'AI-стратег для рекламы в Meta и TikTok',
    heroTitle: 'Поймите, какую рекламу запускать — до подключения кабинета',
    heroLead: 'Ответьте на вопросы о бизнесе в Telegram. AdPilot разберёт оффер, аудиторию и путь клиента, затем покажет персональную стратегическую рекомендацию и объяснит ключевые выводы.',
    primary: 'Получить бесплатный разбор',
    secondary: 'Посмотреть, как работает',
    previewNote: 'Без карты · без подключения Meta · без API-ключей',
    heroFacts: ['Персональный разбор', 'На основе ваших ответов', '10–15 минут'],
    chat: {
      online: 'онлайн',
      user: 'У меня салон в Варшаве. Хочу больше записей из Instagram.',
      answer: '<strong>Наблюдение стратега:</strong> для локальной услуги запись в Direct короче, чем переход на сайт. Но офферу не хватает конкретной причины записаться сейчас — уточним её.',
      settings: '<strong>Бесплатный стратегический разбор</strong><br>Рекомендуемая цель: Вовлечённость<br>Основной путь клиента: Instagram Direct',
      report: '<strong>В полном плане:</strong><br>структура кампании, рекламные углы, тексты, креативы и безопасный запуск.',
      approve: 'Открыть полный план'
    },
    trust: [
      ['До оплаты', 'Стратегия без подключения кабинета'],
      ['Контекст вашего бизнеса', 'Рекомендации на основе ваших ответов'],
      ['€150 в месяц', 'Полный доступ после решения клиента'],
      ['Только с подтверждением', 'Запуск и бюджет под вашим контролем']
    ],
    howKicker: 'Как это работает',
    howTitle: 'От первого ответа до работающей кампании — три понятных этапа',
    howLead: 'Сначала вы получаете ценность и видите уровень анализа. Подключение рекламного кабинета потребуется только после оплаты.',
    steps: [
      ['Пройдите интервью', 'Ответьте на вопросы о продукте, клиентах, экономике, географии и способе получения заявок. По ходу AdPilot объясняет, почему каждый ответ важен.'],
      ['Получите бесплатный разбор', 'Вы увидите рекомендуемую цель, основной путь клиента и ключевые выводы AI-стратега — без подключения Meta.'],
      ['Откройте полный AdPilot', 'После подписки вы получаете полный план, объявления, креативы, запуск через API, мониторинг и отчёты.']
    ],
    demoKicker: 'Продукт в действии',
    demoTitle: 'Вы видите не «магию AI», а конкретные решения',
    demoLead: 'Каждый этап остаётся прозрачным: что выбрано, почему и что произойдёт после подтверждения.',
    demoTabs: [
      ['Бесплатно', 'Персональный стратегический разбор'],
      ['После оплаты', 'Полный план и готовые решения'],
      ['Запуск', 'Проверка до отправки в кабинет'],
      ['Контроль', 'Отчёты и подтверждения']
    ],
    demoPanels: [
      ['До оплаты', 'Система показывает, как она мыслит о вашем бизнесе', 'AdPilot связывает оффер, аудиторию, экономику и путь заявки. Бесплатный результат достаточно полезен для оценки качества, но не содержит готовых к запуску объявлений и медиа.', [['Рекомендация', 'Вовлечённость → Instagram Direct'], ['Причина', 'Короткий путь до записи'], ['Подключение Meta', 'Не требуется']]],
      ['После оплаты', 'Полный план превращает выводы в кампанию', 'Открываются подробная структура, рекламные углы, тексты, требования к креативам и все параметры запуска.', [['Аудитория', 'Женщины, 20–40'], ['География', 'Варшава +20 км'], ['Бюджет', 'Рассчитан под экономику']]],
      ['Перед публикацией', 'Вы видите точные настройки и материалы', 'AdPilot проверяет соответствие цели и точки назначения, показывает объявления и отправляет их в кабинет только после подтверждения.', [['Варианты', 'AI-тексты и концепции'], ['Медиа', 'Свои или AI-инструменты'], ['Публикация', 'После подтверждения']]],
      ['После запуска', 'Отчёт заканчивается понятным следующим действием', 'Система сопоставляет метрики, этап обучения и обратную связь. Важные изменения не применяются молча — клиент нажимает кнопку подтверждения.', [['Проверка', 'Каждые 6 часов'], ['Отчёт', 'Каждое утро в Telegram'], ['Изменения', 'После вашего подтверждения']]]
    ],
    featuresKicker: 'Возможности',
    featuresTitle: 'После подписки — всё необходимое для запуска и контроля',
    featuresLead: 'Бесплатный разбор показывает направление. Полный продукт превращает его в работающую рекламную систему.',
    features: [
      ['01 / Стратегия', 'Профессиональная рекомендация', 'Цель, направление, аудитория и бюджет формируются из данных бизнеса, а не из случайного шаблона.'],
      ['02 / Креативы', 'Тексты и инструменты для медиа', 'Несколько рекламных концепций для Meta и TikTok, работа со своими материалами и доступ к AI-генерации после подписки.'],
      ['03 / Запуск', 'Создание кампании через API', 'После проверки AdPilot создаёт структуру кампании в подключённом рекламном кабинете.'],
      ['04 / Аналитика', 'Отчёты и предложения действий', 'Метрики переводятся на понятный язык: что происходит, почему и какое действие можно подтвердить.']
    ],
    controlKicker: 'Контроль',
    controlTitle: 'AI помогает принимать решения, но не забирает управление',
    controlLead: 'AdPilot автоматизирует рутину. Бюджет, остановка и другие критические действия остаются под вашим контролем.',
    controlChecks: ['Показывает настройки до запуска', 'Объясняет причину рекомендации', 'Предлагает действие только после анализа нескольких факторов', 'Применяет критическое изменение после подтверждения'],
    compareHead: ['AdPilot делает', 'Вы решаете'],
    compare: [['Анализирует анкету и метрики', 'Подключать ли рекламный кабинет'], ['Готовит кампанию и объявления', 'Принимать ли рекомендованные настройки'], ['Проверяет результат каждые 6 часов', 'Менять ли бюджет или ставить на паузу'], ['Присылает отчёты и предупреждения', 'Продолжать или отменить подписку']],
    securityKicker: 'Безопасность',
    securityTitle: 'Доступ без передачи пароля',
    securityLead: 'Подключение происходит через официальную авторизацию платформ. Клиентские проекты и данные разделены.',
    security: [
      ['OAuth', 'Пароль не передаётся', 'Вы входите на стороне Meta или TikTok и подтверждаете разрешения самостоятельно.'],
      ['Изоляция', 'Проекты не смешиваются', 'Аккаунты, настройки и отчёты каждого клиента обрабатываются отдельно.'],
      ['Согласие', 'Важные действия прозрачны', 'Перед бюджетом, паузой и другими критическими изменениями бот запрашивает подтверждение.'],
      ['Отзыв доступа', 'Контроль можно вернуть', 'Доступ приложения можно отозвать в настройках подключённой рекламной платформы.']
    ],
    priceKicker: 'Цена',
    priceTitle: 'Сначала оцените стратегию. Платите за полный результат.',
    priceLead: 'Персональный разбор бесплатен. Подключение кабинета, готовые объявления, креативы, запуск и автопилот открываются после подписки.',
    perMonth: '/месяц',
    previewBadge: 'До оплаты — бесплатный стратегический разбор',
    priceItems: ['Полная стратегия под ваш бизнес', 'AI-тексты и рекламные концепции', 'Кампании в Meta и TikTok', 'Проверка кампаний каждые 6 часов', 'Ежедневные отчёты в Telegram', 'Важные изменения после подтверждения'],
    exclusions: 'Рекламный бюджет оплачивается платформе отдельно. Бесплатный разбор не включает готовые объявления, подключение кабинета и генерацию фото или видео. Дополнительные премиальные генерации оплачиваются отдельно.',
    priceButton: 'Получить бесплатный разбор',
    faqKicker: 'Вопросы',
    faqTitle: 'Перед началом — коротко о важном',
    faqs: [
      ['Нужно ли разбираться в рекламе?', 'Нет. Бот сначала собирает данные о бизнесе, затем рекомендует настройки и объясняет их простыми словами. При желании опытный пользователь может изменить параметры вручную.'],
      ['Что именно я получу бесплатно?', 'Персональное интервью и стратегический разбор: рекомендуемую цель, основной путь клиента и ключевые выводы AI-стратега. Точная аудитория, география, бюджет, структура кампании, объявления и медиа открываются после подписки. Карта, Meta и API-ключи для разбора не нужны.'],
      ['Почему бесплатно не выдаются готовые объявления и медиа?', 'Чтобы показать качество анализа без риска неконтролируемых расходов. Полные тексты, изображения, видео, подключение кабинета и запуск относятся к платному продукту.'],
      ['Что входит в €150 в месяц?', 'Полный рекламный план, AI-тексты и концепции, запуск кампаний, мониторинг каждые 6 часов, ежедневные отчёты и предложения действий. Рекламный бюджет и дополнительные премиальные генерации оплачиваются отдельно.'],
      ['Нужно ли сразу подключать Meta или передавать пароль?', 'Нет. Для бесплатного разбора подключение не требуется. После подписки используется официальный OAuth — пароль AdPilot не получает.'],
      ['Когда появляются результаты?', 'Срок зависит от ниши, бюджета, предложения и прохождения модерации. AdPilot не гарантирует конкретный результат, но помогает правильно настроить процесс и принимать решения по данным.']
    ],
    finalKicker: 'Начните с фактов о своём бизнесе',
    finalTitle: 'Получите персональный рекламный разбор до оплаты',
    finalLead: '10–15 минут в Telegram. Без карты, рекламного кабинета и API-ключей. После результата вы сами решаете, открывать ли полный AdPilot.',
    finalButton: 'Начать бесплатный разбор',
    footerLinks: ['Конфиденциальность', 'Условия использования', 'Реквизиты', 'Контакт'],
    legal: 'HABELEV STANISLAV · рекламный бюджет и дополнительные премиальные генерации оплачиваются отдельно.'
  },
  en: {
    langName: 'English',
    metaTitle: 'AdPilot — free AI advertising review for Meta and TikTok',
    metaDescription: 'Answer a focused business interview and receive a personalised strategic recommendation for free. No card, ad-account connection or API keys.',
    skip: 'Skip to content', menu: 'Open menu',
    nav: ['How it works', 'What you get', 'Security', 'Pricing', 'FAQ'], navTry: 'Get a free review',
    heroBadge: 'AI strategist for Meta and TikTok advertising',
    heroTitle: 'Know what advertising to run — before connecting an ad account',
    heroLead: 'Answer focused questions in Telegram. AdPilot analyses your offer, audience and conversion path, then shows a personalised strategic recommendation and explains the key findings.',
    primary: 'Get my free business review', secondary: 'See how it works',
    previewNote: 'No card · no Meta connection · no API keys',
    heroFacts: ['Personalised review', 'Based on your answers', '10–15 minutes'],
    chat: {
      online: 'online',
      user: 'I run a salon in Warsaw and want more bookings from Instagram.',
      answer: '<strong>Strategist’s observation:</strong> for a local service, Direct is a shorter path to a booking than a website. But the offer still needs a concrete reason to book now — let’s clarify it.',
      settings: '<strong>Free strategic review</strong><br>Recommended objective: Engagement<br>Primary customer path: Instagram Direct',
      report: '<strong>Inside the full plan:</strong><br>campaign structure, advertising angles, copy, creative direction and a safe launch workflow.',
      approve: 'Unlock the full plan'
    },
    trust: [['Before payment', 'Strategy without connecting an ad account'], ['Your business context', 'Recommendations based on your answers'], ['€150 per month', 'Full access only after your decision'], ['Approval required', 'Launch and budget remain under your control']],
    howKicker: 'How it works', howTitle: 'From the first answer to a working campaign — in three clear stages', howLead: 'You receive useful analysis first. Connecting an ad account is only required after you choose the paid product.',
    steps: [['Complete the expert interview', 'Answer questions about your offer, customers, economics, geography and enquiry path. AdPilot explains why each answer matters.'], ['Receive a free strategic review', 'See the recommended objective, primary customer path and key AI-strategist findings — without connecting Meta.'], ['Unlock the full AdPilot', 'After subscribing, you receive the full plan, ads, creative tools, API launch, monitoring and reports.']],
    demoKicker: 'Product in action', demoTitle: 'Concrete decisions, not “AI magic”', demoLead: 'Every stage remains transparent: what was selected, why it fits the business and what opens after subscription.',
    demoTabs: [['Free', 'Personalised strategic review'], ['After payment', 'Full plan and launch-ready decisions'], ['Launch', 'Review before publishing'], ['Control', 'Reports and approvals']],
    demoPanels: [
      ['Before payment', 'See how the system thinks about your business', 'AdPilot connects the offer, audience, economics and conversion path. The free result is useful enough to judge quality, but it does not include launch-ready ads or media.', [['Recommendation', 'Engagement → Instagram Direct'], ['Reason', 'Shorter path to a booking'], ['Meta connection', 'Not required']]],
      ['After payment', 'The full plan turns conclusions into a campaign', 'Detailed campaign structure, advertising angles, copy, creative requirements and every launch parameter become available.', [['Audience', 'Women, 20–40'], ['Geography', 'Warsaw +20 km'], ['Budget', 'Calculated from the business economics']]],
      ['Before publishing', 'Review the exact settings and materials', 'AdPilot checks the objective against the destination, shows the ads and sends them to the account only after approval.', [['Options', 'AI copy and concepts'], ['Media', 'Your assets or AI tools'], ['Publishing', 'After approval']]],
      ['After launch', 'Every report ends with a clear next action', 'The system combines metrics, learning phase and business feedback. Important changes are never applied silently.', [['Checks', 'Every 6 hours'], ['Report', 'Every morning in Telegram'], ['Changes', 'After your approval']]]
    ],
    featuresKicker: 'Full product', featuresTitle: 'After subscription — everything needed to launch and stay in control', featuresLead: 'The free review shows the direction. The paid product turns it into an operating advertising system.',
    features: [['01 / Strategy', 'A professional recommendation', 'Objective, destination, audience and budget are based on business data, not a random template.'], ['02 / Creative', 'Copy and media tools', 'Multiple advertising concepts, support for your own materials and access to AI generation after subscription.'], ['03 / Launch', 'Campaign creation through APIs', 'After review, AdPilot creates the campaign structure in the connected ad account.'], ['04 / Analytics', 'Reports and suggested actions', 'Metrics become plain language: what is happening, why, and which action you can approve.']],
    controlKicker: 'Control', controlTitle: 'AI supports decisions without taking control away', controlLead: 'AdPilot automates routine work. Budget, pauses and other critical actions remain under your control.',
    controlChecks: ['Shows settings before launch', 'Explains why it recommends an option', 'Combines several factors before suggesting action', 'Applies critical changes only after approval'],
    compareHead: ['AdPilot handles', 'You decide'], compare: [['Analyses the interview and metrics', 'Whether to connect an ad account'], ['Prepares campaigns and ads', 'Whether to accept recommended settings'], ['Checks performance every 6 hours', 'Whether to change budget or pause'], ['Sends reports and warnings', 'Whether to continue the subscription']],
    securityKicker: 'Security', securityTitle: 'Evaluate the strategy without sharing access', securityLead: 'The free review needs no ad-account connection. After subscription, connections use official platform authorisation and client projects remain isolated.',
    security: [['Before payment', 'No Meta or TikTok connection', 'You can evaluate the analysis without handing over account access.'], ['OAuth', 'Your password is never shared', 'You sign in on Meta or TikTok and approve permissions yourself.'], ['Isolation', 'Projects do not mix', 'Accounts, settings and reports are processed separately for every client.'], ['Approval', 'Important actions stay transparent', 'The bot asks before budget, pause and other critical changes.']],
    priceKicker: 'Pricing', priceTitle: 'Evaluate the strategy first. Pay for the full result.', priceLead: 'The personalised business review is free. Full campaign preparation, creative tools, launch and monitoring open with the subscription.', perMonth: '/month', previewBadge: 'Before payment — free strategic review',
    priceItems: ['Full strategy for your business', 'AI copy and advertising concepts', 'Meta and TikTok campaigns', 'Campaign checks every 6 hours', 'Daily Telegram reports', 'Important changes require approval'], exclusions: 'Ad spend is paid directly to the platform. The free review excludes launch-ready ads, account connection and photo or video generation. Additional premium generations are billed separately.', priceButton: 'Get my free review',
    faqKicker: 'FAQ', faqTitle: 'What you should know before starting',
    faqs: [['What exactly do I receive for free?', 'A focused interview and strategic review: the recommended objective, primary customer path and key AI-strategist findings. Exact audience, geography, budget, campaign structure, ads and media unlock after subscription. No card, Meta connection or API key is required for the review.'], ['Why are ready ads and media not included for free?', 'This lets you evaluate the quality of the analysis without creating uncontrolled generation costs. Full copy, images, video, account connection and launch belong to the paid product.'], ['What does €150 per month unlock?', 'The full strategy, launch-ready copy and concepts, account connection, Meta and TikTok campaign launch, monitoring, reports and approval-based optimisation.'], ['Do I need to connect Meta or share a password first?', 'No. The free review requires no connection. After subscription, AdPilot uses official OAuth and never receives your password.'], ['Can the bot pause campaigns or increase budget by itself?', 'It analyses data and proposes an action. Critical changes are applied only after your approval.'], ['When will I see results?', 'Timing depends on the niche, budget, offer and moderation. AdPilot does not guarantee a particular result; it builds a safer process for data-informed decisions.']],
    finalKicker: 'Start with your real business', finalTitle: 'Get a personalised advertising review before you pay', finalLead: '10–15 minutes in Telegram. No card, ad account or API key. After seeing the result, you decide whether to unlock the full AdPilot.', finalButton: 'Start the free review',
    footerLinks: ['Privacy', 'Terms', 'Company details', 'Contact'], legal: 'HABELEV STANISLAV · ad spend and additional premium generations are billed separately.'
  },
  pl: {
    langName: 'Polski',
    metaTitle: 'AdPilot — bezpłatna analiza reklamy AI dla Meta i TikTok',
    metaDescription: 'Odpowiedz na pytania o firmę i bezpłatnie otrzymaj spersonalizowaną rekomendację strategiczną. Bez karty, podłączania Meta i kluczy API.',
    skip: 'Przejdź do treści', menu: 'Otwórz menu',
    nav: ['Jak to działa', 'Co otrzymasz', 'Bezpieczeństwo', 'Cena', 'Pytania'], navTry: 'Odbierz bezpłatną analizę',
    heroBadge: 'Strateg AI do reklam Meta i TikTok',
    heroTitle: 'Dowiedz się, jaką reklamę uruchomić — zanim podłączysz konto',
    heroLead: 'Odpowiedz na konkretne pytania w Telegramie. AdPilot przeanalizuje ofertę, odbiorców i ścieżkę zapytania, a następnie pokaże spersonalizowaną rekomendację strategiczną i wyjaśni kluczowe wnioski.',
    primary: 'Odbierz bezpłatną analizę', secondary: 'Zobacz, jak to działa',
    previewNote: 'Bez karty · bez podłączania Meta · bez kluczy API',
    heroFacts: ['Spersonalizowana analiza', 'Na podstawie Twoich odpowiedzi', '10–15 minut'],
    chat: {
      online: 'online',
      user: 'Prowadzę salon w Warszawie. Chcę więcej rezerwacji z Instagrama.',
      answer: '<strong>Obserwacja stratega:</strong> dla lokalnej usługi Direct to krótsza droga do rezerwacji niż strona. Ofercie brakuje jednak konkretnego powodu, by zapisać się właśnie teraz — doprecyzujmy go.',
      settings: '<strong>Bezpłatna analiza strategiczna</strong><br>Zalecany cel: Aktywność<br>Główna ścieżka klienta: Instagram Direct',
      report: '<strong>W pełnym planie:</strong><br>struktura kampanii, kąty reklamowe, teksty, kierunek kreacji i bezpieczny proces uruchomienia.',
      approve: 'Odblokuj pełny plan'
    },
    trust: [['Przed płatnością', 'Strategia bez podłączania konta'], ['Kontekst Twojej firmy', 'Rekomendacje oparte na Twoich odpowiedziach'], ['€150 miesięcznie', 'Pełny dostęp po Twojej decyzji'], ['Po zatwierdzeniu', 'Start i budżet pod Twoją kontrolą']],
    howKicker: 'Jak to działa', howTitle: 'Od pierwszej odpowiedzi do działającej kampanii — trzy jasne etapy', howLead: 'Najpierw otrzymujesz realną wartość i widzisz poziom analizy. Konto reklamowe podłączasz dopiero po wyborze płatnego produktu.',
    steps: [['Przejdź wywiad ekspercki', 'Odpowiedz na pytania o produkt, klientów, ekonomię, geografię i sposób pozyskiwania zapytań. AdPilot wyjaśnia, dlaczego każda odpowiedź ma znaczenie.'], ['Odbierz bezpłatną analizę', 'Zobacz zalecany cel, główną ścieżkę klienta i kluczowe wnioski stratega AI — bez podłączania Meta.'], ['Odblokuj pełny AdPilot', 'Po opłaceniu abonamentu otrzymujesz pełny plan, reklamy, narzędzia kreacji, uruchomienie przez API, monitoring i raporty.']],
    demoKicker: 'Produkt w praktyce', demoTitle: 'Konkretne decyzje zamiast „magii AI”', demoLead: 'Każdy etap jest przejrzysty: co wybrano, dlaczego pasuje do firmy i co otwiera abonament.',
    demoTabs: [['Bezpłatnie', 'Spersonalizowana analiza strategiczna'], ['Po płatności', 'Pełny plan i decyzje gotowe do wdrożenia'], ['Uruchomienie', 'Kontrola przed publikacją'], ['Nadzór', 'Raporty i zatwierdzenia']],
    demoPanels: [
      ['Przed płatnością', 'Zobacz, jak system myśli o Twojej firmie', 'AdPilot łączy ofertę, odbiorców, ekonomię i ścieżkę zapytania. Bezpłatny wynik pozwala ocenić jakość, ale nie zawiera gotowych do uruchomienia reklam ani mediów.', [['Rekomendacja', 'Aktywność → Instagram Direct'], ['Powód', 'Krótsza droga do rezerwacji'], ['Podłączenie Meta', 'Nie jest wymagane']]],
      ['Po płatności', 'Pełny plan zamienia wnioski w kampanię', 'Otwiera się szczegółowa struktura, kąty reklamowe, teksty, wymagania dla kreacji oraz wszystkie parametry uruchomienia.', [['Grupa', 'Kobiety, 20–40'], ['Geografia', 'Warszawa +20 km'], ['Budżet', 'Dopasowany do ekonomii biznesu']]],
      ['Przed publikacją', 'Widzisz dokładne ustawienia i materiały', 'AdPilot sprawdza zgodność celu i miejsca docelowego, pokazuje reklamy i wysyła je do konta dopiero po zatwierdzeniu.', [['Warianty', 'Teksty i koncepcje AI'], ['Media', 'Własne lub narzędzia AI'], ['Publikacja', 'Po zatwierdzeniu']]],
      ['Po uruchomieniu', 'Raport kończy się jasnym kolejnym krokiem', 'System łączy metryki, fazę uczenia i informacje o biznesie. Ważne zmiany nigdy nie są wykonywane po cichu.', [['Kontrola', 'Co 6 godzin'], ['Raport', 'Codziennie rano w Telegramie'], ['Zmiany', 'Po Twoim zatwierdzeniu']]]
    ],
    featuresKicker: 'Pełny produkt', featuresTitle: 'Po opłaceniu — wszystko do uruchomienia i kontroli reklamy', featuresLead: 'Bezpłatna analiza pokazuje kierunek. Pełny produkt zamienia go w działający system reklamowy.',
    features: [['01 / Strategia', 'Profesjonalna rekomendacja', 'Cel, miejsce docelowe, grupa i budżet wynikają z danych firmy, a nie przypadkowego szablonu.'], ['02 / Kreacje', 'Teksty i narzędzia medialne', 'Kilka koncepcji reklam, praca z własnymi materiałami i dostęp do generowania AI po opłaceniu.'], ['03 / Uruchomienie', 'Kampania tworzona przez API', 'Po sprawdzeniu AdPilot tworzy strukturę kampanii na podłączonym koncie reklamowym.'], ['04 / Analityka', 'Raporty i propozycje działań', 'Metryki są tłumaczone na prosty język: co się dzieje, dlaczego i co możesz zatwierdzić.']],
    controlKicker: 'Kontrola', controlTitle: 'AI pomaga podejmować decyzje, ale nie odbiera Ci sterowania', controlLead: 'AdPilot automatyzuje rutynę. Budżet, pauza i inne krytyczne działania pozostają pod Twoją kontrolą.', controlChecks: ['Pokazuje ustawienia przed startem', 'Wyjaśnia powód rekomendacji', 'Łączy kilka czynników przed propozycją', 'Wykonuje krytyczne zmiany po zatwierdzeniu'], compareHead: ['AdPilot robi', 'Ty decydujesz'], compare: [['Analizuje wywiad i metryki', 'Czy podłączyć konto reklamowe'], ['Przygotowuje kampanię i reklamy', 'Czy przyjąć rekomendowane ustawienia'], ['Sprawdza wynik co 6 godzin', 'Czy zmienić budżet lub włączyć pauzę'], ['Wysyła raporty i ostrzeżenia', 'Czy kontynuować abonament']],
    securityKicker: 'Bezpieczeństwo', securityTitle: 'Oceń strategię bez przekazywania dostępu', securityLead: 'Bezpłatna analiza nie wymaga konta reklamowego. Po opłaceniu połączenie odbywa się przez oficjalną autoryzację, a projekty klientów są odseparowane.', security: [['Przed płatnością', 'Bez podłączania Meta i TikTok', 'Możesz ocenić analizę bez przekazywania dostępu do konta.'], ['OAuth', 'Nie przekazujesz hasła', 'Logujesz się po stronie Meta lub TikTok i samodzielnie zatwierdzasz uprawnienia.'], ['Izolacja', 'Projekty się nie mieszają', 'Konta, ustawienia i raporty każdego klienta są przetwarzane osobno.'], ['Zgoda', 'Ważne działania są przejrzyste', 'Bot pyta przed zmianą budżetu, pauzą i innymi krytycznymi operacjami.']],
    priceKicker: 'Cena', priceTitle: 'Najpierw oceń strategię. Zapłać za pełny rezultat.', priceLead: 'Spersonalizowana analiza firmy jest bezpłatna. Pełne przygotowanie kampanii, kreacje, uruchomienie i monitoring otwiera abonament.', perMonth: '/miesiąc', previewBadge: 'Przed płatnością — bezpłatna analiza strategiczna',
    priceItems: ['Pełna strategia dla Twojej firmy', 'Teksty AI i koncepcje reklamowe', 'Kampanie Meta i TikTok', 'Kontrola kampanii co 6 godzin', 'Codzienne raporty w Telegramie', 'Ważne zmiany po zatwierdzeniu'], exclusions: 'Budżet reklamowy płacisz bezpośrednio platformie. Bezpłatna analiza nie obejmuje gotowych reklam, podłączenia konta ani generowania zdjęć lub wideo. Dodatkowe generacje premium są rozliczane osobno.', priceButton: 'Odbierz bezpłatną analizę',
    faqKicker: 'Pytania', faqTitle: 'Najważniejsze informacje przed startem',
    faqs: [['Co dokładnie otrzymam bezpłatnie?', 'Spersonalizowany wywiad i analizę strategiczną: zalecany cel, główną ścieżkę klienta i kluczowe wnioski stratega AI. Dokładna grupa, geografia, budżet, struktura kampanii, reklamy i media są dostępne po opłaceniu abonamentu. Do analizy nie potrzebujesz karty, Meta ani kluczy API.'], ['Dlaczego bezpłatnie nie dostaję gotowych reklam i mediów?', 'Dzięki temu oceniasz jakość analizy bez ryzyka niekontrolowanych kosztów generowania. Pełne teksty, obrazy, wideo, podłączenie konta i uruchomienie należą do płatnego produktu.'], ['Co otwiera €150 miesięcznie?', 'Pełną strategię, teksty i koncepcje gotowe do wdrożenia, podłączenie konta, uruchamianie kampanii Meta i TikTok, monitoring, raporty oraz optymalizację po zatwierdzeniu.'], ['Czy muszę od razu podłączyć Meta lub przekazać hasło?', 'Nie. Bezpłatna analiza nie wymaga podłączenia. Po opłaceniu AdPilot korzysta z oficjalnego OAuth i nigdy nie otrzymuje Twojego hasła.'], ['Czy bot sam zatrzyma kampanię albo podniesie budżet?', 'Bot analizuje dane i proponuje działanie. Krytyczne zmiany są wykonywane dopiero po Twoim zatwierdzeniu.'], ['Kiedy zobaczę wyniki?', 'Termin zależy od branży, budżetu, oferty i moderacji. AdPilot nie gwarantuje konkretnego wyniku — buduje bezpieczniejszy proces decyzji opartych na danych.']],
    finalKicker: 'Zacznij od własnej firmy', finalTitle: 'Odbierz spersonalizowaną analizę reklamy przed płatnością', finalLead: '10–15 minut w Telegramie. Bez karty, konta reklamowego i kluczy API. Po zobaczeniu wyniku sam decydujesz, czy otworzyć pełny AdPilot.', finalButton: 'Rozpocznij bezpłatną analizę',
    footerLinks: ['Prywatność', 'Warunki', 'Dane firmy', 'Kontakt'], legal: 'HABELEV STANISLAV · budżet reklamowy i dodatkowe generacje premium są rozliczane osobno.'
  },
  uk: {
    langName: 'Українська',
    metaTitle: 'AdPilot — безкоштовний AI-розбір реклами для Meta і TikTok',
    metaDescription: 'Дайте відповіді про бізнес і безкоштовно отримайте персоналізовану стратегічну рекомендацію. Без картки, підключення Meta та API-ключів.',
    skip: 'Перейти до вмісту', menu: 'Відкрити меню',
    nav: ['Як це працює', 'Що ви отримаєте', 'Безпека', 'Ціна', 'Питання'], navTry: 'Отримати безкоштовний розбір',
    heroBadge: 'AI-стратег для реклами в Meta і TikTok',
    heroTitle: 'Зрозумійте, яку рекламу запускати — до підключення кабінету',
    heroLead: 'Дайте відповіді на конкретні запитання в Telegram. AdPilot проаналізує пропозицію, аудиторію та шлях заявки, а потім покаже персоналізовану стратегічну рекомендацію й пояснить ключові висновки.',
    primary: 'Отримати безкоштовний розбір', secondary: 'Подивитися, як це працює',
    previewNote: 'Без картки · без підключення Meta · без API-ключів',
    heroFacts: ['Персоналізований розбір', 'На основі ваших відповідей', '10–15 хвилин'],
    chat: {
      online: 'онлайн',
      user: 'У мене салон у Варшаві. Хочу більше записів з Instagram.',
      answer: '<strong>Спостереження стратега:</strong> для локальної послуги Direct — коротший шлях до запису, ніж сайт. Але пропозиції бракує конкретної причини записатися саме зараз — уточнімо її.',
      settings: '<strong>Безкоштовний стратегічний розбір</strong><br>Рекомендована ціль: Залученість<br>Основний шлях клієнта: Instagram Direct',
      report: '<strong>У повному плані:</strong><br>структура кампанії, рекламні кути, тексти, напрям креативів і безпечний процес запуску.',
      approve: 'Відкрити повний план'
    },
    trust: [['До оплати', 'Стратегія без підключення кабінету'], ['Контекст вашого бізнесу', 'Рекомендації на основі ваших відповідей'], ['€150 на місяць', 'Повний доступ після вашого рішення'], ['Після підтвердження', 'Запуск і бюджет під вашим контролем']],
    howKicker: 'Як це працює', howTitle: 'Від першої відповіді до робочої кампанії — три зрозумілі етапи', howLead: 'Спочатку ви отримуєте цінність і бачите рівень аналізу. Рекламний кабінет знадобиться лише після вибору платного продукту.',
    steps: [['Пройдіть експертне інтерв’ю', 'Дайте відповіді про продукт, клієнтів, економіку, географію та спосіб отримання заявок. AdPilot пояснює, чому важлива кожна відповідь.'], ['Отримайте безкоштовний розбір', 'Побачте рекомендовану ціль, основний шлях клієнта та ключові висновки AI-стратега — без підключення Meta.'], ['Відкрийте повний AdPilot', 'Після підписки ви отримуєте повний план, оголошення, інструменти креативів, запуск через API, моніторинг і звіти.']],
    demoKicker: 'Продукт у дії', demoTitle: 'Конкретні рішення замість «магії AI»', demoLead: 'Кожен етап прозорий: що обрано, чому це підходить бізнесу та що відкривається після підписки.',
    demoTabs: [['Безкоштовно', 'Персоналізований стратегічний розбір'], ['Після оплати', 'Повний план і готові рішення'], ['Запуск', 'Перевірка до публікації'], ['Контроль', 'Звіти й підтвердження']],
    demoPanels: [
      ['До оплати', 'Побачте, як система мислить про ваш бізнес', 'AdPilot пов’язує пропозицію, аудиторію, економіку та шлях заявки. Безкоштовний результат корисний для оцінки якості, але не містить готових до запуску оголошень і медіа.', [['Рекомендація', 'Залученість → Instagram Direct'], ['Причина', 'Коротший шлях до запису'], ['Підключення Meta', 'Не потрібне']]],
      ['Після оплати', 'Повний план перетворює висновки на кампанію', 'Відкриваються детальна структура, рекламні кути, тексти, вимоги до креативів і всі параметри запуску.', [['Аудиторія', 'Жінки, 20–40'], ['Географія', 'Варшава +20 км'], ['Бюджет', 'Розрахований під економіку бізнесу']]],
      ['Перед публікацією', 'Ви бачите точні налаштування й матеріали', 'AdPilot перевіряє відповідність цілі та точки призначення, показує оголошення й відправляє їх у кабінет лише після підтвердження.', [['Варіанти', 'AI-тексти й концепції'], ['Медіа', 'Власні або AI-інструменти'], ['Публікація', 'Після підтвердження']]],
      ['Після запуску', 'Звіт завершується зрозумілою наступною дією', 'Система зіставляє метрики, етап навчання та дані бізнесу. Важливі зміни не застосовуються мовчки.', [['Перевірка', 'Кожні 6 годин'], ['Звіт', 'Щоранку в Telegram'], ['Зміни', 'Після вашого підтвердження']]]
    ],
    featuresKicker: 'Повний продукт', featuresTitle: 'Після підписки — усе для запуску й контролю реклами', featuresLead: 'Безкоштовний розбір показує напрям. Повний продукт перетворює його на робочу рекламну систему.',
    features: [['01 / Стратегія', 'Професійна рекомендація', 'Ціль, точка призначення, аудиторія та бюджет формуються з даних бізнесу, а не випадкового шаблону.'], ['02 / Креативи', 'Тексти й інструменти для медіа', 'Кілька рекламних концепцій, робота з власними матеріалами та доступ до AI-генерації після підписки.'], ['03 / Запуск', 'Створення кампанії через API', 'Після перевірки AdPilot створює структуру кампанії в підключеному рекламному кабінеті.'], ['04 / Аналітика', 'Звіти та пропозиції дій', 'Метрики перекладаються простою мовою: що відбувається, чому і яку дію можна підтвердити.']],
    controlKicker: 'Контроль', controlTitle: 'AI допомагає приймати рішення, але не забирає керування', controlLead: 'AdPilot автоматизує рутину. Бюджет, зупинка та інші критичні дії залишаються під вашим контролем.', controlChecks: ['Показує налаштування до запуску', 'Пояснює причину рекомендації', 'Враховує кілька факторів перед пропозицією', 'Застосовує критичні зміни після підтвердження'], compareHead: ['AdPilot робить', 'Ви вирішуєте'], compare: [['Аналізує інтерв’ю й метрики', 'Чи підключати рекламний кабінет'], ['Готує кампанію та оголошення', 'Чи приймати рекомендовані налаштування'], ['Перевіряє результат кожні 6 годин', 'Чи змінювати бюджет або ставити на паузу'], ['Надсилає звіти й попередження', 'Чи продовжувати підписку']],
    securityKicker: 'Безпека', securityTitle: 'Оцініть стратегію без передачі доступу', securityLead: 'Безкоштовний розбір не потребує рекламного кабінету. Після підписки підключення відбувається через офіційну авторизацію, а проєкти клієнтів ізольовані.', security: [['До оплати', 'Без підключення Meta і TikTok', 'Ви можете оцінити аналіз без передачі доступу до акаунта.'], ['OAuth', 'Пароль не передається', 'Ви входите на стороні Meta або TikTok і самостійно підтверджуєте дозволи.'], ['Ізоляція', 'Проєкти не змішуються', 'Акаунти, налаштування й звіти кожного клієнта обробляються окремо.'], ['Згода', 'Важливі дії прозорі', 'Перед бюджетом, паузою та іншими критичними змінами бот просить підтвердження.']],
    priceKicker: 'Ціна', priceTitle: 'Спочатку оцініть стратегію. Платіть за повний результат.', priceLead: 'Персоналізований розбір бізнесу безкоштовний. Повна підготовка кампанії, креативи, запуск і моніторинг відкриваються з підпискою.', perMonth: '/місяць', previewBadge: 'До оплати — безкоштовний стратегічний розбір',
    priceItems: ['Повна стратегія для вашого бізнесу', 'AI-тексти й рекламні концепції', 'Кампанії в Meta і TikTok', 'Перевірка кампаній кожні 6 годин', 'Щоденні звіти в Telegram', 'Важливі зміни після підтвердження'], exclusions: 'Рекламний бюджет оплачується платформі окремо. Безкоштовний розбір не містить готових оголошень, підключення кабінету та генерації фото чи відео. Додаткові преміальні генерації оплачуються окремо.', priceButton: 'Отримати безкоштовний розбір',
    faqKicker: 'Питання', faqTitle: 'Коротко про важливе перед початком',
    faqs: [['Що саме я отримаю безкоштовно?', 'Персоналізоване інтерв’ю та стратегічний розбір: рекомендовану ціль, основний шлях клієнта й ключові висновки AI-стратега. Точна аудиторія, географія, бюджет, структура кампанії, оголошення та медіа відкриваються після підписки. Картка, Meta й API-ключі для розбору не потрібні.'], ['Чому безкоштовно немає готових оголошень і медіа?', 'Так ви оцінюєте якість аналізу без ризику неконтрольованих витрат на генерацію. Повні тексти, зображення, відео, підключення кабінету та запуск належать до платного продукту.'], ['Що відкриває €150 на місяць?', 'Повну стратегію, готові тексти й концепції, підключення кабінету, запуск кампаній Meta і TikTok, моніторинг, звіти та оптимізацію після підтвердження.'], ['Чи потрібно одразу підключати Meta або передавати пароль?', 'Ні. Безкоштовний розбір не потребує підключення. Після підписки AdPilot використовує офіційний OAuth і ніколи не отримує ваш пароль.'], ['Чи може бот сам зупинити кампанію або збільшити бюджет?', 'Бот аналізує дані й пропонує дію. Критичні зміни виконуються лише після вашого підтвердження.'], ['Коли з’являться результати?', 'Строк залежить від ніші, бюджету, пропозиції та модерації. AdPilot не гарантує конкретний результат, а будує безпечніший процес рішень на основі даних.']],
    finalKicker: 'Почніть зі свого бізнесу', finalTitle: 'Отримайте персоналізований рекламний розбір до оплати', finalLead: '10–15 хвилин у Telegram. Без картки, рекламного кабінету та API-ключів. Після результату ви самі вирішуєте, чи відкривати повний AdPilot.', finalButton: 'Почати безкоштовний розбір',
    footerLinks: ['Конфіденційність', 'Умови', 'Реквізити', 'Контакт'], legal: 'HABELEV STANISLAV · рекламний бюджет і додаткові преміальні генерації оплачуються окремо.'
  }
};

const legalCopy = {
  ru: {
    back: 'Вернуться на главную', updated: 'Обновлено: 29 июля 2026 года', review: 'По вопросам о данных и работе сервиса: psbig@projectstudio-big.net или @sgabelev в Telegram.',
    privacyTitle: 'Политика конфиденциальности',
    privacySections: [
      ['Кто обрабатывает данные', 'Оператор AdPilot — HABELEV STANISLAV. Контакт по вопросам данных: psbig@projectstudio-big.net или @sgabelev в Telegram.'],
      ['Какие данные используются', 'Telegram ID и публичные данные профиля; ответы интервью и онбординга; выбранные проекты и настройки; OAuth-токены и идентификаторы подключённых Meta/TikTok-аккаунтов; данные кампаний и метрики; обращения в поддержку; статус бесплатного стратегического разбора и подписки; технические журналы безопасности.'],
      ['Зачем нужны данные', 'Чтобы создать аккаунт, подготовить и запустить кампании по вашему запросу, получать метрики, формировать отчёты, показывать рекомендации, обрабатывать оплату, оказывать поддержку и предотвращать злоупотребления.'],
      ['Сторонние сервисы', 'В зависимости от используемой функции данные могут обрабатываться Telegram, Meta, TikTok, Stripe, OpenRouter, поставщиками генерации медиа и инфраструктурными провайдерами. Каждый сервис действует по собственным условиям и политике конфиденциальности.'],
      ['Безопасность и срок хранения', 'Секреты и токены должны храниться с ограниченным доступом. Данные сохраняются столько, сколько необходимо для работы сервиса, выполнения обязательств и защиты законных интересов, после чего удаляются или обезличиваются.'],
      ['Ваши права', 'Вы можете запросить доступ, исправление или удаление данных, ограничение обработки и отзыв доступа к рекламным платформам. Некоторые данные могут храниться дольше, если этого требует закон или разрешение спора.']
    ],
    termsTitle: 'Условия использования',
    termsSections: [
      ['Что предоставляет AdPilot', 'AdPilot помогает подготовить, запустить и анализировать рекламные кампании в Meta и TikTok через Telegram. Сервис не является Meta, TikTok, Telegram или рекламным агентством и не управляет правилами сторонних платформ.'],
      ['Доступ и полномочия', 'Вы подтверждаете, что имеете право подключать выбранные рекламные аккаунты, страницы и платёжные средства. Нельзя использовать сервис для незаконной рекламы, обмана, нарушения прав третьих лиц или обхода правил платформ.'],
      ['Бесплатный разбор и подписка', 'До оплаты доступен бесплатный стратегический разбор без банковской карты и подключения рекламного кабинета. Он не включает готовые объявления, генерацию фото или видео и запуск кампаний. Полный доступ предоставляется после отдельной оплаты €150 за месяц. Рекламный бюджет и дополнительные премиальные генерации оплачиваются отдельно.'],
      ['Решения и подтверждения', 'AdPilot может рекомендовать цель, аудиторию, бюджет, паузу или замену креатива. Вы отвечаете за проверку настроек и подтверждение критических действий.'],
      ['Результаты рекламы', 'Результаты зависят от ниши, предложения, бюджета, креативов, модерации и рынка. AdPilot не гарантирует лиды, продажи, стоимость результата или одобрение рекламы платформой.'],
      ['Отмена и доступность', 'Подписку можно не продлевать. Работа отдельных функций может временно зависеть от доступности Meta, TikTok, Telegram, Stripe, OpenRouter и других поставщиков. По вопросам поддержки: @sgabelev в Telegram.']
    ]
  },
  en: {
    back: 'Back to the homepage', updated: 'Updated: 29 July 2026', review: 'Questions about your data or the service: psbig@projectstudio-big.net or @sgabelev on Telegram.',
    privacyTitle: 'Privacy Policy',
    privacySections: [
      ['Who processes data', 'AdPilot is operated by HABELEV STANISLAV. Contact: psbig@projectstudio-big.net or @sgabelev on Telegram.'],
      ['Data we use', 'Telegram ID and public profile data; interview and onboarding answers; project settings; OAuth tokens and connected Meta/TikTok account identifiers; campaign data and metrics; support requests; free strategic review and subscription status; security logs.'],
      ['Why we use it', 'To provide accounts, prepare and launch campaigns at your request, retrieve metrics, create reports, provide recommendations, process payments, support users and prevent abuse.'],
      ['Third-party services', 'Depending on the feature, data may be processed by Telegram, Meta, TikTok, Stripe, OpenRouter, media-generation providers and infrastructure providers. Each service operates under its own terms and privacy policy.'],
      ['Security and retention', 'Secrets and tokens should be stored with restricted access. Data is kept for as long as necessary to provide the service, meet obligations and protect legitimate interests, then deleted or anonymised.'],
      ['Your rights', 'You may request access, correction or deletion, restriction of processing, and revoke platform access. Some information may be retained where required by law or necessary to resolve a dispute.']
    ],
    termsTitle: 'Terms of Use',
    termsSections: [
      ['The service', 'AdPilot helps prepare, launch and analyse Meta and TikTok campaigns through Telegram. It is not Meta, TikTok, Telegram or an advertising agency and does not control third-party platform policies.'],
      ['Authority and acceptable use', 'You confirm you are authorised to connect the selected ad accounts, pages and payment methods. The service must not be used for illegal ads, deception, infringement or platform-rule circumvention.'],
      ['Free review and subscription', 'Before payment, a free strategic review is available without a bank card or ad-account connection. It excludes launch-ready ads, photo or video generation and campaign launch. Full access requires a separate €150 monthly payment. Ad spend and additional premium generations are billed separately.'],
      ['Recommendations and approval', 'AdPilot may recommend an objective, audience, budget, pause or creative replacement. You remain responsible for reviewing settings and approving critical actions.'],
      ['Advertising outcomes', 'Outcomes depend on the niche, offer, budget, creative, moderation and market. AdPilot does not guarantee leads, sales, cost per result or platform approval.'],
      ['Cancellation and availability', 'You may choose not to renew. Features may temporarily depend on the availability of Meta, TikTok, Telegram, Stripe, OpenRouter and other providers. Support: @sgabelev on Telegram.']
    ]
  },
  pl: {
    back: 'Wróć na stronę główną', updated: 'Aktualizacja: 29 lipca 2026', review: 'Pytania o dane lub działanie usługi: psbig@projectstudio-big.net albo @sgabelev w Telegramie.',
    privacyTitle: 'Polityka prywatności',
    privacySections: [
      ['Administrator danych', 'Operatorem AdPilot jest HABELEV STANISLAV. Kontakt: psbig@projectstudio-big.net lub @sgabelev w Telegramie.'],
      ['Jakie dane wykorzystujemy', 'Telegram ID i publiczne dane profilu; odpowiedzi z wywiadu i onboardingu; ustawienia projektów; tokeny OAuth i identyfikatory połączonych kont Meta/TikTok; dane kampanii i metryki; zgłoszenia do wsparcia; status bezpłatnej analizy strategicznej i subskrypcji; logi bezpieczeństwa.'],
      ['Cele przetwarzania', 'Utworzenie konta, przygotowanie i uruchomienie kampanii na żądanie, pobieranie metryk, raporty, rekomendacje, płatności, wsparcie i zapobieganie nadużyciom.'],
      ['Usługi zewnętrzne', 'W zależności od funkcji dane mogą być przetwarzane przez Telegram, Meta, TikTok, Stripe, OpenRouter, dostawców generowania mediów i infrastruktury. Każdy z nich stosuje własne warunki i politykę prywatności.'],
      ['Bezpieczeństwo i przechowywanie', 'Sekrety i tokeny powinny być chronione ograniczonym dostępem. Dane są przechowywane przez czas niezbędny do świadczenia usługi, realizacji obowiązków i ochrony uzasadnionych interesów, a następnie usuwane lub anonimizowane.'],
      ['Twoje prawa', 'Możesz zażądać dostępu, sprostowania lub usunięcia danych, ograniczenia przetwarzania oraz cofnąć dostęp do platform reklamowych. Niektóre dane mogą być przechowywane dłużej, gdy wymaga tego prawo lub rozwiązanie sporu.']
    ],
    termsTitle: 'Warunki korzystania',
    termsSections: [
      ['Zakres usługi', 'AdPilot pomaga przygotować, uruchomić i analizować kampanie Meta i TikTok przez Telegram. Nie jest firmą Meta, TikTok, Telegram ani agencją reklamową i nie kontroluje zasad zewnętrznych platform.'],
      ['Uprawnienia i dozwolone użycie', 'Potwierdzasz, że masz prawo podłączyć wybrane konta reklamowe, strony i metody płatności. Nie wolno używać usługi do nielegalnych reklam, oszustw, naruszania praw ani obchodzenia zasad platform.'],
      ['Bezpłatna analiza i abonament', 'Przed płatnością dostępna jest bezpłatna analiza strategiczna bez karty i podłączania konta reklamowego. Nie obejmuje gotowych reklam, generowania zdjęć lub wideo ani uruchomienia kampanii. Pełny dostęp wymaga osobnej płatności €150 miesięcznie. Budżet reklamowy i dodatkowe generacje premium są rozliczane osobno.'],
      ['Rekomendacje i zgody', 'AdPilot może rekomendować cel, grupę, budżet, pauzę lub zmianę kreacji. Odpowiadasz za sprawdzenie ustawień i zatwierdzanie krytycznych działań.'],
      ['Wyniki reklam', 'Wyniki zależą od branży, oferty, budżetu, kreacji, moderacji i rynku. AdPilot nie gwarantuje leadów, sprzedaży, kosztu wyniku ani akceptacji reklamy.'],
      ['Rezygnacja i dostępność', 'Możesz nie przedłużać subskrypcji. Funkcje mogą czasowo zależeć od dostępności Meta, TikTok, Telegram, Stripe, OpenRouter i innych dostawców. Wsparcie: @sgabelev w Telegramie.']
    ]
  },
  uk: {
    back: 'Повернутися на головну', updated: 'Оновлено: 29 липня 2026 року', review: 'Питання про дані або роботу сервісу: psbig@projectstudio-big.net або @sgabelev у Telegram.',
    privacyTitle: 'Політика конфіденційності',
    privacySections: [
      ['Хто обробляє дані', 'Оператор AdPilot — HABELEV STANISLAV. Контакт: psbig@projectstudio-big.net або @sgabelev у Telegram.'],
      ['Які дані використовуються', 'Telegram ID і публічні дані профілю; відповіді інтерв’ю та онбордингу; налаштування проєктів; OAuth-токени та ідентифікатори підключених Meta/TikTok-акаунтів; дані кампаній і метрики; звернення до підтримки; статус безкоштовного стратегічного розбору та підписки; журнали безпеки.'],
      ['Навіщо потрібні дані', 'Для створення акаунта, підготовки й запуску кампаній за вашим запитом, отримання метрик, звітів, рекомендацій, обробки оплати, підтримки та запобігання зловживанням.'],
      ['Сторонні сервіси', 'Залежно від функції дані можуть обробляти Telegram, Meta, TikTok, Stripe, OpenRouter, постачальники генерації медіа та інфраструктури. Кожен сервіс діє за власними умовами й політикою конфіденційності.'],
      ['Безпека та зберігання', 'Секрети й токени мають зберігатися з обмеженим доступом. Дані зберігаються стільки, скільки потрібно для роботи сервісу, виконання обов’язків і захисту законних інтересів, після чого видаляються або знеособлюються.'],
      ['Ваші права', 'Ви можете запросити доступ, виправлення або видалення даних, обмеження обробки та відкликати доступ до рекламних платформ. Деякі дані можуть зберігатися довше, якщо цього вимагає закон або вирішення спору.']
    ],
    termsTitle: 'Умови використання',
    termsSections: [
      ['Що надає AdPilot', 'AdPilot допомагає підготувати, запустити й аналізувати кампанії Meta і TikTok через Telegram. Сервіс не є Meta, TikTok, Telegram або рекламною агенцією та не контролює правила сторонніх платформ.'],
      ['Повноваження та допустиме використання', 'Ви підтверджуєте право підключати вибрані рекламні акаунти, сторінки й платіжні засоби. Не можна використовувати сервіс для незаконної реклами, обману, порушення прав або обходу правил платформ.'],
      ['Безкоштовний розбір і підписка', 'До оплати доступний безкоштовний стратегічний розбір без картки та підключення рекламного кабінету. Він не містить готових оголошень, генерації фото чи відео та запуску кампаній. Повний доступ потребує окремої оплати €150 на місяць. Рекламний бюджет і додаткові преміальні генерації оплачуються окремо.'],
      ['Рекомендації та підтвердження', 'AdPilot може рекомендувати ціль, аудиторію, бюджет, паузу або заміну креативу. Ви відповідаєте за перевірку налаштувань і підтвердження критичних дій.'],
      ['Результати реклами', 'Результати залежать від ніші, пропозиції, бюджету, креативів, модерації та ринку. AdPilot не гарантує ліди, продажі, вартість результату або схвалення реклами.'],
      ['Скасування й доступність', 'Ви можете не продовжувати підписку. Функції можуть тимчасово залежати від доступності Meta, TikTok, Telegram, Stripe, OpenRouter та інших постачальників. Підтримка: @sgabelev у Telegram.']
    ]
  }
};

const companyCopy = {
  ru: {
    back: 'Вернуться на главную',
    updated: 'Данные оператора сервиса',
    review: 'По вопросам оплаты, данных или работы сервиса напишите на email или в Telegram.',
    title: 'Информация о компании',
    sections: [
      ['Оператор', 'HABELEV STANISLAV (ФОП Габелев Станіслав Борисович).'],
      ['Адрес регистрации', 'street Oleksiia Florova, build 42A, Chernihiv, Chernihivska 14013, Ukraine.'],
      ['Контакты', 'Email: psbig@projectstudio-big.net. Telegram: @sgabelev. Телефон: +380637002334.'],
      ['Реквизиты', 'Идентификационный номер: 3159816656. Сайт: adpilot.projectstudio-big.net.']
    ]
  },
  en: {
    back: 'Back to the homepage', updated: 'Service operator details', review: 'For billing, data or service questions, contact us by email or Telegram.', title: 'Company information',
    sections: [['Operator', 'HABELEV STANISLAV (sole proprietor).'], ['Registered address', 'street Oleksiia Florova, build 42A, Chernihiv, Chernihivska 14013, Ukraine.'], ['Contact', 'Email: psbig@projectstudio-big.net. Telegram: @sgabelev. Phone: +380637002334.'], ['Registration details', 'Tax identification number: 3159816656. Website: adpilot.projectstudio-big.net.']]
  },
  pl: {
    back: 'Wróć na stronę główną', updated: 'Dane operatora usługi', review: 'W sprawach płatności, danych lub działania usługi skontaktuj się przez email albo Telegram.', title: 'Informacje o firmie',
    sections: [['Operator', 'HABELEV STANISLAV (jednoosobowa działalność gospodarcza).'], ['Adres rejestracyjny', 'street Oleksiia Florova, build 42A, Chernihiv, Chernihivska 14013, Ukraine.'], ['Kontakt', 'Email: psbig@projectstudio-big.net. Telegram: @sgabelev. Telefon: +380637002334.'], ['Dane rejestracyjne', 'Numer identyfikacji podatkowej: 3159816656. Strona: adpilot.projectstudio-big.net.']]
  },
  uk: {
    back: 'Повернутися на головну', updated: 'Дані оператора сервісу', review: 'З питань оплати, даних або роботи сервісу напишіть на email або в Telegram.', title: 'Інформація про компанію',
    sections: [['Оператор', 'HABELEV STANISLAV (ФОП Габелев Станіслав Борисович).'], ['Адреса реєстрації', 'street Oleksiia Florova, build 42A, Chernihiv, Chernihivska 14013, Ukraine.'], ['Контакти', 'Email: psbig@projectstudio-big.net. Telegram: @sgabelev. Телефон: +380637002334.'], ['Реєстраційні дані', 'Ідентифікаційний номер: 3159816656. Сайт: adpilot.projectstudio-big.net.']]
  }
};

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const renderList = (items, renderer) => items.map(renderer).join('\n');

function renderPage(locale, t) {
  const localeLinks = renderList(locales, (code) => `<a href="/${code}/" hreflang="${code}"${code === locale ? ' aria-current="page"' : ''}>${code.toUpperCase()}</a>`);
  const hreflangs = renderList(locales, (code) => `<link rel="alternate" hreflang="${code}" href="${baseUrl}/${code}/">`);
  const navLinks = [`#how`, `#features`, `#security`, `#pricing`, `#faq`].map((href, index) => `<a href="${href}">${esc(t.nav[index])}</a>`).join('\n');
  const start = (position) => `lp_${locale}_${position}_fsp`;

  return `<!DOCTYPE html>
<html lang="${locale}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(t.metaTitle)}</title>
  <meta name="description" content="${esc(t.metaDescription)}">
  <meta name="theme-color" content="#070914">
  <meta name="robots" content="index,follow,max-image-preview:large">
  <link rel="canonical" href="${baseUrl}/${locale}/">
  ${hreflangs}
  <link rel="alternate" hreflang="x-default" href="${baseUrl}/ru/">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="AdPilot">
  <meta property="og:title" content="${esc(t.metaTitle)}">
  <meta property="og:description" content="${esc(t.metaDescription)}">
  <meta property="og:url" content="${baseUrl}/${locale}/">
  <meta property="og:image" content="${baseUrl}/og-preview-fsp.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(t.metaTitle)}">
  <meta name="twitter:description" content="${esc(t.metaDescription)}">
  <meta name="twitter:image" content="${baseUrl}/og-preview-fsp.png">
  <link rel="stylesheet" href="/assets/style.css">
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AdPilot', applicationCategory: 'BusinessApplication', operatingSystem: 'Telegram', offers: { '@type': 'Offer', price: '150', priceCurrency: 'EUR', description: 'Free strategic review before payment; full access costs EUR 150 per month' }, url: `${baseUrl}/${locale}/` })}</script>
</head>
<body>
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <header class="site-header">
    <nav class="container nav" aria-label="Primary">
      <a class="brand" href="/${locale}/" aria-label="AdPilot">
        <span class="brand-mark" aria-hidden="true">A</span><span>AdPilot</span>
      </a>
      <button class="nav-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="main-navigation" aria-label="${esc(t.menu)}">☰</button>
      <div class="nav-links" id="main-navigation" data-nav-links data-open="false">${navLinks}</div>
      <div class="locale-switcher" role="group" aria-label="Language">${localeLinks}</div>
      <a class="btn btn-primary btn-small" data-telegram-start="${start('nav')}" data-event="nav_cta_click" href="https://t.me/AdPilotTop_bot?start=${start('nav')}">${esc(t.navTry)}</a>
    </nav>
  </header>

  <main id="main">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow"><span class="eyebrow-dot"></span>${esc(t.heroBadge)}</div>
          <h1>${esc(t.heroTitle).replace('AI', '<span class="gradient-text">AI</span>')}</h1>
          <p class="hero-lead">${esc(t.heroLead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" data-telegram-start="${start('hero')}" data-event="hero_cta_click" href="https://t.me/AdPilotTop_bot?start=${start('hero')}">${esc(t.primary)}</a>
            <a class="btn btn-secondary" href="#product-demo">${esc(t.secondary)}</a>
          </div>
          <div class="fine-print">${esc(t.previewNote)}</div>
          <ul class="hero-facts">${renderList(t.heroFacts, (item) => `<li>${esc(item)}</li>`)}</ul>
        </div>

        <aside class="product-shell" aria-label="${esc(t.demoTitle)}">
          <div class="telegram-window">
            <div class="telegram-head"><div class="avatar" aria-hidden="true">A</div><div><strong>AdPilot</strong><span class="online">● ${esc(t.chat.online)}</span></div></div>
            <div class="chat">
              <div class="message user">${esc(t.chat.user)}<span class="message-time">10:04</span></div>
              <div class="message">${t.chat.answer}<span class="message-time">10:04</span></div>
              <div class="message">${t.chat.settings}<span class="message-time">10:05</span><span class="chat-button">${esc(t.chat.approve)}</span></div>
              <div class="message">${t.chat.report}<span class="message-time">09:00</span></div>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="trust-strip" aria-label="Product facts"><div class="container trust-grid">${renderList(t.trust, ([title, text]) => `<div class="trust-item"><strong>${esc(title)}</strong><span>${esc(text)}</span></div>`)}</div></section>

    <section class="section" id="how">
      <div class="container">
        <div class="section-heading"><div class="kicker">${esc(t.howKicker)}</div><h2>${esc(t.howTitle)}</h2><p>${esc(t.howLead)}</p></div>
        <div class="steps">${renderList(t.steps, ([title, text]) => `<article class="step-card"><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`)}</div>
      </div>
    </section>

    <section class="section section-border" id="product-demo">
      <div class="container">
        <div class="section-heading"><div class="kicker">${esc(t.demoKicker)}</div><h2>${esc(t.demoTitle)}</h2><p>${esc(t.demoLead)}</p></div>
        <div class="demo-layout">
          <div class="demo-tabs" role="tablist" aria-label="${esc(t.demoKicker)}">${renderList(t.demoTabs, ([title, text], index) => `<button class="demo-tab" id="demo-tab-${index}" type="button" role="tab" data-demo-tab aria-selected="${index === 0}" aria-controls="demo-panel-${index}" tabindex="${index === 0 ? 0 : -1}"><strong>${esc(title)}</strong><span>${esc(text)}</span></button>`)}</div>
          <div>${renderList(t.demoPanels, ([label, title, text, rows], index) => `<section class="demo-panel" id="demo-panel-${index}" role="tabpanel" data-demo-panel aria-labelledby="demo-tab-${index}" tabindex="0"${index ? ' hidden' : ''}><span class="demo-panel-label">${esc(label)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p><div class="sample-box">${renderList(rows, ([key, value]) => `<div class="sample-row"><span>${esc(key)}</span><strong>${esc(value)}</strong></div>`)}</div></section>`)}</div>
        </div>
      </div>
    </section>

    <section class="section section-border" id="features">
      <div class="container">
        <div class="section-heading"><div class="kicker">${esc(t.featuresKicker)}</div><h2>${esc(t.featuresTitle)}</h2><p>${esc(t.featuresLead)}</p></div>
        <div class="feature-grid">${renderList(t.features, ([index, title, text]) => `<article class="feature-card"><span class="feature-index">${esc(index)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`)}</div>
      </div>
    </section>

    <section class="section section-border">
      <div class="container control-layout">
        <div><div class="kicker">${esc(t.controlKicker)}</div><h2>${esc(t.controlTitle)}</h2><p class="section-intro">${esc(t.controlLead)}</p><ul class="check-list">${renderList(t.controlChecks, (item) => `<li>${esc(item)}</li>`)}</ul></div>
        <div class="comparison-card"><div class="comparison-head"><span>${esc(t.compareHead[0])}</span><span>${esc(t.compareHead[1])}</span></div>${renderList(t.compare, ([left, right]) => `<div class="comparison-row"><strong>${esc(left)}</strong><span>${esc(right)}</span></div>`)}</div>
      </div>
    </section>

    <section class="section section-border" id="security">
      <div class="container security-layout">
        <div><div class="kicker">${esc(t.securityKicker)}</div><h2>${esc(t.securityTitle)}</h2><p class="section-intro">${esc(t.securityLead)}</p></div>
        <div class="security-cards">${renderList(t.security, ([tag, title, text]) => `<article class="security-card"><span class="security-tag">${esc(tag)}</span><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`)}</div>
      </div>
    </section>

    <section class="section section-border" id="pricing">
      <div class="container pricing-wrap">
        <div><div class="kicker">${esc(t.priceKicker)}</div><h2>${esc(t.priceTitle)}</h2><p class="section-intro">${esc(t.priceLead)}</p></div>
        <div class="pricing-card"><div class="price">€150<span>${esc(t.perMonth)}</span></div><div class="preview-badge">${esc(t.previewBadge)}</div><ul class="price-list">${renderList(t.priceItems, (item) => `<li>${esc(item)}</li>`)}</ul><a class="btn btn-primary btn-wide" data-telegram-start="${start('price')}" data-event="pricing_cta_click" href="https://t.me/AdPilotTop_bot?start=${start('price')}">${esc(t.priceButton)}</a><div class="price-excludes">${esc(t.exclusions)}</div></div>
      </div>
    </section>

    <section class="section section-border" id="faq">
      <div class="container">
        <div class="section-heading"><div class="kicker">${esc(t.faqKicker)}</div><h2>${esc(t.faqTitle)}</h2></div>
        <div class="faq-list">${renderList(t.faqs, ([question, answer]) => `<details><summary>${esc(question)}</summary><div class="faq-answer">${esc(answer)}</div></details>`)}</div>
      </div>
    </section>

    <section class="section-compact"><div class="container"><div class="final-cta"><div class="kicker">${esc(t.finalKicker)}</div><h2>${esc(t.finalTitle)}</h2><p>${esc(t.finalLead)}</p><a class="btn btn-primary" data-telegram-start="${start('final')}" data-event="final_cta_click" href="https://t.me/AdPilotTop_bot?start=${start('final')}">${esc(t.finalButton)}</a></div></div></section>
  </main>

  <footer class="site-footer">
    <div class="container footer-grid"><a class="brand" href="/${locale}/"><span class="brand-mark" aria-hidden="true">A</span><span>AdPilot</span></a><div class="footer-links"><a href="/${locale}/privacy/">${esc(t.footerLinks[0])}</a><a href="/${locale}/terms/">${esc(t.footerLinks[1])}</a><a href="/${locale}/company/">${esc(t.footerLinks[2])}</a><a href="https://t.me/sgabelev">${esc(t.footerLinks[3])}</a></div></div>
    <div class="container legal-line">© <span data-current-year>2026</span> ${esc(t.legal)}</div>
  </footer>
  <script src="/assets/main.js" defer></script>
</body>
</html>`;
}

function renderLegalPage(locale, type) {
  const content = type === 'company' ? companyCopy[locale] : legalCopy[locale];
  const title = type === 'company' ? content.title : type === 'privacy' ? content.privacyTitle : content.termsTitle;
  const sections = type === 'company' ? content.sections : type === 'privacy' ? content.privacySections : content.termsSections;
  const localeLinks = renderList(locales, (code) => `<a href="/${code}/${type}/" hreflang="${code}"${code === locale ? ' aria-current="page"' : ''}>${code.toUpperCase()}</a>`);
  const alternateLinks = renderList(locales, (code) => `<link rel="alternate" hreflang="${code}" href="${baseUrl}/${code}/${type}/">`);
  return `<!DOCTYPE html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} — AdPilot</title><meta name="robots" content="index,follow"><link rel="canonical" href="${baseUrl}/${locale}/${type}/">${alternateLinks}<link rel="alternate" hreflang="x-default" href="${baseUrl}/ru/${type}/"><link rel="stylesheet" href="/assets/style.css"></head><body><header class="site-header"><nav class="container nav"><a class="brand" href="/${locale}/"><span class="brand-mark" aria-hidden="true">A</span><span>AdPilot</span></a><div class="locale-switcher legal-locale-switcher" role="group" aria-label="Language">${localeLinks}</div></nav></header><main class="legal-page"><div class="container legal-container"><a class="legal-back" href="/${locale}/">← ${esc(content.back)}</a><h1>${esc(title)}</h1><p class="legal-updated">${esc(content.updated)}</p><p class="legal-review">${esc(content.review)}</p>${renderList(sections, ([heading, text]) => `<section><h2>${esc(heading)}</h2><p>${esc(text)}</p></section>`)}</div></main><footer class="site-footer"><div class="container legal-line">© 2026 HABELEV STANISLAV · <a href="mailto:psbig@projectstudio-big.net">psbig@projectstudio-big.net</a></div></footer></body></html>`;
}

await Promise.all(locales.map(async (locale) => {
  const directory = join(root, locale);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), renderPage(locale, copy[locale]), 'utf8');
  for (const type of ['privacy', 'terms', 'company']) {
    const legalDirectory = join(directory, type);
    await mkdir(legalDirectory, { recursive: true });
    await writeFile(join(legalDirectory, 'index.html'), renderLegalPage(locale, type), 'utf8');
  }
}));

const rootRedirect = `<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AdPilot</title><meta http-equiv="refresh" content="0;url=/ru/"><link rel="canonical" href="${baseUrl}/ru/"></head><body><p><a href="/ru/">AdPilot</a></p></body></html>`;
await writeFile(join(root, 'index.html'), rootRedirect, 'utf8');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${locales.map((locale) => `  <url><loc>${baseUrl}/${locale}/</loc><changefreq>weekly</changefreq><priority>${locale === 'ru' ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`;
await writeFile(join(root, 'sitemap.xml'), sitemap.replace('</urlset>', `${locales.map((locale) => `  <url><loc>${baseUrl}/${locale}/privacy/</loc><priority>0.3</priority></url>\n  <url><loc>${baseUrl}/${locale}/terms/</loc><priority>0.3</priority></url>\n  <url><loc>${baseUrl}/${locale}/company/</loc><priority>0.3</priority></url>`).join('\n')}\n</urlset>`), 'utf8');
await writeFile(join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml\n`, 'utf8');

for (const type of ['privacy', 'terms', 'company']) {
  await writeFile(join(root, `${type}.html`), `<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=/ru/${type}/"><link rel="canonical" href="${baseUrl}/ru/${type}/"></head><body><a href="/ru/${type}/">AdPilot</a></body></html>`, 'utf8');
}

console.log(`Built ${locales.length} localized pages.`);
