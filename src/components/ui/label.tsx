'use client'
import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@/lib/utils'
import { formStyles } from '@/lib/formStyles'

const Label = React.forwardRef<
	React.ElementRef<typeof LabelPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
	<LabelPrimitive.Root
		ref={ref}
		className={cn(formStyles.input,
			'text-sm font-medium leading-none text-n-900 dark:text-n-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
			className
		)}
		{...props}
	/>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
