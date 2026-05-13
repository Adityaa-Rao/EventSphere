"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CalendarDays, Home, Compass, Calendar, Settings, LogOut, Plus, Bell } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const navigation = [
    { name: "Overview", href: "/dashboard", icon: Home },
    { name: "Discover", href: "/events", icon: Compass },
    { name: "My Calendar", href: "/dashboard/calendar", icon: Calendar },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="hidden w-64 border-r border-border bg-card/50 backdrop-blur-xl md:flex md:flex-col">
        <div className="flex items-center gap-2 px-6 py-6 h-20">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground">
            <CalendarDays className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">EventSphere</span>
        </div>
        
        <div className="flex flex-col flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${
                  isActive 
                    ? "bg-primary/10 text-primary font-medium" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-border">
          <button className="flex items-center w-full gap-3 px-3 py-2 text-muted-foreground transition-all rounded-xl hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden relative">
        {/* Dynamic Background */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Top Navbar */}
        <header className="flex items-center justify-between h-20 px-8 border-b border-border/50 bg-background/50 backdrop-blur-md z-10">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted-foreground transition-colors rounded-full hover:bg-white/5 hover:text-foreground">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary" />
            </button>
            <Link 
              href="/events/create"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-transform rounded-full bg-primary hover:scale-105 shadow-lg shadow-primary/25"
            >
              <Plus className="w-4 h-4" />
              Create Event
            </Link>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center text-white font-bold cursor-pointer hover:opacity-90 transition-opacity">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8 z-0">
          {children}
        </main>
      </div>
    </div>
  )
}
