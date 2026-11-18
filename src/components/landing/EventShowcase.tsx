"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ArrowUpRight, Search, Check, Sparkles } from "lucide-react"

export interface EventItem {
  id: string
  title: string
  category: string
  date: string
  time: string
  location: string
  image: string
  attendees: number
  price: string
  featured?: boolean
}

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Global AI & Architecture Summit 2026",
    category: "Tech",
    date: "Nov 28, 2026",
    time: "10:00 AM PST",
    location: "San Francisco, CA & Virtual",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    attendees: 1850,
    price: "Free",
    featured: true,
  },
  {
    id: "2",
    title: "Design Leadership & Micro-interactions Expo",
    category: "Design",
    date: "Dec 05, 2026",
    time: "02:00 PM EST",
    location: "New York City, NY",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    attendees: 940,
    price: "$49",
    featured: true,
  },
  {
    id: "3",
    title: "Venture Capital & Early Stage Founders Retreat",
    category: "Founders",
    date: "Dec 12, 2026",
    time: "09:30 AM GMT",
    location: "London, UK",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80",
    attendees: 420,
    price: "$120",
    featured: false,
  },
  {
    id: "4",
    title: "Acoustic Night & Electronic Sounds Festival",
    category: "Music",
    date: "Dec 20, 2026",
    time: "07:00 PM CET",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    attendees: 3100,
    price: "$35",
    featured: true,
  },
  {
    id: "5",
    title: "Enterprise Cybersecurity & DevSecOps Forum",
    category: "Tech",
    date: "Jan 10, 2027",
    time: "11:00 AM CST",
    location: "Austin, TX & Hybrid",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    attendees: 1200,
    price: "Free",
    featured: false,
  },
  {
    id: "6",
    title: "NextGen Brand Identity & Motion Workshop",
    category: "Design",
    date: "Jan 18, 2027",
    time: "01:00 PM PST",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    attendees: 680,
    price: "$65",
    featured: false,
  },
]

export function EventShowcase() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [rsvpdEvents, setRsvpdEvents] = React.useState<Record<string, boolean>>({})

  const categories = ["All", "Tech", "Design", "Founders", "Music"]

  const filteredEvents = INITIAL_EVENTS.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleRsvp = (id: string) => {
    setRsvpdEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="events" className="py-28 px-4 mx-auto max-w-7xl relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Discoveries</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Events</span>
          </h2>
          <p className="mt-2 text-zinc-400 max-w-xl text-base">
            Discover premier gatherings happening in-person and virtually across the globe.
          </p>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-200 hover:text-yellow-400 hover:border-yellow-400/40 text-sm font-semibold transition-all self-start md:self-auto"
        >
          View All Events
          <ArrowUpRight className="w-4 h-4 text-yellow-400" />
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl mb-10">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-zinc-950 shadow-md shadow-yellow-400/20"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search events or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-950/70 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400/50 transition-colors"
          />
        </div>
      </div>

      {/* Event Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => {
          const isRsvpd = rsvpdEvents[event.id]
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-yellow-400/50 hover:shadow-[0_0_35px_rgba(250,204,21,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-zinc-950/80 backdrop-blur-md text-yellow-400 border border-yellow-400/30">
                      {event.category}
                    </span>
                    {event.featured && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-yellow-400 text-zinc-950 shadow-md">
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 right-4 px-3 py-1 rounded-full text-xs font-extrabold bg-zinc-950/90 text-zinc-100 border border-zinc-800">
                    {event.price}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="mt-4 flex flex-col gap-2 text-xs sm:text-sm text-zinc-400">
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

              {/* Card Footer with RSVP */}
              <div className="p-6 pt-0 border-t border-zinc-800/80 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <Users className="w-4 h-4 text-yellow-400" />
                  <span>
                    <strong className="text-zinc-200">
                      {event.attendees + (isRsvpd ? 1 : 0)}
                    </strong>{" "}
                    Attending
                  </span>
                </div>

                <button
                  onClick={() => toggleRsvp(event.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isRsvpd
                      ? "bg-zinc-800 text-yellow-400 border border-yellow-400/40"
                      : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-md hover:scale-105"
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
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
