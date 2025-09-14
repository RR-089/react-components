import { useEffect, useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      if (saved !== null) return saved === "true";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <nav className="sticky top-0 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        MyApp
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          About
        </a>
        <a
          href="#"
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          Contact
        </a>
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:flex items-center gap-4">
        <Button>Sign Up</Button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toogle Dark Mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {/* 🍔 */}
        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 mb-1"></div>
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col p-4 gap-4 md:hidden">
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            Contact
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
            aria-label="Toogle Dark Mode"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}
