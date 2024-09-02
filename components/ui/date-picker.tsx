import { CalendarClock } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn, formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";

const FormSchema = z.object({
  plannedDate: z.date({
    required_error: "date is required.",
  }),
});

interface CalendarFormProps {
  onDateSelect: (date: Date) => void;
  text: string
}

export function CalendarForm({ onDateSelect, text }: CalendarFormProps) {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const now = new Date();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(now.getFullYear() + 1);
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  function handleDateSelect(date: Date | undefined) {
    if (date) {
      form.setValue("plannedDate", date);
      onDateSelect(date);
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-8">
        <FormField
          control={form.control}
          name="plannedDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-max pl-3 text-left font-normal rounded-xl bg-slate-300 hover:text-white dark:border-none dark:bg-[#212121] dark:text-slate-400 dark:hover:text-white",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value ? (
                      formatDate(field.value)
                    ) : (
                      <span className="hidden lg:block">{text}</span>
                    )}
                    <CalendarClock className="ml-3 mr-2" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 pb-3" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={handleDateSelect}
                    disabled={date => date < yesterday || date > oneYearFromNow}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
