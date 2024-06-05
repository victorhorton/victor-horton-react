import GlowingText from '../components/GlowingText'
import Typewriter from '../components/Typewriter'

export default function Home() {
  return (
    <>
      <div className="pt-10">
        <h1 className="font-display text-7xl font-semibold">
          <GlowingText>Hi, I'm Victor Horton</GlowingText>
        </h1>
        <h2 className="font-display text-7xl font-semibold">
          <GlowingText>I'm a full-stack developer</GlowingText>
        </h2>
      </div>
      <hr className="my-4" />
      <p className="font-mono text-xl">
        <Typewriter text="I've been working three years as a professional developer and love building cool things" />
      </p>
    </>
  )
}
