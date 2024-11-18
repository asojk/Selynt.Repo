/* eslint-disable no-undef */
/* eslint-disable tailwindcss/no-custom-classname */

'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

type Inputs = {
	firstName: string
	lastName: string
	email: string
	mobileNumber: string
	projectType: string[]
	consentToContact: boolean
	message: string
}

export default function ContactForm() {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
		setValue,
	} = useForm<Inputs>({
		defaultValues: {
			projectType: [],
		},
	})

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		setIsSubmitting(true)

		// Convert data to FormData
		const formData = new FormData()
		for (const key in data) {
			formData.append(key, data[key])
		}

		// Add hidden fields required by formsubmit.co
		formData.append('_captcha', 'false')
		formData.append('_subject', 'New form submission')
		formData.append('_autoresponse', 'Thank you for your submission. We will get back to you soon.')
		formData.append('_next', 'https://www.selynt.com')

		try {
			const response = await fetch('https://formsubmit.co/82120871942c24049c274ba8143a4f61', {
				method: 'POST',
				body: formData,
			})

			if (response.ok) {
				setIsModalOpen(true)
				reset()
			} else {
				console.error('Form submission failed')
			}
		} catch (error) {
			console.error('Error submitting form:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Card className="max-w-md px-content-padding md:max-w-lg lg:max-w-xl">
			<CardContent>
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-8">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="space-y-2">
							<Label htmlFor="firstName">First Name</Label>
							<Input
								id="firstName"
								{...register('firstName', { required: 'First name is required', maxLength: 80 })}
								placeholder="John"
							/>
							{errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
						</div>
						<div className="space-y-2">
							<Label htmlFor="lastName">Last Name</Label>
							<Input
								id="lastName"
								{...register('lastName', { required: 'Last name is required', maxLength: 100 })}
								placeholder="Doe"
							/>
							{errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^\S+@\S+$/i,
									message: 'Invalid email address',
								},
							})}
							placeholder="john.doe@example.com"
						/>
						{errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
					</div>
					<div className="space-y-2">
						<Label htmlFor="mobileNumber">Mobile Number</Label>
						<Input
							id="mobileNumber"
							type="tel"
							{...register('mobileNumber', {
								required: 'Mobile number is required',
								minLength: { value: 6, message: 'Mobile number must be at least 6 digits' },
								maxLength: { value: 12, message: 'Mobile number must not exceed 12 digits' },
								pattern: {
									value: /^[0-9]+$/,
									message: 'Invalid phone number',
								},
							})}
							placeholder="123456789"
						/>
						{errors.mobileNumber && <p className="text-sm text-red-500">{errors.mobileNumber.message}</p>}
					</div>
					<div className="space-y-2">
						<Label>Project Type</Label>
						<div className="flex flex-wrap gap-2">
							{['Website Tier 1', 'Website Tier 2', 'Branding', 'Combo', 'Unsure'].map((type) => (
								<Button
									key={type}
									type="button"
									variant={watch('projectType', []).includes(type) ? 'default' : 'outline'}
									className={`flex-shrink-0 flex-grow-0 basis-auto rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${
										watch('projectType', []).includes(type)
											? 'bg-p-3 text-white hover:bg-p-4 active:bg-p-5 dark:bg-p-3 dark:text-n-1 dark:hover:bg-p-4 dark:active:bg-p-5'
											: 'bg-white text-p-3 hover:bg-p-1 hover:text-white active:bg-p-2 dark:bg-n-8 dark:text-p-2 dark:hover:bg-p-2 dark:hover:text-n-1 dark:active:bg-p-3'
									}`}
									onClick={() => {
										const currentTypes = watch('projectType', [])
										const newTypes = currentTypes.includes(type)
											? currentTypes.filter((t) => t !== type)
											: [...currentTypes, type]
										setValue('projectType', newTypes, { shouldValidate: true })
									}}>
									{type}
								</Button>
							))}
						</div>

						{errors.projectType && <p className="text-sm text-red-500">{errors.projectType.message}</p>}
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Message</Label>
						<Textarea id="message" {...register('message')} placeholder="Your message here..." />
					</div>
				</form>
			</CardContent>
			<CardFooter>
				<Button
					onClick={handleSubmit(onSubmit)}
					type="submit"
					className="shadow-neu1/20 dark:shadow-custom-dark/20 w-full rounded-md bg-a-dark px-4 py-2 font-semibold text-white transition-colors hover:bg-s-dark dark:bg-s dark:text-n-900"
					disabled={isSubmitting}>
					{isSubmitting ? 'Submitting...' : 'Submit'}
				</Button>
			</CardFooter>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Submission Successful</DialogTitle>
						<DialogDescription>Thank you for your submission. We will get back to you soon.</DialogDescription>
					</DialogHeader>
					<Button onClick={() => setIsModalOpen(false)}>Close</Button>
				</DialogContent>
			</Dialog>
		</Card>
	)
}
