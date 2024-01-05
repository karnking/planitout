import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils"
import Navbar from '@/ui/components/Navbar'

export const metadata: Metadata = {
  title: 'Plan it out',
  description: 'One stop solution for planning outing anything',
  icons: {
    icon: "@/app/favicon.ico"
  }
}
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}