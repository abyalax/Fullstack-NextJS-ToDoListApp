'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {

    const pathname = usePathname()

    const routes = [
        {
            href: "/home",
            label: "Home",
            active: pathname === "/home"
        },
        {
            href: "/task",
            label: "Task",
            active: pathname === "/task"
        },
    ]

    return (
        <nav className={cn(
            "flex items-center space-x-4 lg:space-x-6",
            className
        )}>
            {routes.map((route) => (
               <Link key={route.href} href={route.href} className={cn(
                "text-md transition-colors hover:text-md font-semibold",
                route.active ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
               )}>
               {route.label}
               </Link>
            ))}
        </nav>
    )
}