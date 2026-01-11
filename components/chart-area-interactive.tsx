"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ChartPieSeparatorNone } from "@/components/ui/chart-pie-seperator-none"

export const description = "An interactive area chart"

const chartData = [
  { date: "2024-04-01", asset: 222 },
  { date: "2024-04-02", asset: 97 },
  { date: "2024-04-03", asset: 167 },
  { date: "2024-04-04", asset: 242 },
  { date: "2024-04-05", asset: 373 },
  { date: "2024-04-06", asset: 301 },
  { date: "2024-04-07", asset: 245 },
  { date: "2024-04-08", asset: 409 },
  { date: "2024-04-09", asset: 59 },
  { date: "2024-04-10", asset: 261 },
  { date: "2024-04-11", asset: 327 },
  { date: "2024-04-12", asset: 292 },
  { date: "2024-04-13", asset: 342 },
  { date: "2024-04-14", asset: 137 },
  { date: "2024-04-15", asset: 120 },
  { date: "2024-04-16", asset: 138 },
  { date: "2024-04-17", asset: 446 },
  { date: "2024-04-18", asset: 364 },
  { date: "2024-04-19", asset: 243 },
  { date: "2024-04-20", asset: 89 },
  { date: "2024-04-21", asset: 137 },
  { date: "2024-04-22", asset: 224 },
  { date: "2024-04-23", asset: 138 },
  { date: "2024-04-24", asset: 387 },
  { date: "2024-04-25", asset: 215 },
  { date: "2024-04-26", asset: 75 },
  { date: "2024-04-27", asset: 383 },
  { date: "2024-04-28", asset: 122 },
  { date: "2024-04-29", asset: 315 },
  { date: "2024-04-30", asset: 454 },
  { date: "2024-05-01", asset: 165 },
  { date: "2024-05-02", asset: 293 },
  { date: "2024-05-03", asset: 247 },
  { date: "2024-05-04", asset: 385 },
  { date: "2024-05-05", asset: 481 },
  { date: "2024-05-06", asset: 498 },
  { date: "2024-05-07", asset: 388 },
  { date: "2024-05-08", asset: 149 },
  { date: "2024-05-09", asset: 227 },
  { date: "2024-05-10", asset: 293 },
  { date: "2024-05-11", asset: 335 },
  { date: "2024-05-12", asset: 197 },
  { date: "2024-05-13", asset: 197 },
  { date: "2024-05-14", asset: 448 },
  { date: "2024-05-15", asset: 473 },
  { date: "2024-05-16", asset: 338 },
  { date: "2024-05-17", asset: 499 },
  { date: "2024-05-18", asset: 315 },
  { date: "2024-05-19", asset: 235 },
  { date: "2024-05-20", asset: 177 },
  { date: "2024-05-21", asset: 82 },
  { date: "2024-05-22", asset: 81 },
  { date: "2024-05-23", asset: 252 },
  { date: "2024-05-24", asset: 294 },
  { date: "2024-05-25", asset: 201 },
  { date: "2024-05-26", asset: 213 },
  { date: "2024-05-27", asset: 420 },
  { date: "2024-05-28", asset: 233 },
  { date: "2024-05-29", asset: 78 },
  { date: "2024-05-30", asset: 340 },
  { date: "2024-05-31", asset: 178 },
  { date: "2024-06-01", asset: 178 },
  { date: "2024-06-02", asset: 470 },
  { date: "2024-06-03", asset: 103 },
  { date: "2024-06-04", asset: 439 },
  { date: "2024-06-05", asset: 88 },
  { date: "2024-06-06", asset: 294 },
  { date: "2024-06-07", asset: 323 },
  { date: "2024-06-08", asset: 385 },
  { date: "2024-06-09", asset: 438 },
  { date: "2024-06-10", asset: 155 },
  { date: "2024-06-11", asset: 92 },
  { date: "2024-06-12", asset: 492 },
  { date: "2024-06-13", asset: 81 },
  { date: "2024-06-14", asset: 426 },
  { date: "2024-06-15", asset: 307 },
  { date: "2024-06-16", asset: 371 },
  { date: "2024-06-17", asset: 475 },
  { date: "2024-06-18", asset: 107 },
  { date: "2024-06-19", asset: 341 },
  { date: "2024-06-20", asset: 408 },
  { date: "2024-06-21", asset: 169 },
  { date: "2024-06-22", asset: 317 },
  { date: "2024-06-23", asset: 480 },
  { date: "2024-06-24", asset: 132 },
  { date: "2024-06-25", asset: 141 },
  { date: "2024-06-26", asset: 434 },
  { date: "2024-06-27", asset: 448 },
  { date: "2024-06-28", asset: 149 },
  { date: "2024-06-29", asset: 103 },
  { date: "2024-06-30", asset: 446 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  asset: {
    label: "Asset",
    color: "var(--primary)",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <>
      <Card className="@container/card">
      <CardHeader>
        <CardTitle>Total Assets</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillAsset" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-asset)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-asset)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="asset"
              type="natural"
              fill="url(#fillAsset)"
              stroke="var(--color-asset)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
      <div className="mt-6">
        <ChartPieSeparatorNone />
      </div>
    </>
  )
}
