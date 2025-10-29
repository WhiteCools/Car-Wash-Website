'use client'

import { Sparkles, Droplet, Shield, Zap, Users, ThumbsUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Pembersihan Menyeluruh',
      description: 'Setiap sudut kereta anda dibersihkan dengan teliti menggunakan peralatan moden'
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: 'Wax & Polish Premium',
      description: 'Produk wax dan polish berkualiti tinggi untuk perlindungan dan kilauan maksimum'
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Ceramic Coating',
      description: 'Lapisan ceramic coating untuk perlindungan jangka panjang cat kereta anda'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Perkhidmatan Express',
      description: 'Perkhidmatan pantas untuk mereka yang sibuk, tanpa mengorbankan kualiti'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Barisan Profesional',
      description: 'Pasukan berpengalaman yang terlatih dalam car care dan detailing'
    },
    {
      icon: <ThumbsUp className="w-12 h-12" />,
      title: 'Jaminan Kepuasan',
      description: 'Jaminan 100% kepuasan atau kami akan membersihkan semula secara percuma'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Kenapa Pilih Kami?
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Kami komited untuk memberikan perkhidmatan terbaik dengan menggunakan teknologi dan produk berkualiti tinggi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features