import type { RenderedContent } from 'astro:content';

export type BlogPostData = {
  body: string;
  title: string;
  slug: string;
  published: Date;
  description: string;
  tags: string[];
  draft?: boolean;
  cover?: string;
  category?: string;
  comment?: boolean;
};

export type BlogPost = {
  id: string;
  rendered: RenderedContent;
  body: string;
  data: BlogPostData;
};
