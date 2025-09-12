"use client";

import Container from "@/components/Container";
import { queryIndex } from "@/lib/search";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SearchPage() {
  const params = useSearchParams();
  const q = params.get("q") || "";
  const results = useMemo(() => q ? queryIndex(q) : [], [q]);

  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">搜索</h1>
      <p className="text-sm text-zinc-300 mt-1">关键字：<span className="text-white">{q || "（空）"}</span></p>

      <div className="mt-6 space-y-4">
        {!q ? <p className="text-zinc-400">请输入搜索词。</p> : null}
        {q && !results.length ? <p className="text-zinc-400">没有找到结果。</p> : null}
        {results.map((r, i) => (
          <div key={i} className="border border-white/10 rounded-lg p-4">
            <div className="text-xs uppercase text-zinc-400">{r.type}</div>
            <Link href={r.slug} className="text-lg font-semibold hover:text-brand">{r.title}</Link>
            {r.excerpt ? <p className="text-sm text-zinc-300 mt-1">{r.excerpt}</p> : null}
          </div>
        ))}
      </div>
    </Container>
  );
}
