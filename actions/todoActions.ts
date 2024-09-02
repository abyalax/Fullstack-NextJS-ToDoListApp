"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "../db/drizzle";
import { todos } from "../db/schema";

export const getData = async (id: string) => {
  const data = await db.select().from(todos).where(eq(todos.userId, id));
  return data;
};

export const addTodo = async (id: string, text: string, userId: string, note?: string, plannedAt?: Date | null) => {
  await db.insert(todos).values({
    id,
    text,
    userId,
    note,
    plannedAt
  });
};

export const deleteTodo = async (id: string) => {
  await db.delete(todos).where(eq(todos.id, id));
  revalidatePath("/");
};

export const toggleTodo = async (id: string) => {
  await db
    .update(todos)
    .set({
      done: not(todos.done),
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: string, text: string, note?: string) => {
  await db
    .update(todos)
    .set({
      text,
      note,
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
};