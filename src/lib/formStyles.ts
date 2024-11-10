export const formStyles = {
	input:
		'shadow-input dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-n-1 px-3 py-2 text-sm text-n-900 dark:text-n-light transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:bg-p-dark dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600',

	label:
		'text-sm font-medium leading-none text-n-900 dark:text-n-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70',

	select:
		'shadow-input dark:placeholder-text-neutral-400 duration-400 flex h-10 w-full rounded-md border-none bg-n-2 px-3 py-2 text-sm text-n-900 dark:text-n-light appearance-none focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:bg-p-dark dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600',

	checkbox:
		'h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-950 focus:ring-offset-white dark:border-neutral-800 dark:bg-neutral-50 dark:focus:ring-neutral-300 dark:focus:ring-offset-neutral-950',

	radio: 'mt-2 mb-3 ml-2 text-white dark:text-n-1',

	textarea:
		'shadow-input dark:placeholder-text-neutral-400 duration-400 flex w-full rounded-md border-none bg-n-2 px-3 py-2 text-sm text-n-900 dark:text-n-light transition file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:bg-p-dark dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600',

	datePicker:
		'shadow-input dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-n-2 px-3 py-2 text-sm text-n-900 dark:text-n-light transition focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:bg-p-dark dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600',

	datePickerCalendar: {
		container: 'bg-white dark:bg-p-dark shadow-lg rounded-lg p-4 mt-2',
		header: 'flex justify-between items-center mb-4',
		headerButton: 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white',
		monthYear: 'font-semibold text-neutral-800',
		weekdays: 'grid grid-cols-7 gap-1 mb-2',
		weekday: 'text-center text-sm font-medium text-neutral-600 dark:text-neutral-400',
		days: 'grid grid-cols-7 gap-1',
		day: 'w-8 h-8 flex items-center justify-center rounded-full text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-zinc-700',
		selectedDay: 'bg-blue-500 text-white hover:bg-blue-600',
		todayDay: 'border border-blue-500',
		disabledDay: 'text-neutral-400 dark:text-neutral-600 cursor-not-allowed',
	},
}
