export default function Skills() {
  const skills = [
    { name: 'Unreal Engine', level: 90 },
    { name: 'Unity', level: 85 },
    { name: 'Game Design', level: 95 },
    { name: 'Level Design', level: 88 },
  ]

  return (
    <section id="skills" className="relative border-y-4 border-cyan-400/30 bg-black py-20 text-fuchsia-100">
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="pixel-font text-3xl text-cyan-300 drop-shadow-[0_0_8px_#0ff]">SKILLS & TECHNOLOGIES</h2>
        <div className="mt-6 space-y-5">
          {skills.map((s) => (
            <div key={s.name}>
              <div className="flex items-center justify-between">
                <span className="pixel-font text-sm text-fuchsia-300">{s.name}</span>
                <span className="pixel-font text-xs text-cyan-300">{s.level}%</span>
              </div>
              <div className="mt-2 h-4 w-full overflow-hidden rounded border-2 border-[#123] bg-[#05060a]">
                <div
                  className="h-full bg-[repeating-linear-gradient(90deg,#06b6d4,#06b6d4_8px,#0ea5e9_8px,#0ea5e9_16px)] shadow-[0_0_12px_#0ff_inset]"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
