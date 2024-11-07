import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'
import { formStyles } from '@/lib/formStyles'

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & { options: string[] }
>(({ className, options, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...props}
      ref={ref}
    >
      {options.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <RadioGroupPrimitive.Item
            id={option}
            value={option}
            className={cn(formStyles.radio, "h-4 w-4 rounded-full border border-gray-300 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" )}
          >
            <RadioGroupPrimitive.Indicator className={cn(formStyles.radio, "relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-full after:bg-primary" )} />
          </RadioGroupPrimitive.Item>
          <label htmlFor={option} className={cn(formStyles.radio, "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className )}>
            {option}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export { RadioGroup }