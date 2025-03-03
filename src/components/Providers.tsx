'use client'

import { ThemeProvider } from 'next-themes'
import { Suspense } from 'react'
import { Loading } from './Loading'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </ThemeProvider>
  )
} 