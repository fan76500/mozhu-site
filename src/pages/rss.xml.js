import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sorted = posts.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  return rss({
    title: 'DevPortfolio Blog',
    description: '一个现代简约风格的个人作品集和博客网站',
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: `/blog/${post.slug}`,
      categories: post.data.tags,
    })),
    customData: `<language>zh-CN</language>
    <generator>Astro</generator>`,
    trailingSlash: false,
  });
}
