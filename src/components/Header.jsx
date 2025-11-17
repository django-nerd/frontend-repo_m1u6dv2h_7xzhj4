import { useState } from 'react'
import { Menu } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm/0">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-lg border border-fuchsia-500/40 bg-black/60 px-4 py-3 shadow-[0_0_0_2px_#111,0_0_12px_#f0f,0_0_24px_#0ff]">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-sm bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_12px_#f0f]" />
            <span className="pixel-font text-sm text-cyan-300 drop-shadow-[0_0_6px_#0ff]">
              PIXEL SORCERER
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-xs uppercase tracking-widest text-fuchsia-300 hover:text-cyan-300 transition-colors pixel-font"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-fuchsia-300"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>
        {open && (
          <div className="mt-2 rounded-lg border border-fuchsia-500/40 bg-black/70 p-2 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-xs uppercase tracking-widest text-fuchsia-200 hover:bg-fuchsia-500/10 hover:text-cyan-300 pixel-font"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
