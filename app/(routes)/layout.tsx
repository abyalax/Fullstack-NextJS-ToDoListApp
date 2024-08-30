import { getAllUser } from "@/actions/usersAction";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/ui/navbar";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function SetUplayout({ children }: { children: React.ReactNode }) {

    const { userId } = await auth()
    const data = await currentUser()

    if (!userId) {
        redirect("/sign-in")
    }

    const dataUser = (await getAllUser()).find(user => user.id === userId)

    if (data && !dataUser && data.firstName) {
        const user = {
            id: data?.id,
            name: data.firstName,
            email: data?.emailAddresses[0]?.emailAddress
        }

        if (!dataUser && user) {
            await db.insert(users).values(user)
        }

    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-row ">
                <div className="relative">
                    <Sidebar />
                </div>
                <div className="pl-0 pt-8 w-full sm:pl-64">
                    {children}
                </div>
            </div>
        </div>
    );
}
