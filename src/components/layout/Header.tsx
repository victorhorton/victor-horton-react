import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="h-10 w-full">
      <ul className="flex h-10 flex-row place-content-center items-center gap-4">
        <li className="flex-initial">
          <Link to="/">Home</Link>
        </li>
        <li className="flex-initial">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="flex-initial">
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
