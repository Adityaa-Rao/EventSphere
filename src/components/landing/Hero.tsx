"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Users, MapPin, Check, QrCode, ShieldCheck, Clock, Ticket } from "lucide-react"

export function Hero() {
  const [demoRsvp, setDemoRsvp] = React.useState(false)

  return (
    <section className="relative pt-32 sm:pt-36 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Precision Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-zinc-900/80 text-xs text-zinc-300 mb-8 shadow-sm backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
        <span className="font-mono text-zinc-300 text-[11px] tracking-wide">EventSphere 2.0</span>
        <span className="text-zinc-600">•</span>
        <span className="text-zinc-400 text-[11px]">Verifiable Digital Pass Infrastructure</span>
        <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08]">
        The modern platform for <br className="hidden sm:inline" />
        <span className="text-gradient">memorable gatherings.</span>
      </h1>

      {/* Grounded Subheadline */}
      <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-2xl font-normal leading-relaxed">
        From closed-door founder salons to 5,000-seat developer conferences.
        Publish events, issue tamper-proof QR passes, and check in attendees in sub-second time.
      </p>

      {/* Direct CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <Link
          href="/events/create"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
        >
          <span>Host Your Event</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
        <Link
          href="/events"
          className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800/60 hover:border-white/[0.18] text-zinc-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4 text-yellow-400" />
          <span>Explore Public Catalog</span>
        </Link>
      </div>

      {/* Architectural Value Proofs */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-zinc-400 border-y border-white/[0.06] py-3.5 w-full max-w-4xl">
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Zero Ticketing Fees on Free Events</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Sub-Second Offline QR Check-in</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-yellow-400" />
          <span className="font-medium text-zinc-300">Native Apple & Google Calendar Sync</span>
        </div>
      </div>

      {/* Clean Interactive Platform Showcase */}
      <div className="mt-12 w-full max-w-5xl rounded-2xl border border-white/[0.08] bg-zinc-950 shadow-2xl overflow-hidden text-left">
        {/* Terminal Header Bar */}
        <div className="px-5 py-3 border-b border-white/[0.06] bg-zinc-900/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
            <span className="ml-2 text-xs font-mono text-zinc-400">eventsphere.app/events/demo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-mono text-zinc-300">Pass Verification Engine Active</span>
          </div>
        </div>

        {/* 2-Column Split: Event Detail & Live Digital Pass */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 bg-zinc-900/20">
          {/* Left: Event Card Summary */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 rounded-xl border border-white/[0.06] bg-zinc-900/40">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                  Global Flagship
                </span>
                <span className="text-xs font-mono text-zinc-400">Nov 28, 2026</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                AI Architecture & Distributed Systems Summit
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Production agentic design, multi-tenant cluster management, and edge machine learning deployment at scale.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-zinc-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <span>09:30 AM PST</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <span className="truncate">Moscone Center, SF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <span>1,840 / 2,000 RSVPs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <span className="text-yellow-400 font-bold">Complimentary Pass</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs text-zinc-400">
                Status: <strong className="text-emerald-400 font-semibold">{demoRsvp ? "Confirmed Attendee" : "Open for RSVP"}</strong>
              </span>
              <button
                onClick={() => setDemoRsvp(!demoRsvp)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5 ${
                  demoRsvp
                    ? "bg-zinc-800 text-yellow-400 border border-yellow-400/30"
                    : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-sm"
                }`}
              >
                {demoRsvp ? (
                  <>
                    <Check className="w-3.5 h-3.5" /> Pass Issued
                  </>
                ) : (
                  "Claim Free Pass"
                )}
              </button>
            </div>
          </div>

          {/* Right: Verifiable Ticket Pass Preview */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-xl border border-white/[0.06] bg-zinc-950/70 relative overflow-hidden">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-200">
                <QrCode className="w-4 h-4 text-yellow-400" />
                <span>Verifiable Gate Pass</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                VALID
              </span>
            </div>

            {/* QR Mock Module */}
            <div className="my-5 flex flex-col items-center">
              <div className="p-3 bg-white rounded-xl shadow-lg border border-zinc-200 flex flex-col items-center">
                <div className="w-32 h-32 grid grid-cols-7 gap-1 p-1 bg-white">
                  {Array.from({ length: 49 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-[1px] ${
                        i % 2 === 0 || i % 5 === 0 || i < 8 || i > 41
                          ? "bg-zinc-950"
                          : "bg-zinc-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="font-mono text-[11px] text-zinc-400 mt-3 font-semibold tracking-wider">
                PASS: ES-9F2A-4B81
              </span>
            </div>

            <div className="pt-3 border-t border-white/[0.06] text-[11px] text-zinc-400 flex items-center justify-between">
              <span className="flex items-center gap-1 text-zinc-300">
                <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" /> Signed on-chain
              </span>
              <span className="font-mono text-zinc-500">Scan at Entry Door</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
