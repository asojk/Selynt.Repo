import { cn } from '@/lib/utils'
import { formStyles } from '@/lib/formStyles'
import * as React from 'react'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          formStyles.select,
          "flex h-10 w-full rounded-md border border-input bg-white dark:bg-n-3 px-3 py-2 text-sm ring-offset-background  text-n-9 dark:text-n-9 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    )
  }
)

Select.displayName = "Select"

export { Select }