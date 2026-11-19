"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, Menu, X, Plus, Compass } from "lucide-react"
import { NotificationsPopover } from "@/components/notifications-popover"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3.5 mx-auto max-w-7xl"
    >
      <div className="flex items-center justify-between px-5 py-2.5 rounded-2xl border border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl shadow-xl">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-yellow-400 text-zinc-950 shadow-sm font-bold transition-transform group-hover:scale-105">
            <CalendarDays className="w-4 h-4 stroke-[2.5]" />
          </div>
          <span className="text-[15px] font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
            EventSphere
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 text-[13px]">
          <Link href="/#features" className="px-3 py-1.5 font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
            Features
          </Link>
          <Link href="/events" className="px-3 py-1.5 font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-yellow-400" />
            Explore
          </Link>
          <Link href="/#testimonials" className="px-3 py-1.5 font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
            Reviews
          </Link>
          <Link href="/#faq" className="px-3 py-1.5 font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
            FAQ
          </Link>
          <Link href="/dashboard" className="px-3 py-1.5 font-medium text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
            Dashboard
          </Link>
        </nav>

        {/* Desktop CTA & Notifications */}
        <div className="hidden md:flex items-center gap-2.5">
          <NotificationsPopover />

          <Link
            href="/events/create"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-zinc-200 hover:text-white border border-white/[0.08] hover:border-white/[0.18] bg-zinc-900/60 hover:bg-zinc-800/60 rounded-lg transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-yellow-400" />
            Host Event
          </Link>

          <Link
            href="/register"
            className="px-4 py-1.5 text-xs font-bold text-zinc-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-all shadow-sm active:scale-95"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu and notifications */}
        <div className="flex md:hidden items-center gap-2">
          <NotificationsPopover />
          <button
            className="p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 p-4 md:hidden rounded-2xl border border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-2"
          >
            <Link
              href="/#features"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/events"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <Compass className="w-3.5 h-3.5 text-yellow-400" />
              Explore Events
            </Link>
            <Link
              href="/events/create"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors flex items-center gap-2"
            >
              <Plus className="w-3.5 h-3.5 text-yellow-400" />
              Host Event
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
            >
              FAQ
            </Link>

            <div className="pt-3 border-t border-white/[0.08] flex gap-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center py-2 text-xs font-semibold text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center py-2 text-xs font-bold text-zinc-950 bg-yellow-400 hover:bg-yellow-300 rounded-lg transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
