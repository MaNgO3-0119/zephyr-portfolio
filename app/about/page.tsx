import Container from "@/components/Container";
import SocialLinks from "@/components/SocialLinks";

export default function AboutPage() {
  return (
    <Container className="my-10 prose prose-invert container-prose">
      <h1>关于</h1>
      <p>我是珞三（Zephyr Luo），影视与游戏配乐作曲与制作人。我的方法论是“叙事优先、音色为证”，
        擅长奇幻与混合编制风格，也乐于在极简与电子之间做纵横切换。</p>

      <h2>履历亮点</h2>
      <ul>
        <li>为独立游戏与短片创作超过 20+ 首主题与配乐。</li>
        <li>管弦乐写作与混合音色设计的系统课程讲师。</li>
      </ul>

      <h2>设备清单（节选）</h2>
      <ul>
        <li>DAW：Logic / Cubase / Reaper</li>
        <li>主力音源：Kontakt, Spitfire, Orchestral Tools, U-he, Valhalla</li>
      </ul>

      <h2>媒体与社交</h2>
      <SocialLinks />
    </Container>
  );
}
