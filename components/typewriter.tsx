"use client"

import { useEffect, useState } from "react"

interface TypewriterProps {
  words?: string[]
  speed?: number
  delayBetweenWords?: number
  cursor?: boolean
  cursorChar?: string
  className?: string
}

export function Typewriter({
  words = [],
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  className = "",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const currentWord = words[wordIndex]

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    
    if (prefersReducedMotion) {
      // Just show the first word statically
      setDisplayText(words[0] || "")
      return
    }

    const timeout = setTimeout(
      () => {
        // Typing logic
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Word is complete, wait before deleting
            setTimeout(() => {
              setIsDeleting(true)
            }, delayBetweenWords)
          }
        } else {
          // Deleting logic
          if (charIndex > 0) {
            setDisplayText(currentWord.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Word is deleted, move to next word
            setIsDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      isDeleting ? speed / 2 : speed
    )

    return () => clearTimeout(timeout)
  }, [
    charIndex,
    currentWord,
    isDeleting,
    speed,
    delayBetweenWords,
    wordIndex,
    words,
  ])

  return (
    <div className="inline-block">
      <span className={className}>
        {displayText}
        {cursor && (
          <span
            className="ml-1 inline-block"
            style={{
              animation: "blink 1s step-end infinite",
            }}
          >
            {cursorChar}
          </span>
        )}
      </span>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50.01%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
