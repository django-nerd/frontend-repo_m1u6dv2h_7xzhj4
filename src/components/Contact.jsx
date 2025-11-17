import { Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#05040a] py-20 text-fuchsia-100">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_30%,#06b6d4_0%,transparent_40%),radial-gradient(circle_at_80%_70%,#f472b6_0%,transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="pixel-font text-3xl text-fuchsia-300 drop-shadow-[0_0_8px_#f0f]">INITIATE COMMS</h2>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <input className="rounded border-2 border-fuchsia-500/40 bg-black/60 p-3 text-sm placeholder-fuchsia-300/50 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#0ff]" placeholder="> YOUR NAME" />
          <input className="rounded border-2 border-fuchsia-500/40 bg-black/60 p-3 text-sm placeholder-fuchsia-300/50 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#0ff]" placeholder="> EMAIL" />
          <textarea className="md:col-span-2 h-32 rounded border-2 border-fuchsia-500/40 bg-black/60 p-3 text-sm placeholder-fuchsia-300/50 outline-none focus:border-cyan-400 focus:shadow-[0_0_10px_#0ff]" placeholder="> MESSAGE" />
          <button type="button" className="md:col-span-2 w-full rounded border-2 border-cyan-400 bg-black/60 px-4 py-3 text-xs text-cyan-300 shadow-[0_0_10px_#0ff]">SEND (placeholder)</button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 rounded border border-fuchsia-400/30 bg-black/50 px-3 py-2 text-xs text-fuchsia-200 hover:text-cyan-300">
            <Github size={16} /> GitHub
          </a>
          <a href="#" className="flex items-center gap-2 rounded border border-fuchsia-400/30 bg-black/50 px-3 py-2 text-xs text-fuchsia-200 hover:text-cyan-300">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
