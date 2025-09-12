export default function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;
  if (!url) return null;
  return (
    <section className="my-12">
      <h3 className="text-xl font-semibold mb-2">预约通话</h3>
      <iframe
        src={`${url}?hide_landing_page_details=1&hide_gdpr_banner=1`}
        className="w-full h-[720px] rounded-md border border-white/10"
        title="Calendly"
      />
    </section>
  );
}
