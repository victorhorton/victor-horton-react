import { useEffect } from 'react'

export default function GlowingText({ children }: { children: string }) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sections = document.querySelectorAll('.color')
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const distance = getDistance(
          e.clientX,
          e.clientY,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        )

        // Calculate color based on distance
        const maxDistance = 150 // Maximum distance to affect the color
        const proximity = Math.max(0, 1 - distance / maxDistance) // Proximity ratio (0 to 1)
        const colorValue = Math.floor(255 * proximity) // Adjust color based on proximity
        const color = `rgb(0, 0, ${colorValue})` // Color transition from black to red
        ;(section as HTMLElement).style.color = color
      })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const getDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    const dx = x1 - x2
    const dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy)
  }

  return (
    <>
      {[...children].map((character) => {
        return <span className="color">{character}</span>
      })}
    </>
  )
}
