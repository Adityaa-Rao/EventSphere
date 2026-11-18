"use client"

import * as React from "react"
import { Star, Sparkles } from "lucide-react"

const testimonials = [
  {
    quote: "Gate check-in times dropped to under two seconds per attendee with zero mobile app installs needed. Clean, fast, and completely reliable.",
    author: "Elena Rostova",
    role: "Lead Curator, PixelCraft Design Salon",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote: "Handled our 2,500-person engineering summit without a hitch. The drag-and-drop agenda coordination and automatic timezone sync saved our team dozens of hours.",
    author: "Marcus Vance",
    role: "Co-Founder, CloudPulse Summit",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
  },
  {
    quote: "Our attendees loved having clean digital QR passes directly in their browser and calendar without being forced through promotional marketing funnels.",
    author: "Sarah Lin",
    role: "Director of Programs, TechNordic",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 mx-auto max-w-7xl">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Operator Perspectives</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Trusted by <span className="text-gradient">Independent Organizers</span>
        </h2>
        <p className="mt-2 text-zinc-400 max-w-lg mx-auto text-sm sm:text-base">
          Proven across technical summits, intimate executive salons, and international festivals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-zinc-850">
              <img
                src={item.avatar}
                alt={item.author}
                className="w-10 h-10 rounded-full object-cover border border-zinc-700"
              />
              <div>
                <h4 className="text-xs font-bold text-white">{item.author}</h4>
                <p className="text-[11px] text-zinc-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
