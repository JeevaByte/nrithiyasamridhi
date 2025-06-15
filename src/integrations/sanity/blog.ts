
import groq from 'groq';
import { sanityClient } from './client';

export type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt?: string;
};

export async function fetchLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  const data = await sanityClient.fetch(
    groq`*[_type == "blogPost"] | order(publishedAt desc)[0...$limit]{
      _id,
      title,
      slug,
      publishedAt,
      excerpt
    }`,
    { limit }
  );
  return data;
}
