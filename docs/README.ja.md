# astro-koharu

**Language:** [中文](../README.md) | [English](./README.en.md) | **日本語**

かわいい / アニメ風 / ピンクブルー配色のブログテーマ。ACG、フロントエンド、手帳系の個人サイトに最適で、優れたパフォーマンスを実現します。

> 名前は「小春日和（こはるびより）」に由来しています。晩秋から初冬にかけての、春のように暖かく晴れた日が続く時期のことです。

デザインは Hexo の [Shoka](https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/) テーマにインスピレーションを受け、モダンな技術スタックであなただけのブログを構築します。

[cosZone/astro-koharu](https://github.com/cosZone/astro-koharu) を基にした個人ブログのカスタマイズです。原テーマのライセンスと技術的な謝辞を保持し、原作者のプロフィールやサンプル記事は当サイトの内容として使用しません。

[クイックスタート](../GETTING-STARTED.md) · [上流テーマのガイド](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md)

> **ライセンス：AGPL-3.0。** 利用・改変・デプロイの前に [LICENSE](../LICENSE) を確認してください。

開発継続中

- **Astro** ベース、静的出力、高速ロード
- かわいい / アニメ風 / ピンクブルー配色、ACG・フロントエンド・手帳系サイトに最適
- マルチカテゴリー・マルチタグ対応、複雑な情報構造を強制しない
- パフォーマンスオーバーヘッドを最小限に
- Pagefind によるサーバーレス全文検索
- LQIP（低品質画像プレースホルダー）— 画像読み込み前にグラデーションプレースホルダーを表示

## できること

| 用途 | 機能とガイド |
| --- | --- |
| 表現豊かな本文を書く | GFM、コードハイライト、数式、Mermaid、Infographic、リンクカード。Shoka の注意書き、折りたたみ、タブ、文字装飾、ネタバレ隠し、ルビ、クイズ、音声・動画を個別に切り替え可能。[構文ガイド](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#markdown-增强)を参照 |
| 内容を整理する | 階層カテゴリ、タグ、アーカイブ、下書き、固定記事。[シリーズ](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#系列文章系统)には専用ページとホームのハイライトがあり、独立ページは `src/pages/` に追加 |
| 快適に読む | ライト・ダークテーマ、モバイルの章タイトルと目次、読書進捗と所要時間。Pagefind 検索、LQIP 画像プレースホルダー。`motion` は 3 段階の動きと桜の演出を設定でき、OS の動きを減らす設定に対応 |
| 多言語で公開する | 中国語・英語・日本語・韓国語の UI 辞書、記事翻訳、言語切り替え、hreflang、言語別 RSS。[i18n 設定](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md#多语言支持i18n)を参照 |
| 読者と交流する | Waline / Giscus / Remark42 / Twikoo コメント、[リンク集のグループ](./features/friend-link-groups.md)、お知らせ、Umami。BGM、クリスマス演出も設定可能 |
| コンテンツ用データを生成する | [Koharu CLI](./guides/koharu-cli.md)で新規作成・バックアップ・復元・更新・移行。LQIP、意味的類似度による関連記事、AI 要約も任意で生成 |
| ブログを拡張する | 記事全体・ブロック単位の AES-256-GCM 暗号化。任意の[ひとこと（Moments）](./features/moments.ja.md)で koharu-suite の公開チャンネルを取り込み、詳細・検索・ページ送り・RSS を提供 |

<!-- 新機能の紹介画像用：design/readme-visual-brief.md を参照。新しい画像はリポジトリに保存し、既存のスクリーンショットは維持。 -->

## 記事の作成と管理

インストール後、リポジトリのルートで最初の記事を作成します。

```bash
pnpm koharu new post
```

タイトル・カテゴリ・タグを入力すると `src/content/blog/` にファイルが作られます。Markdown ファイルを直接作成することもできます。

```markdown
---
title: はじめての記事
date: 2026-10-09
link: hello-koharu
tags: [日常]
---

覚えておきたいことを、今日から少しずつ。
```

`pnpm dev` を起動して `http://localhost:4321/post/hello-koharu` を開きます。

## ローカルで起動

**Node.js ≥ 22.20.0** と **pnpm 10.28.2** が必要です。要件は [package.json](../package.json) に従います。

```bash
pnpm install
pnpm dev
```

[config/site.yaml](../config/site.yaml) でサイト名・作者・ドメイン・アバター・ナビゲーションを変更し、サンプル記事を自分の記事に置き換えてください。設定変更後は開発サーバーの再起動または再ビルドが必要です。手順は[クイックスタート](../GETTING-STARTED.md)を参照してください。

## デプロイ

```bash
pnpm build
pnpm preview
```

| モード | デプロイ方法 | 必要なもの |
| --- | --- | --- |
| 静的ブログ（標準） | `dist/` を Vercel、Netlify、静的ファイルサーバーで公開。Docker は nginx を使用 | ブログ用バックエンドは不要 |
| ひとこと（任意） | Astro Node standalone。Docker は `pnpm docker:up:dynamic` を使用 | `moments.enabled: true`、公開 `KOHARU_SUITE_URL`、稼働中の koharu-suite サービス |

標準の Docker デプロイ：

```bash
cp .env.example .env
pnpm docker:up
```

## 設定とドキュメント

| 設定したいこと | 参照先 |
| --- | --- |
| サイト情報・ナビゲーション・コメント・音楽・動き・任意機能 | [サイト設定](../config/site.yaml)と[上流テーマのガイド](https://github.com/cosZone/astro-koharu/blob/main/src/content/blog/tools/astro-koharu-guide.md) |
| カテゴリ・シリーズ・落款の翻訳 | [コンテンツ翻訳](../config/i18n-content.yaml)。翻訳記事は `src/content/blog/<locale>/` に配置 |
| バックアップ・復元・更新・旧リンクの移行・データ生成 | [Koharu CLI ガイド](./guides/koharu-cli.md) |
| ひとことのチャンネル・動的デプロイ | [ひとことガイド](./features/moments.ja.md)と[デプロイガイド](./overview/11-deployment-adapters.md) |
| テーマ開発への参加 | [コントリビューションガイド](../CONTRIBUTING.md) |

設定・開発ガイドの多くは現在中国語です。ひとことには英語・日本語のガイドもあります。

## 利用前に知っておくこと

- **旧記事の移行**：旧 `slug` は `link` へ移行が必要です。更新プロセスの終了後、起動・ビルド前に `pnpm koharu migrate --dry-run` と `pnpm koharu migrate` を実行します。[移行手順](./guides/koharu-cli.md#历史内容迁移)を参照してください。
- **原文と暗号化**：記事操作を有効にすると frontmatter を含む Markdown 原文が公開されます。暗号化記事・暗号化ブロックを含む記事の原文は公開しません。AES-256-GCM のパスワードはビルド時の暗号化に使用し、クライアントへ配布せず、読者が入力します。
- **外部サービス**：コメント、音楽 API、Umami、リンク取得は各サービスに依存します。AI 要約と意味ベクトルは任意の生成処理です。

## 謝辞

使用フォント：[Chill Round](https://chinese-font.netlify.app/zh-cn/fonts/hcqyt/ChillRoundFRegular)

astro-koharu の開発にインスピレーションとリファレンスを提供してくれた以下のプロジェクトに感謝します：

- [mx-space](https://github.com/mx-space)
- [Hexo テーマ Shoka](https://shoka.lostyu.me/computer-science/note/theme-shoka-doc/)
- [waterwater.moe](https://github.com/lawvs/lawvs.github.io)
- [yfi.moe](https://github.com/yy4382/yfi.moe)
- [4ark.me](https://github.com/gd4Ark/gd4Ark.github.io)
- [Zhilu のブログ](https://blog.zhilu.site/)

## License

[GNU Affero General Public License version 3 (AGPL-3.0)](../LICENSE)
