import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";


export default async function SetUplayout({ children }: { children: React.ReactNode }) {

    const {userId, sessionId} = await auth()
    console.log({userId, sessionId});
    
    if (!userId) {
        redirect("/sign-in")
    }

    return (
        <>
            {children}
        </>
    );
}
