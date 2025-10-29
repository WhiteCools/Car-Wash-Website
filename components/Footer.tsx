'use client'

import { Car, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com', label: 'Youtube' }
  ]

  const quickLinks = [
    { name: 'Utama', href: '#home' },
    { name: 'Perkhidmatan', href: '#services' },
    { name: 'Pakej', href: '#packages' },
    { name: 'Produk', href: '#products' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'Hubungi', href: '#contact' }
  ]

  const services = [
    'Exterior Wash',
    'Interior Detailing',
    'Paint Protection',
    'Engine Bay Cleaning',
    'Ceramic Coating',
    'Monthly Package'
  ]

  const paymentMethods = [
    'Visa',
    'Mastercard',
    'Touch n Go',
    'GrabPay',
    'Boost',
    'Tunai'
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <Car size={32} className="text-primary-400" />
              <span>AutoShine</span>
            </div>
            <p className="text-gray-400 mb-4">
              Perkhidmatan car wash dan detailing profesional yang komited untuk memberikan kualiti terbaik kepada setiap pelanggan.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Pautan Pantas</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Perkhidmatan</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>No. 45, Jalan Auto City, Taman Perindustrian, 47000 Petaling Jaya</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={20} className="flex-shrink-0" />
                <span>+60 12-345 6789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={20} className="flex-shrink-0" />
                <span>hello@autoshine.my</span>
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="text-sm font-semibold text-white mb-2">Waktu Operasi</h5>
              <p className="text-gray-400 text-sm">Isnin - Ahad</p>
              <p className="text-gray-400 text-sm">8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div>
              <h5 className="text-sm font-semibold text-white mb-2">Kaedah Pembayaran</h5>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-400 rounded text-xs"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Download App Kami</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                  App Store
                </button>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 text-sm">
                  Google Play
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} AutoShine. Hak cipta terpelihara.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Syarat & Terma
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Dasar Privasi
              </a>
              <span className="text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer