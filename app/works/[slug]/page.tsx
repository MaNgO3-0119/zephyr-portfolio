import Container from "@/components/Container";
import VideoEmbed from "@/components/VideoEmbed";
import AudioPlayer from "@/components/AudioPlayer";
import ScorePreview from "@/components/ScorePreview";
import { getProject, getAllProjects } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllProjects().map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getProject(params.slug);
  return { title: p ? `${p.title} · 作品` : "作品" };
}

export default function ProjectPage({ params }: Props) {
  const p = getProject(params.slug);
  if (!p) return <Container className="my-10">未找到该作品。</Container>;

  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">{p.title}</h1>
      <p className="text-sm text-zinc-300 mt-1">{p.year} · {p.category.toUpperCase()}</p>

      {p.video ? <div className="mt-4"><VideoEmbed type={p.video.type} id={p.video.id} /></div> : null}

      {p.logline ? <p className="mt-4 text-lg text-zinc-200">{p.logline}</p> : null}

      {p.tracks?.length ? (
        <section className="mt-6">
          <h3 className="text-xl font-semibold">曲目</h3>
          <AudioPlayer tracks={p.tracks} />
        </section>
      ) : null}

      <section className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          {p.notes?.length ? (
            <div>
              <h3 className="text-xl font-semibold">技术要点</h3>
              <ul className="list-disc pl-5 mt-2 text-zinc-300">
                {p.notes.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          ) : null}

          {p.awards?.length ? (
            <div className="mt-6">
              <h3 className="text-xl font-semibold">获奖 / 媒体引用</h3>
              <ul className="list-disc pl-5 mt-2 text-zinc-300">
                {p.awards.map((n, i) => <li key={i}>{n}</li>)}
              </ul>
            </div>
          ) : null}
        </div>

        <div>
          <h3 className="text-xl font-semibold">乐谱预览</h3>
          <ScorePreview pdf={p.scorePdf} />
        </div>
      </section>
    </Container>
  );
}
