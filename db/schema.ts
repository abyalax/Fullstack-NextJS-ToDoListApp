import { relations } from "drizzle-orm";
import { text, boolean, pgTable, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: text("id").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const todos = pgTable("todos", {
  id: text("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
  userId: text("user_id").notNull().references(() => users.id),
});

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, {
    fields: [todos.userId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos),
}));
