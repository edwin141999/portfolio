import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio de Edwin Davila'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='shortcut icon' href='/favicon/favicon.ico' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
