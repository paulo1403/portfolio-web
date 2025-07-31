"use client";

import { forwardRef } from "react";
import { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconProps extends Omit<LucideProps, "ref"> {
  icon: LucideIcon;
  variant?: "default" | "primary" | "secondary" | "accent" | "muted";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const iconVariants = {
  variant: {
    default: "text-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
    muted: "text-muted-foreground",
  },
  size: {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
  },
};

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      icon: IconComponent,
      variant = "default",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <IconComponent
        ref={ref}
        className={cn(
          iconVariants.variant[variant],
          iconVariants.size[size],
          className
        )}
        {...props}
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon, type IconProps };
