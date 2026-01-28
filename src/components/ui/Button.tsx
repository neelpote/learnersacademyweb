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
          'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95',
          {
            'bg-brand-maroon text-brand-silver hover:bg-opacity-90 shadow-brand-maroon/30': variant === 'primary',
            'bg-brand-silver text-brand-maroon border-2 border-brand-maroon hover:bg-brand-maroon hover:text-brand-silver shadow-brand-blue/20': variant === 'secondary',
            'border-2 border-brand-maroon bg-transparent text-brand-maroon hover:bg-brand-maroon hover:text-brand-silver shadow-brand-maroon/20': variant === 'outline',
          },
          {
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-6 text-base': size === 'md',
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