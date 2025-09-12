export default function NewsletterEmbed() {
  const url = process.env.NEXT_PUBLIC_SUBSTACK_URL;
  if (!url) return null;
  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
      <iframe src={url} className="w-full h-[320px] rounded-md border border-white/10"
        title="Newsletter subscription" />
    </section>
  );
}
