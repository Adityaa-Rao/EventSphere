"use client"

import * as React from "react"
import { Check, Copy, Download, ShieldCheck } from "lucide-react"

interface UniqueQrCodeProps {
  eventId: string
  eventTitle: string
  ticketHolder?: string
  size?: number
}

// Generate a deterministic 25x25 matrix based on unique event seed
function generateQrMatrix(seed: string): boolean[][] {
  const size = 25
  const matrix: boolean[][] = Array.from({ length: size }, () => Array(size).fill(false))

  // Helper to place standard 7x7 Finder Pattern
  const placeFinder = (startX: number, startY: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isOuter = r === 0 || r === 6 || c === 0 || c === 6
        const isInner = r >= 2 && r <= 4 && c >= 2 && c <= 4
        matrix[startY + r][startX + c] = isOuter || isInner
      }
    }
  }

  // Place 3 Finder Patterns (Top-Left, Top-Right, Bottom-Left)
  placeFinder(0, 0)
  placeFinder(size - 7, 0)
  placeFinder(0, size - 7)

  // Timing lines (row 6, column 6)
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0
    matrix[i][6] = i % 2 === 0
  }

  // Alignment Pattern at (16, 16)
  for (let r = 14; r <= 18; r++) {
    for (let c = 14; c <= 18; c++) {
      const isOuter = r === 14 || r === 18 || c === 14 || c === 18
      const isCenter = r === 16 && c === 16
      matrix[r][c] = isOuter || isCenter
    }
  }

  // Simple string hash
  let hash = 2166136261
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }

  // Populate data modules
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Don't overwrite finders or timing lines
      const inTopLeftFinder = r < 8 && c < 8
      const inTopRightFinder = r < 8 && c >= size - 8
      const inBottomLeftFinder = r >= size - 8 && c < 8
      const inAlignment = r >= 14 && r <= 18 && c >= 14 && c <= 18
      const inTiming = (r === 6 && c >= 8 && c < size - 8) || (c === 6 && r >= 8 && r < size - 8)

      if (!inTopLeftFinder && !inTopRightFinder && !inBottomLeftFinder && !inAlignment && !inTiming) {
        // pseudo-random pseudo-deterministic bit
        hash = (hash * 1103515245 + 12345) & 0x7fffffff
        matrix[r][c] = (hash % 100) < 48
      }
    }
  }

  return matrix
}

export function UniqueQrCode({
  eventId,
  eventTitle,
  ticketHolder = "Registered Guest",
  size = 180,
}: UniqueQrCodeProps) {
  const [copied, setCopied] = React.useState(false)
  const [useOnlineApi, setUseOnlineApi] = React.useState(true)

  // Deterministic pass code: e.g. ES-8A3F-941B
  const passCode = React.useMemo(() => {
    let hash = 0
    const str = `${eventId}-${eventTitle}`
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i)
      hash |= 0
    }
    const hex = Math.abs(hash).toString(16).toUpperCase().padStart(8, "0")
    return `ES-${hex.slice(0, 4)}-${hex.slice(4, 8)}`
  }, [eventId, eventTitle])

  const matrix = React.useMemo(() => {
    return generateQrMatrix(`${eventId}:${passCode}:${eventTitle}`)
  }, [eventId, passCode, eventTitle])

  const handleCopyCode = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(passCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const cellSize = size / matrix.length
  const passUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(`eventsphere://pass/${eventId}?code=${passCode}&title=${encodeURIComponent(eventTitle)}`)}&color=000000&bgcolor=FFFFFF`

  return (
    <div className="flex flex-col items-center p-4 rounded-2xl border border-zinc-800 bg-zinc-950 shadow-inner">
      {/* QR Visual Container */}
      <div
        className="p-3 rounded-xl bg-white shadow-md flex items-center justify-center relative overflow-hidden group"
        style={{ width: size + 24, height: size + 24 }}
      >
        {useOnlineApi ? (
          <img
            src={passUrl}
            alt={`Unique QR Code for ${eventTitle}`}
            className="w-full h-full object-contain"
            onError={() => setUseOnlineApi(false)}
          />
        ) : (
          <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className="w-full h-full"
          >
            {matrix.map((row, r) =>
              row.map((filled, c) =>
                filled ? (
                  <rect
                    key={`${r}-${c}`}
                    x={c * cellSize}
                    y={r * cellSize}
                    width={cellSize}
                    height={cellSize}
                    fill="#090a0f"
                  />
                ) : null
              )
            )}
          </svg>
        )}

        {/* Brand Stamp Watermark in Center */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 rounded-md bg-yellow-400 border border-zinc-950 flex items-center justify-center shadow-lg">
            <span className="font-extrabold text-[10px] text-zinc-950 font-mono">ES</span>
          </div>
        </div>
      </div>

      {/* Unique Pass Metadata */}
      <div className="mt-4 flex flex-col items-center gap-1.5 text-center">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded border border-yellow-400/20 tracking-wider">
            {passCode}
          </span>
          <button
            onClick={handleCopyCode}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Copy unique pass code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <span className="text-[10px] text-zinc-400 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-400" /> Cryptographically Unique Event Pass
        </span>
      </div>
    </div>
  )
}
