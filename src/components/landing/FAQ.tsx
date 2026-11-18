"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react"

const faqs = [
  {
    q: "Is EventSphere free to use for free community events?",
    a: "Yes! EventSphere is 100% free with unlimited attendees, zero ticketing fees, and full RSVP management for free events.",
  },
  {
    q: "How does the QR code ticketing & gate check-in work?",
    a: "Every attendee receives a unique, cryptographically verified QR code badge via email and in their dashboard. Organizers can scan codes instantly with any phone camera or tablet.",
  },
  {
    q: "Can I host virtual, hybrid, and in-person events?",
    a: "Absolutely. EventSphere supports physical venues with interactive maps, fully virtual streams (Zoom, YouTube, Twitch, custom RTMP), or hybrid multi-track configurations.",
  },
  {
    q: "Does EventSphere sync with Google Calendar, Outlook, and Apple iCal?",
    a: "Yes, attendees can add any confirmed RSVP to their favorite calendar with a single click, and any schedule change updates automatically.",
  },
  {
    q: "What payment processors are supported for paid tickets?",
    a: "We support Stripe, PayPal, and Apple Pay across 135+ currencies with instant organizer payouts and automatic invoice generation.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq" className="py-28 px-4 mx-auto max-w-4xl relative">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Got Questions?</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-base">
          Find clear answers to common questions about organizing and attending events on EventSphere.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-yellow-400/40 bg-zinc-900/80 shadow-[0_0_25px_rgba(250,204,21,0.06)]"
                  : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left text-base sm:text-lg font-bold text-zinc-100 hover:text-yellow-400 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-yellow-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
