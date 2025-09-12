import Container from "@/components/Container";
import Link from "next/link";
import { getAllPosts } from "@/lib/data";

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">博客</h1>
      <div className="mt-6 space-y-6">
        {posts.map(p => (
          <article key={p.slug} className="border-b border-white/10 pb-6">
            <h3 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`} className="hover:text-brand">{p.title}</Link>
            </h3>
            <p className="text-sm text-zinc-400">{new Date(p.date).toLocaleDateString()}</p>
            <p className="text-zinc-300 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
