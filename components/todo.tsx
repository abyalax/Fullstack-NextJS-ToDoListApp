"use client";
import { ChangeEvent, useState } from "react";
import { todoType } from "../type/type";
import { Pencil, Save, TrashIcon, X } from "lucide-react";

interface Props {
  todos: todoType;
  changeTodoText: (id: string, text: string) => void;
  toggleIsTodoDone: (id: string, done: boolean) => void;
  deleteTodoItem: (id: string) => void;
}

const Todo = ({ todos, changeTodoText, toggleIsTodoDone, deleteTodoItem }: Props) => {
  // State for handling editing mode
  const [editing, setEditing] = useState(false);
  // State for handling text input
  const [text, setText] = useState(todos.text);
  // State for handling "done" status
  const [isDone, setIsDone] = useState(todos.done);
  // Event handler for text input change
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // Event handler for toggling "done" status
  const handleIsDone = async () => {
    toggleIsTodoDone(todos.id, !isDone);
    setIsDone((prev) => !prev);
  };

  // Event handler for initiating the edit mode
  const handleEdit = () => {
    setEditing(true);
  };

  // Event handler for saving the edited text
  const handleSave = async () => {
    changeTodoText(todos.id, text);
    setEditing(false);
  };

  // Event handler for canceling the edit mode
  const handleCancel = () => {
    setEditing(false);
    setText(todos.text);
  };

  // Event handler for deleting a todo item
  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this todo?")) {
      deleteTodoItem(todos.id);
    }
  };

  // Rendering the Todo component
  return (
    <div className="flex w-full items-center gap-2 p-4 border-gray-400 border-solid border rounded-lg dark:border-none dark:hover:bg-[#3B3B3B] dark:bg-[#212121]">
      <input
        type="checkbox"
        className="text-blue-200 rounded-full h-6 w-6"
        checked={isDone}
        onChange={handleIsDone}
      />
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        readOnly={!editing}
        className={`${todos.done ? "line-through" : ""
          } outline-none read-only:border-transparent focus:border border-gray-400 rounded px-2 py-1 w-full dark:bg-transparent dark:border-none dark:focus:bg-[#3B3B3B] dark:hover:bg-[#3B3B3B] dark:text-white`}
      />
      <div className="flex justify-end gap-1 ">
        {editing ? (
          <button onClick={handleSave} className="bg-transparent w-fit px-2 py-1 dark:hover:text-white dark:text-slate-600">
            <Save />
          </button>
        ) : (
          <button onClick={handleEdit} className="bg-transparent w-fit px-2 py-1 dark:hover:text-white dark:text-slate-600 " >
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