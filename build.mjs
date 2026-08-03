import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const baseUrl = 'https://adpilot.projectstudio-big.net';
const locales = ['ru', 'en', 'pl', 'uk'];

const copy = {
  ru: {
    langName: 'Русский',
    metaTitle: 'AdPilot — бесплатный AI-разбор рекламы для вашего бизнеса',
    metaDescription: 'Ответьте на вопросы в Telegram и получите персональный план роста: диагноз воронки, первый сегмент, рекламное обещание и следующий шаг. Без карты и подключения Meta.',
    skip: 'Перейти к содержанию',
    menu: 'Открыть меню',
    nav: ['Как работает', 'Возможности', 'Безопасность', 'Цена', 'Вопросы'],
    navTry: 'Получить разбор',
    heroBadge: 'Бесплатный AI-разбор бизнеса для Meta и TikTok',
    heroTitle: 'Узнайте, с какой рекламы начать вашему бизнесу',
    heroLead: 'AI-стратег задаст профессиональные вопросы и покажет, кого привлекать первым, с каким обещанием выходить в рекламу, где теряются клиенты и что делать дальше.',
    primary: 'Получить бесплатный разбор',
    secondary: 'Посмотреть, как работает',
    offerNote: 'Бесплатный разбор без карты · полный доступ — €150/мес через Stripe или €150 за 30 дней в криптовалюте',
    heroFacts: ['Персонально по вашим ответам', '10–15 минут в Telegram', 'Без рекламного бюджета'],
    chat: {
      online: 'онлайн',
      user: 'Я продаю услуги онлайн. Реклама даёт клики, но мало заявок.',
      answer: '<strong>Диагноз:</strong> узкое место — не охват, а переход от интереса к обращению. Холодному клиенту не хватает ясной причины доверять.',
      settings: '<strong>Первый приоритетный клиент</strong><br>Человек с уже сформированной потребностью, который выбирает между вами и альтернативой.',
      report: '<strong>Первый шаг</strong><br>Сфокусировать кампанию на одном сегменте и одном доказуемом обещании, ведущем к заявке.',
      approve: 'Получить мой разбор'
    },
    trust: [
      ['Бесплатно', 'Персональный план по вашей анкете'],
      ['Без карты для разбора', 'Оплата только после вашего решения'],
      ['Без рекламного кабинета', 'Meta и TikTok подключаются только после оплаты'],
      ['€150 / месяц', 'Stripe с автопродлением или крипто на 30 дней без него']
    ],
    howKicker: 'Как это работает',
    howTitle: 'Сначала получите пользу. Потом решайте, нужен ли полный запуск',
    howLead: 'До оплаты AdPilot не просит карту, рекламный кабинет или доступ к вашим данным Meta и TikTok.',
    steps: [
      ['Расскажите о бизнесе', 'Ответьте на вопросы о продукте, клиентах, географии и способе получения заявок. Обычно это занимает 10–15 минут.'],
      ['Получите персональный план', 'AI покажет диагноз бизнеса, первый сегмент, сильный угол позиционирования, узкое место воронки и первый стратегический шаг.'],
      ['Откройте полную систему, если план подходит', '€150 через Stripe открывает месячную подписку с автопродлением; €150 в криптовалюте — разовый доступ на 30 дней.']
    ],
    demoKicker: 'Что вы получите бесплатно',
    demoTitle: 'Не общий чек-лист, а выводы именно по вашему бизнесу',
    demoLead: 'Разбор строится из ваших ответов. Он показывает направление, но не раскрывает платные настройки кампании до оплаты.',
    demoTabs: [
      ['Диагноз', 'Что мешает получать больше заявок'],
      ['Сегмент и обещание', 'Кого привлекать и с чем выходить'],
      ['Первый шаг', 'Цель, путь клиента и действие'],
      ['После оплаты', 'Что откроется в полной системе']
    ],
    demoPanels: [
      ['Бесплатный вывод 1', 'Что происходит в бизнесе сейчас', 'AdPilot связывает вашу модель продаж, путь клиента и рекламную цель, чтобы показать главную задачу запуска.', [['Основа', 'Ваши ответы'], ['Фокус', 'Заявки и оплаты'], ['Формат', 'Конкретный вывод + причина']]],
      ['Бесплатный вывод 2', 'Кого выгоднее привлекать первым', 'Вместо попытки понравиться всем вы получаете первый приоритетный сегмент и сильный угол позиционирования.', [['Сегмент', 'Первый приоритет'], ['Обещание', 'Подтверждаемая ценность'], ['Ограничение', 'Без выдуманных гарантий']]],
      ['Бесплатный вывод 3', 'Где теряются клиенты и что делать первым', 'Разбор называет главное узкое место, рекомендуемую цель, путь клиента и первый стратегический шаг.', [['Цель', 'Лиды, продажи или сообщения'], ['Путь', 'Сайт или переписка'], ['Действие', 'Первый тест кампании']]],
      ['Полный доступ', 'От стратегии к работающей кампании', 'После оплаты открываются точная аудитория, география, бюджет, CTA, объявления, визуалы, запуск и дальнейший контроль.', [['Доступ', '30 дней'], ['AI-баланс', '100 кредитов включено'], ['Контроль', 'Проверка каждые 6 часов']]]
    ],
    featuresKicker: 'Возможности',
    featuresTitle: 'Всё необходимое для первой кампании и дальнейшего контроля',
    featuresLead: 'Без перегруженного кабинета и профессионального жаргона.',
    features: [
      ['01 / Стратегия', 'Профессиональная рекомендация', 'Цель, направление, аудитория и бюджет формируются из данных бизнеса, а не из случайного шаблона.'],
      ['02 / Креативы', 'Тексты, изображения и видео', 'Несколько рекламных концепций для Meta и TikTok с возможностью использовать свои материалы.'],
      ['03 / Запуск', 'Создание кампании через API', 'После проверки AdPilot создаёт структуру кампании в подключённом рекламном кабинете.'],
      ['04 / Аналитика', 'Отчёты и предложения действий', 'Метрики переводятся на понятный язык: что происходит, почему и какое действие можно подтвердить.']
    ],
    controlKicker: 'Контроль',
    controlTitle: 'AI помогает принимать решения, но не забирает управление',
    controlLead: 'AdPilot автоматизирует рутину. Бюджет, остановка и другие критические действия остаются под вашим контролем.',
    controlChecks: ['Показывает настройки до запуска', 'Объясняет причину рекомендации', 'Предлагает действие только после анализа нескольких факторов', 'Применяет критическое изменение после подтверждения'],
    compareHead: ['AdPilot делает', 'Вы решаете'],
    compare: [['Анализирует анкету и метрики', 'Подключать ли рекламный кабинет'], ['Готовит кампанию и объявления', 'Принимать ли рекомендованные настройки'], ['Проверяет результат каждые 6 часов', 'Менять ли бюджет или ставить на паузу'], ['Присылает отчёты и предупреждения', 'Оплачивать ли следующий период доступа']],
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
    priceTitle: 'Превратите разбор в работающую кампанию',
    priceLead: 'Бесплатно получите направление. Если оно подходит — откройте полный цикл от настроек до контроля результатов.',
    perMonth: '/ месяц',
    previewBadge: 'Бесплатный разбор до оплаты',
    priceItems: ['Точные настройки аудитории, географии, бюджета и CTA', 'Создание кампаний в Meta и TikTok', 'Варианты объявлений и инструменты для визуалов', '100 AI-кредитов на 30 дней', 'Проверка показателей каждые 6 часов и отчёты', 'Критические изменения только после подтверждения', 'Поддержка внутри бота'],
    exclusions: 'Stripe: автоматическое списание €150 каждый месяц до отмены в настройках аккаунта. Криптовалюта: разовая оплата €150 за 30 дней без автопродления. Рекламный бюджет оплачивается отдельно.',
    priceButton: 'Сначала получить бесплатный разбор',
    faqKicker: 'Вопросы',
    faqTitle: 'Перед началом — коротко о важном',
    faqs: [
      ['Что именно я получу бесплатно?', 'Персональный разбор: диагноз бизнеса, первый приоритетный сегмент, рекламное обещание, узкое место воронки, рекомендуемую цель и первый стратегический шаг. Без запуска рекламы и без подключения кабинета.'],
      ['Что открывается после оплаты?', 'Полные настройки кампании, объявления, инструменты генерации визуалов, подключение Meta и TikTok, запуск, отчёты и предложения по оптимизации.'],
      ['Как продлевается доступ?', 'При оплате картой Stripe списывает €150 ежемесячно до отмены; отменить автопродление можно самостоятельно в настройках аккаунта. Оплата криптовалютой разовая: €150 за 30 дней без автопродления.'],
      ['Как работают AI-кредиты?', 'На каждые 30 дней включено 100 кредитов — эквивалент внутреннего лимита $15 на AI-генерацию. Перед созданием изображения или видео бот показывает стоимость в кредитах.'],
      ['Нужно ли передавать пароль?', 'Нет. Бесплатный разбор не требует рекламного аккаунта. После оплаты Meta и TikTok подключаются через официальную авторизацию без передачи пароля AdPilot.'],
      ['Гарантирует ли AdPilot продажи?', 'AdPilot не гарантирует точное число продаж заранее. Результат зависит от оффера, рынка, бюджета и данных. Система строит запуск вокруг заявок и оплат и помогает управлять им по реальным показателям.']
    ],
    finalKicker: 'Сначала — персональная ценность',
    finalTitle: 'Получите план по своему бизнесу. Потом решайте об оплате',
    finalLead: 'Ответьте на вопросы в Telegram и увидьте, с какого сегмента, обещания и рекламного шага вам стоит начать. Без карты и подключения рекламного кабинета.',
    finalButton: 'Получить бесплатный AI-разбор',
    footerLinks: ['Конфиденциальность', 'Условия использования', 'Реквизиты', 'Контакт'],
    legal: 'HABELEV STANISLAV · Stripe €150/мес до отмены · крипто €150/30 дней без автопродления · рекламный бюджет отдельно.'
  },
  en: {
    langName: 'English',
    metaTitle: 'AdPilot — a free AI advertising review for your business',
    metaDescription: 'Answer a professional interview in Telegram and receive a personalised growth plan: funnel diagnosis, first segment, positioning angle and next step. No card or ad account required.',
    skip: 'Skip to content', menu: 'Open menu',
    nav: ['How it works', 'Features', 'Security', 'Pricing', 'FAQ'], navTry: 'Get my review',
    heroBadge: 'Free AI business review for Meta and TikTok',
    heroTitle: 'Find out where your advertising should start',
    heroLead: 'An AI strategist runs a professional interview and shows whom to target first, which promise to lead with, where customers are lost and what to do next.',
    primary: 'Get my free review', secondary: 'See how it works',
    offerNote: 'Free review with no card · full access is €150/mo via Stripe or €150 for 30 days in crypto',
    heroFacts: ['Personalised to your answers', '10–15 minutes in Telegram', 'No ad spend required'],
    chat: { online: 'online', user: 'I sell services online. My ads get clicks but too few enquiries.', answer: '<strong>Diagnosis:</strong> the bottleneck is not reach but the move from interest to enquiry. Cold visitors lack a clear reason to trust.', settings: '<strong>First priority customer</strong><br>Someone with an active need who is already comparing your offer with alternatives.', report: '<strong>First move</strong><br>Focus one campaign on one segment and one provable promise that leads to an enquiry.', approve: 'Get my review' },
    trust: [['Free', 'A personalised plan from your answers'], ['No card for the review', 'Billing starts only after your choice'], ['No ad account', 'Connect Meta or TikTok only after payment'], ['€150 / month', 'Recurring Stripe or one-time 30-day crypto access']],
    howKicker: 'How it works', howTitle: 'Get useful direction first. Then decide about the full launch', howLead: 'Before payment, AdPilot asks for no card, ad account or access to your Meta and TikTok data.',
    steps: [['Describe your business', 'Answer questions about your offer, customers, location and how you receive enquiries. It usually takes 10–15 minutes.'], ['Receive a personalised plan', 'AI shows your business diagnosis, first segment, positioning angle, funnel bottleneck and first strategic move.'], ['Unlock the full system if the plan fits', 'Choose €150/month recurring Stripe billing or a one-time €150 crypto payment for 30 days of full access.']],
    demoKicker: 'What you receive for free', demoTitle: 'Conclusions for your business, not a generic checklist', demoLead: 'The review is built from your answers. It shows direction while keeping paid campaign settings locked until payment.',
    demoTabs: [['Diagnosis', 'What blocks more enquiries'], ['Segment and promise', 'Whom to target and what to say'], ['First move', 'Objective, path and action'], ['After payment', 'What the full system unlocks']],
    demoPanels: [['Free insight 1', 'What is happening in the business now', 'AdPilot connects your sales model, customer path and advertising goal to identify the launch priority.', [['Basis', 'Your answers'], ['Focus', 'Enquiries and payments'], ['Format', 'Conclusion plus reasoning']]], ['Free insight 2', 'Whom to attract first', 'Instead of trying to speak to everyone, you receive a first priority segment and a defensible positioning angle.', [['Segment', 'First priority'], ['Promise', 'Provable value'], ['Guardrail', 'No invented guarantees']]], ['Free insight 3', 'Where customers are lost and what to do first', 'The review names the main funnel bottleneck, recommended objective, destination and first strategic move.', [['Objective', 'Leads, sales or messages'], ['Path', 'Website or conversation'], ['Action', 'First campaign test']]], ['Full access', 'From strategy to a working campaign', 'Payment unlocks exact audience, geography, budget, CTA, ads, visuals, launch and ongoing control.', [['Access', '30 days'], ['AI balance', '100 credits included'], ['Monitoring', 'Every 6 hours']]]],
    featuresKicker: 'Features', featuresTitle: 'Everything needed for a first campaign and ongoing control', featuresLead: 'Without a crowded dashboard or specialist jargon.',
    features: [['01 / Strategy', 'A professional recommendation', 'Objective, destination, audience and budget are based on business data, not a random template.'], ['02 / Creative', 'Copy, images and video', 'Multiple concepts for Meta and TikTok, with the option to use your own media.'], ['03 / Launch', 'Campaign creation through APIs', 'After review, AdPilot creates the campaign structure in your connected ad account.'], ['04 / Analytics', 'Reports and suggested actions', 'Metrics become plain language: what is happening, why, and which action you can approve.']],
    controlKicker: 'Control', controlTitle: 'AI supports decisions without taking control away', controlLead: 'AdPilot automates routine work. Budget, pauses and other critical actions remain under your control.',
    controlChecks: ['Shows settings before launch', 'Explains why it recommends an option', 'Combines several factors before suggesting action', 'Applies critical changes only after approval'],
    compareHead: ['AdPilot handles', 'You decide'], compare: [['Analyses onboarding and metrics', 'Whether to connect an ad account'], ['Prepares campaigns and ads', 'Whether to accept recommended settings'], ['Checks performance every 6 hours', 'Whether to change budget or pause'], ['Sends reports and warnings', 'Whether to pay for the next access period']],
    securityKicker: 'Security', securityTitle: 'Connect without sharing your password', securityLead: 'Connections use the platforms’ official authorisation. Client projects and data remain separated.',
    security: [['OAuth', 'Your password is never shared', 'You sign in on Meta or TikTok and approve permissions yourself.'], ['Isolation', 'Projects do not mix', 'Accounts, settings and reports are processed separately for every client.'], ['Approval', 'Important actions are transparent', 'The bot asks before budget, pause and other critical changes.'], ['Revoke access', 'You can take control back', 'App access can be revoked in the connected advertising platform settings.']],
    priceKicker: 'Pricing', priceTitle: 'Turn your review into a working campaign', priceLead: 'Get direction for free. If it fits, unlock the full cycle from settings to performance control.', perMonth: '/ month', previewBadge: 'Free review before payment',
    priceItems: ['Exact audience, geography, budget and CTA settings', 'Meta and TikTok campaign creation', 'Ad variants and visual-generation tools', '100 AI credits for 30 days', 'Performance checks every 6 hours and reports', 'Critical changes only after approval', 'In-bot support'], exclusions: 'Stripe: €150 is charged automatically every month until you cancel in account settings. Crypto: a one-time €150 payment gives 30 days with no auto-renewal. Ad spend is separate.', priceButton: 'Get the free review first',
    faqKicker: 'FAQ', faqTitle: 'What you should know before starting',
    faqs: [['What exactly do I receive for free?', 'A personalised business diagnosis, first priority segment, positioning angle, funnel bottleneck, recommended objective and first strategic move. No campaign launch or ad-account connection.'], ['What unlocks after payment?', 'Full campaign settings, ads, visual-generation tools, Meta and TikTok connection, launch, reports and optimisation proposals.'], ['How does access renew?', 'Card payment through Stripe is €150 per month and renews automatically until you cancel in account settings. Crypto is a one-time €150 payment for 30 days with no auto-renewal.'], ['How do AI credits work?', 'Each 30-day period includes 100 credits, an internal $15 AI-generation allowance. The bot displays the credit cost before creating an image or video.'], ['Do I share my password?', 'No. The free review needs no ad account. After payment, Meta and TikTok connect through official authorisation without sharing your password with AdPilot.'], ['Does AdPilot guarantee sales?', 'AdPilot does not guarantee an exact number of sales in advance. Results depend on the offer, market, budget and data. The system builds and manages the launch around enquiries and payments.']],
    finalKicker: 'Value before payment', finalTitle: 'Get a plan for your business. Then decide whether to pay', finalLead: 'Answer the interview in Telegram and see which segment, promise and advertising move should come first. No card or ad-account connection.', finalButton: 'Get my free AI review',
    footerLinks: ['Privacy', 'Terms', 'Company details', 'Contact'], legal: 'HABELEV STANISLAV · Stripe €150/mo until cancelled · crypto €150/30 days with no auto-renewal · ad spend is separate.'
  },
  pl: {
    langName: 'Polski', metaTitle: 'AdPilot — bezpłatna analiza AI reklamy Twojej firmy', metaDescription: 'Odpowiedz na profesjonalne pytania w Telegramie i odbierz spersonalizowany plan wzrostu: diagnozę lejka, pierwszy segment, przekaz reklamowy i następny krok. Bez karty i konta reklamowego.',
    skip: 'Przejdź do treści', menu: 'Otwórz menu', nav: ['Jak to działa', 'Możliwości', 'Bezpieczeństwo', 'Cena', 'Pytania'], navTry: 'Odbierz analizę',
    heroBadge: 'Bezpłatna analiza AI firmy dla Meta i TikTok', heroTitle: 'Sprawdź, od jakiej reklamy powinna zacząć Twoja firma', heroLead: 'Strateg AI przeprowadzi profesjonalny wywiad i pokaże, kogo pozyskiwać najpierw, z jaką obietnicą wyjść do reklamy, gdzie tracisz klientów i co zrobić dalej.', primary: 'Odbierz bezpłatną analizę', secondary: 'Zobacz, jak to działa', offerNote: 'Bezpłatna analiza bez karty · pełny dostęp €150/mies. przez Stripe albo €150 za 30 dni w krypto', heroFacts: ['Na podstawie Twoich odpowiedzi', '10–15 minut w Telegramie', 'Bez budżetu reklamowego'],
    chat: { online: 'online', user: 'Sprzedaję usługi online. Reklama daje kliknięcia, ale za mało zapytań.', answer: '<strong>Diagnoza:</strong> wąskim gardłem nie jest zasięg, lecz przejście od zainteresowania do zapytania. Zimnemu odbiorcy brakuje jasnego powodu do zaufania.', settings: '<strong>Pierwszy priorytetowy klient</strong><br>Osoba z aktywną potrzebą, która już porównuje Twoją ofertę z alternatywami.', report: '<strong>Pierwszy krok</strong><br>Skup jedną kampanię na jednym segmencie i jednej wiarygodnej obietnicy prowadzącej do zapytania.', approve: 'Odbierz moją analizę' },
    trust: [['Bezpłatnie', 'Spersonalizowany plan z Twoich odpowiedzi'], ['Bez karty do analizy', 'Płatność dopiero po Twojej decyzji'], ['Bez konta reklamowego', 'Meta i TikTok łączysz dopiero po płatności'], ['€150 / miesiąc', 'Stripe cyklicznie albo jednorazowe krypto na 30 dni']],
    howKicker: 'Jak to działa', howTitle: 'Najpierw odbierz wartość. Potem zdecyduj o pełnym uruchomieniu', howLead: 'Przed płatnością AdPilot nie prosi o kartę, konto reklamowe ani dostęp do danych Meta i TikTok.',
    steps: [['Opowiedz o firmie', 'Odpowiedz na pytania o ofertę, klientów, lokalizację i sposób pozyskiwania zapytań. Zwykle zajmuje to 10–15 minut.'], ['Odbierz spersonalizowany plan', 'AI pokaże diagnozę firmy, pierwszy segment, kąt pozycjonowania, wąskie gardło lejka i pierwszy ruch strategiczny.'], ['Odblokuj pełny system, jeśli plan pasuje', 'Wybierz €150/mies. w Stripe z automatycznym odnowieniem albo jednorazowe €150 w krypto za 30 dni dostępu.']],
    demoKicker: 'Co otrzymasz bezpłatnie', demoTitle: 'Wnioski dla Twojej firmy, nie ogólny poradnik', demoLead: 'Analiza powstaje z Twoich odpowiedzi. Pokazuje kierunek, a płatne ustawienia kampanii pozostają zablokowane do płatności.',
    demoTabs: [['Diagnoza', 'Co blokuje więcej zapytań'], ['Segment i obietnica', 'Kogo pozyskiwać i co mówić'], ['Pierwszy krok', 'Cel, ścieżka i działanie'], ['Po płatności', 'Co odblokowuje pełny system']],
    demoPanels: [['Bezpłatny wniosek 1', 'Co dzieje się teraz w firmie', 'AdPilot łączy model sprzedaży, drogę klienta i cel reklamy, aby wskazać priorytet startu.', [['Podstawa', 'Twoje odpowiedzi'], ['Fokus', 'Zapytania i płatności'], ['Format', 'Wniosek z uzasadnieniem']]], ['Bezpłatny wniosek 2', 'Kogo pozyskiwać najpierw', 'Zamiast mówić do wszystkich otrzymujesz pierwszy priorytetowy segment i wiarygodny kąt pozycjonowania.', [['Segment', 'Pierwszy priorytet'], ['Obietnica', 'Weryfikowalna wartość'], ['Zasada', 'Bez wymyślonych gwarancji']]], ['Bezpłatny wniosek 3', 'Gdzie tracisz klientów i co zrobić najpierw', 'Analiza wskazuje główne wąskie gardło, zalecany cel, miejsce docelowe i pierwszy ruch strategiczny.', [['Cel', 'Leady, sprzedaż lub wiadomości'], ['Ścieżka', 'Strona lub rozmowa'], ['Działanie', 'Pierwszy test kampanii']]], ['Pełny dostęp', 'Od strategii do działającej kampanii', 'Po płatności odblokujesz dokładną grupę, geografię, budżet, CTA, reklamy, wizualizacje, start i dalszą kontrolę.', [['Dostęp', '30 dni'], ['Saldo AI', '100 kredytów w cenie'], ['Kontrola', 'Co 6 godzin']]]],
    featuresKicker: 'Możliwości', featuresTitle: 'Wszystko do pierwszej kampanii i dalszej kontroli', featuresLead: 'Bez przeładowanego panelu i fachowego żargonu.',
    features: [['01 / Strategia', 'Profesjonalna rekomendacja', 'Cel, kierunek, grupa i budżet wynikają z danych firmy, a nie przypadkowego szablonu.'], ['02 / Kreacje', 'Teksty, obrazy i wideo', 'Kilka koncepcji reklam dla Meta i TikTok z możliwością użycia własnych materiałów.'], ['03 / Uruchomienie', 'Kampania tworzona przez API', 'Po sprawdzeniu AdPilot tworzy strukturę kampanii na podłączonym koncie reklamowym.'], ['04 / Analityka', 'Raporty i propozycje działań', 'Metryki są tłumaczone na prosty język: co się dzieje, dlaczego i co możesz zatwierdzić.']],
    controlKicker: 'Kontrola', controlTitle: 'AI pomaga podejmować decyzje, ale nie odbiera Ci sterowania', controlLead: 'AdPilot automatyzuje rutynę. Budżet, pauza i inne krytyczne działania pozostają pod Twoją kontrolą.', controlChecks: ['Pokazuje ustawienia przed startem', 'Wyjaśnia powód rekomendacji', 'Łączy kilka czynników przed propozycją', 'Wykonuje krytyczne zmiany po zatwierdzeniu'], compareHead: ['AdPilot robi', 'Ty decydujesz'], compare: [['Analizuje ankietę i metryki', 'Czy podłączyć konto reklamowe'], ['Przygotowuje kampanię i reklamy', 'Czy przyjąć rekomendowane ustawienia'], ['Sprawdza wynik co 6 godzin', 'Czy zmienić budżet lub włączyć pauzę'], ['Wysyła raporty i ostrzeżenia', 'Czy opłacić kolejny okres dostępu']],
    securityKicker: 'Bezpieczeństwo', securityTitle: 'Dostęp bez przekazywania hasła', securityLead: 'Połączenie odbywa się przez oficjalną autoryzację platform. Projekty i dane klientów są oddzielone.', security: [['OAuth', 'Nie przekazujesz hasła', 'Logujesz się po stronie Meta lub TikTok i samodzielnie zatwierdzasz uprawnienia.'], ['Izolacja', 'Projekty się nie mieszają', 'Konta, ustawienia i raporty każdego klienta są przetwarzane osobno.'], ['Zgoda', 'Ważne działania są przejrzyste', 'Bot pyta przed zmianą budżetu, pauzą i innymi krytycznymi operacjami.'], ['Cofnięcie dostępu', 'Możesz odzyskać pełną kontrolę', 'Dostęp aplikacji można cofnąć w ustawieniach podłączonej platformy reklamowej.']],
    priceKicker: 'Cena', priceTitle: 'Zamień analizę w działającą kampanię', priceLead: 'Odbierz kierunek bezpłatnie. Jeśli pasuje, odblokuj pełny cykl od ustawień po kontrolę wyników.', perMonth: '/ miesiąc', previewBadge: 'Bezpłatna analiza przed płatnością', priceItems: ['Dokładna grupa, geografia, budżet i CTA', 'Tworzenie kampanii Meta i TikTok', 'Warianty reklam i narzędzia do wizualizacji', '100 kredytów AI na 30 dni', 'Kontrola wyników co 6 godzin i raporty', 'Krytyczne zmiany tylko po zatwierdzeniu', 'Wsparcie w bocie'], exclusions: 'Stripe: automatyczne obciążenie €150 co miesiąc do anulowania w ustawieniach konta. Krypto: jednorazowe €150 za 30 dni bez automatycznego odnowienia. Budżet reklamowy osobno.', priceButton: 'Najpierw odbierz bezpłatną analizę',
    faqKicker: 'Pytania', faqTitle: 'Najważniejsze informacje przed startem', faqs: [['Co dokładnie otrzymam bezpłatnie?', 'Spersonalizowaną diagnozę firmy, pierwszy segment, kąt pozycjonowania, wąskie gardło lejka, rekomendowany cel i pierwszy krok strategiczny. Bez uruchomienia reklamy i łączenia konta.'], ['Co odblokowuje płatność?', 'Pełne ustawienia kampanii, reklamy, narzędzia do tworzenia wizualizacji, połączenie Meta i TikTok, start, raporty i propozycje optymalizacji.'], ['Jak odnawia się dostęp?', 'Płatność kartą Stripe kosztuje €150 miesięcznie i odnawia się automatycznie do anulowania w ustawieniach konta. Krypto to jednorazowe €150 za 30 dni bez automatycznego odnowienia.'], ['Jak działają kredyty AI?', 'Każde 30 dni zawiera 100 kredytów, czyli wewnętrzny limit $15 na generowanie AI. Bot pokazuje koszt przed utworzeniem obrazu lub wideo.'], ['Czy przekazuję hasło?', 'Nie. Bezpłatna analiza nie wymaga konta reklamowego. Po płatności Meta i TikTok łączysz przez oficjalną autoryzację bez przekazywania hasła AdPilot.'], ['Czy AdPilot gwarantuje sprzedaż?', 'AdPilot nie gwarantuje dokładnej liczby sprzedaży z góry. Wynik zależy od oferty, rynku, budżetu i danych. System buduje i prowadzi start wokół zapytań i płatności.']],
    finalKicker: 'Wartość przed płatnością', finalTitle: 'Odbierz plan dla swojej firmy. Potem zdecyduj o płatności', finalLead: 'Odpowiedz na pytania w Telegramie i sprawdź, od którego segmentu, obietnicy i ruchu reklamowego zacząć. Bez karty i konta reklamowego.', finalButton: 'Odbierz bezpłatną analizę AI', footerLinks: ['Prywatność', 'Warunki', 'Dane firmy', 'Kontakt'], legal: 'HABELEV STANISLAV · Stripe €150/mies. do anulowania · krypto €150/30 dni bez odnowienia · budżet reklamowy osobno.'
  },
  uk: {
    langName: 'Українська', metaTitle: 'AdPilot — безкоштовний AI-розбір реклами вашого бізнесу', metaDescription: 'Дайте відповіді в Telegram і отримайте персональний план зростання: діагноз воронки, перший сегмент, рекламну обіцянку та наступний крок. Без картки й рекламного акаунта.',
    skip: 'Перейти до вмісту', menu: 'Відкрити меню', nav: ['Як це працює', 'Можливості', 'Безпека', 'Ціна', 'Питання'], navTry: 'Отримати розбір', heroBadge: 'Безкоштовний AI-розбір бізнесу для Meta і TikTok', heroTitle: 'Дізнайтеся, з якої реклами почати вашому бізнесу', heroLead: 'AI-стратег проведе професійне інтерв’ю та покаже, кого залучати першим, з якою обіцянкою виходити в рекламу, де губляться клієнти і що робити далі.', primary: 'Отримати безкоштовний розбір', secondary: 'Подивитися, як працює', offerNote: 'Безкоштовний розбір без картки · повний доступ €150/міс через Stripe або €150 за 30 днів у криптовалюті', heroFacts: ['Персонально за вашими відповідями', '10–15 хвилин у Telegram', 'Без рекламного бюджету'],
    chat: { online: 'онлайн', user: 'Я продаю послуги онлайн. Реклама дає кліки, але мало звернень.', answer: '<strong>Діагноз:</strong> вузьке місце — не охоплення, а перехід від інтересу до звернення. Холодному клієнту бракує зрозумілої причини довіряти.', settings: '<strong>Перший пріоритетний клієнт</strong><br>Людина з активною потребою, яка вже порівнює вашу пропозицію з альтернативами.', report: '<strong>Перший крок</strong><br>Зосередити одну кампанію на одному сегменті й одній доказовій обіцянці, що веде до звернення.', approve: 'Отримати мій розбір' },
    trust: [['Безкоштовно', 'Персональний план із ваших відповідей'], ['Без картки для розбору', 'Оплата лише після вашого рішення'], ['Без рекламного акаунта', 'Meta і TikTok лише після оплати'], ['€150 / місяць', 'Stripe з автопродовженням або разова криптооплата на 30 днів']],
    howKicker: 'Як це працює', howTitle: 'Спочатку отримайте користь. Потім вирішуйте щодо повного запуску', howLead: 'До оплати AdPilot не просить картку, рекламний акаунт чи доступ до ваших даних Meta і TikTok.', steps: [['Розкажіть про бізнес', 'Дайте відповіді про продукт, клієнтів, географію та спосіб отримання заявок. Зазвичай це займає 10–15 хвилин.'], ['Отримайте персональний план', 'AI покаже діагноз бізнесу, перший сегмент, кут позиціонування, вузьке місце воронки та перший стратегічний крок.'], ['Відкрийте повну систему, якщо план підходить', 'Оберіть €150/міс у Stripe з автопродовженням або разову оплату €150 у криптовалюті за 30 днів доступу.']],
    demoKicker: 'Що ви отримаєте безкоштовно', demoTitle: 'Висновки для вашого бізнесу, а не загальний чекліст', demoLead: 'Розбір будується з ваших відповідей. Він показує напрямок, але платні налаштування кампанії залишаються закритими до оплати.', demoTabs: [['Діагноз', 'Що заважає отримувати більше заявок'], ['Сегмент і обіцянка', 'Кого залучати і що говорити'], ['Перший крок', 'Ціль, шлях і дія'], ['Після оплати', 'Що відкриває повна система']], demoPanels: [['Безкоштовний висновок 1', 'Що відбувається в бізнесі зараз', 'AdPilot поєднує модель продажів, шлях клієнта й рекламну ціль, щоб визначити пріоритет запуску.', [['Основа', 'Ваші відповіді'], ['Фокус', 'Заявки й оплати'], ['Формат', 'Висновок з обґрунтуванням']]], ['Безкоштовний висновок 2', 'Кого вигідніше залучати першим', 'Замість спроби говорити з усіма ви отримуєте перший пріоритетний сегмент і доказовий кут позиціонування.', [['Сегмент', 'Перший пріоритет'], ['Обіцянка', 'Підтверджувана цінність'], ['Обмеження', 'Без вигаданих гарантій']]], ['Безкоштовний висновок 3', 'Де губляться клієнти і що робити першим', 'Розбір називає головне вузьке місце, рекомендовану ціль, шлях клієнта та перший стратегічний крок.', [['Ціль', 'Ліди, продажі або повідомлення'], ['Шлях', 'Сайт або переписка'], ['Дія', 'Перший тест кампанії']]], ['Повний доступ', 'Від стратегії до робочої кампанії', 'Після оплати відкриваються точна аудиторія, географія, бюджет, CTA, оголошення, візуали, запуск і подальший контроль.', [['Доступ', '30 днів'], ['AI-баланс', '100 кредитів включено'], ['Контроль', 'Кожні 6 годин']]]],
    featuresKicker: 'Можливості', featuresTitle: 'Усе для першої кампанії та подальшого контролю', featuresLead: 'Без перевантаженого кабінету й професійного жаргону.', features: [['01 / Стратегія', 'Професійна рекомендація', 'Ціль, напрямок, аудиторія та бюджет формуються з даних бізнесу, а не випадкового шаблону.'], ['02 / Креативи', 'Тексти, зображення й відео', 'Кілька рекламних концепцій для Meta і TikTok із можливістю використати власні матеріали.'], ['03 / Запуск', 'Створення кампанії через API', 'Після перевірки AdPilot створює структуру кампанії в підключеному рекламному кабінеті.'], ['04 / Аналітика', 'Звіти та пропозиції дій', 'Метрики перекладаються простою мовою: що відбувається, чому і яку дію можна підтвердити.']],
    controlKicker: 'Контроль', controlTitle: 'AI допомагає приймати рішення, але не забирає керування', controlLead: 'AdPilot автоматизує рутину. Бюджет, зупинка та інші критичні дії залишаються під вашим контролем.', controlChecks: ['Показує налаштування до запуску', 'Пояснює причину рекомендації', 'Враховує кілька факторів перед пропозицією', 'Застосовує критичні зміни після підтвердження'], compareHead: ['AdPilot робить', 'Ви вирішуєте'], compare: [['Аналізує анкету й метрики', 'Чи підключати рекламний кабінет'], ['Готує кампанію та оголошення', 'Чи приймати рекомендовані налаштування'], ['Перевіряє результат кожні 6 годин', 'Чи змінювати бюджет або ставити на паузу'], ['Надсилає звіти й попередження', 'Чи оплачувати наступний період доступу']],
    securityKicker: 'Безпека', securityTitle: 'Доступ без передачі пароля', securityLead: 'Підключення відбувається через офіційну авторизацію платформ. Проєкти й дані клієнтів розділені.', security: [['OAuth', 'Пароль не передається', 'Ви входите на стороні Meta або TikTok і самостійно підтверджуєте дозволи.'], ['Ізоляція', 'Проєкти не змішуються', 'Акаунти, налаштування й звіти кожного клієнта обробляються окремо.'], ['Згода', 'Важливі дії прозорі', 'Перед бюджетом, паузою та іншими критичними змінами бот просить підтвердження.'], ['Відкликання доступу', 'Контроль можна повернути', 'Доступ застосунку можна відкликати в налаштуваннях рекламної платформи.']],
    priceKicker: 'Ціна', priceTitle: 'Перетворіть розбір на робочу кампанію', priceLead: 'Безкоштовно отримайте напрямок. Якщо він підходить — відкрийте повний цикл від налаштувань до контролю результатів.', perMonth: '/ місяць', previewBadge: 'Безкоштовний розбір до оплати', priceItems: ['Точна аудиторія, географія, бюджет і CTA', 'Створення кампаній Meta і TikTok', 'Варіанти оголошень та інструменти для візуалів', '100 AI-кредитів на 30 днів', 'Перевірка показників кожні 6 годин і звіти', 'Критичні зміни лише після підтвердження', 'Підтримка всередині бота'], exclusions: 'Stripe: автоматичне списання €150 щомісяця до скасування в налаштуваннях акаунта. Криптовалюта: разова оплата €150 за 30 днів без автопродовження. Рекламний бюджет окремо.', priceButton: 'Спочатку отримати безкоштовний розбір',
    faqKicker: 'Питання', faqTitle: 'Коротко про важливе перед початком', faqs: [['Що саме я отримаю безкоштовно?', 'Персональний діагноз бізнесу, перший пріоритетний сегмент, кут позиціонування, вузьке місце воронки, рекомендовану ціль і перший стратегічний крок. Без запуску реклами й підключення кабінету.'], ['Що відкривається після оплати?', 'Повні налаштування кампанії, оголошення, інструменти створення візуалів, підключення Meta і TikTok, запуск, звіти та пропозиції оптимізації.'], ['Як продовжується доступ?', 'Оплата карткою Stripe коштує €150 на місяць і автоматично продовжується до скасування в налаштуваннях акаунта. Криптовалюта — разова оплата €150 за 30 днів без автопродовження.'], ['Як працюють AI-кредити?', 'На кожні 30 днів включено 100 кредитів — внутрішній ліміт $15 на AI-генерацію. Бот показує вартість до створення зображення або відео.'], ['Чи потрібно передавати пароль?', 'Ні. Безкоштовний розбір не потребує рекламного акаунта. Після оплати Meta і TikTok підключаються через офіційну авторизацію без передачі пароля AdPilot.'], ['Чи гарантує AdPilot продажі?', 'AdPilot не гарантує точну кількість продажів наперед. Результат залежить від пропозиції, ринку, бюджету й даних. Система будує запуск навколо заявок та оплат і допомагає керувати ним.']],
    finalKicker: 'Користь до оплати', finalTitle: 'Отримайте план для свого бізнесу. Потім вирішуйте щодо оплати', finalLead: 'Дайте відповіді в Telegram і побачте, з якого сегмента, обіцянки та рекламного кроку варто почати. Без картки й рекламного акаунта.', finalButton: 'Отримати безкоштовний AI-розбір', footerLinks: ['Конфіденційність', 'Умови', 'Реквізити', 'Контакт'], legal: 'HABELEV STANISLAV · Stripe €150/міс до скасування · крипто €150/30 днів без автопродовження · рекламний бюджет окремо.'
  }
};

const legalCopy = {
  ru: {
    back: 'Вернуться на главную', updated: 'Обновлено: 3 августа 2026 года', review: 'По вопросам о данных и работе сервиса: psbig@projectstudio-big.net или @sgabelev в Telegram.',
    privacyTitle: 'Политика конфиденциальности',
    privacySections: [
      ['Кто обрабатывает данные', 'Оператор AdPilot — HABELEV STANISLAV. Контакт по вопросам данных: psbig@projectstudio-big.net или @sgabelev в Telegram.'],
      ['Какие данные используются', 'Telegram ID и публичные данные профиля; ответы интервью и онбординга; выбранные проекты и настройки; после подключения — OAuth-токены и идентификаторы Meta/TikTok-аккаунтов; данные кампаний и метрики; обращения в поддержку; статус оплаченного доступа; технические журналы безопасности.'],
      ['Зачем нужны данные', 'Чтобы создать аккаунт, подготовить и запустить кампании по вашему запросу, получать метрики, формировать отчёты, показывать рекомендации, обрабатывать оплату, оказывать поддержку и предотвращать злоупотребления.'],
      ['Сторонние сервисы', 'В зависимости от функции данные могут обрабатываться Telegram, Meta, TikTok, Stripe, поставщиками AI-моделей, генерации медиа и инфраструктуры. Каждый сервис действует по собственным условиям и политике конфиденциальности.'],
      ['Безопасность и срок хранения', 'Секреты и токены должны храниться с ограниченным доступом. Данные сохраняются столько, сколько необходимо для работы сервиса, выполнения обязательств и защиты законных интересов, после чего удаляются или обезличиваются.'],
      ['Ваши права', 'Вы можете запросить доступ, исправление или удаление данных, ограничение обработки и отзыв доступа к рекламным платформам. Некоторые данные могут храниться дольше, если этого требует закон или разрешение спора.']
    ],
    termsTitle: 'Условия использования',
    termsSections: [
      ['Что предоставляет AdPilot', 'AdPilot помогает подготовить, запустить и анализировать рекламные кампании в Meta и TikTok через Telegram. Сервис не является Meta, TikTok, Telegram или рекламным агентством и не управляет правилами сторонних платформ.'],
      ['Доступ и полномочия', 'Вы подтверждаете, что имеете право подключать выбранные рекламные аккаунты, страницы и платёжные средства. Нельзя использовать сервис для незаконной рекламы, обмана, нарушения прав третьих лиц или обхода правил платформ.'],
      ['Бесплатный разбор и платный доступ', 'Персональный стратегический разбор доступен без карты и подключения рекламного кабинета. Оплата картой через Stripe создаёт подписку €150 в месяц с автоматическим списанием до отмены. Оплата криптовалютой разовая и открывает 30 дней доступа без автопродления. Рекламный бюджет оплачивается отдельно; на 30 дней включено 100 AI-кредитов.'],
      ['Решения и подтверждения', 'AdPilot может рекомендовать цель, аудиторию, бюджет, паузу или замену креатива. Вы отвечаете за проверку настроек и подтверждение критических действий.'],
      ['Результаты рекламы', 'Результаты зависят от ниши, предложения, бюджета, креативов, модерации и рынка. AdPilot не гарантирует лиды, продажи, стоимость результата или одобрение рекламы платформой.'],
      ['Продление, отмена и доступность', 'Stripe-подписка продлевается автоматически каждый месяц. Автопродление можно отменить в настройках аккаунта; оплаченный доступ сохраняется до конца текущего периода. Криптооплата не продлевается автоматически. Работа функций может зависеть от сторонних поставщиков. Поддержка: @sgabelev в Telegram.']
    ]
  },
  en: {
    back: 'Back to the homepage', updated: 'Updated: 3 August 2026', review: 'Questions about your data or the service: psbig@projectstudio-big.net or @sgabelev on Telegram.',
    privacyTitle: 'Privacy Policy',
    privacySections: [
      ['Who processes data', 'AdPilot is operated by HABELEV STANISLAV. Contact: psbig@projectstudio-big.net or @sgabelev on Telegram.'],
      ['Data we use', 'Telegram ID and public profile data; interview and onboarding answers; project settings; after connection, OAuth tokens and Meta/TikTok account identifiers; campaign data and metrics; support requests; paid-access status; security logs.'],
      ['Why we use it', 'To provide accounts, prepare and launch campaigns at your request, retrieve metrics, create reports, provide recommendations, process payments, support users and prevent abuse.'],
      ['Third-party services', 'Depending on the feature, data may be processed by Telegram, Meta, TikTok, Stripe, AI-model, media-generation and infrastructure providers. Each service operates under its own terms and privacy policy.'],
      ['Security and retention', 'Secrets and tokens should be stored with restricted access. Data is kept for as long as necessary to provide the service, meet obligations and protect legitimate interests, then deleted or anonymised.'],
      ['Your rights', 'You may request access, correction or deletion, restriction of processing, and revoke platform access. Some information may be retained where required by law or necessary to resolve a dispute.']
    ],
    termsTitle: 'Terms of Use',
    termsSections: [
      ['The service', 'AdPilot helps prepare, launch and analyse Meta and TikTok campaigns through Telegram. It is not Meta, TikTok, Telegram or an advertising agency and does not control third-party platform policies.'],
      ['Authority and acceptable use', 'You confirm you are authorised to connect the selected ad accounts, pages and payment methods. The service must not be used for illegal ads, deception, infringement or platform-rule circumvention.'],
      ['Free review and paid access', 'The personalised strategic review needs no card or ad-account connection. Card payment through Stripe creates a €150 monthly subscription that renews automatically until cancelled. Crypto is a one-time payment that opens 30 days with no auto-renewal. Ad spend is separate; 100 AI credits are included for 30 days.'],
      ['Recommendations and approval', 'AdPilot may recommend an objective, audience, budget, pause or creative replacement. You remain responsible for reviewing settings and approving critical actions.'],
      ['Advertising outcomes', 'Outcomes depend on the niche, offer, budget, creative, moderation and market. AdPilot does not guarantee leads, sales, cost per result or platform approval.'],
      ['Renewal, cancellation and availability', 'Stripe renews automatically each month. You can cancel auto-renewal in account settings; paid access remains available through the current billing period. Crypto never renews automatically. Features may depend on third-party providers. Support: @sgabelev on Telegram.']
    ]
  },
  pl: {
    back: 'Wróć na stronę główną', updated: 'Aktualizacja: 3 sierpnia 2026', review: 'Pytania o dane lub działanie usługi: psbig@projectstudio-big.net albo @sgabelev w Telegramie.',
    privacyTitle: 'Polityka prywatności',
    privacySections: [
      ['Administrator danych', 'Operatorem AdPilot jest HABELEV STANISLAV. Kontakt: psbig@projectstudio-big.net lub @sgabelev w Telegramie.'],
      ['Jakie dane wykorzystujemy', 'Telegram ID i publiczne dane profilu; odpowiedzi z wywiadu i onboardingu; ustawienia projektów; po połączeniu tokeny OAuth i identyfikatory kont Meta/TikTok; dane kampanii i metryki; zgłoszenia do wsparcia; status płatnego dostępu; logi bezpieczeństwa.'],
      ['Cele przetwarzania', 'Utworzenie konta, przygotowanie i uruchomienie kampanii na żądanie, pobieranie metryk, raporty, rekomendacje, płatności, wsparcie i zapobieganie nadużyciom.'],
      ['Usługi zewnętrzne', 'W zależności od funkcji dane mogą być przetwarzane przez Telegram, Meta, TikTok, Stripe oraz dostawców modeli AI, generowania mediów i infrastruktury. Każdy z nich stosuje własne warunki i politykę prywatności.'],
      ['Bezpieczeństwo i przechowywanie', 'Sekrety i tokeny powinny być chronione ograniczonym dostępem. Dane są przechowywane przez czas niezbędny do świadczenia usługi, realizacji obowiązków i ochrony uzasadnionych interesów, a następnie usuwane lub anonimizowane.'],
      ['Twoje prawa', 'Możesz zażądać dostępu, sprostowania lub usunięcia danych, ograniczenia przetwarzania oraz cofnąć dostęp do platform reklamowych. Niektóre dane mogą być przechowywane dłużej, gdy wymaga tego prawo lub rozwiązanie sporu.']
    ],
    termsTitle: 'Warunki korzystania',
    termsSections: [
      ['Zakres usługi', 'AdPilot pomaga przygotować, uruchomić i analizować kampanie Meta i TikTok przez Telegram. Nie jest firmą Meta, TikTok, Telegram ani agencją reklamową i nie kontroluje zasad zewnętrznych platform.'],
      ['Uprawnienia i dozwolone użycie', 'Potwierdzasz, że masz prawo podłączyć wybrane konta reklamowe, strony i metody płatności. Nie wolno używać usługi do nielegalnych reklam, oszustw, naruszania praw ani obchodzenia zasad platform.'],
      ['Bezpłatna analiza i płatny dostęp', 'Spersonalizowana analiza strategiczna nie wymaga karty ani konta reklamowego. Płatność kartą przez Stripe tworzy subskrypcję €150 miesięcznie, odnawianą automatycznie do anulowania. Krypto jest płatnością jednorazową za 30 dni bez automatycznego odnowienia. Budżet reklamowy jest osobny; na 30 dni otrzymujesz 100 kredytów AI.'],
      ['Rekomendacje i zgody', 'AdPilot może rekomendować cel, grupę, budżet, pauzę lub zmianę kreacji. Odpowiadasz za sprawdzenie ustawień i zatwierdzanie krytycznych działań.'],
      ['Wyniki reklam', 'Wyniki zależą od branży, oferty, budżetu, kreacji, moderacji i rynku. AdPilot nie gwarantuje leadów, sprzedaży, kosztu wyniku ani akceptacji reklamy.'],
      ['Odnowienie, anulowanie i dostępność', 'Stripe odnawia subskrypcję automatycznie co miesiąc. Możesz anulować odnowienie w ustawieniach konta; opłacony dostęp pozostaje do końca okresu. Krypto nie odnawia się automatycznie. Funkcje mogą zależeć od zewnętrznych dostawców. Wsparcie: @sgabelev w Telegramie.']
    ]
  },
  uk: {
    back: 'Повернутися на головну', updated: 'Оновлено: 3 серпня 2026 року', review: 'Питання про дані або роботу сервісу: psbig@projectstudio-big.net або @sgabelev у Telegram.',
    privacyTitle: 'Політика конфіденційності',
    privacySections: [
      ['Хто обробляє дані', 'Оператор AdPilot — HABELEV STANISLAV. Контакт: psbig@projectstudio-big.net або @sgabelev у Telegram.'],
      ['Які дані використовуються', 'Telegram ID і публічні дані профілю; відповіді інтерв’ю та онбордингу; налаштування проєктів; після підключення OAuth-токени та ідентифікатори Meta/TikTok-акаунтів; дані кампаній і метрики; звернення до підтримки; статус платного доступу; журнали безпеки.'],
      ['Навіщо потрібні дані', 'Для створення акаунта, підготовки й запуску кампаній за вашим запитом, отримання метрик, звітів, рекомендацій, обробки оплати, підтримки та запобігання зловживанням.'],
      ['Сторонні сервіси', 'Залежно від функції дані можуть обробляти Telegram, Meta, TikTok, Stripe, постачальники AI-моделей, генерації медіа та інфраструктури. Кожен сервіс діє за власними умовами й політикою конфіденційності.'],
      ['Безпека та зберігання', 'Секрети й токени мають зберігатися з обмеженим доступом. Дані зберігаються стільки, скільки потрібно для роботи сервісу, виконання обов’язків і захисту законних інтересів, після чого видаляються або знеособлюються.'],
      ['Ваші права', 'Ви можете запросити доступ, виправлення або видалення даних, обмеження обробки та відкликати доступ до рекламних платформ. Деякі дані можуть зберігатися довше, якщо цього вимагає закон або вирішення спору.']
    ],
    termsTitle: 'Умови використання',
    termsSections: [
      ['Що надає AdPilot', 'AdPilot допомагає підготувати, запустити й аналізувати кампанії Meta і TikTok через Telegram. Сервіс не є Meta, TikTok, Telegram або рекламною агенцією та не контролює правила сторонніх платформ.'],
      ['Повноваження та допустиме використання', 'Ви підтверджуєте право підключати вибрані рекламні акаунти, сторінки й платіжні засоби. Не можна використовувати сервіс для незаконної реклами, обману, порушення прав або обходу правил платформ.'],
      ['Безкоштовний розбір і платний доступ', 'Персональний стратегічний розбір не потребує картки чи рекламного акаунта. Оплата карткою через Stripe створює підписку €150 на місяць з автоматичним списанням до скасування. Криптовалюта — разова оплата за 30 днів без автопродовження. Рекламний бюджет окремо; на 30 днів включено 100 AI-кредитів.'],
      ['Рекомендації та підтвердження', 'AdPilot може рекомендувати ціль, аудиторію, бюджет, паузу або заміну креативу. Ви відповідаєте за перевірку налаштувань і підтвердження критичних дій.'],
      ['Результати реклами', 'Результати залежать від ніші, пропозиції, бюджету, креативів, модерації та ринку. AdPilot не гарантує ліди, продажі, вартість результату або схвалення реклами.'],
      ['Продовження, скасування й доступність', 'Stripe автоматично продовжує підписку щомісяця. Автопродовження можна скасувати в налаштуваннях акаунта; оплачений доступ діє до кінця поточного періоду. Криптооплата не продовжується автоматично. Функції можуть залежати від сторонніх постачальників. Підтримка: @sgabelev у Telegram.']
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
  <meta property="og:image" content="${baseUrl}/og.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(t.metaTitle)}">
  <meta name="twitter:description" content="${esc(t.metaDescription)}">
  <meta name="twitter:image" content="${baseUrl}/og.png">
  <link rel="stylesheet" href="/assets/style.css">
  <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'AdPilot', applicationCategory: 'BusinessApplication', operatingSystem: 'Telegram', offers: { '@type': 'Offer', price: '150', priceCurrency: 'EUR', description: 'Free personalised strategic review; full access is €150/month through recurring Stripe billing or €150 for 30 days as a one-time crypto payment' }, url: `${baseUrl}/${locale}/` })}</script>
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
          <div class="fine-print">${esc(t.offerNote)}</div>
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
