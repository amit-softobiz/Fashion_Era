import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FASHION_ERA',
  description: 'Digital-Fashion-Store website using NEXTJS and Material UI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
      <div className="flex-grow">
            <Header />
            <main className="my-0 py-16">{children}</main>
          </div>
          <Footer />
      </div>
      </body>
    </html>
  )
}
