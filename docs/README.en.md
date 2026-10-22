# astro-koharu

**Language:** [中文](../README.md) | **English** | [日本語](./README.ja.md)

A cute / anime-style / pink-blue themed blog, perfect for ACG, frontend dev, and journaling personal sites with excellent performance.

> The name is inspired by "Koharu-biyori" (こはるびより), which refers to the period from late autumn to early winter when there's a stretch of warm, spring-like sunny days — known as "Indian summer" in English.

The overall design is inspired by the Hexo [Shoka](https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/) theme, rebuilt with a modern tech stack for your personal blog.

A personal blog customization based on [cosZone/astro-koharu](https://github.com/cosZone/astro-koharu). The original theme license and technical credits are retained; the theme author’s profile and sample posts are not this site’s content.

[Getting started](../GETTING-STARTED.md) · [Upstream theme guide](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md)

> **License: AGPL-3.0.** Read [LICENSE](../LICENSE) before using, modifying, or deploying the theme.

Under active development

- Built on **Astro**, static output, fast loading
- Cute / anime-style / pink-blue color scheme, ideal for ACG, frontend, and journaling sites
- Multi-category and multi-tag support without forcing complex information architecture
- Minimal performance overhead
- Serverless full-site search powered by Pagefind
- LQIP (Low Quality Image Placeholders) — gradient placeholders shown before images load

## What you can do

| Use case | Features and guides |
| --- | --- |
| Write rich Markdown | GFM, syntax highlighting, math, Mermaid, Infographic, link cards; toggleable Shoka admonitions, collapsible blocks, tabs, text effects, spoilers, ruby, quizzes, and media; see the [syntax guide](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#markdown-增强) |
| Organize content | Nested categories, tags, archives, drafts, pinned posts; [featured series](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#系列文章系统) with dedicated pages and homepage highlights; custom pages under `src/pages/` |
| Read comfortably | Light/dark themes, mobile section header and TOC, reading progress and time; Pagefind search, LQIP image placeholders; three `motion` levels and sakura effects that respect reduced-motion preferences |
| Publish in multiple languages | Chinese, English, Japanese, and Korean UI dictionaries; content translations, language switcher, hreflang, and locale-specific RSS; see [i18n setup](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#多语言支持i18n) |
| Connect with readers | Waline / Giscus / Remark42 / Twikoo comments, [friend-link groups](./features/friend-link-groups.md), announcements, and Umami; optional BGM and Christmas effects |
| Generate content assets | [Koharu CLI](./guides/koharu-cli.md) for creation, backup, restore, updates, and migration; optional LQIP, semantic recommendations, and AI summaries |
| Extend your blog | AES-256-GCM encryption for posts or blocks; optional [Moments](./features/moments.en.md) from public koharu-suite channels, with detail pages, search, pagination, and RSS |

## Writing and managing posts

After installation, create your first post from the repository root:

```bash
pnpm koharu new post
```

Follow the prompts for a title, category, and tags. The file goes into `src/content/blog/`. You can also create a Markdown file directly:

```markdown
---
title: My first post
date: 2026-10-09
link: hello-koharu
tags: [Life]
---

A place to keep the things I want to remember.
```

With `pnpm dev` running, open `http://localhost:4321/post/hello-koharu`.

## Local setup

Run the following commands in this project directory.

Requires **Node.js ≥ 22.20.0** and **pnpm 10.28.2**; [package.json](../package.json) is the source of truth.

```bash
pnpm install
pnpm dev
```

Edit [config/site.yaml](../config/site.yaml) to set your site name, author, domain, avatar, and navigation, then add your own posts. Restart the dev server or rebuild after configuration changes. Follow [getting started](../GETTING-STARTED.md) for the steps.

## Deployment

```bash
pnpm build
pnpm preview
```

| Mode | Deployment | Requirements |
| --- | --- | --- |
| Static blog (default) | Publish `dist/` on Vercel, Netlify, or a static file server; Docker uses nginx | No blog backend |
| Moments (optional) | Astro Node standalone; Docker uses `pnpm docker:up:dynamic` | `moments.enabled: true`, a public `KOHARU_SUITE_URL`, and a running koharu-suite service |

Default Docker deployment:

```bash
cp .env.example .env
pnpm docker:up
```

## Configuration and documentation

| What to configure | Reference |
| --- | --- |
| Site details, navigation, comments, music, motion, and optional features | [Site configuration](../config/site.yaml) and [upstream theme guide](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md) |
| Translated category, series, and colophon labels | [Content translations](../config/i18n-content.yaml); translated posts go in `src/content/blog/<locale>/` |
| Backup, restore, updates, legacy link migration, and asset generation | [Koharu CLI guide](./guides/koharu-cli.md) |
| Moments channels and dynamic deployment | [Moments guide](./features/moments.en.md) and [deployment guide](./overview/11-deployment-adapters.md) |
| Contributing to the theme | [Contributing guide](../CONTRIBUTING.md) |

Most configuration and development guides are currently in Chinese; Moments also has English and Japanese guides.

## Before you start

- **Upgrading old content:** Legacy `slug` fields must migrate to `link`. After the update process exits, run `pnpm koharu migrate --dry-run` and `pnpm koharu migrate` before starting or building; see [migration details](./guides/koharu-cli.md#历史内容迁移).
- **Source and encryption:** When post actions are enabled, public Markdown includes frontmatter. Encrypted posts and posts with encrypted blocks do not expose source files. AES-256-GCM uses passwords at build time for encryption without shipping them to the client; readers enter passwords themselves.
- **External services:** Comments, music APIs, Umami, and link fetching depend on their respective services. AI summaries and semantic vectors are optional generation steps.

## Acknowledgements

Font used: [Chill Round](https://chinese-font.netlify.app/zh-cn/fonts/hcqyt/ChillRoundFRegular)

Thanks to the following projects for providing inspiration and reference for astro-koharu:

- [mx-space](https://github.com/mx-space)
- [Hexo Theme Shoka](https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/)
- [waterwater.moe](https://github.com/lawvs/lawvs.github.io)
- [yfi.moe](https://github.com/yy4382/yfi.moe)
- [4ark.me](https://github.com/gd4Ark/gd4Ark.github.io)
- [Zhilu's Blog](https://blog.zhilu.site/)

## License

[GNU Affero General Public License version 3 (AGPL-3.0)](../LICENSE)
