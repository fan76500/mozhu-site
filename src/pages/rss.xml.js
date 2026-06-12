import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: '墨林的小屋',
    description: '墨林的个人博客 — 用 AI 搭建世界，分享技术与成长',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
    })),
    customData: `<language>zh-CN</language>
    <generator>Astro</generator>`,
    trailingSlash: false,
  });
}
