import { Link } from "@tanstack/react-router";
import { User2 } from "lucide-react";

export default function Header() {
  return (
    <header className="py-4 px-2 bg-slate-800 text-slate-200">
      <div className="container mx-auto flex justify-between">
        <nav className="flex gap-4">
          <Link className="hover:text-slate-400 duration-150" to="/">
            Overview
          </Link>
          <Link
            className="hover:text-slate-400 duration-150"
            to="/transactions"
          >
            Transactions
          </Link>
          <Link className="hover:text-slate-400 duration-150" to="/transfer">
            Transfer
          </Link>
        </nav>
        <User2 />
      </div>
    </header>
  );
}
