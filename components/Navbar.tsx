'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Car, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Utama' },
    { href: '#services', label: 'Perkhidmatan' },
    { href: '#packages', label: 'Pakej' },
    { href: '#products', label: 'Produk' },
    { href: '#testimonials', label: 'Testimoni' },
    { href: '#contact', label: 'Hubungi' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white dark:bg-slate-900 shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold text-primary-600">
            <Car size={32} />
            <span>AutoShine</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                    : 'text-white hover:text-accent-400'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button className="relative">
              <ShoppingCart 
                size={24} 
                className={scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'}
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            className={`md:hidden ${
              scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar