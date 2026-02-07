import { useRef, useEffect } from 'react'

export default function App() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Autoplay failed:', err)
      })
    }
  }, [])

  return (
    <div className="w-full">
      {/* Header s videem */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-stone-950/40 z-10 pointer-events-none"></div>
        
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            onError={(e) => console.log('Video error:', e)}
          >
            <source 
              src="/header.webm"
              type="video/webm"
            />
            <source 
              src="/header.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-6xl md:text-8xl text-white font-bold serif-font mb-8 leading-tight">
            Příběhy,<br />
            <span className="italic font-light opacity-80">které ožívají</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl mx-auto font-light">
            Tvořím svatební videa, která v sobě nesou emoce, přirozenost a filmovou atmosféru.
          </p>
          <button className="bg-ochre text-white px-10 py-5 rounded-xl font-bold hover:bg-white hover:text-ochre transition-all">
            Zhlédnout filmy
          </button>
        </div>
      </section>

      {/* Obsah */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold serif-font text-center mb-8">Ahoj, jsem Jakub Minka</h2>
          <p className="text-lg text-stone-700 text-center">
            Věřím, že svatební video by mělo být víc než jen záznam dne. Moje práce svatebního kameramana je o detailech, které jiným uniknou, a o příběhu, který dýchá i po letech.
          </p>
        </div>
      </section>
    </div>
  )
}
