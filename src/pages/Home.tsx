import GlowingText from '../components/Home/GlowingText'
import TypewriterEffect from '../components/Home/TypewriterEffect'
import WhatIveDone from '../components/Home/WhatIveDone'

export default function Home() {
  const typedOutText = [
    'I have three years of experience as a professional developer and have a passion for creating innovative solutions.',
    'My work emphasizes consistency and maintainability in all my projects.',
    "I'm dedicated to continuous learning, always seeking to understand not just how things work, but why they work.",
  ]

  return (
    <>
      <div className="min-h-dvh">
        <div className="pt-10">
          <h1 className="font-display text-7xl font-semibold">
            <GlowingText>Hi, I'm Victor Horton</GlowingText>
          </h1>
          <h2 className="font-display text-7xl font-semibold">
            <GlowingText>I'm a full-stack developer</GlowingText>
          </h2>
        </div>
        <hr className="my-4" />
        <TypewriterEffect texts={typedOutText} />
      </div>
      <WhatIveDone />
    </>
  )
}
