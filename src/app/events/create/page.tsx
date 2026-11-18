"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Upload, Image as ImageIcon, Calendar as CalendarIcon, MapPin, Clock, Tag, Check, DollarSign, X, Sparkles, Trash2 } from "lucide-react"
import { saveNewEvent } from "@/lib/events-store"

const PRESET_BANNERS = [
  { name: "Tech / Cyber", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format&fit=crop&q=80" },
  { name: "Design Studio", url: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80" },
  { name: "Executive Salon", url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&auto=format&fit=crop&q=80" },
  { name: "Live Stage", url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80" },
]

export default function CreateEventPage() {
  const router = useRouter()
  const fileInputRef = React.useRef<HTMLInputElement>(null)

  const [title, setTitle] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [date, setDate] = React.useState("")
  const [time, setTime] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [category, setCategory] = React.useState<"Tech" | "Design" | "Founders" | "Music" | "Community">("Tech")
  const [price, setPrice] = React.useState("Free")
  const [capacity, setCapacity] = React.useState("150")

  // Photo state
  const [coverImage, setCoverImage] = React.useState<string>(PRESET_BANNERS[0].url)
  const [imageFileName, setImageFileName] = React.useState<string>("")
  const [isCustomUpload, setIsCustomUpload] = React.useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [success, setSuccess] = React.useState(false)
  const [errorMsg, setErrorMsg] = React.useState("")

  // Handle local file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please select a valid image file (PNG, JPG, WebP).")
      return
    }

    // Limit to 5MB
    if (file.size > 5 * 1024 * 1024) {
      setErrorMsg("Image size exceeds 5MB limit. Please choose a smaller image.")
      return
    }

    setErrorMsg("")
    setImageFileName(file.name)

    const reader = new FileReader()
    reader.onload = (event) => {
      if (typeof event.target?.result === "string") {
        setCoverImage(event.target.result)
        setIsCustomUpload(true) // Lock custom photo!
      }
    }
    reader.readAsDataURL(file)
  }

  // Remove custom photo and revert to a preset
  const handleRemoveCustomPhoto = () => {
    setIsCustomUpload(false)
    setImageFileName("")
    setCoverImage(PRESET_BANNERS[0].url)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Handle preset selection (only if user explicitly clicks preset)
  const handleSelectPreset = (url: string) => {
    setCoverImage(url)
    setIsCustomUpload(false)
    setImageFileName("")
    setErrorMsg("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg("")

    if (!title.trim()) {
      setErrorMsg("Please provide an event title.")
      return
    }
    if (!date) {
      setErrorMsg("Please select a date for the event.")
      return
    }
    if (!location.trim()) {
      setErrorMsg("Please enter an event venue or virtual link.")
      return
    }

    setIsSubmitting(true)

    try {
      saveNewEvent({
        title,
        description: description || "No detailed description provided.",
        category,
        date,
        time: time || "10:00 AM",
        location,
        image: coverImage || PRESET_BANNERS[0].url,
        price,
        capacity: parseInt(capacity, 10) || 150,
      })

      setSuccess(true)
      setIsSubmitting(false)

      setTimeout(() => {
        router.push("/events")
      }, 1000)
    } catch {
      setIsSubmitting(false)
      setErrorMsg("Failed to save event. Please check your storage settings.")
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-yellow-400 selection:text-zinc-950">
      {/* Top Bar */}
      <header className="h-16 px-6 border-b border-zinc-850 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-30 flex items-center justify-between">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Catalog
          </Link>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-[11px] text-zinc-400 font-mono">Event Publisher</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Create New Event</h1>
          <p className="text-zinc-400 text-sm mt-1">
            Fill in the details below. Your uploaded photo will be locked to this event and published to the live registry.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-300 text-xs flex items-center justify-between">
            <span>{errorMsg}</span>
            <button onClick={() => setErrorMsg("")} className="text-red-400 hover:text-red-200">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          {/* Cover Photo Upload Section */}
          <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  <ImageIcon className="w-4 h-4 text-yellow-400" /> Event Cover Photo
                </h2>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {isCustomUpload
                    ? "Your custom image is locked and will be saved with the event."
                    : "Upload an image from your device or select an optional starter preset."}
                </p>
              </div>

              {isCustomUpload && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30 font-semibold flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Uploaded: {imageFileName || "Custom File"}
                  </span>
                  <button
                    type="button"
                    onClick={handleRemoveCustomPhoto}
                    className="p-1.5 rounded-lg border border-zinc-800 text-zinc-400 hover:text-red-400 hover:bg-zinc-800 transition-colors"
                    title="Remove custom photo and use preset"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>

            {/* Active Banner Preview with Upload Action */}
            <div className="relative aspect-[21/9] w-full rounded-xl border border-zinc-700/80 overflow-hidden bg-zinc-950 group">
              <img
                src={coverImage}
                alt="Event Cover Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent flex flex-col justify-end p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-xs text-zinc-300 font-medium">
                    {isCustomUpload ? "Custom photo locked • Click change to pick another" : "Recommended: 1920×1080 (16:9 or 21:9)"}
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-zinc-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                    >
                      <Upload className="w-3.5 h-3.5 stroke-[2.5]" />
                      {isCustomUpload ? "Change Custom Photo" : "Upload from Device"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Starter Presets: Disabled/Hidden when custom photo is active so it never overwrites! */}
            {!isCustomUpload ? (
              <div className="mt-4 pt-4 border-t border-zinc-800/80">
                <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2.5">
                  Or select an instant starter banner:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PRESET_BANNERS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => handleSelectPreset(preset.url)}
                      className={`relative rounded-lg overflow-hidden border p-1 text-left transition-all ${
                        coverImage === preset.url
                          ? "border-yellow-400 ring-1 ring-yellow-400/50 bg-zinc-850"
                          : "border-zinc-800 bg-zinc-900 hover:border-zinc-750"
                      }`}
                    >
                      <div className="aspect-video w-full rounded overflow-hidden mb-1.5">
                        <img src={preset.url} alt={preset.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[11px] font-semibold text-zinc-300 px-1 truncate block">
                        {preset.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mt-3 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Your custom image is locked and will not be overwritten by category choices.</span>
                <button
                  type="button"
                  onClick={handleRemoveCustomPhoto}
                  className="text-yellow-400 hover:underline font-semibold"
                >
                  Switch back to preset banners
                </button>
              </div>
            )}
          </section>

          {/* Event Essentials */}
          <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col gap-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-300">
              General Information
            </h2>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-300">Event Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. NextGen Web & AI Developer Summit 2026"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-yellow-400" /> Event Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                >
                  <option value="Tech">Tech</option>
                  <option value="Design">Design</option>
                  <option value="Founders">Founders</option>
                  <option value="Music">Music</option>
                  <option value="Community">Community</option>
                </select>
                <span className="text-[10px] text-zinc-500">
                  Categorizes your event in discovery filters (does not alter your custom cover photo).
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-yellow-400" /> Ticket Pricing
                </label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Free or $49"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-300">Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Give attendees a clear agenda, keynotes, prerequisites, and what to expect..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>
          </section>

          {/* Date & Location */}
          <section className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 flex flex-col gap-5">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-300">
              Date & Location
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <CalendarIcon className="w-3.5 h-3.5 text-yellow-400" /> Date *
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-yellow-400" /> Start Time
                </label>
                <input
                  type="text"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="e.g. 10:00 AM PST"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-zinc-300">Max Capacity</label>
                <input
                  type="number"
                  min="10"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  placeholder="150"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-yellow-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" /> Venue Address or Livestream URL *
              </label>
              <input
                type="text"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g. 101 California St, San Francisco, CA or https://zoom.us/j/..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>
          </section>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
            <Link
              href="/events"
              className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Cancel and Return
            </Link>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {success ? (
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <Check className="w-4 h-4" /> Published! Redirecting to catalog...
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-zinc-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                >
                  <Sparkles className="w-4 h-4 fill-zinc-950" />
                  {isSubmitting ? "Saving to Catalog..." : "Publish Event Live"}
                </button>
              )}
            </div>
          </div>
        </form>
      </main>
    </div>
  )
}
