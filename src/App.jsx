import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      <div className="fixed inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_20%_20%,#2e1065,transparent_40%),radial-gradient(circle_at_80%_30%,#0e7490,transparent_40%),radial-gradient(circle_at_50%_80%,#831843,transparent_40%)]" />

      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      <footer className="border-t border-fuchsia-500/30 bg-black/80 py-6 text-center text-xs text-fuchsia-300">
        © {new Date().getFullYear()} Pixel Sorcerer — Retro/Cyberpunk Portfolio
      </footer>
    </div>
  )
}

export default App
