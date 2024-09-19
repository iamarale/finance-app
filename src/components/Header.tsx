import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="bg-slate-800 text-slate-600 py-4 min-w-40">
      <ul>
        <li>
          <Button className="rounded-none w-full">
            <Link to="/">Overview</Link>
          </Button>
        </li>
        <li>
          <Button className="rounded-none w-full">
            <Link to="/transactions">Transactions</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
