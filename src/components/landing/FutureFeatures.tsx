"use client"

import { motion } from "framer-motion"
import { Brain, MessageSquare, Calendar, Zap, Sparkles, Shield } from "lucide-react"

const features = [
  {
    title: "AI Recommendations",
    description: "Our neural engine suggests events based on your interests and past attendance with 99% accuracy.",
    icon: Brain,
    color: "from-purple-500 to-indigo-500",
    delay: 0.1
  },
  {
    title: "Real-time Chat",
    description: "Seamless networking with attendees and organizers directly within the event space.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    delay: 0.2
  },
  {
    title: "Smart Scheduling",
    description: "Automated conflict resolution and calendar sync across all your favorite platforms.",
    icon: Calendar,
    color: "from-emerald-500 to-teal-500",
    delay: 0.3
  },
  {
    title: "Instant Verification",
    description: "Blockchain-backed ticket verification ensuring zero fraud and instant entry.",
    icon: Shield,
    color: "from-orange-500 to-red-500",
    delay: 0.4
  }
]

export function FutureFeatures() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/20"
          >
            <Sparkles className="w-3 h-3" />
            <span>Coming Soon</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Future of <span className="text-gradient">Event Management</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're building the next generation of tools to make your event experience seamless, interactive, and intelligent.
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
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl glass-card hover:bg-white/10 dark:hover:bg-zinc-900/60 transition-all border-white/10"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
              
              {/* Decorative Glow */}
              <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
