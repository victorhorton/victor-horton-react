import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown'

export default function WhatIveDone() {
  useEffect(() => {
    const fadeInText = () => {
      const elements = document.querySelectorAll<HTMLElement>('.fade-in')
      const titleElement = document.getElementById('title-text')
      if (!titleElement) return

      const titleRect = titleElement.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const blankSpace = (windowHeight - titleRect.bottom) * 0.5

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const opacity = calculateOpacity(
          rect.top,
          titleRect.bottom,
          windowHeight,
          blankSpace
        )
        element.style.opacity = `${opacity}`
      })
    }

    const calculateOpacity = (
      elementTop: number,
      titleBottom: number,
      windowHeight: number,
      blankSpace: number
    ): number => {
      if (elementTop - titleBottom <= blankSpace) {
        return (elementTop - titleBottom) / (blankSpace - titleBottom)
      } else if (windowHeight - blankSpace < elementTop) {
        return (
          1 -
          (elementTop - (windowHeight - blankSpace)) /
            (windowHeight - (windowHeight - blankSpace))
        )
      } else {
        return 1
      }
    }

    document.addEventListener('scroll', fadeInText)

    return () => document.removeEventListener('scroll', fadeInText)
  }, [])

  return (
    <div id="my-work-parent">
      <div
        id="title-text-parent"
        className="sticky top-0 flex h-screen flex-col justify-between"
      >
        <h1
          id="title-text"
          className="my-10 font-display text-6xl font-semibold"
        >
          Work I've Done
        </h1>
        <FontAwesomeIcon
          className="m-10 h-6 w-6 animate-bounce self-center"
          icon={faArrowDown}
        />
      </div>
      <div className="container mx-auto px-5">
        <div className="fade-in flex h-screen justify-center">
          <p className="text-4xl">
            Migrated accounting/financial data from deprecated software to MySQL
          </p>
        </div>
        <div className="fade-in flex h-screen justify-center">
          <p className="text-4xl">
            Redesigned the e-commerce site{' '}
            <a
              href="https://www.successvision.com"
              target="_blank"
              className="relative z-10 text-blue-700 underline"
            >
              successvision.com
            </a>
            , implementing an interactive locations map using Google Maps API
          </p>
        </div>
        <div className="fade-in flex h-screen justify-center">
          <p className="text-4xl">
            Integrated Square's Payment API for online and in-store purchases
            with an internal POS backend
          </p>
        </div>
        <div className="fade-in flex h-screen justify-center">
          <p className="text-4xl">
            Mentored an intern in full-stack development, fostering growth and
            knowledge transfer within the organization
          </p>
        </div>
      </div>
    </div>
  )
}
