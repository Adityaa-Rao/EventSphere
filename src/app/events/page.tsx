"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { INITIAL_EVENTS, EventItem } from "@/components/landing/EventShowcase"
import { Calendar, Clock, MapPin, Users, Plus, Search, Filter, Check, ArrowLeft, Tag } from "lucide-react"

export default function EventsDiscoveryPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [priceFilter, setPriceFilter] = React.useState("All")
  const [rsvpd, setRsvpd] = React.useState<Record<string, boolean>>({})
  const [selectedEventModal, setSelectedEventModal] = React.useState<EventItem | null>(null)

  const categories = ["All", "Tech", "Design", "Founders", "Music"]
  const priceOptions = ["All", "Free", "Paid"]

  const filteredEvents = INITIAL_EVENTS.filter((e) => {
    const matchesCat = selectedCategory === "All" || e.category === selectedCategory
    const matchesSearch =
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice =
      priceFilter === "All"
        ? true
        : priceFilter === "Free"
        ? e.price.toLowerCase() === "free"
        : e.price.toLowerCase() !== "free"
    return matchesCat && matchesSearch && matchesPrice
  })

  const handleRsvp = (id: string) => {
    setRsvpd((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-yellow-400 selection:text-zinc-950">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pt-32 pb-24">
        {/* Header Breadcrumb & Heading */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-yellow-400 transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-yellow-400">
                Live Event Catalog
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-1 text-white">
                Explore <span className="text-gradient">Events Worldwide</span>
              </h1>
              <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-xl">
                Browse workshops, summits, hackathons, and gatherings. RSVP with 1 click to save your spot.
              </p>
            </div>

            <Link
              href="/events/create"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-zinc-950 font-bold text-sm shadow-lg hover:shadow-yellow-400/25 hover:scale-105 transition-all self-start md:self-auto"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              Host Your Event
            </Link>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="p-4 rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl mb-10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-yellow-400" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-yellow-400 text-zinc-950 font-bold shadow-md shadow-yellow-400/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Price filter */}
            <div className="flex items-center gap-1 bg-zinc-950/80 border border-zinc-800 rounded-xl p-1">
              {priceOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setPriceFilter(opt)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    priceFilter === opt
                      ? "bg-zinc-800 text-yellow-400 font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-400">
          <span>
            Showing <strong className="text-yellow-400">{filteredEvents.length}</strong> events
          </span>
          <span>Updated just now</span>
        </div>

        {/* Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="p-16 text-center border border-dashed border-zinc-800 rounded-3xl bg-zinc-900/30">
            <Tag className="w-10 h-10 text-yellow-400/40 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-zinc-200">No events found</h3>
            <p className="text-zinc-500 text-sm mt-1">Try adjusting your filters or search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategory("All")
                setSearchQuery("")
                setPriceFilter("All")
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-yellow-400 text-zinc-950 text-xs font-bold hover:bg-yellow-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, idx) => {
              const isEventRsvpd = rsvpd[event.id]
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md text-yellow-400 border border-yellow-400/30">
                          {event.category}
                        </span>
                        {event.featured && (
                          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-400 text-zinc-950">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full text-xs font-extrabold bg-zinc-950/90 text-zinc-100 border border-zinc-800">
                        {event.price}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="mt-4 flex flex-col gap-2 text-xs text-zinc-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span>{event.date}</span>
                          <span className="text-zinc-600">•</span>
                          <Clock className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-zinc-800/80 mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <Users className="w-4 h-4 text-yellow-400" />
                      <span>{event.attendees + (isEventRsvpd ? 1 : 0)} Attending</span>
                    </div>

                    <button
                      onClick={() => handleRsvp(event.id)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        isEventRsvpd
                          ? "bg-zinc-800 text-yellow-400 border border-yellow-400/40"
                          : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-md hover:scale-105"
                      }`}
                    >
                      {isEventRsvpd ? (
                        <>
                          <Check className="w-3.5 h-3.5" /> RSVP Confirmed
                        </>
                      ) : (
                        "Instant RSVP"
                      )}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
