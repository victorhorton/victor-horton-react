import { useState, useEffect } from 'react'

export default function Typewriter({ text }: { text: string }) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, 50)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [currentIndex, text])

  return <>{currentText}</>
}
