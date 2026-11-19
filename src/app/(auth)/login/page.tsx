"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call and redirect
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1200)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-extrabold tracking-tight text-white">Welcome back</h1>
        <p className="text-xs text-zinc-400 mt-1.5">
          Enter your credentials to access your EventSphere account.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold text-zinc-300">Email Address</label>
          <input
            type="email"
            defaultValue="john@example.com"
            placeholder="name@example.com"
            required
            className="flex h-10 w-full rounded-xl border border-white/[0.08] bg-zinc-950/80 px-4 py-2 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>
        
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold text-zinc-300">Password</label>
            <Link href="#" className="text-[11px] font-medium text-yellow-400 hover:underline">
              Forgot password?
            </Link>
          </div>
          <input
            type="password"
            defaultValue="••••••••"
            placeholder="••••••••"
            required
            className="flex h-10 w-full rounded-xl border border-white/[0.08] bg-zinc-950/80 px-4 py-2 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-yellow-400 transition-colors"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs sm:text-sm font-bold transition-all focus:outline-none disabled:opacity-50 bg-yellow-400 hover:bg-yellow-300 text-zinc-950 h-10 px-4 py-2 mt-2 shadow-sm active:scale-95"
        >
          {isLoading ? "Signing in..." : "Sign In to Dashboard"}
        </button>
      </form>

      <div className="relative my-1">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-white/[0.08]" />
        </div>
        <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
          <span className="px-2 bg-zinc-900 text-zinc-500 rounded-full">
            Or continue with
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => router.push("/dashboard")}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-semibold transition-colors border border-white/[0.08] bg-zinc-950/60 hover:bg-white/[0.04] text-zinc-200 h-10 px-4 py-2"
      >
        <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2" aria-hidden="true">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Sign in with Google
      </button>

      <div className="text-xs text-center text-zinc-400 mt-2">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-bold text-yellow-400 hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  )
}
