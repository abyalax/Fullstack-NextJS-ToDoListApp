import { db } from "@/db/drizzle";
import { todos } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const { userId } = await auth();
        if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

        const res = await db.select().from(todos).where(eq(todos.userId, userId));
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.error("GET_ERROR", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
