import Fuse from "fuse.js";
import { getAllPosts, getAllProjects, getAllCourses } from "./data";

export type SearchDoc = {
  type: "post" | "project" | "course";
  title: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
};

let memoFuse: Fuse<SearchDoc> | null = null;

export function buildIndex(): Fuse<SearchDoc> {
  if (memoFuse) return memoFuse;

  // 关键修复点：为 type 加上 `as const`，让它是字面量类型而不是 string
  const posts = getAllPosts().map((p) => ({
    type: "post" as const,
    title: p.title,
    slug: `/blog/${p.slug}`,
    excerpt: p.excerpt,
    tags: p.tags,
  }));

  const projects = getAllProjects().map((p) => ({
    type: "project" as const,
    title: p.title,
    slug: `/works/${p.slug}`,
    excerpt: p.logline,
    tags: p.tags,
  }));

  const courses = getAllCourses().map((c) => ({
    type: "course" as const,
    title: c.title,
    slug: `/courses#${c.slug}`,
    excerpt: c.summary,
    tags: c.tags,
  }));

  // 关键修复点：明确声明 list 的类型，便于 Fuse 推断
  const list: SearchDoc[] = [...posts, ...projects, ...courses];

  memoFuse = new Fuse(list, {
    includeScore: true,
    threshold: 0.33,
    minMatchCharLength: 2,
    keys: ["title", "excerpt", "tags"],
  });
  return memoFuse;
}

export function queryIndex(q: string) {
  const fuse = buildIndex();
  return fuse.search(q).map((r) => r.item);
}
