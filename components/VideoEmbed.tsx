export default function VideoEmbed({ type, id }: { type: "youtube" | "bilibili"; id: string }) {
  if (!id) return null;
  return (
    <div className="aspect-video w-full overflow-hidden rounded-md border border-white/10">
      {type === "youtube" ? (
        <iframe className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`} title="YouTube video"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />
      ) : (
        <iframe className="w-full h-full"
          src={`https://player.bilibili.com/player.html?bvid=${id}&page=1&high_quality=1&danmaku=0`}
          title="Bilibili video" allow="autoplay; encrypted-media" />
      )}
    </div>
  );
}
