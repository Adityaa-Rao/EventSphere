"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, BellRing, Sparkles, Users, Search, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling & Timezones",
    description: "Effortlessly plan and schedule events with automatic multi-timezone conversion, calendar sync, and conflict detection.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Event Matching",
    description: "Discover curated workshops, conferences, and meetups matched to your passions through our neural recommendation engine.",
  },
  {
    icon: BellRing,
    title: "Real-time Alerts & Reminders",
    description: "Stay ahead with push notifications, calendar reminders, SMS updates, and instant announcements from organizers.",
  },
  {
    icon: Users,
    title: "Active Community Networks",
    description: "Connect with high-caliber attendees, participate in interactive group discussions, and build lifelong professional relationships.",
  },
  {
    icon: Search,
    title: "Instant Multi-Filter Discovery",
    description: "Filter events seamlessly across categories, pricing, date ranges, virtual or in-person venues with live search.",
  },
  {
    icon: ShieldCheck,
    title: "Verified QR Code Check-ins",
    description: "Anti-counterfeit digital ticket passes with fast contactless QR code scanning for seamless gate entry.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-28 px-4 mx-auto max-w-7xl relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-slate-300/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Capabilities</span>
        </motion.div>

        <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl md:text-5xl tracking-tight text-white">
          Engineered for <span className="text-gradient">perfection.</span>
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-zinc-400">
          Everything creators and organizers need to deliver seamless, world-class experiences from registration to wrap-up.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="p-7 transition-all duration-300 border rounded-2xl border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900/90 hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.12)] group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-zinc-950 transition-all duration-300">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
              <span>Enterprise Grade</span>
              <span className="text-yellow-400 font-medium">Included →</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
