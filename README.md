# WebRizz - Digital Agency Landing Page

A modern, responsive landing page for WebRizz Digital Agency, built with Next.js 14, React, and Tailwind CSS. This project showcases a professional digital agency's services, portfolio, and contact information with a beautiful, interactive UI.

## 🚀 Features

- **Modern Design**: Sleek, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Built-in theme switching functionality
- **Interactive Components**: 
  - Animated service cards
  - Portfolio showcase
  - Testimonials section
  - Contact form
  - Mobile-friendly navigation
- **Performance Optimized**: Built with Next.js for optimal performance and SEO
- **Accessibility**: WCAG compliant components and semantic HTML

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Animations**: CSS Transitions and Intersection Observer API
- **Form Handling**: React Hook Form
- **Validation**: Zod

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ehtisham-sadiq/webrizz.git
cd webrizz
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
webrizz/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── portfolio-section.tsx
│   ├── mobile-menu.tsx
│   └── mode-toggle.tsx
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── fonts/           # Font files
├── styles/              # Additional styles
└── lib/                 # Utility functions
```

## 🎨 Customization

### Theme Colors
The project uses a custom color scheme defined in `tailwind.config.ts`. You can modify the colors in the theme section:

```typescript
theme: {
  extend: {
    colors: {
      primary: "your-primary-color",
      secondary: "your-secondary-color",
      accent: "your-accent-color",
    }
  }
}
```

### Content
Update the content in `app/page.tsx` to match your agency's information:
- Services
- Portfolio items
- Team members
- Testimonials
- Contact information

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

The project can be deployed on any platform that supports Next.js applications:

1. **Vercel** (Recommended):
```bash
npm run build
vercel deploy
```

2. **Netlify**:
```bash
npm run build
netlify deploy
```

## 👥 Team

- **Usama** - CEO & Creative Pioneer
  - Expert in front-end and back-end development
  - Specializes in React.js, Next.js, Node.js, and PHP
  - Digital marketing and SEO strategist

- **Ehtisham Sadiq** - CTO & AI Visionary
  - AI and Machine Learning Engineer
  - Expert in Python, TensorFlow, PyTorch, and LangChain
  - Specializes in chatbots and generative AI solutions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Usama**: [chusama329@gmail.com](mailto:chusama329@gmail.com)
- **Ehtisham Sadiq**: [ehtisham.selfworkf@gmail.com](mailto:ehtisham.selfworkf@gmail.com)
- **Phone**: [+44 7440677107](tel:+447440677107)
- **LinkedIn**: 
  - [Ehtisham's Profile](https://www.linkedin.com/in/ehtisham-sadiq)
  - [Usama's Profile](#) 