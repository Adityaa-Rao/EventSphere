"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, Home, Compass, Calendar, Settings, LogOut, Plus, Menu, X } from "lucide-react"
import { NotificationsPopover } from "@/components/notifications-popover"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Discover", href: "/events", icon: Compass },
    { name: "My Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-zinc-950 text-zinc-100 overflow-hidden selection:bg-yellow-400 selection:text-zinc-950">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 border-r border-zinc-800 bg-zinc-900/60 backdrop-blur-2xl md:flex md:flex-col justify-between">
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 px-6 py-6 h-20 border-b border-zinc-800/80 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-zinc-950 shadow-md">
              <CalendarDays className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              EventSphere
            </span>
          </Link>

          {/* Nav Items */}
          <nav className="flex flex-col px-4 py-6 space-y-1.5">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-all ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 font-bold shadow-sm"
                      : "text-zinc-400 hover:bg-zinc-800/60 hover:text-white"
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${isActive ? "text-yellow-400" : "text-zinc-400"}`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>

        {/* Footer in Sidebar */}
        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/"
            className="flex items-center w-full gap-3 px-3.5 py-2.5 text-xs text-zinc-400 transition-all rounded-xl hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut className="w-4 h-4" />
            Exit to Home
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden relative">
        {/* Ambient Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[450px] h-[450px] bg-yellow-400/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[450px] h-[450px] bg-slate-300/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        {/* Top Navbar */}
        <header className="flex items-center justify-between h-20 px-6 sm:px-8 border-b border-zinc-800 bg-zinc-950/70 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-zinc-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-white capitalize">
              {pathname === "/dashboard"
                ? "Dashboard Overview"
                : pathname.replace("/dashboard/", "").replace("-", " ")}
            </h1>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <NotificationsPopover />

            <Link
              href="/events/create"
              className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-zinc-950 transition-all rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 hover:shadow-[0_0_25px_rgba(250,204,21,0.35)] hover:scale-105 active:scale-95"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span className="hidden sm:inline">Create Event</span>
              <span className="sm:hidden">Create</span>
            </Link>

            <Link href="/dashboard/settings">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-zinc-950 font-extrabold text-xs shadow-md cursor-pointer hover:opacity-90 transition-opacity">
                JD
              </div>
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-2xl p-4 flex flex-col gap-2 z-30">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm ${
                    isActive
                      ? "bg-yellow-400 text-zinc-950 font-bold"
                      : "text-zinc-300 hover:bg-zinc-800"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8 z-0">
          {children}
        </main>
      </div>
    </div>
  )
}
