"use client"

import * as React from "react"
import Link from "next/link"
import { CalendarDays, Globe, MessageSquare, Mail, ArrowRight, Check } from "lucide-react"

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="pt-20 pb-12 mt-20 border-t border-zinc-800 bg-zinc-950 text-zinc-300 relative">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-zinc-850">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-950 shadow-md">
                <CalendarDays className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">EventSphere</span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed mb-6">
              The premier event management platform for creators, communities, and enterprises worldwide.
              Discover, organize, and experience standout gatherings.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Enter your email for event drops..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-zinc-900 border border-zinc-750 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors flex-1"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-1.5 shadow-md shadow-yellow-400/20"
              >
                {subscribed ? (
                  <>
                    <Check className="w-4 h-4" /> Joined
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Product links */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Platform</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/#features" className="hover:text-yellow-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400 transition-colors">
                  Explore Events
                </Link>
              </li>
              <li>
                <Link href="/events/create" className="hover:text-yellow-400 transition-colors">
                  Host an Event
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-yellow-400 transition-colors">
                  Organizer Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Resources</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <Link href="/#faq" className="hover:text-yellow-400 transition-colors">
                  Help & FAQs
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-yellow-400 transition-colors">
                  Organizer Stories
                </Link>
              </li>
              <li>
                <Link href="/dashboard/calendar" className="hover:text-yellow-400 transition-colors">
                  Calendar Sync
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-yellow-400 transition-colors">
                  Event Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Social */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Connect</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400 mb-6">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                  Community Discord
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="flex gap-3">
              <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/40 cursor-pointer transition-colors">
                <Globe className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/40 cursor-pointer transition-colors">
                <MessageSquare className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:border-yellow-400/40 cursor-pointer transition-colors">
                <Mail className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} EventSphere. Gray, Silver & Gold Edition. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-zinc-300 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
