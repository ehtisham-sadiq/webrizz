"use client"

import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Menu } from "lucide-react"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link
            href="#about"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#why-us"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Why Us
          </Link>
          <Link
            href="#testimonials"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Testimonials
          </Link>
          <Link
            href="#portfolio"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="text-lg font-medium hover:text-primary transition-colors py-2 border-b"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4">
            <Button
              className="w-full bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </Button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
