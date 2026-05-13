"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-32 overflow-hidden text-center md:pt-40">
      {/* Background Gradients */}
      <div className="absolute top-0 inset-x-0 h-screen mesh-gradient opacity-20 -z-10" />
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[140px] -z-10 animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium border rounded-full glass-card text-primary border-primary/20 bg-white/5 backdrop-blur-xl"
      >
        <Star className="w-4 h-4 fill-primary" />
        <span>The #1 Premium Event Management Platform</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl mb-6 text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-9xl"
      >
        Create events that <br className="hidden md:block" />
        <span className="text-gradient">people remember.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mb-10 text-lg text-muted-foreground md:text-2xl leading-relaxed"
      >
        EventSphere is the all-in-one platform to discover, organize, and manage
        premium events with ease. Join thousands of creators today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col gap-4 sm:flex-row relative z-20"
      >
        <Link
          href="/register"
          className="group relative flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-white transition-all rounded-full bg-primary hover:bg-primary/90 hover:shadow-[0_0_40px_rgba(var(--primary),0.5)] overflow-hidden"
        >
          <span className="relative z-10">Start for Free</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Link>
        <Link
          href="#events"
          className="flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold transition-all border rounded-full glass hover:bg-white/10 hover:scale-105"
        >
          Explore Events
        </Link>
      </motion.div>

      {/* Mockup Dashboard Image */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl mt-24 group"
        style={{ perspective: "2000px" }}
      >
        <div className="absolute -inset-4 bg-gradient-to-b from-primary/20 to-transparent rounded-[2rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        <div className="relative border rounded-3xl glass-card overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] p-3 bg-white/5 border-white/20 aspect-video flex items-center justify-center animate-float">
          <div className="absolute inset-0 bg-zinc-950/40 rounded-2xl flex flex-col items-center justify-center backdrop-blur-[2px]">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
              <Star className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <span className="text-zinc-400 font-bold tracking-widest text-sm uppercase">Next-Gen Interface Preview</span>
          </div>
          
          {/* Decorative Corners */}
          <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/40 rounded-br-xl" />
        </div>
      </motion.div>
    </section>
  )
}
