"use client"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export type ProjectType = {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  tags: string[]
  tagColors: string[]
  link?: string
  features: string[]
  technologies: string[]
  results?: string[]
}

interface PortfolioModalProps {
  projects: ProjectType[]
  open: boolean
  currentIndex: number
  onOpenChange: (open: boolean) => void
  onNavigate: (direction: "prev" | "next") => void
}

export function PortfolioModal({ projects, open, currentIndex, onOpenChange, onNavigate }: PortfolioModalProps) {
  const project = projects[currentIndex]

  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl bg-slate-800/95 glass border border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
          <DialogDescription className="text-white/70">{project.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-auto object-cover" />
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold mb-2">About this project</h4>
              <p className="text-white/80">{project.fullDescription}</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Key Features</h4>
              <ul className="space-y-1 text-white/80">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} className="bg-slate-700/50 text-white hover:bg-slate-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {project.results && (
              <div>
                <h4 className="text-lg font-bold mb-2">Results</h4>
                <ul className="space-y-1 text-white/80">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.link && (
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 mt-4" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            className="border-white/10 hover:bg-slate-700/50 hover:text-white"
            onClick={() => onNavigate("prev")}
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous Project
          </Button>
          <Button
            variant="outline"
            className="border-white/10 hover:bg-slate-700/50 hover:text-white"
            onClick={() => onNavigate("next")}
          >
            Next Project <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
