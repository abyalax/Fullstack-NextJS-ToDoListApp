import { UserButton } from "@clerk/nextjs"
import { ModeToggle } from "../mode-toggle";
import { MainNav } from "./main-nav";
import Search from "../search";

const Navbar = () => {

    return (
        <div className="fixed top-0 left-0 right-0 z-10 border-b bg-white dark:bg-[#121212] border-slate-600">
            <div className="flex h-16 items-center justify-around px-4">
                {/* <SwitcherRole/> */}
                <MainNav className="mx-6 mr-auto" />
                <Search/>
                <div className="ml-auto flex items-center space-x-4">
                    <ModeToggle />
                    <UserButton afterSignOutUrl="/" />
                </div>
            </div>
        </div>
    )
}
export default Navbar