import { Link } from "@tanstack/react-router";
import { User2 } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4 px-2 bg-slate-800 text-slate-200 flex justify-between">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/transfer">Transfer</Link>
      </nav>
      <span className="cursor-pointer">
        <User2 />
      </span>
    </header>
  );
}
