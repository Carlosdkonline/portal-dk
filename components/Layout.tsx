import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Layout: React.FC = ({ children }) => (
  <div className="min-h-screen bg-[#0f172a] text-white">
    <header className="bg-black p-4 flex items-center">
      <Link href="/"><a className="text-2xl font-bold">DK Studio</a></Link>
      <nav className="space-x-4 ml-8">
        <Link href="/noticias"><a>Notícias</a></Link>
        <Link href="/espetaculos"><a>Espetáculos</a></Link>
      </nav>
    </header>
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      {children}
    </motion.main>
  </div>
)

export default Layout
