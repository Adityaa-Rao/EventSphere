"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, Menu, X, Sparkles, Compass } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 mx-auto mt-4 max-w-7xl"
    >
      <div className="flex items-center justify-between px-6 py-3.5 glass rounded-2xl border border-zinc-700/60 shadow-2xl bg-zinc-950/70 backdrop-blur-xl">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-950 shadow-md group-hover:scale-105 transition-transform">
            <CalendarDays className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5">
              EventSphere
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-ping inline-block" />
            </span>
            <span className="text-[10px] text-zinc-400 font-medium tracking-widest uppercase">Live Platform</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex items-center">
          <Link href="/#features" className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors">
            Features
          </Link>
          <Link href="/events" className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-yellow-400" />
            Explore Events
          </Link>
          <Link href="/#testimonials" className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors">
            Testimonials
          </Link>
          <Link href="/#faq" className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors">
            FAQ
          </Link>
          <Link href="/dashboard" className="text-sm font-medium text-zinc-300 hover:text-yellow-400 transition-colors">
            Dashboard
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden gap-3 md:flex items-center">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-700 rounded-full bg-zinc-900/60"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-1.5 px-5 py-2 text-sm font-bold text-zinc-950 transition-all rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-zinc-950" />
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="p-2 md:hidden text-zinc-300 hover:text-yellow-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-2 p-5 md:hidden glass rounded-2xl border border-zinc-700/60 shadow-2xl bg-zinc-950/95 backdrop-blur-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/#features"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-yellow-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-900/50"
              >
                Features
              </Link>
              <Link
                href="/events"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-yellow-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-900/50 flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-yellow-400" />
                Explore Events
              </Link>
              <Link
                href="/#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-yellow-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-900/50"
              >
                Testimonials
              </Link>
              <Link
                href="/#faq"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-yellow-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-900/50"
              >
                FAQ
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-yellow-400 transition-colors px-2 py-1.5 rounded-lg hover:bg-zinc-900/50"
              >
                Dashboard
              </Link>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold text-zinc-300 border border-zinc-800 rounded-xl hover:bg-zinc-900 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 text-sm font-bold text-zinc-950 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
              >
                Get Started Free
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
