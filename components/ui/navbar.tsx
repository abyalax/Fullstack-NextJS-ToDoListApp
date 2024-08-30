import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "../main-nav";
import SearchBar from "../search-bar";
import SwitcherRole from "../role-switcher";


const Navbar = async () => {

    const { userId } = await auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-10 border-b bg-white dark:bg-[#121212] border-slate-600">
            <div className="flex h-16 items-center px-4">
                {/* <SwitcherRole/> */}
                <MainNav className="mx-6 " />
                <div className="ml-auto flex items-center space-x-4">
                    <SearchBar />
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
export default Navbar