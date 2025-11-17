import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="top" className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Jd4wcqFfe70N-TXP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-end px-4 pb-16">
        <div>
          <h1 className="pixel-font text-5xl md:text-7xl text-cyan-300 drop-shadow-[0_0_12px_#0ff]">
            PIXEL SORCERER
          </h1>
          <p className="mt-4 max-w-xl text-fuchsia-200/90">
            Retro-futuristic Game Designer crafting worlds, mechanics, and unforgettable loops.
          </p>
        </div>
      </div>
    </section>
  )
}
