'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const items = [
  { number: "01", title: "Innovation", text: "I don't try to copy what everyone is doing. I work on what seems the most innovative to me." },
  { number: "02", title: "Persistence", text: "No matter how many hurdles come my way I don't give up." },
  { number: "03", title: "Fun", text: "I like having fun in whatever I do even though I might not show it." },
]

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    const totalWidth = container.scrollWidth - window.innerWidth

    gsap.to(container, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    })

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section ref={sectionRef} className="overflow-hidden bg-none">
      <div ref={containerRef} className="flex will-change-transform">
        
        {/* Opening panel */}
        <div className="min-w-screen w-screen h-screen flex items-center justify-center flex-shrink-0 px-20">
          <h2 className="text-white font-bold text-6xl md:text-8xl">
            My <span className="text-[#00ff00]">Values</span>
          </h2>
        </div>

        {/* Value panels */}
        {items.map((item) => (
          <div
            key={item.number}
            className="min-w-screen w-screen h-screen flex-shrink-0 flex items-center justify-center px-20 border-l border-[#7F7F7F]/20"
          >
            <div className="max-w-2xl">
              <span className="text-[#00ff00] font-bold text-8xl opacity-20">
                {item.number}
              </span>
              <h3 className="text-white font-bold text-5xl md:text-7xl mt-4">
                {item.title}
              </h3>
              <p className="text-[#7F7F7F] text-xl mt-6 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}