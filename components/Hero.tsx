import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[68vh] min-h-[520px] flex items-center bg-[radial-gradient(60%_60%_at_30%_20%,rgba(0,209,178,0.20),rgba(0,0,0,0))]">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            影视 / 游戏配乐作曲 <span className="text-brand">Zephyr</span>
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Cinematic orchestral & hybrid scores. Narrative-first music that breathes with picture.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/works" className="px-5 py-3 bg-brand text-black rounded-md font-medium">观看精选 Showreel</Link>
            <Link href="/contact" className="px-5 py-3 border border-white/20 rounded-md hover:bg-white/5">洽谈合作</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
