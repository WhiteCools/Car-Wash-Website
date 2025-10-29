'use client'

import { ArrowDown, Shield, Clock, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Cuci Kereta Profesional{' '}
            <span className="text-accent-400">Berkualiti Tinggi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            Perkhidmatan car wash dan detailing terbaik dengan teknologi moden dan barisan profesional berpengalaman
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <a
              href="#packages"
              className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Pilih Pakej
            </a>
            <a
              href="#products"
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Beli Produk
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-24">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Shield className="w-12 h-12 text-accent-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2 text-lg">100% Selamat</h3>
              <p className="text-gray-200 text-sm">Produk berkualiti yang selamat untuk kereta anda</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Clock className="w-12 h-12 text-accent-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2 text-lg">Perkhidmatan Pantas</h3>
              <p className="text-gray-200 text-sm">Selesai dalam masa 30-90 minit sahaja</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20">
              <Award className="w-12 h-12 text-accent-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2 text-lg">Kualiti Terjamin</h3>
              <p className="text-gray-200 text-sm">Jaminan kepuasan atau wang dikembalikan</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#features" className="inline-block text-white animate-bounce">
            <ArrowDown size={32} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero