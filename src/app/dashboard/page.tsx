"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Calendar, Users, Star, TrendingUp, MapPin, Clock } from "lucide-react"

export default function DashboardOverview() {
  const stats = [
    { name: "Total Events", value: "12", icon: Calendar, trend: "+2 this month" },
    { name: "Total RSVPs", value: "48", icon: Users, trend: "+12% vs last month" },
    { name: "Favorites", value: "7", icon: Star, trend: "3 upcoming" },
    { name: "Profile Views", value: "245", icon: TrendingUp, trend: "+4% vs last week" },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Design Leadership Summit 2026",
      date: "Oct 15, 2026",
      time: "09:00 AM PST",
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    },
    {
      id: 2,
      title: "Global Tech Innovators Conference",
      date: "Nov 02, 2026",
      time: "10:00 AM EST",
      location: "New York City, NY",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    },
  ]

  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div>
        <h2 className="text-3xl font-bold tracking-tight mb-2">Welcome back, John 👋</h2>
        <p className="text-muted-foreground">Here is what's happening with your events today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 border rounded-2xl glass-card flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{stat.name}</span>
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <stat.icon className="w-4 h-4" />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.trend}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Upcoming Events */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold">Upcoming Events</h3>
          <button className="text-sm font-medium text-primary hover:underline">View all</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
              className="group relative overflow-hidden border rounded-3xl glass-card transition-all hover:border-primary/50"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold mb-3">{event.title}</h4>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
