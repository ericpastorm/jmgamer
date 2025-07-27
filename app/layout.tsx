import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

// Metadatos para SEO. Se pueden personalizar.
export const metadata: Metadata = {
  title: {
    template: '%s | Jmgamer',
    default: 'Jmgamer | Desarrollador de Software',
  },
  description: 'Portafolio profesional de Jmgamer, un apasionado desarrollador de software especializado en crear soluciones web modernas y eficientes.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {/* Colocamos el ThemeSwitcher en una esquina fija */}
          <div className="fixed bottom-5 right-5 z-50">
            <ThemeSwitcher />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}