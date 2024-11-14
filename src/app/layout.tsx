"use client"
import ThemeProvider from '@/contexts/Theme/ThemeProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ReadX',
  description: 'Site para a leitura de livros em PDF',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [theme, setTheme] = useState('light')

  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <ThemeProvider data-theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html >
  )
}
