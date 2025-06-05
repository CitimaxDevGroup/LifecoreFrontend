import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { DayPicker } from "react-day-picker";

import { buttonVariants } from "../../components/ui/button";
import { cn } from "@/lib/utils";

import { enUS } from "date-fns/locale"; // Required for localization

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  date?: number;
};

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <div className="flex justify-center">
      <DayPicker
        showOutsideDays={showOutsideDays}
        locale={enUS} // uses default English locale
        className={cn("p-4", className)}
        classNames={{
          months:
            "flex flex-col sm:flex-row space-y-8 sm:space-x-10 sm:space-y-0 justify-center",
          month: "space-y-4",
          caption: "flex justify-center items-center gap-2",
          caption_label: "text-sm font-medium",
          nav: "flex gap-2 items-center",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-70 hover:opacity-100"
          ),
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            "text-muted-foreground w-full text-xs font-medium flex-1 text-center",
          row: "flex w-full mt-2",
          cell: "text-center text-sm p-0 relative flex-1 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
          ),
          day_selected:
            "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "text-muted-foreground opacity-50",
          day_disabled: "text-muted-foreground opacity-50",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        {...props}
      />
    </div>
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
