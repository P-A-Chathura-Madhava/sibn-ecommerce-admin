// components/ui/chart.tsx
"use client"

import { ReactNode } from "react"
import { TooltipProps } from "recharts"
import { cn } from "@/lib/utils"

export type ChartConfig = Record<
  string,
  {
    label: string
    color: string
  }
>

export function ChartContainer({
  children,
  config,
}: {
  children: ReactNode
  config: ChartConfig
}) {
  return (
    <div
      className="w-full h-[300px]"
      style={{
        "--color-desktop": config.desktop.color,
        "--color-mobile": config.mobile.color,
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
}

export function ChartTooltip({
  content,
  cursor = true,
}: {
  content: ReactNode
  cursor?: boolean
}) {
  return (
    <RechartsTooltip content={content as any} cursor={cursor} />
  )
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "dot",
}: TooltipProps<string, string> & {
  indicator?: "dot" | "line"
}) {
  if (!active || !payload || payload.length === 0) return null
  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      <p className="text-sm font-semibold">{label}</p>
      <div className="flex flex-col gap-1 mt-2">
        {payload.map((entry, i) => (
          <div key={i} className="flex items-center text-sm gap-2">
            <span
              className={cn("h-2 w-2 rounded-full")}
              style={{ backgroundColor: entry.color }}
            />
            <span>{entry.name}: {entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

import { Tooltip as RechartsTooltip } from "recharts"
