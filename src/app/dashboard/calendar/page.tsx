"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react"

export default function CalendarPage() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  // Generating mock calendar days
  const calendarDays = Array.from({ length: 35 }).map((_, i) => ({
    date: i + 1,
    isCurrentMonth: i >= 3 && i <= 33,
    events: i === 14 ? [{ title: "Design Summit", time: "09:00 AM" }] : i === 22 ? [{ title: "Tech Conf", time: "10:00 AM" }] : [],
    isToday: i === 14,
  }))

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Calendar</h2>
          <p className="text-muted-foreground mt-1">Manage your schedule and upcoming events.</p>
        </div>
        
        <div className="flex items-center gap-4 bg-card border rounded-xl p-1">
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold w-32 text-center">October 2026</span>
          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 bg-card border rounded-3xl overflow-hidden flex flex-col glass-card"
      >
        <div className="grid grid-cols-7 border-b">
          {days.map((day) => (
            <div key={day} className="py-4 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
          {calendarDays.map((day, i) => (
            <div 
              key={i} 
              className={`border-b border-r p-2 min-h-[120px] transition-colors hover:bg-white/5 ${
                !day.isCurrentMonth ? "bg-black/10 opacity-50" : ""
              } ${i % 7 === 6 ? "border-r-0" : ""} ${i >= 28 ? "border-b-0" : ""}`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-sm font-medium w-8 h-8 flex items-center justify-center rounded-full ${
                  day.isToday ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                }`}>
                  {day.isCurrentMonth ? day.date - 3 : day.date > 20 ? day.date - 20 : day.date}
                </span>
              </div>
              
              <div className="mt-2 flex flex-col gap-1">
                {day.events.map((event, j) => (
                  <div key={j} className="text-xs bg-primary/20 text-primary px-2 py-1.5 rounded-md border border-primary/20 truncate font-medium flex items-center gap-1 cursor-pointer hover:bg-primary/30 transition-colors">
                    <CalendarIcon className="w-3 h-3 flex-shrink-0" />
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
