'use client'
import React, { useRef } from 'react'
import { Typewriter } from './typewriter'
import Navbar from './Navbar'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.title', {
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
    })
    gsap.from(".title-char", {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
    });
    gsap.from(".surname", {
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      ease: "expo.out",
    });

    gsap.from('.hero-sub', {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.8,
      ease: "power2.out",
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="relative pb-2 md:pb-56 overflow-hidden" id="hero">
      <Navbar />

      <div className="pt-24">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-white md:text-9xl text-5xl border-dashed border-2 p-10 border-[#7F7F7F] title">
            {"AADIT".split("").map((char, i) => (
            <span key={i} className="title-char inline-block">{char}</span>
            ))}
          </h1>
          <h1 className="font-bold md:text-9xl text-7xl text-white title">
            {"BHAMBRi".split("").map((char, i) => (
            <span key={i} className="surname inline-block">{char}</span>
            ))}
          </h1>
          <p className="text-white font-bold mt-4 hero-sub">
            Crafting experiences not just pieces of software
          </p>
        </div>

        {/* Typewriter Overlay */}
        <div className="hidden md:block">
          <div className="absolute right-28 top-16 text-white">
            <Typewriter words={["Developer", "Designer", "Game Developer"]} cursor={false} />
          </div>
          <div className="absolute right-12 text-white">
            <Typewriter words={["Designer", "Game Developer", "Developer"]} cursor={false} />
          </div>
          <div className="absolute left-28 top-96 text-white flex flex-row">
            <Typewriter words={["Game Developer", "Developer", "Designer"]} cursor={false} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero