import React from 'react'

const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(
	({ className, ...props }, ref) => (
		<label
			ref={ref}
			className={`text-n-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 dark:text-green-4 ${className || ''}`}
			{...props}
		/>
	)
)

Label.displayName = 'Label'

export { Label }
