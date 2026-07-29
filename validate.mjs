import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const locales = ['ru', 'en', 'pl', 'uk'];
const failures = [];
const requiredCommercialCopy = {
  ru: ['Получить бесплатный разбор', 'До оплаты — бесплатный стратегический разбор', '€150', 'Без карты · без подключения Meta · без API-ключей'],
  en: ['Get my free business review', 'Before payment — free strategic review', '€150', 'No card · no Meta connection · no API keys'],
  pl: ['Odbierz bezpłatną analizę', 'Przed płatnością — bezpłatna analiza strategiczna', '€150', 'Bez karty · bez podłączania Meta · bez kluczy API'],
  uk: ['Отримати безкоштовний розбір', 'До оплати — безкоштовний стратегічний розбір', '€150', 'Без картки · без підключення Meta · без API-ключів']
};
const requiredTermsCopy = {
  ru: ['Обновлено: 29 июля 2026 года', 'Бесплатный разбор и подписка', '€150'],
  en: ['Updated: 29 July 2026', 'Free review and subscription', '€150'],
  pl: ['Aktualizacja: 29 lipca 2026', 'Bezpłatna analiza i abonament', '€150'],
  uk: ['Оновлено: 29 липня 2026 року', 'Безкоштовний розбір і підписка', '€150']
};
const forbiddenCommercialCopy = [
  /7[- ]day free trial/i,
  /7 days free/i,
  /seven days (?:free|without a card)/i,
  /free seven days/i,
  /7 дней/i,
  /семь дней/i,
  /7 dni/i,
  /siedem dni/i,
  /7 днів/i,
  /сім днів/i,
  /free period/i,
  /darmowy okres/i,
  /безкоштовний період/i,
  /own OpenRouter key/i,
  /własnego klucza OpenRouter/i,
  /ваш(?:его)? ключ(?:а)? OpenRouter/i,
  /вашого ключа OpenRouter/i
];

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
  check(!html.includes('href="https://t.me/AdPilotTop_bot"'), `${locale}: unattributed Telegram link`);
  check(!html.includes('style="'), `${locale}: inline style conflicts with CSP`);
  check(html.includes('prefers-reduced-motion') === false, `${locale}: CSS leaked into HTML`);
  check(html.includes('aria-selected="true"'), `${locale}: tablist has no selected tab`);
  check((html.match(/<details>/g) || []).length === 6, `${locale}: expected six FAQ items`);
  check((html.match(/<section/g) || []).length >= 9, `${locale}: page structure is incomplete`);
  check(!html.includes('14 days') && !html.includes('14 дней') && !html.includes('14 dni') && !html.includes('14 днів'), `${locale}: stale 14-day trial copy`);
  check(!html.includes('$150'), `${locale}: stale dollar price`);
  check(!/15 (native |нативн|język|мов)/i.test(html), `${locale}: unsupported 15-language claim`);
  check(!/guarantee|гарантиру|gwarant|гарантує/i.test(html) || /does not guarantee|не гарантирует|nie gwarantuje|не гарантує/i.test(html), `${locale}: unqualified guarantee claim`);
  for (const phrase of requiredCommercialCopy[locale]) {
    check(html.includes(phrase), `${locale}: missing required commercial copy "${phrase}"`);
  }
  for (const pattern of forbiddenCommercialCopy) {
    check(!pattern.test(html), `${locale}: stale trial or BYOK promise matches ${pattern}`);
  }
  check(html.includes(`lp_${locale}_hero_fsp`), `${locale}: Telegram attribution token is not on the Free Strategic Preview version`);

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
      if (type !== 'company') {
        for (const pattern of forbiddenCommercialCopy) {
          check(!pattern.test(legalHtml), `${locale}/${type}: stale trial or BYOK promise matches ${pattern}`);
        }
        if (type === 'terms') {
          for (const phrase of requiredTermsCopy[locale]) {
            check(legalHtml.includes(phrase), `${locale}/terms: missing required commercial term "${phrase}"`);
          }
        }
      }
    } catch {
      failures.push(`${locale}: missing ${type} page`);
    }
  }
}

const css = await readFile(join(root, 'assets', 'style.css'), 'utf8');
check(css.includes(':focus-visible'), 'CSS: missing focus-visible styles');
check(css.includes('@media (prefers-reduced-motion: reduce)'), 'CSS: missing reduced-motion support');
check(!css.includes('@keyframes'), 'CSS: continuous animation unexpectedly present');

const js = await readFile(join(root, 'assets', 'main.js'), 'utf8');
check(js.includes('slice(0, 64)'), 'JS: Telegram start token length is not capped');
check(!js.includes('localStorage'), 'JS: locale must not depend on localStorage');

const config = JSON.parse(await readFile(join(root, 'vercel.json'), 'utf8'));
const headerValues = config.headers?.flatMap((entry) => entry.headers || []).map((header) => header.key) || [];
for (const name of ['Content-Security-Policy', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy', 'X-Frame-Options']) {
  check(headerValues.includes(name), `vercel.json: missing ${name}`);
}

for (const required of ['robots.txt', 'sitemap.xml', 'privacy.html', 'terms.html', 'company.html', 'og-preview-fsp.png']) {
  try { await access(join(root, required)); } catch { failures.push(`Missing ${required}`); }
}

try {
  const og = await readFile(join(root, 'og-preview-fsp.png'));
  check(og.subarray(1, 4).toString('ascii') === 'PNG', 'og-preview-fsp.png: invalid PNG signature');
  check(og.readUInt32BE(16) === 1200 && og.readUInt32BE(20) === 630, 'og-preview-fsp.png: expected 1200x630');
} catch {
  failures.push('og-preview-fsp.png: cannot inspect dimensions');
}

if (failures.length) {
  console.error(failures.map((failure) => `FAIL: ${failure}`).join('\n'));
  process.exit(1);
}

console.log(`Validation passed for ${locales.length} locales.`);
