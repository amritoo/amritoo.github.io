# CLAUDE.md

Personal academic website of Amrito Tipu (published as Amrita Das Tipu), built on the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll template and deployed by GitHub Pages from `master` at https://amritoo.github.io.

## Build and check

```sh
bundle exec jekyll serve -l -H localhost   # local preview; restart after editing _config.yml
bundle exec jekyll build                   # one-off build
```

After content changes, build and confirm there are no Liquid errors or broken internal links.

## Where content lives

- `_config.yml` – site title, sidebar author profile (name, bio, location, employer, links), timezone, collections, defaults.
- `_data/navigation.yml` – header menu. "CV" links to an external Google Drive PDF; `/cv/` redirects there.
- `_pages/about.md` – homepage (bio, research interests, latest ~5 news items).
- `_pages/news.md` – full news list, reverse chronological. Add new items to **both** this file and the homepage.
- `_pages/experience.md` – professional, other experience, and education (HTML flex headers + Markdown).
- `_publications/` – one file per paper; `category` must match a key in `publication_category` in `_config.yml` (`conferences`, `chapters`, `manuscripts`, `books`, `inpress`). BibTeX in `files/bibtex/`, slides in `files/slide/`.
- `_teaching/` – one file per course; `date` controls ordering.
- `_project/` – software projects shown on `/project/`.

## Conventions

- Tone: formal, academic, first person. Use past tense for roles that have ended.
- Name: display name is "Amrito Tipu"; the sidebar shows "Amrita Das (Amrito) Tipu". Citations and BibTeX must keep the published form ("Amrita Das Tipu" / "A. D. Tipu").
- Current status: PhD candidate, School of IT, Deakin University, Melbourne Burwood Campus (since 2025-09-18; confirmation completed 2026-06-18). On study leave from the DIU Lecturer role since 2025-07-20. Keep dates consistent across about, news, experience, and `_config.yml`.
- Dates in news use `YYYY-MM-DD`. Use relative links (`/publications/`) for internal pages.
- Do not change published abstracts or citation details beyond fixing obvious formatting errors.

## Template demo content

Sample posts, talks, portfolio items, and several demo pages (markdown guide, terms, archives, reading list) are intentionally kept in the repo but hidden from `sitemap.xml` and `/sitemap/` via `sitemap: false` defaults in `_config.yml`. Do not delete them without asking the owner.
