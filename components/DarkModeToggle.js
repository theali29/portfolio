// components/DarkModeToggle.js

'use client' // Mark this as a Client Component

import { useState } from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function DarkModeToggle({ onToggle }) {
  const [darkMode, setDarkMode] = useState(false)

  const handleToggle = () => {
    setDarkMode(!darkMode)
    if (onToggle) {
      onToggle(!darkMode)
    }
  }

  return (
    <BsFillMoonStarsFill
      onClick={handleToggle}
      className={`cursor-pointer text-2xl ${
        darkMode ? 'text-yellow-500' : 'text-gray-800'
      }`}
    />
  )
}
