# Akhila Banoth — Portfolio

A static, single-page portfolio built with plain HTML/CSS/JS (no build step, no framework).

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  img/hero.jpg          # the only photo on the site — hero circular avatar
  img/favicon.svg
```

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `akhila-portfolio`).
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub: go to **Settings → Pages**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

To use a custom domain, add a `CNAME` file with your domain name at the project root and configure DNS per GitHub's docs.

## Editing content

All text lives directly in `index.html` (no CMS/data file) — update the relevant section by hand. Colors, type and spacing are defined as CSS custom properties at the top of `assets/css/style.css`. The site is a committed dark theme (no light variant) — it renders the same regardless of the visitor's system preference.
