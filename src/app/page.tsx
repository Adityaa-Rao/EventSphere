import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { Features } from "@/components/landing/Features"
import { FutureFeatures } from "@/components/landing/FutureFeatures"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen noise">
      <Navbar />
      <Hero />
      <Features />
      <FutureFeatures />
      {/* Event Showcase, Testimonials, FAQ will go here in the future */}
      <Footer />
    </main>
  )
}
