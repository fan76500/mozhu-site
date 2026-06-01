---
title: "Getting Started with Astro 5"
summary: "深入了解 Astro 5 的新特性和改进，学习如何使用 Content Collections 构建内容驱动的网站。"
date: 2024-06-15
tags: ["Astro", "Web Development", "SSG"]
draft: false
---

## 介绍

Astro 5 是最新版本的 Astro 框架，带来了许多令人兴奋的新特性和改进。在这篇文章中，我们将深入了解这些变化。

## Content Collections

Astro 5 增强了 Content Collections 功能，提供了更好的类型安全和开发体验。

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});
```

## 为什么选择 Astro？

1. **零 JavaScript 默认** - 页面默认不加载 JavaScript
2. ** islands 架构** - 只在需要交互的地方加载 JS
3. **Content Collections** - 类型安全的内容管理
4. **内置图片优化** - 自动优化图片性能

## 总结

Astro 5 是一个强大的静态站点生成框架，非常适合内容驱动的网站。
