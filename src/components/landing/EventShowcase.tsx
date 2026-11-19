"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowUpRight, Search, Check, Sparkles, X } from "lucide-react"
import { useEvents } from "@/lib/events-store"

export function EventShowcase() {
  const { events, rsvps, toggleRsvp } = useEvents()
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")

  const categories = ["All", "Tech", "Design", "Founders", "Music"]

  const filteredEvents = React.useMemo(() => {
    return events.slice(0, 6).filter((event) => {
      const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [events, selectedCategory, searchQuery])

  return (
    <section id="events" className="py-20 px-4 mx-auto max-w-7xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Catalog</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="mt-2 text-zinc-400 max-w-xl text-sm sm:text-base">
            Discover premier gatherings happening in-person and virtually across the globe.
          </p>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800/60 hover:border-white/[0.18] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold transition-all self-start md:self-auto"
        >
          View All Events ({events.length})
          <ArrowUpRight className="w-4 h-4 text-yellow-400" />
        </Link>
      </div>

      {/* Clean Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-2.5 rounded-2xl border border-white/[0.08] bg-zinc-900/50 backdrop-blur-xl mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-zinc-950 font-bold shadow-sm"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950/80 border border-white/[0.08] rounded-lg pl-8 pr-8 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white p-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => {
          const isRsvpd = rsvps[event.id]
          return (
            <div
              key={event.id}
              className="group rounded-2xl border border-white/[0.08] bg-zinc-900/40 hover:border-white/[0.18] hover:bg-zinc-900/60 transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-950">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-950/90 backdrop-blur-md text-yellow-400 border border-yellow-400/30">
                      {event.category}
                    </span>
                    {event.isUserCreated && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide bg-yellow-400 text-zinc-950 shadow-sm">
                        Host
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md text-xs font-bold bg-zinc-950/90 text-zinc-200 border border-white/[0.08]">
                    {event.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5">
                  <Link href="/events">
                    <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                  </Link>

                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mt-4 flex flex-col gap-1.5 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                      <span>{event.date}</span>
                      <span className="text-zinc-600">•</span>
                      <Clock className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with RSVP */}
              <div className="p-5 pt-0 border-t border-white/[0.06] mt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Users className="w-3.5 h-3.5 text-yellow-400" />
                  <span>
                    <strong className="text-zinc-200 font-medium">{event.attendees}</strong> Attending
                  </span>
                </div>

                <button
                  onClick={() => toggleRsvp(event.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                    isRsvpd
                      ? "bg-zinc-800 text-yellow-400 border border-yellow-400/30"
                      : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-sm"
                  }`}
                >
                  {isRsvpd ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> RSVP Confirmed
                    </>
                  ) : (
                    "Instant RSVP"
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
