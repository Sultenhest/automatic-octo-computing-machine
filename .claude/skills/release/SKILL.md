---
name: release
description: Cut a release of hundefotografi.dk. Bumps the version in package.json and package-lock.json, commits with conventional commits, tags, pushes develop, creates the GitHub release and opens (or updates) the PR from develop to main. Use when the user asks to release, bump the version, tag, or ship to main.
argument-hint: "[patch|minor|major|x.y.z]"
disable-model-invocation: true
---

# Release hundefotografi.dk

The site deploys to Netlify when `main` changes. All work happens on `develop`; a release is a version bump on `develop`, a tag, a GitHub release, and a PR from `develop` to `main`. **Never merge to `main` yourself**: merging deploys the live site, and that's the user's call.

Requested bump: `$ARGUMENTS` (empty means you propose one).

## 1. Preflight

Run these and stop to tell the user if any fail:

- `git branch --show-current` must be `develop`.
- `gh auth status` must show a logged-in account. If not, start `gh auth login --hostname github.com --git-protocol ssh --web` in a terminal tab for the user to complete.
- `git fetch origin` and make sure `develop` isn't behind `origin/develop`.

If `git status` shows uncommitted changes, commit them first as **separate conventional commits grouped by concern** (`feat`, `fix`, `fix(a11y)`, `fix(seo)`, `perf`, `build(docker)`, `docs`, ...). Each commit needs a body that explains what changed and why. If it's unclear whether a change belongs in the release, ask.

## 2. Verify the build

Use the dev container (start it with `make up` in the background if it isn't running):

- Lint: `docker compose exec -T hundefotografi npx eslint --ext .js,.vue components layouts pages plugins nuxt.config.js`. Only the known `vue/no-v-html` and `no-console` warnings are acceptable.
- Static build in a separate container (each container has its own `.nuxt`, so this is safe while the dev server runs):
  `docker compose run --rm --no-deps hundefotografi sh -c 'npx nuxt generate 2>&1 | grep -E "Generated route|static image|ERROR|FATAL"'`. Every page in `static/sitemap.xml` must show as a generated route, with no `ERROR` or `FATAL`. Delete `dist/` afterwards.

## 3. Choose the version

Find the last tag with `git describe --tags --abbrev=0` and list commits since it with `git log --oneline <tag>..HEAD`.

- If `$ARGUMENTS` is `patch`, `minor`, `major` or an exact `x.y.z`, use it.
- Otherwise propose a bump: only `fix`/`perf`/`docs`/`build`/`chore` → patch; any `feat` → minor; a redesign or anything breaking → major. State the commits behind the choice, then confirm it with the user before going on.

## 4. Bump, commit, tag

Node isn't installed on the host, so edit the files with Python. Change only the project's own version: the top-level `"version"` in `package.json`, and the top-level `"version"` plus `packages[""].version` in `package-lock.json` (the first two `"version"` occurrences). Then assert that all three now hold the new version. Never touch dependency versions.

```bash
git add package.json package-lock.json
git commit -m "chore(release): X.Y.Z" -m "<one or two sentences on what this release contains>"
git tag -a vX.Y.Z -m "vX.Y.Z: <short summary>"
```

Follow the repo's commit attribution rules for the trailer.

## 5. Push and publish

```bash
git push origin develop
git push origin vX.Y.Z
```

Create the GitHub release with `gh release create vX.Y.Z --title "vX.Y.Z" --notes-file -`. Write the notes for a non-developer site owner:

- Group the changes under short headings (Design, Content and SEO, Fixes, Development setup). Use one plain-language line per change, saying what visitors or the owner will notice.
- If earlier tags were never released on GitHub, add a short "Also in this version" section covering them.
- End with `**Full changelog:** https://github.com/Sultenhest/automatic-octo-computing-machine/compare/<previous tag>...vX.Y.Z`.

## 6. Pull request to main

Check for an open PR with `gh pr list --base main --head develop --state open`.

- **None open:** `gh pr create --base main --head develop --title "Release X.Y.Z: <summary>" --body-file -`. The body should say that merging deploys to hundefotografi.dk, summarize the changes grouped like the release notes, list anything to check before merging (such as Contentful content that needs editing), and link the release.
- **One open:** update its title and body with `gh pr edit` to cover the new release.

Then follow the session's PR rules (bind the PR, read its CI status).

## 7. Review and report

Run `/code-review` on the PR. Report back with:

- the version and the tag
- links to the release and the PR
- the review's headline findings
- a reminder that merging the PR into `main` deploys the live site
