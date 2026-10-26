# laurenloveshorses.com/ux

Portfolio source. Astro builds it into `../ux/`, which GitHub Pages serves at `/ux`.

## Edit

- Case studies: `src/content/work/*.md`. The number prefix sets the order; the rest is the URL.
  Frontmatter `era: earlier` and `place:` put a piece in the "Earlier" list.
- About: `src/content/pages/about.md`
- Home: `src/pages/index.astro`
- Diagrams: `public/figures/*.svg`
- Placeholders are `<mark class="todo">NEEDS LAUREN: ...</mark>`. Find them with `grep -rn "NEEDS LAUREN" src`.

## Build

```
npm install
npm run dev      # preview at localhost:4321/ux/
npm run build    # writes ../ux, commit that folder
```
