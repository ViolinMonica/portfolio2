# Portfolio template

Open `index.html` in a browser. That's the whole setup — no build step, no dependencies.

## Where to edit

Everything you need to change in `index.html` is marked with a comment:

```html
<!-- EDIT ME: ... -->
```

Work top to bottom:

1. **`<title>` and `<meta description>`** — what shows up in a search result.
2. **Nav** — your name in `.nav__mark`, then the two `href="#"` on the LinkedIn
   and GitHub icons.
3. **Home** — location line, the big headline (put the word you want emphasised
   inside `<em>`), the blurb, and the CV link.
4. **About** — three paragraphs plus the `<dl>` facts list. Delete the
   `<figure class="about__portrait">` block if you'd rather not have a photo.
5. **Skills** — four groups. Delete or duplicate a whole
   `<div class="skills__group">` to change the count; the grid re-flows.
6. **Experience** — duplicate one `<li class="job">` per role, newest first.
   The `job__tags` list is optional.
7. **Project** — duplicate one `<article class="work">` per project and keep the
   `work__no` numbers in order. Each card is **text on the left, screenshot on
   the right**:
   - Drop the screenshot in `assets/projects/` and point the card's
     `<img src="assets/projects/<name>.jpg">` at it. Until a file exists, the
     card shows a neutral "Screenshot" placeholder — the layout never breaks.
     Images are cropped to a 16:10 box, so any size works (~1200x750 is ideal).
   - To make a card **expandable** with technical detail (like the CTF one),
     add a `<details class="work__more">` block just before `</article>`. Copy
     the block from project 03 and add one `<div class="work__case">` per item.
     It is native HTML - no JavaScript needed.
8. **Contact** — your email appears twice (link text *and* the `mailto:`).

## Assets

Drop files in `assets/`:

- `portrait.jpg` — the About photo (any aspect ratio; it's cropped to 4:5)
- `cv.pdf` — linked from the Home section
- `favicon.ico` or `favicon.png` — then add to `<head>`:
  `<link rel="icon" href="assets/favicon.png">`

## Restyling

`css/style.css` starts with a `:root` block. The useful knobs:

- `--accent` — one colour drives every highlight. Change just this to re-skin.
- `--paper` / `--ink` — background and text.
- `--display` / `--body` / `--mono` — the three typefaces. If you swap one,
  update the Google Fonts `<link>` in `index.html` too.

Dark mode follows the visitor's system setting and is defined in the
`@media (prefers-color-scheme: dark)` block right below `:root`.

## Publishing

Any static host works. Fastest is GitHub Pages:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<you>/<you>.github.io.git
git push -u origin main
```

Then Settings → Pages → Deploy from branch → `main` / root.
