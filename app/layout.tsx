import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className,"bg-white dark:bg-black transition-colors duration-300")}>
        <ThemeProvider attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='my-portfolio-theme'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
