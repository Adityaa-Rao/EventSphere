"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { User, Bell, Shield, Palette, Check, Save } from "lucide-react"

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
    <div className="flex flex-col gap-8 max-w-4xl mx-auto pb-16">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Settings</h2>
        <p className="text-zinc-400 mt-1">Manage your account profile, notifications, and preferences.</p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-8">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">Profile Information</h3>
              <p className="text-xs text-zinc-400">Update your public creator profile and credentials.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-zinc-950 font-extrabold text-2xl shadow-lg shadow-yellow-400/20">
              JD
            </div>
            <div>
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-yellow-400 hover:border-yellow-400/40 transition-colors"
              >
                Change Avatar
              </button>
              <p className="text-[11px] text-zinc-500 mt-1.5">JPG, PNG or GIF. 1MB max.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-300">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-zinc-300">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-zinc-300">Bio</label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
            />
          </div>
        </motion.div>

        {/* Notifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">Notifications</h3>
              <p className="text-xs text-zinc-400">Configure how and when EventSphere reaches you.</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="flex items-center justify-between p-3 rounded-xl border border-zinc-800 bg-zinc-950/60 cursor-pointer hover:border-zinc-700 transition-colors">
              <div>
                <p className="text-sm font-semibold text-zinc-200">Email Notifications</p>
                <p className="text-xs text-zinc-400">Receive alerts when someone registers for your events.</p>
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

            <label className="flex items-center justify-between p-3 rounded-xl border border-zinc-800 bg-zinc-950/60 cursor-pointer hover:border-zinc-700 transition-colors">
              <div>
                <p className="text-sm font-semibold text-zinc-200">Event Reminders</p>
                <p className="text-xs text-zinc-400">Get reminders 24h and 1h before events you are attending.</p>
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl flex flex-col gap-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">Theme & Aesthetics</h3>
              <p className="text-xs text-zinc-400">Default color system: Gray, Silver & Gold Yellow edition.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-yellow-400/40 text-xs text-yellow-400 font-bold">
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              Cyber Gold Yellow
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-zinc-300 font-semibold">
              <span className="w-3 h-3 rounded-full bg-slate-300" />
              Brushed Silver
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-950 border border-zinc-700 text-xs text-zinc-400 font-semibold">
              <span className="w-3 h-3 rounded-full bg-zinc-700" />
              Obsidian Gray
            </div>
          </div>
        </motion.div>

        {/* Action button */}
        <div className="flex items-center justify-end gap-4">
          {saved && (
            <span className="flex items-center gap-1.5 text-xs text-yellow-400 font-bold">
              <Check className="w-4 h-4" /> Preferences saved successfully!
            </span>
          )}
          <button
            type="submit"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-zinc-950 font-bold text-sm shadow-lg shadow-yellow-400/20 hover:scale-105 transition-transform"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
