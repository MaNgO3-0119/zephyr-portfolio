import Container from "@/components/Container";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function ContactPage() {
  return (
    <Container className="my-10">
      <h1 className="text-3xl font-bold">联系</h1>
      <p className="text-sm text-zinc-300 mt-1">商务合作、配乐咨询或课程相关。</p>

      <section className="mt-6">
        <h3 className="text-xl font-semibold">邮箱</h3>
        <p className="text-zinc-300">contact@example.com</p>
      </section>

      <CalendlyEmbed />
    </Container>
  );
}
