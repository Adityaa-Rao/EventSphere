import * as React from "react"
import Link from "next/link"
import { CalendarDays, Star, ShieldCheck, Zap } from "lucide-react"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-zinc-950 text-zinc-100 selection:bg-yellow-400 selection:text-zinc-950">
      <div className="flex flex-col flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 justify-center">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <Link href="/" className="flex items-center gap-2.5 mb-8 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-400 text-zinc-950 shadow-sm font-bold group-hover:scale-105 transition-transform">
              <CalendarDays className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              EventSphere
            </span>
          </Link>

          <div className="p-7 border border-white/[0.08] rounded-2xl bg-zinc-900/40 backdrop-blur-2xl shadow-xl">
            {children}
          </div>
        </div>
      </div>

      {/* Right Column Showcase */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 w-full h-full bg-zinc-900/60 border-l border-white/[0.08] flex items-center justify-center overflow-hidden p-8">
          <div className="relative z-10 max-w-md p-8 text-center rounded-2xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-center gap-1 mb-4 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-white">
              The modern standard for gatherings.
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
              Join thousands of organizers, founders, and attendees who publish, manage, and verify gatherings on EventSphere.
            </p>
            <div className="flex items-center justify-center gap-6 pt-5 border-t border-white/[0.06] text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-yellow-400" /> Tamper-Proof Passes
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-yellow-400" /> Instant Sync
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
