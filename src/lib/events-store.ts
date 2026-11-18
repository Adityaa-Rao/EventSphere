"use client"

import { useState, useEffect, useCallback } from "react"

export interface EventItem {
  id: string
  title: string
  category: "Tech" | "Design" | "Founders" | "Music" | "Community"
  date: string // e.g. "2026-11-28" or "Nov 28, 2026"
  time: string // e.g. "10:00 AM PST"
  location: string
  image: string
  description: string
  attendees: number
  capacity: number
  price: string
  featured?: boolean
  isUserCreated?: boolean
  organizer: string
  createdAt: string
}

export interface NotificationItem {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: "event" | "rsvp" | "system"
}

export const SEED_EVENTS: EventItem[] = [
  {
    id: "evt-seed-1",
    title: "Global AI & Architecture Summit",
    category: "Tech",
    date: "2026-11-28",
    time: "10:00 AM PST",
    location: "Moscone West, San Francisco & Virtual",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80",
    description: "Deep dive into production agentic architectures, distributed inference clusters, and edge machine learning deployment.",
    attendees: 1840,
    capacity: 2500,
    price: "Free",
    featured: true,
    organizer: "AI Systems Guild",
    createdAt: "2026-11-01T09:00:00Z",
  },
  {
    id: "evt-seed-2",
    title: "Modern Interface & Micro-interactions Lab",
    category: "Design",
    date: "2026-12-05",
    time: "02:00 PM EST",
    location: "Metropolitan Pavilion, New York City",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80",
    description: "Hands-on workshop breaking down spring physics, keyboard accessibility, spatial layout, and high-frame-rate web animation.",
    attendees: 640,
    capacity: 800,
    price: "$49",
    featured: true,
    organizer: "Elena Rostova",
    createdAt: "2026-11-04T12:30:00Z",
  },
  {
    id: "evt-seed-3",
    title: "Venture & Early Stage Founders Retreat",
    category: "Founders",
    date: "2026-12-12",
    time: "09:30 AM GMT",
    location: "Tobacco Dock, London, UK",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&auto=format&fit=crop&q=80",
    description: "Off-the-record salon for venture-backed founders and active angels. Focus on runway extension, unit economics, and go-to-market.",
    attendees: 310,
    capacity: 350,
    price: "$120",
    featured: false,
    organizer: "Marcus Vance",
    createdAt: "2026-11-06T15:00:00Z",
  },
  {
    id: "evt-seed-4",
    title: "Analog & Modular Synth Live Sessions",
    category: "Music",
    date: "2026-12-20",
    time: "07:30 PM CET",
    location: "Kraftwerk, Berlin, Germany",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80",
    description: "Live spatial sound performance by contemporary hardware electronic artists with reactive architectural lighting.",
    attendees: 1250,
    capacity: 1500,
    price: "$35",
    featured: true,
    organizer: "Klangraum Collective",
    createdAt: "2026-11-08T18:00:00Z",
  },
  {
    id: "evt-seed-5",
    title: "Kernel Security & Systems Hardening Forum",
    category: "Tech",
    date: "2027-01-14",
    time: "11:00 AM CST",
    location: "Austin Convention Center, Austin, TX",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&auto=format&fit=crop&q=80",
    description: "Technical briefing on memory safety, eBPF telemetry, cryptographic verification of binaries, and zero-day containment.",
    attendees: 920,
    capacity: 1200,
    price: "Free",
    featured: false,
    organizer: "SysSec Alliance",
    createdAt: "2026-11-10T11:20:00Z",
  },
  {
    id: "evt-seed-6",
    title: "Nordic Product Strategy Roundtable",
    category: "Founders",
    date: "2027-01-22",
    time: "01:00 PM CET",
    location: "Epicenter, Stockholm, Sweden",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop&q=80",
    description: "Curated peer discussions among product VPs on balancing roadmap discipline with opportunistic experimentation.",
    attendees: 210,
    capacity: 250,
    price: "$75",
    featured: false,
    organizer: "Stockholm Tech Council",
    createdAt: "2026-11-12T14:45:00Z",
  },
]

export const SEED_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "notif-1",
    title: "Welcome to EventSphere v2",
    message: "Your organizer dashboard is fully configured. Gray, silver, and gold edition is active.",
    time: "Just now",
    read: false,
    type: "system",
  },
  {
    id: "notif-2",
    title: "RSVP Confirmed: AI Architecture Summit",
    message: "Your digital pass with QR badge has been generated and added to your schedule.",
    time: "2 hours ago",
    read: false,
    type: "rsvp",
  },
  {
    id: "notif-3",
    title: "Speaker Schedule Published",
    message: "Modern Interface Lab updated speaker track schedule. Timezone conversions refreshed.",
    time: "Yesterday",
    read: true,
    type: "event",
  },
]

const EVENTS_KEY = "eventsphere_events_data_v3"
const RSVPS_KEY = "eventsphere_rsvps_data_v3"
const NOTIFS_KEY = "eventsphere_notifications_data_v3"

// Helper to safely read from localStorage
export function getStoredEvents(): EventItem[] {
  if (typeof window === "undefined") return SEED_EVENTS
  try {
    const raw = localStorage.getItem(EVENTS_KEY)
    if (!raw) {
      localStorage.setItem(EVENTS_KEY, JSON.stringify(SEED_EVENTS))
      return SEED_EVENTS
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : SEED_EVENTS
  } catch {
    return SEED_EVENTS
  }
}

export function saveNewEvent(data: {
  title: string
  category: "Tech" | "Design" | "Founders" | "Music" | "Community"
  date: string
  time: string
  location: string
  image: string
  description: string
  price: string
  capacity?: number
}): EventItem {
  const current = getStoredEvents()
  const newEvent: EventItem = {
    id: `evt-user-${Date.now()}`,
    title: data.title.trim(),
    category: data.category,
    date: data.date,
    time: data.time,
    location: data.location.trim(),
    image: data.image || "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80",
    description: data.description.trim(),
    attendees: 1, // creator automatically attending
    capacity: data.capacity || 150,
    price: data.price ? (data.price === "0" || data.price.toLowerCase() === "free" ? "Free" : `$${data.price.replace("$", "")}`) : "Free",
    featured: true,
    isUserCreated: true,
    organizer: "You (Host)",
    createdAt: new Date().toISOString(),
  }

  const updated = [newEvent, ...current]
  if (typeof window !== "undefined") {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(updated))
    // Also mark user as RSVP'd to their own event
    const rsvps = getStoredRsvps()
    rsvps[newEvent.id] = true
    localStorage.setItem(RSVPS_KEY, JSON.stringify(rsvps))

    // Add a notification
    addNotification({
      title: "Event Published Successfully",
      message: `"${newEvent.title}" is now live and listed in the discovery catalog.`,
      type: "event",
    })

    window.dispatchEvent(new Event("eventsphere_storage_update"))
  }

  return newEvent
}

export function getStoredRsvps(): Record<string, boolean> {
  if (typeof window === "undefined") return {}
  try {
    const raw = localStorage.getItem(RSVPS_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function toggleRsvpStatus(eventId: string): { isRsvpd: boolean; count: number } {
  const rsvps = getStoredRsvps()
  const current = getStoredEvents()
  const nextState = !rsvps[eventId]
  rsvps[eventId] = nextState

  let updatedCount = 0
  const updatedEvents = current.map((evt) => {
    if (evt.id === eventId) {
      const delta = nextState ? 1 : -1
      const newAttendees = Math.max(0, evt.attendees + delta)
      updatedCount = newAttendees
      return { ...evt, attendees: newAttendees }
    }
    return evt
  })

  if (typeof window !== "undefined") {
    localStorage.setItem(RSVPS_KEY, JSON.stringify(rsvps))
    localStorage.setItem(EVENTS_KEY, JSON.stringify(updatedEvents))

    const targetEvent = current.find((e) => e.id === eventId)
    if (targetEvent) {
      addNotification({
        title: nextState ? "RSVP Confirmed" : "RSVP Cancelled",
        message: nextState
          ? `You are now confirmed for "${targetEvent.title}". Check calendar for details.`
          : `You have removed your reservation for "${targetEvent.title}".`,
        type: "rsvp",
      })
    }

    window.dispatchEvent(new Event("eventsphere_storage_update"))
  }

  return { isRsvpd: nextState, count: updatedCount }
}

export function getStoredNotifications(): NotificationItem[] {
  if (typeof window === "undefined") return SEED_NOTIFICATIONS
  try {
    const raw = localStorage.getItem(NOTIFS_KEY)
    if (!raw) {
      localStorage.setItem(NOTIFS_KEY, JSON.stringify(SEED_NOTIFICATIONS))
      return SEED_NOTIFICATIONS
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : SEED_NOTIFICATIONS
  } catch {
    return SEED_NOTIFICATIONS
  }
}

export function addNotification(item: Omit<NotificationItem, "id" | "time" | "read">): void {
  const current = getStoredNotifications()
  const newItem: NotificationItem = {
    ...item,
    id: `notif-${Date.now()}`,
    time: "Just now",
    read: false,
  }
  const updated = [newItem, ...current]
  if (typeof window !== "undefined") {
    localStorage.setItem(NOTIFS_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event("eventsphere_notifications_update"))
  }
}

export function markNotificationAsRead(id: string): void {
  const current = getStoredNotifications()
  const updated = current.map((n) => (n.id === id ? { ...n, read: true } : n))
  if (typeof window !== "undefined") {
    localStorage.setItem(NOTIFS_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event("eventsphere_notifications_update"))
  }
}

export function markAllNotificationsAsRead(): void {
  const current = getStoredNotifications()
  const updated = current.map((n) => ({ ...n, read: true }))
  if (typeof window !== "undefined") {
    localStorage.setItem(NOTIFS_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event("eventsphere_notifications_update"))
  }
}

export function clearAllNotifications(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(NOTIFS_KEY, JSON.stringify([]))
    window.dispatchEvent(new Event("eventsphere_notifications_update"))
  }
}

export function deleteEvent(eventId: string): void {
  const current = getStoredEvents()
  const target = current.find((e) => e.id === eventId)
  const updated = current.filter((e) => e.id !== eventId)

  if (typeof window !== "undefined") {
    localStorage.setItem(EVENTS_KEY, JSON.stringify(updated))

    // Clean up RSVPs
    const rsvps = getStoredRsvps()
    if (rsvps[eventId]) {
      delete rsvps[eventId]
      localStorage.setItem(RSVPS_KEY, JSON.stringify(rsvps))
    }

    if (target) {
      addNotification({
        title: "Event Removed",
        message: `"${target.title}" has been deleted from your event catalog.`,
        type: "system",
      })
    }

    window.dispatchEvent(new Event("eventsphere_storage_update"))
  }
}

// React Hook for Reactive Event Updates
export function useEvents() {
  const [events, setEvents] = useState<EventItem[]>([])
  const [rsvps, setRsvps] = useState<Record<string, boolean>>({})
  const [loaded, setLoaded] = useState(false)

  const reload = useCallback(() => {
    setEvents(getStoredEvents())
    setRsvps(getStoredRsvps())
    setLoaded(true)
  }, [])

  useEffect(() => {
    reload()
    const handleUpdate = () => reload()
    window.addEventListener("eventsphere_storage_update", handleUpdate)
    window.addEventListener("storage", handleUpdate)
    return () => {
      window.removeEventListener("eventsphere_storage_update", handleUpdate)
      window.removeEventListener("storage", handleUpdate)
    }
  }, [reload])

  return { events, rsvps, loaded, reload, toggleRsvp: toggleRsvpStatus, removeEvent: deleteEvent }
}

// React Hook for Notifications
export function useNotifications() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [loaded, setLoaded] = useState(false)

  const reload = useCallback(() => {
    setNotifications(getStoredNotifications())
    setLoaded(true)
  }, [])

  useEffect(() => {
    reload()
    const handleUpdate = () => reload()
    window.addEventListener("eventsphere_notifications_update", handleUpdate)
    window.addEventListener("storage", handleUpdate)
    return () => {
      window.removeEventListener("eventsphere_notifications_update", handleUpdate)
      window.removeEventListener("storage", handleUpdate)
    }
  }, [reload])

  const unreadCount = notifications.filter((n) => !n.read).length

  return {
    notifications,
    unreadCount,
    loaded,
    markAsRead: markNotificationAsRead,
    markAllAsRead: markAllNotificationsAsRead,
    clearAll: clearAllNotifications,
  }
}
