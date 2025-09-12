# Zephyr Portfolio Starter

一个为影视 / 游戏配乐人定制的 Next.js + Tailwind 个人网站模板。
**包含：** 乐谱预览、课程售卖（Gumroad 链接）、站内搜索（Fuse.js）、EPK（口令访问）、Link-in-bio、Newsletter、Calendly 预约、RSS、Sitemap、结构化数据与深色模式。

## 快速开始

```bash
# 建议 Node.js 18+，使用你熟悉的包管理器
pnpm i   # or: npm i / yarn
pnpm dev # or: npm run dev
```

> 注意：使用了 `@tailwindcss/typography` 插件，请先安装：  
> `pnpm add -D @tailwindcss/typography`

将 `.env.local.example` 复制为 `.env.local`，按需填写：

- `NEXT_PUBLIC_SITE_URL`：站点地址，用于 OG 图和 sitemap。
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`：启用分析（可留空）。
- `NEXT_PUBLIC_CALENDLY_URL`：预约链接（可留空）。
- `NEXT_PUBLIC_SUBSTACK_URL`：Newsletter 嵌入地址（可留空）。
- `NEXT_PUBLIC_EPK_PASSWORD`：EPK 访问口令（可留空，留空则不加锁）。

## 内容替换路线图（必看）

- `/lib/seo.ts`：站点标题、描述、OG 图。
- `/lib/data.ts`：**作品、课程、博客数据源**（上线前请替换）。
- `/public/images/*`：封面与海报替换为真实素材。
- `app/works/[slug]/page.tsx`：每个项目的乐谱 PDF 路径（scorePdf）。
- `app/about/page.tsx`：自我介绍、履历、设备清单。
- `app/contact/page.tsx`：邮箱与社交方式。
- `components/SocialLinks.tsx`：社交入口与顺序。
- `app/page.tsx` 的 Hero 文案与 CTA。

## 功能说明

- **乐谱预览**：`<ScorePreview pdf="/scores/xxx.pdf" />`，目前使用浏览器原生 PDF 渲染（更稳更轻）。
- **课程售卖**：在 `lib/data.ts` 的 `courses` 中填 `buyUrl`（Gumroad、Lemon Squeezy 均可）。
- **站内搜索**：`/search` 基于 `Fuse.js`，索引来源为 `lib/data.ts` 的项目/课程/文章。
- **EPK**：`/epk` 简单口令访问（仅轻量防护，勿放敏感素材）。
- **Link-in-bio**：`/bio` 一页式社交聚合。
- **SEO**：`app/sitemap.ts`、`app/robots.ts`、`app/rss/route.ts` 与 `lib/seo.ts`。

## 设计要点

- 默认深色电影感底色，品牌强调色 `#00D1B2`（可在 `tailwind.config.ts` 修改）。
- 组件尽量原生、无多余依赖，加载快且易替换。

## 许可

你可自由修改并商用本模板；无署名要求。建议在作品页保留对原作者（你自己）的署名与版权信息。
