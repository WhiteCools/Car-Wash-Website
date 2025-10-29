'use client'

import { Check, Star } from 'lucide-react'

const Packages = () => {
  const packages = [
    {
      name: 'Basic Wash',
      price: 'RM 30',
      duration: '30 minit',
      description: 'Pakej asas untuk pembersihan cepat',
      features: [
        'Exterior hand wash',
        'Wheel & tire cleaning',
        'Window cleaning',
        'Dry with microfiber',
        'Tire shine',
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Premium Wash',
      price: 'RM 80',
      duration: '60 minit',
      description: 'Pakej popular dengan pembersihan menyeluruh',
      features: [
        'Semua dalam Basic Wash',
        'Interior vacuum',
        'Dashboard cleaning',
        'Leather conditioning',
        'Wax application',
        'Air freshener',
      ],
      popular: true,
      color: 'accent'
    },
    {
      name: 'Ultimate Detailing',
      price: 'RM 250',
      duration: '3 jam',
      description: 'Pakej premium untuk hasil maksimum',
      features: [
        'Semua dalam Premium Wash',
        'Engine bay cleaning',
        'Paint correction',
        'Ceramic coating',
        'Headlight restoration',
        'Fabric protection',
        'Complete interior detailing',
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Monthly Package',
      price: 'RM 200',
      duration: 'Sebulan',
      description: 'Pakej bulanan dengan nilai terbaik',
      features: [
        '4x Premium Wash',
        'Free vacuum anytime',
        'Priority booking',
        'Member discount 10%',
        'Free air freshener',
      ],
      popular: false,
      color: 'primary'
    }
  ]

  return (
    <section id="packages" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pakej Kami
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pilih pakej yang sesuai dengan keperluan dan bajet anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular ? 'ring-4 ring-accent-500 scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-accent-500 text-white text-center py-2 font-semibold flex items-center justify-center gap-2">
                  <Star size={16} fill="currentColor" />
                  POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary-600">{pkg.price}</span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">/ {pkg.duration}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {pkg.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-accent-500 text-white hover:bg-accent-600 shadow-lg'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Pilih Pakej
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Semua pakej termasuk jaminan kepuasan 100%. Hubungi kami untuk custom package.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Packages