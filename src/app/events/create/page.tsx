"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Image as ImageIcon, Calendar as CalendarIcon, MapPin, Clock, Tag } from "lucide-react"

export default function CreateEventPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navbar */}
      <header className="flex items-center h-20 px-8 border-b border-border/50 bg-background/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-4 max-w-4xl mx-auto w-full">
          <Link href="/dashboard" className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-xl font-semibold">Create New Event</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-8">
        <form className="flex flex-col gap-12">
          {/* Cover Image */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="w-full aspect-[21/9] rounded-3xl border-2 border-dashed border-border flex flex-col items-center justify-center bg-card/30 hover:bg-card/50 transition-colors cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
              <div className="w-16 h-16 rounded-2xl bg-background border flex items-center justify-center text-muted-foreground group-hover:scale-110 transition-transform mb-4">
                <ImageIcon className="w-8 h-8" />
              </div>
              <p className="font-medium text-lg">Upload Cover Image</p>
              <p className="text-sm text-muted-foreground mt-1">16:9 ratio recommended. High resolution.</p>
            </div>
          </motion.section>

          {/* Basic Info */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold">Event Details</h2>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Event Title</label>
              <input 
                type="text" 
                placeholder="e.g. Design Leadership Summit 2026"
                className="w-full bg-background border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium">Description</label>
              <textarea 
                rows={5}
                placeholder="What is this event about?"
                className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
          </motion.section>

          {/* Date & Time */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold">When & Where</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" /> Date
                </label>
                <input 
                  type="date" 
                  className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" /> Time
                </label>
                <input 
                  type="time" 
                  className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" /> Location
              </label>
              <input 
                type="text" 
                placeholder="Search for a venue or enter an address"
                className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </motion.section>

          {/* Ticket & Category */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl font-bold">Ticketing & Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" /> Category
                </label>
                <select className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none">
                  <option value="tech">Technology</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="music">Music</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Ticket Price ($)</label>
                <input 
                  type="number" 
                  placeholder="0.00 for Free"
                  className="w-full bg-background border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>
          </motion.section>

          {/* Submit */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-end pt-6 border-t border-border"
          >
            <div className="flex gap-4">
              <button type="button" className="px-6 py-3 rounded-full font-medium hover:bg-white/5 transition-colors">
                Save Draft
              </button>
              <button type="button" className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                Publish Event
              </button>
            </div>
          </motion.div>

        </form>
      </main>
    </div>
  )
}
