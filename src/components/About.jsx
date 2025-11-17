export default function About() {
  return (
    <section id="about" className="relative border-y-4 border-fuchsia-600/40 bg-[linear-gradient(#0a0012_1px,transparent_1px),linear-gradient(90deg,#0a0012_1px,transparent_1px)] bg-[size:32px_32px] py-20 text-fuchsia-100">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_30%,#8b5cf6_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#06b6d4_0%,transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="pixel-font text-3xl text-cyan-300 drop-shadow-[0_0_8px_#0ff]">ABOUT ME</h2>
        <div className="mt-6 rounded-lg border border-cyan-400/30 bg-black/60 p-4 shadow-[0_0_12px_#0ff]">
          <p className="pixel-font text-sm text-fuchsia-300">[MÓJ KRÓTKI OPIS OSOBY – np. 'Pixel sorcerer & world builder']</p>
          <p className="mt-4 text-sm leading-6 text-fuchsia-100/90">
            LOREM IPSUM PARAGRAPH - dłuższe bio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </p>
        </div>
      </div>
    </section>
  )
}
