'use client'

import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Iskandar',
      role: 'Pemilik Honda Civic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'Perkhidmatan yang sangat memuaskan! Kereta saya kelihatan seperti baru selepas Ultimate Detailing. Highly recommended!',
      rating: 5,
      package: 'Ultimate Detailing'
    },
    {
      name: 'Sarah Abdullah',
      role: 'Pemilik Perodua Myvi',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'Saya sangat berpuas hati dengan monthly package. Jimat masa dan duit. Barisan mereka sangat profesional dan mesra.',
      rating: 5,
      package: 'Monthly Package'
    },
    {
      name: 'David Tan',
      role: 'Pemilik BMW 5 Series',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      text: 'Ceramic coating mereka memang terbaik! Kereta saya mudah dijaga dan air hujan meluncur dengan sempurna. Worth every ringgit!',
      rating: 5,
      package: 'Ceramic Coating'
    },
    {
      name: 'Nurul Huda',
      role: 'Pemilik Toyota Vios',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'Premium wash package sangat berbaloi. Dalam masa sejam, kereta saya bersih dari dalam dan luar. Servis yang pantas!',
      rating: 5,
      package: 'Premium Wash'
    },
    {
      name: 'Rizal Kamarul',
      role: 'Pemilik Proton X70',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
      text: 'Interior detailing mereka sangat teliti. Setiap sudut dibersihkan dengan sempurna. Kereta berbau segar seperti baru!',
      rating: 5,
      package: 'Interior Detailing'
    },
    {
      name: 'Lisa Wong',
      role: 'Pemilik Mercedes-Benz',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
      text: 'Saya sangat cerewet dengan kereta saya, tapi AutoShine tidak mengecewakan. Perhatian terhadap detail mereka luar biasa!',
      rating: 5,
      package: 'Ultimate Detailing'
    }
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Apa Kata Pelanggan
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Lebih dari 5,000 pelanggan berpuas hati dengan perkhidmatan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary-200 dark:text-primary-900 w-10 h-10" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-primary-400"
                />
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              <div className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                {testimonial.package}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">5,000+</div>
              <div className="text-gray-600 dark:text-gray-400">Pelanggan Gembira</div>
            </div>
            <div className="w-px h-16 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
              <div className="text-gray-600 dark:text-gray-400">Rating Google</div>
            </div>
            <div className="w-px h-16 bg-gray-300 dark:bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">8+</div>
              <div className="text-gray-600 dark:text-gray-400">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials