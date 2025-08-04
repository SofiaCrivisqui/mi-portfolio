import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">Sofía Crivisqui | Portfolio</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </header>
  );
}
