"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Image as ImageIcon, Calendar as CalendarIcon, MapPin, Clock, Tag, Sparkles, Check, DollarSign } from "lucide-react"

export default function CreateEventPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [date, setDate] = React.useState("")
  const [time, setTime] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [category, setCategory] = React.useState("Tech")
  const [price, setPrice] = React.useState("0")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate publication
    setTimeout(() => {
      setIsSubmitting(false)
      setSuccess(true)
      setTimeout(() => {
        router.push("/events")
      }, 1500)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-yellow-400 selection:text-zinc-950">
      {/* Top Navbar */}
      <header className="flex items-center h-20 px-6 sm:px-8 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl sticky top-0 z-20">
        <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="p-2 -ml-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">Create New Event</h1>
              <p className="text-xs text-zinc-400">Publish your gathering on EventSphere</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs text-zinc-400 font-medium hidden sm:inline">Draft auto-saved</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-12 px-6 sm:px-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          {/* Cover Image Upload */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-3"
          >
            <label className="text-sm font-bold text-zinc-200 flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-yellow-400" /> Event Cover Banner
            </label>
            <div className="w-full aspect-[21/9] rounded-3xl border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center bg-zinc-900/40 hover:bg-zinc-900/70 hover:border-yellow-400/50 transition-all cursor-pointer group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/5 to-transparent pointer-events-none" />
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform mb-3 shadow-md">
                <ImageIcon className="w-7 h-7" />
              </div>
              <p className="font-bold text-base text-zinc-200 group-hover:text-yellow-400 transition-colors">
                Upload Cover Artwork
              </p>
              <p className="text-xs text-zinc-500 mt-1">16:9 ratio recommended (1920x1080). PNG or JPG.</p>
            </div>
          </motion.section>

          {/* Event Details */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 pb-4 border-b border-zinc-800">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <h2 className="text-lg font-bold text-white">General Information</h2>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-300">Event Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. NextGen Web & AI Developer Summit 2026"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-300">Description *</label>
              <textarea
                rows={5}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your event, speaker schedule, agenda, and expectations..."
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>
          </motion.section>

          {/* Date, Time, Venue */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 pb-4 border-b border-zinc-800">
              <CalendarIcon className="w-4 h-4 text-yellow-400" />
              <h2 className="text-lg font-bold text-white">When & Where</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-yellow-400" /> Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" /> Start Time *
                </label>
                <input
                  type="time"
                  required
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Location / Stream URL *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. Moscone Center, San Francisco or Virtual Zoom Stream"
                className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </motion.section>

          {/* Category & Pricing */}
          <motion.section
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
          >
            <div className="flex items-center gap-2 pb-4 border-b border-zinc-800">
              <Tag className="w-4 h-4 text-yellow-400" />
              <h2 className="text-lg font-bold text-white">Ticketing & Category</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-300">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="Tech">Tech</option>
                  <option value="Design">Design</option>
                  <option value="Founders">Founders</option>
                  <option value="Music">Music</option>
                  <option value="Community">Community</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1">
                  <DollarSign className="w-3.5 h-3.5 text-yellow-400" /> Ticket Price ($ USD)
                </label>
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="0 for Free event"
                  className="w-full bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>
          </motion.section>

          {/* Submission Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
            <Link
              href="/dashboard"
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Cancel and Return
            </Link>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              {success && (
                <span className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
                  <Check className="w-4 h-4" /> Event published! Redirecting...
                </span>
              )}
              <button
                type="submit"
                disabled={isSubmitting || success}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-zinc-950 font-bold text-sm shadow-xl shadow-yellow-400/20 hover:scale-105 active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? "Publishing Event..." : "Publish Event Now"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
