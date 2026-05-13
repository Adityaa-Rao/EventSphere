"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, BellRing, Sparkles, Users, Search, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Effortlessly manage your events with our drag-and-drop calendar and timezone-aware scheduling system.",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    description: "Discover events tailored to your interests using our advanced AI recommendation engine.",
  },
  {
    icon: BellRing,
    title: "Real-time Alerts",
    description: "Stay in the loop with instant push notifications, email reminders, and real-time event updates.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join vibrant communities, network with attendees, and participate in real-time event chats.",
  },
  {
    icon: Search,
    title: "Powerful Discovery",
    description: "Find exactly what you're looking for with our advanced search, filtering, and categorization system.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Ticketing",
    description: "Built-in RSVP system with secure QR code ticketing and seamless check-in processes.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 mx-auto max-w-7xl">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-5xl">Everything you need</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
          We've built all the tools you need to create, manage, and discover world-class events in one premium platform.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 transition-all border rounded-2xl glass-card hover:-translate-y-1 hover:shadow-primary/10"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary/10 text-primary">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
