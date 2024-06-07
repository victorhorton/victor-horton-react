export default function ContactMe() {
  return (
    <div className="min-h-dvh">
      <h1 className="py-10 text-6xl lg:text-8xl">Get in touch</h1>
      <ul className="px-10">
        <li className="py-2 text-xl">
          Send me an email at{' '}
          <a
            className="text-blue-700 underline"
            href="mailto:vichorton5@gmail.com"
          >
            vichorton5@gmail.com
          </a>
        </li>
        <li className="border-y py-2 text-xl">
          Check out my{' '}
          <a
            className="text-blue-700 underline"
            href="https://github.com/victorhorton"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li className="py-2 text-xl">
          Connect with me on{' '}
          <a
            className="text-blue-700 underline"
            href="https://www.linkedin.com/in/victor-horton-a2931319a/"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}
