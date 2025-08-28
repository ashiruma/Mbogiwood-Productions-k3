import type { Metadata } from 'next'
import { Montserrat, Lato } from 'next/font/google'
import './globals.css'

// Configure the heading font (Montserrat)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '900'], // Bold and Black weights for headings
  variable: '--font-montserrat',
})

// Configure the body font (Lato)
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold weights for body text
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Mbogiwood Productions',
  description: 'Empowering African Narratives',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  )
}