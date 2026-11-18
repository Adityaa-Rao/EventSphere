"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Users, Star, TrendingUp, MapPin, Clock, ArrowRight, Plus } from "lucide-react"

export default function DashboardOverview() {
  const stats = [
    { name: "Active Events", value: "12", icon: Calendar, trend: "+2 scheduled" },
    { name: "Total RSVPs", value: "1,480", icon: Users, trend: "+18% this month" },
    { name: "Star Rating", value: "4.92", icon: Star, trend: "from 310 reviews" },
    { name: "Profile Reach", value: "18.4k", icon: TrendingUp, trend: "+12% vs last week" },
  ]

  const upcomingEvents = [
    {
      id: "1",
      title: "Global AI & Architecture Summit 2026",
      date: "Nov 28, 2026",
      time: "10:00 AM PST",
      location: "San Francisco, CA & Hybrid",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      attendees: 1850,
      status: "Published",
    },
    {
      id: "2",
      title: "Design Leadership & Micro-interactions Expo",
      date: "Dec 05, 2026",
      time: "02:00 PM EST",
      location: "New York City, NY",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
      attendees: 940,
      status: "Selling Fast",
    },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      {/* Welcome Banner */}
      <div className="p-8 rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-900/90 via-zinc-900/50 to-zinc-900/90 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-3">
            Organizer Portal Active
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Welcome back, <span className="text-gradient">John</span> 👋
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-lg">
            You have 2 events scheduled this week with 240 new attendee registrations.
          </p>
        </div>

        <div className="relative z-10 flex gap-3">
          <Link
            href="/events/create"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm shadow-lg shadow-yellow-400/20 transition-all hover:scale-105 active:scale-95"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            New Event
          </Link>
        </div>

        {/* Decorative corner glow */}
        <div className="absolute right-0 top-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
            className="p-6 border border-zinc-800 rounded-2xl bg-zinc-900/50 backdrop-blur-xl flex flex-col justify-between hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.06)] transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{stat.name}</span>
              <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 flex items-center justify-center">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-yellow-400/80 font-medium mt-1">{stat.trend}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Events Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Your Upcoming Events</h3>
            <p className="text-xs text-zinc-400 mt-0.5">Live events currently open for RSVP</p>
          </div>
          <Link
            href="/events"
            className="text-xs font-bold text-yellow-400 hover:text-yellow-300 flex items-center gap-1 group"
          >
            Explore All Events
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.1 }}
              className="group relative overflow-hidden border border-zinc-800 rounded-3xl bg-zinc-900/50 hover:bg-zinc-900/80 hover:border-yellow-400/50 transition-all duration-300 shadow-xl"
            >
              <div className="aspect-[16/9] w-full overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-zinc-950 shadow-md">
                  {event.status}
                </span>
                <span className="absolute bottom-4 right-4 text-xs font-semibold text-zinc-200 bg-zinc-950/80 px-3 py-1 rounded-full border border-zinc-700">
                  {event.attendees} registered
                </span>
              </div>

              <div className="p-6">
                <h4 className="text-lg font-bold text-zinc-100 group-hover:text-yellow-400 transition-colors mb-3">
                  {event.title}
                </h4>

                <div className="flex flex-col gap-2 text-xs sm:text-sm text-zinc-400">
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

                <div className="mt-5 pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Live Ticketing Enabled</span>
                  <Link
                    href={`/events`}
                    className="text-xs font-bold text-yellow-400 hover:underline"
                  >
                    View Public Page →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
