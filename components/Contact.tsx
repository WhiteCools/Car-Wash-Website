'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Clock, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Terima kasih! Kami akan menghubungi anda tidak lama lagi.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Alamat Outlet',
      info: 'No. 45, Jalan Auto City, Taman Perindustrian, 47000 Petaling Jaya, Selangor'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon & WhatsApp',
      info: '+60 12-345 6789'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      info: 'hello@autoshine.my'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Waktu Operasi',
      info: 'Isnin - Ahad: 8:00 AM - 8:00 PM'
    }
  ]

  const services = [
    'Exterior Wash',
    'Interior Detailing',
    'Paint Protection',
    'Engine Bay Cleaning',
    'Ceramic Coating',
    'Monthly Package'
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ada pertanyaan atau ingin membuat tempahan? Kami sedia membantu anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8158489690236!2d101.70400931475398!3d3.147889997694634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e4d1%3A0x232e1ff540d86c99!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1234567890123!5m2!1sen!2smy"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href="tel:+60123456789"
                className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/60123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold text-center flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Borang Tempahan
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nama Penuh *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="Nama anda"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nombor Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-all duration-200"
                  placeholder="+60 12-345 6789"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pilih Perkhidmatan *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-all duration-200"
                >
                  <option value="">Pilih perkhidmatan...</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mesej Tambahan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tulis mesej atau pertanyaan anda di sini..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Hantar Tempahan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact