import { Suspense } from "react";
import Container from "@/components/Container";
import SearchContent from "./search-content";

export default function SearchPage() {
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">搜索</h1>
      {/* 用 Suspense 包裹 Client Component */}
      <Suspense fallback={<p className="text-zinc-400 mt-4">加载中...</p>}>
        <SearchContent />
      </Suspense>
    </Container>
  );
}
