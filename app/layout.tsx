import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Orbix',
  description: 'Trade crypto now!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="w-full px-8 py-4 bg-black text-white flex justify-between items-center">
          <div className='flex items-center space-x-8'>
          <h1 className="text-2xl font-bold">OrbiX</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-400 cursor-pointer text-sm px-2 py-2 rounded-lg hover:bg-gray-300/20">Buy</a>
            <a href="#" className="text-gray-400 cursor-pointer text-sm px-2 py-2 rounded-lg hover:bg-gray-300/20">Market</a>
            <a href="#" className="text-gray-400 cursor-pointer text-sm px-2 py-2 rounded-lg hover:bg-gray-300/20">Exchange</a>
          </nav>
          </div>
          <nav className='space-x-4'>
          <button className="bg-green-950 text-sm text-green-400 px-3 py-2 rounded-lg hover:bg-green-950/50 cursor-pointer transition">
  Sign up
</button>
<button className="bg-blue-950 text-sm text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-950/50 cursor-pointer transition">
  Sign in
</button>
          </nav>
        </header>

        {children}
      </body>
    </html>
  )
}
