import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="w-full h-10">
      <ul className="flex flex-row place-content-center items-center gap-4 h-10">
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
  );
}
