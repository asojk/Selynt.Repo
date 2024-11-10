export const formStyles = {

input: "",

label: "text-left items-start justify-start mx-auto w-full text-sm text-n-900",

select: "bg-white dark:bg-white shadow-input dark:placeholder-text-n-9 duration-400 flex h-10 w-full rounded-md border-none px-3 py-2 text-sm text-n-9 dark:text-n-9 apperance-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed group-hover/input:shadow-none dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600",

checkbox: "h-4 w-4 rounded border-n-9 text-neutral-900 focus:ring-neutral-950 focus:ring-offset-white dark:border-neutral-800 dark:bg-neutral-50 dark:focus:ring-neutral-300 dark:focus:ring-offset-neutral-950",

radio: "mt-2 ml-2 text-n-900 ",

textarea: "",

datePicker: "shadow-input dark:placeholder-text-n-900 placeholder-text-n-900 duration-400 flex h-10 w-full rounded-md border-none bg-white dark:bg-white px-3 py-2 text-sm text-n-900 dark:text-n-900 transition focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 group-hover/input:shadow-none dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600",

datePickerCalendar: {
  container: "bg-white shadow-lg rounded-lg p-4 mt-2",
  header: "flex justify-between items-center mb-4",
  headerButton: "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white",
  monthYear: "font-semibold text-neutral-800",
  weekdays: "grid grid-cols-7 gap-1 mb-2",
  weekday: "text-center text-sm font-medium text-neutral-600 dark:text-neutral-400",
  days: "grid grid-cols-7 gap-1",
  day: "w-8 h-8 flex items-center justify-center rounded-full text-sm text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-zinc-700",
  selectedDay: "bg-blue-500 text-white hover:bg-blue-600",
  todayDay: "border border-blue-500",
  disabledDay: "text-neutral-400 dark:text-neutral-600 cursor-not-allowed",
  },
};