# AdPilot landing

Static multilingual landing page for `https://adpilot.projectstudio-big.net/`.

## Build and validate

```powershell
node build.mjs
node validate.mjs
```

`build.mjs` is the source of truth for the four locales (`ru`, `en`, `pl`,
`uk`) and their legal pages. Generated HTML is committed intentionally so
Vercel can serve the repository as a static site without a build runtime.

The validator blocks:

- stale free-trial and customer-supplied OpenRouter promises;
- missing Free Strategic Preview copy or the €150 subscription terms;
- broken locale metadata, anchors, legal pages, Telegram attribution, CSP
  assumptions, accessibility safeguards, and social-preview dimensions.

## Conversion contract

Every Telegram CTA carries a start token in this format:

```text
lp_<locale>_<position>_fsp[_c_<utm-campaign>][_x_<utm-content>]
```

The browser script appends optional, sanitised `utm_campaign` and
`utm_content` values behind explicit `_c_` and `_x_` markers while keeping
Telegram's payload within 64 characters.

## Safe rollout

Do not publish the Free Strategic Preview landing copy before the Telegram
bot exposes the matching unpaid preview flow. Otherwise the landing promise
and the product experience would disagree.

Before production deployment:

1. Run the build and validator.
2. Review desktop and mobile pages in all four locales.
3. Confirm every CTA opens `@AdPilotTop_bot` with an `_fsp` start token.
4. Confirm the unpaid bot experience offers the strategic review without
   requesting Meta/TikTok access, a payment card, or API keys.
