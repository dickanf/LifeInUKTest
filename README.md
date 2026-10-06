# Life in the UK Test — Study Guide

A static study guide website covering all questions and correct answers from **Exams 1–17** on [lifeintheuktestweb.co.uk](https://lifeintheuktestweb.co.uk/exams-1-17/).

## Live Site

Once published to GitHub Pages, access at:
```
https://<your-username>.github.io/<repo-name>/
```

## Features

- **UK Four Regions tab** — Questions grouped by England, Scotland, Wales, and Northern Ireland in searchable tables
- **Historical Timeline tab** — All historical facts ordered chronologically from Prehistoric to Modern, with era filters
- Search/filter on both tabs
- No dependencies — pure HTML + JavaScript, works offline

## Files

| File | Purpose |
|---|---|
| `index.html` | Main page — layout, styles, and logic |
| `data.js` | All Q&A data (regions + timeline) — edit here to update content |
| `README.md` | This file |

## How to publish to GitHub Pages

1. Create a new GitHub repository (e.g. `lifeintheuktestguide`)
2. Push this folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Life in the UK study guide"
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. Go to **Settings → Pages → Source → Deploy from branch → main / (root)**
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`

## Data source

All Q&As scraped from:
- https://lifeintheuktestweb.co.uk/exams-1-17/
- Exams 1–9: `/british-citizenship-test-N/`
- Exam 10: `/british-naturalization-test-10/`
- Exam 11: `/audio-british-citizenship-test-11/`
- Exam 12: `/british-citizenship-test-practice-questions-12/`
- Exams 13–15: `/british-citizenship-test-N/`
- Exam 16: `/life-in-the-uk-exam-16/`
- Exam 17: `/exam-17/`
