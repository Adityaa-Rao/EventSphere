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
      <aside className="hidden w-60 border-r border-white/[0.08] bg-zinc-950/80 backdrop-blur-2xl md:flex md:flex-col justify-between">
        <div>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 px-6 h-16 border-b border-white/[0.08] group">
            <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-yellow-400 text-zinc-950 shadow-sm font-bold">
              <CalendarDays className="w-4 h-4 stroke-[2.5]" />
            </div>
            <span className="text-[15px] font-bold tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              EventSphere
            </span>
          </Link>

          {/* Nav Items */}
          <nav className="flex flex-col px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 font-bold shadow-sm"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
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
        <div className="p-3 border-t border-white/[0.08]">
          <Link
            href="/"
            className="flex items-center w-full gap-2 px-3 py-2 text-xs font-medium text-zinc-400 transition-all rounded-xl hover:bg-white/[0.04] hover:text-red-400"
          >
            <LogOut className="w-4 h-4" />
            Exit to Home
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden relative">
        {/* Top Navbar */}
        <header className="flex items-center justify-between h-16 px-6 sm:px-8 border-b border-white/[0.08] bg-zinc-950/80 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-zinc-400 hover:text-white rounded-lg hover:bg-white/[0.05]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <h1 className="text-base sm:text-lg font-bold text-white capitalize">
              {pathname === "/dashboard"
                ? "Dashboard Overview"
                : pathname.replace("/dashboard/", "").replace("-", " ")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <NotificationsPopover />

            <Link
              href="/events/create"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-zinc-950 transition-all rounded-lg bg-yellow-400 hover:bg-yellow-300 shadow-sm active:scale-95"
            >
              <Plus className="w-3.5 h-3.5 stroke-[3]" />
              <span className="hidden sm:inline">Create Event</span>
              <span className="sm:hidden">Create</span>
            </Link>

            <Link href="/dashboard/settings">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/[0.12] flex items-center justify-center text-zinc-200 font-bold text-xs cursor-pointer hover:border-yellow-400/40 transition-colors">
                JD
              </div>
            </Link>
          </div>
        </header>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/[0.08] bg-zinc-950/95 backdrop-blur-2xl p-3 flex flex-col gap-1 z-30">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold ${
                    isActive
                      ? "bg-yellow-400 text-zinc-950 font-bold"
                      : "text-zinc-300 hover:bg-white/[0.05]"
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
