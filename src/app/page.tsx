import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { EventShowcase } from "@/components/landing/EventShowcase"
import { FutureFeatures } from "@/components/landing/FutureFeatures"
import { Testimonials } from "@/components/landing/Testimonials"
import { FAQ } from "@/components/landing/FAQ"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-950 text-foreground selection:bg-yellow-400 selection:text-zinc-950">
      <Navbar />
      <Hero />
      <Features />
      <EventShowcase />
      <FutureFeatures />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
