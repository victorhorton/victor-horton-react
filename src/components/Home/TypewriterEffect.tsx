import React, { useState, useEffect } from 'react'

interface TypewriterProps {
  texts: string[]
}

const Typewriter: React.FC<TypewriterProps> = ({ texts }) => {
  const [currentTexts, setCurrentTexts] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < texts.length) {
        if (currentCharIndex < texts[currentIndex].length) {
          setCurrentTexts((prevTexts) => {
            const updatedTexts = [...prevTexts]
            updatedTexts[currentIndex] = texts[currentIndex].substring(
              0,
              currentCharIndex + 1
            )
            return updatedTexts
          })
          setCurrentCharIndex((prevIndex) => prevIndex + 1)
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1)
          setCurrentCharIndex(0)
        }
      } else {
        setShowCursor((prevShowCursor) => !prevShowCursor)
      }
    }, 20)

    return () => clearTimeout(timeout)
  }, [currentIndex, currentCharIndex, texts])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <div>
      {currentTexts.map((text, index) => (
        <p key={index} className="my-3 font-mono">
          {text}
          {index === currentTexts.length - 1 && showCursor && <span>|</span>}
        </p>
      ))}
    </div>
  )
}

export default Typewriter
