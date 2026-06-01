# 个人作品集 + 博客网站 PRD

## 1. 产品概述

一个现代简约风格的个人作品集和博客网站，用于展示开发者的项目作品和技术博客文章。采用 SSG 模式构建，追求极致的加载性能和 SEO 友好性。

## 2. 核心功能

### 2.1 页面结构

| 页面 | 路由 | 核心模块 |
|------|------|----------|
| 首页 | `/` | Hero区域、精选作品预览(3个)、最新博客(3篇) |
| 作品集 | `/work` | 项目网格、卡片展示(封面/标题/简介/tags) |
| 项目详情 | `/work/[slug]` | 标题、描述、tech stack、截图区、链接、MDX正文 |
| 博客 | `/blog` | 文章列表、分页/tag筛选 |
| 文章详情 | `/blog/[slug]` | 完整文章、代码高亮、目录锚点 |
| 关于 | `/about` | 自我介绍、skill tags、时间线、resume下载 |

### 2.2 全局组件

- **导航栏**：固定顶部，包含 Logo + 导航链接 + 移动端汉堡菜单
- **页脚**：邮箱、GitHub、LinkedIn 社交链接

## 3. 技术选型

- **框架**：Astro 5 (SSG 模式)
- **样式**：Tailwind CSS 4
- **内容管理**：Content Collections (projects / blog)
- **内容格式**：Markdown / MDX
- **代码高亮**：Shiki (内置)
- **图标**：Lucide React

## 4. 设计规范

### 4.1 配色方案
- 背景色：`#0a0a0f` (深黑)
- 主色调：`#00d9ff` (青色) / `#6366f1` (靛蓝)
- 文字色：`#f4f4f5` (浅灰白)
- 次要文字：`#71717a` (中灰)
- 卡片背景：`#18181b` (深灰)
- 边框色：`#27272a` (暗灰)

### 4.2 字体
- 系统字体栈 + Geist (可选 CDN)
- 标题：Geist / system-ui / sans-serif
- 正文：system-ui / -apple-system / sans-serif

### 4.3 响应式断点
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### 4.4 动画
- 页面过渡：fade-in 300ms ease-out
- 卡片悬停：translateY(-4px) + shadow增强
- 按钮悬停：scale(1.02) + 背景色变化

## 5. 内容数据结构

### 5.1 Projects Collection
```typescript
{
  title: string;
  description: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  githubUrl?: string;
  liveUrl?: string;
  publishedAt: Date;
  featured: boolean;
}
```

### 5.2 Blog Collection
```typescript
{
  title: string;
  description: string;
  publishDate: Date;
  tags: string[];
  author: string;
  draft: boolean;
}
```
