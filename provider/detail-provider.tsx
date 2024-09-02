"use client";
import Details from "@/components/todo/details";
import { useEffect, useState } from "react";
import { useDetails } from "@/hooks/use-todo";
import { TodoType } from "@/dummyData";

export const DetailsTodoProvider = ({ todo }: { todo: TodoType | null }) => {
  const [isMount, setIsMount] = useState(false);
  const detailsTodo = useDetails()

  useEffect(() => {
    setIsMount(true);
  }, []);

  if (!isMount || !detailsTodo.isOpen || !todo) {
    return null;
  }

  return <Details todos={todo} />;
};
