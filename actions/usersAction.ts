"use server";
import { revalidatePath } from "next/cache";
import { db } from "../db/drizzle";
import { users } from "../db/schema";

export const getAllUser = async () => {
  const data = await db.select().from(users);
  return data;
};

export const addUsers = async (id: string) => {
  await db.insert(users).values({
    id,
    name: "Abya",
    email:"abyalaxx@gmail.com",
  });

  revalidatePath("/");
};
