import Container from "@/components/Container";
import { getAllPosts } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getAllPosts().find(p => p.slug === params.slug);
  return { title: post ? `${post.title} · 博客` : "博客" };
}

export default function PostPage({ params }: Props) {
  const post = getAllPosts().find(p => p.slug === params.slug);
  if (!post) return <Container className="my-10">未找到文章。</Container>;

  return (
    <Container className="my-10 prose prose-invert container-prose">
      <h1>{post.title}</h1>
      <p className="text-sm text-zinc-400">{new Date(post.date).toLocaleDateString()}</p>
      <p>{post.excerpt}</p>
      <p className="text-zinc-400">（正文内容占位，稍后替换为你的文章）</p>
    </Container>
  );
}
