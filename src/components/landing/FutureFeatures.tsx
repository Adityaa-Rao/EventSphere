"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, Calendar, Shield, Sparkles } from "lucide-react"

const features = [
  {
    title: "Neural AI Matchmaker",
    description: "Deep contextual recommendations based on career trajectory, technical interests, and past event interactions.",
    icon: Brain,
    badge: "AI 2.0",
    delay: 0.1,
  },
  {
    title: "Live Backchannel Chat",
    description: "End-to-end encrypted breakout messaging and direct networking hubs built right inside live event streams.",
    icon: MessageSquare,
    badge: "Interactive",
    delay: 0.2,
  },
  {
    title: "Autonomous Schedule Sync",
    description: "Dynamic conflict resolution that updates calendars automatically when organizers adjust speaker agendas.",
    icon: Calendar,
    badge: "Automated",
    delay: 0.3,
  },
  {
    title: "Cryptographic Pass Verification",
    description: "Cryptographically signed digital passes guaranteeing zero duplicate entries and rapid turnstile passage.",
    icon: Shield,
    badge: "Security",
    delay: 0.4,
  },
]

export function FutureFeatures() {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/80 border-t border-zinc-800">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slate-300/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 fill-yellow-400" />
            <span>Product Roadmap</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white">
            The Next Evolution of <span className="text-gradient">Event Tech</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto">
            We are pushing the boundaries of event infrastructure with intelligent automation and real-time collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              whileHover={{ y: -6 }}
              className="group relative p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-yellow-400/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-zinc-950 transition-all duration-300 shadow-md">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-zinc-100 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span className="text-zinc-400 font-mono">Q3/Q4 2026</span>
                <span className="text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">In Development →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
