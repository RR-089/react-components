import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">MyApp</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Home
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          About
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Contact
        </a>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <Button>Sign Up</Button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
        {/* 🍔 */}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 md:hidden">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
