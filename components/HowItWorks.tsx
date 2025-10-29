'use client'

import { Calendar, Car, Sparkles, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-16 h-16" />,
      title: 'Tempah Online',
      description: 'Pilih pakej dan masa yang sesuai melalui website atau aplikasi mobile kami',
      number: '01'
    },
    {
      icon: <Car className="w-16 h-16" />,
      title: 'Datang ke Outlet',
      description: 'Bawa kereta anda ke outlet kami pada waktu yang telah ditempah',
      number: '02'
    },
    {
      icon: <Sparkles className="w-16 h-16" />,
      title: 'Kami Bersihkan',
      description: 'Barisan profesional kami akan membersihkan kereta anda dengan teliti',
      number: '03'
    },
    {
      icon: <CheckCircle className="w-16 h-16" />,
      title: 'Siap & Gembira',
      description: 'Ambil kereta anda yang bersih dan berkilat. Bayaran mudah dengan pelbagai pilihan',
      number: '04'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Bagaimana Ia Berfungsi?
          </h2>
          <div className="w-24 h-1 bg-accent-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto">
            Proses yang mudah dan pantas untuk mendapatkan kereta bersih anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
                
                <div className="text-primary-600 dark:text-primary-400 mb-6 mt-4 flex justify-center">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-accent-400"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#packages"
            className="inline-block px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Tempah Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks