"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, Sparkles } from "lucide-react"

export default function CalendarPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  // Generating calendar days for display
  const calendarDays = Array.from({ length: 35 }).map((_, i) => ({
    date: i + 1,
    isCurrentMonth: i >= 3 && i <= 33,
    events:
      i === 14
        ? [{ title: "AI Summit Keynote", time: "10:00 AM" }]
        : i === 21
        ? [{ title: "Design Expo Workshop", time: "02:00 PM" }]
        : i === 28
        ? [{ title: "Founders Mixer", time: "06:30 PM" }]
        : [],
    isToday: i === 14,
  }))

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto h-full pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" /> Auto-Sync Active
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white">Event Schedule</h2>
          <p className="text-zinc-400 text-sm mt-1">Review your scheduled events and RSVP timeline.</p>
        </div>
        
        <div className="flex items-center gap-3 bg-zinc-900 border border-zinc-800 rounded-2xl p-1.5 shadow-md">
          <button className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 hover:text-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-sm text-zinc-100 w-36 text-center">November 2026</span>
          <button className="p-2 hover:bg-zinc-800 rounded-xl transition-colors text-zinc-400 hover:text-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 bg-zinc-900/60 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col backdrop-blur-xl shadow-2xl"
      >
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-zinc-800 bg-zinc-950/60">
          {days.map((day) => (
            <div key={day} className="py-3.5 text-center text-xs font-bold uppercase tracking-wider text-zinc-400">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
          {calendarDays.map((day, i) => (
            <div 
              key={i} 
              className={`border-b border-r border-zinc-850 p-2 sm:p-2.5 min-h-[110px] transition-colors hover:bg-zinc-800/40 ${
                !day.isCurrentMonth ? "bg-zinc-950/60 opacity-30" : ""
              } ${i % 7 === 6 ? "border-r-0" : ""} ${i >= 28 ? "border-b-0" : ""}`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-xl transition-all ${
                  day.isToday 
                    ? "bg-yellow-400 text-zinc-950 shadow-md shadow-yellow-400/30 font-extrabold" 
                    : "text-zinc-400"
                }`}>
                  {day.isCurrentMonth ? day.date - 3 : day.date > 20 ? day.date - 20 : day.date}
                </span>
                {day.isToday && (
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest hidden sm:inline">
                    Today
                  </span>
                )}
              </div>
              
              <div className="mt-2 flex flex-col gap-1.5">
                {day.events.map((event, j) => (
                  <div 
                    key={j} 
                    className="text-[11px] bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20 px-2 py-1.5 rounded-lg border border-yellow-400/20 truncate font-semibold flex items-center gap-1.5 cursor-pointer transition-all shadow-sm group"
                  >
                    <CalendarIcon className="w-3 h-3 flex-shrink-0 text-yellow-400" />
                    <span className="truncate">{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
