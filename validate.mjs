import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const locales = ['ru', 'en', 'pl', 'uk'];
const failures = [];

function check(condition, message) {
  if (!condition) failures.push(message);
}

for (const locale of locales) {
  const file = join(root, locale, 'index.html');
  const html = await readFile(file, 'utf8');

  check(html.includes(`<html lang="${locale}">`), `${locale}: missing html lang`);
  check(html.includes(`<link rel="canonical" href="https://adpilot.projectstudio-big.net/${locale}/">`), `${locale}: wrong canonical`);
  const head = html.slice(0, html.indexOf('</head>'));
  check((head.match(/hreflang="(?:ru|en|pl|uk)"/g) || []).length === 4, `${locale}: incomplete hreflang set`);
  check(html.includes('hreflang="x-default"'), `${locale}: missing x-default`);
  check((html.match(/data-telegram-start=/g) || []).length === 4, `${locale}: expected four attributed Telegram CTAs`);
  for (const placement of ['nav', 'hero', 'price', 'final']) {
    const payload = `lp_${locale}_${placement}_fsp`;
    check(html.includes(`data-telegram-start="${payload}"`), `${locale}: missing ${placement} free-preview payload`);
    check(html.includes(`?start=${payload}`), `${locale}: missing ${placement} Telegram deep link`);
  }
  check(!html.includes('href="https://t.me/AdPilotTop_bot"'), `${locale}: unattributed Telegram link`);
  check(!html.includes('style="'), `${locale}: inline style conflicts with CSP`);
  check(html.includes('prefers-reduced-motion') === false, `${locale}: CSS leaked into HTML`);
  check(html.includes('aria-selected="true"'), `${locale}: tablist has no selected tab`);
  check((html.match(/<details>/g) || []).length === 6, `${locale}: expected six FAQ items`);
  check((html.match(/<section/g) || []).length >= 9, `${locale}: page structure is incomplete`);
  check(!/7 days|7 дней|7 dni|7 днів|14 days|14 дней|14 dni|14 днів|free trial|пробн(?:ый|ого)|okres próbny|пробн(?:ий|ого)|OpenRouter/i.test(html), `${locale}: stale trial or personal-key copy`);
  check(!html.includes('$150'), `${locale}: stale dollar price`);
  check(/Stripe/i.test(html), `${locale}: recurring Stripe option is missing`);
  check(/crypto|крипто|krypto|криптовалют/i.test(html), `${locale}: one-time crypto option is missing`);
  check(/€150\s*\/\s*(?:month|месяц|miesiąc|місяць)/i.test(html), `${locale}: monthly Stripe price is missing`);
  check(!/Renewal is not automatic|Продление не автоматическое|Odnowienie nie jest automatyczne|Продовження не автоматичне/i.test(html), `${locale}: stale blanket no-renewal claim`);
  check(html.includes('100') && /AI/i.test(html), `${locale}: included AI credit balance is missing`);
  check(html.includes('30'), `${locale}: 30-day access period is missing`);
  check(!/15 (native |нативн|język|мов)/i.test(html), `${locale}: unsupported 15-language claim`);
  check(!/guarantee|гарантиру|gwarant|гарантує/i.test(html) || /does not guarantee|не гарантирует|nie gwarantuje|не гарантує/i.test(html), `${locale}: unqualified guarantee claim`);

  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  for (const match of html.matchAll(/href="#([^"]+)"/g)) {
    check(ids.has(match[1]), `${locale}: broken anchor #${match[1]}`);
  }

  for (const type of ['privacy', 'terms', 'company']) {
    try {
      const legalHtml = await readFile(join(root, locale, type, 'index.html'), 'utf8');
      check(legalHtml.includes(`<html lang="${locale}">`), `${locale}/${type}: missing language`);
      check(!legalHtml.includes('style="'), `${locale}/${type}: inline style conflicts with CSP`);
      const legalHead = legalHtml.slice(0, legalHtml.indexOf('</head>'));
      check((legalHead.match(/hreflang="(?:ru|en|pl|uk)"/g) || []).length === 4, `${locale}/${type}: incomplete hreflang set`);
      check(legalHead.includes('hreflang="x-default"'), `${locale}/${type}: missing x-default`);
      const expectedSections = type === 'company' ? 4 : 6;
      check((legalHtml.match(/<section>/g) || []).length === expectedSections, `${locale}/${type}: incomplete information sections`);
      if (type === 'terms') {
        check(!/7 days|7 дней|7 dni|7 днів|free trial|пробн(?:ый|ого)|okres próbny|пробн(?:ий|ого)|OpenRouter/i.test(legalHtml), `${locale}/${type}: stale commercial terms`);
        check(legalHtml.includes('150') && legalHtml.includes('30'), `${locale}/${type}: current paid-access terms are missing`);
        check(/Stripe/i.test(legalHtml), `${locale}/${type}: recurring Stripe terms are missing`);
        check(/crypto|крипто|krypto|криптовалют/i.test(legalHtml), `${locale}/${type}: one-time crypto terms are missing`);
      }
    } catch {
      failures.push(`${locale}: missing ${type} page`);
    }
  }
}

const israelFile = join(root, 'ru', 'israel', 'index.html');
const israelHtml = await readFile(israelFile, 'utf8');
check(israelHtml.includes('<html lang="ru">'), 'ru/israel: missing html lang');
check(israelHtml.includes('<meta name="robots" content="noindex,follow">'), 'ru/israel: page must remain noindex');
check(israelHtml.includes('<link rel="canonical" href="https://adpilot.projectstudio-big.net/ru/israel/">'), 'ru/israel: wrong canonical');
check((israelHtml.match(/data-telegram-start=/g) || []).length === 4, 'ru/israel: expected four attributed Telegram CTAs');
for (const placement of ['nav', 'hero', 'price', 'final']) {
  const payload = `lp_ru_${placement}_fsp`;
  check(israelHtml.includes(`data-telegram-start="${payload}"`), `ru/israel: missing ${placement} payload`);
  check(israelHtml.includes(`?start=${payload}`), `ru/israel: missing ${placement} Telegram link`);
}
check(!israelHtml.includes('href="https://t.me/AdPilotTop_bot"'), 'ru/israel: unattributed Telegram link');
check(!israelHtml.includes('первая кампания бесплатно'), 'ru/israel: forbidden free-campaign claim');
check(/бесплатн(?:ый|ого) стратегическ(?:ий|ого) разбор бизнеса/i.test(israelHtml), 'ru/israel: strategic review offer is missing');
check(/€150\s*\/\s*месяц/i.test(israelHtml), 'ru/israel: recurring Stripe price is missing');
check(/автоматическое списание €150 каждый месяц до отмены/i.test(israelHtml), 'ru/israel: recurring Stripe disclosure is missing');
check(/€150 за 30 дней без автопродления/i.test(israelHtml), 'ru/israel: crypto terms are missing');
check(israelHtml.includes('100 AI-кредитов'), 'ru/israel: included AI credits are missing');
check(israelHtml.includes('Рекламный бюджет оплачивается отдельно'), 'ru/israel: separate ad spend disclosure is missing');
check(israelHtml.includes('не читает переписку') && israelHtml.includes('не отвечает клиентам'), 'ru/israel: WhatsApp boundary is missing');
check(/не гарантирует CPL, продажи или окупаемость/i.test(israelHtml), 'ru/israel: outcome disclaimer is missing');
check(!/отч[её]т(?:ы|а)?[^.<]{0,40}каждые 6 часов/i.test(israelHtml), 'ru/israel: reports must not be promised every six hours');
check(/Проверяет рекламные показатели каждые 6 часов/i.test(israelHtml), 'ru/israel: metric check cadence is missing');
check(!israelHtml.includes('style="'), 'ru/israel: inline style conflicts with CSP');
const israelIds = new Set([...israelHtml.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
for (const match of israelHtml.matchAll(/href="#([^"]+)"/g)) {
  check(israelIds.has(match[1]), `ru/israel: broken anchor #${match[1]}`);
}

const sitemapText = await readFile(join(root, 'sitemap.xml'), 'utf8');
check(!sitemapText.includes('/ru/israel/'), 'sitemap: Israel test page must remain excluded');

const css = await readFile(join(root, 'assets', 'style.css'), 'utf8');
check(css.includes(':focus-visible'), 'CSS: missing focus-visible styles');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'CSS: missing reduced-motion support');
check(!css.includes('@keyframes'), 'CSS: continuous animation unexpectedly present');

const js = await readFile(join(root, 'assets', 'main.js'), 'utf8');
check(js.includes('slice(0, 64)'), 'JS: Telegram start token length is not capped');
check(js.includes('landingStartPattern'), 'JS: trusted landing payload is not validated');
check(js.includes("`_c_${campaign}`") && js.includes("`_x_${content}`"), 'JS: UTM markers do not match bot parser');
check(!js.includes('localStorage'), 'JS: locale must not depend on localStorage');

const israelCampaign = 'il-ru-repair';
const israelContent = 'static-a';
for (const placement of ['nav', 'hero', 'price', 'final']) {
  const base = `lp_ru_${placement}_fsp`;
  const token = `${base}_c_${israelCampaign}_x_${israelContent}`.slice(0, 64);
  const expected = `lp_ru_${placement}_fsp_c_il-ru-repair_x_static-a`;
  check(token === expected, `ru/israel: wrong attributed ${placement} payload`);
  check(token.length <= 64, `ru/israel: ${placement} payload exceeds Telegram limit`);
}

const config = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
const headerValues = config.headers?.flatMap((entry) => entry.headers || []).map((header) => header.key) || [];
for (const name of ['Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy', 'X-Frame-Options']) {
  check(headerValues.includes(name), `vercel.json: missing ${name}`);
}

for (const required of ['robots.txt', 'sitemap.xml', 'privacy.html', 'terms.html', 'company.html', 'og.png']) {
  try { await access(join(root, required)); } catch { failures.push(`Missing ${required}`); }
}

try {
  const og = await readFile(join(root, 'og.png'));
  check(og.subarray(1, 4).toString('ascii') === 'PNG', 'og.png: invalid PNG signature');
  check(og.readUInt32BE(16) === 1200 && og.readUInt32BE(20) === 630, 'og.png: expected 1200x630');
} catch {
  failures.push('og.png: cannot inspect dimensions');
}

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Validation passed for ${locales.length} locales.`);
