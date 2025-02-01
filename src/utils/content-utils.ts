import type { BlogPostData } from '@/types/data';
import I18nKey from '@i18n/I18nKey';
import { i18n } from '@i18n/translation';
import { getCollection } from 'astro:content';

export async function getSortedPosts(): Promise<{ body: string; data: BlogPostData }[]> {
  const allBlogPosts = (await getCollection('posts')) as unknown as {
    body: string;
    data: BlogPostData;
  }[];
  const sortedBlogPosts = allBlogPosts.sort(
    (a: { data: BlogPostData }, b: { data: BlogPostData }) => {
      const dateA = new Date(a.data.published);
      const dateB = new Date(b.data.published);
      return dateA > dateB ? -1 : 1;
    }
  );
  return sortedBlogPosts;
}

export async function getCategories(): Promise<string[]> {
  const allBlogPosts = await getSortedPosts();
  const categories = [
    ...new Set(
      allBlogPosts.map((post) => post.data.category || (i18n(I18nKey.uncategorized) as string))
    ),
  ];
  return categories;
}

export async function getTags(): Promise<string[]> {
  const allBlogPosts = await getSortedPosts();
  const tags = [...new Set(allBlogPosts.map((post) => post.data.tags || []).flat())];
  return tags;
}

export async function getTimeArchives() {
  const allBlogPosts = await getSortedPosts();
  const yearMap = new Map<number, Map<number, { body: string; data: BlogPostData }[]>>();
  for (const post of allBlogPosts) {
    const year = post.data.published.getFullYear();
    const month = post.data.published.getMonth() + 1;
    let monthMap = yearMap.get(year);
    if (!monthMap) {
      monthMap = new Map();
      yearMap.set(year, monthMap);
    }
    let monthPosts = monthMap.get(month);
    if (!monthPosts) {
      monthPosts = [];
      monthMap.set(month, monthPosts);
    }
    monthPosts.push(post);
  }
  return Array.from(yearMap.entries())
    .map(([year, monthMap]) => ({
      year,
      months: Array.from(monthMap.entries())
        .map(([month, posts]) => ({
          month,
          posts,
        }))
        .sort((a, b) => b.month - a.month),
    }))
    .sort((a, b) => b.year - a.year);
}

export function countWords(text: string): { cjk: number; nonCjk: number; total: number } {
  const cjkRegex =
    /[\u4E00-\u9FFF\u3400-\u4DBF\u20000-\u2A6DF\u2A700-\u2B73F\u2B740-\u2B81F\u2B820-\u2CEAF\uF900-\uFAFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/g;
  const cjkCount = (text.match(cjkRegex) || []).length;
  const nonCjkText = text.replace(cjkRegex, '');
  const wordCount = nonCjkText
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
  return {
    cjk: cjkCount,
    nonCjk: wordCount,
    total: cjkCount + wordCount,
  };
}
