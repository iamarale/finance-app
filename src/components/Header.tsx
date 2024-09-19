import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <nav className="bg-slate-800 text-slate-200 px-2 py-4 min-w-40">
      <ul>
        <li>
          <Link to="/">Overview</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
      </ul>
    </nav>
  );
}
