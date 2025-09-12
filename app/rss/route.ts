import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/data";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const posts = getAllPosts();
  const items = posts.map((p) => `
    <item>
      <title>${p.title}</title>
      <link>${site}/blog/${p.slug}</link>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt ?? ""}]]></description>
    </item>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Zephyr | Blog</title>
      <link>${site}</link>
      <description>Updates & process notes</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
