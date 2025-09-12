import Container from "@/components/Container";
import PasswordGate from "@/components/PasswordGate";
import Link from "next/link";

export default function EPKPage() {
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">EPK（电子新闻包）</h1>
      <PasswordGate>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          <section className="rounded-lg border border-white/10 p-4">
            <h3 className="text-xl font-semibold">下载</h3>
            <p className="text-sm text-zinc-300 mt-1">简介、头像、精选曲目、Logo、剧照等。</p>
            <div className="mt-3">
              <Link className="px-4 py-2 bg-brand text-black rounded-md" href="/epk.zip">一键下载 ZIP</Link>
            </div>
          </section>
          <section className="rounded-lg border border-white/10 p-4">
            <h3 className="text-xl font-semibold">在线预览</h3>
            <ul className="list-disc pl-5 text-zinc-300">
              <li>个人简介（中/英）</li>
              <li>精选曲目与视频链接</li>
              <li>头像与剧照</li>
              <li>Logo 与品牌规范</li>
            </ul>
          </section>
        </div>
      </PasswordGate>
    </Container>
  );
}
