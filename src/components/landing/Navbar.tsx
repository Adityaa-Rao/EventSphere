"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarDays, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-auto mt-4 max-w-7xl glass rounded-2xl"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
          <CalendarDays className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold tracking-tight">EventSphere</span>
      </Link>

      <nav className="hidden gap-8 md:flex">
        <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
          Features
        </Link>
        <Link href="#events" className="text-sm font-medium transition-colors hover:text-primary">
          Events
        </Link>
        <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
          Testimonials
        </Link>
      </nav>

      <div className="hidden gap-4 md:flex items-center">
        <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
          Sign In
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 text-sm font-medium text-white transition-transform rounded-full bg-primary hover:scale-105"
        >
          Get Started
        </Link>
      </div>

      <button
        className="md:hidden text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile menu could go here */}
    </motion.header>
  )
}
