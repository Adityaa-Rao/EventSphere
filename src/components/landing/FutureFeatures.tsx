"use client"

import * as React from "react"
import { Globe, Radio, Cpu, Receipt, Sparkles } from "lucide-react"

const roadmap = [
  {
    icon: Globe,
    title: "Custom Domain Mapping",
    description: "Map your own root or subdomain (e.g. events.acme.com) with automatic zero-configuration SSL certificates.",
    quarter: "Q1 2027",
  },
  {
    icon: Radio,
    title: "Integrated Breakout Stages",
    description: "Native WebRTC audio and video discussion rooms for hybrid attendees without leaving the schedule interface.",
    quarter: "Q1 2027",
  },
  {
    icon: Cpu,
    title: "NFC & Physical Badge Sync",
    description: "Write gate passes to physical RFID wristbands and NFC badges with standard handheld readers.",
    quarter: "Q2 2027",
  },
  {
    icon: Receipt,
    title: "Global Tax & VAT Automation",
    description: "Automated reverse-charge B2B invoicing, EU VAT compliance, and localized tax deduction receipts.",
    quarter: "Q2 2027",
  },
]

export function FutureFeatures() {
  return (
    <section className="py-24 border-t border-zinc-850 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wider rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architecture Roadmap</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Upcoming <span className="text-gradient">Platform Milestones</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm text-zinc-400 mt-2">
            Features currently in active development to extend developer and enterprise gathering workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmap.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-zinc-850 bg-zinc-900/30 hover:border-zinc-750 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-zinc-850 text-yellow-400 flex items-center justify-center">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-zinc-850 text-zinc-400 border border-zinc-800">
                    {item.quarter}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-850/80 text-[11px] font-mono text-yellow-400/80">
                In Development →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
