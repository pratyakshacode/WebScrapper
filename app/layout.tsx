import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'ScrapAll',
  description: 'Track product prices efforlessly and save money on you online shopping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar/>
        <main className='max-w-10x1 mx-auto'>
        {children}
        </main>
        </body>
    </html>
  )
}
