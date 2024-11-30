import * as React from "react"
import { cn } from "@/lib/utils"
import { Award } from 'lucide-react'

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: 'default' | 'secondary' | 'destructive' | 'outline'
  }
>(({ className, variant = 'default', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      {
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80':
          variant === 'default',
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80':
          variant === 'secondary',
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80':
          variant === 'destructive',
        'border-border bg-background hover:bg-muted': variant === 'outline',
      },
      className
    )}
    {...props}
  />
))
Badge.displayName = "Badge"

export default function BadgeDisplay(){
  return (
    <div>
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}

