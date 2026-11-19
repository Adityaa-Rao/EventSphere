"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { User, Bell, Palette, Check, Save } from "lucide-react"

export default function SettingsPage() {
  const [name, setName] = React.useState("John Doe")
  const [email, setEmail] = React.useState("john@example.com")
  const [bio, setBio] = React.useState("Event producer & community manager organizing tech conferences.")
  const [notifications, setNotifications] = React.useState({
    emailAlerts: true,
    reminders: true,
    marketing: false,
  })
  const [saved, setSaved] = React.useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-16">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Settings</h2>
        <p className="text-zinc-400 text-xs sm:text-sm mt-1">Manage your account profile, notifications, and preferences.</p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-md flex flex-col gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">Profile Information</h3>
              <p className="text-xs text-zinc-400">Update your public creator profile and credentials.</p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/[0.12] flex items-center justify-center text-zinc-100 font-extrabold text-xl shadow-sm">
              JD
            </div>
            <div>
              <button
                type="button"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 border border-white/[0.08] text-zinc-200 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                Change Avatar
              </button>
              <p className="text-[11px] text-zinc-500 mt-1">JPG, PNG or WebP. 2MB max.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-300">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-950/80 border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-300">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-950/80 border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-zinc-300">Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-zinc-950/80 border border-white/[0.08] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
            />
          </div>
        </motion.div>

        {/* Notifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-md flex flex-col gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">Notifications</h3>
              <p className="text-xs text-zinc-400">Configure how and when EventSphere reaches you.</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/60 cursor-pointer hover:border-white/[0.12] transition-colors">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200">Email Notifications</p>
                <p className="text-[11px] text-zinc-400">Receive alerts when someone registers for your events.</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.emailAlerts}
                onChange={(e) =>
                  setNotifications({ ...notifications, emailAlerts: e.target.checked })
                }
                className="w-4 h-4 accent-yellow-400 rounded cursor-pointer"
              />
            </label>

            <label className="flex items-center justify-between p-3.5 rounded-xl border border-white/[0.06] bg-zinc-950/60 cursor-pointer hover:border-white/[0.12] transition-colors">
              <div>
                <p className="text-xs sm:text-sm font-semibold text-zinc-200">Event Reminders</p>
                <p className="text-[11px] text-zinc-400">Get reminders 24h and 1h before events you are attending.</p>
              </div>
              <input
                type="checkbox"
                checked={notifications.reminders}
                onChange={(e) =>
                  setNotifications({ ...notifications, reminders: e.target.checked })
                }
                className="w-4 h-4 accent-yellow-400 rounded cursor-pointer"
              />
            </label>
          </div>
        </motion.div>

        {/* Theme & Styling */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-zinc-900/40 backdrop-blur-md flex flex-col gap-6 shadow-sm"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
            <div className="w-9 h-9 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <Palette className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">Theme & Aesthetics</h3>
              <p className="text-xs text-zinc-400">High-contrast obsidian theme with precision gold accents.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-yellow-400/40 text-xs text-yellow-400 font-bold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              Obsidian & Amber Gold
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-950 border border-white/[0.08] text-xs text-zinc-400 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              Minimal Slate
            </div>
          </div>
        </motion.div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-3 pt-2">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold animate-in fade-in">
              <Check className="w-4 h-4" /> Preferences saved!
            </span>
          )}
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95"
          >
            <Save className="w-4 h-4 stroke-[2.5]" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
