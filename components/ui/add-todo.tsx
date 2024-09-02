"use client";
import { ChangeEvent, FC, useState } from "react";
import { PlusIcon } from "lucide-react";
import { CalendarForm } from "./date-picker";

interface Props {
  createTodo: (text: string, note?: string, plannedAt?: Date | null) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [task, setTask] = useState<string>("");

  const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAdd = async () => {
    if (task) {
      createTodo(task, "", selectedDate);
      setTask("");
      setSelectedDate(null)
    }
  };

  return (
    <div className="fixed bottom-0 dark:bg-[#121212] bg-white pr-[10%] p-4 h-[18%] w-[90%] xl:w-[80%] lg:w-[70%] md:w-[60%] sm:w-[50%] xs:w-[30%]">
      <div className=" rounded-xl border border-gray-400 items-center justify-end flex gap-1 w-full px-4 dark:border-none dark:hover:bg-[#3B3B3B] dark:bg-[#212121] ">
        <button onClick={handleAdd} className=" h-12 px-3 mx-1 text-lg rounded font-medium flex flex-row items-center justify-center bg-slate-300 hover:text-white dark:border-none dark:bg-[#212121] dark:text-slate-400 dark:hover:text-white">
          <PlusIcon /> <span className="hidden md:block">Tasks  </span>
        </button>
        <input
          className=" w-full h-14 px-2 py-1  rounded-xl outline-none dark:border-none dark:bg-transparent "
          onChange={handleTask}
          type="text"
          value={task}
        />
        <CalendarForm onDateSelect={handleDateSelect} text="Planned Date" />
      </div>
    </div>
  );
};

export default AddTodo;