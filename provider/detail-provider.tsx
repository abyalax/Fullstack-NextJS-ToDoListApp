"use client";
import { useEffect, useState } from "react";
import { useDetails } from "@/hooks/use-todo";
import { TodoType } from "@/dummyData";
import DetailsTodo from "@/components/todo/details";
import { addTodo } from "@/actions/todoActions";
import { useAuth } from "@clerk/nextjs";

export const DetailsTodoProvider = ({ todo }: { todo: TodoType | null }) => {
  const [isMount, setIsMount] = useState(false);
  const detailsTodo = useDetails()
  const { userId } = useAuth();

  const createTodo = (text: string, note?: string, plannedAt?: Date | null) => {
    const id = `${Date.now() + Math.random()}`;
    if (userId) addTodo(id, text, userId, note, plannedAt);
  };

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount || !detailsTodo.isOpen || !todo) {
    return null;
  }

  return <DetailsTodo createTodo={createTodo} />;
};
