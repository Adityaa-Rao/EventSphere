"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Users, MapPin, Sparkles, Check, QrCode } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Precision Pill Badge */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/90 text-xs font-medium text-zinc-300 mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-yellow-400" />
        <span className="font-mono text-zinc-300">EventSphere 2.0</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-400">Independent Gathering Infrastructure</span>
        <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.08]">
        The platform for <br className="hidden sm:inline" />
        <span className="text-gradient">memorable gatherings.</span>
      </h1>

      {/* Grounded Subheadline */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
        From closed-door founder salons to 5,000-seat engineering conferences.
        Publish your event, issue verifiable QR passes, and manage attendees with zero friction.
      </p>

      {/* Direct CTA Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
        <Link
          href="/events/create"
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
        >
          <span>Host Your Event</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
        <Link
          href="/events"
          className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span>Explore Public Catalog</span>
        </Link>
      </div>

      {/* Architectural Value Proofs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-400 border-t border-b border-zinc-850 py-4 w-full max-w-4xl">
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Zero Ticketing Fees on Free Events</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Offline-Capable QR Gate Check-ins</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Native Calendar & Wallet Pass Sync</span>
        </div>
      </div>

      {/* Live Interactive Preview Card Board */}
      <div className="mt-14 w-full max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden text-left">
        {/* Terminal / Browser Toolbar */}
        <div className="px-5 py-3 border-b border-zinc-850 bg-zinc-900/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="ml-2 text-xs font-mono text-zinc-400">eventsphere.app/events</span>
          </div>
          <span className="text-[11px] font-mono text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded border border-yellow-400/20">
            Realtime Schedule Active
          </span>
        </div>

        {/* Live Grid Inside Preview */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-5 bg-zinc-900/30">
          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-yellow-400 font-bold">
                  Tech
                </span>
                <span className="text-xs text-zinc-400 font-mono">Nov 28</span>
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-1">AI Architecture Summit</h4>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                Production agentic design, distributed clusters, and edge machine learning deployment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-yellow-400" /> 1,840 RSVPs
              </span>
              <span className="text-yellow-400 font-bold">Free</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-yellow-400/40 bg-zinc-900/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-yellow-400 text-zinc-950 font-extrabold">
                  Design
                </span>
                <span className="text-xs text-yellow-400 font-mono font-semibold">Dec 05</span>
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-1">Micro-interactions Lab</h4>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                Physics-based motion, spatial typography, and high-frame-rate UI rendering.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-yellow-400" /> 640 RSVPs
              </span>
              <span className="text-yellow-400 font-bold">$49</span>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:border-zinc-700 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 text-yellow-400 font-bold">
                  Founders
                </span>
                <span className="text-xs text-zinc-400 font-mono">Dec 12</span>
              </div>
              <h4 className="text-sm font-bold text-white line-clamp-1">Founders Salon</h4>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                Closed-door peer salon on runway management, GTM distribution, and early traction.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-zinc-400 flex items-center gap-1">
                <Users className="w-3 h-3 text-yellow-400" /> 310 RSVPs
              </span>
              <span className="text-yellow-400 font-bold">$120</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
