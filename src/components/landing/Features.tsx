"use client"

import * as React from "react"
import { Calendar, BellRing, Sparkles, Users, QrCode, CreditCard, Layers } from "lucide-react"

const features = [
  {
    icon: QrCode,
    title: "Sub-Second Gate Scanning",
    description: "Issue tamper-proof QR passes. Organizers can scan and verify attendee badges at the door directly from any mobile phone browser—even offline.",
  },
  {
    icon: Layers,
    title: "Multi-Track Agenda Coordination",
    description: "Organize main stages, interactive workshops, and lightning rounds with drag-and-drop ease and multi-timezone resolution.",
  },
  {
    icon: Users,
    title: "Realtime Capacity & Waitlists",
    description: "Automated ticket inventory management that instantly recycles unconfirmed holds and invites waitlisted attendees without manual intervention.",
  },
  {
    icon: Calendar,
    title: "One-Click Calendar Sync",
    description: "Native .ics exports and deep links for Google Calendar, Apple iCal, and Outlook that automatically update if session times change.",
  },
  {
    icon: CreditCard,
    title: "Direct Stripe Settlement",
    description: "Sell tickets across 135+ currencies and local payment methods with funds sent straight to your connected bank account.",
  },
  {
    icon: BellRing,
    title: "Instant Push & SMS Alerts",
    description: "Broadcast room changes, emergency updates, or session reminders to all attendees or specific ticket tiers simultaneously.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 mx-auto max-w-7xl">
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Infrastructure</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Built for operators who <span className="text-gradient">care about craft.</span>
        </h2>
        <p className="max-w-xl mx-auto text-sm sm:text-base text-zinc-400 mt-2">
          Every tool you need to run seamless gatherings, stripped of bloat and engineered for reliability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/40 hover:border-yellow-400/30 hover:bg-zinc-900/70 transition-all duration-200 flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center mb-4 transition-transform group-hover:scale-105">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
