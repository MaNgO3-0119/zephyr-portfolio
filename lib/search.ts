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
  const posts = getAllPosts().map(p => ({ type: "post", title: p.title, slug: `/blog/${p.slug}`, excerpt: p.excerpt, tags: p.tags }));
  const projects = getAllProjects().map(p => ({ type: "project", title: p.title, slug: `/works/${p.slug}`, excerpt: p.logline, tags: p.tags }));
  const courses = getAllCourses().map(c => ({ type: "course", title: c.title, slug: `/courses#${c.slug}`, excerpt: c.summary, tags: c.tags }));

  const list = [...posts, ...projects, ...courses];
  memoFuse = new Fuse(list, {
    includeScore: true,
    threshold: 0.33,
    minMatchCharLength: 2,
    keys: ["title", "excerpt", "tags"]
  });
  return memoFuse;
}

export function queryIndex(q: string) {
  const fuse = buildIndex();
  return fuse.search(q).map(r => r.item);
}
