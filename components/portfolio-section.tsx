"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { PortfolioModal, type ProjectType } from "@/components/portfolio-modal"

// Sample project data
const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Custom Shopify solution with AI-powered recommendations",
    fullDescription:
      "We developed a custom e-commerce platform for a fashion retailer using Shopify as the base. The solution includes AI-powered product recommendations that analyze customer behavior to suggest relevant products, increasing average order value by 35%.",
    image: "/E-Commerce Platform.jpeg",
    tags: ["E-Commerce", "AI"],
    tagColors: ["bg-primary/20", "bg-secondary/20"],
    link: "https://example.com/ecommerce-case-study",
    features: [
      "AI-powered product recommendations",
      "Custom checkout experience",
      "Inventory management integration",
      "Mobile-first responsive design",
      "Advanced analytics dashboard",
    ],
    technologies: ["Shopify", "React", "Node.js", "TensorFlow", "GraphQL"],
    results: [
      "35% increase in average order value",
      "42% improvement in conversion rate",
      "28% reduction in cart abandonment",
    ],
  },
  {
    id: 2,
    title: "AI Chatbot Integration",
    description: "24/7 customer support solution with natural language processing",
    fullDescription:
      "We built a sophisticated AI chatbot for a tech company that handles customer inquiries 24/7. Using advanced natural language processing, the chatbot can understand complex questions, provide accurate answers, and seamlessly hand off to human agents when necessary.",
    image: "/CB_Image.webp",
    tags: ["Chatbot", "NLP"],
    tagColors: ["bg-primary/20", "bg-secondary/20"],
    link: "https://example.com/chatbot-case-study",
    features: [
      "Natural language understanding",
      "Multi-language support",
      "Seamless human handoff",
      "Integration with CRM systems",
      "Continuous learning capabilities",
    ],
    technologies: ["Python", "TensorFlow", "FastAPI", "React", "WebSockets"],
    results: [
      "70% reduction in support ticket volume",
      "24/7 customer support coverage",
      "89% positive customer satisfaction rating",
    ],
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description: "Custom analytics platform with predictive insights",
    fullDescription:
      "We created a comprehensive SaaS dashboard for a marketing analytics company that provides real-time data visualization and predictive insights. The platform aggregates data from multiple sources and uses machine learning to forecast trends and identify opportunities.",
    image: "/SaaS.png",
    tags: ["Dashboard", "Analytics"],
    tagColors: ["bg-primary/20", "bg-secondary/20"],
    link: "https://example.com/saas-case-study",
    features: [
      "Real-time data visualization",
      "Predictive analytics",
      "Custom report generation",
      "Multi-source data integration",
      "Role-based access control",
    ],
    technologies: ["Next.js", "D3.js", "Python", "PostgreSQL", "AWS"],
    results: [
      "53% improvement in decision-making speed",
      "41% increase in campaign effectiveness",
      "320+ active enterprise users",
    ],
  },
]

export function PortfolioSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  const handleProjectClick = (index: number) => {
    setCurrentProjectIndex(index)
    setModalOpen(true)
  }

  const handleNavigate = (direction: "prev" | "next") => {
    if (direction === "prev") {
      setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    } else {
      setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section id="portfolio" className="w-full py-20 md:py-32 relative reveal-section opacity-100">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/95 -z-10"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 reveal opacity-100">
          <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors uppercase font-grotesk">
            Our Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            <span className="text-gradient">Innovative</span> Portfolio & Case Studies
          </h2>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-lg">
            From e-commerce stores to AI chatbots, we've helped businesses thrive in the digital landscape with our
            cutting-edge solutions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 reveal opacity-100" style={{ transitionDelay: "0.2s" }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 shadow-lg hover:shadow-glow transition-all hover:-translate-y-2 duration-300 cursor-pointer"
              onClick={() => handleProjectClick(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                width={600}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} className={`${project.tagColors[i]} text-white hover:bg-slate-700/70`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center reveal opacity-100" style={{ transitionDelay: "0.4s" }}>
          <p className="text-white/80 mb-4">Explore our complete portfolio to see more of our innovative work</p>
          <Button
            asChild
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 uppercase font-grotesk"
          >
            <Link
              href="https://linktr.ee/chusama32"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              View Full Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal
        projects={projects}
        open={modalOpen}
        currentIndex={currentProjectIndex}
        onOpenChange={setModalOpen}
        onNavigate={handleNavigate}
      />
    </section>
  )
}
