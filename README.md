# 香草白牡丹 [点击跳转Ta的github，绝对不是跳转到博客](https://tohsaka-rin.blog)

一个基于 [cosZone/astro-koharu](https://github.com/cosZone/astro-koharu) 修改的个人博客。页面结构、文章系统、搜索、主题切换以及不少交互来自原主题；本站在此基础上调整了内容、布局、配色和入口页。

astro-koharu 是 cosZone 开源的 Astro 博客主题。它的设计受到 Hexo 主题 [Shoka](https://github.com/amehime/hexo-theme-shoka) 启发。这份 README 沿用原主题介绍功能、使用方式与鸣谢来源的写法，同时记录本站目前实际采用的内容。感谢原作者和相关项目的作者。

## 页面与动效

进入 `/` 时先显示独立的欢迎页，点击「香草白牡丹能飞」进入 `/blog`。博客主页保留头像侧栏、文章列表、精选分类、搜索，以及浅色和深色主题。

本站目前使用中文界面。原主题的其他语言配置保留在代码中，但没有启用对应页面。

## 现在能做什么

| 场景 | 本站当前状态 |
| --- | --- |
| 阅读文章 | 文章列表、详情页、归档、分类、标签、站内搜索和 RSS 订阅可用。 |
| 整理内容 | 已配置若干个分类，以及一个系列。 |
| 查看友链与关于 | 两个入口保留。|
| 播放音乐 | 头像栏的音乐按钮可切换两首网易云音乐外链播放器或关闭播放器；播放需在外链播放器中操作。|
| 调整阅读体验 | 保留主题切换、文章目录、图片显示效果与页面动效；具体呈现由当前配置控制。 |

评论等暂未启用；原主题对应的可选功能不代表已在本站上线

## 写作与管理

文章放在 `src/content/blog/`。每篇文章是 Markdown 文件，开头的 YAML 信息用于确定标题、日期、网址、分类、标签和封面。

站点信息、分类、首页精选分类、系列、导航与友链主要在 `config/site.yaml` 中管理。这里的配置属于本站定制；原主题的完整技术说明可在 [astro-koharu 项目](https://github.com/cosZone/astro-koharu)查阅。

## 本地启动

项目使用 Astro、React、TypeScript 与 Tailwind CSS。所需 Node.js 版本为 `>=22.20.0`，包管理器版本见 `package.json`。

```bash
pnpm install
pnpm dev
```

开发服务器默认在 `http://localhost:4321`。修改 `config/site.yaml` 后，需要重启开发服务器或重新构建，才能看到新配置。

## 构建与部署

```bash
pnpm build
pnpm preview
```

构建生成的静态网页位于 `dist/`，可部署到 GitHub Pages、Vercel、Netlify 等任意静态托管服务。

## 配置与文档

| 内容 | 位置 |
| --- | --- |
| 站点资料、页面入口、分类、友链和功能开关 | `config/site.yaml` |
| 文章 | `src/content/blog/` |
| 图片、图标、字体和音乐 | `public/` |
| 页面与组件 | `src/pages/`、`src/components/` |
| 原主题的架构与功能文档 | `docs/`、`GETTING-STARTED.md` |

原主题文档可能仍会讲到本站已经停用的功能；判断本站是否启用某项功能，请以当前代码和配置为准。

## 鸣谢

首先感谢 [cosZone/astro-koharu](https://github.com/cosZone/astro-koharu) 的作者与贡献者公开主题并持续完善它。本站的代码基础来自他们的工作。

astro-koharu 的原版 README 还将以下项目列为开发时的灵感与参考。这里保留这份来源脉络，感谢这些项目的作者：

- [mx-space](https://github.com/mx-space)
- [Hexo 主题 Shoka](https://github.com/amehime/hexo-theme-shoka)
- [waterwater.moe](https://github.com/lawvs/lawvs.github.io)
- [yfi.moe](https://github.com/yy4382/yfi.moe)
- [4ark.me](https://github.com/gd4Ark/gd4Ark.github.io)
- [纸鹿摸鱼处](https://blog.zhilu.site/)

原主题 README 也注明使用了[寒蝉全圆体](https://chinese-font.netlify.app/zh-cn/fonts/hcqyt/ChillRoundFRegular)；本站保留了相应字体资源。

## 许可证

项目保留原主题随附的 [GNU Affero General Public License version 3 (AGPL-3.0)](./LICENSE) 文本。保留许可证与原作者署名，是说明代码来源和使用条件；站内文章、图片、音乐的权利归属应分别核对。
