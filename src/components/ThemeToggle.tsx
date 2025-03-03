'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors touch-manipulation"
      aria-label="Toggle theme"
    >
      {resolvedTheme === 'dark' ? (
        <FiSun className="h-5 w-5 md:h-6 md:w-6" />
      ) : (
        <FiMoon className="h-5 w-5 md:h-6 md:w-6" />
      )}
    </button>
  )
} 
