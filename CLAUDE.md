# CLAUDE.md

Portfolio site for Trine Dreisig's dog photography business, live at https://hundefotografi.dk/. All user-facing copy is in **Danish**.

## Stack

- **Nuxt 2** (`^2.15`, Vue 2, Options API, Vuex). Not Nuxt 3: no `<script setup>`, no Composition API, no `useHead`/`useFetch`.
- **Tailwind CSS v2** via `@nuxtjs/tailwindcss` (`purge`, `variants`, `darkMode: "class"`), plus `@tailwindcss/typography`.
- **Contentful** as headless CMS for page text and photos.
- **Inter** font, self-hosted via `@fontsource/inter` (Latin subset, weights 400, 500, 700 and 900, loaded in `nuxt.config.js` `css`) and set as Tailwind's `sans`. Don't load fonts from Google Fonts. If you use a new weight (for example `font-semibold`), import its `latin-<weight>.css` too.
- `@nuxt/image` (Contentful provider), `@nuxtjs/color-mode`, `@nuxtjs/pwa`, `vue-masonry-css`.
- Node 16 (see `Dockerfile`). Newer Node versions may fail with this Nuxt 2 / webpack 4 toolchain.

## Commands

```bash
npm run dev        # dev server (localhost:3000)
npm run generate   # static build into dist/ (what production uses)
npm run lint       # eslint on .js/.vue
make up            # build if needed and run in Docker on localhost:8080 (`make dev` is an alias)
make url           # print links for other devices on the same network (<host>.local:8080 and LAN IP)
```

There are no tests.

Requires a `.env` (gitignored) with `NUXT_ENV_CONTENTFUL_SPACE` and `NUXT_ENV_CONTENTFUL_ACCESS_TOKEN`. Without it, Contentful calls fail and pages render empty.

## Deployment

- Hosted on **Netlify** as a static site. Build settings live in the Netlify UI; there is no `netlify.toml`.
- `develop` is the working branch. **Merging to `main` on GitHub triggers the production deploy.**
- Contentful content is read from the Contentful API at runtime, in the browser, so edits published in Contentful show up without a redeploy. The prerendered HTML from `generate` also contains the text (for SEO and link previews), and the browser refetches it on load. Code changes still need a merge to `main`.
- Images come from two places: gallery and section photos are Contentful assets served via `images.ctfassets.net`, while the logo, icons and the about-page photo (`trfhi.jpg`) are files in `static/` that ship with the deploy.

## Architecture

- `layouts/default.vue`: fixed `UINavigation`, a centered `<main>`, and `UIFooter`. `layouts/error.vue` is the 404 / error page.
- `pages/`: `index` (masonry gallery), `about` (Om fotografen), `pricing` (Priser), `booking`, `terms` (Handelsbetingelser). `-shop.vue` is disabled: the leading `-` makes Nuxt ignore it, and its nav link is commented out.
- Components are auto-imported with the folder as prefix: `components/UI/Section.vue` becomes `<UISection>`, `components/Grid/Item.vue` becomes `<GridItem>`, `components/Icons/Calendar.vue` becomes `<IconsCalendar>`.

### Data flow (Contentful → Vuex)

- `plugins/contentful.js` exports a shared Contentful client.
- `plugins/frontpage.js` runs on both server and client on every load and dispatches `getFrontpage`, which fetches the gallery entry `29HZzUSFfN81hc2NjQxCw9` into root store `images`. Every page reuses these images (masonry on the home page, random side images on content pages).
- Content pages use the `sectionsPage(entryId)` mixin from `plugins/contentful.js` with a hard-coded Contentful entry ID. Its `asyncData` fetches the entry's `section[]` list into the page's `sections` data, so the text is in the generated HTML. On a direct load, `mounted()` fetches again so Contentful edits show without a redeploy. On client-side navigation only `asyncData` runs. Each section (`fields.title`, `fields.content`) renders through `<UISection>`. Entry IDs: If the browser refetch fails, `getSections` returns `null` and the server-rendered text is kept. Pass `{ sideImages: n }` to also pick `n` random gallery images in `asyncData` (so the server's pick survives hydration) and render them with `<GridSideImages :images="sideImages" />`.
  - about: `2f0zj0mrh9p5aTkGUtpJje`
  - pricing: `3eqnidgZU6k7iOcTL8EVf9`
  - booking: `5M3qBrofDxJh1brqnDrWux`
  - terms: `TV8S55okZJ8WzThQ7Woba`
  - shop (disabled): `5ZQvRquYaCDjfwLrmfbT0O`
- `UISection` takes a `level` prop. Pages pass `:level="index === 0 ? 1 : 2"`, so each page has exactly one `h1` (30px mobile, 24px at `sm` where the layout splits into two columns, 30px at `md`, 36px at `lg`; sized so "HANDELSBETINGELSER" fits on one line) and later sections get a small `h2` subheading (18px, `leading-tight`, `mt-10 mb-3`). Both are `font-black uppercase`; the `h1` also has `leading-none tracking-tight`. Both use `.hyphens-auto` (in `static/style.css`), so long Danish words hyphenate instead of overflowing.
- `UISection` renders `content` with `v-html`, so Contentful content is HTML.
- Images go through `<nuxt-img provider="contentful" format="webp">`. `GridItem` turns the asset URL into a provider path by cutting it at the space ID `cyne1yv2gwkj`.
- `plugins/about.js` exists but is not registered in `nuxt.config.js`.

## Conventions

- Prettier: no semicolons, single quotes. Some older files still use semicolons and double quotes; follow the file you're editing.
- Navigation-style links (the menu, "Book her") use `text-sm font-bold uppercase tracking-wider`.
- Every page sets its own `head`: a Danish `title` in the form `"<Page> - Hundefotografi"`, a `description` meta with `hid: 'description'`, and a JSON-LD `script`. Keep all three in sync when changing page copy.
- Colours come from two Tailwind tokens (the "museumsgrå" palette in `tailwind.config.js`): `paper` (#EFEFED, with `paper-deep` for raised surfaces) and `ink` (#000, with `ink-soft`). Light mode is `bg-paper text-ink`, dark mode the reverse: `dark:bg-ink dark:text-paper`. Use one ink colour for all text and get hierarchy from size and weight, not grey shades. Don't use Tailwind's `gray-*` palette. Hover states are a rounded background in the deeper shade: `rounded hover:bg-paper-deep dark:hover:bg-ink-soft`. Inside the open menu, which already sits on `paper-deep`, it's `hover:bg-paper dark:hover:bg-ink`. Support dark mode on all new UI.
- When adding or removing a page, also update the `links` array in `components/UI/Navigation.vue` and `static/sitemap.xml`. The sitemap is maintained by hand.
- Static files in `static/` are served from `/` (for example `/logo_blue.png` and `/trfhi.jpg` on the about page).
