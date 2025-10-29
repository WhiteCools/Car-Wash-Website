'use client'

import { ShoppingCart, Star } from 'lucide-react'

const Products = () => {
  const products = [
    {
      name: 'Premium Car Shampoo',
      category: 'Cleaning',
      price: 'RM 45',
      originalPrice: 'RM 60',
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80',
      description: 'pH balanced shampoo untuk pembersihan lembut dan berkesan',
      inStock: true,
      discount: 25
    },
    {
      name: 'Microfiber Towel Set',
      category: 'Accessories',
      price: 'RM 35',
      originalPrice: null,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80',
      description: 'Set 5 helai microfiber berkualiti tinggi 40x40cm',
      inStock: true,
      discount: 0
    },
    {
      name: 'Ceramic Coating Spray',
      category: 'Protection',
      price: 'RM 120',
      originalPrice: 'RM 150',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=400&q=80',
      description: 'Perlindungan ceramic coating mudah untuk DIY',
      inStock: true,
      discount: 20
    },
    {
      name: 'Tire Shine Gel',
      category: 'Finishing',
      price: 'RM 28',
      originalPrice: null,
      rating: 4.6,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
      description: 'Gel tire shine tahan lama dengan UV protection',
      inStock: true,
      discount: 0
    },
    {
      name: 'Glass Cleaner Pro',
      category: 'Cleaning',
      price: 'RM 32',
      originalPrice: 'RM 40',
      rating: 4.8,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&q=80',
      description: 'Pembersih kaca tanpa streaks untuk pandangan jelas',
      inStock: true,
      discount: 20
    },
    {
      name: 'Leather Conditioner',
      category: 'Interior',
      price: 'RM 55',
      originalPrice: null,
      rating: 4.9,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?w=400&q=80',
      description: 'Conditioner untuk kulit kereta supaya kekal lembut',
      inStock: false,
      discount: 0
    },
    {
      name: 'Wax Polish Premium',
      category: 'Protection',
      price: 'RM 85',
      originalPrice: 'RM 110',
      rating: 4.8,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&q=80',
      description: 'Wax berkualiti tinggi untuk kilauan maksimum',
      inStock: true,
      discount: 23
    },
    {
      name: 'Car Vacuum Portable',
      category: 'Equipment',
      price: 'RM 180',
      originalPrice: 'RM 220',
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=400&q=80',
      description: 'Vacuum portable dengan kuasa sedutan tinggi',
      inStock: true,
      discount: 18
    }
  ]

  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Produk Car Care
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Beli produk berkualiti tinggi untuk kereta anda dengan harga terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {product.discount > 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  -{product.discount}%
                </div>
              )}
              
              {!product.inStock && (
                <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
                  Out of Stock
                </div>
              )}

              <div className="relative h-48 overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-5">
                <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wide">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-primary-600">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                <button
                  disabled={!product.inStock}
                  className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    product.inStock
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart size={18} />
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  )
}

export default Products