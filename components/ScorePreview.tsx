export default function ScorePreview({ pdf }: { pdf?: string }) {
  if (!pdf) return (
    <div className="rounded-md border border-white/10 p-4 text-sm text-zinc-400">
      暂无乐谱预览（上传 PDF 后在项目中填入 scorePdf 路径）。
    </div>
  );
  return (
    <div className="rounded-md overflow-hidden border border-white/10">
      <object data={pdf} type="application/pdf" className="w-full h-[600px]">
        <p className="p-4">无法预览 PDF，请<a className="underline" href={pdf} target="_blank" rel="noreferrer">点击下载</a>。</p>
      </object>
    </div>
  );
}
