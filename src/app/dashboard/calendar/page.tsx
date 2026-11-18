"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, MapPin, Sparkles, Tag } from "lucide-react"
import { useEvents, EventItem } from "@/lib/events-store"

export default function CalendarPage() {
  const { events, rsvps, loaded } = useEvents()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  
  // Map events to day numbers in the active month
  const calendarDays = React.useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => {
      const dayNumber = i + 1
      const isCurrentMonth = i >= 3 && i <= 33
      const adjustedDate = dayNumber - 3

      // Find events that match this day or distribute across days
      const matchedEvents: EventItem[] = []
      events.forEach((evt) => {
        // Check if date contains this day number or if it's user created
        const dayString = String(adjustedDate).padStart(2, "0")
        if (evt.date && evt.date.endsWith(`-${dayString}`) && isCurrentMonth) {
          matchedEvents.push(evt)
        }
      })

      // Add a couple default anchor days if empty
      if (adjustedDate === 14 && isCurrentMonth && matchedEvents.length === 0 && events[0]) {
        matchedEvents.push(events[0])
      }
      if (adjustedDate === 21 && isCurrentMonth && matchedEvents.length === 0 && events[1]) {
        matchedEvents.push(events[1])
      }

      return {
        date: adjustedDate,
        isCurrentMonth,
        events: matchedEvents,
        isToday: adjustedDate === 18, // current date simulation
      }
    })
  }, [events])

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto h-full pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
              Interactive Schedule
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">My Calendar</h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-0.5">
            Auto-synced with all your hosted gatherings and confirmed RSVP passes.
          </p>
        </div>
        
        <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl p-1 shadow-sm">
          <button className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-bold text-xs sm:text-sm text-zinc-200 w-32 text-center">November 2026</span>
          <button className="p-1.5 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-white">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-xl">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-zinc-800 bg-zinc-950/60">
          {days.map((day) => (
            <div key={day} className="py-2.5 text-center text-xs font-bold uppercase tracking-wider text-zinc-400">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
          {calendarDays.map((day, i) => (
            <div 
              key={i} 
              className={`border-b border-r border-zinc-850/80 p-2 min-h-[110px] transition-colors hover:bg-zinc-850/30 ${
                !day.isCurrentMonth ? "bg-zinc-950/60 opacity-30" : ""
              } ${i % 7 === 6 ? "border-r-0" : ""} ${i >= 28 ? "border-b-0" : ""}`}
            >
              <div className="flex justify-between items-start">
                <span className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-lg ${
                  day.isToday 
                    ? "bg-yellow-400 text-zinc-950 font-extrabold shadow-sm" 
                    : "text-zinc-400"
                }`}>
                  {day.isCurrentMonth ? day.date : ""}
                </span>
                {day.isToday && (
                  <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest hidden sm:inline">
                    Today
                  </span>
                )}
              </div>
              
              <div className="mt-1.5 flex flex-col gap-1">
                {day.events.map((evt) => (
                  <div 
                    key={evt.id} 
                    className={`text-[10px] px-2 py-1 rounded border truncate font-medium flex items-center gap-1 cursor-pointer transition-colors ${
                      evt.isUserCreated
                        ? "bg-yellow-400/15 text-yellow-400 border-yellow-400/30 hover:bg-yellow-400/25"
                        : "bg-zinc-800/80 text-zinc-300 border-zinc-700 hover:text-white"
                    }`}
                    title={`${evt.title} (${evt.time})`}
                  >
                    <CalendarIcon className="w-2.5 h-2.5 flex-shrink-0" />
                    <span className="truncate">{evt.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
