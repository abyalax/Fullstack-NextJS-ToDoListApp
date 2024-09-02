"use client";
import { FC, useState } from "react";
import Todo from "./todo";
import { addTodo, deleteTodo, editTodo, toggleTodo } from "../../actions/todoActions";
import { useAuth } from "@clerk/nextjs";
import DetailsTodo from "./details";
import { useDetails } from "@/hooks/use-todo";
import { todoType } from "@/type/type";
import AddTodo from "../ui/add-todo";


interface Props {
  todos: todoType[];
}

const TodosList: FC<Props> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<todoType[]>(todos);
  // const [selectedTodo, setSelectedTodo] = useState<todoType | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<todoType>({} as todoType);
  const { userId } = useAuth();
  const detailsTodo = useDetails()

  const handleTodoClick = (todo: todoType) => {
    setSelectedTodo(todo);
};

  const createTodo = (text: string, note?: string, plannedAt?: Date | null) => {
    const id = `${Date.now() + Math.random()}`;
    const newTodo: todoType = { id, text, done: false, note: note || "", plannedAt: plannedAt || null, createdAt: new Date(), updatedAt: new Date() };
    if (userId) addTodo(id, text, userId,note, plannedAt);
    setTodoItems((prev) => [...prev, newTodo]);
  };

  const changeTodoText = (id: string, text: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id == id ? { ...todo, text } : todo))
    );
    editTodo(id, text);
  };

  const toggleIsTodoDone = (id: string) => {
    setTodoItems((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
    toggleTodo(id);
  };

  const deleteTodoItem = (id: string) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== id));
    deleteTodo(id);
  };

  return (
    <>
        <main className="flex mx-auto w-full min-h-screen flex-col items-center px-16 pt-6">
            <div className="w-full flex flex-col mt-8 gap-2">
                <h1 className="text-3xl font-semibold">Welcome Back</h1>
                <h1>{"Here's a list of your tasks for this month!"}</h1>
                {todoItems.map((todo) => (
                    <div key={todo.id} onClick={() => handleTodoClick(todo)}>
                        <Todo
                            todos={todo}
                            changeTodoText={changeTodoText}
                            toggleIsTodoDone={toggleIsTodoDone}
                            deleteTodoItem={deleteTodoItem} />
                    </div>
                ))}
                {selectedTodo && <DetailsTodo createTodo={createTodo} todos={selectedTodo} />}
            </div>
            <hr className="mt-52"/>
            {/* <span className="mt-32"/> */}
            <AddTodo createTodo={createTodo} />
        </main>
    </>
);
};

export default TodosList;
