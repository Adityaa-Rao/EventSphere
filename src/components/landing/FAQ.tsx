"use client"

import * as React from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    q: "How does the QR pass check-in operate at the door?",
    a: "Every attendee receives a unique, cryptographically signed digital pass containing a high-contrast QR code. Organizers or door staff can scan the code using the camera on any smartphone or tablet directly in the browser—no specialized hardware or app download required.",
  },
  {
    q: "Are free events truly free with no hidden charges?",
    a: "Yes. For non-ticketed or zero-dollar community events, EventSphere charges $0 platform fees, $0 per-ticket fees, and allows unlimited RSVPs with full attendee roster exports.",
  },
  {
    q: "Can I collect attendee information with custom questions?",
    a: "Yes. You can configure custom checkout fields such as dietary preferences, job titles, GitHub profiles, and breakout workshop selections during registration.",
  },
  {
    q: "How are ticket payments and refunds handled for paid tiers?",
    a: "Payments are processed directly via your connected Stripe account across 135+ currencies. Revenue settles straight to your organization's bank account, and refunds can be issued with one click from your organizer dashboard.",
  },
  {
    q: "How does multi-platform calendar synchronization work?",
    a: "When an attendee registers, they receive an immediate .ics calendar download and deep links for Google Calendar, Apple iCal, and Microsoft Outlook. If you modify session dates or venues, subscribed calendars update automatically.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-4 mx-auto max-w-3xl">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Operational Details</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Frequently Answered <span className="text-gradient">Questions</span>
        </h2>
        <p className="mt-2 text-zinc-400 text-xs sm:text-sm">
          Everything you need to know about publishing and managing gatherings on EventSphere.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-xl border transition-colors overflow-hidden ${
                isOpen ? "border-zinc-700 bg-zinc-900/70" : "border-zinc-850 bg-zinc-900/30 hover:border-zinc-800"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-5 py-4 flex items-center justify-between text-left text-sm font-bold text-white hover:text-yellow-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-yellow-400 transition-transform duration-200 flex-shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                  {faq.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
