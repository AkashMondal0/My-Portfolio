import './globals.css'
import 'animate.css';
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { ThemeProvider } from '@/components/provider/theme-provider'
import { cn } from '@/lib/utils'
const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Explore a collection of my latest projects and achievements on my portfolio website powered by Next.js. Discover innovative web development projects, seamless user experience, and technological expertise.',
  authors: [{
    name: 'Akash Mondal',
  }],
  viewport: 'width=device-width, initial-scale=1.0',
  keywords: ["portfolio", "Next.js", "web development", "projects", "achievements", "technology", "user experience"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(font.className,
        "bg-white dark:bg-black transition-colors duration-300")}>
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
