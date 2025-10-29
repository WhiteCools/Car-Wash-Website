# 🚗 AutoShine - Car Wash & Detailing Website

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14.0-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=for-the-badge&logo=tailwind-css" alt="Tailwind" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

<br />

<div align="center">
  <h3>🌟 Modern Car Wash & Detailing Service Website with E-Commerce Integration 🌟</h3>
  <p>A professional, responsive, and feature-rich website built with Next.js 14, TypeScript, and Tailwind CSS</p>
</div>

---

## 📸 Preview

### 🏠 Homepage
- Hero section dengan background image yang menarik
- 3 feature boxes (100% Safe, Fast Service, Quality Guaranteed)
- Smooth scroll animations

### 💼 Services & Packages
- 4 kategori perkhidmatan lengkap
- 4 pakej harga dengan popular badge
- Responsive card design

### 🛒 E-Commerce
- 8 produk car care dengan rating & reviews
- Shopping cart functionality
- Discount badges & stock status

---

## ✨ Features

### 🎯 Service Features
- ✅ **Hero Section** - Engaging landing page with CTA buttons
- ✅ **Features** - 6 key benefits with icons
- ✅ **Services** - 4 main service categories (Exterior, Interior, Protection, Engine)
- ✅ **Packages** - 4 pricing tiers (Basic, Premium, Ultimate, Monthly)
- ✅ **How It Works** - 4-step booking process
- ✅ **Testimonials** - 6 customer reviews with ratings

### 🛒 E-Commerce Features
- ✅ **Product Catalog** - 8 car care products with:
  - Price & discount display
  - Star ratings & review count
  - Stock status indicators
  - Add to cart functionality
  - Product categories
- ✅ **Shopping Cart** - Icon with item counter in navbar
- ✅ **Responsive Product Grid** - Optimized for all devices

### 📱 Additional Features
- ✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
- ✅ **Dark Mode Support** - Automatic theme switching
- ✅ **Contact Form** - Booking form with validation
- ✅ **Google Maps Integration** - Location finder
- ✅ **WhatsApp Button** - Direct messaging link
- ✅ **Multiple Payment Methods** - 6 payment options displayed
- ✅ **Smooth Animations** - Fade-in and hover effects
- ✅ **SEO Optimized** - Meta tags and semantic HTML

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/WhiteCools/Car-Wash-Website.git
cd carwash-website
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open your browser
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
carwash-website/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main homepage
│   └── globals.css             # Global styles & animations
├── components/
│   ├── Navbar.tsx              # Navigation with cart icon
│   ├── Hero.tsx                # Hero section
│   ├── Features.tsx            # Service benefits
│   ├── Services.tsx            # Service categories
│   ├── Packages.tsx            # Pricing packages
│   ├── Products.tsx            # E-commerce products
│   ├── HowItWorks.tsx          # Booking process
│   ├── Testimonials.tsx        # Customer reviews
│   ├── Contact.tsx             # Contact form & map
│   └── Footer.tsx              # Footer with links
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

---

## 🎨 Customization

### Change Brand Name

Edit `components/Navbar.tsx` and `components/Footer.tsx`:
```typescript
<span>Your Brand Name</span>
```

### Modify Packages

Edit `components/Packages.tsx`:
```typescript
const packages = [
  {
    name: 'Package Name',
    price: 'RM XX',
    duration: 'XX minutes',
    features: [...],
    popular: true/false
  }
]
```

### Add Products

Edit `components/Products.tsx`:
```typescript
const products = [
  {
    name: 'Product Name',
    category: 'Category',
    price: 'RM XX',
    rating: 4.8,
    reviews: 100,
    image: 'IMAGE_URL',
    inStock: true,
    discount: 20
  }
]
```

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#0284c7', // Main blue
  },
  accent: {
    500: '#f97316', // Orange accent
  }
}
```

### Update Contact Info

Edit `components/Contact.tsx` and `components/Footer.tsx`:
- Address
- Phone number
- Email
- Operating hours
- WhatsApp link
- Google Maps coordinates

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- **Fonts:** [Google Fonts (Inter)](https://fonts.google.com/) - Modern sans-serif font

---

## 📱 Responsive Design

Optimized for all screen sizes:

- 📱 **Mobile** - 320px to 767px
- 📱 **Tablet** - 768px to 1023px
- 💻 **Desktop** - 1024px to 1279px
- 🖥️ **Large Desktop** - 1280px and above

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/WhiteCools/Car-Wash-Website)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Your site is live! 🎉

### Deploy to Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Deploy!

---

## 📊 Performance

- ⚡ **Fast Load Times** - Optimized with Next.js Image component
- 🎯 **SEO Friendly** - Semantic HTML and meta tags
- ♿ **Accessible** - WCAG compliant
- 📱 **Mobile First** - Responsive design approach

---

## 🔮 Future Enhancements

- [ ] Shopping cart page with items list
- [ ] Checkout process with payment gateway
- [ ] User authentication (login/register)
- [ ] Order tracking system
- [ ] Admin dashboard for managing products
- [ ] Online booking calendar
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Customer review system
- [ ] Loyalty points program

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <h3>⭐ Star this repository if you found it helpful! ⭐</h3>
  <p>Made with ❤️ and ☕ by Riko</p>
</div>
