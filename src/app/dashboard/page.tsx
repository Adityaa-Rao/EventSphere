"use client"

import * as React from "react"
import Link from "next/link"
import { Calendar, Users, Star, TrendingUp, MapPin, ArrowRight, Plus, Sparkles, Trash2 } from "lucide-react"
import { useEvents, EventItem } from "@/lib/events-store"

export default function DashboardOverview() {
  const { events, rsvps, toggleRsvp, removeEvent } = useEvents()

  const userEvents = events.filter((e) => e.isUserCreated)
  const totalRsvpsCount = events.reduce((acc, e) => acc + (e.attendees || 0), 0)

  const stats = [
    { name: "Total Gatherings", value: events.length.toString(), icon: Calendar, trend: `${userEvents.length} hosted by you` },
    { name: "Live RSVPs", value: totalRsvpsCount.toLocaleString(), icon: Users, trend: "+14% this month" },
    { name: "Average Rating", value: "4.94", icon: Star, trend: "verified attendees" },
    { name: "Catalog Reach", value: "24.2k", icon: TrendingUp, trend: "+8.4% vs last week" },
  ]

  const displayedUpcoming = userEvents.length > 0 ? userEvents.concat(events.filter((e) => !e.isUserCreated).slice(0, 3 - userEvents.length)) : events.slice(0, 3)

  const handleDelete = (event: EventItem, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (window.confirm(`Are you sure you want to remove "${event.title}" from your hosted events?`)) {
      removeEvent(event.id)
    }
  }

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-16">
      {/* Welcome Banner */}
      <div className="p-6 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-[11px] font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3" />
            Organizer Workspace
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Welcome back, <span className="text-gradient">John</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
            {userEvents.length > 0
              ? `You currently have ${userEvents.length} active hosted event(s) open for public registrations.`
              : "Create your first gathering or manage your attendance across the event catalog."}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/events"
            className="px-4 py-2 rounded-xl border border-white/[0.08] bg-zinc-900/60 hover:bg-zinc-800/60 hover:border-white/[0.18] text-zinc-200 text-xs font-semibold transition-all"
          >
            Browse Catalog
          </Link>
          <Link
            href="/events/create"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs shadow-sm transition-all active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            New Event
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="p-5 border border-white/[0.08] rounded-xl bg-zinc-900/40 backdrop-blur-md flex flex-col justify-between hover:border-white/[0.18] transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{stat.name}</span>
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-[11px] text-zinc-500 font-medium mt-1">{stat.trend}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">Active Schedule</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Events you host or have confirmed RSVPs for</p>
          </div>
          <Link
            href="/events"
            className="text-xs font-semibold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group"
          >
            View Complete Registry
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {displayedUpcoming.map((event) => {
            const isRsvpd = rsvps[event.id]
            return (
              <div
                key={event.id}
                className="group relative overflow-hidden border border-white/[0.08] rounded-2xl bg-zinc-900/40 hover:border-white/[0.18] hover:bg-zinc-900/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] w-full overflow-hidden relative bg-zinc-950">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-zinc-950/90 text-yellow-400 border border-yellow-400/30">
                      {event.category}
                    </span>
                    {event.isUserCreated && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-bold bg-yellow-400 text-zinc-950">
                        Hosted by You
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 text-xs font-bold text-zinc-100 bg-zinc-950/90 px-2 py-0.5 rounded border border-white/[0.08]">
                      {event.price}
                    </span>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors mb-2 line-clamp-1">
                      {event.title}
                    </h4>

                    <div className="flex flex-col gap-1 text-[11px] text-zinc-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                        <span>{event.date}</span>
                        <span className="text-zinc-600">•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 border-t border-white/[0.06] mt-2 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 text-[11px] flex items-center gap-1">
                    <Users className="w-3 h-3 text-yellow-400" /> {event.attendees} Attending
                  </span>

                  <div className="flex items-center gap-1.5">
                    {event.isUserCreated && (
                      <button
                        onClick={(e) => handleDelete(event, e)}
                        className="p-1.5 rounded-lg text-zinc-500 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                        title="Remove event"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => toggleRsvp(event.id)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all ${
                        isRsvpd
                          ? "bg-zinc-800 text-yellow-400 border border-yellow-400/30"
                          : "bg-yellow-400 text-zinc-950 hover:bg-yellow-300 shadow-sm"
                      }`}
                    >
                      {isRsvpd ? "Confirmed" : "RSVP"}
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
