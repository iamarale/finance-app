// imports
import { Link } from "@tanstack/react-router";
import { Search, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// header
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems = [
    { name: "Overview", href: "/" },
    { name: "Transactions", href: "/transactions" },
    { name: "Transfer", href: "/transfer" },
  ];

  return (
    <header className="bg-slate-800 shadow-sm sm:px-2">
      <div className="container mx-auto ">
        <div className="flex justify-between h-16">
          <div className="flex">
            <nav className="hidden  sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center duration-75 text-slate-200 hover:text-slate-500`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Search Menu */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-600" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 sm:text-sm rounded-md"
              />
            </div>
          </div>

          {/* Menu btn */}
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* small VW */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <nav className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 duration-75 text-slate-200 hover:text-slate-500`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-4 pb-3 border-t border-slate-500">
            <div className="mt-3 px-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search
                    className="h-5 w-5 text-slate-600"
                    aria-hidden="true"
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 sm:text-sm rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
