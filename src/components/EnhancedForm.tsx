import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { formStyles } from '@/lib/formStyles';
import { DatePicker } from '@/components/ui/date-picker';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/textarea';
import { RadioGroup } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const schema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  preferredDate: z.string().optional(),
  contactPreference: z.enum(['Morning', 'Afternoon']).optional(),
  projectType: z.enum(['Website Tier 1', 'Website Tier 2', 'Branding Tier 1', 'Branding Tier 2', 'Branding Tier 3', 'Combo', 'Unsure']).optional(),
  comments: z.string().optional(),
  okToContact: z.boolean()
});

type FormData = z.infer<typeof schema>;

export const EnhancedForm: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      preferredDate: '',
      contactPreference: 'Morning',
      projectType: 'Website Tier 1',
      comments: '',
      okToContact: false,
    },
  });

  const onSubmit = handleSubmit(async (data: FormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('82120871942c24049c274ba8143a4f61', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        console.log('Form submitted successfully');
        reset(); // Reset form after successful submission
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    }
  });

  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto p-4 sm:p-6 bg-n-light dark:bg-g-900 rounded-lg shadow-custom dark:shadow-custom-dark">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="firstName" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
            First Name
          </Label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="firstName"
                className={cn(formStyles.input, "w-full px-3 py-2 bg-white dark:bg-g-800 border border-g-300 dark:border-g-700 rounded-md shadow-sm focus:ring-a-light focus:border-a-light")}
              />
            )}
          />
          {errors.firstName && <p className="mt-1 text-s-dark">{errors.firstName.message}</p>}
        </div>

        <div>
          <Label htmlFor="lastName" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
            Last Name
          </Label>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                id="lastName"
                className={cn(formStyles.input, "w-full px-3 py-2 bg-white dark:bg-g-800 border border-g-300 dark:border-g-700 rounded-md shadow-sm focus:ring-a-light focus:border-a-light")}
              />
            )}
          />
          {errors.lastName && <p className="mt-1 text-s-dark">{errors.lastName.message}</p>}
        </div>
      </div>

      <div className="mb-4">
        <Label htmlFor="email" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">Email</Label>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <input {...field} id="email" type="email" className={cn(formStyles.input, "w-full px-3 py-2 bg-white dark:bg-g-800 border border-g-300 dark:border-g-700 rounded-md shadow-sm focus:ring-a-light focus:border-a-light")} />
          )} />
        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div className="mt-6">
        <Label htmlFor="preferredDate" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
          Preferred Contact Date (Optional)
        </Label>
        <Controller
          name="preferredDate"
          control={control}
          render={({ field }) => (
            <DatePicker
              {...field}
              id="preferredDate"
              className={cn(formStyles.datePicker, "w-full")}
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Label className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
          Contact Preference
        </Label>
        <Controller
          name="contactPreference"
          control={control}
          render={({ field }) => (
            <RadioGroup
              options={['Morning', 'Afternoon']}
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-col space-y-2"
            />
          )}
        />
      </div>

      <div className="mb-4">
        <Label htmlFor="projectType" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
          Project Type
        </Label>
        <Controller
          name="projectType"
          control={control}
          render={({ field }) => (
            <Select
              id="projectType"
              options={[
                'Website Tier 1',
                'Website Tier 2',
                'Branding Tier 1',
                'Branding Tier 2',
                'Branding Tier 3',
                'Combo',
                'Unsure'
              ]}
              {...field}
              className={cn(formStyles.select, "w-full")}
            />
          )}
        />
        {errors.projectType && <p className="mt-1 text-s-dark">{errors.projectType.message}</p>}
      </div>

      <div className="mb-4">
        <Label htmlFor="comments" className="block text-sm font-medium text-n-800 dark:text-n-200 mb-1">
          Additional Comments
        </Label>
        <Controller
          name="comments"
          control={control}
          render={({ field }) => (
            <TextArea
              id="comments"
              {...field}
              className={cn(formStyles.textarea, "w-full px-3 py-2 bg-white dark:bg-g-800 border border-g-300 dark:border-g-700 rounded-md shadow-sm focus:ring-a-light focus:border-a-light")}
              placeholder="Any additional information..."
            />
          )}
        />
      </div>
<div className='grid grid-cols-[auto, 1fr] gap-2 items-center'>
  <div className="flex items-center">
    <Label htmlFor="okToContact" className="text-sm text-n-800 dark:text-n-200 mr-2">
      OK to contact
    </Label>
    <Controller
      name="okToContact"
      control={control}
      render={({ field }) => (
        <Checkbox
          id="okToContact"
          checked={field.value}
          onCheckedChange={field.onChange}
          className={cn(formStyles.checkbox, "h-4 w-4 rounded border-2 border-g-300 dark:border-g-700")}
        />
      )}
    />
  </div>

  <button
    type="submit"
    disabled={submitStatus === 'loading'}
    className={cn(
      "w-full px-4 py-2 bg-a-dark text-white rounded-md shadow-sm hover:bg-a-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-a-light transition duration-150 ease-in-out",
      submitStatus === 'loading' && "opacity-50 cursor-not-allowed"
    )}
  >
    {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
  </button>
</div>

{errors.okToContact && <p className="mt-1 text-s-dark">{errors.okToContact.message}</p>}

{submitStatus === 'success' && (
  <p className="mt-4 text-green-600 dark:text-green-400">Form submitted successfully!</p>
)}
{submitStatus === 'error' && (
  <p className="mt-4 text-red-600 dark:text-red-400">Error submitting form. Please try again.</p>
)}

</form>

  )
}