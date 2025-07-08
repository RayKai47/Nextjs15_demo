'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode, MdComputer } from 'react-icons/md'

const ThemesSwitch = () => {

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themeOptions = [
    {
      value: 'dark',
      icon: <MdDarkMode size={18} />
    },
    {
      value: 'light',
      icon: <MdLightMode size={18} />
    },
    {
      value: 'system',
      icon: <MdComputer size={18} />
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="
        p-1
        max-h-8
        rounded-full
        bg-neutral-400
        text-stone-100
        border
        border-neutral-400
        grid gap-1 items-center justify-center
        overflow-hidden
        transition-all duration-300
        hover:max-h-25
        hover:text-neutral-500
        hover:bg-neutral-300
        dark:text-stone-300
        dark:bg-gray-500/60
        dark:border-stone-900/60
        dark:hover:border-stone-600
        dark:hover:text-stone-100
        dark:hover:bg-stone-700/80
        
      "
    >
      {themeOptions.map((themeOption) => (
        <div key={themeOption.value} className="
          p-0.75
          relative rounded-full transition-all duration-300
          cursor-pointer
          hover:text-stone-100
          hover:bg-stone-500
          dark:border-stone-300
          dark:hover:text-stone-900
          dark:hover:bg-neutral-300
        "
        data-theme={themeOption.value}
        onClick={() => setTheme(themeOption.value)}
        >
          {themeOption.icon}
        </div>
      ))}
    </div>
  )
}

export default ThemesSwitch;