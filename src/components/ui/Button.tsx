import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-brand-red text-white hover:bg-red-700': variant === 'primary',
            'bg-white text-brand-red border border-brand-red hover:bg-brand-red hover:text-white dark:bg-black dark:text-brand-red dark:border-brand-red': variant === 'secondary',
            'border border-brand-red bg-transparent text-brand-red hover:bg-brand-red hover:text-white': variant === 'outline',
          },
          {
            'h-9 px-3 text-sm': size === 'sm',
            'h-12 px-5 text-base': size === 'md',
            'h-14 px-8 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }