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
      className={cn('flex space-x-4', className)}
      {...props}
      ref={ref}
    >
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <RadioGroupPrimitive.Item
            id={option}
            value={option}
            className={cn(
              "h-4 w-4 rounded-full border border-gray-300 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "relative",
              formStyles.radio
            )}
          >
            <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={option}
            className={cn(
              "ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
              formStyles.radio
            )}
          >
            {option}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export { RadioGroup }