"use client"

import * as React from "react"
import Link from "next/link"
import { Navbar } from "@/components/landing/Navbar"
import { Footer } from "@/components/landing/Footer"
import { useEvents, EventItem } from "@/lib/events-store"
import { UniqueQrCode } from "@/components/unique-qr-code"
import { Calendar, Clock, MapPin, Users, Plus, Search, Filter, Check, ArrowLeft, Tag, QrCode, ExternalLink, X, Sparkles, User, Share2, Trash2 } from "lucide-react"

export default function EventsDiscoveryPage() {
  const { events, rsvps, loaded, toggleRsvp, removeEvent } = useEvents()

  const [selectedCategory, setSelectedCategory] = React.useState<string>("All")
  const [scopeFilter, setScopeFilter] = React.useState<"all" | "mine" | "rsvpd">("all")
  const [searchQuery, setSearchQuery] = React.useState("")
  const [priceFilter, setPriceFilter] = React.useState<"All" | "Free" | "Paid">("All")
  const [activeModalEvent, setActiveModalEvent] = React.useState<EventItem | null>(null)
  const [toastMessage, setToastMessage] = React.useState<string | null>(null)

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalEvent(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const categories = ["All", "Tech", "Design", "Founders", "Music", "Community"]
  const priceOptions: ("All" | "Free" | "Paid")[] = ["All", "Free", "Paid"]

  const userCreatedCount = events.filter((e) => e.isUserCreated).length
  const rsvpdCount = Object.values(rsvps).filter(Boolean).length

  // Filter events reactively
  const filteredEvents = React.useMemo(() => {
    return events.filter((e) => {
      // Scope filter
      if (scopeFilter === "mine" && !e.isUserCreated) return false
      if (scopeFilter === "rsvpd" && !rsvps[e.id]) return false

      // Category filter
      if (selectedCategory !== "All" && e.category !== selectedCategory) return false

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = e.title.toLowerCase().includes(query)
        const matchesLoc = e.location.toLowerCase().includes(query)
        const matchesDesc = e.description?.toLowerCase().includes(query)
        if (!matchesTitle && !matchesLoc && !matchesDesc) return false
      }

      // Price filter
      if (priceFilter === "Free" && e.price.toLowerCase() !== "free") return false
      if (priceFilter === "Paid" && e.price.toLowerCase() === "free") return false

      return true
    })
  }, [events, rsvps, scopeFilter, selectedCategory, searchQuery, priceFilter])

  const handleShare = (event: EventItem) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/events?id=${event.id}`)
      setToastMessage("Event link copied to clipboard!")
      setTimeout(() => setToastMessage(null), 2500)
    }
  }

  const handleDelete = (event: EventItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation()
    const confirmDelete = window.confirm(`Are you sure you want to remove "${event.title}" from the catalog?`)
    if (confirmDelete) {
      removeEvent(event.id)
      if (activeModalEvent?.id === event.id) {
        setActiveModalEvent(null)
      }
      setToastMessage(`"${event.title}" has been removed.`)
      setTimeout(() => setToastMessage(null), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-yellow-400 selection:text-zinc-950">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pt-32 pb-24">
        {/* Breadcrumb & Editorial Header */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-yellow-400" /> Back to Home
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-850">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                  Live Event Registry
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Explore <span className="text-gradient">Curated Gatherings</span>
              </h1>
              <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-2xl leading-relaxed">
                Discover summits, technical workshops, and salons. Create your own event or RSVP to secure your digital pass.
              </p>
            </div>

            <Link
              href="/events/create"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all self-start md:self-auto active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              Host an Event
            </Link>
          </div>
        </div>

        {/* Scope Tabs (All / My Events / My RSVPs) */}
        <div className="flex items-center gap-2 mb-6 border-b border-zinc-850 pb-3">
          <button
            onClick={() => setScopeFilter("all")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
              scopeFilter === "all"
                ? "bg-zinc-850 text-white border border-zinc-700"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            All Events ({events.length})
          </button>
          <button
            onClick={() => setScopeFilter("mine")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              scopeFilter === "mine"
                ? "bg-yellow-400/15 text-yellow-400 border border-yellow-400/30"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>My Created Events</span>
            {userCreatedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-yellow-400 text-zinc-950 text-[10px] flex items-center justify-center font-extrabold">
                {userCreatedCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setScopeFilter("rsvpd")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
              scopeFilter === "rsvpd"
                ? "bg-zinc-850 text-white border border-zinc-700"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            <span>My RSVPs</span>
            {rsvpdCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-zinc-700 text-white text-[10px] flex items-center justify-center font-bold">
                {rsvpdCount}
              </span>
            )}
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-yellow-400 text-zinc-950 font-bold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Pricing & Search */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded-lg p-1">
              {priceOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setPriceFilter(opt)}
                  className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                    priceFilter === opt
                      ? "bg-zinc-800 text-yellow-400 font-bold"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search title, venue..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Counter & Toast Notice */}
        <div className="mb-6 flex items-center justify-between text-xs text-zinc-400">
          <span>
            Displaying <strong className="text-white">{filteredEvents.length}</strong> events
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </span>
          {toastMessage && (
            <span className="text-yellow-400 font-bold bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/20 animate-in fade-in">
              {toastMessage}
            </span>
          )}
        </div>

        {/* Cards Grid */}
        {filteredEvents.length === 0 ? (
          <div className="py-20 px-6 text-center border border-dashed border-zinc-800 rounded-2xl bg-zinc-900/20">
            <Tag className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white">No matching events</h3>
            <p className="text-zinc-500 text-xs mt-1 max-w-sm mx-auto">
              {scopeFilter === "mine"
                ? "You haven't created any events yet. Click below to host your first gathering."
                : "Try resetting your search query or switching categories."}
            </p>
            {scopeFilter === "mine" ? (
              <Link
                href="/events/create"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-yellow-400 text-zinc-950 text-xs font-bold hover:bg-yellow-300 transition-all"
              >
                <Plus className="w-3.5 h-3.5 stroke-[2.5]" /> Create an Event
              </Link>
            ) : (
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchQuery("")
                  setPriceFilter("All")
                  setScopeFilter("all")
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-semibold hover:bg-zinc-700"
              >
                Reset All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => {
              const isEventRsvpd = rsvps[event.id]
              return (
                <div
                  key={event.id}
                  className="rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all duration-200 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Cover Photo */}
                    <div
                      onClick={() => setActiveModalEvent(event)}
                      className="relative aspect-[16/10] overflow-hidden bg-zinc-950 cursor-pointer"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-950/90 backdrop-blur-md text-yellow-400 border border-yellow-400/30">
                          {event.category}
                        </span>
                        {event.isUserCreated && (
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide bg-yellow-400 text-zinc-950 shadow-sm flex items-center gap-1">
                            <Sparkles className="w-3 h-3 fill-zinc-950" /> Host
                          </span>
                        )}
                      </div>

                      <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-md text-xs font-bold bg-zinc-950/90 text-zinc-200 border border-zinc-800">
                        {event.price}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-5">
                      <h3
                        onClick={() => setActiveModalEvent(event)}
                        className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {event.title}
                      </h3>

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

                  {/* Footer */}
                  <div className="p-5 pt-0 border-t border-zinc-850/80 mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                      <Users className="w-3.5 h-3.5 text-yellow-400" />
                      <span>
                        <strong className="text-zinc-200">{event.attendees}</strong> Attending
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {/* Delete option for user-created events */}
                      {event.isUserCreated && (
                        <button
                          onClick={(e) => handleDelete(event, e)}
                          className="p-2 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Remove this event"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => handleShare(event)}
                        className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                        title="Share event link"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => toggleRsvp(event.id)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 ${
                          isEventRsvpd
                            ? "bg-zinc-800 text-yellow-400 border border-yellow-400/30"
                            : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-sm"
                        }`}
                      >
                        {isEventRsvpd ? (
                          <>
                            <Check className="w-3.5 h-3.5" /> Confirmed
                          </>
                        ) : (
                          "RSVP"
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>

      {/* Event Details & Unique QR Digital Pass Modal */}
      {activeModalEvent && (
        <div 
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalEvent(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in-50 cursor-pointer"
        >
          <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-zinc-850 bg-zinc-950 p-6 shadow-2xl cursor-default">
            {/* Top Close Button with text and icon */}
            <button
              onClick={() => setActiveModalEvent(null)}
              className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-850 text-xs font-semibold flex items-center gap-1.5 transition-colors z-10 shadow-sm"
            >
              <X className="w-3.5 h-3.5" />
              <span>Close</span>
            </button>

            {/* Banner */}
            <div className="aspect-[21/9] rounded-xl overflow-hidden border border-zinc-800 mb-5 relative">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-zinc-950/90 text-yellow-400 border border-yellow-400/30">
                {activeModalEvent.category}
              </span>
              {activeModalEvent.isUserCreated && (
                <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-yellow-400 text-zinc-950">
                  Created by You
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
              <User className="w-3.5 h-3.5 text-yellow-400" />
              <span>Organized by <strong className="text-zinc-200">{activeModalEvent.organizer}</strong></span>
            </div>

            <h2 className="text-xl font-bold text-white mb-2">
              {activeModalEvent.title}
            </h2>

            <p className="text-xs text-zinc-400 leading-relaxed mb-5">
              {activeModalEvent.description}
            </p>

            {/* Logistics Grid */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-xl border border-zinc-850 bg-zinc-900/60 text-xs mb-5">
              <div>
                <span className="text-zinc-500 block mb-0.5">Date & Time</span>
                <span className="text-zinc-200 font-semibold">{activeModalEvent.date} • {activeModalEvent.time}</span>
              </div>
              <div>
                <span className="text-zinc-500 block mb-0.5">Location</span>
                <span className="text-zinc-200 font-semibold truncate block">{activeModalEvent.location}</span>
              </div>
              <div>
                <span className="text-zinc-500 block mb-0.5">Ticket Tier</span>
                <span className="text-yellow-400 font-bold">{activeModalEvent.price}</span>
              </div>
              <div>
                <span className="text-zinc-500 block mb-0.5">Capacity</span>
                <span className="text-zinc-200 font-semibold">
                  {activeModalEvent.attendees} / {activeModalEvent.capacity} seats filled
                </span>
              </div>
            </div>

            {/* UNIQUE QR CODE PASS CONTAINER */}
            <div className="mb-6 flex flex-col items-center">
              <div className="w-full flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <QrCode className="w-4 h-4 text-yellow-400" /> Unique Event Pass
                </span>
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                  rsvps[activeModalEvent.id]
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                    : "bg-zinc-800 text-zinc-400"
                }`}>
                  {rsvps[activeModalEvent.id] ? "Pass Valid" : "Unreserved"}
                </span>
              </div>

              {/* Render unique generated QR code specifically for this event */}
              <UniqueQrCode
                eventId={activeModalEvent.id}
                eventTitle={activeModalEvent.title}
                size={160}
              />
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-850">
              {/* Remove button if user created */}
              {activeModalEvent.isUserCreated ? (
                <button
                  onClick={() => handleDelete(activeModalEvent)}
                  className="px-3.5 py-2 rounded-xl border border-red-500/30 bg-red-500/10 text-xs font-bold text-red-400 hover:bg-red-500/20 flex items-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Remove Event
                </button>
              ) : (
                <div />
              )}

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-700 bg-zinc-850 hover:bg-zinc-800 text-xs font-bold text-zinc-200 hover:text-white transition-colors"
                >
                  Close
                </button>

                <button
                  onClick={() => handleShare(activeModalEvent)}
                  className="px-4 py-2.5 rounded-xl border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white hover:bg-zinc-850"
                >
                  Copy Link
                </button>

                <button
                  onClick={() => toggleRsvp(activeModalEvent.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    rsvps[activeModalEvent.id]
                      ? "bg-zinc-800 text-yellow-400 border border-yellow-400/30"
                      : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-md"
                  }`}
                >
                  {rsvps[activeModalEvent.id] ? "Cancel RSVP" : "Confirm My RSVP"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
