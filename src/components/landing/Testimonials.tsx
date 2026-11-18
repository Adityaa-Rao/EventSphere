"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Star, Quote, Sparkles } from "lucide-react"

const testimonials = [
  {
    quote:
      "EventSphere transformed how our design community runs international summits. The RSVP flow and seamless timezone conversions are unmatched.",
    author: "Elena Rostova",
    role: "Head of Community at PixelCraft",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "We hosted 3,000+ developers across 14 countries. Ticketing was instantaneous, zero server lag, and our attendees loved the sleek interface.",
    author: "Marcus Vance",
    role: "Founder & CTO at CloudPulse",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    rating: 5,
  },
  {
    quote:
      "The best event management tool I have used in 10 years. Beautiful dark mode, ultra-fast check-in QR codes, and phenomenal organizer analytics.",
    author: "Sarah Lin",
    role: "Event Director at Nexus Summits",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 px-4 mx-auto max-w-7xl relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real Community Feedback</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Loved by <span className="text-gradient">Creators & Attendees</span>
        </h2>
        <p className="mt-3 text-zinc-400 max-w-xl mx-auto text-base">
          See why top companies, meetups, and creators choose EventSphere for their flagship experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)] transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-zinc-700 group-hover:text-yellow-400/30 transition-colors" />
              </div>

              <p className="text-zinc-300 text-base leading-relaxed italic mb-8">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-zinc-800/80">
              <img
                src={item.avatar}
                alt={item.author}
                className="w-12 h-12 rounded-full object-cover border border-zinc-700"
              />
              <div>
                <h4 className="text-sm font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors">
                  {item.author}
                </h4>
                <p className="text-xs text-zinc-400">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
