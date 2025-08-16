// "use client";

// import { TrendingUp } from "lucide-react";
// import {
//   Area,
//   AreaChart,
//   CartesianGrid,
//   ResponsiveContainer,
//   Tooltip as RechartsTooltip,
//   XAxis,
// } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// import { cn } from "@/lib/utils";
// import { ReactNode } from "react";

// // Chart data
// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ];

// // Chart configuration
// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "#6366f1", // Tailwind's indigo-500
//   },
//   mobile: {
//     label: "Mobile",
//     color: "#10b981", // Tailwind's emerald-500
//   },
// } satisfies ChartConfig;

// // Chart container
// function ChartContainer({
//   children,
//   config,
// }: {
//   children: ReactNode;
//   config: ChartConfig;
// }) {
//   return (
//     <div
//       className="w-full"
//       style={
//         {
//           "--color-desktop": config.desktop.color,
//           "--color-mobile": config.mobile.color,
//         } as React.CSSProperties
//       }
//     >
//       {children}
//     </div>
//   );
// }

// // Chart tooltip wrapper
// function ChartTooltip({
//   content,
//   cursor = true,
// }: {
//   content: ReactNode;
//   cursor?: boolean;
// }) {
//   return <RechartsTooltip content={content as any} cursor={cursor} />;
// }

// // Custom tooltip content
// function ChartTooltipContent({
//   active,
//   payload,
//   label,
//   indicator = "dot",
// }: any) {
//   if (!active || !payload || payload.length === 0) return null;

//   return (
//     <div className="rounded-md border bg-background p-2 shadow-sm">
//       <p className="text-sm font-semibold">{label}</p>
//       <div className="flex flex-col gap-1 mt-2">
//         {payload.map((entry: any, i: number) => (
//           <div key={i} className="flex items-center text-sm gap-2">
//             <span
//               className={cn("h-2 w-2 rounded-full")}
//               style={{ backgroundColor: entry.color }}
//             />
//             <span>
//               {entry.name}: {entry.value}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Main chart card
// export function AreaChartCard({title, subtitle}: {title: string, subtitle: string}) {
//   return (
//     <Card className="w-full">
//       <CardHeader>
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>
//           {subtitle}
//         </CardDescription>
//       </CardHeader>
//       <CardContent>
//         <ChartContainer config={chartConfig}>
//           <ResponsiveContainer width="100%" aspect={2}>
//             <AreaChart
//               data={chartData}
//               margin={{ left: 12, right: 12 }}
//             >
//               <CartesianGrid vertical={false} />
//               <XAxis
//                 dataKey="month"
//                 tickLine={false}
//                 axisLine={false}
//                 tickMargin={8}
//                 tickFormatter={(value) => value.slice(0, 3)}
//               />
//               <ChartTooltip
//                 cursor={false}
//                 content={<ChartTooltipContent indicator="dot" />}
//               />
//               <Area
//                 dataKey="mobile"
//                 type="monotone"
//                 fill={chartConfig.mobile.color}
//                 stroke={chartConfig.mobile.color}
//                 fillOpacity={0.4}
//                 stackId="a"
//               />
//               <Area
//                 dataKey="desktop"
//                 type="monotone"
//                 fill={chartConfig.desktop.color}
//                 stroke={chartConfig.desktop.color}
//                 fillOpacity={0.4}
//                 stackId="a"
//               />
//             </AreaChart>
//           </ResponsiveContainer>
//         </ChartContainer>
//       </CardContent>
//       <CardFooter>
//         <div className="flex w-full items-start gap-2 text-sm">
//           <div className="grid gap-2">
//             <div className="flex items-center gap-2 font-medium leading-none">
//               Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
//             </div>
//             <div className="flex items-center gap-2 leading-none text-muted-foreground">
//               January – June 2024
//             </div>
//           </div>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// // Type
// type ChartConfig = Record<
//   string,
//   {
//     label: string;
//     color: string;
//   }
// >;

"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Type
type ChartData = {
  month: string;
  [key: string]: string | number;
};

type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

// Chart configuration
const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "#0B91E4", // Tailwind's indigo-500
  },
  mobile: {
    label: "Mobile",
    color: "#15D11C", // Tailwind's emerald-500
  },
};

// Chart container
function ChartContainer({
  children,
  config,
}: {
  children: ReactNode;
  config: ChartConfig;
}) {
  return (
    <div
      className="w-full"
      style={
        {
          "--color-desktop": config.desktop.color,
          "--color-mobile": config.mobile.color,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

// Chart tooltip wrapper
function ChartTooltip({
  content,
  cursor = true,
}: {
  content: ReactNode;
  cursor?: boolean;
}) {
  return <RechartsTooltip content={content as any} cursor={cursor} />;
}

// Custom tooltip content
function ChartTooltipContent({
  active,
  payload,
  label,
  indicator = "dot",
}: any) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      <p className="text-sm font-semibold">{label}</p>
      <div className="flex flex-col gap-1 mt-2">
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center text-sm gap-2">
            <span
              className={cn("h-2 w-2 rounded-full")}
              style={{ backgroundColor: entry.color }}
            />
            <span>
              {entry.name}: {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main chart card
export function AreaChartCard({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: ChartData[];
}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <ResponsiveContainer width="100%" aspect={2}>
            <AreaChart data={data} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Area
                dataKey="mobile"
                type="monotone"
                fill={chartConfig.mobile.color}
                stroke={chartConfig.mobile.color}
                fillOpacity={0.4}
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="monotone"
                fill={chartConfig.desktop.color}
                stroke={chartConfig.desktop.color}
                fillOpacity={0.4}
                stackId="a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January – June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
