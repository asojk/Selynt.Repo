import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { formStyles } from '@/lib/formStyles'
import { DatePicker } from '@/components/ui/date-picker'
import { Select } from '@/components/ui/select'
import { TextArea } from '@/components/ui/textarea'
import { RadioGroup } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const schema = z.object({
	firstName: z.string().min(1, 'First name is required'),
	lastName: z.string().min(1, 'Last name is required'),
	email: z.string().email('Invalid email address'),
	company: z.string().optional(),
	phone: z.string().optional(),
	preferredDate: z.string().optional(),
	contactPreference: z.enum(['Morning', 'Afternoon']).optional(),
	projectType: z
		.enum([
			'Website Tier 1',
			'Website Tier 2',
			'Branding Tier 1',
			'Branding Tier 2',
			'Branding Tier 3',
			'Combo',
			'Unsure',
		])
		.optional(),
	comments: z.string().optional(),
	okToContact: z.boolean(),
})

type FormData = z.infer<typeof schema>

export const EnhancedForm: React.FC = () => {
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
	const {
		control,
		formState: { errors },
		watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      preferredDate: '',
      contactPreference: undefined,
      projectType: undefined,
      comments: '',
      okToContact: false,
    },
  })
	const okToContact = watch('okToContact')

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setSubmitStatus('loading')

		const form = event.currentTarget
		const formData = new FormData(form)

		try {
			const response = await fetch(form.action, {
				method: form.method,
				body: formData,
				headers: {
					Accept: 'application/json',
				},
			})

			if (response.ok) {
				setSubmitStatus('success')
				form.reset()
			} else {
				setSubmitStatus('error')
			}
		} catch (error) {
			console.error('Submission error:', error)
			setSubmitStatus('error')
		}
	}

	return (
		<form
			action="https://formsubmit.co/82120871942c24049c274ba8143a4f61"
			method="POST"
			onSubmit={handleSubmit}
			className="mx-auto max-w-xl rounded-lg p-6 shadow-lg bg-B antialiased dark:bg-B-dark lg:subpixel-antialiased ">
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_subject" value="New form submission" />
			<input type="hidden" name="_autoresponse" value="Thank you for your submission. We will get back to you soon." />
			<input type="hidden" name="_next" value="https://www.selynt.com" />

			<div className="space-y-6">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
					<FormField control={control} name="firstName" label="First Name" error={errors.firstName} />
					<FormField control={control} name="lastName" label="Last Name" error={errors.lastName} />
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormField control={control} name="email" label="Email" type="email" error={errors.email} />
          <div className="mb-4">
  <Label className="block text-sm font-medium mb-1">
    Contact Preference
  </Label>
  <Controller
    name="contactPreference"
    control={control}
              render={({ field }) => (
      <div className='h-10 px-2 py-3 w-full rounded-md bg-white flex items-center justify-between'>
      <RadioGroup
        options={['Morning', 'Afternoon']}
        onValueChange={field.onChange}
        value={field.value}
        id='contactPreference'
        name='contactPreference'
        className={cn(
          formStyles.radio,
          'w-full focus:border-a-light focus:ring-a-light my-1'
        )}
      />
                </div>
    )}
  />
</div>
          </div>

				<div>
					<Label htmlFor="preferredDate" className="text-sm font-medium">
						Preferred Contact Date (Optional)
					</Label>
					<Controller
						name="preferredDate"
						control={control}
						render={({ field }) => (
							<DatePicker
								{...field}
								className={cn(
									formStyles.datePicker,
									'mt-1 w-full rounded-md focus:border-a-light focus:ring-a-light'
								)}
							/>
						)}
					/>
				</div>



<div className="mb-4">
  <Label htmlFor="projectType" className="block text-sm font-medium mb-1 ">
    Project Type
  </Label>
  <Controller
    name="projectType"
    control={control}
    render={({ field }) => (
      <Select
        id="projectType"
        {...field}
        className={cn(formStyles.select, "w-full")}
      >
        <option value="" >Select a project type</option>
        <option value="Website Tier 1">Website Tier 1</option>
        <option value="Website Tier 2">Website Tier 2</option>
        <option value="Branding Tier 1">Branding Tier 1</option>
        <option value="Branding Tier 2">Branding Tier 2</option>
        <option value="Branding Tier 3">Branding Tier 3</option>
        <option value="Combo">Combo</option>
        <option value="Unsure">Unsure</option>
      </Select>
    )}
  />
  {errors.projectType && <p className="mt-1 text-s-dark">{errors.projectType.message}</p>}
</div>

				<div>
					<Label htmlFor="comments" className="text-sm font-medium ">
						Additional Comments
					</Label>
					<Controller
						name="comments"
						control={control}
						render={({ field }) => (
							<TextArea
								{...field}
								placeholder="Any additional information..."
								className={cn(
									formStyles.textarea,
									'mt-1 w-full rounded-md shadow-sm focus:border-a-light focus:ring-a-light'
								)}
							/>
						)}
					/>
				</div>

        <div className="flex justify-center items-center">
  <div className="inline-flex items-center space-x-2">
    <Controller
      name="okToContact"
      control={control}
      render={({ field }) => (
        <Checkbox
          id="okToContact"
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      )}
    />
    <Label
      htmlFor="okToContact"
      className="text-sm text-n-900 px-2 py-1 rounded-md items-center justify-center"
    >
      I consent to contact
    </Label>
  </div>
</div>

				<button
					type="submit"
					name="submit"
					id="submit"
					disabled={!okToContact || submitStatus === 'loading'}
					className={cn(
						'w-full rounded-md bg-a-dark px-4 py-2 text-white transition-colors hover:bg-s-dark font-semibold shadow-neu1/20 dark:bg-s-dark dark:text-n-900 dark:shadow-custom-dark/20',
     //* mt-8 w-full max-w-48 rounded-lg border-[1px] border-s bg-a-dark py-4 font-semibold uppercase text-white shadow-neu1 dark:border-[1px] dark:border-p dark:bg-s dark:text-n-900 dark:shadow-custom-dark *//

						(!okToContact || submitStatus === 'loading') && 'cursor-not-allowed opacity-50'



					)}>
					{submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
				</button>

				{submitStatus === 'success' && (
					<div className="mt-4 rounded bg-green-100 p-4 text-green-700">
						Thank you for your submission. We will get back to you soon.
					</div>
				)}

				{submitStatus === 'error' && (
					<div className="mt-4 rounded bg-red-100 p-4 text-red-700">
						There was an error submitting the form. Please try again.
					</div>
				)}
			</div>
		</form>
	)
}

const FormField: React.FC<{
	control: any
	name: string
	label: string
	error?: any
	type?: string
}> = ({ control, name, label, error, type = 'text' }) => (
	<div>
		<Label htmlFor={name} className="text-sm font-medium ">
			{label}
		</Label>
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<input
					{...field}
					type={type}
					id={name}
					className={cn(
						formStyles.input,
						'mt-1 w-full rounded-md px-3 py-2 shadow-sm focus:border-a-light focus:ring-a-light',
						error && 'border-red-500'
					)}
				/>
			)}
		/>
		{error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
	</div>
)