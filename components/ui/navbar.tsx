import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";


const Navbar = async () => {

    const { userId } = await auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    return (
        <div className="border-b border-slate-600">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6 " />
                <div className="ml-auto flex items-center space-x-4">
                <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
export default Navbar