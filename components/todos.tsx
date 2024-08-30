"use client";
import { FC, useState } from "react";
import Todo from "./todo";
import AddTodo from "./ui/add-todo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "../actions/todoActions";
import { useAuth } from "@clerk/nextjs";
import { todoType } from "@/type/type";

interface Props {
  todos: todoType[];
}

const Todos: FC<Props> = ({ todos }) => {
  const { userId } = useAuth()
  // State to manage the list of todo items
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);
  // Function to create a new todo item
  const createTodo = (text: string) => {
    const id = `${Date.now() + Math.random()}`
    // const id = "24"
    if (userId) addTodo(id, text, userId)
    setTodoItems((prev) => [...prev, { id: id, text, done: false }]);
  };

  // Function to change the text of a todo item
  const changeTodoText = (id: string, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id == id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  // Function to toggle the "done" status of a todo item
  const toggleIsTodoDone = (id: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
    toggleTodo(id);
  };

  // Function to delete a todo item
  const deleteTodoItem = (id: string) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  // Rendering the Todo List component
  return (
    <>
      <main className="flex mx-auto w-full min-h-screen flex-col items-center px-16 pt-6">
        <div className="w-full flex flex-col mt-8 gap-2">
          <h1 className="text-3xl font-semibold">Welcome Back</h1>
          <h1>{"Here's a list of your tasks for this month!"}</h1>
          {todoItems.map((todo) => (
            <Todo
              key={todo.id}
              todos={todo}
              changeTodoText={changeTodoText}
              toggleIsTodoDone={toggleIsTodoDone}
              deleteTodoItem={deleteTodoItem}
            />
          ))}
          <span className="mb-11"/>
            <AddTodo createTodo={createTodo} />
        </div>
      </main>
    </>
  );
};

export default Todos;