'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/providers/ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-muted"
      aria-label="Cambiar tema"
      // Animaciones añadidas
      whileHover={{ scale: 1.1, rotate: 90 }}
      whileTap={{ scale: 0.9, rotate: -90, borderRadius: "100%" }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      // La 'key' es importante para que el icono se anime al cambiar
      key={theme}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </motion.button>
  )
}