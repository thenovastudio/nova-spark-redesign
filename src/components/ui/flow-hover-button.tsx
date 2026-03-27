import { cn } from '@/lib/utils'
import React from 'react'
import { Slot } from '@radix-ui/react-slot'

export const FlowHoverButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode
    children?: React.ReactNode
    variant?: 'default' | 'secondary' | 'outline'
    asChild?: boolean
  }
> = ({ icon, children, variant = 'default', className, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : 'button'
  const variantClasses = {
    default: 'border border-primary/30 dark:border-primary/40 bg-primary/10 dark:bg-primary/5 text-primary dark:text-primary hover:text-primary-foreground dark:hover:text-primary-foreground before:bg-primary dark:before:bg-primary',
    secondary: 'border border-secondary/30 dark:border-secondary/40 bg-secondary/10 dark:bg-secondary/5 text-secondary dark:text-secondary hover:text-secondary-foreground dark:hover:text-secondary-foreground before:bg-secondary dark:before:bg-secondary',
    outline: 'border border-border/60 dark:border-border/40 bg-background dark:bg-background text-foreground dark:text-foreground hover:text-primary-foreground dark:hover:text-secondary-foreground before:bg-foreground dark:before:bg-primary',
  }

  const buttonClasses = cn(
    `relative cursor-pointer z-0 flex items-center justify-center gap-2 overflow-hidden rounded-lg 
    px-6 py-3 font-semibold transition-all duration-300
    before:absolute before:inset-0 before:-z-10 before:scale-[2.5]
    before:rounded-[100%] before:transition-all before:duration-700 before:content-[""]
    before:translate-x-[150%] before:translate-y-[150%]
    hover:before:translate-x-0 hover:before:translate-y-0
    hover:scale-105 active:scale-95`,
    variantClasses[variant],
    className
  )

  if (asChild) {
    return (
      <Comp className={buttonClasses} {...props}>
        {children}
      </Comp>
    )
  }

  return (
    <Comp className={buttonClasses} {...props}>
      {icon}
      <span>{children}</span>
    </Comp>
  )
}

export default FlowHoverButton
