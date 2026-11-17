carodew.github.io
=================
Portfolio site, created in [Jekyll](http://jekyllrb.com).

## Notes to self:

### Running it locally

```
bundle exec jekyll serve --config _config.yml,_config-local.yml --drafts --livereload
```

`--config` merges left to right
`_config-local.yml` overlays the site URL and switches on the proprietary collection.

`bundle exec`: Gemfile pins Jekyll 3.9.5 and a set of dependency
versions that work with the system Ruby (2.6.10).

`--drafts` includes `_drafts/`. 

`--livereload` refreshes the browser on save.

### To add a case study

Create a post in `_posts/projects/ux/` named `YYYY-MM-DD-slug.md`. Front matter:

```yaml
layout: project
permalink: /lowercase-slug/
page-title: "Shown in the browser tab"
h1-and-link-title: "Page heading, and the link text on the homepage"
order: 7
blurb: "The sentence after the link on the homepage."
img-path: '../img/'
```

- **`order` sorts descending** Newer projects get higher numbers 
- **Permalinks are lowercase.** GitHub Pages is case-sensitive

### Where things live

| folder | what | in git? |
|---|---|---|
| `_posts/projects/ux/` | published case studies | yes |
| `_drafts/` | work in progress; needs `--drafts` to appear | yes |
| `_proprietary/` | proprietary work, local presentation only | **no** |
| `img/proprietary/` | images for the above | **no** |
| `_removed/` | retired files kept to hand | **no** |

### Proprietary work

For presenting in person from the local server. These are gitignored.

`_proprietary/`: add case studies here. Check ordering on homepage.
`img/proprietary/`: images go here.

### Images

- Project page images – most are 741 × whatever height, usually 402. Export at 2x.
