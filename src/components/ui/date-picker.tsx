import * as React from 'react';
import { format } from "date-fns";
import { IconCalendar as CalendarIcon } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, onChange, ...props }, ref) => {
    const [date, setDate] = React.useState<Date | undefined>();
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDateSelect = (newDate: Date | undefined) => {
      setDate(newDate);
      setIsOpen(false);
      if (onChange) {
        onChange({
          target: { value: newDate ? format(newDate, "yyyy-MM-dd") : "" }
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex items-center w-[280px] px-3 py-2 rounded-md border border-input bg-background",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 bg-white">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
          />
        </PopoverContent>
        <input
          type="date"
          ref={ref}
          {...props}
          value={date ? format(date, "yyyy-MM-dd") : ""}
          className="sr-only"
        />
      </Popover>
    );
  }
);

DatePicker.displayName = "DatePicker";

export { DatePicker };