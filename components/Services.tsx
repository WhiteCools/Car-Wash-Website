'use client'

import { Car, Wrench, Sparkles, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Car className="w-16 h-16" />,
      title: 'Exterior Wash',
      description: 'Pembersihan bahagian luar kereta yang menyeluruh',
      features: [
        'Hand wash dengan shampoo premium',
        'Pembersihan rim dan tayar',
        'Lap kering dengan microfiber',
        'Tire shine application'
      ],
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80'
    },
    {
      icon: <Sparkles className="w-16 h-16" />,
      title: 'Interior Detailing',
      description: 'Pembersihan dalaman kereta sehingga ke sudut tersembunyi',
      features: [
        'Vacuum seats & carpet',
        'Dashboard & console cleaning',
        'Leather conditioning',
        'Air freshener application'
      ],
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80'
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: 'Paint Protection',
      description: 'Perlindungan cat kereta untuk jangka masa panjang',
      features: [
        'Ceramic coating application',
        'Paint sealant',
        'Scratch removal',
        'UV protection'
      ],
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&q=80'
    },
    {
      icon: <Wrench className="w-16 h-16" />,
      title: 'Engine Bay Cleaning',
      description: 'Pembersihan enjin bay dengan selamat dan profesional',
      features: [
        'Degreasing treatment',
        'Steam cleaning',
        'Component protection',
        'Engine dressing'
      ],
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Perkhidmatan Kami
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Pelbagai perkhidmatan untuk memastikan kereta anda sentiasa dalam keadaan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white p-3 rounded-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 font-semibold">
                  Tempah Sekarang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services