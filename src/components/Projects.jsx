const projects = [
  { id: 1, title: 'NEON RUNNER', desc: "[OPIS PROJEKTU - CO ZROBIŁEM, np. 'Core Gameplay Loop & Level Design']" },
  { id: 2, title: 'PIXEL DUNGEON', desc: "[OPIS PROJEKTU - CO ZROBIŁEM, np. 'Core Gameplay Loop & Level Design']" },
  { id: 3, title: 'CYBER CITY', desc: "[OPIS PROJEKTU - CO ZROBIŁEM, np. 'Core Gameplay Loop & Level Design']" },
  { id: 4, title: 'GLITCH ARENA', desc: "[OPIS PROJEKTU - CO ZROBIŁEM, np. 'Core Gameplay Loop & Level Design']" },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#06010a] py-20">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,#06b6d4_0%,transparent_40%),radial-gradient(circle_at_70%_80%,#f472b6_0%,transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="pixel-font text-3xl text-fuchsia-300 drop-shadow-[0_0_8px_#f0f]">PROJECTS</h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.id}
              className="group relative overflow-hidden rounded-lg border-4 border-[#1a0b2e] bg-[#0d0316] shadow-[inset_0_0_0_2px_#3b0764,0_0_24px_#f0f]"
            >
              <div className="aspect-video w-full bg-[linear-gradient(45deg,#0d0316_25%,#1a0b2e_25%,#1a0b2e_50%,#0d0316_50%,#0d0316_75%,#1a0b2e_75%,#1a0b2e_100%)] bg-[length:16px_16px]" />
              <div className="p-4">
                <h3 className="pixel-font text-lg text-cyan-300">{p.title}</h3>
                <p className="mt-2 text-sm text-fuchsia-100/90">{p.desc}</p>
                <button className="mt-4 rounded border-2 border-cyan-400 bg-black/40 px-3 py-2 text-xs text-cyan-300 shadow-[0_0_10px_#0ff] transition hover:translate-y-[-1px] hover:bg-cyan-500/10">VIEW PROJECT</button>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-20 [background:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.2)_3px)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
