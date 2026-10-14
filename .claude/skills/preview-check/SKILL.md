---
name: preview-check
description: Check a pull request's Netlify deploy preview before merging. Waits for the preview, verifies every page and response header, clicks through the site with client-side navigation looking for broken images or requests, and runs Lighthouse against the preview and the live site. Use after a PR to main is opened (the /release skill ends with it), or when the user asks to check a preview or a PR before merging.
argument-hint: "[PR number]"
---

# Check a Netlify deploy preview

Netlify builds every PR into `https://deploy-preview-<PR>--epic-varahamihira-6e9427.netlify.app`. This is the real hosting environment, with compression, HTTP/2, `static/_headers` and redirects, so it catches problems that local builds can't (for example, images that only break after client-side navigation). This check is read-only: don't push fixes or merge as part of it.

PR: `$ARGUMENTS`. If empty, use the open PR from `develop` to `main` (`gh pr list --base main --head develop --state open`).

## 1. Find the preview

Netlify reports the preview as a commit status on the PR's head commit:

```bash
SHA=$(gh pr view <PR> --json headRefOid -q .headRefOid)
gh api repos/Sultenhest/automatic-octo-computing-machine/commits/$SHA/status \
  --jq '.statuses[] | select(.context | endswith("/deploy-preview")) | "\(.state) \(.target_url)"'
```

- `success`: use `target_url` as `PREVIEW`.
- `pending`: the build is running. Use the Monitor tool with an until-loop on this status, checking every 30 s for up to 10 minutes. Don't poll in a tight loop.
- `failure`, or no status after 10 minutes: stop and report it, with the Netlify deploy link from `gh pr checks <PR>`.

## 2. Pages and headers

Take the pages from `static/sitemap.xml`, replacing `https://hundefotografi.dk` with `PREVIEW`. For each page, `curl -s -D -` and check:

- The status is 200, and the URL without the trailing slash redirects to the one with it.
- The headers from `static/_headers` are present. `X-Robots-Tag: noindex` is **expected** on previews: Netlify adds it so previews aren't indexed.
- The HTML has the Contentful text (at least one `h1`), plus `og:url` and `og:title` for that page. `og:url` points at hundefotografi.dk, not the preview host; that's correct.
- Every image URL in the HTML (`src` and each `srcset` candidate, including images.ctfassets.net) returns 200.

## 3. Click through the site

In the built-in browser:

1. Open `PREVIEW/` and wait for it to load.
2. For every other page, navigate client-side with `window.$nuxt.$router.push('<path>')`, wait about 2 s, and record:
   - `img` elements that haven't loaded (`complete && naturalWidth === 0`)
   - failed requests from `performance.getEntriesByType('resource')` where `responseStatus >= 400`
   - any `/_ipx/` request (those only exist on the dev server)
   - console errors
3. Repeat once at phone width (`resize_window` preset `mobile`), then reset to `desktop`.

The browser pane may not render frames while it's hidden, which can leave Vue page transitions stuck halfway. If a page looks stuck, take a screenshot to force a frame before treating it as a bug.

## 4. Lighthouse: preview against live

Run Lighthouse 12 in a throwaway container, writing reports to a temp folder outside the repo (`mktemp -d`):

```bash
docker run --rm -v "$OUT":/out -w /out node:20-bookworm-slim sh -c '
apt-get update -qq >/dev/null && apt-get install -y -qq chromium >/dev/null 2>&1 &&
npm i -g -s lighthouse@12 >/dev/null 2>&1 &&
for t in "preview-mobile <PREVIEW>/ mobile" "live-mobile https://hundefotografi.dk/ mobile" \
         "preview-desktop <PREVIEW>/ desktop" "live-desktop https://hundefotografi.dk/ desktop"; do
  set -- $t; P=""; [ "$3" = desktop ] && P="--preset=desktop"
  CHROME_PATH=/usr/bin/chromium lighthouse "$2" $P \
    --only-categories=performance,accessibility,best-practices,seo \
    --output=json --output-path=/out/$1.json \
    --chrome-flags="--headless=new --no-sandbox" --quiet
done'
```

Also run the pages that changed in the PR, not only `/`. Parse the JSON with Python and compare preview against live: the four category scores, LCP, CLS, TBT and total weight.

- The SEO audit `is-crawlable` always fails on previews because of the `noindex` header. Exclude it, and report the SEO score both with and without it.
- Netlify injects a small feedback toolbar into previews, which costs a little performance. Mention it if the difference is small.
- Scores vary between runs. If a result is borderline or surprising, run that target again before drawing conclusions.

## 5. Report

Lead with the verdict: **ready to merge** or **fix first**. Then:

1. A table of scores and metrics, preview against live, for mobile and desktop.
2. Anything broken: failed images or requests, missing headers, pages without text, console errors. Name the page and, if you can tell, the cause and file.
3. Any regression against live of more than about 5 points or 0.05 CLS, with the Lighthouse audit that explains it.
4. The preview URL, so the user can look for themselves.

Post the report as a PR comment (`gh pr comment <PR> --body-file -`) only when the user asks for it.
