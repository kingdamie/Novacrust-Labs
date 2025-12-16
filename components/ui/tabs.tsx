"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-neutral-100 text-neutral-500 inline-flex h-9 w-fit items-center justify-center rounded-full p-0.75 dark:bg-neutral-800 dark:text-neutral-400",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        `
        inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 
        rounded-full border border-transparent px-4 py-2 text-sm font-medium whitespace-nowrap
        transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50
        focus-visible:ring-[3px] focus-visible:outline-1

        /* Active state */
        data-[state=active]:bg-(--color-primary) 
        data-[state=active]:text-white
        data-[state=active]:border-(--color-border)
        data-[state=active]:shadow-sm
        `,
        className
      )}
      {...props}
    />
  )
}


function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
