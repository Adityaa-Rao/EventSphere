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
      {/* Dynamic Background Elements: Gray, Silver & Gold Ambient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[550px] h-[550px] bg-yellow-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[650px] h-[650px] bg-slate-300/5 rounded-full blur-[140px]" />
      </div>

      <div className="flex flex-col flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 justify-center">
        <div className="w-full max-w-sm mx-auto lg:w-96">
          <Link href="/" className="flex items-center gap-2.5 mb-8 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-950 shadow-md group-hover:scale-105 transition-transform">
              <CalendarDays className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              EventSphere
            </span>
          </Link>

          <div className="p-8 border border-zinc-800 rounded-3xl bg-zinc-900/60 backdrop-blur-2xl shadow-2xl">
            {children}
          </div>
        </div>
      </div>

      {/* Right Column Showcase */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 object-cover w-full h-full bg-zinc-900 border-l border-zinc-800 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-zinc-900/40 to-slate-900/80 mix-blend-overlay" />
          
          <div className="relative z-10 max-w-lg p-10 text-center glass-card rounded-3xl mx-8 border border-zinc-700/60 bg-zinc-950/80 shadow-2xl">
            <div className="flex items-center justify-center gap-1 mb-4 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400" />
              ))}
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
              Your gateway to standout events.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              Join tens of thousands of event directors, founders, and attendees who run memorable experiences on EventSphere.
            </p>
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-zinc-800 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-yellow-400" /> Secure Encryption
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-yellow-400" /> Instant Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
