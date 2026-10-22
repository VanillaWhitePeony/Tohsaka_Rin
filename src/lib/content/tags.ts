/**
 * Tag-related utility functions
 */

import { categoryTree } from '@lib/config/site';
import type { BlogPost } from 'types/blog';
import { encodeSlug } from '../url';

/**
 * Normalize a tag to lowercase for case-insensitive comparison
 */
export const normalizeTag = (tag: string) => tag.toLowerCase();

/**
 * Convert tag to URL-safe slug
 * Replaces `/` with `-` for filesystem compatibility
 */
export const tagToSlug = (tag: string) => encodeSlug(normalizeTag(tag).replace(/\//g, '-'));

/**
 * Build tag URL path, eg. C# -> /tags/c%23
 * @param tag Tag name
 * @returns URL path like "/tags/c%23"
 */
export const buildTagPath = (tag: string) => `/tags/${tagToSlug(tag)}`;

/** WeakMap cache: reuse tag counts when the same posts array reference is passed */
const tagsCache = new WeakMap<BlogPost[], Record<string, number>>();

const configuredTags = categoryTree.flatMap((category) => category.children?.map((child) => child.name) ?? []);

export const getTagDisplayName = (tag: string) =>
  configuredTags.find((name) => normalizeTag(name) === normalizeTag(tag)) ?? tag;

/**
 * Get all tags with their counts (case-insensitive)
 */
export const getAllTags = (posts: BlogPost[]) => {
  let cached = tagsCache.get(posts);
  if (cached) return cached;

  const initialTags = Object.fromEntries(configuredTags.map((name) => [normalizeTag(name), 0]));
  cached = posts.reduce<Record<string, number>>((acc, post) => {
    const postTags = post.data.tags || [];
    postTags.forEach((tag: string) => {
      const normalized = normalizeTag(tag);
      if (!acc[normalized]) {
        acc[normalized] = 0;
      }
      acc[normalized]++;
    });
    return acc;
  }, initialTags);

  tagsCache.set(posts, cached);
  return cached;
};
