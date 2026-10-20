# Blog drafts

Files here are not deployed (Vite only publishes `public/`). Each needs Minh's review before going live.

## spring-hair-trends-2027.html

Replaces the live post at `/blog/spring-hair-trends`. Publish around February 2027.

1. Review the trends and copy; adjust anything that doesn't match what clients are asking for.
2. Set `dateModified`, `article:modified_time` and the "Updated" date to the real publish date.
3. Copy it over `public/blog/spring-hair-trends.html`.
4. Update the post's card on `public/blog/index.html` (title, excerpt, date) and its `<lastmod>` in `public/sitemap.xml`.

## fall-winter-hair-trends.html

New post at `/blog/fall-winter-hair-trends`.

1. Review the trends and copy.
2. Add a photo as `public/assets/img/blog/fall-winter-hair-trends.jpg` and `.webp` (1200x675), and update its `alt` text to describe it.
3. Set `datePublished`, `dateModified`, `article:published_time`, `article:modified_time` and the post date to the real publish date.
4. Move it to `public/blog/fall-winter-hair-trends.html`.
5. Add a card for it on `public/blog/index.html` (and its BlogPosting entry there), a `<url>` entry in `public/sitemap.xml`, and links from related posts' "Recent Posts" sidebars.
