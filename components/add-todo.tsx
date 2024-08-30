"use client";
import { ChangeEvent, FC, useState } from "react";
import { CalendarClock, PlusIcon } from "lucide-react";

interface Props {
  createTodo: (value: string) => void;
}

const AddTodo: FC<Props> = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = async () => {
    createTodo(input);
    setInput("");
  };

  // Rendering the AddTodo component
  return (
    <div className="fixed rounded-md border border-gray-400 items-center justify-end flex gap-1 bottom-16 lg:w-[700px] md:w-[500px] sm:w-[300px] xs:w-[200px] dark:border-none dark:hover:bg-[#3B3B3B] dark:bg-[#212121] ">
      <button onClick={handleAdd} className=" h-12 px-3 mx-1 text-lg rounded font-medium flex flex-row items-center justify-center bg-slate-300 hover:bg-slate-600 hover:text-white dark:border-none dark:bg-[#212121] dark:hover:bg-[#92A4B1] dark:text-white dark:hover:text-black">
        <PlusIcon /> Tasks
      </button>
      <input
        className=" w-full h-14 px-2 py-1  rounded outline-none dark:border-none dark:bg-transparent "
        onChange={handleInput}
        type="text"
        value={input}
      />
      <button onClick={handleAdd} className=" h-12 px-3 mx-1 text-lg rounded font-medium flex flex-row items-center justify-center bg-slate-300dark:border-none dark:text-white">
        <CalendarClock />
      </button>
    </div>
  );
};

export default AddTodo;