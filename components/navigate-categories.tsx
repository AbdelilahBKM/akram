"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navigate_categories() {
  const [activeCategory, setActiveCategory] = useState("Salon");
  const categories = ["Salon", "Tissus", "Literie", "Voilage"];
  return (
    <nav className="flex justify-center p-4 bg-gray-100 rounded-full w-1/2">
      <ul className="flex space-x-4 text-slate-700">
        {categories.map((category) => (
          <li key={category}>
            <div>
              <button
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category ? "bg-white font-semibold shadow " : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}