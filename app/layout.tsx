import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AutoShine - Car Wash & Detailing Service',
  description: 'Perkhidmatan cuci kereta profesional dengan kualiti terbaik dan harga berpatutan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ms" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}