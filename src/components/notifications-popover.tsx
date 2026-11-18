"use client"

import * as React from "react"
import { Bell, Check, Trash2, Calendar, UserCheck, ShieldAlert, Sparkles, X } from "lucide-react"
import { useNotifications, NotificationItem } from "@/lib/events-store"

export function NotificationsPopover() {
  const [isOpen, setIsOpen] = React.useState(false)
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearAll } = useNotifications()
  const popoverRef = React.useRef<HTMLDivElement>(null)

  // Close on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const getIcon = (type: NotificationItem["type"]) => {
    switch (type) {
      case "event":
        return <Calendar className="w-4 h-4 text-yellow-400" />
      case "rsvp":
        return <UserCheck className="w-4 h-4 text-emerald-400" />
      default:
        return <ShieldAlert className="w-4 h-4 text-slate-300" />
    }
  }

  return (
    <div className="relative" ref={popoverRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-850 hover:border-zinc-700 text-zinc-300 hover:text-white transition-all active:scale-95"
        aria-label="View notifications"
      >
        <Bell className="w-4 h-4" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-yellow-400 text-zinc-950 font-extrabold text-[10px] shadow-sm animate-in zoom-in-50">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl border border-zinc-800 bg-zinc-950/95 shadow-2xl backdrop-blur-2xl z-50 overflow-hidden animate-in fade-in-50 slide-in-from-top-2">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-zinc-850 bg-zinc-900/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide uppercase">Notifications</span>
              {unreadCount > 0 ? (
                <span className="px-2 py-0.5 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 font-bold text-[10px]">
                  {unreadCount} new
                </span>
              ) : (
                <span className="text-[11px] text-zinc-500 font-medium">All caught up</span>
              )}
            </div>

            <div className="flex items-center gap-1">
              {unreadCount > 0 && (
                <button
                  onClick={() => markAllAsRead()}
                  className="text-[11px] text-zinc-400 hover:text-yellow-400 transition-colors px-2 py-1 rounded hover:bg-zinc-800"
                  title="Mark all as read"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto divide-y divide-zinc-850/80">
            {notifications.length === 0 ? (
              <div className="py-12 px-6 text-center">
                <Sparkles className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
                <p className="text-xs text-zinc-400 font-semibold">No notifications yet</p>
                <p className="text-[11px] text-zinc-500 mt-1">
                  Updates on created events and RSVPs will appear here.
                </p>
              </div>
            ) : (
              notifications.map((item) => (
                <div
                  key={item.id}
                  onClick={() => markAsRead(item.id)}
                  className={`p-3.5 transition-colors cursor-pointer flex items-start gap-3 hover:bg-zinc-900/60 ${
                    !item.read ? "bg-zinc-900/40" : "opacity-75"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {getIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-xs font-bold truncate ${!item.read ? "text-white" : "text-zinc-300"}`}>
                        {item.title}
                      </p>
                      <span className="text-[10px] text-zinc-500 font-mono whitespace-nowrap">{item.time}</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed mt-1 line-clamp-2">
                      {item.message}
                    </p>
                  </div>
                  {!item.read && (
                    <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-850 bg-zinc-900/40 text-[11px]">
              <span className="text-zinc-500">EventSphere Notification Stream</span>
              <button
                onClick={() => clearAll()}
                className="text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-1 font-medium"
              >
                <Trash2 className="w-3 h-3" /> Clear list
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
