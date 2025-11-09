'use client';

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all duration-200 ease-in-out disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#6C63FF] text-white hover:bg-[#8B80FF] shadow-[0_0_10px_rgba(108,99,255,0.4)] hover:shadow-[0_0_15px_rgba(108,99,255,0.6)]",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-[0_0_10px_rgba(220,38,38,0.4)]",
        outline: "bg-[#1A1A1A] text-white hover:bg-[#252525] border border-[rgba(255,255,255,0.1)]",
        secondary: "bg-[#1A1A1A] text-white hover:bg-[#252525] border border-[rgba(255,255,255,0.1)]",
        ghost: "text-[#A1A1A1] hover:text-white hover:bg-[#1A1A1A]",
        link: "text-[#6C63FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "px-3 py-1.5 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
