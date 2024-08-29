import { getAllUser } from "@/actions/usersAction";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/ui/navbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function SetUplayout({ children }: { children: React.ReactNode }) {

    const { userId, sessionId } = await auth()
    console.log({ userId, sessionId });

    if(!userId) {
        redirect("/sign-in")
    }

    const users = (await getAllUser()).find(user => user.id === userId)
    
    if (users) {
        redirect("/")
    }


    return (
        <div>
            <Navbar />
            <div className="flex flex-row gap-8">
                <div className="relative">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    );
}
