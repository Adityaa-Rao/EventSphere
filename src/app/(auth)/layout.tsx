import * as React from "react"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="flex flex-col flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
              <CalendarDays className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">EventSphere</span>
          </Link>
          
          <div className="p-8 border glass-card rounded-2xl">
            {children}
          </div>
        </div>
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 object-cover w-full h-full bg-zinc-900 border-l border-white/10 flex items-center justify-center overflow-hidden">
          {/* Aesthetic Background for Auth */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-900/20 mix-blend-overlay" />
          <div className="relative z-10 max-w-lg p-12 text-center text-white glass-card rounded-3xl mx-8">
            <h2 className="mb-6 text-4xl font-bold tracking-tight">
              Your gateway to unforgettable experiences.
            </h2>
            <p className="text-lg text-white/80">
              Join thousands of organizers and attendees in the most premium event management platform ever built.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
