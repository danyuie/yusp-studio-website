import './sass/main.sass'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yusp Studio',
  description: 'Yusp Studio Resources',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
