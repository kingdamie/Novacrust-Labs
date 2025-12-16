import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        /* Base */
        "h-11 w-full rounded-full border border-border bg-transparent px-4 text-base shadow-sm outline-none transition",
        "placeholder:text-muted-foreground text-foreground",

        /* File input */
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",

        /* Focus */
        "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-ring",

        /* Disabled */
        "disabled:cursor-not-allowed disabled:opacity-50",

        /* Invalid */
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",

        className
      )}
      {...props}
    />
  );
}

export { Input };
