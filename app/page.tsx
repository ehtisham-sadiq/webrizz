"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle"
import { MobileMenu } from "@/components/mobile-menu"
import { Badge } from "@/components/ui/badge"
import { PortfolioSection } from "@/components/portfolio-section"
import {
  ChevronRight,
  Code,
  Globe,
  Rocket,
  ShoppingCart,
  Zap,
  ArrowRight,
  MessageSquare,
  CheckCircle,
  Mail,
  Phone,
  Linkedin,
  Star,
  Quote,
  ArrowDown,
  Sparkles,
  Brain,
  BarChart,
  Bot,
  Layers,
  Lightbulb,
} from "lucide-react"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const observerRefs = useRef<IntersectionObserver[]>([])
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)

    // Set up intersection observers for scroll animations
    const sections = document.querySelectorAll(".reveal-section")

    // Make all sections visible by default
    sections.forEach((section) => {
      section.classList.add("opacity-100")
    })

    sections.forEach((section, index) => {
      observerRefs.current[index] = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active")
            }
          })
        },
        { threshold: 0.1 },
      )

      observerRefs.current[index].observe(section)
    })

    return () => {
      observerRefs.current.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  // Function to handle "Get Started" button click
  const handleGetStarted = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to handle "Get a Free Quote" button click
  const handleGetQuote = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Function to handle "Explore Services" button click
  const handleExploreServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex min-h-screen flex-col bg-slate-900 text-white">
      {/* Floating shapes for background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="shape-circle w-64 h-64 bg-primary/10 top-20 -left-20 animate-pulse"></div>
        <div
          className="shape-circle w-96 h-96 bg-secondary/10 bottom-20 -right-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="shape-square w-48 h-48 bg-accent/10 top-1/2 left-1/3 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-grotesk font-bold text-xl">
            <div className="relative">
              {/* <Rocket className="h-6 w-6 text-secondary animate-pulse" /> */}
              <div className="absolute inset-0 bg-secondary blur-sm opacity-50 rounded-full"></div>
            </div>
            <span className="text-gradient">WebRizz</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium text-white/80 hover:text-secondary transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-white/80 hover:text-secondary transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-white/80 hover:text-secondary transition-colors">
              Why Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white/80 hover:text-secondary transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium text-white/80 hover:text-secondary transition-colors"
            >
              Portfolio
            </Link>
            <Link href="#contact" className="text-sm font-medium text-white/80 hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <div className="hidden md:block">
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 uppercase font-grotesk"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/95 to-primary/20 -z-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12 items-center">
              <div className={`flex flex-col justify-center space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
                <Badge className="w-fit bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors uppercase font-grotesk">
                  Web Development & AI Solutions
                </Badge>
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl/none">
                    <span className="text-gradient-accent">Unleash Your Digital Potential</span> with WebRizz
                  </h1>
                  <p className="text-xl text-white/80 max-w-[600px]">
                    Custom web development, AI solutions, and digital marketing to help your business innovate, grow,
                    and succeed.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className={`gap-1 bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base uppercase font-grotesk ${isLoaded ? "animate-scale-up" : "opacity-0"}`}
                    style={{ animationDelay: "0.5s" }}
                    onClick={handleGetQuote}
                  >
                    Get a Free Quote
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-secondary hover:bg-secondary/10 hover:text-secondary transition-all duration-300 text-base uppercase font-grotesk"
                    onClick={handleExploreServices}
                  >
                    Explore Services
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-slate-900">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <span>Trusted by innovative businesses worldwide</span>
                </div>
              </div>
              <div
                className={`relative ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: "0.3s" }}
              >
                <div className="absolute -inset-0.5 bg-gradient-conic rounded-2xl blur opacity-50 -z-10 animate-gradient-shift"></div>
                <div className="relative bg-slate-900/50 glass rounded-xl overflow-hidden shadow-xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                  <img
                    src="/hero-page.jpg"
                    alt="WebRizz Digital Solutions"
                    className="w-full h-auto object-cover mix-blend-luminosity opacity-80"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 glass rounded-xl border border-white/20 shadow-glow">
                      <Sparkles className="h-12 w-12 text-secondary animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <a href="#about" className="text-secondary hover:text-white transition-colors">
                <ArrowDown className="h-6 w-6" />
              </a>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors uppercase font-grotesk">
                About Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                The <span className="text-gradient">Visionaries</span> Behind WebRizz
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                WebRizz is a digital agency led by Usama (CEO) and Ehtisham Sadiq (CTO), delivering innovative web and
                AI solutions that transform businesses.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 reveal opacity-100" style={{ transitionDelay: "0.2s" }}>
              <Card className="overflow-hidden border-0 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover-lift">
                <div className="h-2 bg-gradient-primary"></div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Usama</CardTitle>
                  <CardDescription className="text-base text-white/70">Co-founder & Creative Pioneer</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-700">
                      <div className="absolute inset-0 bg-gradient-primary opacity-30 mix-blend-overlay"></div>
                      <img
                        src="/usama.jpeg"
                        alt="Usama"
                        className="object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <ul className="space-y-2 text-white/80">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Expert in front-end and back-end development</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specializes in React.js, Next.js, Node.js, and PHP</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Digital marketing and SEO strategist</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-0 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover-lift">
                <div className="h-2 bg-gradient-to-r from-secondary to-secondary/70"></div>
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Ehtisham Sadiq</CardTitle>
                  <CardDescription className="text-base text-white/70">CTO & AI Visionary</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-slate-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-secondary/10 mix-blend-overlay"></div>
                      <img
                        src="/github.png"
                        alt="Ehtisham Sadiq"
                        className="object-cover"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <ul className="space-y-2 text-white/80">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span>AI and Machine Learning Engineer</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Expert in Python, TensorFlow, PyTorch, and LangChain</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          <span>Specializes in chatbots and generative AI solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-12 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 uppercase font-grotesk"
                onClick={handleExploreServices}
              >
                See How We Can Transform Your Business
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" ref={servicesRef} className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors uppercase font-grotesk">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-gradient">Cutting-Edge</span> Digital Solutions
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                From custom websites to AI-powered applications, we deliver end-to-end solutions that drive measurable
                results and transform your business.
              </p>
            </div>
            <div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal opacity-100"
              style={{ transitionDelay: "0.2s" }}
            >
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-primary transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-white">Custom Website Design & Development</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Responsive, user-friendly websites that convert visitors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Built with React.js, Next.js, and modern frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Optimized for conversions and SEO</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-secondary to-secondary/70 transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-300">
                      <Brain className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg text-white">AI & Machine Learning Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI chatbots for 24/7 customer support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Generative AI for content and images</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Predictive analytics for business insights</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-secondary group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-primary transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                      <Code className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-white">API Development & Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure, scalable RESTful and GraphQL APIs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Built with FastAPI, Django, or Flask</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Third-party service integrations</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-secondary to-secondary/70 transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-300">
                      <ShoppingCart className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg text-white">E-Commerce Solutions</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Custom WooCommerce and Shopify stores</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-driven personalization to boost sales</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Payment gateway and inventory integration</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-secondary group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-primary transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                      <BarChart className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-white">SEO & Digital Marketing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Data-driven SEO strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Targeted social media campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Content marketing and lead generation</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
              <Card className="group overflow-hidden border border-white/10 bg-slate-800/50 glass shadow-lg transition-all hover:shadow-glow hover:-translate-y-2 duration-300">
                <div className="h-1 w-full bg-gradient-to-r from-secondary to-secondary/70 transition-all duration-300 group-hover:h-2"></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-secondary/20 group-hover:bg-secondary/30 transition-all duration-300">
                      <Bot className="h-5 w-5 text-secondary" />
                    </div>
                    <CardTitle className="text-lg text-white">Automation & Chatbot Integration</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-white/80 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>AI-powered chatbots for 24/7 support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Workflow automation to save time and resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Lead nurturing and customer engagement</span>
                    </li>
                  </ul>
                  <div className="flex items-center text-secondary group-hover:text-primary transition-colors">
                    <span className="text-sm font-medium uppercase font-grotesk">Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-16 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
              <p className="text-white/80 mb-4">Ready to transform your business with our cutting-edge services?</p>
              <Button
                className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300 uppercase font-grotesk text-base"
                onClick={handleGetQuote}
              >
                Let's Innovate Together
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-accent/20 text-accent hover:bg-accent/30 transition-colors uppercase font-grotesk">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Partner with WebRizz for <span className="text-gradient-accent">Digital Excellence</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                <span className="font-semibold text-primary">Usama's creative vision</span> combined with{" "}
                <span className="font-semibold text-secondary">Ehtisham's AI innovation</span> delivers exceptional
                results for your business.
              </p>
            </div>
            <div
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal opacity-100"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Tailored Solutions</h3>
                <p className="text-sm text-white/80 text-center">
                  Custom strategies designed specifically for your unique business goals and challenges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Brain className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white">Cutting-Edge AI & Tech</h3>
                <p className="text-sm text-white/80 text-center">
                  Advanced AI and ML technologies that give your business a competitive advantage.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-accent/20 rounded-full">
                  <MessageSquare className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Transparent Communication</h3>
                <p className="text-sm text-white/80 text-center">
                  Clear, consistent updates throughout your project with no surprises or hidden costs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <BarChart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-white">Results-Oriented</h3>
                <p className="text-sm text-white/80 text-center">
                  Focus on measurable outcomes that directly impact your business growth and ROI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Excellence</h3>
                <p className="text-sm text-white/80 text-center">
                  Modern, scalable technologies and best practices that future-proof your digital assets.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border border-white/10 rounded-lg p-6 bg-slate-800/50 glass shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Dedicated Support</h3>
                <p className="text-sm text-white/80 text-center">
                  Ongoing care and maintenance to ensure your digital presence evolves with your business.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 uppercase font-grotesk"
                asChild
              >
                <a href="#testimonials">See What Our Clients Say</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors uppercase font-grotesk">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our <span className="text-gradient">Clients Say</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                Don't just take our word for it. Here's what businesses have to say about working with WebRizz.
              </p>
            </div>
            <div
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 reveal opacity-100"
              style={{ transitionDelay: "0.2s" }}
            >
              <Card className="bg-slate-800/50 glass border border-white/10 shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Quote className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white/80 italic mb-6">
                    "WebRizz transformed our online presence with a custom e-commerce solution that increased our sales
                    by 40%. Their AI-powered recommendation engine has been a game-changer for customer engagement."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-slate-700 overflow-hidden">
                      <img
                        src="/sarah-johnson.webp"
                        alt="Client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Sarah Johnson</p>
                      <p className="text-sm text-white/70">CEO, Fashion Boutique</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 glass border border-white/10 shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Quote className="h-5 w-5 text-secondary" />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white/80 italic mb-6">
                    "The AI chatbot developed by Ehtisham has revolutionized our customer service. It handles 70% of
                    inquiries automatically, allowing our team to focus on complex issues. Highly recommended!"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-slate-700 overflow-hidden">
                      <img
                        src="/image1.jpeg"
                        alt="Client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Michael Chen</p>
                      <p className="text-sm text-white/70">CTO, Tech Solutions Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 glass border border-white/10 shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                        <Quote className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-white/80 italic mb-6">
                    "Usama's SEO expertise helped us climb from page 5 to the top of Google for our key search terms.
                    The ROI on our marketing spend has tripled since working with WebRizz."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-slate-700 overflow-hidden">
                      <img
                        src="/RodrigezAyal.jpg"
                        alt="Client"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Emma Rodriguez</p>
                      <p className="text-sm text-white/70">Marketing Director, Growth Co.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="mt-16 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
              <Button
                className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300 uppercase font-grotesk"
                asChild
              >
                <a href="#portfolio">View Our Portfolio</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section - Using our new component */}
        <PortfolioSection />

        {/* Call to Action Section */}
        <section id="contact" ref={contactRef} className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 to-slate-900 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-accent/20 text-accent hover:bg-accent/30 transition-colors uppercase font-grotesk">
                Get In Touch
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to <span className="text-gradient-accent">Transform</span> Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                Let's create a website, AI solution, or marketing strategy that drives results. Fill out the form below
                to get started on your journey to digital excellence.
              </p>
            </div>
            <div
              className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto reveal opacity-100"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                  <p className="text-white/80">Reach out to our team directly or fill out the form to get started.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/20 p-2">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-white/80">
                        <a href="tel:+447951753340" className="hover:text-secondary transition-colors">
                          +44 7951 753340
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-secondary/20 p-2">
                      <Mail className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-white">Email</p>
                      <div className="space-y-1">
                        <p className="text-white/80">
                          <a href="mailto:chusama329@gmail.com" className="hover:text-secondary transition-colors">
                            chusama329@gmail.com
                          </a>
                        </p>
                        <p className="text-white/80">
                          <a
                            href="mailto:ehtisham.selfworkf@gmail.com"
                            className="hover:text-secondary transition-colors"
                          >
                            ehtisham.selfworkf@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-accent/20 p-2">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-white">LinkedIn</p>
                      <div className="space-y-1">
                        <p className="text-white/80">
                          <a href="#" className="hover:text-accent transition-colors">
                            Usama's Profile
                          </a>
                        </p>
                        <p className="text-white/80">
                          <a
                            href="https://www.linkedin.com/in/ehtisham-sadiq"
                            className="hover:text-accent transition-colors"
                          >
                            Ehtisham's Profile
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-slate-800/50 glass rounded-lg border border-white/10">
                  <p className="text-sm font-medium mb-2 text-white">Why clients choose WebRizz:</p>
                  <ul className="space-y-2 text-sm text-white/80">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cutting-edge AI solutions led by expert CTO Ehtisham</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Proven results with 40%+ increase in conversions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transparent pricing with no hidden costs</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-800/50 glass p-6 shadow-lg">
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Subject <span className="text-accent">*</span>
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project inquiry"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="service"
                      className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Service You're Interested In
                    </label>
                    <select
                      id="service"
                      className="flex h-10 w-full rounded-md border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="ai-solutions">AI & ML Solutions</option>
                      <option value="api-development">API Development</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="seo">SEO & Marketing</option>
                      <option value="automation">Automation & Chatbots</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none text-white peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/10 bg-slate-800/50 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  <Button className="w-full bg-gradient-accent hover:shadow-glow-accent transition-all duration-300 text-base uppercase font-grotesk">
                    Get a Free Quote
                  </Button>
                  <p className="text-xs text-white/60 text-center mt-2">We'll get back to you within 24 hours.</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-20 md:py-32 relative reveal-section opacity-100">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95 -z-10"></div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
              <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors uppercase font-grotesk">
                FAQ
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
                Find answers to common questions about our services and process.
              </p>
            </div>
            <div
              className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto reveal opacity-100"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="bg-slate-800/50 glass rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">What technologies do you specialize in?</h3>
                <p className="text-white/80">
                  We specialize in React.js, Next.js, Node.js, Python, TensorFlow, PyTorch, FastAPI, Django, Flask,
                  LangChain, and various cloud platforms (AWS, GCP, Azure) for web development and AI solutions.
                </p>
              </div>
              <div className="bg-slate-800/50 glass rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">How long does a typical project take?</h3>
                <p className="text-white/80">
                  Project timelines vary based on complexity. A simple website might take 2-4 weeks, while a complex AI
                  solution could take 2-3 months. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
              <div className="bg-slate-800/50 glass rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">Do you offer ongoing maintenance?</h3>
                <p className="text-white/80">
                  Yes, we offer ongoing maintenance and support packages to ensure your website or application remains
                  secure, up-to-date, and optimized for performance.
                </p>
              </div>
              <div className="bg-slate-800/50 glass rounded-lg p-6 shadow-lg border border-white/10 hover:shadow-glow transition-all hover:-translate-y-1 duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">What makes your AI solutions different?</h3>
                <p className="text-white/80">
                  Our AI solutions are led by CTO Ehtisham, who brings deep expertise in machine learning and natural
                  language processing. We create custom AI solutions tailored to your specific business needs, not
                  one-size-fits-all approaches.
                </p>
              </div>
            </div>
            <div className="mt-16 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
              <p className="text-white/80 mb-4">Have more questions? We're here to help!</p>
              <Button
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 uppercase font-grotesk"
                onClick={handleGetQuote}
              >
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 bg-slate-900 text-white border-t border-white/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-grotesk font-bold text-xl">
                <div className="relative">
                  <Rocket className="h-5 w-5 text-secondary" />
                  <div className="absolute inset-0 bg-secondary blur-sm opacity-50 rounded-full"></div>
                </div>
                <span className="text-gradient">WebRizz</span>
              </div>
              <p className="text-sm text-white/70">WebRizz – Crafting Digital Experiences that Drive Business Growth</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-secondary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    AI & ML Solutions
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    API Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    E-Commerce
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-secondary transition-colors">
                    SEO & Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="#about" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-secondary transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-secondary transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-secondary transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-secondary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white">Contact</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-secondary"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+447951753340" className="hover:text-secondary transition-colors">
                    +44 7951 753340
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-secondary"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <a href="mailto:chusama329@gmail.com" className="hover:text-secondary transition-colors">
                    chusama329@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">© {new Date().getFullYear()} WebRizz Agency. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
