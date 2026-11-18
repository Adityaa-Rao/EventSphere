"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star, Calendar, Users, Sparkles, MapPin, CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-36 pb-20 overflow-hidden text-center md:pt-44">
      {/* Background Gradients: Gray, Silver & Warm Yellow Ambient */}
      <div className="absolute top-0 inset-x-0 h-full mesh-gradient pointer-events-none -z-10" />
      <div className="absolute top-[18%] left-[50%] -translate-x-1/2 w-[600px] md:w-[900px] h-[500px] bg-yellow-400/10 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse-slow" />
      <div className="absolute top-[45%] left-[20%] w-[400px] h-[400px] bg-slate-400/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Floating Trust Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2.5 px-4 py-2 mb-8 text-xs sm:text-sm font-semibold border rounded-full glass-card text-zinc-200 border-zinc-700/60 bg-zinc-900/60 shadow-lg"
      >
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400/20 text-yellow-400 border border-yellow-400/30">
          <Star className="w-3 h-3 fill-yellow-400" />
        </span>
        <span className="text-zinc-300">The Modern Standard for Events</span>
        <span className="px-2 py-0.5 text-[11px] font-bold tracking-wide uppercase rounded-full bg-yellow-400 text-zinc-950">
          v2.0 Live
        </span>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mb-6 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
      >
        <span className="silver-gradient">Create events that</span>
        <br />
        <span className="text-gradient">people remember.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mb-10 text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-normal"
      >
        EventSphere blends sleek design with intelligent scheduling, seamless RSVPs, and real-time interaction.
        Built for creators, organizers, and communities worldwide.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 relative z-20 w-full sm:w-auto px-4"
      >
        <Link
          href="/register"
          className="group relative flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-zinc-950 transition-all rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:shadow-[0_0_35px_rgba(250,204,21,0.45)] hover:scale-105 active:scale-95 overflow-hidden"
        >
          <span className="relative z-10">Start Organizing Free</span>
          <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
        <Link
          href="/events"
          className="flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-zinc-200 transition-all border rounded-full border-zinc-700/80 bg-zinc-900/60 hover:bg-zinc-800/80 hover:text-yellow-400 hover:border-yellow-400/40 hover:scale-105"
        >
          <Calendar className="w-4 h-4 text-yellow-400" />
          Explore Live Events
        </Link>
      </motion.div>

      {/* Key Metrics / Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-12 text-xs sm:text-sm text-zinc-400"
      >
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-yellow-400" />
          <span>Zero Commission on Free Events</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-yellow-400" />
          <span>Instant QR Code Ticketing</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-yellow-400" />
          <span>99.9% Uptime Guarantee</span>
        </div>
      </motion.div>

      {/* Rich Interactive Mockup Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-5xl mt-16 group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 via-zinc-400/10 to-yellow-500/20 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative rounded-3xl border border-zinc-700/80 bg-zinc-950/90 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Silver Window Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-[11px] text-zinc-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              eventsphere.app/live-feed
            </div>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span className="font-semibold text-zinc-300">Live Sync</span>
            </div>
          </div>

          {/* Window Body with Simulated Live Event Cards */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 text-left bg-gradient-to-b from-zinc-950 via-zinc-900/40 to-zinc-950">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 hover:border-yellow-400/50 transition-all flex flex-col justify-between group/card">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    Tech Summit
                  </span>
                  <span className="text-xs text-zinc-400">Today, 5:00 PM</span>
                </div>
                <h4 className="text-base font-bold text-zinc-100 group-hover/card:text-yellow-400 transition-colors">
                  NextGen AI & Cloud Summit
                </h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Keynote sessions from industry leaders on agentic systems and scalable architecture.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300">
                  <Users className="w-3.5 h-3.5 text-yellow-400" /> 1,420 Attendees
                </span>
                <span className="text-yellow-400 font-semibold">Free RSVP</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl border border-yellow-400/30 bg-zinc-900/80 shadow-[0_0_20px_rgba(250,204,21,0.08)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-zinc-800 text-zinc-200 border border-zinc-700">
                    Design Lab
                  </span>
                  <span className="text-xs text-yellow-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
                    Happening Now
                  </span>
                </div>
                <h4 className="text-base font-bold text-zinc-100">
                  Global UI/UX Masterclass 2026
                </h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Live hands-on workshop covering advanced motion design, micro-interactions, and design tokens.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Virtual Stage 01
                </span>
                <span className="text-yellow-400 font-bold">$29.00</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl border border-zinc-800/80 bg-zinc-900/70 hover:border-yellow-400/50 transition-all flex flex-col justify-between group/card">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    Founders Meet
                  </span>
                  <span className="text-xs text-zinc-400">Tomorrow</span>
                </div>
                <h4 className="text-base font-bold text-zinc-100 group-hover/card:text-yellow-400 transition-colors">
                  Venture & Seed Networking Gala
                </h4>
                <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                  Connect with early-stage angel investors, venture partners, and high-growth builders.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300">
                  <Users className="w-3.5 h-3.5 text-yellow-400" /> 350 RSVP'd
                </span>
                <span className="text-yellow-400 font-semibold">Limited Seats</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
