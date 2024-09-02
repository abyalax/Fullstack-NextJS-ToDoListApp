"use client";
import { ChangeEvent, useState } from "react"
import { Pencil, Save, TrashIcon, X } from "lucide-react";
import { formatDate } from "@/lib/utils"
import { useDetails } from "@/hooks/use-todo"
import { todoType } from "@/type/type";

interface Props {
  todos: {
    text: string,
    note?: string | null
    done: boolean,
    id: string
    createdAt: Date
    updatedAt: Date
    plannedAt: Date | null
  },
  deleteTodoItem: (id: string) => void
  toggleIsTodoDone: (id: string) => void
  changeTodoText: (id: string, text: string) => void
  handleOnClick: (todo: todoType) => void
}

const Todo = ({ todos, deleteTodoItem, toggleIsTodoDone, changeTodoText, handleOnClick }: Props) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todos.text);
  const [isDone, setIsDone] = useState(todos.done);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleIsDone = async () => {
    toggleIsTodoDone(todos.id);
    setIsDone((prev) => !prev);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    changeTodoText(todos.id, text);
    setEditing(false);
  };
  const handleCancel = () => {
    setEditing(false);
    setText(todos.text);
  };
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todos.id);
    }
  };
  return (
    <div className="flex w-full cursor-pointer items-center gap-2 p-4 border-gray-400 border-solid border rounded-xl dark:border-none dark:hover:bg-[#3B3B3B] dark:bg-[#212121]">
      <input
        type="checkbox"
        className="text-blue-200 rounded-full h-6 w-6 mb-2"
        checked={isDone}
        defaultChecked={todos.done}
        onChange={handleIsDone}
      />
      <div className="w-full rounded flex flex-col justify-around">
        <input
          onClick={handleEdit}
          type="text"
          value={text}
          defaultValue={todos.text}
          onChange={handleTextChange}
          readOnly={!editing}
          className={`${todos.done ? "line-through" : ""
            } outline-none read-only:border-transparent focus:border border-gray-400 rounded px-2 py-1 w-full dark:bg-transparent dark:border-none dark:focus:bg-[#3B3B3B] dark:hover:bg-[#3B3B3B] dark:text-white`}
        />
        <div className="flex flex-row gap-1 text-xs px-2">
          {todos.plannedAt ?
            <p>{"Planned for: " + formatDate(todos.plannedAt)}</p> :
            <p>{"Created at: " + formatDate(todos.createdAt ? todos.createdAt : new Date())}</p>
          }
        </div>
      </div>
      <div className="flex justify-end gap-1 ">
        {editing ? (
          <button onClick={handleSave} className="bg-transparent w-fit px-2 py-1 dark:hover:text-white dark:text-slate-600">
            <Save />
          </button>
        ) : (
          <button onClick={() => handleOnClick(todos)} className="bg-transparent w-fit px-2 py-1 dark:hover:text-white dark:text-slate-600 " >
            <Pencil />
          </button>
        )}
        {editing ? (
          <button onClick={handleCancel} className="bg-transparent w-fit px-2 py-1 dark:hover:text-white dark:text-slate-500 " >
            <X />
          </button>
        ) : (
          <button onClick={handleDelete} className="bg-transparent w-fit px-2 py-1 hover:text-red-500 dark:hover:text-white dark:text-slate-500 " >
            <TrashIcon size={22} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
